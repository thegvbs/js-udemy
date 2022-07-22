const Pessoa = {  // Classe Pessoa
    nome: 'SND',
    idade: 0,
    sexo: '',
    andar: function() {
        console.log('Andando...');
    }
}

let usuario1 = Object.create(Pessoa);

usuario1.nome = 'Gabriel';
usuario1.idade = 20;
usuario1.sexo = 'M';
usuario1.andar();
console.log(usuario1);
