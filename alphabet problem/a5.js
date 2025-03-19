//pattern 5
let str = "";
let n = 5;
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n - i + 1; j++) {
    str += String.fromCharCode(69 - j) + " ";
  }
  str += "\n";
}
console.log(str);
