class NullObject extends Pion {

    constructor(image, x, y) {
        super(image);
        this.x = x;
        this.y = y;
    }

    /**
     * Retourne l'image à afficher pour le null object.
     */
    getImageToDisplay() {
        return this.image.getImageNullObject();
    }

    toString() {
        return "NullObject";
    }

}