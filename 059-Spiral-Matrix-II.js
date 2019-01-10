// Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.
//
//   Example:
//
// Input: 3
// Output:
//   [
//     [ 1, 2, 3 ],
//     [ 8, 9, 4 ],
//     [ 7, 6, 5 ]
//   ]

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const dist = new Array(n).fill(0).map(() => new Array(n).fill(0));
  const dict = {}, maxSize = n ** 2;
  let i = 0, j = 0, step = 1, d = 'r';

  const nextStep = () => {
    switch (d) {
      case 'r': return [i, j+1];
      case 'u': return [i-1, j];
      case 'd': return [i+1, j];
      case 'l': return [i, j-1];
    }
  };

  const changeD = () => {
    switch (d) {
      case 'r': d = 'd';break;
      case 'u': d = 'r';break;
      case 'd': d = 'l';break;
      case 'l': d = 'u';break;
    }
  };

  const needChanged = () => {
    switch (d) {
      case 'r': return j === n-1;
      case 'u': return i === 0;
      case 'd': return i === n-1;
      case 'l': return j === 0;
    }
  };

  while (Object.keys(dict).length !== maxSize) {
    dist[i][j] = step++;
    dict[i+'-'+j] = true;
    let [newi, newj] = nextStep(i, j);
    if(dict[newi+'-'+newj] || needChanged()){
      changeD();
      [newi, newj] = nextStep(i, j);
    }
    [i, j] = [newi, newj];
  }

  return dist;
};


console.log(generateMatrix(3));