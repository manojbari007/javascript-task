//task2
let n = 5;
let str = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    str += String.fromCharCode(49 + (i - 1));
  }
  str += "\n";
}

console.log(str);
