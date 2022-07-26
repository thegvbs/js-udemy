class Carrinho{
    constructor(itens, quantidadeTotal, valorTotal){
    this.itens = itens;
    this.quantidadeTotal = quantidadeTotal;
    this.valorTotal = valorTotal;
    }
    addItem(item, preco, quantidade){
        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho] == item.id){
                this.itens[itemCarrinho].quantidade += quantidade;
                this.itens[itemCarrinho].valorTotal += preco * quantidade;
                return;
            }
        }
    }
    removeItem(item, preco, quantidade){
        this.itens.pop(item);
    }
}
    let carrinho = new Carrinho([
        {
            id: 1,
            nome: 'Celular',
            preco: 1000,
            quantidade: 1

        },
        {
            id: 2,
            nome: 'Notebook',
            preco: 3456,
            quantidade: 1
        },
        {
            id: 3,
            nome: 'Monitor 27',
            preco: 2700,
            quantidade: 1
        } 
    ], 3, 7156);

    carrinho.addItem({id: 1, nome: 'Celular', preco: 1000, quantidade: 1});
    carrinho.removeItem({id: 2, nome: 'Notebook', preco: 3456, quantidade: 1});
    console.log(carrinho);    
