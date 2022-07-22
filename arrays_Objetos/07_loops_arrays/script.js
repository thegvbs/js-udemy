let lista = ['Gabriel', 'Gustavo', 'Melissa', 'Pedro'];

for(let i = 0; i <= lista.length; i++){ // para cada indice da lista
    console.log(lista[i]); // printa o item da lista no indice i
if (lista[i] == undefined){ 
    console.log('Não existe valor no indice     ' + i);
    }
}