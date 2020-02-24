class Pion {

    constructor(image) {
        this.x = -1;
        this.y = -1;
        this.place = false;
        this.image = new Images(image);
    }

    /**
     * Place un pion sur le plateau aux coordonnées (x, y).
     * @param {int} x 
     * @param {int} y 
     */
    placerPion(x, y) {
        this.x = x;
        this.y = y;
        this.place = true;
    }

    /**
     * Enlève un pion du plateau.
     */
    enleverPion() {
        this.x = -1;
        this.y = -1;
        this.place = false;
    }

    /**
     * Modifie les coordonnées du pion.
     * @param {int} x 
     * @param {int} y 
     */
    modifierPion(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * Retourne true si le pion est placé, false sinon.
     */
    estPlace() {
        return this.place;
    }

    /**
     * Retourne la coordonnée x.
     */
    getX() {
        return this.x;
    }

    /**
     * Retourne la coordonnée y.
     */
    getY() {
        return this.y;
    }
}