let n = 5;
let str = "";
for (let i = 1; i <= n; i++) {
  for (j = 1; j <= i; j++) {
    str += (i + j) % 2 ? "0" : "1";
    str += " ";
  }
  str += "\n";
}
console.log(str);
