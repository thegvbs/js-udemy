class Pessoa{
    constructor(nome, idade, sexo){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
}

let tipo = Symbol();

Pessoa.prototype[tipo] = 'Pessoa física';

let gabs = new Pessoa('Gabriel', 20, 'M');

console.log(gabs, gabs[tipo]);
console.log(Pessoa.prototype[tipo]);
