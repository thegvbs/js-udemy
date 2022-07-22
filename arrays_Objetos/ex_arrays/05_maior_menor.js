const lista1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const lista2 = [1, 2, 3, 4];

function verifica(a) {
    if(a.length > 5) {
        return 'Muitos elementos';
    }
    else{
        return 'Poucos elementos';
    }
}

console.log(verifica(lista1));
console.log(verifica(lista2));