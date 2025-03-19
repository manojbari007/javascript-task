// console.log(1 == 1);
// console.log(1 === "1");

// console.log(2 === "2");
// let name = "manoj";
// console.log(name);
//tenary operator
// console.log(4 > 5 ? true : false);
// console.log(90 == 90 ? true : false)
// let num = [1, 2, 3, 4, 5];
// console.log(num);
// console.log(num[(2, 4)]);

// let course = ["HTML", "CSS", "JAVASCRIPT", "REACT JS", "NODEJS"];
// console.log(course);

// let name = new Array("manoj", "kashi", "gana");
// console.log(name);
// let result = name[2];
// let lastItem = name[name.length - 1];
// console.log("lastItem", lastItem);

// console.log("result :", result);

// name[1] = "java";
// console.log(name);

// name.push("musql");
// console.log(name);

// add element to beginning
// name.unshift("sql");
// console.log(name);

// let finalResult = name.pop();
// console.log(name);
// console.log(name.length);
// const square = (x, y, z = 90) => {
//   console.log(x * x + y + (x + y + z));
// };
// square(5, 6);f

// async-awaite arrow function
// const fetchData = async () => {
//   const data = await fetch("https://api.example.com/data");
//   return data.json();
// };

//create object
// const currentDate = new Date();
// currentDate.setDate(currentDate.getDate());
// console.log(currentDate);

//PROMISE
// let myPromise = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     console.log("promise fulfill");
//   } else {
//     console.log("failed promise");
//   }
// });

// let promise = new Promise((resolve, reject) => {
//   const x = "gfg";
//   const y = "gfg";

//   if (x == y) {
//     resolve();
//   } else {
//     reject();
//   }
// });
// promise
//   .then(() => {
//     console.log("success");
//   })
//   .catch(() => {
//     console.log("failed");
//   });

// var list = [1, 2, 3, 4, 5];

// for (var i = 0, l = list.length; i < l; i++) {
//   console.log(list[i]);
// }

// var arr = [1, 2, 3, 4, 5, 6];
// arr.length = 3;
// arr; // [1, 2, 3]

// arr.length = 6;
// arr.push(4);
// arr; // [1, 2, 3, undefined, undefined, undefined, 4]

// function foo(a, b, c) {
//   this.a = a;
//   this.b = b;
//   this.c = c;

//   console.log(this.a, this.b, this.c);
// }

// var test = {
//   my_func: function () {
//     console.log("define function just like that !");
//   },
// };

// foo.call(test, 1, 2, 3); // 1 2 3
//  foo.apply(test, [1, 2, 3]); // 1 2 3

// var poo = { key: "divyanshu" };

// poo.method = function () {
//   var self = this;
//   function test() {
// Use self instead of this here
//     console.log(self);
//   }

//   test();
// };

// poo.method();

// function myalert() {
//   alert(
//     "Welcome to GeeksforGeeks.\n " +
//       "It is the best portal for computer" +
//       "science enthusiasts!"
//   );
// }

// Explanation of closure
// function foo() {
//   let b = 1;
//   function inner() {
//     return b;
//   }
//   return inner;
// }
// let get_func_inner = foo();

// console.log(get_func_inner());
// console.log(get_func_inner());
// console.log(get_func_inner());

//car is object  there properties
// const car = { type: "fiat", model: "300", color: "black" };

// car.model;
// document.getElementById("demo").innerHTML = car.color;

// const person = {
//   firstName: "manoj",
//   lastName: "bari",
//   age: 90,
// }; //create object

// const x = person;
// x.firstName = "kashi";

// delete person.age;
// person.weight = 67;
// document.getElementById("demo").innerHTML = person.firstName.text(2);

// function person is  person object

//event

// let str = "manko sdfsu dbfksk";
// document.getElementById("demo").innerText = str.replace("manko", "manoj");

// let text = "manoj your locate in another 'locate' is same";
// let result = text.lastIndexOf("locate");
// let result = text.search(/locate/);
// let result = text.matchAll("loc");
// let result = text.matchAll(/loc/gi);
// let result = text.endsWith("same");
// document.getElementById("demo").innerHTML = result;

//string template

// let txt = "`my name is kashi bari` dhjfsd jdhfbbjsd ";

// let a = 0.3;
// let b = 0.1;
// let x = 90 / "10";
// let a = NaN;
// let b = 90;
// let x = a + b;
// document.getElementById("demo").innerHTML = x;

