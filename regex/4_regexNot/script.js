const pontoRegex = /./; // coringa, aceita qualquer caractere

console.log(pontoRegex.test("Letras"));
console.log(pontoRegex.test("128"));
console.log(pontoRegex.test(" "));

const dRegex = /\d/; // digito

console.log(dRegex.test("01236"));
console.log(dRegex.test("Letras"));
console.log(dRegex.test("128"));
console.log(dRegex.test(" "));

const dateReg = /\d\d/; // 2 digitos

console.log(dateReg.test("01236"));

// operador not (!)

const notAeB = /[^ab]/; // não começa com a b
 
console.log(notAeB.test("abcd"));