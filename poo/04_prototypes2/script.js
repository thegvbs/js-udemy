const perfil = {
    idade: 20,    
}

const perfilNovo = Object.create(perfil);


console.log(perfilNovo.idade);
console.log(perfilNovo.hasOwnProperty('idade'));  // false
console.log(Object.getPrototypeOf(perfilNovo) == perfil); // true