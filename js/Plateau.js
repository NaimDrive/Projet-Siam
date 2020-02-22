class Plateau {

    constructor(taille) {
        this.TAILLE_PLATEAU = taille;
        this.tableau = new Array();

        for (let i = 0; i < taille; i++) {
            this.tableau.push(new Array());
            for (let j = 0; j < taille; j++) {
                this.tableau[i].push(new NullObject(ElementPlateau.NULL_OBJECT));
            }
        }
    }

    /**
     * Affiche le plateau.
     */
    afficherTableau() {
        console.log(this.tableau);
    }

    afficherImages() {
        for (let i = 0; i < this.TAILLE_PLATEAU; i++) {
            let tmp = "";
            for (let j = 0; j < this.TAILLE_PLATEAU; j++) {
                tmp += this.tableau[i][j].getImageToDisplay() + " ";                
            }
            console.log(tmp);
        }
    }

    /**
     * Place un pion aux coordonnées (i, j).
     * @param {Pion} pion 
     * @param {int} x 
     * @param {int} y 
     */
    placerPion(pion, x, y) {
        if(x < 0 && x >= this.tableau.length) {
            console.log("x hors du tableau");
        }
        if(y < 0 && y >= this.tableau.length) {
            console.log("y hors du tableau");
        }
        this.tableau[x][y] = pion;
        pion.placerPion(x,y);
        pion.place = true;
    }

    /**
     * Déplace tous les éléments d'une colonne vers le haut ou vers le bas.
     */
    pousserColonne() {
        
    }
    
    /**
     * Déplace tous les éléments d'une ligne vers la droite ou vers la gauche.
     */
    pousserLigne() {

    }
}