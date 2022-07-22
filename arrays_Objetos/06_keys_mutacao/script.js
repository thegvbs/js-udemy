// Keys são os índices de um array, valor é o valor do índice.

let objeto = {
    prop1: "valor1",
    prop2: "valor2",
}

console.log(Object.keys(objeto));

// Objetos podem referenciar outros objetos.

let objetoA = {
    pontos: 10,
};

objetoB = objetoA;

let objetoC = {
    pontos: 10,
};

console.log(objetoA == objetoB); // true
console.log(objetoA == objetoC); // false