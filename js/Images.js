class Images {

    constructor(animal) {
        
        if(animal == Animal.ELEPHANT) {
            this.directionNord = "/images/10.gif";
            this.directionEst = "/images/11.gif";
            this.directionSud = "/images/12.gif";
            this.directionOuest = "/images/13.gif";
            console.log("Vive l'éléphant !");
        } else {
            this.directionNord = "/images/20.gif";
            this.directionEst = "/images/21.gif";
            this.directionSud = "/images/22.gif";
            this.directionOuest = "/images/23.gif";
            console.log("Vive le rhinocéros !");
        }
    }

    /**
     * Retourne l'image à afficher en fonction de l'orientation de l'animal.
     * @param {Orientation} orientation 
     */
    getImage(orientation) {
        if(orientation == Orientation.NORD) {
            return this.directionNord;
        } else if(orientation == Orientation.EST) {
            return this.directionEst;
        } else if(orientation == Orientation.SUD) {
            return this.directionSud;
        } else {
            return this.directionOuest;
        }
    }

}