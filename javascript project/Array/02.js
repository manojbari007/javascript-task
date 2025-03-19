let fruits = ["apple", "banana", "kiwi", "mango"];

// create object  find fruits
let searchCriteria = {
  minLength: 4,
  startsWith: "k",
};
let found = fruits.find((element, index, array) => {
  // console.log(
  //   `checking ${element} at index ${index} in array [${array.join(",")}]`
  // );
  // console.log("this content", this);
  return (
    element.length >= this.minLength && element.startsWith(this.startsWith)
  );
}, searchCriteria);
console.log("found:", found);
