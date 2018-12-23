var buildTree = function(preorder, inorder) {

  // pop postorder as parent
  // find inorder and split in two parts
  // recursively call build of left and right

  const build = (inorder, preorder) => {
    if (inorder.length === 0 && preorder.length === 0) return null;
    const last = preorder.shift();
    const parent = new TreeNode(last);
    const inorderpivot = inorder.indexOf(last);

    parent.left = build(inorder.slice(0, inorderpivot), preorder.slice(0, inorderpivot));
    parent.right = build(inorder.slice(inorderpivot + 1, inorder.length), preorder.slice(inorderpivot, preorder.length));
    return parent;
  };

  return build(inorder, preorder);
};


console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));