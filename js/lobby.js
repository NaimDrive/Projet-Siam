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
    
        response.forEach(function(elt, index) {
            var nbPlace = (elt["data"]["joueur2"]["username"] == "" ? "(1/2)" : "(2/2)");
            var htmlText = (index+1) + " . «"+decodeURI(elt["nom"])+"» de "+elt["data"]["joueur1"]["username"] + " " + nbPlace;
            // console.log(htmlText);
            $("#game_selected").append("<option value='"+elt["id"]+"'>"+htmlText+"</option>");
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