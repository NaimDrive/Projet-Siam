var data;

function displayParties() {
    $.ajax({
        method: "POST",
        url: "ajax/users.ajax.php?act=getParties",
        type: "POST",
        dataTyp1e: 'json'
    }).done(function(response) {
        response = JSON.parse(response);
        if(Object.keys(response).length == 0) return;
        data = response[0]["data"];
    
        $("#game_selected").empty();
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

    $("#lobbyForm").unbind().submit();
});

$("#creerPartieForm").submit(function(e) {
    e.preventDefault();

    var values = convertFormData($(this).serialize());

    initRochers();
    initPlateau();
    initJoueurs();
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