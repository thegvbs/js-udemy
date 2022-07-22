let pessoa= {
    nome: "Gabriel",
    idade: 20
}

console.log(pessoa.nome);
console.log(pessoa.idade);

// JSON to string

const car = {
    brand: "Ford",
    model: "Mustang",
    year: 1969,
    color: "red"
}

let jsonToString = JSON.stringify(car);
console.log(jsonToString);

let stringtoJson = JSON.parse(jsonToString);
console.log(stringtoJson);