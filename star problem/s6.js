//ans6
let n = 5;
for (let j = n; j >= 1; j--) {
  let str = "*";
  let space = " ";
  console.log(space.repeat(n - j) + str.repeat(j * 2 - 1));
}
