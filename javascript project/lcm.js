// function findHCF(a, b) {
//   a = Math.abs(a);
//   b = Math.abs(b);

//   while (b !== 0) {
//     const temp = b;
//     b = a % b;
//     a = temp;
//   }

//   return a;
// }

// function findLCM(a, b) {
//   const hcf = findHCF(a, b);
//   return Math.abs(a * b) / hcf;
// }

// const num1 = 12;
// const num2 = 15;
// const lcm = findLCM(num1, num2);
// console.log(`The LCM of ${num1} and ${num2} is: ${lcm}`);
