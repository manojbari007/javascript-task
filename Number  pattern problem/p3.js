//pattern 3
let str = "";
let variable = "";
let n = 3;
for (let i = 1; i <= n; i++) {
  for (let space = 0; space < n - i; space++) {
    str += " ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    str += String.fromCharCode(49 + variable);
    variable++;
  }
  str += "\n";
}
console.log(str);
