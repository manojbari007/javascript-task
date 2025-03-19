// console.log("7+8");

//break;
// let a = [23, 34, 45, 56, 67, 7];
// let x = 0;
// for (let i = 0; i < 6; i++) {
//   //   console.log(i);
//   if (i == 4) {
//     break;
//   }
//   console.log(i);

//   //   x = x + a[i];
//   //   console.log(x);
// }

//continue

// let arr1 = [12, 23, 34, 45, 56, 67];
// let a = 0;
// for (let j = 0; j < 6; j++) {
//   console.log("value of arr:", arr1[j]);
//   console.log("value of arr:", j);
//   if (j == 3) {
//     continue;
//   }
//   a = a + j;
//   //   console.log(j);
//   console.log(a);
// }

//while loop
// let count = 0;
// let x = 0;
// while (count < 12) {
//   if (count == 3) {
//     break;
//   }
//   x = x + count;
//   //   console.log("count no:", count);
//   console.log(x);

//   count++;
// }

//continue
// let count = 0;
// let x = 0;
// while (count < 12) {
//   if (count == 3) {
//     continue;
//   }
//   x = x + count;
//   count++;
//   //   console.log("count no:", count);
//   console.log(x);
// }

// let arr = [23, 34, 45, 56, 67];
// let i = 0;
// while (i < 5) {
//   if (i == 3) {
//     continue;
//   }
//   //   console.log("array index value", arr[i]);
//   console.log("array index value", i);

//   i++;
// }

//create Object  type of object literal
// let Obj = {
//   name: "david",
//   age: "60",
//   film: "wanted",
//   job: "film maker",
// };
// console.log(typeof Obj);
// console.log(Obj);

//create object using new()keyword  object constructor
// let obj = new Object();

// (obj.name = "salim"), (obj.age = 65), (obj.film = "shole");

// console.log(obj.name);
// console.log(obj.film);

//modify object properties
// obj.age = 89;
// obj["name"] = "anupam";

//add properties in object
// obj.No_of_film = 35;
// delete obj.age;
// console.log(obj["age"]);
// console.log(obj);
//console.log("age" in obj); //check properties exit in our object  ypu can use hasOwnProperty() method

//this is object
// let obj1 = { name: "kala" };
// let obj2 = { age: 78 };
//merge two of more object
// let obj3 = { ...obj1, ...obj2 };
// console.log(obj3);
// console.log(Object.keys(obj3).length);

// let person = {
//   name: "kala",
//   age: "56",
//   getFunction: function () {
//     return `person name is ${person.name} and your age is ${person.age}`;
//   },
// };

// console.log(person.getFunction());
// myOrder = {
//   productName: "realme earbud",
//   price: 1499,
//   deliverd: "today",
// };

// i = myOrder.productName;
// console.log(i);

//loop
// for (i in myOrder) {
//   console.log(myOrder[i]);
// }

//array in js
// const arr = ["apple", "banana", "kiwi", "mango"];
// arr[1] = "orange";
// console.log(arr.toString());
// console.log(arr.sort());

// console.log(arr);
// console.log(typeof arr);

// let newArr = []; // empty arr
// newArr.push("html");
// console.log(newArr);

// let sum = 0;
// let arr = [12, 11, 4, 5, 6];
// arr.forEach(function (i) {
//   for (let i = 0; i < 5; i++) {
//     sum = sum + arr[i];
//   }
// });
// console.log(sum);
// const numbers = [10, 15, 20, 30];
/* Iterate over this array and find the total sum. */
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// console.log(sum);

// let start = 10;
// let end = 20;
// //print even number
// for (let start = 10; start <= end; start++) {
//   if (start % 2 == 0) {
//     console.log("number is even:", start);
//   }
// }

//reverse string
// let sum = 0;
// let a = [1, 2, 3, 4, 5, 6];
// a.forEach((x) => {
//   // sum += x;
//   console.log(x);
// });
// console.log(sum);

// let arr = [23, 34, 45, 56, 67];
// let sum = arr.reduce(function (x, y) {
//   return x + y;
// }, 0);
// console.log(sum)
// console.log(arr.unshift());
// console.log(arr.pop());
// console.log(arr.push());
// console.log(arr.slice(2, 5));

