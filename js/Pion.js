class Pion {

    constructor(orientation) {
        this.x = -1;
        this.y = -1;
        this.orientation = orientation;
        this.place = false;
    }

    /**
     * Retourne l'orientation du pion.
     * @returns {Orientation}
     */
    getOrientation() {
        return this.orientation;
    }

    /**
     * Place un pion sur le plateau aux coordonnées (x, y).
     * @param {int} x 
     * @param {int} y 
     */
    placerPion(x, y) {
        this.x = x;
        this.y = y;
    }

}