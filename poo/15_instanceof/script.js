class Mamifero { // classe mamífero
    constructor(patas, especie){
        this.patas = patas;
        this.especie = especie;
    }
}
class Cobra extends Mamifero { // classe cobra herda de mamífero
    constructor(patas, especie){
        super(patas, especie); // chama o construtor da classe pai
    }
}

console.log(Cobra instanceof Mamifero); // true