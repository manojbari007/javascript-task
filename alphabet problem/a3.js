// patetrn3
let str = "";
let count = 65;
let n = 5;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    str = str + String.fromCharCode(count) + " ";
    count++;
  }
  str += "\n";
}
console.log(str);
