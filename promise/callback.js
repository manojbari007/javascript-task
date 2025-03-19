const data1 = [0, 1, 2, 3, "4", 5, 6];
const filtered = data1.filter((num) => true); // Include all elements
const sum = filtered.reduce((acc, num) => acc + num, 0);
console.log(sum);
