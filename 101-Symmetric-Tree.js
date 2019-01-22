// recursion

// var isSymmetric = function (root) {
//   if (!root) return true;
//   const ismirrow = (l, r) => {
//     if (l === null || r === null) return l === r;
//     if (l.val !== r.val) return false;
//     return ismirrow(l.right, r.left) && ismirrow(l.left, r.right);
//   };
//   return ismirrow(root.left, root.right);
// };


// BFS

var isSymmetric = function (root) {
  if (!root) return true;
  const s1 = [root.left], s2 = [root.right];

  while (s1.length > 0 || s2.length > 0) {
    const e1 = s1.pop(), e2 = s2.pop();
    if (e1 === null && e2 !== null) return false;
    if (e2 === null && e1 !== null) return false;

    s1.push(e1.left); s1.push(e2.right);
    s2.push(e1.right); s2.push(e2.left);
  }
};