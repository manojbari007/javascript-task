//pattern6

let str = "";
let n = 5;
let CharCode = 69;
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n - i + 1; j++) {
    str += String.fromCharCode(n - i - j + 65) + " ";
  }
  str += "\n";
}
console.log(str);
