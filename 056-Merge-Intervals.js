const { Interval } = require('./tools');

/**
 * Input: [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 */

/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function (intervals) {
  if (intervals.length <= 1) return intervals;

  intervals.sort((p, n) => {
    if (p.start !== n.start) return p.start - n.start;
    else return p.end - n.end;
  });
  const results = [];
  const lastEl = intervals.reduce((p, n, i) => {
    if (p.end < n.start) {
      results.push(p);
      return n;
    }

    return (p.start <= n.start)
      ? (p.end >= n.end)
        ? new Interval(p.start, p.end)
        : new Interval(p.start, n.end)
      : (p.end >= n.end)
        ? new Interval(n.start, p.end)
        : new Interval(n.start, n.end);
  });
  results.push(lastEl);
  return results;
};


const intervals = [[2,3],[2,2],[3,3],[1,3],[5,7],[2,2],[4,6]];
const ia = intervals.map(e => new Interval(e[0], e[1]));
// console.log(ia);
console.log(merge(ia));
// console.log(ia);