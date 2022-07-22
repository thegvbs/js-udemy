function criarPessoa(nome, idade, sexo) {
    let usuario = Object.create({});
    usuario.nome = nome;
    usuario.idade = idade;
    usuario.sexo = sexo;
    return usuario;
}

let gabs = criarPessoa('Gabriel', 20, 'M');

console.log(gabs);