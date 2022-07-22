function soma(a, b){

    if (a == undefined || b == undefined){
        return "Faltam argumentos";
    } else {
        return a + b;
    }
}

console.log(soma(0));