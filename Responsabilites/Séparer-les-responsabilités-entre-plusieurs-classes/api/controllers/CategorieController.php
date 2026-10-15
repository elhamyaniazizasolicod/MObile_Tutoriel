<?php
require_once __DIR__ . '/../../backend/classes/GestionCategorie.php';
class CategorieController {
    public function listerCategories(): void {
        $gestion = new GestionCategorie();
        $categories = $gestion->getAll();
        
        foreach ($categories as $cat) {
            echo $cat->getNom() . "-".$cat->getCouleur()."<br>" ;
        }
    }
}

$controller = new CategorieController();
$controller->listerCategories();
?>
