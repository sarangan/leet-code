/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let result = 0;

  const next = (n) => {
    if (n === 0) {
      result++;
      return;
    }
    if (n < 0) return;

    for (const c of [1, 2]) {
      next(n - c);
    }
  };

  next(n);
  return result;
};

// var climbStairs = function (n) {
//   let result = 0;
//
//   const nums = new Array(n);
//   nums[0] = 1;
//   nums[1] = 2;
//
//   for(let i = 0; i < n; i++){
//
//   }
//
//
//   next(n);
//   return result;
// };

console.log(climbStairs(38));

// var test = function (n) {
//   if (n === 0 || n === 1 || n === 2) {
//     return n;
//   }
//   const mem = [n];
//   mem[0] = 1;
//   mem[1] = 2;
//   for (let i = 2; i < n; i++) {
//     mem[i] = mem[i - 1] + mem[i - 2];
//   }
//   return mem[n - 1];
// };
//
// console.log(test(4));

// function fib (n) {
//
//   const nums = new Array(n);
//   nums[0] = 1;
//   nums[1] = 2;
//   for (let i = 2; i < n; i++) {
//     nums[i] = nums[i - 1] + nums[i - 2]
//   }
//   return nums[n - 1];
// }
//
//
// console.log(fib(4));