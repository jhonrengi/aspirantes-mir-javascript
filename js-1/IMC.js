
let numero1 = 0;
let numero2 = 0;
// escribe la función bmi acá
function bmi (numero1, numero2){
    let IMC= (numero1)/(numero2*numero2);
    return IMC;
}


// código de prueba
console.log(bmi(65, 1.8)) // 20.061728395061728
console.log(bmi(72, 1.6)) // 28.124999999999993
console.log(bmi(52, 1.75)) //  16.979591836734695