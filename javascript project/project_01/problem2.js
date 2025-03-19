// const arr = [1, 2, 3, 4, 5];
// const result = arr.find((elem) => elem > 3);
// console.log(result);

// let students = [
//   {
//     id: "001",
//     name: "kashi",
//     sports: "football",
//   },
//   {
//     id: "002",
//     name: "mahesh",
//     sports: "cricket",
//   },
//   {
//     id: "003",
//     name: "naresh",
//     sports: "cricket",
//   },
// ];
// let cricketer = students
//   .filter(function (student) {
//     return student.sports === "football";
//   })
//   .map(function (student) {
//     return student.name;
//   });
// console.log("crickete player name:");

// cricketer.forEach(function (player) {
//   console.log(player);
// });

//array.find()
// let array = [23, 34, 45, 56, 67];

// let findElement = array.find(function (element) {
//   return element > 44;
// });
// console.log(findElement);

//assign

// const person1 = {
//   name: "ketan",
//   id: "001",
//   age: 90,
// };
// const person2 = { name: "kashinath", age: 26, id: "012" };
// const student = { studentName: "manoj", age: 17, studentId: "0123" };

// Object.assign(person1, person2, student);
// let text = Object.entries(person1);
// console.log(text);
// console.log(typeof text);

// const cricketer = {
//   name: "sachin",
//   age: 55,
//   century: 100,
// };
// let text = cricketer.constructor;
// console.log(text);

// const man = Object.create(cricketer);
// man.name = "manoj";
// console.log(cricketer.name + " " + man.name);
// Object.defineProperties(cricketer, {
//   langauge: { value: "hindi" },
//   year: { value: 1996 - 2011 },
// });

// console.log(cricketer.year + " " + cricketer.langauge);

// "use strict";
// const cricketer = {
//   name: "sachin",
//   age: 55,
//   century: 100,
// };
// Object.seal(cricketer);

// let text = "";
// try {
//   delete cricketer.age;
// } catch (err) {
//   text.err;
// }
// console.log(text);

// console.log(cricketer.toString());

// const keys = Object.toString(cricketer);
// console.log(keys);

// Object.defineProperty(cricketer, "year", { value: "1996 - 2011" });
// console.log(cricketer.year);

// Object.defineProperty(cricketer, "age", { value: "67" });
// console.log(cricketer.age);

// console.log(Object.values(cricketer));
// console.log(Object.keys(cricketer));

// const fruits = ["banana", "apple", "orange", "mango"];
// const myArray = fruits.valueOf();

// const text = fruits.toString();
// console.log(text);
// console.log(typeof text);

// console.log(myArray);
// Object.seal(fruits);
// let text = "";
// try {
//   fruits.push("kiwi");
// } catch (err) {
//   text.err;
// }

// console.log(text);
// function employee(name, jobtitle, born) {
//   this.name = name;
//   this.jobtitle = jobtitle;
//   this.born = born;
// }
// employee.prototype.salary = 80000;
// employee.prototype.weight = 89;
// const data = new employee("manoj", "python developer", 2000);
// console.log(data.salary);
// console.log(data.weight);

// const person = { name: "manoj", age: 24 };
// Object.preventExtensions(person);

// let text = "";
// try {
//   person.nationality = "English";
// } catch (err) {
//   text.err;
// }
// document.getElementById("demo").innerHTML = text;

// const fruits = ["banaan", "apple", "mango"];
// Object.preventExtensions(fruits);

// let text = "";
// try {
//   fruits.push("kiwi");
// } catch (err) {
//   text.err;
// }
// document.getElementById("demo").innerHTML = text;

// const person = {
//   firstName: "kashi",
//   lastName: "bari",
//   age: 23,
// };
// Object.freeze(person);
// let text = "";
// try {
//   person.age = 24;
//   text.Object.values(person);
// } catch (err) {
//   text.err;
// }
// document.getElementById("demo").innerHTML = text;
// let text = Object.entries(person);
// console.log(text);

// const fruits = { banana: 900, apple: 300, mango: 200 };
// let text = "";
// for (let [fruit, value] of Object.entries(fruits)) {
//   text += fruit + " : " + value + "<br>";
// }
// document.getElementById("demo").innerHTML = text;

// const fruits = [
//   ["apple", 200],
//   ["banana", 100],
//   ["mango", 300],
// ];
// const obj = Object.fromEntries(fruits);
// console.log(obj.mango);

// const cars = {
//   name: "bmw",
//   model: "xl 7",
//   color: "blue",
//   age: 90,
// };
// let descriptor = Object.getOwnPropertyDescriptors(cars, "model");
// let descriptors = Object.getOwnPropertyDescriptors(cars);

// let result = Object.getOwnPropertyNames(cars);
// console.log(descriptors.age.value);
// console.log(result[0]);

