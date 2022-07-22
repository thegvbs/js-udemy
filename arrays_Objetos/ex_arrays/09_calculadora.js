const calculadora = {
    somar: function(a, b) {
        return a + b;
    },
    multiplicar: function(a, b) {
        return a * b;
    },
    dividir: function(a, b) {
        return a / b;
    },
    subtrair: function(a, b) {
        return a - b;
    }
}

console.log(calculadora.somar(1, 2));
console.log(calculadora.multiplicar(1, 2));
console.log(calculadora.dividir(1, 2));
console.log(calculadora.subtrair(1, 2));