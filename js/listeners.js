/**
 * Bouton qui permet de placer un pion sur le plateau.
 */
function placerPionListener() {

    $("#bouton_placer_pion").click(function() {
        if(joueurCourant != null && pionCourant != null && caseCourante != null) {
            console.log(caseCourante);
            console.log(pionCourant);
            let ids = caseCourante.attr('id').split('_');
            let i = ids[1];
            let j = ids[2];
            if(plateau.tableau[i][j].toString() == "NullObject") {
                plateau.placerPion(pionCourant, i, j);
                refresh();
                initPlayerImagesListener(joueurCourant);
                // savePartie();
            }
        }
    });
}

/**
 * Bouton qui permet d'enlever un pion du plateau.
 */
function enleverPionListener() {

    $("#bouton_enlever_pion").click(function() {
        /*if(pionCourant != null && caseCourante != null) {
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
        } */
        // let pos = caseCourante.attr('id').split('_');
        // let pion = plateau.getPion(pos[1], pos[2]);
        plateau.enleverPion(pionCourant);
        refresh();
        initPlayerImagesListener(joueurCourant);
        /*if(pion.toString() != "NullObject") {
        }*/
    });
}

/**
 * Bouton qui tourne le pion selectionné.
 */
function tournerPionListener() {

    $("#bouton_tourner_pion").click(function() {
        /*if(pionCourant != null) {
            pionCourant.rotationDroite();
            refresh();
            initPlayerImagesListener(joueurCourant);
        }*/
        let pos = caseCourante.attr('id').split('_');
        let pion = plateau.getPion(pos[1], pos[2]);
        pion.rotationDroite();
        refresh();
        initPlayerImagesListener(joueurCourant);
    });
}

function pousserPionListener() {
    
    $("#bouton_pousser_pion").click(function() {
        if(pionCourant != null && joueurCourant != null) {
            let autre = (joueurCourant == joueur1 ? joueur2 : joueur1);
            plateau.pousser(joueurCourant, autre, pionCourant);
            refresh();
            initPlayerImagesListener(joueurCourant);
        }
    });
    
}

/**
 * Créé un listener pour les images du joueur.
 */
function initPlayerImagesListener(joueur) {
    for (let i = 0; i < joueur.pions.length; i++) {
        console.log(joueur.pions[i]);
  
        $("#image_"+joueur.id+"_"+i).click(function(){
            if(pionCourant != null) {
            imageCourante.removeClass("selected");
            }
            if(joueurCourant == joueur) {
            pionCourant = joueur.getPion(i);
            imageCourante = $(this);
            imageCourante.addClass("selected");
            }
        
            console.log("Image "+i+" joueur "+ joueur.id);
        });
    }
}

  /**
 * Initialise les déclencheurs de chaque case du plateau.
 */
function initPlateauListener() {
    for (let i = 0; i < plateau.TAILLE_PLATEAU; i++) {
        for (let j = 0; j < plateau.TAILLE_PLATEAU; j++) {
            $("#case_"+i+"_"+j).click(function(){
                if(caseCourante != null) {
                    caseCourante.removeClass("caseSelected");
                }
                caseCourante = $(this);
                caseCourante.addClass("caseSelected");
                console.log($(this).attr('id'));
                let pos = $(this).attr('id').split('_');
                console.log(plateau.getPion(pos[1], pos[2]));
                if(plateau.getPion(pos[1], pos[2]).toString() != "NullObject") {
                    pionCourant = plateau.getPion(pos[1], pos[2]);
                }
            });
        }
    }
}