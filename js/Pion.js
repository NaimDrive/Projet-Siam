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

    /**
     * Tourne le pion de 90 degrés à droite.
     */
    rotationDroite() {
        if(this.orientation == Orientation.NORD) {
            this.orientation = Orientation.EST;
        } else if(this.orientation == Orientation.EST) {
            this.orientation = Orientation.SUD;
        } else if(this.orientation == Orientation.SUD) {
            this.orientation = Orientation.OUEST;
        } else {
            this.orientation = Orientation.NORD;
        }
    }

    /**
     * Tourne le pion de 90 degrés à gauche.
     */
    rotationGauche() {
        if(this.orientation == Orientation.NORD) {
            this.orientation = Orientation.OUEST;
        } else if(this.orientation == Orientation.EST) {
            this.orientation = Orientation.NORD;
        } else if(this.orientation == Orientation.SUD) {
            this.orientation = Orientation.EST;
        } else {
            this.orientation = Orientation.SUD;
        }
    }

    /**
     * Tourne le pion de 180 degrés.
     */
    rotationDemiTour() {
        if(this.orientation == Orientation.NORD) {
            this.orientation = Orientation.SUD;
        } else if(this.orientation == Orientation.EST) {
            this.orientation = Orientation.OUEST;
        } else if(this.orientation == Orientation.SUD) {
            this.orientation = Orientation.NORD;
        } else {
            this.orientation = Orientation.EST;
        }
    }

}