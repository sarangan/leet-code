这种事类似于二分查找的方式来便利 inorder 数组的方式来进行
```javascript
var buildTree = function(inorder, postorder) {
    function ctree(start,end){
        if(start>end) return null;
        var mid=inorder.indexOf(postorder.pop());
        var root=new TreeNode(inorder[mid]);
        root.right=ctree(mid+1,end);
        root.left=ctree(start,mid-1);
        return root;
    }
    return ctree(0,inorder.length-1);
};
```

因为二分查找并没有很好理解，个人的解决方案：
利用后序遍历的特性，每次提取后序中最后一个元素，在中序中查找，分出前后两个部分来，再递归调用。

这里卡住我的一点是， 分开中序的点容易找，那么分开后序的点，应该怎么找。
因为中序是左中右 ， 后序是 左右中，那么左右的数量肯定是一致的，所以借用中序的分割点给后序的数组用，完成迭代。

```
var buildTree = function(inorder, postorder) {

  // pop postorder as parent
  // find inorder and split in two parts
  // recursively call build of left and right

  const build = (inorder, postorder) => {
    console.log(inorder, postorder);
    if (inorder.length === 0 && postorder.length === 0) return null;
    const last = postorder.pop();
    const parent = new TreeNode(last);
    const inorderpivot = inorder.indexOf(last);

    parent.left = build(inorder.slice(0, inorderpivot), postorder.slice(0, inorderpivot));
    parent.right = build(inorder.slice(inorderpivot + 1, inorder.length), postorder.slice(inorderpivot, postorder.length));
    return parent;
  };

  return build(inorder, postorder);
};
```