// let firstName = "kashinath";
// let lastName = "bari";
// let result = `my name is ${firstName} ${lastName}`;

//array
// const cars = ["tata", "bmw", "volvo", "tesla"];
// cars[3] = "mahindra ";
// const points = new Array(34);
// document.getElementById("demo").innerHTML = cars;
// cars.unshift("byd");
// document.getElementById("demo").innerHTML = cars;
// const txt = new txt("apple", "banana"); //create a array
// const array1 = [12, 34, 56, 78];
// const array2 = [1, 2, 3, 4];
// const result = array1.concat(array2);
// document.getElementById("demo").innerHTML = result;

// const myArr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// const newArr = myArr.flat();
// document.getElementById("demo").innerHTML = newArr;

// const array = [1, 2, 3, 4, 5];
// const newArr = array.flatMap((x) => [x, x * 10]);
// document.getElementById("demo").innerHTML = newArr;

// const fruits = ["banana", "apple", "kiwi", "orange"];
// document.getElementById("demo").innerHTML = fruits;
// fruits.splice(2, 0, "lemon", "mango");
// document.getElementById("demo").innerHTML = fruits;

// const year = ["jan", "feb", "march", "apr"];
// // const spliced = year.toSpliced(2, 3);
// const result = year.slice(1, 3);
// document.getElementById("demo").innerHTML = result;

// const fruits = ["banana", "apple", "kiwi", "apple", "orange"];
// let result = fruits.includes("mango");
// let position = fruits.lastIndexOf("apple") + 1;
// document.getElementById("demo").innerText = result;

// const number = [11, 42, 53, 24, 15, 16, 37];
// let first = number.findIndex(myFunction);
// document.getElementById("demo").innerHTML = first;

// function myFunction(index, value, array) {
//   return value > 4;
// }
// const temp = [23, 43, 54, 67, 12, 34];
// let hight = temp.findLast((x) => x > 60);
// document.getElementById("demo").innerHTML = hight;

// const fruits = ["banana", "apple", "kiwi", "apple", "orange"];
// document.getElementById("demo").innerHTML = fruits;

// fruits.sort();
// document.getElementById("demo2").innerHTML = fruits;

// const fruits = ["banana", "apple", "kiwi", "apple", "orange"];
// document.getElementById("demo").innerHTML = fruits;

// fruits.reverse();
// document.getElementById("demo2").innerHTML = fruits;

// const fruits = ["banana", "apple", "kiwi", "orange"];
// let sorted = fruits.toSorted();
// document.getElementById("demo").innerHTML = sorted;

// const points = [34, 23, 100, 6, 54, 12];

// document.getElementById("demo").innerHTML = myArrayMax(points);

// function myArrayMax(arr) {
//   return Math.max.apply(null, arr);
// }

// const numbers = [4, 34, 54, 12, 6, 76];
// let txt = "";
// numbers.forEach(myFunction);

// document.getElementById("demo").innerHTML = txt;

// function myFunction(value, index, array) {
//   txt += value + "<br>";
// }

// const num = [11, 22, 33, 44, 55];
// let result = num.map(myFunction);

// document.getElementById("demo").innerHTML = result;

// function myFunction(value) {
//   return value * 2;
// }

// const arr = [12, 34, 56, 7, 9, 65];
// let newArr = arr.flatMap((x) => [x, x * 10]);

// document.getElementById("demo").innerHTML = newArr;

// const arr = [12, 43, 54, 64, 4];
// const result = arr.filter(myFunction);

// document.getElementById("demo").innerHTML = result;

// function myFunction(value) {
//   return value > 40;
// }

// const arr = [12, 43, 5, 64, 4];
// const result = arr.reduceRight(myFunction);

// document.getElementById("demo").innerHTML = result;

// function myFunction(value, total) {
//   return value + total;
// }

// const arr = [12, 43, 5, 64, 4];
// const result = arr.every(myFunction);

// document.getElementById("demo").innerHTML = result;

// function myFunction(value, total, array) {
//   return value > 15;
// }

// const arr = [12, 43, 5, 64, 4];
// const result = arr.some(myFunction);

// document.getElementById("demo").innerHTML = result;

// function myFunction(value, total, array) {
//   return value > 15;
// }

