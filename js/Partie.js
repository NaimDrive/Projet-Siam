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
        $.ajax({
            method: "POST",
            url: "ajax/users.ajax.php?act=savePartie",
            data: values,
            type: "POST",
            dataTyp1e: 'json',
            async: false
        }).done(function(response) {
          
            // initPlayerImagesListener(joueur1);
            // initPlayerImagesListener(joueur2);
        });

    }

    actualiserTour(joueur) {
        if(joueur.getUserID() != parseInt(session["id"])) {
            removeAllListeners();
        }
        $("#tour_joueur").empty();
        $("#tour_joueur").html("<i><u>"+joueurCourant.getUsername() + " (J"+joueurCourant.getId()+")</u></i>");
    }

    changementDeTour() {
        if(joueurCourant.getId() == this.joueur1.getId()) {
            joueurCourant = this.joueur2;
            removeJoueurListeners(1);
        } else {
            joueurCourant = this.joueur1;
            removeJoueurListeners(2);
        }
        initPlayerImagesListener(joueurCourant);
        this.actualiserTour(joueurCourant);
        
    }

}