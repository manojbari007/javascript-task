// let Obj = {
//   name: "ketan",
//   arrOne: [],
//   arrTwo: [],
// };
// let newArr = ["geek", "for"];

// Obj.arrOne.push(newArr);
// Obj.arrTwo.push(...newArr); //spread operator
// console.log(Obj.arrTwo);

// let arr = [1, 2, 34];
// arr.push(89);
// console.log(arr);

//map reverse
// let arr = [1, 2, 3, 4, 5];
// function reverseArr() {
//   let newArr = arr
//     .slice(1)
//     .reverse()
//     .map(function (val) {
//       return val;
//     });
//   console.log(newArr);
// }
// reverseArr();

// let arr = [12, 3, 4, 5, 5];
// let str = arr.map(Number).reduce((item) => {
//   return item * 2;
// });

// let str = arr.map(Number);
// console.log(str);

// let students = {
//   name: "kashi",
//   age: 34,
//   id: "099",
//   studentDetails: function () {
//     // return this.name + " " + this.id;

//     return students.name + " " + students.age;
//   },
// };

// console.log(students.studentDetails());
// console.log(Object.entries(students)[3]);
// let newObj = Object.assign({}, students);
// console.log(newObj.studentDetails());

// let course = {
//   title: "java",
//   price: 9000,
//   book: "xyz java",
//   writer: ["kamal", "smith"],
//   Materials: {
//     book: "basic java",
//     book2: "advanced java",
//   },
// };

// // console.log(Object.entries(course)[2]);
// Object.entries(course).forEach(([Key, value]) => {
//   console.log(Key, value);
// });

// let array = [
//   {
//     name: "ketan",
//     id: "00909",
//   },
// ];
// const newObj = {
//   Writer: "smith",
//   book: "21 century prince",
// };

// // let newArr = [...array, newObj];
// array.push(newObj);
// console.log(array);

// function func() {
//   let bool = true;
//   let result = bool.constructor;
//   console.log(result);
// }
// func();
