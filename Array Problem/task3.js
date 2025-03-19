function positiveValue(num) {
  let newObj = {};

  for (let i = 0; i < num; i++) {
    const key = String.fromCharCode(97 + i);
    const value = String.fromCharCode(97 + i);
    newObj[key] = value;
  }
  return newObj;
}
let result = positiveValue(6);
console.log(result);