//set
// let s = new Set();

// s.add("tata");
// s.add("byd");
// s.add("volvo");

// let obj = {
//   cars: "bmw",
// };
// s.add(obj);
// console.log(s);
// console.log(typeof s);

// const d = new Date(212434454);
// const dateString = new Date("12 march 2025");
// console.log(dateString);

// console.log(d);

// console.log(9 + 8 + "mdh");
// console.log("mdh" + 9 + 8);
// const car = {
//   name: "bmw",
//   model: "xl7",
//   color: "dark blue",
//   year: 2020,
// };
// for (let key in car) {
//   console.log(`${key}:${car[key]}`);
// }

// let arr = [1, 2, 3, 4, 5];
// for (const i in arr) {
//   console.log(arr[i]);
// }
// let s = new Set(){

// }
// console.log(Math.PI);
// console.log(Math.abs(8.6));
// console.log(Math.max(45, 334, 67));
// console.log(Math.min(54, 34, 67));
// console.log(Math.trunc(34.34));
// console.log(Math.sqrt(81));

//map
// let m = new Map([
//   ["key1", "value1"],
//   ["key2", "value2"],
//   ["key3", "value3"],
// ]);
// console.log(m);
// console.log(typeof m);

// let result = new Map();
// result.set("k1", "v1");
// result.set("k2", "v2");
// result.set("k3", "v3");
// console.log(result);

// function print(key, value) {
//   console.log(value + "=>" + key);
// }
// result.forEach(print);

//.get() acess key value
// console.log(result.get("k1"));
// console.log(result.get("k3"));

// console.log(result.set("key1"));
// let s = new Set([12, 3, 4, 5, 6]);
// console.log(typeof s);
// console.log(s);

// let s2 = new Set("gofood company");
// console.log(s2);

// let s3 = new Set();
// s3.add(12);
// s3.add(34);
// // console.log(s3);
// console.log(s2.value);

// let s = new Set(["bmw", "mahindra", "tata", "byd", "honda"]);
// // console.log(s.values());
// // console.log(s.keys());
// s.forEach(function (value) {
//   console.log(value);
// });

//find total price of all item in cart
// const cart = [
//   {
//     name: "apple",
//     price: 100,
//     quantity: 3,
//   },
//   {
//     name: "banana",
//     price: 80,
//     quantity: 12,
//   },
//   {
//     name: "kiwi",
//     price: 150,
//     quantity: 4,
//   },
// ];

// const totalPrice = cart.reduce((total, item) => {
//   total + item.price * item.quantity;
// }, 0);
// console.log(totalPrice);

// const sentence = "hello world hello everyone happy";
// const countWord = sentence.split(" ").reduce((count, word) => {
//   count[word] = (count[word] || 0) + 1;
//   return count;
// }, {});
// console.log(countWord);
// console.log(typeof sentence);
// console.log(typeof countWord);

// function myFunc(name) {
//   return `your name is ${name}`;
// }
// console.log(myFunc("ayush"));

//function expression
// const result = function (age) {
//   return ` your age is ${age}`;
// };
// console.log(result(45));

//arrow function
// const sub = (a, b) => a + b;
// console.log(sub(1, 2));

// const Calculator = {
//   add: function (x, y) {
//     return x + y;
//   },
//   multiply: function (x, y) {
//     return x * y;
//   },
// };
// console.log(Calculator.add(30, 40));
// console.log(Calculator.multiply(30, 40));

//Find maximum number of array
// function FindMax(arr) {
//   let max = arr[0];
//   for (let num of arr) {
//     if (num > max) {
//       max = num;
//     }
//   }
//   return max;
// }
// console.log(FindMax([23, 43, 54, 12, 21, 78]));

//reversed array
// function reverseArray(arr) {
//   let reversed = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversed.push(arr[i]);
//   }
//   return reversed;
// }
// console.log(reverseArray([1, 2, 3, 4, 5, 6]));

