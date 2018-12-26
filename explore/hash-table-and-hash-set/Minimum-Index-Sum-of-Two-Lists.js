/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  const dict = list1.reduce((p, n, i) => {
    p[n] = i;
    return p;
  }, {});

  let smallestIndexSum = Number.MAX_VALUE, tempList = [];
  for (let i = 0; i < list2.length; i++) {
    const indexInDict = dict[list2[i]];
    if (indexInDict !== undefined) {
      if (smallestIndexSum === indexInDict + i) tempList.push(list2[i]);
      if (indexInDict + i < smallestIndexSum) {
        smallestIndexSum = indexInDict + i;
        tempList = [list2[i]];
      }
    }
  }

  return tempList;
};


console.log(findRestaurant(
  ["Shogun", "Tapioca Express", "Burger King", "KFC"],
  ["KFC", "Shogun", "Burger King"]
));