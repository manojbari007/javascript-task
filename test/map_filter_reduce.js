let num = [1, 2, 3, 4, 5, 6, 2];
let doubled = num.map((num) => num * 2); // apply function of each element and transform new array
console.log(doubled);

let fourth = num.filter((num) => num % 2 == 0); //filter call function condition meet of element return new array
console.log(fourth);

let fifth = num.reduce((acc, num) => acc + num, 0); //reduce apply condition return one value
console.log(fifth);
