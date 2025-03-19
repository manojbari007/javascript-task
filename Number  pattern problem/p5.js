let n = 5;

let str = "";
for (let i = 1; i <= n; i++) {
  for (let space = 0; space < n - i; space++) {
    str += " ";
  }
  for (let j = 0; j < i; j++) {
    str += j;
  }
  str += "\n";
}
console.log(str);
