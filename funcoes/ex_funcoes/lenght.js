// crie uma função que recebe uma string e informa se ela é maior ou menor que 10 caracteres

let tamanho = (string) => {
    if (string.length > 10) {
        return 'Maior que 10 caracteres'
    }
    else {
        return 'Menor que 10 caracteres'
    }
}

console.log(tamanho('testeteste'));