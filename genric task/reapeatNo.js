let n = 15;
let CrestCount = 0;
let InfotechCount = 0;
let CrestInfotechCount = 0;
for (let i = 1; i <= n; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("crestInfotech");
    CrestInfotechCount++;
  } else if (i % 3 === 0) {
    console.log("crest");
    CrestCount++;
  } else if (i % 5 === 0) {
    console.log("infotech");
    InfotechCount++;
  } else {
    console.log(i);
  }
}

console.log("crest", CrestCount);
console.log("infotech", InfotechCount);
console.log("crestinfotech", CrestInfotechCount);
