<?php

    include "gestionRequeteBDD.ajax.php";
    include "test.ajax.php";

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

    function isOnline() {
        session_start();
        echo "cacahuette";
        return $_SESSION["username"];
    }


    switch ($_GET["act"]) {
        case 'getUsers':
            getUsers();
            break;
        case 'isOnline':
            isOnline();
            break;
        default:
            # code...
            break;
    }

?>