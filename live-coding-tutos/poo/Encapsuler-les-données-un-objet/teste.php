<?php
require_once 'categories.php';

$data = new Categories("php","red");

$data->setNom("php");
$data->setColeur("bleu");

$data->afficher();
?>