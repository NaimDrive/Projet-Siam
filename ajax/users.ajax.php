<?php

    include "gestionRequeteBDD.ajax.php";
    // include "test.ajax.php";

    function getUsers() {
        $output = requeteBDD("SELECT * FROM users");
        $result = array();

        foreach($output as $res) {
            // array_push($result, $res);
            $result[$res["id"]] = $res["pseudo"];
        }
        
        print_r(json_encode($result));
    }

    function inscription() {
        $username = $_POST["username"];
        $password = $_POST["password"];
        $bdd = openBDD();
        
        $req = "INSERT INTO users (pseudo, password)
                VALUES('".$username."', '".password_hash($password, PASSWORD_DEFAULT)."')";

        $return = $bdd->exec($req);

        echo (json_encode($return));
    }

    function connect() {
        $username = $_POST["username"];
        $password = $_POST["password"];
        $result = array();

        $output = requeteBDD("SELECT * FROM users WHERE pseudo = '".$username."'");

        // print_r($output);

        foreach($output as $res) {
            $result[$res["id"]]["pseudo"] = $res["pseudo"];
            $result[$res["id"]]["password"] = $res["password"];
            if(password_verify($password, $res["password"])) {
                session_start();
                $_SESSION["online"] = true;
                $_SESSION["username"] = $username;
                echo json_encode(true);
                return;
            }
        }

        echo json_encode(false);

    }

    function deconnect() {
        session_start();
        session_unset();
        session_destroy();
    }

    function changePassw() {
        $username = $_POST["user"];
        $password = $_POST["password_verif"];
        $new_password = $_POST["new_passw"];

        $result = array();

        $output = requeteBDD("SELECT * FROM users WHERE pseudo = '".$username."'");

        foreach($output as $res) {
            $result[$res["id"]]["pseudo"] = $res["pseudo"];
            $result[$res["id"]]["password"] = $res["password"];
            if(password_verify($password, $res["password"])) {
                $id = $res["id"];
                break;
            }
        }

        if(!is_null($id)) {
            $bdd = openBDD();
    
            $req = "UPDATE users 
                    SET password='".password_hash($new_password, PASSWORD_DEFAULT)."'
                    WHERE id=".$id." and pseudo='".$username."';";
    
            $return = $bdd->exec($req);
            
            echo json_encode(($return == 1 ? true : false));
        } else {
            echo json_encode(false);
        }
    }

    switch ($_GET["act"]) {
        case 'getUsers':
            getUsers();
            break;
        case 'Inscription':
            inscription();
            break;
        case 'Connect':
            connect();
            break;
        case 'Deconnect':
            deconnect();
            break;
        case 'Password':
            changePassw();
        default:
            # code...
            break;
    }

?>