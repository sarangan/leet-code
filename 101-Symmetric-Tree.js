var isSymmetric = function (root) {
  if (!root) return true;
  const ismirrow = (l, r) => {
    if (l === null || r === null) return l === r;
    if (l.val !== r.val) return false;
    return ismirrow(l.right, r.left) && ismirrow(l.left, r.right);
  };
  return ismirrow(root.left, root.right);
};
