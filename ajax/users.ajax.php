<?php

    include "gestionRequeteBDD.ajax.php";

    function whoami() {
        session_start();
        echo json_encode($_SESSION);
    }

    function getUsers() {
        $output = requeteBDD("SELECT * FROM users");
        $result = array();

        foreach($output as $res) {
            $result[$res["id"]] = $res["pseudo"];
        }
        
        print_r(json_encode($result));
    }

    function inscription() {
        $username = $_POST["username"];
        $password = $_POST["password"];
        $admin = $_POST["admin"];
        $bdd = openBDD();
        
        $req = "INSERT INTO users (pseudo, password, admin)
                VALUES('".$username."', '".password_hash($password, PASSWORD_DEFAULT)."', ".$admin.")";

        $return = $bdd->exec($req);

        echo (json_encode($return));
    }

    function connect() {
        $username = $_POST["username"];
        $password = $_POST["password"];

        $bdd = openBDD();
        $req = $bdd->prepare("SELECT * FROM users WHERE pseudo=:username");
        $req->bindParam(':username', $username);
        $req->execute();
        $output = $req->fetchAll();

        foreach($output as $res) {
            if(password_verify($password, $res["password"])) {
                session_start();
                $_SESSION["id"] = $res["id"];
                $_SESSION["online"] = true;
                $_SESSION["username"] = $username;
                $_SESSION["admin"] = ($res["admin"] == 1 ? true : false);
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

        $bdd = openBDD();
        $req = $bdd->prepare("SELECT * FROM users WHERE pseudo=:username");
        $req->bindParam(':username', $username);
        $req->execute();
        $output = $req->fetchAll();

        foreach($output as $res) {
            $result[$res["id"]]["pseudo"] = $res["pseudo"];
            $result[$res["id"]]["password"] = $res["password"];
            if(password_verify($password, $res["password"])) {
                $id = $res["id"];
                break;
            }
        }

        if(!is_null($id)) {
            $new_password = password_hash($new_password, PASSWORD_DEFAULT);

            $req = $bdd->prepare("UPDATE users SET password=:new_password WHERE id=:id and pseudo=:username");
            $req->bindParam(':new_password', $new_password);
            $req->bindParam(':id', $id);
            $req->bindParam(':username', $username);
            $return = $req->execute();
            
            echo json_encode(($return == 1 ? true : false));
        } else {
            echo json_encode(false);
        }
    }

    function getParties() {
        $output = requeteBDD("SELECT * FROM parties");
        $result = array();

        foreach($output as $res) {
            array_push($result, array("id"=>$res["id"], "nom"=>$res["nom"], "data"=>unserialize($res["data"]), "jCourant"=>$res["joueurCourant"]));
        }
        
        print_r(json_encode($result));
    }

    function getPartie() {
        $id = $_POST["game_selected"];

        $bdd = openBDD();
        $req = $bdd->prepare("SELECT * FROM parties WHERE id=:id");
        $req->bindParam(':id', $id);
        $req->execute();
        $output = $req->fetchAll();

        $output[0]["data"] = unserialize($output[0]["data"]); 
        echo json_encode($output[0]);
    }

    function creerPartie() {
        $nom = $_POST["nom"];
        $data = serialize($_POST["data"]);

        $bdd = openBDD();

        $req = $bdd->prepare("INSERT INTO parties (nom,data) VALUES(:nom,:data)");
        $req->bindParam(':nom', $nom);
        $req->bindParam(':data', $data);

        echo (json_encode($req->execute()));
    }

    function savePartie() {
        $id = $_POST["id"];
        $joueurCourant = $_POST["joueurCourant"];
        $data = serialize($_POST["data"]);
        
        $bdd = openBDD();

        $req = $bdd->prepare("UPDATE parties SET data=:data, joueurCourant=:joueurCourant WHERE id=:id");
        $req->bindParam(':data', $data);
        $req->bindParam(':joueurCourant', $joueurCourant);
        $req->bindParam(':id', $id);

        echo (json_encode($req->execute()));

    }

    function suppPartie() {
        $id = $_POST["id"];

        $bdd = openBDD();

        $req = $bdd->prepare("DELETE FROM parties WHERE id=:id");
        $req->bindParam(':id', $id);

        // echo json_encode($bdd->errorInfo());

        echo (json_encode($req->execute())); 
    } 

    switch ($_GET["act"]) {
        case 'Whoami':
            whoami();
        break;
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
            break;
        case 'getParties':
            getParties();
            break;
        case 'getPartie':
            getPartie();
            break;
        case 'creerPartie':
            creerPartie();
            break;
        case 'savePartie':
            savePartie();
            break;
        case 'suppPartie':
            suppPartie();
            break;
        default:
            # code...
            break;
    }

?>