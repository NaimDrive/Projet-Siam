class Pion {

    constructor(image) {
        this.x = -1;
        this.y = -1;
        this.place = false;
        this.image = new Images(image);
    }

    /**
     * Place un pion sur le plateau aux coordonnées (x, y).
     * @param {int} x 
     * @param {int} y 
     */
    placerPion(x, y) {
        this.x = x;
        this.y = y;
    }
}