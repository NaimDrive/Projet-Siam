class Player {

    constructor(animal) {
        this.pions = new Array();
        this.animal = animal;
        this.image = new Images(animal);

        for (let i = 0; i < 5; i++) {
            this.pions.push(new Pion(Orientation.NORD));
        }
    }

    /**
     * Retourne l'image à afficher en fonction de l'orientation du pion.
     * @param {Pion} pion 
     */
    getImageToDisplay() {
        return this.image.getImage(this.pions[0].getOrientation());
    }

}