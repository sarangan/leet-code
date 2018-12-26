"""
# Definition for a Node.
class Node(object):
    def __init__(self, val, children):
        self.val = val
        self.children = children
"""
class Solution(object):
    def __init__(self):
        self.max_depth = 0

    def maxDepth(self, root):
        if root is None:
            return 0
        self.recursive_depth(root, 0)
        return self.max_depth

    def recursive_depth(self, node, depth):
        self.max_depth = max(depth, self.max_depth)
        for child in node.children:
            self.recursive_depth(child, depth +1)