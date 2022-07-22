function lembrarSoma(x){
    return function(y){
        return x + y;
    }
}

let soma1 = lembrarSoma(2);
console.log(soma1(5));

let soma2 = lembrarSoma(3);
console.log(soma2(5));

// Contador
function contador(i){
    let cont = i;
    let incrementar = function(){
        console.log(cont);
        cont++;
}
    return incrementar;
    }

    let meuContador = contador(20);
    meuContador();