function saudacao(nome){
    if(typeof(nome == String)){
        console.log("Olá " + nome);
    }
    throw new Error("Nome deve ser uma string");
}
saudacao("João");
saudacao(1);