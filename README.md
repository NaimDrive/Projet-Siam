# Projet-Siam
```Markdown
Projet P-WEB 2020
    Binôme:
        - SEDDAR Naïm
        - BENOIT Baptiste
    Lien du repository:
        https://github.com/NaimDrive/Projet-Siam
```

### Choix techniques
// Développer sur les choix    


### L'architecture choisie
// Parler du "framework"

### La base de données

La base de données est composée de deux tables.

### La table `users`
    id INTEGER PRIMARY KEY,
    pseudo VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    admin INTEGER(1) NOT NULL

### La table `parties`
    id INTEGER PRIMARY KEY,
    nom VARCHAR NOT NULL,
    data BLOB NOT NULL,
    joueurCourant INTEGER NOT NULL DEFAULT: 1


##### Informations utiles
    Login       Mot de passe      Admin
    --------------------------------------
    admin       password            1
    Naim        bg                  0
    Baptiste    bg                  0
    Albert      123                 1
    Jeune       pokemon             0
    Alexandre   bg                  1

