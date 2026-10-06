<?php
class Categories{ 
    private string $nom;
    private string $coleur;

    public function __construct(string $nom ,string $coleur){
        $this->nom=$nom;
        $this->coleur=$coleur;
    }
    public function getNom():string{
        return $this->nom;
    }
    public function setNom(string $nom):void{
        $this->nom=$nom;

    }
    public function getColeur():string{
        return $this->coleur;
    }
    public function 
   
}
?>