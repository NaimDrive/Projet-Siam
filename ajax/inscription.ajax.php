<?php

    include "gestionRequeteBDD.ajax.php";

    function getUsers() {
        $users = array();
        $output = requeteBDD("SELECT * FROM users");
        $result = array();

        foreach($output as $res) {
            // array_push($result, $res);
            $result[$res["id"]] = $res["pseudo"];
        }
        
        print_r(json_encode($result));
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