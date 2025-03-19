let rows = 6;
let cols = 14;
let pattern = "";
for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= 14; j++) {
    if (i == 1 || j == 1 || i == rows || j == cols) {
      pattern += "*" + " ";
    } else {
      pattern += "  ";
    }
  }
  pattern += "\n";
}
console.log(pattern);
