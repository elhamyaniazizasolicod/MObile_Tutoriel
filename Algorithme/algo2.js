let nombres = [10, 25, 7, 42,123, 18];

let max = nombres[0];

for (let i = 1; i < nombres.length; i++) {
    if (nombres[i] > max) {
        max = nombres[i]; 
    }
}

console.log("La valeur maximale est :", max);

