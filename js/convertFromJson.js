function joueursFromJSON(json) {
    joueur1 = new Player(json["joueur1"]["username"], parseInt(json["joueur1"]["animal"]), parseInt(json["joueur1"]["id"]), json["joueur1"]["pions"]);
    joueur2 = new Player((json["joueur2"]["username"] == "" ? null : json["joueur2"]["username"]), parseInt(json["joueur2"]["animal"]), parseInt(json["joueur2"]["id"]), json["joueur2"]["pions"]);
}

function plateauFromJSON(json) {
    plateau = new Plateau(5, json["plateau"]["tableau"]);
}

function tableauFromJSON(json) {
    tmp_tab = new Array();

    json["tableau"].forEach(function(e, i) {
        tmp_tab.push(new Array());
        // console.log(e);
        e.forEach(function(ee, j) {
            
            if(ee["image"]["images"][0] == "") {
                tmp_tab[i].push(new NullObject(ElementPlateau.NULL_OBJECT, i, j));
            } else if(ee["image"]["images"][0].includes("rocher")) {
                tmp_tab[i].push(new Rocher(ElementPlateau.ROCHER));
            } else if(ee["image"]["images"][0].includes("10")) {
                tmp_tab[i].push(new Animaux(ee["orientation"], ElementPlateau.ELEPHANT));
            } else {
                tmp_tab[i].push(new Animaux(ee["orientation"], ElementPlateau.RHINOCEROS));
            }
        });
    });

    plateau["tableau"] = tmp_tab;
} 

function partieFromJSON(json) {
    joueursFromJSON(json);
    plateauFromJSON(json);
    partie = new Partie(plateau, joueur1, joueur2);
}

function animauxFromJSON(json, joueur) {
    var pionJ = new Array();
    json["pions"].forEach(function(e) {
        pionJ.push(new Animaux(e["orientation"], json["animal"]));
    });
    joueur["pions"] = pionJ;
}