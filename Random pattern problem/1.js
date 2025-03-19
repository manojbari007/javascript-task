let rows = 6;
let cols = 7;
let pattern = "";
for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= 7; j++) {
    if (i == 1 || i == rows || j == 1 || j == cols) {
      pattern += "* ";
    } else pattern += "  ";
  }
  pattern += "\n";
}
console.log(pattern);
