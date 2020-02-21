// Définition des variables globales
var plateau; // Le plateau du jeu

/**
 * Initialise les objets du jeux.
 */
function initGame() {
    plateau = new Plateau(5);
}

initGame();
plateau.afficherTableau();