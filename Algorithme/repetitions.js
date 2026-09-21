let nombres = [1, 2, 3, 4, 5, 6, 2,3];
let repet = [];

for (let index = 0; index < nombres.length; index++) {
    let count = 0;
    for (let i = 0; i < nombres.length; i++) {
        if(nombres[i] === nombres[index]){
            count++
        }   
    }
    if(count > 1){
        let alreadyExist = false;
        for (let j = 0; j < repet.length; j++) {
            if(repet[j] === nombres[index]){
                alreadyExist = true;
            }
        }
        if(alreadyExist == false){
            repet[repet.length] = nombres[index]
        }

    }   

}

console.log(repet);