let tipoDado = (dado) => {
    if (typeof dado === 'number') {
        return 'Número';
    } else if (typeof dado === 'string') {
        return 'String';
    } else if (typeof dado === 'boolean') {
        return 'Booleano';
    } else if (typeof dado === 'undefined') {
        return 'Indefinido';
    } else if (typeof dado === 'function') {
        return 'Função';
    } else if (typeof dado === 'object') {
        return 'Objeto';
    } else {
        return 'Não sei';
    }
}

console.log(tipoDado(5));
console.log(tipoDado('Teste'));
console.log(tipoDado(true));
console.log(tipoDado(undefined));
console.log(tipoDado(function() {}));
console.log(tipoDado({}));