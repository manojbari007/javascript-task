//task1
let n = 5;
let str = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    str += String.fromCharCode(49 + j) + " ";
  }
  str += "\n";
}
console.log(str);
