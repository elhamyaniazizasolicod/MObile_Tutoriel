<?php

require_once 'Categorie.php';

$categorie1 = new Categorie(1, "Ancien nom", "rouge", "❌");
$categorie2 = new Categorie(2, "Ancien nom", "vert", "🔴");

// Utilisation des setters
$categorie1->setNom("PHP");
$categorie1->setCouleur("noir");
$categorie1->setIcone("💻");

$categorie2->setNom("JavaScript");
$categorie2->setCouleur("blanc");
$categorie2->setIcone("⚡");

$categorie1->afficher();

echo "<br>";

$categorie2->afficher();