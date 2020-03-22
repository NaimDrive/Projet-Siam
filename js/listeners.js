/**
 * Bouton qui permet de placer un pion sur le plateau.
 */
function placerPionListener() {

    $("#bouton_placer_pion").click(function() {
        if(joueurCourant != null && pionCourant != null && caseCourante != null) {
            // console.log(caseCourante);
            // console.log(pionCourant);
            let ids = caseCourante.attr('id').split('_');
            let i = parseInt(ids[1]);
            let j = parseInt(ids[2]);
            if(plateau.tableau[i][j].toString() == "NullObject") {
                let xC = parseInt(pionCourant.getX());
                let yC = parseInt(pionCourant.getY());

                if(pionCourant.place == false || ((xC == i-1 && yC == j) || (xC == i+1 && yC == j) || (xC == i && yC == j-1) || (xC == i && yC == j+1))) {
                    removePionSelectedClass()
                    caseCourante.addClass("pionSelected");
                    plateau.placerPion(pionCourant, i, j);
                    refresh();
                    initPlayerImagesListener(joueurCourant);
                    // partie.changementDeTour();
                    // savePartie();
                }
            }
        }
    });
}

/**
 * Bouton qui permet d'enlever un pion du plateau.
 */
function enleverPionListener() {

    $("#bouton_enlever_pion").click(function() {
        if(pionCourant != undefined) {
            plateau.enleverPion(pionCourant);
            refresh();
            initPlayerImagesListener(joueurCourant);
            caseCourante.removeClass("pionSelected");
            pionCourant = undefined;
            // partie.changementDeTour();
            // savePartie();
        }
    });
}

/**
 * Bouton qui tourne le pion selectionné.
 */
function tournerPionListener() {

    $("#bouton_tourner_pion").click(function() {
        if(pionCourant != undefined){
            let pos = caseCourante.attr('id').split('_');
            let pion = plateau.getPion(pos[1], pos[2]);
            pion.rotationDroite();
            refresh();
            initPlayerImagesListener(joueurCourant);
            // partie.changementDeTour();
            // savePartie();
        }
    });
}

function pousserPionListener() {
    
    $("#bouton_pousser_pion").click(function() {
        if(pionCourant != null && joueurCourant != null) {
            let autre = (joueurCourant == joueur1 ? joueur2 : joueur1);
            plateau.pousser(joueurCourant, autre, pionCourant);
            refresh();
            initPlayerImagesListener(joueurCourant);
            removePionSelectedClass();
            $("#case_"+pionCourant.getX()+"_"+pionCourant.getY()).addClass("pionSelected");
            // partie.changementDeTour();
            // savePartie();
        }
    });
    
}

/**
 * Créé un listener pour les images du joueur.
 */
function initPlayerImagesListener(joueur) {
    console.log(joueur);
    for (let i = 0; i < joueur.pions.length; i++) {
        console.log("#image_"+joueur.id+"_"+i);
  
        $("#image_"+joueur.id+"_"+i).click(function(){
            if((pionCourant != undefined || (pionCourant != undefined && !pionCourant.estPlace())) && imageCourante != undefined) {
                console.log(imageCourante);
                imageCourante.removeClass("selected");
            }
            if(joueurCourant == joueur) {
                removePionSelectedClass();
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
                if(pionCourant == undefined) {
                    removePionSelectedClass();
                }
                caseCourante = $(this);
                caseCourante.addClass("caseSelected");
                console.log($(this).attr('id'));
                let pos = $(this).attr('id').split('_');
                console.log(plateau.getPion(pos[1], pos[2]));
                var tmp = plateau.getPion(pos[1], pos[2]);
                if(tmp.toString() != "NullObject" && tmp.getImageToDisplay().includes(joueurCourant.getId(), -6)) {
                    /*console.log("v");
                    console.log(tmp.getImageToDisplay().includes(joueurCourant.getId(), -6));
                    console.log($(this));
                    console.log("^");*/
                    pionCourant = tmp;
                    caseCourante.addClass("pionSelected");
                } else if((pionCourant != undefined && tmp.toString() != "NullObject")){
                    pionCourant = undefined;
                    removePionSelectedClass();
                }
            });
        }
    }
}

function removeAllListeners() {
    $("#game_area").find("*").each(function() {
        $(this).off("click");
    });
}

function removeJoueurListeners(id) {
    $("#div-joueur"+id).children().each(function() {
        $(this).off('click');
    });
}

function removePionSelectedClass() {
    $("#div-tableau").children().each(function(){
        $(this).children().each(function() {
            $(this).removeClass("pionSelected");
        });
    });
}