// let keys=[
// "field1"=>"first",
// "field2"=>"second",
// "field3"=>"third"
// ]

// let values=[
// "fieldValue1"=>"dinosaur",
// "fieldValue2"=>"pig",
// "fieldValue3"=>"platypus"
// ]

let keys = [
  { field1: "first" },
  {
    field2: "second",
  },
  {
    field3: "third",
  },
];
let values = [
  {
    fieldValue: "dinosaur",
  },
  {
    fieldValue: "pig",
  },
  {
    fieldValue: "platypus",
  },
];
let result = {};
keys.map((keys, index) => {
  let key = Object.keys(keys);
  let value = Object.values(values[index])[0];
  result[key] = value;
});

console.log(result);
