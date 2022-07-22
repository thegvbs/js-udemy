class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
    get veNome(){
        return `O nome é: ${this.nome}`;
}
    set criaNome(pNome){
        this.nome = pNome;
    }
}
        
let gabs = new Pessoa ('Gabriel Santos');
console.log(gabs.veNome);
gabs.criaNome = 'Gabriel Francisco';
console.log(gabs.veNome);
