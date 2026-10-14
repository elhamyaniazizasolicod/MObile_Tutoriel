<?php
require_once __DIR__ . '/../../classes/User.php';
require_once __DIR__ . '/../../classes/Auteur.php';

$user = new User();
$auteur = new Auteur();

// Créer un tableau contenant les deux objets
$personnes = [$user, $auteur];

// Tester le polymorphisme
foreach ($personnes as $personne) {
    echo $personne->getRoleName() . "<br>"."<br>";
}
?>