// const q1 = ["jan", "feb", "march"];
// const q2 = ["apr", "may", "jun"];
// const q3 = ["jul", "aug", "sep"];
// const q4 = ["oct", "nov", "Dec"];

// let result = [...q1, ...q2, ...q3, ...q4];
// document.getElementById("demo").innerHTML = result;

// const d = new Date(47, 10, 12, 23, 56, 40, 10000000);

// document.getElementById("demo").innerHTML = d.toString();

// document.getElementById("demo").innerHTML = d.toDateString();
// document.getElementById("demo").innerHTML = d.toUTCString();
// document.getElementById("demo").innerHTML = d.toISOString();

// const date = new Date("2024-05-13T12:00:00Z");
// const date = new Date("05/10/2025");
// const date = new Date("12 ,Apr, 2026");
// const msec = Date.parse("2023-03-11");
// document.getElementById("demo").innerHTML = msec;

// let msec = Date.parse("1934-10-12");
// const d = new Date(msec);
// document.getElementById("demo").innerHTML = d;
// const d = new Date("2030-05-21");
// document.getElementById("demo").innerHTML = d.getTime();

// let ms = Date.now("2024-06-12");
// document.getElementById("demo").innerHTML = ms;

// const d = new Date();
// document.getElementById("demo").innerHTML = d.getTimezoneOffset();

//date set method
// const d = new Date();
// d.setFullYear(3030, 11, 23);
// d.setMonth(4);
// d.setDate(30);
// d.setDate(d.getDate() + 100);
// d.setHours(23);
// d.setMinutes(56);

// document.getElementById("demo").innerHTML = d;

//math in js
// document.getElementById("demo").innerText = Math.PI;
// document.getElementById("demo").innerText = Math.E;
// document.getElementById("demo").innerText = Math.SQRT2;
// document.getElementById("demo").innerText = Math.SQRT1_2;
// document.getElementById("demo").innerText = Math.LN10;
// document.getElementById("demo").innerText = Math.LN10;
// document.getElementById("demo").innerText = Math.LOG2E;
// document.getElementById("demo").innerText = Math.round(4.4);
// document.getElementById("demo").innerText = Math.ceil(4.6);   // CEIL NEAREST UP INTERGER VALUE
// document.getElementById("demo").innerText = Math.ceil(4.2);
// document.getElementById("demo").innerText = Math.ceil(4.0);

//floor id round of x value down nearest value return
// document.getElementById("demo").innerText = Math.floor(5.2);
// document.getElementById("demo").innerText = Math.floor(5.4);
// document.getElementById("demo").innerText = Math.floor(5.5);
// document.getElementById("demo").innerText = Math.floor(5.6);
// document.getElementById("demo").innerText = Math.floor(6.0);

//trunc()  math method
// document.getElementById("demo").innerText = Math.trunc(-45.99);

//sign()  math method

// document.getElementById("demo").innerText = Math.sign(4);
// document.getElementById("demo").innerText = Math.sign(-3);
// document.getElementById("demo").innerText = Math.sign(0);

// //pow() math method

// document.getElementById("demo").innerText = Math.pow(8, 2);
// document.getElementById("demo").innerText = Math.pow(24, 2);

// //sqrt() math method

// document.getElementById("demo").innerText = Math.sqrt(576);

// //abs() math method is return absolute positive value
// document.getElementById("demo").innerText = Math.abs(-6.6);

// //min
// document.getElementById("demo").innerText = Math.min(
//   90,
//   -78,
//   0,
//   12,
//   32,
//   65,
//   99,
//   123
// );

// //max
// document.getElementById("demo").innerText = Math.max(
//   90,
//   -78,
//   0,
//   12,
//   32,
//   65,
//   99,
//   123
// );

// //random()
// document.getElementById("demo").innerText = Math.random();

// //log

// document.getElementById("demo").innerText = Math.log(10090);

// document.getElementById("demo").innerText = Math.log2(16);
// document.getElementById("demo").innerText = Math.log10(1000);

// document.getElementById("demo").innerText = Boolean(90 > 100);
// document.getElementById("demo").innerText = Boolean(3 === 3);
// document.getElementById("demo").innerText = 89 < 90;

// let a = NaN;
// document.getElementById("demo").innerText = Boolean(a);

