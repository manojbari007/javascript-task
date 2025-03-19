const gcd = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

const lcm = (a, b) => Math.abs(a * b) / gcd(a, b);

// const number1 = 4;
// const number2 = 6;
console.log("lcm of two number: ", lcm(6, 4));
