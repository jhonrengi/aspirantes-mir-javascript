// escribe la función maxIndex acá
function maxIndex(Arr)
{
 
    if (Arr.length === 0){
        return -1;
    }
    
    let grande = Arr[0];
    let UbicacionIndex = 0;

    for (let i = 0; i < Arr.length; i++) {

        
        
        //guardar = Arr[i];
        if(grande<Arr[i]){

            grande = Arr[i];
            UbicacionIndex = i;
        }
    }return UbicacionIndex;
    


}


console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1