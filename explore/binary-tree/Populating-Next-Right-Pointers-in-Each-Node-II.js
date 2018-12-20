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
n3.left = n7;
n3.right = n5;

var connect = function(root) {
  if(!root) return;
  const queue = [root];

  while(queue.length) {
    let size  = queue.length;

    for(let i = 0; i < size; i++) {
      const currentNode = queue.shift();
      let next;
      if(i < size - 1) {
        next = queue[0]
      } else {
        next = null;
      }
      currentNode.next = next;
      if(currentNode.left) queue.push(currentNode.left);
      if(currentNode.right) queue.push(currentNode.right);
    }
  }
};

connect(n1);
console.log(n1);
