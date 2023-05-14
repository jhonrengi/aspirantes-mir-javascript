// escribe la función sum acá

function sum(Array){

    let acumulador = 0;

    for (let i =0 ; i< Array.length; i++) {
        acumulador = acumulador + Array[i];
        
    }
    return acumulador;
}

console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0