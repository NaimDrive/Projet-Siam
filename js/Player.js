class Player {

    constructor(animal, id) {
        this.pions = new Array();
        this.animal = animal;
        this.id = id;

        for (let i = 0; i < 5; i++) {
            this.pions.push(new Animaux(Orientation.NORD, animal));
        }
    }

    afficherInventaire() {
        let enfants = document.getElementById("div-joueur"+this.getId());

        var child = enfants.lastElementChild;  
        while (child) {
            enfants.removeChild(child); 
            child = enfants.lastElementChild; 
        } 

        for (let i = 0; i < this.pions.length; i++) {
            if(!this.pions[i].estPlace()) {
                let image = document.createElement("img");
                image.src = this.pions[i].getImageToDisplay();
                enfants.appendChild(image);
            }
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

    getId() {
        return this.id;
    }
}