//reverse string without using revere() method

function reverseString(str) {
  let revered = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revered += str[i];
  }
  return revered;
}
console.log(reverseString("hello"));

//check array contain duplicate array
function hasDuplicateArr(arr) {
  let set = new Set(arr);
  return set.size != arr.length;
}
console.log(hasDuplicateArr([1, 2, 3, 5]));
