function findHCF(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

const b = 10;
const a = 20;
const hcf = findHCF(a, b);
console.log(`hcf F no is: ${hcf}`);