// function myFunction() {
//   let age = document.getElementById("age").value;
//   let vote = age >= 18 ? "vote is valid" : "not valid";
//   document.getElementById("demo").innerHTML = vote;
// }

// function myFunction() {
//   let voteable;
//   let age = document.getElementById("age").value;
//   if (isNaN(age)) {
//     voteable = "input is not number";
//   } else {
//     voteable = age > 18 ? "vote is valid " : "not valid";
//   }
//   document.getElementById("demo").innerHTML = voteable;
// }

// if (new Date().getDate() > 12) {
//   document.getElementById("demo").innerHTML = "good morning";
// }

// const hours = new Date().getHours();
// let greeting;
// if (hours > 12) {
//   greeting = "good afternoon";
// } else if (hours > 18) {
//   greeting = "good night";
// } else {
//   greeting = "good morning";
// }

// document.getElementById("demo").innerHTML = greeting;

// let text;
// switch (new Date().getDay()) {
//   case 2:
//     text = "today is monday";

//     break;
//   case 5:
//     text = "today is friday";
//     break;
//   default:
//     text = "today is weekend";
// }
// document.getElementById("demo").innerHTML = text;
// let text = "";
// for (let i = 0; i < 5; i++) {
//   text = text + i + "<br>";
// }
// document.getElementById("demo").innerHTML = text;

// const person = {
//   firstName: "kashi",
//   lastName: "bari",
//   age: 67,
// };

// let text = "";
// for (x in person) {
//   text += person[x] + " ";
// }

// document.getElementById("demo").innerHTML = text;

//foreach loop
// const cars = ["bmw", "tata", "byd", "tesla", "ola"];
// let txt = "";
// cars.forEach(myFunction);
// document.getElementById("demo").innerHTML = txt;
// function myFunction(value) {
//   txt += value + "<br>";
// }

//for of
// const cars = "javascript";

// let txt = "";
// for (let x of cars) {
//   txt += x + "<br>";
// }
// document.getElementById("demo").innerHTML = txt;

// let txt = "";
// const letters = new Set(["a", "b", "c"]);
// for (const x of letters) {
//   txt += x + "<br>";
// }
// document.getElementById("demo").innerHTML = txt;

// const fruits = new Map([
//   ["apple", 100],
//   ["banana", 80],
//   ["mango", 150],
// ]);
// let result = "";
// for (const x of fruits) {
//   result += x + "<br>";
// }
// document.getElementById("demo").innerHTML = result;

// const numbers = new Set([1, 23, 4, 5, 6]);
// document.getElementById("demo").innerHTML = numbers.size;

// const letters = new Set();

// const a = "a";
// const b = "b";
// const c = "c";
// letters.add(a);
// letters.add(b);
// letters.add(c);
// answer = letters.has("d");
// document.getElementById("demo").innerHTML = answer;

// const fruits = new Map([
//   ["apple", 100],
//   ["banana", 80],
//   ["mango", 150],
// ]);

// let result = "";
// for (const x of fruits) {
//   result += x + "<br>";
// }

// document.getElementById("demo").innerHTML = result;

// const fruits = new Map([
//   ["apple", 100],
//   ["banana", 80],
//   ["mango", 150],
// ]);
// fruits.set("apple", 300);
// let result = fruits.get("apple");
// document.getElementById("demo").innerHTML = "apple current value is " + result;
// document.getElementById("demo").innerHTML =
//   "banana value is " + fruits.get("banana");
// fruits.delete("banana");
// document.getElementById("demo").innerHTML = fruits.size;
// fruits.clear();

// document.getElementById("demo").innerHTML = fruits.size;
// let text = "";
// fruits.forEach(function (value, key) {
//   text += key + " =" + value + "<br>";
// });

// for (const x of fruits.values()) {
//   text += x + "<br>";
// }
// document.getElementById("demo").innerHTML = text;

// let arr = new Set([1, 2, 3, 4, 5, 6]);
// document.getElementById("demo").innerHTML = Array.isArray(arr);

// let arr = new Array();
// let car = "volvo";
// document.getElementById("demo").innerHTML = typeof car;

// let x = "45";
// let y = +x;
// document.getElementById("demo").innerHTML = typeof x + " <br>" + typeof y;
// let x = 122;
// document.getElementById("demo").innerHTML = String(x) + "<br>";
// let d = new Date();
// let y = Date.toString();

// let x = String(true);
// document.getElementById("demo").innerHTML = x;

