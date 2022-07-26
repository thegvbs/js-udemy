class Carro{
    constructor(marca, cor, gasolina){
        this.marca = marca;
        this.cor = cor;
        this.gasolina = 50;
    }
    dirigir(){
        while(this.gasolina > 0){
            this.gasolina--;
            console.log(`Dirigindo. L em gasolina: ${this.gasolina}`);
    }       
            console.log("Necessário abastecer.");

}
    set abastece(abastece){
        this.gasolina += abastece;
    }
}

let bmw = new Carro('BMW', "Preta");
bmw.abastece = 100;
bmw.dirigir();