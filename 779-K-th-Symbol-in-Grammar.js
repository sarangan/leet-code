/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var kthGrammar = function (N, K) {
  if (N === 1) return 0;
  const carry = K % 2;
  const newK = Math.ceil(K / 2);
  const result = +kthGrammar(N - 1, newK);
  return result === 0
    ? +'01'.charAt(carry === 1 ? 0 : 1)
    : +'10'.charAt(carry === 1 ? 0 : 1);
};

console.log(kthGrammar(4, 1));