// myFunction();

// let carName = "BMW";
// document.getElementById("demo").innerHTML =
//   "outside function variable: " + window.carName;
// function myFunction() {
// let carName = "BMW";
//   carName = "Volvo";
// }

// x = 5;
// elem = document.getElementById("demo");
// elem.innerHTML = x;
// var x;
// x = 3.14;

// myFunction();
// function myFunction() {
//   "use strict";
//   x = 3.14;
// }

// const person = {
//   firstName: "kashi",
//   lastName: "bari",
//   age: 34,
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// document.getElementById("demo").innerHTML = person.fullName();

// let x = this;
// document.getElementById("demo").innerHTML = x;

//this is arrow function is js
// let myFunction = (x, y) => {
//   x * y;
// };
// document.getElementById("demo").innerHTML = myFunction(12, 90);

// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
// }

// const myCar1 = new Car("bmw", 1998);
// const myCar2 = new Car("Audi", 2005);
// document.getElementById("demo").innerHTML = myCar1.name + "<br> " + myCar2.name;

// import { Name, age } from "./message";
// document.getElementById("demo").innerHTML = ;

// let x = 15 * 5;
// debugger;
// document.getElementById("demo").innerHTML = x;

// const person = {
//   firstName: "kashi",
//   lastName: "bari",
//   age: 26,
// };
// //destructuring
// let { firstName, lastName, country = "india" } = person;
// document.getElementById("demo").innerHTML =
//   firstName + " " + lastName + " " + country;

//object properties alias
// const person1 = {
//   firstName: "ketan",
//   lastName: "patel",
//   age: 24,
// };

// let { firstName: name } = person1;
// document.getElementById("demo").innerHTML = name;

// const fruits = ["apple", "mango", "banana", "orange", "kiwi"];
// let [fruits1, , , , fruits2] = fruits;

// document.getElementById("demo").innerHTML = fruits1 + " " + fruits2;

//swapping value
// firstName = "kashi";
// lastName = "bari";

// [firstName, lastName] = [lastName, firstName];
// document.getElementById("demo").innerHTML = firstName + "" + lastName;

// document.getElementById("demo").innerHTML = dec2bin(8);
// function dec2bin(dec) {
//   return (dec >>> 0).toString(2);
// }

// document.getElementById("demo").innerHTML = bin2dec(111);
// function bin2dec(bin) {
//   return parseInt(bin, 2).toString(10);
// }

// let text = "welcome to w3school academy";
// // let n = text.search("academy");
// // let n = text.search(/w3school/i);
// let n = text.replace(/w3school/i, "google AI");

// document.getElementById("demo").innerHTML = n;

// try {
//   addlert("welcome back");
// } catch (err) {
//   document.getElementById("demo").innerHTML = err.message;
// }

//range error
// let num = 1;
// try {
//   num.toPrecision(400);
// } catch (err) {
//   document.getElementById("demo").innerHTML = err.name;
// }

//reference error

// let x = 6;
// try {
//   x = y + 3;
// } catch (err) {
//   document.getElementById("demo").innerHTML = err.name;
// }

// try {
//   eval("alert('hello)");
// } catch (err) {
//   document.getElementById("demo").innerHTML = err.name;
// }

// let num = 3;
// try {
//   num.toUpperCase();
// } catch (err) {
//   document.getElementById("demo").innerHTML = err.name;
// }

// const arr = ["html", "css", "js", "python"];
// console.log(arr);

// let myArr = new Array();

// arr.forEach(function (arr) {
//   myArr.push(arr);
// });

// console.log(myArr);
// const arr1 = new Array(1, 2, 3, 4, 5);
// console.log(arr1);
// console.log(typeof arr1);
// console.log(arr1.length);

// const arr2 = Array.from("87358375");
// console.log(arr2);

// function func() {
//   let result = Array.isArray("kala");
//   console.log(result);
// }
// func();

// let arr = [23, 34, 45, 56],
//   arr1 = [1, 2, 3, 4, 5],
//   arr2 = ["banana", "apple"];

// console.log(arr.concat(arr1, arr2));

// let index = 2;

// console.log(arr.at(index));

// let str1 = "kashinath bari";

// console.log(str1.length);
// console.log(str1.trim());
// console.log(str1.charAt(8));

// let s2 = str1.substring(1, 12);

