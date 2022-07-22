class Pessoa{
    constructor(nome, idade, sexo){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
}

Pessoa.prototype.nome = 'Nome'; // define um valor padrão para o nome

let gabs = new Pessoa('Gabriel', 20, 'M'); 
console.log(Pessoa.prototype.nome)
console.log(gabs.nome);