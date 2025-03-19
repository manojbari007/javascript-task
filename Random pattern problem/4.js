let n = 4;
let str = "";
let count = 1;
let letterCode = 97;
for (let i = 1; i <= n; i++) {
  for (let space = 0; space < n - i; space++) {
    str += " ";
  }
  for (let j = 1; j <= i; j++) {
    if (i % 2 == 0) {
      str += String.fromCharCode(letterCode + i / 2 - 1) + " ";
    } else {
      str += Math.ceil(i / 2) + " ";
    }
  }
  str += "\n";
}
console.log(str);
