class Endereco{
    constructor(rua, numero, cidade, estado){
        this.rua = rua;
        this.numero = numero;
        this.cidade = cidade;
        this.estado = estado;
    }
    set novaRua(novaRua){
        this.rua = novaRua;
    }
    set novoNumero(novoNumero){
        this.numero = novoNumero;
    }
    set novaCidade(novaCidade){
        this.cidade = novaCidade;
    }
    set novoEstado(novoEstado){
        this.estado = novoEstado;
    }
}

let endereço1 = new Endereco('Rua dos Bobos', '123', 'São Paulo', 'SP');
endereço1.novaRua = 'Rua Augusta';
endereço1.novoNumero = '456';
endereço1.novaCidade = 'São Paulo';
endereço1.novoEstado = 'SP';
console.log(endereço1);
