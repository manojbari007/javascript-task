let arr = [1, 2, 3, 4, 5, 6]; //map apply function print new array
let result = arr.map((num) => num * 2);
console.log(result);
//celsius to fahrenheit
let cel = [0, 20, 35, 40];
let f = cel.map((c) => (c * 9) / 5 + 32);
console.log(f);

let person = ["manoj", "ganesh", "vipul"];
let prefixName = person.map((name) => ` Dr.${name}`);
console.log(prefixName);
let uppercase = person.map((item) => item.toUpperCase());
console.log(uppercase);

function stringUp(elem) {
  return elem.toString();
}
let a = [1, 2, 3];
let str = arr.map(stringUp);
console.log(str);

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 999, inStock: true },
  {
    id: 2,
    name: "Smartphone",
    category: "Electronics",
    price: 499,
    inStock: false,
  },
  { id: 3, name: "Tablet", category: "Electronics", price: 299, inStock: true },
  {
    id: 4,
    name: "Desk Chair",
    category: "Furniture",
    price: 150,
    inStock: true,
  },
  {
    id: 5,
    name: "Office Lamp",
    category: "Furniture",
    price: 80,
    inStock: true,
  },
  {
    id: 6,
    name: "Headphones",
    category: "Electronics",
    price: 120,
    inStock: false,
  },
];

// let res = products.map((p) => (p.category === "Electronics" ? p.name : "0"));\
// let res = products.filter(
//   (p) => p.price > 100 && p.inStock && p.category == "Furniture"
// );
// console.log(res);

let t = products.find(
  (product) => product.price == Math.abs(...products.map((p) => p.price))
);
console.log(t);
