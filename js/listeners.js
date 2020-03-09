/**
 * Bouton qui permet de placer un pion sur le plateau.
 */
function placerPionListener() {

    $("#bouton_placer_pion").click(function() {
        if(joueurCourant != null && pionCourant != null && caseCourante != null) {
            let ids = caseCourante.attr('id').split('_');
            let i = ids[1];
            let j = ids[2];
            if(plateau.tableau[i][j].toString() == "NullObject") {
                plateau.placerPion(pionCourant, i, j);
                refresh();
                initPlayerImagesListener(joueurCourant);
            }
        }
    });
}

/**
 * Bouton qui permet d'enlever un pion du plateau.
 */
function enleverPionListener() {

    $("#bouton_enlever_pion").click(function() {
        if(pionCourant != null && caseCourante != null) {
            let ids = caseCourante.attr('id').split('_');
            let i = ids[1];
            let j = ids[2];
            console.log("pionCourant : " + pionCourant);
            console.log("caseCourante : " + caseCourante.attr("id"));
            if(plateau.tableau[i][j].toString() == "Animaux") {
                plateau.enleverPion(pionCourant);
                refresh();
                initPlayerImagesListener(joueurCourant);
            }
        } 
    });
}

/**
 * Bouton qui tourne le pion selectionné.
 */
function tournerPionListener() {

    $("#bouton_tourner_pion").click(function() {
        if(pionCourant != null) {
            pionCourant.rotationDroite();
            refresh();
            initPlayerImagesListener(joueurCourant);
        }
    });
}

function pousserPionListener() {
    
    $("#bouton_pousser_pion").click(function() {
        if(pionCourant != null && joueurCourant != null) {
            let autre = joueurCourant == joueur1 ? joueur2 : joueur1;
            //plateau.pousser(joueurCourant, autre, pionCourant);
            console.log("Pousser à des problèmes : A corriger !");
            refresh();
        }
    });
    
}