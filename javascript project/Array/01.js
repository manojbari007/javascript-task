let arr = [0, 1, 2, "3", 4, 5]; // find array using arr indexing
// console.log(arr[3]);

// let result = arr.find((value) => value === 3);
// console.log(result);
// let r = arr.find((elem) => elem > 5);
let found = arr.filter((elem) => elem > 2);
console.log(found);
