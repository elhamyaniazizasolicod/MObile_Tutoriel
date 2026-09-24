<?php
require_once 'Categorie.php';
$categorie1 = new Categorie(1, "PHP", "bleu", "💻");
$categorie2 = new Categorie(2, "JavaScript", "Jaune", "⚡");

$categorie1->afficher();
echo "<br>";

$categorie2->afficher();

?>