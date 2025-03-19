function outerFunction(outerValue) {
  return function innerFunction(innerValue) {
    return outerValue + innerValue;
  };
}
const add10 = outerFunction(10);
console.log(add10(6));
