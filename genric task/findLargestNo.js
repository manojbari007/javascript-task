let arr = [55, 77, 55, 991, 11, 31];
let largest = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}

console.log(largest);
