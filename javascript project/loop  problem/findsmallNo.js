//find smallest number greater than 50 that divisible by 7  and exit loop
for (let i = 51; ; i++) {
  if (i % 7 === 0) {
    break;
  }
  console.log(i);
}

//find longest word in array

const array = ["a", "cat", "elephant", "dog", "apple"];
// console.log(Math.max(array));
function LongestWord() {
  return array.reduce((a, b) => (a.length > b.length ? a : b));
}

console.log(LongestWord(array));

// const arr0 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let i = 0; i <= 3; i++) {
//     if()
// }

//stop duplicate in a array
const arr12 = [1, 2, 3, 4, 5, 3];

for (let i = 0; i < arr12.length; i++) {
  if (arr12[i] == arr12) {
    continue;
  }
  console.log(i);
}

//remove duplicate from an array
const a = [1, 2, 23, 4, 5, 5, 2];
for (let i = 0; i < a.length; i++) {}
