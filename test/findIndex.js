//It looks like you're asking for a function to find all occurrences of a target number in an array and return their indexes. Below is a clear and complete JavaScript implementation:

function findIndexes(arr, target) {
  let Indexes = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === target) {
      Indexes.push(i);
    }
  }
  return Indexes;
}
let arr = [1, 5, 7, 8, 5, 7, 7, 8];
let target = 7;
console.log(findIndexes(arr, target));
