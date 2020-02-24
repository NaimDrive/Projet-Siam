class Rocher extends Pion {

    constructor(image) {
        super(image);
    }

    /**
     * Retourne l'image à afficher en fonction du pion.
     */
    getImageToDisplay() {
        return this.image.getImageRocher();
    }

    toString() {
        return "Rocher";
    }
}