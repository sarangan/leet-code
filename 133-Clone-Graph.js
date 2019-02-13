const { UndirectedGraphNode } = require('./tools');

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function (graph) {
  if(!graph) return null;
  return helper(graph, {});
};

function link (node1, node2) {
  node1.neighbors.push(node2);
  node2.neighbors.push(node1);
}

function helper (graph, memo) {
  if (memo[graph.label]) {
    return memo[graph.label];
  }
  const head = new UndirectedGraphNode(graph.label);
  memo[head.label] = head;
  for (const node of graph.neighbors) {
    head.neighbors.push(helper(node, memo));
  }
  return head;
}

const node1 = new UndirectedGraphNode(1);
const node2 = new UndirectedGraphNode(2);
const node3 = new UndirectedGraphNode(3);

link(node1, node2);
link(node1, node3);
link(node2, node3);

console.log(cloneGraph(node1));