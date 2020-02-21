class Player {

    constructor(image) {
        this.pions = Array();
        this.image = image;

        for (let i = 0; i < 5; i++) {
            this.pions[i].push(new Pion(Orientation.NORD));
        }
    }

}