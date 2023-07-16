// Given a reference of a node in a connected undirected graph.
// Return a deep copy (clone) of the graph.
//Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

// class Node {
//     public int val;
//     public List<Node> neighbors;
// }

// 1. clone graph, duplicate w/ new nodes
// 2. BFS-- search through graph (node relationships)
// we need to use a queue for BFS -- FIFO // Stack for DFS.
// Hashtable -- need to map A to A clone, B to B clone
// DFS : base case -- if !node null return node 
// if visited(node,val) != null return visited [node.val]
// time complexity : O(n + e) space: O(V) -- values within visited

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    
    let visited = {}

    function dfs(node) {
        //base cases
        if(!node) return node;
        // if visited null.value != null return visited[node.val]
        if(!!visited[node.val]) return visited[node.val]; 

        let root = new Node(node.val)
        visited[node.val] = root;

        // recurrence relation
        for(let neighbor of node.neighbors) {
            root.neighbors.push(dfs(neighbor))
        }
        return root;
    }
    return dfs(node);
};  




// Another example with comments

// DFS approach
var cloneGraph = function (node) {
    // DFS approach
    // 1. create a new node
    // 2. add the new node to the visited map
    // 3. for each neighbor of the node
    // 4.    if the neighbor is not in the visited map
    // 5.        create a new node
    // 6.        add the new node to the visited map
    // 7.    add the new node to the neighbors of the new node
    if (!node) return null;

    let dfs = (node, visited) => {
        if (visited.has(node)) return visited.get(node);
        let newNode = new Node(node.val);
        visited.set(node, newNode);
        for (let neighbor of node.neighbors) {
            newNode.neighbors.push(dfs(neighbor, visited));
        }
        return newNode;
    }
    return dfs(node, new Map());
};
