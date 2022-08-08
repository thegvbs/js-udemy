const email = /\w+\@\w+\.com|com.br/; // valida o email


console.log(email.test("gabs@gmail.com")); // true
console.log(email.test("gabriel@outlook.com")); // true
