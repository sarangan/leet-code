// 43. Multiply Strings
// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.
//
//   Example 1:
//
// Input: num1 = "2", num2 = "3"
// Output: "6"
// Example 2:
//
// Input: num1 = "123", num2 = "456"
// Output: "56088"
// Note:
//
//   The length of both num1 and num2 is < 110.
// Both num1 and num2 contain only digits 0-9.
// Both num1 and num2 do not contain any leading zero, except the number 0 itself.
//   You must not use any built-in BigInteger library or convert the inputs to integer directly.

const addWithWeight = arr => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].concat(new Array(i).fill(0));
  }
  return arr
    .reduce((p, n) => {
      const longer = p.length > n.length ? p.length : n.length;
      p = new Array(longer - p.length).fill(0).concat(p);
      n = new Array(longer - n.length).fill(0).concat(n);

      let carry = 0;
      const result = [];
      for (let i = longer - 1; i >= 0; i--) {
        const r = (p[i] + n[i] + carry);
        if (r >= 10) {
          carry = 1
        } else {
          carry = 0;
        }
        result.unshift(r % 10);
      }
      if (carry === 1) result.unshift(1);
      return result;
    })
    .join('');
};

var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';
  let result = [], carry = 0;

  for (let i1 = num1.length - 1; i1 >= 0; i1--) {
    const tr = [];
    for (let i2 = num2.length - 1; i2 >= 0; i2--) {
      const mr = +num1[i1] * +num2[i2];
      const r = (mr + carry) % 10;
      carry = (mr + carry - r) / 10;
      tr.unshift(r);
    }
    if (carry !== 0) tr.unshift(carry);
    carry = 0;
    result.push(tr);
  }

  return addWithWeight(result);
};

const num1 = "123", num2 = "456";
console.log(multiply(num1, num2));