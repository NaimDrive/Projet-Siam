<?php


if(isset($_POST["sub"])) {
    session_start();
    $errorMsg = "";
    $validUser = $_SESSION["login"] === true;
        $validUser = $_POST["username"] == "admin" && $_POST["password"] == "password";

        if(!$validUser) {
            session_unset();
            session_destroy();
        } else {
            $_SESSION["login"] = true;
        }
    }
    $_SESSION["username"] = $_POST["username"];
    echo "logged ? " . ($_SESSION["login"] == 1 ? "yes" : "no") . "<br>";
    echo "logged ? " . ($_POST["username"] == "" ? "no" : "yes") . "<br>";
    print_r($_SESSION);
    /*if($validUser) {
      header("/index.php"); exit ();
    }*/

?>

<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="content-type" content="text/html;charset=utf-8" />
  <title>Login</title>
</head>
<body>
  <form name="input" action="" method="post">
    <label for="username">Username:</label><input type="text" value="<?= $_POST["username"] ?>" id="username" name="username" />
    <label for="password">Password:</label><input type="password" value="" id="password" name="password" />
    <div class="error"><?= $errorMsg ?></div>
    <input type="submit" value="Home" name="sub" />
  </form>
</body>
</html>


