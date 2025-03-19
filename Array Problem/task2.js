let string = "a,b,c,d,e,f";
// let arr = string.split(",");
// console.log(arr);

let arr = string.split(",");
console.log(arr);

//string2
// let string2 = "0,,,,,,,0,1";
// let arr2 = string2.split(",").filter((item) => item !== "");
// console.log(arr2);
// console.log(typeof arr2);

//string3
let string3 = "1, 23,4,5,6, 7, 89";
let arr3 = string3.split(",").map((item) => item.trim());
console.log(arr3);

//string4
// let string4 = "987987087987987";
// let arr4 = string4.split("");
// console.log(arr4);
