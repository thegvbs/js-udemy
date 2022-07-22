function imprimeNumeros(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]); // imprime os números
    }
}

imprimeNumeros(1, 2, 3, 4, 5);