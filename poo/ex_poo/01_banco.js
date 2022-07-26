class Banco{
    constructor(nome, agencia, saldo){
    this.nome = nome;
    this.agencia = agencia;
    this.saldo = 0;
}
    depositar(valor){
        console.log(`${this.nome} depositou ${valor} reais.`);
        this.saldo += valor;
    }
    sacarValor(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
            console.log(`Sacou ${valor} reais.`);
        }
        else{
            console.log('Saldo insuficiente.');
        }
    }
}

let gabs = new Banco('Gabs', '123');
gabs.depositar(1000); // Depositou 1000 reais.
gabs.depositar(1000); // Depositou 1000 reais.
console.log(gabs)