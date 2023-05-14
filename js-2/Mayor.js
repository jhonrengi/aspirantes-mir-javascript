// escribe la función max acá
function max(Arr)
{
 
    let grande = Arr[0];
    

    for (let i = 0; i < Arr.length; i++) {
        
        //guardar = Arr[i];

        if (Arr.length === 0){
            return undefined;
        }

        if(grande<Arr[i]){

            grande=Arr[i];

        }
    }
    return grande;
    


}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined