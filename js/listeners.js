/**
 * Bouton qui permet de placer un pion sur le plateau.
 */
function placerPionListener() {
    let btn = document.getElementById("bouton_placer_pion");

    btn.addEventListener('click', function() {
        if(joueurCourant != null && pionCourant != null && caseCourante != null) {
            let ids = caseCourante.attr('id').split('_');
            let i = ids[1];
            let j = ids[2];
            if(plateau.tableau[i][j].toString() == "NullObject") {
                plateau.placerPion(pionCourant, i, j);
                refresh();
            }
        }
    });
}

/**
 * Bouton qui permet d'enlever un pion du plateau.
 */
function enleverPionListener() {
    let btn = document.getElementById("bouton_enlever_pion");

    btn.addEventListener('click', function() {
        if(pionCourant != null && caseCourante != null) {
            let ids = caseCourante.attr('id').split('_');
            let i = ids[1];
            let j = ids[2];
            if(plateau.tableau[i][j].toString() == "Animaux") {
                plateau.enleverPion(pionCourant);
                refresh();
            }
        } 
    });
}

/**
 * Bouton qui tourne le pion selectionné.
 */
function tournerPionListener() {
    let btn = document.getElementById("bouton_tourner_pion");

    btn.addEventListener('click', function() {
        if(pionCourant != null) {
            pionCourant.rotationDroite();
            refresh();
        }
    });
}

function pousserPionListener() {
    let btn = document.getElementById("bouton_pousser_pion");
    
    btn.addEventListener('click', function() {
        if(pionCourant != null && joueurCourant != null) {
            let autre = joueurCourant == joueur1 ? joueur2 : joueur1;
            //plateau.pousser(joueurCourant, autre, pionCourant);
            console.log("Pousser à des problèmes : A corriger !");
            refresh();
        }
    });
    
}