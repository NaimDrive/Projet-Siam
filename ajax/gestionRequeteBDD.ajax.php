<?php

    /**
     * Options renforçant la sécurité des requêtes
     */
    $options = [
        PDO::ATTR_EMULATE_PREPARES   => false, // turn off emulation mode for "real" prepared statements
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION, //turn on errors in the form of exceptions
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, //make the default fetch be an associative array
    ];

    function requeteBDD($requete) {
        global $options;
        $bdd  = new PDO('sqlite:siam.db', '', '', $options) or die("cannot open the database");
        $resultats = $bdd->query($requete);
        $resultats = $resultats->fetchAll();
        
        return $resultats;
    }

    function openBDD() {
        global $options;
        $bdd  = new PDO('sqlite:siam.db', '', '', $options) or die("cannot open the database");
        return $bdd;
    }

?>