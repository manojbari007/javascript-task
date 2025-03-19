//print even no
/* for (let i = 0; i < 20; i++) {
  if (i % 2 == 0) {
    console.log("even no:", i);
  }
}  */

//sum of 1 to 100 no
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

//factorial of numbers
function factorialNumbers(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else n * factorialNumbers(n - 1);
}
let n = 5;
console.log(factorialNumbers(n));

//print arr using loop
let arr = [1, 2, 3, 4, 5];
let arr2 = [];
for (let i = 0; i < arr.length; i++) {
  console.log(arr2);
}

//reverse string
let str = "kashinath";
let reverseStr = str.split("").reverse().join("");
console.log(reverseStr);

// const A = [10, 45, 2, 67, 34];
// function LargestNo(A) {
//   for (let i = 0; i < A.length; i++) {
//     if (A[i] > maxi) maxi = A[i];
//     return maxi;
//   }
// }
// console.log(LargestNo(A));

//find sum of digit number
function sumDigit(num) {
  return num
    .toString() //digit to string convert
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit), 0);
}
console.log(sumDigit(123));
