/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const stack = [...rooms[0]];
  const res = new Array(rooms.length).fill(0);
  const memo = {};
  res[0] = 1;

  while (stack.length) {
    const len = stack.length;
    for (let i = 0; i < len; i++) {
      const target = stack.shift();
      if (memo[target]) continue;
      stack.push(...rooms[target]);
      res[target] = 1;
      memo[target] = true;
    }
  }

  return res.indexOf(0) === -1;
};


const data = [[1,3],[3,0,1],[2],[0]];
console.log(canVisitAllRooms(data));