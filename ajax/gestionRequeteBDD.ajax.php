<?php

    function requeteBDD($requete) {
        $bdd  = new PDO('sqlite:siam.db') or die("cannot open the database");
        $resultats = $bdd->query($requete);
        $resultats = $resultats->fetchAll();
        
        return $resultats;
    }

    function openBDD() {
        $bdd  = new PDO('sqlite:siam.db') or die("cannot open the database");
        return $bdd;
    }

?>