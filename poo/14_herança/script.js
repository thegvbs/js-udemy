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

let Piton = new Cobra(0, 'Piton');
console.log(Piton);