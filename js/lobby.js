var data;

function joueursFromJSON(json) {
    joueur1 = new Player(json["joueur1"]["username"], json["joueur1"]["animal"], json["joueur1"]["id"], json["joueur1"]["pions"]);
    joueur2 = new Player(json["joueur2"]["username"], json["joueur2"]["animal"], json["joueur2"]["id"], json["joueur2"]["pions"]);
}

function plateauFromJSON(json) {
    plateau = new Plateau(5, json["plateau"]["tableau"]);
}

function partieFromJSON(json) {
    joueursFromJSON(json);
    plateauFromJSON(json);
    partie = new Partie(plateau, joueur1, joueur2);
}

function animauxFromJSON(json) {
    var pionJ = new Array();
    json["pions"].forEach(function(e) {
        pionJ.push(new Animaux(e["orientation"], json["animal"]));
    });
    joueur1["pions"] = pionJ;
}

function displayParties() {
    $.ajax({
        method: "POST",
        url: "ajax/users.ajax.php?act=getParties",
        type: "POST",
        dataTyp1e: 'json'
    }).done(function(response) {
        response = JSON.parse(response);
        data = response[0]["data"];
    
        response.forEach(function(elt, index) {
            var nbPlace = (elt["data"]["joueur2"]["username"] == "" ? "(1/2)" : "(2/2)");
            var htmlText = (index+1) + " . «"+decodeURI(elt["nom"])+"» de "+elt["data"]["joueur1"]["username"] + " " + nbPlace;
            // console.log(htmlText);
            $("#game_selected").append("<option value='"+elt["id"]+"'>"+htmlText+"</option>");
        });
    });
}

$(document).ready(function () {
    displayParties();
});

$("#lobbyForm").submit(function(e) {
    e.preventDefault();

    var values = convertFormData($(this).serialize());
    if(values["game_selected"] == undefined) {
        alert("N'oubliez pas de selectionner une partie !");
        return;
    }
    // console.log(values["game_selected"] == undefined);
    

    $.ajax({
        method: "POST",
        url: "ajax/users.ajax.php?act=getPartie",
        data: values,
        type: "POST",
        dataTyp1e: 'json'
    }).done(function(response) {
        // console.log("ajax done !");
        // console.log("Result :");
        response = JSON.parse(response)
        // console.log(response);
        partieFromJSON(response["data"]);
        animauxFromJSON(partie["joueur1"]);
        animauxFromJSON(partie["joueur2"]);
        console.log(partie["plateau"]);
    });
    // $("#lobbyForm").unbind().submit();
});

$("#creerPartieForm").submit(function(e) {
    e.preventDefault();

    var values = convertFormData($(this).serialize());

    initRochers();
    initPlateau();
    initJoueurs();
    var partie = new Partie(plateau, joueur1, joueur2);
    values["data"] = partie;

    $.ajax({
        method: "POST",
        url: "ajax/users.ajax.php?act=creerPartie",
        data: values,
        type: "POST",
        dataTyp1e: 'json'
    }).done(function(response) {
      if(response != "false") {
        $("#creerPartieForm")[0].reset();
        $("#closeCreerPartie").click();
      } else {
          alert("Erreur !");
      }
      console.log("ajax done !");
      console.log("Result :");
      console.log(response);
    });

});