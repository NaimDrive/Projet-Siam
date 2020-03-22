# Projet-Siam
```Markdown
Projet P-WEB 2020
    Binôme:
        - SEDDAR Naïm
        - BENOIT Baptiste
    Lien du repository:
        https://github.com/NaimDrive/Projet-Siam
```

## I. Choix techniques
D'un point de vue technique, les technologies utilisées sont :
- SQLITE3
- PHP
- Javascript (Avec JQuery)
- HTML (Avec Bootstrap)

Nous nous sommes orientés sur une application web dynamique, privilégiant le confort de l'utilisateur.
De ce fait, le serveur est peu sollicité. 


## II. L'architecture choisie

Le projet est divisé en trois grandes parties :
- Modèle (.ajax.php)
- Vue (.html)
- Contrôleur (.js)

Cette architecture a l'avantage de permettre le transit de données de manière dynamique avec l'utilisateur.

## III. La base de données

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


### Informations utiles
    Login       Mot de passe      Admin
    --------------------------------------
    admin       password            1
    Naim        bg                  0
    Baptiste    bg                  0
    Albert      123                 1
    Jeune       pokemon             0
    Alexandre   bg                  1

## IV. Utilisateur et admin

Tout utilisateur (et donc, admin) peut:
- Se connecter
- Modifier son mot de passe
- Visualiser les parties disponibles
- Créer une partie
- Rejoindre une partie (à condition qu'il y est de la place)
- Jouer
- Se déconnecter

L'admin peut quant à lui :
- Créer un compte joueur
- Visualiser toutes les parties existantes
- Supprimer n'importe quel partie
- Rejoindre une partie pleine en tant que spectateur

## V. Comment jouer

`Toutes les actions, tel que la sélection d'un pion ou d'une case, se font en cliquant.`

### Placer ou déplacer un pion
Pour cela il suffit de :
1. Sélectionner un pion
2. Sélectionner une case
3. Appuyer sur le bouton `Déplacer/Placer pion`

### Tourner un pion
1. Sélectionner un pion sur le plateau
2. Appuyer sur le bouton `Tourner pion`

### Enlever pion
1. Sélectionner un pion sur le plateau
2. Appuyer sur le bouton `Enlever pion`

### Pousser pion
1. Sélectionner un pion sur le plateau
2. Appuyer sur le bouton `Pousser pion`

## VI. Lancer le projet

Le jeu requiert un serveur supportant PHP ainsi que SQLITE3.

#### Solution n°1
Utiliser un WAMP (MAMP sur Mac, ou LAMP sur Linux).

### Solution n°2
Vous pouvez lancer un serveur via une ligne de commande. Cela nécessite l'installation de php et sqlite3 pour php (`sudo apt-get install php-sqlite3`).

Rendez-vous à la racine du projet et executez la commande suivante :
-  `php -S 127.0.0.1:8000`

Ensuite, dans votre navigateur, entrez dans l'URL `http://127.0.0.1:8000/`

Et vous pouvez jouer !