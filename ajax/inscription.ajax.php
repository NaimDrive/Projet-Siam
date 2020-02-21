<?php

    include "gestionRequeteBDD.ajax.php";

    function getUsers() {
        $users = array();
        $result = requeteBDD("SELECT * FROM users");


        return json_encode(array(1,2,3,4));
    }


    switch ($_GET["act"]) {
        case 'getUsers':
            getUsers();
            break;
        
        default:
            # code...
            break;
    }

?>