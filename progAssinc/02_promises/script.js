let promise = Promise.resolve(5 + 10);

promise.then((value) => {
    console.log(`O resultado é ${value}`);
});

// falha de uma promise

let promise2 = Promise.resolve(new Error("Falhou"));

promise2.then(value => console.log(value)) // não vai executar pois é uma promise de erro
.catch(reason => console.log("Falhou : " + reason)); // vai executar pois é uma promise de erro