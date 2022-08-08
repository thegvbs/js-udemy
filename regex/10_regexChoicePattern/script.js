let frutas = /\d (bananas| maçãs| laranjas) /; // funcionacomo um or 

console.log(frutas.test("10 bananas")); // true
console.log(frutas.test("10 maças")); // true
