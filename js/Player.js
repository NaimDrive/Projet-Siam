class Player {

    constructor(username, animal, id, pions=new Array()) {
        this.pions = pions;
        this.username = username;
        this.animal = animal;
        this.id = id;
        this.userID;

        if(pions.length == 0) {
            for (let i = 0; i < 5; i++) {
                this.pions.push(new Animaux(Orientation.NORD, animal));
            }
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
                image.id = "image_"+this.id+"_"+i;
                enfants.appendChild(image);
            }
        }
    }

    /**
     * Retourne le pseudo du joueur
     */
    getUsername() {
        return this.username;
    }

    /**
     * Modifie le pseudo du joueur
     * @param String username 
     */
    setUsername(username) {
        this.username = username;
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

    /**
     * Retourne l'ID du joueur
     */
    getId() {
        return this.id;
    }

    getUserID() {
        return this.userID;
    }

    setUserID(id) {
        this.userID = id;
    }
}