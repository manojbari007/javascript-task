let data1 = [0, 1, 2, 3, 4, 5, 6];

let result = data1.reduce((sum, item) => sum + item);
console.log(result);

let data2 = ["0", "1", "2", "3", "4", "5", "6"];
let total = data1.map(Number).reduce((sum, item) => sum + item);
// let tota2 = data1.map((num) => Number(num)).reduce((sum, item) => sum + item);

console.log(total);

let data3 = [0, 1, 2, 3, 4, 5, 6, "0", "1", "2", "3", "4", "5", "6"];

let totalSum = data3.map(Number).reduce((sum, item) => sum + item);
console.log(totalSum);

let data4 = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "a",
  "b",
  "c",
];

let sumOfTotal = data4
  .map(Number)
  .filter((item) => !isNaN(item))
  .reduce((sum, item) => sum + item, 0);
console.log(sumOfTotal);
