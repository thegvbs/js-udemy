let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numeros.slice(0, 5)); // [0, 1, 2, 3, 4]
console.log(numeros.slice(4, 6)); // [4, 5], retorna sempre um número antes do número final
console.log(numeros.slice(4, -2)); // começa no 4 e remove 2 números no final 