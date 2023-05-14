function join(Array){

    let acumulador = 0;
    let FinalString = "";

    for (let i =0 ; i< Array.length; i++) {
        acumulador = acumulador + Array[i];
        FinalString = FinalString + Array[i] + " ";
        
    }
    return FinalString;
}

console.log(join([1, 2, 3])) // 6
console.log(join([10, 8, 12, 5])) // 35
console.log(join([])) // 0