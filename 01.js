function isFibonacci(n) {
    let a = 0, b = 1;
    while (b < n) {
      let temp = a;
      a = b;
      b = temp + b;
    }
    return b === n || n === 0;
  }
  
  const number = 21; // entrada
  if (isFibonacci(number)) {
    console.log(`O número ${number} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`O número ${number} não pertence à sequência de Fibonacci.`);
  }
  