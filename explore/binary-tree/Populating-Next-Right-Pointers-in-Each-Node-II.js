const { LinkedBinaryTreeNode } = require('../../tools');

const n1 = new LinkedBinaryTreeNode(1);
const n2 = new LinkedBinaryTreeNode(2);
const n3 = new LinkedBinaryTreeNode(2);
const n4 = new LinkedBinaryTreeNode(3);
const n5 = new LinkedBinaryTreeNode(3);
const n6 = new LinkedBinaryTreeNode(4);
const n7 = new LinkedBinaryTreeNode(4);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n6;
n3.right = n5;

function group(arr) {
  const obj = {};
  for (let e of arr) {
    (obj[e.d] === undefined)
      ? obj[e.d] = [e.n]
      : obj[e.d].push(e.n);
  }
  return Object.values(obj).reduce((prev, next) => {
    prev.push(next);
    return prev;
  }, []);
}

var connect = function(root) {
  if(!root) return;
  const nodes = [{ n: root, d: 0 }];

  const traverse = (node, deep) => {
    if (node === null) return;

    if (node.left) nodes.push({ n: node.left, d: deep });
    if (node.right) nodes.push({ n: node.right, d: deep });

    traverse(node.left, deep + 1);
    traverse(node.right, deep + 1);
  };

  traverse(root, 1);
  group(nodes).forEach(r => r.forEach((n, i, arr) => {
    n.next = arr[i + 1]
  }))
};

connect(new LinkedBinaryTreeNode());
console.log(n1);
