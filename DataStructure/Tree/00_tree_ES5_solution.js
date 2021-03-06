/*
TREES

Abstract data type

General Tree:
A tree has a root node.
The root node has 0 or more children.
Each child node has 0 or more children.
(each node in the tree can be seen as a subtree)

Constraints:
A child has only one parent and the root node has no parent.
Note: A tree is a special type of graph. A tree is a graph without cycles.

*** Operations:

tree.addChild(value)
=> child node (new tree)
add child to tree/subtree and return child node (which should be a tree instance)

tree.contains(value)
=> true/false
Return true if value is in tree, false if not

tree.traverseDepthFirst(callback)
=> undefined
Invoke the callback for every node in a depth-first order

tree.traverseBreadthFirst(callback)
=> undefined
Invoke the callback for every node in a breadth-first order

*** Additional Exercises:
Given treeA and treeB, check if treeB is a subtree of treeA (meaning that there exists a node n in treeA such that the subtree of n is identical to treeB).

Given a dictionary, create a prefix tree (commonly known as a trie)
https://en.wikipedia.org/wiki/Trie

*/

(function() {
    let logs = new ConsoleLog("F_E_M_Tree", false);

    function Tree (value) {
        // implement me...
        this.value = value;
        this.children = [];
    
    }
    
    //create Tree instance with value as child
    //Push the child into children array 
    //return child
    Tree.prototype.addChild = function(value) {
        // implement me...
        let child = new Tree(value);
        this.children.push(child);
        return child; 
    };
    // Time complexity: O(1)


    var tree = new Tree(1);
    var branch1 = tree.addChild(2);
    var branch2 = tree.addChild(3);
    var branch3 = tree.addChild(4);
    branch1.addChild(5);
    branch1.addChild(6);
    branch3.addChild(7).addChild(8);

    
    //check root is value > return true
    //loop for children array 
        // pass each children to contains for recursive check
     // default false in the last
    Tree.prototype.contains = function(value) {
        // implement me...
        if(this.value === value) return true;
        for(let i = 0; i < this.children.length; i++) {
            if(this.children[i].contains(value)) return true;
        }
        return false;
    };
    // Time complexity: O(n)
    
    
    // This solution is wrong  - XXXX
    Tree.prototype.traverseDepthFirst = function(fn) {
    // implement me...
        this.children.forEach(function(child){
            child.traverseDepthFirst(fn);
        })
        fn(this);
    };
    // Time complexity: O(n)

    let depthFirstResult = [];
    tree.traverseDepthFirst(function(node) {
      depthFirstResult.push(node.value);
    });
    logs.push('depthFirstResult should be [5,6,2,3,8,7,4,1]', depthFirstResult);
    
    
    Tree.prototype.traverseBreadthFirst = function(fn) {
    // implement me...
        let queue = [this];
        while(queue.length) {
            let current = queue.shift();
            fn(current);
            current.children.forEach(function(node) {
                queue.push(node);
            });
        }
    };
    // Time complexity: O(n) - Linear

    let breadthFirstResult = [];
    tree.traverseBreadthFirst(function(node) {
      breadthFirstResult.push(node.value);
    });
    logs.push('breadthFirstResult should be [1,2,3,4,5,6,7,8] = ', breadthFirstResult);
    logs.print();
})();