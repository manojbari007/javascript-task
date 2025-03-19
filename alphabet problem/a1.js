//pattern1

let pattern = "";
let n = 5;
for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    pattern += String.fromCharCode(65 + j) + " ";
  }
  pattern += "\n";
}
console.log(pattern);
