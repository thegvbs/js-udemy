function Pessoa(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
    }
    Pessoa.prototype.logar = function(){
        console.log('Logando...' + this.nome);
    }

let gabs = new Pessoa('Gabriel', 20, 'M');
console.log(gabs);
gabs.logar();