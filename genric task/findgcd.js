function findGCD(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

const a = 16;
const b = 12;
const gcd = findGCD(a, b);
console.log(`The GCD  is: ${gcd}`);
