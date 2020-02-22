// Définition des variables globales
var plateau; // Le plateau du jeu
var joueur1; // Le joueur 1
var joueur2; // Le joueur 2

/**
 * Initialise les objets du jeux.
 */
function initGame() {
    plateau = new Plateau(5);
    joueur1 = new Player(Animal.ELEPHANT);
    joueur2 = new Player(Animal.RHINOCEROS);

    console.log(joueur1.getImageToDisplay());
    joueur1.pions[0].rotationDemiTour();
    console.log(joueur1.getImageToDisplay());
}

initGame();
plateau.afficherTableau();