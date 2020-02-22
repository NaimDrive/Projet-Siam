class NullObject extends Pion {

    constructor(image) {
        super(image);
    }

    /**
     * Retourne l'image à afficher pour le null object.
     */
    getImageToDisplay() {
        return this.image.getImageNullObject();
    }

}