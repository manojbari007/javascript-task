//filter   check condition in array print new array
let arr = [12, 3, 4, 2, 5, 6];
let s = arr.filter((num) => num < 4);
console.log(s);

let numbers = [12, 23, 34, 45, 7, 9];
let evenNumber = numbers.filter((num) => {
  return num % 2 == 0;
});
console.log(evenNumber);

const letter = ["kashi", "ganesh", "vipul", "kala", "chaudhari"];
let fourLetter = letter.filter((word) => {
  return word.length > 4;
});
console.log(fourLetter);

const items = [
  {
    name: "bag",
    price: "1000",
  },
  {
    name: "T-shirt",
    price: "550",
  },
  {
    name: "jeans",
    price: "999",
  },
];

let ItemPrice = items.filter((items) => {
  return items.price > 600;
});
console.log(ItemPrice);

let num = [12, 23, 34, 45, 56];
let n = num.reduce((max, curr) => {
  return curr > max ? curr : max;
});
console.log(n);

// const fruits = [
//   {
//     name: "apple",
//     category: "fruit",
//   },
//   {
//     name: "banana",
//     category: "fruits",
//   },
//   {
//     name: "carrot",
//     category: "vegetable",
//   },
// ];

// let v = fruits.reduce((fruits, category) = {
// return `fruit:${fruits}`

// })
// console.log(v);

const cart = [
  {
    name: "carpet",
    price: 100,
    quantity: 2,
  },
  {
    name: "book",
    price: 200,
    quantity: 10,
  },
  {
    name: "pencil",
    price: 50,
    quantity: 13,
  },
  {
    name: "laptop",
    price: 300,
    quantity: 2,
  },
];

let totalCost = cart.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);
console.log("total price :", totalCost);

// const students = [
//   {
//     name: "Alice",
//     score: 99,
//   },
//   { name: "Border", score: 10 },
//   {
//     name: "ketan",
//     score: 49,
//   },
// ];

// let TOTAL = students
//   .filter((students) => students.score < 50)
//   .map((students) => students.name.toUpperCase());

// console.log(TOTAL);

let odd = [12, 23, 4, 5, 8];
let result = odd.filter((odd) => {
  return odd % 2 !== 0;
});
console.log(result);

const number = [5, 10, 15, 20];
const final = number
  .filter((num) => num >= 10)
  .map((num) => num * 2)
  .find((num) => num > 20);
console.log(final);

let products = [
  {
    name: "Chair",
    price: 2000,
  },
  { name: "Watch", price: 300 },
  {
    name: "Phone",
    price: 5000,
  },
];
let ProductName = products
  .filter((products) => products.price > 1000)
  .map((products) => {
    return products.name.toUpperCase();
  });
console.log(ProductName);

// const students = [
//   {
//     name: "ketan",
//     score: 45,
//   },
//   {
//     name: "mahesh",
//     score: 88,
//   },
//   {
//     name: "kashi",
//     score: 90,
//   },
// ];
// let topper = students
//   .find((students) => students.score > 70)
//   .reduce((students) => {
//     return students.name.toUpperCase();
//   });
// console.log(topper);

function age(num) {
  return num > 18;
}
let a = [12, 34, 54, 23];
let finals = a.filter(age);
console.log(finals);
