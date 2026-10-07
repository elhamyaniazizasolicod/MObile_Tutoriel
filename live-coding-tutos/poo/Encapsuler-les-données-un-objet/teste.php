<?php
require_once 'categories.php';

$data=new Categories("php","bleu");

$data->setNom("php");
$data->setCouleur("bleu");

$data->afficher();
?>