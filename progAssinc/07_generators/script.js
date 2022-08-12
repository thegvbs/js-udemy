function* genTest(){
    let id  = 0;
    while(true){
        yield id++; // yield salva o valor do id e retorna para a função
    }
}

let criaId = genTest();

console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);