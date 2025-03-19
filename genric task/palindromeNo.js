function isPalindromeNumber(num) {
  let reverserNumber = num.toString().split("").reverse().join("");
  let result = Number(reverserNumber); //string to number convert
  if (num === result) {
    console.log(`${num} is palindrome number`);
  }
}
isPalindromeNumber(121);

// function isPalindrome(numbers) {
//   const str = numbers.toString();
//   const reverseStr = str.split("").reverse().join("");
//   return str === reverseStr;
// }
// let input = 121;
// if (isPalindrome(input)) {
//   console.log(`${input} is palindrom number`);
// } else {
//   console.log(`${input} is not palindrom number`);
// }
