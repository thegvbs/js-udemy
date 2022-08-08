const dom = /www.\w+\.com|com.br/;

console.log(dom.test("www.google.com")); // true
console.log(dom.test("vivo.com.br")); // true
