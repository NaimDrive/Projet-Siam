class Partie {

    constructor(plateau, joueur1, joueur2) {
        this.plateau = plateau;
        this.joueur1 = joueur1;
        this.joueur2 = joueur2;
    }

    save() {
        var values = new Array();
        values["id"] = $("#game_id").val();
        values["data"] = partie;
        console.log(values);
        /*$.ajax({
            method: "POST",
            url: "ajax/users.ajax.php?act=savePartie",
            data: values,
            type: "POST",
            dataTyp1e: 'json',
            async: false
        }).done(function(response) {
            // console.log("ajax done !");
            // console.log("Result :");
            response = JSON.parse(response)
            // console.log(response);
            partieFromJSON(response["data"]);
            animauxFromJSON(partie["joueur1"], joueur1);
            animauxFromJSON(partie["joueur2"], joueur2);
            tableauFromJSON(partie["plateau"]);
            console.log(partie);
        });*/

    }
}