// document.getElementById("demo").innerHTML = descriptors.age.value;
// const fruit = [
//   { name: "banana", quantity: 200 },
//   { name: "apple", quantity: 300 },
//   { name: "mango", quantity: 500 },
// ];

// function myCallback(quantity) {
//   return quantity > 300 ? "ok" : "low";
// }
// const result = Object.groupBy(fruit, myCallback);
// let text = "this fruit are ok: <br>";
// for (let [x, y] of result.ok.entries()) {
//   text += y.name + " " + y.quantity + "<br>";
// }

// console.log(text);

// const person = {
//   name: "kashi",
//   age: 34,
// };
// Object.preventExtensions(person);
// Object.freeze(person);
// let text = Object.isFrozen(person);
// console.log(text);

// Object.seal(person);
// let test = Object.isSealed(person);
// console.log(test);

// let ans = Object.isExtensible(person);
// console.log(ans);

// const fruits = ["banana", "apple", "mango"];
// Object.preventExtensions(fruits);
// let result = Object.isExtensible(fruits);
// console.log(result);

// Object.freeze(fruits);
// let ans = Object.isFrozen(fruits);
// console.log(ans);

// Object.seal(fruits);
// let ans = Object.isSealed(fruits);
// console.log(ans);
// let arr = [23, 34, 45, 65, 7, 6];
// let newArr = arr.slice().filter((val) => val > 30);
// console.log(newArr);

// let s = [12, 23, 13, 14, 15];
// let updateArr = s.map((val) => val * 2);
// console.log(updateArr);

// let reduceArr = s.reduce((prev, curr) => prev + curr);
// console.log(reduceArr);
// const doubleNo = s.map((x) => x ** 2);
// console.log(doubleNo);

// const arr = [23, 24, 48, 88, 13];
// let result = arr.map((num) => {
//   if (num % 2 === 0) {
//     return num * 2;
//   }
// });
// console.log(arr);

// const num = [1, 2, 3, 4, 5, 6];
// let ans = num.filter((num) => num % 2 === 0).map((num) => num * 2);

// console.log(ans);

// const age = [2, 12, 23, 4, 5, 67];
// document.getElementById("demo").innerHTML = age.find(checkAge);
// function checkAge(age) {
//   return age > 18;
// }

// const x = [12, 2, 3, 4, 5, 6];
// console.log(x.map(Math.sqrt));
// const map = new Map([
//   ["key1", "value1"],
//   ["key2", "value2"],
// ]);
// console.log(map);
// console.log(typeof map);
// console.log(map.get("key2"));
// console.log(map.get("key1"));

// const num = Math.max(23, 54, 76, 54, 1, 2);
// console.log(num);

// function randomNo(max, min) {
//   return Math.random() * (max - min) + min;
// }
// console.log(randomNo(5, 1));

// let n = 81;
// console.log("pow of n number is:", Math.pow(n, 1 / 2));
// console.log(Math.pow(-23, 1 / 2));

// let arr = [1, 2, 3, 4, 5, 7, 6];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// arr.forEach((x) => (sum += x));
// console.log(sum);

// let s = new Set(arr);
// console.log(s);

// console.log(arr.pop());
// console.log(arr);

// let f = arr[0];
// let l = arr[arr.length - 1];
// console.log(f, l);

// let f = arr.shift(0);
// let l = arr.pop();

// let f = arr.slice(0, 1);
// let l = arr.slice(-1);
// let [f, l] = arr.filter((item, i) => i == 0 || i == arr.length - 1);
// console.log(f, l);
// let f = arr.at(0);
// let l = arr.at(arr.length - 1);
// console.log(f, l);

// const arr = [1, 2, 3];
// const arr1 = [2, 3, 4];
// let hasCommonItem = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (j = 0; j < arr1.length; j++) {
//     if (arr[i] == arr1[j]) {
//       hasCommonItem = true;
//       break;
//     }
//   }
// }
// console.log(hasCommonItem);

//sorting array
// let a = [2, 4, 1, 45, 32];
// // a.sort((x, y) => x - y);
// a.sort((x, y) => y - x);
// console.log(a);

// const s = new Set([1, 2, 3, 4, 5]);
// let r = Array.from(s);
// console.log(r);
// const date1 = new Date("2024-08-09");
// const date2 = new Date("2024-09-01");
// if (date1.getTime() < date2.getTime()) {
//   console.log("date1 earlier than date2");
// } else if (date1.getTime() > date2.getTime()) {
//   console.log("date1 later than date2");
// } else {
//   console.log("date1 and date2 is same");
// }

for (let i = 0; i < 5; i++) {
  console.log("outer loop iteration", i);
  for (let j = 0; j < 5; j++) {
    console.log("inner loop iteration", j);
  }
}
