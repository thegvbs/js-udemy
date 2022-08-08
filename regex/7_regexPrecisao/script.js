const cep = /\d{5}-\d{3}/; 

console.log(cep.test("01234-567")); // true

const data = /\d{2}\d{2}\d{4}/; 

console.log(data.test("01/01/2019")); // true
