//t1
// let data1 = [0, 1, 2, 3, 4];
// let result = data1.find((data1) => data1 >= 3);
// console.log(result);

//t2
// let data2 = ["zero" => 0, "one" => 1, "two" => 2, "three"=> 3, "four" => 4];
// let data2 = [{ zero: 0 }, { one: 1 }, { two: 2 }, { three: 3 }, { four: 4 }];

// let findNumber = data2.find((item) => item.three === 3);
// console.log(findNumber);

//t3
// let data3 = [
//   [0, 1],
//   [2, [3]],
// ];
// console.log(data3[1][1][0]);

//t4

// let data4 =  [
//     "a" => [
//       "b" => 0,
//       "c" => 1
//     ],
//     "b" => [
//       "e" => 2,
//       "o" => [
//         "b" => 3
//       ]
//     ]
//   ];

let data4 = {
  a: {
    b: 0,
    c: 1,
  },
  b: {
    e: 2,
    o: {
      b: 3,
    },
  },
};

let result = data4.b.o.b;
console.log(result);
