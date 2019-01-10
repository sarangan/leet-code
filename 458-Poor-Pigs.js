/**
 * https://leetcode.com/problems/poor-pigs/discuss/94266/Another-explanation-and-solution
 *
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function (buckets, minutesToDie, minutesToTest) {
  let pig = 0;
  while ((minutesToTest / minutesToDie + 1) ** pig < buckets) pig += 1;
  return pig;
};


console.log(poorPigs(1000, 15, 60));