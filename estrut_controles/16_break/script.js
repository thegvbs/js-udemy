let nome = "Gabs";

for(let i = 0; i < 10; i = i + 1) {
    
    if(i == 3){
        nome = "Gabriel";
    }

    if(i == 5 && nome == 'Gabriel'){
        console.log("Nome atingido, encerrando loop.");
        break;
    }

    console.log(i);
}
