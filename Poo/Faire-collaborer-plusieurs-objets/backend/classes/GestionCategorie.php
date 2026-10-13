<?php
require_once 'Categorie.php';
class CategorieCategorie{
    function getAll():array{
        return[
            new Categorie(1,"Design","red","🖥️"),
            new Categorie(2,"Développement Web","bleu","🖥️")
        ];
    }
}
?>