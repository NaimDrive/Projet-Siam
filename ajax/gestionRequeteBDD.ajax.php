<?php

    function requeteBDD($requete) {
        $bdd  = new PDO('sqlite:siam.db') or die("cannot open the database");
        $resultats = $bdd->query($requete);

        return $resultats->fetchAll();
    }

?>