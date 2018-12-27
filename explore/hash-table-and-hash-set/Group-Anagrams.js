const template = () => new Array(26).fill(0);
const charcodeDiff = c => c.charCodeAt(0) - 'a'.charCodeAt(0);

var groupAnagrams = function(strs) {
  const obj = {};

  for (const n of strs) {
    const t = template();
    for (let i = 0; i < n.length; i++) {
      const index = charcodeDiff(n.charAt(i));
      t[index]++;
    }

    const key = t.join('');
    if (!obj[key]) obj[key] = [];
    obj[key].push(n);
  }

  console.log(obj);

  return Object.values(obj);
};


console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat", 'abz', 'boo', 'bob']));