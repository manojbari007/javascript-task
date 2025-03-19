let str = "";
let n = 5;
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n - i + 1; j++) {
    str += String.fromCharCode(j + 65) + " ";
  }

  str += "\n";
}
console.log(str);
