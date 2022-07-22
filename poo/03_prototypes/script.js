// Prototype é um objeto que é pai de todos os objetos do JS.


const perfil = {
    idade: 20,    
}

console.log(Object.getPrototypeOf(perfil)); // Object
console.log(perfil.hasOwnProperty('idade')); // true