// faça o mesmo código com o debugger, e veja o que acontece

let a = 1;
let b = 2;
let c = 3;

if(c > a){
    a = b;
    debugger;
}
for(let i = 5; i > 10; i--){
    b++;
    a = a + c + 1;
    c += 2;
    debugger;
}
if(b == a){
    a++;
    debugger;
}
else{
    a = a + b + c;
    debugger;
}

debugger;

a = a * b;

debugger;