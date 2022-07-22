// crie uma função recursiva de fibonacci

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci é:", fibonacci(11));