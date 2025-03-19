function toSwapNo(x, y) {
  console.log(`before swap x= ${x} and  y=${y}`);
  [x, y] = [y, x];
  console.log(`after swap x=${x} and y= ${y}`);
}
toSwapNo(10, 15);
