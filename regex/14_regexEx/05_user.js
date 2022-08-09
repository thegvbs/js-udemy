let regexUser = /^[a-zA-Z0-9_-]{3,16}$/; 

console.log(regexUser.test("gabzume"));
console.log(regexUser.test("gabzume_1"));
console.log(regexUser.test("ga"));
