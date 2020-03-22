var data;

function displayParties() {
    $.ajax({
        method: "POST",
        url: "ajax/users.ajax.php?act=getParties",
        type: "POST",
        dataTyp1e: 'json'
    }).done(function(response) {
        $("#game_selected").empty();
        response = JSON.parse(response);
        console.log(response);
        if(Object.keys(response).length == 0) return;
        data = response[0]["data"];
        var index = 1;
        response.forEach(function(elt) {
            var nbPlace = (elt["data"]["joueur2"]["username"] == "" ? "(1/2)" : "(2/2)");
            var participe = elt["data"]["joueur2"]["username"] == session["username"] || elt["data"]["joueur1"]["username"] == session["username"];
            var acces = (nbPlace == "(1/2)") || participe || session["admin"];
            console.log("www");
            console.log(nbPlace + " - " + participe + " - " + acces);
            console.log("^^^"); 
            var htmlText = (index) + " . «"+decodeURI(elt["nom"])+"» de "+elt["data"]["joueur1"]["username"] + " " + nbPlace;
            if(acces) {
                $("#game_selected").append("<option value='"+elt["id"]+"'>"+htmlText+"</option>");
                index++;
            }

        });
    });
}

$(document).ready(function () {
    if(session.length == 0) window.location.replace("index.php");
    displayParties();
    if(session["admin"] == false || session.length == 0) {
        $("#admin_supp").hide();
    } else {
        $("#admin_supp").click(function() {
            var id = $("#game_selected").find("option:selected").val();
            
            if(id != undefined) {
                $.ajax({
                    method: "POST",
                    url: "ajax/users.ajax.php?act=suppPartie",
                    data: {'id' : id},
                    type: "POST",
                    dataTyp1e: 'json'
                }).done(function(response) {
                    console.log(response);
                    displayParties();
                });
            }
        });
    }
});

$("#lobbyForm").submit(function(e) {
    e.preventDefault();

    var values = convertFormData($(this).serialize());
    if(values["game_selected"] == undefined) {
        alert("N'oubliez pas de selectionner une partie !");
        return;
    }

    $("#lobbyForm").unbind().submit();
});

$("#creerPartieForm").submit(function(e) {
    e.preventDefault();

    var values = convertFormData($(this).serialize());

    initRochers();
    initPlateau();
    initJoueurs();
    joueur1.setUserID(session["id"]);
    var partie = new Partie(plateau, joueur1, joueur2);
    values["data"] = partie;
    console.log(partie);

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
        displayParties();
      } else {
        alert("Erreur !");
      }
      console.log("ajax done !");
      console.log("Result :");
      console.log(response);
    });

});