<?php

class Categorie
{
    private int $id;
    private string $nom;
    private string $couleur;
    private string $icone;

    public function __construct(
        int $id, 
        string $nom,
        string $couleur,
        string $icone
    ) {
        $this->id = $id;
        $this->nom = $nom;
        $this->couleur = $couleur;
        $this->icone = $icone;
    }

    // Getter et Setter pour id
    public function getId(): int
    {
        return $this->id;
    }

    public function setId(int $id): void
    {
        $this->id = $id;
    }

    // Getter et Setter pour nom
    public function getNom(): string
    {
        return $this->nom;
    }

    public function setNom(string $nom): void
    {
        $this->nom = $nom;
    }

    // Getter et Setter pour couleur
    public function getCouleur(): string
    {
        return $this->couleur;
    }

    public function setCouleur(string $couleur): void
    {
        $this->couleur = $couleur;
    }

    // Getter et Setter pour icone
    public function getIcone(): string
    {
        return $this->icone;
    }

    public function setIcone(string $icone): void
    {
        $this->icone = $icone;
    }

    // Afficher la catégorie
    public function afficher(): void
    {
        echo $this->nom . " - " . $this->couleur . " - " . $this->icone;
    }
}