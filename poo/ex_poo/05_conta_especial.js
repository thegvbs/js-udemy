class Conta{
    constructor(saldo, poupança, jurosPoup){
        console.log('Bem vindo (a), cliente');
        this.saldo = 0;
        this.poupança = 0;
        this.jurosPoup = 0.005;
    }
    deposito(valor){
        this.saldo += valor;
        this.poupança += valor * 0.1
        console.log(`Você depositou R$ ${valor}, seu saldo é de R$ ${this.saldo},00`);
    }
    saque(valor){
        this.saldo -= valor;
        console.log(`Você sacou R$ ${valor}, seu saldo é de R$ ${this.saldo},00`);
        }
    transferir(valor){
        Conta = this.poupança;
    }
}
    class Especial extends Conta{
        constructor(saldo, poupança, jurosPoup){
            super(saldo, poupança);
            this.jurosPoup *= 2;
            }
        }

let user1 = new Conta;
let user2 = new Especial;
user2.deposito(5000);
user2.saque(500);
user1.deposito(1000);
user1.saque(250);
console.log(user1, user2);