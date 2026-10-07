<?php
class Categories{
    private string $nom;
    private string $couleur;

    public function __construct(string $nom="",string $couleur=""){
        $this->nom=$nom;
        $this->couleur=$couleur;
    }

    public function getNom():string{
        return $this->nom;
    }
    public function setNom(string $nom):void{
        $this->nom=$nom;
    }
    public function getCouleur():string{
       return $this->couleur;
    }
    public function setCouleur(string $couleur):void{
        $this->couleur=$couleur;
    }

    public function afficher(){
        echo $this->nom . "-" . $this->couleur;
    }
}
?>