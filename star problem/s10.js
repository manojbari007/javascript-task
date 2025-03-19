//ans10
let n = 5;
for (let i = 1; i <= n; i++) {
  let str = "*";
  let space = " ";
  console.log(space.repeat(n - i) + str.repeat(i));
}
for (let j = n - 1; j >= 1; j--) {
  let str = "*";
  let space = " ";
  console.log(space.repeat(n - j) + str.repeat(j));
}