// let operations = {
//   doMath: function (a, b, operation) {
//     return operation(a, b);
//   },
// };
// const add = (x, y) => x + y;
// const multiply = (x, y) => x * y;
// console.log(operations.doMath(3, 5, add));
// console.log(operations.doMath(12, 12, multiply));

// const person = { name: "Alice", age: 56, country: "korea" };

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));
//print alleevn number

// for (let i = 0; i < 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// print start=20 and end=40 print all even number
// let start = 20;
// let end = 40;
// for (let i = start; i < end; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

//filter out negative numbers

// let numbers = [23, 34, -45, -6, -7];
// let negativeNo = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < 0) {
//     negativeNo.push(numbers[i]);
//   }
// }
// console.log(negativeNo);

//find  largest no in array
let arr = [12, 23, 54, 2, 76, 4, 7];
// let max = arr[0];
// for (let i = 0; i < 7; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }

// console.log(max);

// let min = arr[0];
// for (let j = 0; j < 7; j++) {
//   if (arr[j] < min) {
//     min = arr[j];
//   }
// }
// console.log(min);
// const numbers = [1, 2, 3, 4, 5];
// const square = numbers.map((num) => num ** 2);
// console.log(square);
// console.log(numbers);
// console.log(typeof square);
// console.log(typeof numbers);

// const people = [
//   { name: "bob", age: 90 },
//   {
//     name: "alice",
//     age: 34,
//   },
//   {
//     name: "border",
//     age: 23,
//   },
// ];
// const FullName = people.map((person) => ({ FullName: `${person.name}` }));

// console.log(FullName);

// function sum(a, b) {
//   console.log(a + b);
// }
// sum(30, 40);
// let asignment = function (numbers) {
//   return numbers * numbers;
// };
// let x = asignment(8);
// console.log(x);

// let y = () => {};

// function greeting(name) {
//   console.log(`user  name :${name} `);
// }
// greeting(greeting(kaushik modi));

//function expression
// const greet = function (a, b) {
//   function add() {
//     console.log(a + b);
//   }
//   add();
// };
// greet(10, 20);

// const arrayMap = new Map([
//   ["key1", "apple"],
//   ["key2", "mango"],
// ]);
// console.log(arrayMap.get("key2"));

// const setMap = new Map();
// setMap.set("key1", "bmw");
// setMap.set("key2", "volvo");

// setMap.set("key3", "tata");
// // setMap.clear();
// setMap.delete("key3");
// console.log(setMap.set("key2"));
// console.log(setMap.size);

// const s = new Set([1, 2, 3, 4, 5, 5, 5]);
// console.log(s);
// const s1 = new Set([23, 34, 56, 67, 89]);
// s1.add(23);
// s1.add(34);
// s1.clear();
// console.log(s1);
// console.log(s1.delete(23));
// let result = s1.entries();
// console.log(result.next().value);

// let leapYear = function (year) {
//   if (year % 4 == 0) {
//     console.log(`${year} is leap year`);
//   } else {
//     console.log("this year not leap year");
//   }
// };
// let year = leapYear("1998");
///calculate age
// let d = new Date("10/11/2000");
// console.log(d, toString());

// function formateDate() {
//   const d = new Date("11-10-2000");
//   const day = String(d.getDate()).padStart(2, "0");
//   const month = String(d.getMonth() + 1).padStart(2, "0");
//   const year = d.getFullYear();

//   return `${month}/${day}/${year}`;
// }
// let dataInput = "10-11-2000";
// console.log(formateDate(dataInput));

// let formateDate = "10-11-2000";
// const week = ["sunday", "monday", "tuesday", "wednesday", "friday", "saturday"];
// const d = new Date("10 / 11 / 2024");
// const Day = week[d.getDay()];
// console.log(Day);
// console.log(Date.now());
// console.log(d.getUTCDate);

// let str = "lohkiwan";
// // let newStr = "";
// const result = str.split("").reverse().join("");
// console.log(result);
// console.log(str.split(","));

// function findLongestWord(sentence) {
//   const words = sentence.split(" ");
//   let longestWord = "";

//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }
// let sentence = " your name is kashinath";
// let longestWord = findLongestWord(sentence);
// console.log("longestWord: ", longestWord);

