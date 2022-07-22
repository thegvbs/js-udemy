function multiplicarTresNumeros(x, y, z){
    return x * y * z;
}

console.log(multiplicarTresNumeros(2, 3, 4));

const mult = multiplicarTresNumeros(5, 4, 8);

console.log (`O valor de mult é: ${mult}`);


function driveLicense(idade, cnh){
    if (idade >= 18 && cnh == true){
        return true;
    } else {
        return false;
    }
}

console.log(driveLicense(19, true));
console.log(driveLicense(17, false));
console.log(driveLicense(44, 0));