<?php

header("Content-Type: application/json");

$file = "categories.json";
// Vérifier si le fichier existe
if (!file_exists($file)) {
    file_put_contents($file, json_encode([]));
}

// Lire les données
function lireCategories()
{
    global $file;

    $contenu = file_get_contents($file);

    return json_decode($contenu, true) ?? [];
}

// Sauvegarder les données
function sauvegarderCategories($categories){
    global $file;

    file_put_contents(
        $file,
        json_encode(
            $categories,
            JSON_PRETTY_PRINT
        )
    );
}

$method = $_SERVER["REQUEST_METHOD"];

if ($method === "GET") {

    $categories = lireCategories();

    echo json_encode([
        "success" => true,
        "data" => $categories
    ]);

}

elseif ($method === "POST") {

    $categories = lireCategories();

    $data = json_decode(
        file_get_contents("php://input"),
        true
    );

    $nouvelleCategorie = [

        "id" => count($categories) + 1,

        "nom" => $data["nom"],

        "couleur" => $data["couleur"],

        "icone" => $data["icone"]

    ];

    $categories[] = $nouvelleCategorie;

    sauvegarderCategories($categories);

    echo json_encode([
        "success" => true,
        "message" => "Catégorie ajoutée",
        "data" => $nouvelleCategorie
    ]);

}

elseif ($method === "PUT") {

    $categories = lireCategories();

    $data = json_decode(
        file_get_contents("php://input"),
        true
    );

    $id = $data["id"];

    $trouve = false;

    foreach ($categories as &$categorie) {

        if ($categorie["id"] == $id) {

            $categorie["nom"] = $data["nom"];

            $categorie["couleur"] = $data["couleur"];

            $categorie["icone"] = $data["icone"];

            $trouve = true;

            break;
        }
    }

    if ($trouve) {

        sauvegarderCategories($categories);

        echo json_encode([
            "success" => true,
            "message" => "Catégorie modifiée"
        ]);

    } else {

        echo json_encode([
            "success" => false,
            "message" => "Catégorie introuvable"
        ]);
    }

}

elseif ($method === "DELETE") {

    $categories = lireCategories();

    $data = json_decode(
        file_get_contents("php://input"),
        true
    );

    $id = $data["id"];

    $nouvellesCategories = [];

    foreach ($categories as $categorie) {

        if ($categorie["id"] != $id) {

            $nouvellesCategories[] = $categorie;
        }
    }

    sauvegarderCategories($nouvellesCategories);

    echo json_encode([
        "success" => true,
        "message" => "Catégorie supprimée"
    ]);

}


else {

    echo json_encode([
        "success" => false,
        "message" => "Méthode HTTP non autorisée"
    ]);

}