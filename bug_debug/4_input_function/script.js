function checarNumero(valor){
    let resultado = Number(valor);
    if(Number.isNaN(resultado)){
        return null;
    }
    return true;
}

console.log(checarNumero("teste"));
console.log(checarNumero(5));