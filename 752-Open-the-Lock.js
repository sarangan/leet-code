/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  const initialState = '0000';
  if(deadends.includes(initialState)) return -1;
  const memo = {};
  return bfs(initialState, memo, target, deadends);
};


function bfs (initState, memo, target, deadends) {
  const stack = [];
  let step = 0;
  stack.push(initState);

  while (stack.length > 0) {
    step++;

    for (let size = stack.length; size > 0; size--) {
      const state = stack.shift();
      memo[state] = true;

      for (let i = 0; i < 4; i++) {
        const up = state.split('');
        up[i] = (+state[i] + 1 + 10) % 10;
        const down = state.split('');
        down[i] = (+state[i] - 1 + 10) % 10;

        for (const newState of [
          up.join(''),
          down.join('')
        ]) {
          if (newState === target) return step;

          if (!memo[newState] && !deadends.includes(newState)) {
            memo[newState] = true;
            stack.push(newState);
          }
        }
      }
    }
  }

  return -1;
}

const deadends = ["8888"], target = "0009";

console.log(openLock(deadends, target));