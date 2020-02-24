class Plateau {

    constructor(taille) {
        this.TAILLE_PLATEAU = taille;
        this.tableau = new Array();

        for (let i = 0; i < taille; i++) {
            this.tableau.push(new Array());
            for (let j = 0; j < taille; j++) {
                this.tableau[i].push(new NullObject(ElementPlateau.NULL_OBJECT, i, j));
            }
        }
    }

    /**
     * Affiche le plateau.
     */
    afficherTableau() {
        console.log(this.tableau);
    }

    /**
     * Affiche toutes les images du plateau dans le tableau html.
     */
    afficherImages() {
        let enfants = $("#div-tableau").children();

        for (let i = 0; i < this.TAILLE_PLATEAU; i++) {
            for (let j = 0; j < this.TAILLE_PLATEAU; j++) {
                enfants[i].children[j].innerHTML = "<img src='"+this.tableau[i][j].getImageToDisplay()+"'>";
            }
        }
    }

    /**
     * Place un pion aux coordonnées (x, y) en supprimant le NullObject.
     * @param {Pion} pion 
     * @param {int} x 
     * @param {int} y 
     */
    placerPion(joueur, pion, x, y) {
        if(x < 0 && x >= this.tableau.length) {
            console.log("x hors du tableau");
        }
        if(y < 0 && y >= this.tableau.length) {
            console.log("y hors du tableau");
        }
        if(pion.estPlace()) {
            this.enleverPion(pion);
        }
        this.tableau[x][y] = pion;
        pion.placerPion(x,y);

        this.afficherImages();
        if(joueur != "") {
            this.actualiserAffichageJoueur(joueur);
        }
    }

    /**
     * Enlève le pion du tableau et le remplace par un NullObject.
     * @param {Pion} pion 
     */
    enleverPion(joueur, pion) {     
        this.tableau[pion.getX()][pion.getY()] = new NullObject(ElementPlateau.NULL_OBJECT, pion.getX(), pion.getY());
        pion.enleverPion();
        this.afficherImages();
        this.actualiserAffichageJoueur(joueur);
    }

    /**
     * Retourne le pion à la position i.
     */
    getPion(x, y) {
        return this.tableau[x][y];
    }

    pousser(joueur, animal) {
        if(animal.toString() == "NullObject") {
            return;
        }

        if(animal.getOrientation() == Orientation.NORD) {
            this.pousserColonneHaut(animal);
        } else if(animal.getOrientation() == Orientation.SUD) {
            this.pousserColonneBas(animal);
        } else if(animal.getOrientation() == Orientation.EST) {
            this.pousserLigneDroite(animal);
        } else {
            this.pousserLigneGauche(animal);
        }

        this.afficherImages();
        this.actualiserAffichageJoueur(joueur);
    }

    /**
     * Déplace tous les éléments d'une colonne vers le haut.
     */
    pousserColonneHaut(pion) {
        let totalBas = 0;
        let totalHaut = 0;

        for (let i = pion.getX(); i >= 0; i--) {
            if(this.tableau[i][pion.getY()].toString() == "NullObject") {
                break;
            } else if(this.tableau[i][pion.getY()].toString() == "Rocher") {
                continue;
            }
            let orientation = this.tableau[i][pion.getY()].getOrientation();
            if(orientation == Orientation.NORD) {
                totalHaut++;
            } else if(orientation == Orientation.SUD) {
                totalBas++;
            }
        }

        if(totalHaut - totalBas > 0) {
            let posX = pion.getX();
            let posY = pion.getY();
            let moveElement = this.tableau[posX][posY];

            for (let i = posX; i >= 0; i--) {
                var tmp = this.tableau[i][posY];
                moveElement.modifierPion(i, posY);
                this.tableau[i][posY] = moveElement;
                
                moveElement = tmp;
                if(i > 0 && this.tableau[i-1][posY].toString() == "NullObject") {
                    this.tableau[i-1][posY] = moveElement;
                    break;
                }
            }
            if(tmp.getX() == 0) {
                tmp.enleverPion();
            }
            this.tableau[posX][posY] = new NullObject(ElementPlateau.NULL_OBJECT, posX, posY);
        }
    }

    /**
     * Déplace tous les éléments d'une colonne vers le bas.
     */
    pousserColonneBas() {
        
    }
    
    /**
     * Déplace tous les éléments d'une ligne vers la droite.
     */
    pousserLigneDroite() {

    }

    /**
     * Déplace tous les éléments d'une ligne vers la gauche.
     */
    pousserLigneGauche() {

    }

    /**
     * Actualise l'affichage des 2 joueurs ainsi que du plateau.
     * @param {Player} joueur1 
     * @param {Player} joueur2 
     */
    actualiserAffichage(joueur1, joueur2) {
        this.afficherImages();
        this.actualiserAffichageJoueur(joueur1);
        this.actualiserAffichageJoueur(joueur2);
    }

    /**
     * Actualise l'affiche du joueur en paramètre.
     * @param {Player} joueur 
     */
    actualiserAffichageJoueur(joueur) {
        joueur.afficherInventaire();
    }
}