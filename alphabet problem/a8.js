// pattern8;
let n = 5;
let str = "";

let CharCode = 65;
for (let i = 1; i <= n; i++) {
  for (let space = 0; space < n - i; space++) {
    str += "  ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    str += String.fromCharCode(CharCode) + " ";
    CharCode++;
  }
  str += "\n";
}
console.log(str);
