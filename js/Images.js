class Images {

    constructor(image) {
        this.images = new Array();
        if(image == ElementPlateau.ELEPHANT) {
            this.images.push("/images/10.gif");
            this.images.push("/images/11.gif");
            this.images.push("/images/12.gif");
            this.images.push("/images/13.gif");
            console.log("Vive l'éléphant !");
        } else if(image == ElementPlateau.RHINOCEROS) {
            this.images.push("/images/20.gif");
            this.images.push("/images/21.gif");
            this.images.push("/images/22.gif");
            this.images.push("/images/23.gif");
            console.log("Vive le rhinocéros !");
        } else if(image == ElementPlateau.ROCHER) {
            this.images.push("/images/rocher.gif");
            console.log("Vive le rocher !");
        } else {
            this.images.push("");
        }
    }

    /**
     * Retourne l'image à afficher en fonction de l'orientation de l'animal.
     * @param {Orientation} orientation 
     */
    getImageAnimal(orientation) {
        if(orientation == Orientation.NORD) {
            return this.images[0];
        } else if(orientation == Orientation.EST) {
            return this.images[1];
        } else if(orientation == Orientation.SUD) {
            return this.images[2];
        } else {
            return this.images[3];
        }
    }

    /**
     * Retourne l'image du rocher.
     */
    getImageRocher() {
        return this.images[0];
    }

    /**
     * Retourne l'image du null object.
     */
    getImageNullObject() {
        return this.images[0];
    }

}