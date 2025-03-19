// let transaction = [["debit"=> 2, "credit"=> 3], ["debit"=> 15, credit => 14]];

let transaction = [
  { debit: 2, credit: 3 },
  { debit: 15, credit: 14 },
];

// let result = Object.values(transaction);
// console.log(result);

let output = transaction.map((transaction) => {
  let amount = Math.abs(transaction.debit - transaction.credit);
  return { ...transaction, amount };
});
console.log(output);
