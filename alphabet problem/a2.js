//pattern2
let str = "";
let n = 5;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    str += String.fromCharCode(65 + (i - 1)) + " ";
  }
  str += "\n";
}
console.log(str);
