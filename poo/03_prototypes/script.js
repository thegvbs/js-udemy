// Prototype é um padrão de projeto que permite que classes sejam extendidas.


const perfil = {
    idade: 20,    
}

console.log(Object.getPrototypeOf(perfil)); // Object
console.log(perfil.hasOwnProperty('idade')); // true