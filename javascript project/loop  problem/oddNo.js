//find first odd number in array
const arr = [2, 4, 6, 8, 9, 13, 10];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    console.log("print first odd number", arr[i]);
  }
}

//skip all mulitple of 3
// for (let i = 1; i < 20; i++) {
//   if (i % 3 == 0) {
//     continue;
//   }
//   console.log("  print without multiple of 3 number:", i);
// }

// //sum excedd of 50 stop loop
// const arr4 = [10, 15, 20, 5, 3];
// let sum = 0;
// for (let i = 0; i < arr4.length; i++) {
//   sum += arr4[i] > 50;
//   break;
// }
// console.log();
