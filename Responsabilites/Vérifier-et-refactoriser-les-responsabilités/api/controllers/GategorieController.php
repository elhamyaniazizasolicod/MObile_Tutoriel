
<?php

require_once __DIR__ . '/../../backend/classes/GestionCategorie.php';

$gestionCategorie = new GestionCategorie();
$categories = $gestionCategorie->getAll();

$resultat = [];

foreach ($categories as $categorie) {
    $resultat[] = [
        'id' => $categorie->getId(),
        'nom' => $categorie->getNom(),
        'description' => $categorie->getDescription()
    ];
}

header('Content-Type: application/json; charset=utf-8');

echo json_encode(
    $resultat,
    JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE
);
