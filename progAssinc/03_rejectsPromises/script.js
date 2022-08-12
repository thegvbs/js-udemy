function verificaNum(num) {
    return new Promise((resolve, reject) => {
        if (num == 2) {
            resolve(console.log(`O número é: ${num}`));
        }
        else {
            reject(new Error('Numero invalido, o número não é 2'));
        }
    });
}

verificaNum(2);
verificaNum(3);
