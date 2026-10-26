<?php
require 'Categorie.php';

class GestionCategorie{
    public function getAll(): array{
        return [
            new Categorie(1,"Design", "red","design"),
            new Categorie(2,"Web","blue", "web")
        ];
    }
}
?>