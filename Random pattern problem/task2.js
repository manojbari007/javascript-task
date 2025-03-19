let str = "";
let n = 4;
let count = "";
let space = "";
for (let i = 1; i <= 4; i++) {
  for (let space = 0; space < n - i; space++) {
    str += " ";
  }
  for (let j = 1; j < 2 * i - 1; j++) {
    str += count;
    count++;
  }
  str += "\n";
}
console.log(str);
