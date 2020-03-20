$("#creerPartieForm").submit(function(e) {
    e.preventDefault();
    clearSubFields();

    var values = convertFormData($(this).serialize())

    // values["id"] = 3;
    initRochers();
    initPlateau();
    initJoueurs();
    var partie = new Partie(plateau, joueur1, joueur2);
    console.log(partie);
    values["data"] = partie;
    console.log(values);

    $.ajax({
        method: "POST",
        url: "ajax/users.ajax.php?act=creerPartie",
        data: values,
        type: "POST",
        dataTyp1e: 'json'
    }).done(function(response) {
      /*if(response != "false") {
          location.reload();
      } else {
          alert("Erreur !");
      }*/
      console.log("ajax done !");
      console.log("Result :");
      console.log(response);
    });

});