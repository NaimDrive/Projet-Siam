<?php
// Si tu as sqlite3 n'est pas supporter fait la ligne de commande :
//          sudo apt-get install php-sqlite3
  $dbname = "siam.db";
//   $flags = "SQLITE3_OPEN_READWRITE";

  if(!class_exists('SQLite3')) {
    die("SQLite 3 NOT supported.");
  }

  $base = new SQLite3($dbname);
  echo "SQLite 3 supported. <br>";

  $mytable = "users";

  $query = "CREATE TABLE IF NOT EXISTS $mytable (
                id INTEGER PRIMARY KEY,
                pseudo VARCHAR(50) NOT NULL,
                password VARCHAR(50) NOT NULL,
                admin INTEGER NOT NULL
            )";
            
  if ($result = $base->exec($query)) {
    echo "La table est créée";
  } else {
    echo $base->lastErrorMsg();
  }
  /*
  $requete = "INSERT INTO $mytable (pseudo, password, admin) VALUES
              ('admin', '".password_hash('password', PASSWORD_DEFAULT)."', 1),
              ('Naim', '".password_hash('bg', PASSWORD_DEFAULT)."', 0),
              ('Baptiste', '".password_hash('bg', PASSWORD_DEFAULT)."', 0)";

  $base->exec($requete);*/

  $requete2 = "select * from users";

  $result = $base->query($requete2);

  while($row = $result->fetchArray()) {
    // echo "<h2>".$row['pseudo']." ".$row['password']."</h2>";
    echo "<h2>";
    print_r($row);
    echo "</h2>";
    
    // echo "woaw ! <br>";
  }

  $mytable = "parties";
  $query = "CREATE TABLE IF NOT EXISTS $mytable (
                id INTEGER PRIMARY KEY,
                nom VARCHAR(255) NOT NULL,
                data BLOB NOT NULL
            )";
  if ($result = $base->exec($query)) {
    echo "La table est créée";
  } else {
    echo $base->lastErrorMsg();
  }
/*
  $requete = "ALTER TABLE parties ADD joueurCourant INTEGER NOT NULL DEFAULT 1";
  $result = $base->exec($requete);
  echo "<h1>res : ".$base->lastErrorMsg()." </h1>";

  $requete = "DELETE FROM parties";
  $result = $base->exec($requete);
  echo "<h1>res : ".$base->lastErrorMsg()." </h1>";
*/
?>