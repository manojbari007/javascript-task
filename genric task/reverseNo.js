// let num = 789456;
// let str = num.toString();
// let result = str.split("").reverse().join();
// console.log(result);

function reverseDigit(number) {
  const reverseNumber = parseInt(
    number.toString().split("").reverse().join("")
  );
  return reverseNumber;
}

let inputNumber = 789456;
let result = reverseDigit(inputNumber);
console.log(result);
