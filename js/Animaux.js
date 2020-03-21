class Animaux extends Pion {

    constructor(orientation, image) {
        super(image);
        this.orientation = orientation;
        // this.placerPion(x, y);
    }

    /**
     * Retourne l'orientation du pion.
     * @returns {Orientation}
     */
    getOrientation() {
        return this.orientation;
    }

    /**
     * Retourne l'image à afficher en fonction de l'orientation de l'animal.
     */
    getImageToDisplay() {
        return this.image.getImageAnimal(this.orientation);
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

    toString() {
        return "Animaux";
    }

}