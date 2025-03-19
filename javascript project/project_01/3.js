//pattern 5
let rows = 5; // Number of rows
let pattern = "";

for (let i = 0; i < rows; i++) {
  let line = " ".repeat((rows - i - 1) * 2); // Add leading spaces
  for (let j = 0; j <= i; j++) {
    line += j + " "; // Append numbers in each row
  }
  pattern += line.trim() + "\n";
}

console.log(pattern);
