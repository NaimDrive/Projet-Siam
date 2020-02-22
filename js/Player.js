class Player {

    constructor(animal) {
        this.pions = new Array();
        this.animal = animal;

        for (let i = 0; i < 5; i++) {
            this.pions.push(new Animaux(Orientation.NORD, animal));
        }
    }

    /**
     * Retourne le tableau de pions.
     */
    getPions() {
        return this.pions;
    }

    /**
     * Retourne le pion à la position i.
     */
    getPion(i) {
        if(i >= 0 && i < this.pions.length)
            return this.pions[i];
        return null;
    }
}