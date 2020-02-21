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
                ID bigint(20) NOT NULL PRIMARY KEY,
                pseudo VARCHAR(50) NOT NULL,
                password VARCHAR(50) NOT NULL
            )";
            
  if ($result = $base->exec($query)) {
    echo "La table est créée";
  } else {
    echo $base->lastErrorMsg();
  }



?>