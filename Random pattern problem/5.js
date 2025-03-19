let n = 4;
let str = "";
let CharCode = 97;
let count = 1;
for (let i = 1; i <= n; i++) {
  for (let space = 0; space < n - i; space++) {
    str += " ";
  }
  for (let j = 1; j <= i; j++) {
    if (i % 2 == 0) {
      str += String.fromCharCode(CharCode) + " ";
      CharCode++;
    } else {
      str += count + " ";
      count++;
    }
  }
  str += "\n";
}
console.log(str);
