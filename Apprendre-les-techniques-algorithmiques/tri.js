// 1. Créer un tableau avec des nombres désordonnés
let nombres = [8, 3, 10, 1, 6, 4, 2];

// 2. Afficher le tableau avant le traitement
console.log("Avant le tri :", nombres);

// 3. Construire le traitement de tri
for (let i = 0; i < nombres.length; i++) {
    for (let j = i + 1; j < nombres.length; j++) {

        if (nombres[j] < nombres[i]) {
            // Échanger les deux valeurs
            let temporaire = nombres[i];
            nombres[i] = nombres[j];
            nombres[j] = temporaire;
        }
    }
}

// 4. Afficher le tableau après le traitement
console.log("Après le tri :", nombres);
