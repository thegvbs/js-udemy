class Pessoa{
    constructor(nome, idade, sexo){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
}

Pessoa.prototype.tipo = 'Pessoa física';

let gabs = new Pessoa('Gabriel', 20, 'M');
console.log(gabs, gabs.tipo);