// let s = "i am loh kiwan and of kiwan like alien";
// let r = [...s].splice(" ").join("");
// console.log(r);
// console.log(s.indexOf("kiwan"));
// console.log(s.lastIndexOf("kiwan"));
// console.log(s.search("and"));
// console.log(s.match("oh"));
// console.log(s.matchAll("kiwan"));
// console.log(s.includes("ketan"));
// console.log(s.endsWith("loh", 8));

// function LargestNo(arr) {
//   return Math.max(...arr);
// }
// let numbers = [12, 23, 34, 54, 65, 29];
// // console.log(LargestNo(numbers));
// numbers.reverse();
// console.log(numbers);

// function removeDuplicateArray(arr) {
//   return [...new Set(arr)];
// }
// let x = [1, 2, 5, 5, 7, 7, 8];
// console.log(removeDuplicateArray(x));

// function sumArray(aum, num) {}

// function firstOccurence(arr, element) {
//   return arr.indexOf(element);
// }
// let s = [34, 45, 56, 67, 78];
// console.log(firstOccurence(s, 56));

// function mergeArr(arr1, arr2) {
//   return arr1.concat(arr2);
// }
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// console.log(mergeArr(arr1, arr2));

// function averge(arr) {
//   const sum = arr.reduce((sum, num) => sum + num, 0);
//   return (avg = sum / arr.length);
// }
// let numbers = [10, 20, 30, 4, 5, 1];
// console.log(averge(numbers));

// let s = [1, 2, 3, 4];
// let str = s.toString();
// console.log(str);
// console.log(typeof s);

// let Obj = {
//   firstName: "kala",
//   lastName: "patel",
//   id: 8978,
// };
// console.log(Obj.id);

// function iterateValue() {
//   let myObj = {
//     cars: "bmw",
//     model: "xl 7",
//     color: "dark blue",
//     engine: "turbo7",
//   };
//   Object.entries(myObj).map((entry) => {
//     let key = entry[0];
//     let value = entry[1];
//     console.log(key, value);
//   });
// }
// iterateValue();

// let Obj = {
//   arrayOne: [],
//   arrayTwo: [],
// };
// let arrNew = [1, 2, 3, 4, 5, 6];

// Obj.arrayTwo.push(arrNew);
// console.log(Obj.arrayTwo);

// function sortArr(arr) {
//   return arr.sort((a, b) => a - b);
// }
// let numbers = [1, 2, 5, 4, 7];
// console.log(sortArr(numbers));

//
// Calculate Total Value in an Array of Objects

// function CalculateTotalPrice(arr) {
//   return arr.reduce((total, obj) => total + obj.price, 0);
// }
// let products = [
//   { name: "laptop", price: 300 },
//   {
//     name: "phone",
//     price: 200,
//   },
//   {
//     name: "ipad",
//     price: 100,
//   },
// ];
// console.log(CalculateTotalPrice(products));

// function ageValue(arr, age) {
//   return arr.filter((Obj) => Obj.age > age);
// }
// const person = [
//   { name: "alice", age: 30 },
//   {
//     name: "border",
//     age: 26,
//   },
//   {
//     name: "sunil",
//     age: 36,
//   },
// ];
// console.log(ageValue(person, 28));

// /Create a Function to Calculate Factorial
// function factorial(n) {
//   if (n === 0 || n === 1) return 1;
//   return n * factorial(n - 1);
// }
// console.log(factorial(5));

// function greet(name = "alice") {
//   return name;
// }
// console.log(greet("smith"));

// // 3. Calculate Days Between Two Dates
// function CalculateDays(date1, date2) {

// }

// let date = new Date();
// let dateString = date.toString();
// console.log(dateString);
// console.log(typeof dateObj);

// function formateDate(date) {
//   const day = String(date.getDay());
//   //   const month = String(date.getMonth() + 1).padStart(2, "0");
//   //   const year = date.getFullYear();
//   //   return `${day}/${month}/${year}`;
// }
// let date = new Date(2024, 11, 10);
// // let dateString = formateDate(date);
// console.log(date);
