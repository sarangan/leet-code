/**
 * @param {number} n
 * @return {number}
 */
function climbStairs (n) {
  if (n === 1) return 1;

  let first = 1, second = 2;
  for (let i = 2; i < n; i++) {
    let next = first + second;
    first = second;
    second = next;
  }

  return second;
}


console.log(climbStairs(3));