// console.log(str1.toUpperCase());

// console.log(str1.indexOf("bari"));

// let result = `your name is ${str1}`; //string interpolation
// console.log(result);

// console.log(str1);

// let s = new String("welcome");
// console.log(s);

// let str = "kashi,bari,khesar,kashi";
// console.log(str.substr(3, 8));
// console.log(str.replaceAll("kashi", "manoj"));

// let str2 = new String("kashi");
// console.log(str == str2);
// console.log(str.localeCompare(str2));
// console.log(typeof str2);
// console.log(typeof str);

// let s = "ganesh";
// console.log(s.trimStart());
// console.log(s.trimEnd());

// console.log(s.padEnd(10, "bari  "));
// console.log(s.charCodeAt(0));
// console.log(s.split("n"));
// const currentDate = new Date("2023-04-23");
// console.log(currentDate);

// let x = 234e-2;
// console.log(x);
// let a = NaN; //NaN is number type
// console.log(typeof a);
// let b = 0;
// console.log(typeof b);

// let x = false + 12;
// console.log(x);
// let str = "89";
// let result = Number(str);
// console.log(result);
// console.log(typeof result);

// let person = {
//   firstName: "kashi",
//   lastName: "bari",
// };
// function sum(x, y) {
//   return x + y;
// }
// console.log(sum(12, 2));

// function sum(a, b) {
//   return a + b;
// }
// let s = sum.call(this, 10, 20); //call function
// console.log(s);
// let add = (a, b) => a + b;
// console.log(add(10, 10));
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let person = new Person("ayush", 45);
// console.log(person.name);
// console.log(person.age);

// const person = (firstName, age) => ({ firstName: "kashi", age: 56 });
// console.log(person());

// const getData = async() = {
//     let result="hello ";
//     return result;
// }
// getData().then(result=>console.log(result));

// const arrMap = new Map([
//   ["key1", "banana"],
//   ["key2", "apple"],
// ]);
// console.log(arrMap.get("key1"));
// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }
// let myPromise = new Promise(function (myResolve, myReject) {
//   let x = 1;
//   if (x == 1) {
//     myResolve("OK");
//   } else {
//     myReject("error");
//   }
// });

// myPromise.then(
//   function (value) {
//     myDisplayer(value);
//   },
//   function (error) {
//     myDisplayer(error);
//   }
// );

// let myPromise = new Promise(function (myResolve, myReject) {
//   setTimeout(function () {
//     myResolve("welcome back");
//   }, 2000);
// });
// myPromise.then(function (value) {
//   document.getElementById("demo").innerHTML = value;
// });

//callback

// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// function sum(num1, num2) {
//   let result = num1 + num2;
//   myDisplayer(result);
// }
// sum(12, 12);

// let name = "ketan";
// function myFunction() {
//   y = 90;
//   console.log("your name" + " " + name);
// }
// myFunction();

// console.log(y);

// let num = 34;
// console.log("outside num is: ", num);

// function func() {
//   let y = 78;
//   console.log("inside", y);

//   console.log("inside num is :", num);
// }
// func();
// console.log("outsider", y);
// let x = [1, 2, 3, 4, 5];
// let c = 0;
// for (let i = 0; i < 5; i++) {
//   if (i == 3) {
//     break;
//   }
//   //   console.log(c);
//   console.log(x);
// }

// let arr = [
//   {
//     first: "kala",
//     id: 899,
//   },
//   {
//     second: "lala",
//     id: 900,
//   },
// ];

// console.log(arr.length);

// let arr1 = [1, 23, 4, [56, 57], [23, 12]];
// arr1.shift();
// console.log(arr1);
// console.log(arr1.slice(1, 5));

// arr1.unshift(90);
// console.log(arr1);

// arr1.push(5);
// console.log(arr1[4][1]);

// console.log(arr1);
// console.log(typeof arr1);

// var a = 90;
// function sum() {
//   var b = 89;
// }

// sum();
// console.log(b);

// const cars = {
//   CarName: "bmw",
//   model: "xl7",
//   year: "2022",
//   color: "dark blue",
//   country: function () {
//     return this.CarName + " " + "model";
//   },
// };

// console.log(typeof cars);
// console.log(cars.color);
// console.log(cars.country());
// console.log(cars.model);

// let d = new Date(2013, 10, 15, 16);
// console.log(d);
