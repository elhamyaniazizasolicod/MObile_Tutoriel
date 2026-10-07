<?php

header("Content-Type: application/json");

$file = "categories.json";

if ($_SERVER["REQUEST_METHOD"] === "GET") {

    $categories = json_decode(
        file_get_contents($file),
        true
    );

    echo json_encode([
        "success" => true,
        "data" => $categories
    ]);

    exit;
}


// ===============================
// POST : ajouter une catégorie
// ===============================

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Lire les données envoyées par JavaScript
    $data = json_decode(
        file_get_contents("php://input"),
        true
    );

    // Lire les anciennes catégories
    $categories = json_decode(
        file_get_contents($file),
        true
    );

    // Créer la nouvelle catégorie
    $nouvelleCategorie = [
        "id" => count($categories)+ 1,
        "nom" => $data["nom"],
        "couleur" => $data["couleur"],
        "icone" => $data["icone"]
    ];

    // Ajouter dans le tableau
    $categories[] = $nouvelleCategorie;

    // Enregistrer dans JSON
    file_put_contents(
        $file,
        json_encode($categories, JSON_PRETTY_PRINT)
    );

    echo json_encode([
        "success" => true,
        "message" => "Catégorie ajoutée",
        "data" => $nouvelleCategorie
    ]);

    exit;
}