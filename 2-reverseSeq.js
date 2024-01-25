// WPU Coding Challenge 2024
// Day 2/366

// Cara Pertama
// const reverseSeq = (n) => {
//   const result = [];
//   for (let i = n; i >= 1; i--) {
//     result.push(i);
//   }
//   return result;
// };

// Cara Kedua
const reverseSeq = (n) => [...Array(n)].fill().map((el, i) => n - i);

console.log(reverseSeq(5));
