let autoEscola = (idade) => {
    if (idade >= 18) {
        return 'Você pode dirigir';
    } else {
        return 'Você não pode dirigir';
    }
}

console.log(autoEscola(20));
console.log(autoEscola(15));