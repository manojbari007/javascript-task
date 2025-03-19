// ans 9
let n = 5;
for (let i = 1; i <= n; i++) {
  let str = "*";

  console.log(str.repeat(i));
}
for (let j = n - 1; j >= 1; j--) {
  let str = "*";
  console.log(str.repeat(j));
}
