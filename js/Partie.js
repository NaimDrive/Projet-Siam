class Partie {

    constructor(plateau, joueur1, joueur2) {
        this.plateau = plateau;
        this.joueur1 = joueur1;
        this.joueur2 = joueur2;
    }

    save() {
        var values = {};
        values["id"] = $("#game_id").val();
        values["data"] = partie;
        values["joueurCourant"] = joueurCourant.id;
        console.log(values);
        $.ajax({
            method: "POST",
            url: "ajax/users.ajax.php?act=savePartie",
            data: values,
            type: "POST",
            dataTyp1e: 'json',
            async: false
        }).done(function(response) {
            console.log("Result :");
            console.log(response);
          
            // initPlayerImagesListener(joueur1);
            // initPlayerImagesListener(joueur2);
        });

    }

    actualiserTour(joueur) {
        console.log("--- Actualisation tour ---");
        console.log(joueur.getUserID() == parseInt(session["id"]));
        if(joueur.getUserID() != parseInt(session["id"])) {
            console.log("je passe pour tout casser !");
            removeAllListeners();
        } else {
            console.log("C'est mon tour");
        }
        $("#tour_joueur").empty();
        $("#tour_joueur").text(joueurCourant.getUsername() + " (J"+joueurCourant.getId()+")");
        console.log("--- ^^^^^^^^^^^^^^^^^^ ---");
    }

    changementDeTour() {
        console.log("--- vvvvvvvvvvvvvvvvvv ---");
        console.log(joueurCourant.getId() == joueur1.getId());
        if(joueurCourant.getId() == this.joueur1.getId()) {
            console.log("1->2");
            joueurCourant = this.joueur2;
            removeJoueurListeners(1);
            // this.actualiserTour(joueurCourant);
        } else {
            console.log("2->1");
            joueurCourant = this.joueur1;
            removeJoueurListeners(2);
        }
        console.log(joueurCourant);
        console.log("--- ^^^^^^^^^^^^^^^^^^ ---");
        initPlayerImagesListener(joueurCourant);
        this.actualiserTour(joueurCourant);
        
    }

}