class Plateau {

    constructor(taille) {
        this.TAILLE_PLATEAU = taille;
        this.tableau = new Array();

        for (let i = 0; i < taille; i++) {
            this.tableau.push(new Array());
            for (let j = 0; j < taille; j++) {
                this.tableau[i].push(0);
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