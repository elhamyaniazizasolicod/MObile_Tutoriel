<?php
require_once 'Categories.php';
$data = new Categorie(1,"php","red","📞");
$data1 =new Categorie(2,"html","bleu","🚉");

$data->afficher();
echo "<br>";
$data1->afficher();

?>