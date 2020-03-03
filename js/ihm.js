function placerPion(caseCourante, pionCourant, plateau, joueur, pion, x , y) {
  let ids = caseCourante.attr('id').split('_');
  console.log(ids[1] + ids[2]);

  plateau.placerPion(joueur, pion, x, y);
}
