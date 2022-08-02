let array1 = [1, 2, 3, 4, 5];
let array2 = [];

function iteraVetor(arr){
    if(arr.lenght == 0){
        throw new Error("Array vazio");
    } else{
    for(let i = 0; i < arr.length; i++){
        console.log(i);
        }
    }
}

iteraVetor(array1);
iteraVetor(array2);