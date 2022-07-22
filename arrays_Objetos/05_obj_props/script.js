let perfil = {
    nome: "Gabs",
    idade: 20,
    profissao: "Desenvolvedor"
}

let carac = {
    sexo: "Masculino",
    altura: 1.75,
}
delete perfil.profissao; // deleta a propriedade profissao
perfil.foto = false; // adiciona a propriedade foto com o valor false
Object.assign(perfil, carac); // adiciona as propriedades de carac no perfil
console.log(perfil);