// let myObj = {
//   name: "kala",
//   age: 34,
//   id: 980,
// };

// let r = JSON.stringify(myObj); //convert js object to json string
// console.log(r);
// console.log(typeof r);

// let obj = JSON.parse('{ "name": "lala","age": 34 }');
// console.log(obj);
// console.log(typeof obj);

// let student = [
//   {
//     id: "001",
//     name: "kashi",
//     blood: "o",
//   },
//   {
//     name: "kala",
//     age: 90,
//   },
// ];

// let result = Array.isArray(student);

// let a;
// console.log(typeof a);

let person = {
  name: "smith",
  id: 98908,
  age: 36,
  professional: "cricketer",
};
console.log(person.professional);

function addValue(num1, num2) {
  return num1 + num2;
}
let a = 90;
let b = 80;
console.log("add two numbers", addValue(a, b));

//buffer  data type in nodejs  buffer store binary data

let x = new Buffer(1000);
let str = " ";
x.write(str);
console.log(str.length);
console.log(x.length);
