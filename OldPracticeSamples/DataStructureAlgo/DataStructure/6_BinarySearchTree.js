/*
BINARY SEARCH TREES

Abstract data type
A binary search tree is a tree with the additional constraints:
- each node has only two child nodes (node.left and node.right)
- all the values in the left subtree of a node are less than or equal to the value of the node
- all the values in the right subtree of a node are greater than the value of the node

*** Operations:

bsTree.insert(value)
=> bsTree (return for chaining purposes)
Insert value into correct position within tree

bsTree.contains(value)
=> true/false
Return true if value is in tree, false if not

bsTree.traverseDepthFirst_inOrder(callback)
=> undefined
Invoke the callback for every node in a depth-first in-order (visit left branch, then current node, than right branch)
Note: In-Order traversal is most common type for binary trees. For binary search tree, this visits the nodes in ascending order (hence the name).

bsTree.traverseDepthFirst_preOrder(callback)
=> undefined
Invoke the callback for every node in a depth-first pre-order (visits current node before its child nodes)

bsTree.traverseDepthFirst_postOrder(callback)
=> undefined
Invoke the callback for every node in a depth-first post-order (visit the current node after its child nodes)

bsTree.isValid()
=> returns true if BST is a valid BST otherwise returns false. This method is useful for checking your other methods.

bsTree.removeNode(value)
=> node
Remove node from tree.

bsTree.checkIfFull()
=> true/false
A binary tree is full if every node has either zero or two children (no nodes have only one child)

bsTree.checkIfBalanced()
=> true/false
For this exercise, let's say that a tree is balanced if the minimum height and the maximum height differ by no more than 1. The height for a branch is the number of levels below the root.


*** Additional Exercises:
A binary search tree was created by iterating over an array and inserting each element into the tree. Given a binary search tree with no duplicates, how many different arrays would result in the creation of this tree.

*/

(function () {
    let logs = new ConsoleLog("F_E_M_BST", false);

    function BinarySearchTree(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    //value < root
        //if left exist
            //recursive call => this.left.insert(value)
        //else 
            //insert value 
    //value > root
        //if right exist
            //recursive call => this.right.insert(value)
        //else 
            //insert value
    BinarySearchTree.prototype.insert = function (value) {
        // implement me...
        if(value <= this.value) {
            if(this.left) {
                this.left.insert(value);
            } else {
                this.left = new BinarySearchTree(value);
            }
        } else {
            if(this.right) {
                this.right.insert(value);
            } else {
                this.right = new BinarySearchTree(value);
            }
        }
        return this;
    };
    // Time complexity: O(log(n))
    /*--------------------------------------------------------- XXXXXXXXX ---------------------------------------------------------*/

    //if root is equal to value return true
    //if value < root
        //if left exist
            //recursive call => pass value to left
        //else
            // return false;
    //if value > root
        //if right exist
            //recursive call => pass value to right
        //else
            // return false;
    //default return false;
    BinarySearchTree.prototype.contains = function (value) {
        // implement me...
        if(value  === this.value) return true;
        if(value < this.value) {
            return !!this.left && this.left.contains(value);
        } else {
            return !!this.right && this.right.contains(value);
        }
        return false;
    };
    // Time complexity: O(log(n))

    let bsTree = new BinarySearchTree(10);
    bsTree.insert(5).insert(15).insert(8).insert(3).insert(7).insert(20).insert(17).insert(9).insert(14);
    logs.push("BST = ", bsTree);
    /*--------------------------------------------------------- XXXXXXXXX ---------------------------------------------------------*/

    /*
        20
      10  30

      In-order - left root right
      output - 10, 20, 30
    */
    //if left and right does not exist call fn
    //if left exist, recursive call => pass fn to traverseDepthFirst_inOrder
    // call fn
    //if right exist, recursive call => pass fn to traverseDepthFirst_inOrder
    BinarySearchTree.prototype.traverseDepthFirst_inOrder = function (fn) {
        // implement me...
        if(!this.left && !this.right) return fn(this);
        if(this.left) this.left.traverseDepthFirst_inOrder(fn);
        fn(this);
        if(this.right) this.right.traverseDepthFirst_inOrder(fn);
    };
    // Time complexity: O(n)

    let result_traverseDepthFirst_inOrder = [];
    bsTree.traverseDepthFirst_inOrder(function(node) {
      result_traverseDepthFirst_inOrder.push(node.value);
    });
    logs.push('InOrder should be [3,5,7,8,9,10,14,15,17,20]', result_traverseDepthFirst_inOrder);

    /*--------------------------------------------------------- XXXXXXXXX ---------------------------------------------------------*/

    /*
        20
      10  30

      pre-order - root left right
      output - 20, 10, 30
    */
    //if left and right does not exist call fn 
    //call fn
    //if left exist, recursive call => pass fn to traverseDepthFirst_preOrder
    //if right exist, recursive call => pass fn to traverseDepthFirst_preOrder
    BinarySearchTree.prototype.traverseDepthFirst_preOrder = function (fn) {
        // implement me...
        fn(this);
        if(this.left) this.left.traverseDepthFirst_preOrder(fn);
        if(this.right) this.right.traverseDepthFirst_preOrder(fn);
    };
    // Time complexity: O(n)

    let result_traverseDepthFirst_preOrder = [];
    bsTree.traverseDepthFirst_preOrder(function(node) {
      result_traverseDepthFirst_preOrder.push(node.value);
    });
    logs.push('PreOrder should be [10,5,3,8,7,9,15,14,20,17]', result_traverseDepthFirst_preOrder);

    /*--------------------------------------------------------- XXXXXXXXX ---------------------------------------------------------*/

    /*
        20
      10  30

      post-order - left right root
      output - 10, 30, 20
    */
    //if left and right does not exist call fn
    //if left exist, recursive call => pass fn to traverseDepthFirst_postOrder
    //if right exist, recursive call => pass fn to traverseDepthFirst_postOrder
    //call fn
    BinarySearchTree.prototype.traverseDepthFirst_postOrder = function (fn) {
        // implement me...
        if(this.left) this.left.traverseDepthFirst_postOrder(fn);
        if(this.right) this.right.traverseDepthFirst_postOrder(fn);
        fn(this);        
    };
    // Time complexity: O(n)

    let result_traverseDepthFirst_postOrder = [];
    bsTree.traverseDepthFirst_postOrder(function(node) {
      result_traverseDepthFirst_postOrder.push(node.value);
    });
    logs.push('PostOrder should be [3,7,9,8,5,14,17,20,15,10]', result_traverseDepthFirst_postOrder);

    /*--------------------------------------------------------- XXXXXXXXX ---------------------------------------------------------*/

    //case 1:- Minimum value node does not have any left and right node
        //if parent exist
        //else parent does not extsit, i.e its a root node
    //case 2:- Minimum value node does not have left node, it has only right subtree
        //if parent exist
        //else parent does not exist, => make right subTree as main tree
    //case 3:- left subtree exist:- recursive call => pass left subtree to deleteMin
    BinarySearchTree.prototype.deleteMin = function(parent)  {
        if(!this.left && !this.right) {
            if(parent) {
                parent.left = null;
            } else {
                this.value = null;
            }
        } else if(!this.left && this.right) {
            if(parent) {
                parent.left = this.right;
            } else {
                this.value = this.right.value;
                this.left = this.right.left || null;
                this.right = this.right.right || null;
            }
        } else { // if left exist
            this.left.deleteMin(this);
        }
    }
    //Time complexity: O(log(n))

    bsTree.deleteMin(); //[5,7,8,9,10,14,15,17,20]
    bsTree.deleteMin(); //[7,8,9,10,14,15,17,20]
    bsTree.deleteMin(); //[8,9,10,14,15,17,20]
    bsTree.deleteMin(); //[9,10,14,15,17,20]
    bsTree.deleteMin(); //[10,14,15,17,20]
    bsTree.deleteMin(); //[14,15,17,20] // deleting root node 
    //bsTree.deleteMin(); //[15,17,20]
    //bsTree.deleteMin(); //[17,20]
    //bsTree.deleteMin(); //[20]
    //bsTree.deleteMin(); //[]
    result_traverseDepthFirst_inOrder = [];
    bsTree.traverseDepthFirst_inOrder(function(node) {
        result_traverseDepthFirst_inOrder.push(node.value);
      });
    logs.push('deleteMin [14,15,17,20]', result_traverseDepthFirst_inOrder);
    bsTree.insert(5).insert(8).insert(3).insert(7).insert(9);

    /*--------------------------------------------------------- XXXXXXXXX ---------------------------------------------------------*/

    //case 1:- Maximum value node does not have any left and right node
        //if parent exist
        //else parent does not exist, i.e its a root node
    //case 2:- Maximum value node does not have right node, it has only left subtree
        //if parent exist
        //else parent does not exist, => make left subTree as main tree
    //case 3:- right subtree exist:- recursive call => pass right subtree to deleteMax
    BinarySearchTree.prototype.deleteMax = function(parent)  {
        if(!this.left && !this.right) {
            if(parent) {
                parent.right = null;
            } else {
                this.value = null;
            }
        } else if(!this.right && this.left) {
            if(parent) {
                parent.right = this.left;
            } else {
                this.value = this.left.value;
                this.right = this.left.right || null;
                this.left = this.left.left || null;
            }
        } else { //if right sub tree exist 
            this.right.deleteMax(this);
        }
    }
    //Time complexity: O(log(n))

    //bsTree:-          //[3,5,7,8,9,14,15,17,20]
    bsTree.deleteMax(); //[3,5,7,8,9,14,15,17]
    bsTree.deleteMax(); //[3,5,7,8,9,14,15]
    bsTree.deleteMax(); //[3,5,7,8,9,14]
    bsTree.deleteMax(); //[3,5,7,8,9]
    bsTree.deleteMax(); //[3,5,7,8]
    //bsTree.deleteMax(); //[3,5,7]
    //bsTree.deleteMax(); //[3,5]
    //bsTree.deleteMax(); //[3]
    //bsTree.deleteMax(); //[]

    result_traverseDepthFirst_inOrder = [];
    bsTree.traverseDepthFirst_inOrder(function(node) {
        result_traverseDepthFirst_inOrder.push(node.value);
      });
    logs.push('deleteMax [3,5,7,8,9]', result_traverseDepthFirst_inOrder);

    /*--------------------------------------------------------- XXXXXXXXX ---------------------------------------------------------*/
 
    //Find Node to be deleted 
    //Find number of child nodes 
        //Case 1:- its a leaf node ->  has no left and no right
            //if parent exist
            //else parent does not exist
        //Case 2:- it has one child
            //if parent exist
                //if left child exist
                //else right child exist
            //else parent does not exist
                //if left child exist
                //if right child exist
        //case 3:- it has two children
            //Find minimum node value in the right subtree
            //replace with the node to be deleted 
            //delete minimum value from node by passing to deleteMin
    BinarySearchTree.prototype.deleteNode = function(value) {
        var parent, children, foundNode = false, node;
        function findNode(value, root) {
           var current = root;
           while(current) {
             if (value > current.value) {
                parent = current;
                current = current.right;
             } else if (value < current.value) {
                parent = current;
                current = current.left;
             } else if (value == current.value) {
                node = current;
                break;
             }
           }
        }

        function findMin(node) {
            var minimum = node;
            while(node) {
                minimum = node;
                node = node.left;
            }
            return minimum;
        }

        function getChildren(node) {
            var count = 0;
            return count + (!!node.left ? 1 : 0) + (!!node.right ? 1 : 0);
        }

        findNode(value, this);

        if (node) {
            children = getChildren(node);
            switch(children) {
                case 0: 
                    if(parent) {
                        parent.left = null;
                    } else {
                        this.value = null;
                    }
                    break;
                case 1:
                    // Need to correct below logic 
                        //Case 2:- it has one child
                            //if parent exist
                                //if left child exist
                                //else right child exist
                            //else parent does not exist
                                //if left child exist
                                //if right child exist
                    if(parent) {
                        parent.left = node.right;
                    } else {
                        var keep = node.left;
                        this.value = keep.value;
                        this.left = null;
                    }
                    break;
                case 2: {
                    var minimum = findMin(node.right);
                    node.value = minimum.value;
                    node.right.deleteMin();
                    break;
                }
            }
        }  
        
        return !!node;
    };
    //Time complexity: 

    let bsTree2 = new BinarySearchTree(10);
    bsTree2.insert(5).insert(15).insert(8).insert(3).insert(7).insert(20).insert(17).insert(9).insert(14);
    
    result_traverseDepthFirst_inOrder = [];
    bsTree2.traverseDepthFirst_inOrder(function(node) {
        result_traverseDepthFirst_inOrder.push(node.value);
      });
    logs.push('Tree InOrder [3,5,7,8,9,10,14,15,17,20] = ', result_traverseDepthFirst_inOrder);
    
    logs.push("Delete Node 3 should be true= ", bsTree2.deleteNode(3));
    result_traverseDepthFirst_inOrder = [];
    bsTree2.traverseDepthFirst_inOrder(function(node) {
        result_traverseDepthFirst_inOrder.push(node.value);
      });
    logs.push('After deleting 3 from  [5,7,8,9,10,14,15,17,20] = ', result_traverseDepthFirst_inOrder);

    logs.push("Delete Node 5 should be true= ", bsTree2.deleteNode(5));
    result_traverseDepthFirst_inOrder = [];
    bsTree2.traverseDepthFirst_inOrder(function(node) {
        result_traverseDepthFirst_inOrder.push(node.value);
      });
    logs.push('After deleting 5 from  [7,8,9,10,14,15,17,20] = ', result_traverseDepthFirst_inOrder);

    bsTree2.insert(3).insert(5).insert(16).insert(18).insert(21);

    result_traverseDepthFirst_inOrder = [];
    bsTree2.traverseDepthFirst_inOrder(function(node) {
        result_traverseDepthFirst_inOrder.push(node.value);
      });
    logs.push('Tree  [3,5,7,8,9,10,14,15,16,17,18,20,21] = ', result_traverseDepthFirst_inOrder);

    logs.push("Delete Node 20 should be true= ", bsTree2.deleteNode(20));
    result_traverseDepthFirst_inOrder = [];
    bsTree2.traverseDepthFirst_inOrder(function(node) {
        result_traverseDepthFirst_inOrder.push(node.value);
      });
    logs.push('After deleting 20 [3,5,7,8,9,10,14,15,16,17,18,21] = ', result_traverseDepthFirst_inOrder);

    logs.push("Delete Node 15 should be true= ", bsTree2.deleteNode(15));
    result_traverseDepthFirst_inOrder = [];
    bsTree2.traverseDepthFirst_inOrder(function(node) {
        result_traverseDepthFirst_inOrder.push(node.value);
      });
    logs.push('After deleting 15 [3,5,7,8,9,10,14,16,17,18,21] = ', result_traverseDepthFirst_inOrder);

    logs.push("Delete Node 10 should be true= ", bsTree2.deleteNode(10));
    result_traverseDepthFirst_inOrder = [];
    bsTree2.traverseDepthFirst_inOrder(function(node) {
        result_traverseDepthFirst_inOrder.push(node.value);
      });
    logs.push('After deleting 10 [3,5,7,8,9,14,16,17,18,21] = ', result_traverseDepthFirst_inOrder);

    /*--------------------------------------------------------- XXXXXXXXX ---------------------------------------------------------*/

    BinarySearchTree.prototype.traverseBreadthFirst = function(fn) {
        let queue = [this];
        while(queue.length) {
            let current = queue.shift();
            fn(current);
            !!current.left && queue.push(current.left);
            !!current.right && queue.push(current.right);
        }
    }
    //Time complexity: O(n)

    let bsTree1 = new BinarySearchTree(10);
    bsTree1.insert(5).insert(15).insert(8).insert(3).insert(7).insert(20).insert(17).insert(9).insert(14);
    logs.push("BST = ", bsTree1);

    let breadthFirstResult = [];
    bsTree1.traverseBreadthFirst(function(node) {
      breadthFirstResult.push(node.value);
    });
    logs.push('breadthFirstResult should be [10,5,15,3,8,14,20,7,9,17] = ', breadthFirstResult);

    /*--------------------------------------------------------- XXXXXXXXX ---------------------------------------------------------*/

    // true/false
    // A binary tree is full if every node has either zero or two children (no nodes have only one child)
    BinarySearchTree.prototype.checkIfFull = function () {
        // implement me...
        let result = true;
        this.traverseBreadthFirst(function(node){
            if(!node.left && node.right) {
                result = false;
            } else if (node.left && !node.right) {
                result = false;
            }
        });
        return result;
    };
     //Time complexity: O(n)

    logs.push('[10,5,15,3,8,14,20,7,9,17] checkIfFull should be false = ', bsTree1.checkIfFull());
    bsTree1.insert(21);
    logs.push('[10,5,15,3,8,14,20,7,9,17,21] checkIfFull should be true = ', bsTree1.checkIfFull());
    // Time complexity:

    var fullBSTree = new BinarySearchTree(10);
    fullBSTree.insert(5).insert(20).insert(15).insert(21).insert(16).insert(13);
    logs.push('should be true = ',fullBSTree.checkIfFull());

    /*--------------------------------------------------------- XXXXXXXXX ---------------------------------------------------------*/

    BinarySearchTree.prototype.checkIfBalanced = function () {
        // implement me...
        var heights = [];
        var recursive = function(node, height) {
            if(!node.left && !node.right) heights.push(height);
            !!node.left && recursive(node.left, height+1);
            !!node.right && recursive(node.right, height+1);
        }

        recursive(this, 1);
        var max = Math.max.apply(null, heights);
        var min = Math.min.apply(null, heights);
        return max-min <= 1;
    };
    // Time complexity:

    logs.push('should be true = ', bsTree.checkIfBalanced());
    logs.push('should be false = ', fullBSTree.checkIfBalanced());

    
    /*--------------------------------------------------------- XXXXXXXXX ---------------------------------------------------------*/
    var tree1 = new BinarySearchTree('a');
    tree1.left = new BinarySearchTree('b');
    tree1.right = new BinarySearchTree('c');

    var tree2 = new BinarySearchTree('a');
    tree2.left = new BinarySearchTree('c');
    tree2.right = new BinarySearchTree('b');

    var tree3 = new BinarySearchTree('a');
    tree3.left = new BinarySearchTree('c');
    tree3.right = new BinarySearchTree('b');

    var tree4 = new BinarySearchTree('c');
    tree4.left = new BinarySearchTree('f');
    tree4.right = new BinarySearchTree('g');

    //Given two binary trees. Check whether they are mirror reflections of each other or not.
    function isMirror(tree1, tree2) {
        if(!tree1 && !tree2) {
            return true;
        }
        if(!tree1 || !tree2 ) {
            return false;
        }

        if(tree1.value === tree2.value) {
            if(isMirror(tree1.left, tree2.right) && isMirror(tree1.right, tree2.left)) {
                return true;
            }
        }
        return false;
    }

    logs.push("Tree => ", isMirror(tree1, tree2));

    tree1.left.left = new BinarySearchTree('d');
    tree1.left.right = new BinarySearchTree('e');

    tree1.right.left = new BinarySearchTree('f');
    tree1.right.right = new BinarySearchTree('g');

    logs.push("Tree => ", isMirror(tree1, tree2));

    /*--------------------------------------------------------- XXXXXXXXX ---------------------------------------------------------*/

    //Given a binary tree. Print nodes at distance 'k' from root (k th level)
    function trace(node, k) {
        if(!node) {
            return;
        }
        if(k === 0) {
            logs.push(node.value);
        } else {
            !!node.left && trace(node.left, k-1);
            !!node.right && trace(node.right, k-1);
        } 
    }

    trace(tree1,2); // d,e,f,g

    /*--------------------------------------------------------- XXXXXXXXX ---------------------------------------------------------*/
    //Level Order Traversal of a Binary Tree (level by level and as a whole).
    //Explanation in detail for both representations of level order traversal.

    //Level Order Traversal
    function printTree(tree) {
        var queue = [tree];
        queue.push(null);
        var row = new Array();
        var str = '\n';
        while(queue.length > 0) {
            var node = queue.shift();
            if(node === null) {
                str += `\n`;
                queue.push(null);
                if(queue[0] === null) { // if first node is null
                    break;
                }
            } else {
                str += ` ${node.value}`;
                !!node.left && queue.push(node.left);
                !!node.right && queue.push(node.right);
            }
        }
        return str;
    };

    logs.push("tree1 = ",printTree(tree1));
    logs.push("tree2 = ",printTree(tree2));
    logs.push("tree3 = ",printTree(tree3));
    logs.push("tree4 = ",printTree(tree4));

    /*--------------------------------------------------------- XXXXXXXXX ---------------------------------------------------------*/
    //Given a binary tree. Print all the ancestors of a given node in the Binary Tree.
    function printAllAncesstor(tree, value) {
        if(!tree) {
            return false;
        }
        if(tree.value === value) {
            return true;
        }
        if(printAllAncesstor(tree.left, value) || printAllAncesstor(tree.right, value)) {
            logs.push(tree.value);
            return true;
        }

        return false;
    }

    printAllAncesstor(tree1,'d'); //b,a
    printAllAncesstor(tree1,'g'); //c,a

    /*--------------------------------------------------------- XXXXXXXXX ---------------------------------------------------------*/
    //Given two binary trees, write a program to check whether they are identical.
    //Approach 1 :- Recursive 
    //Approach 2 :- Comapre InOrder, PreOrder and PostOrder 

    function isIdentical(tree1, tree2) {
        if (!tree1 && !tree2) {
            return true;
        }
        if(!tree1 || !tree2) {
            return false;
        }
        if(tree1.value === tree2.value) {
            if(isIdentical(tree1.left, tree2.left) && isIdentical(tree1.right, tree2.right)) {
                return true;
            }
        }
        return false;
    }

    logs.push("tree1 == tree2 => false = ", isIdentical(tree1, tree2));
    logs.push("tree2 == tree3 => true = ", isIdentical(tree2, tree3));

    function isIdentical2(tree1, tree2) {
        let tree1PreOrder = [], tree1InOrder = [], tree1PostOrder = [];
        let tree2PreOrder = [], tree2InOrder = [], tree2PostOrder = [];

        tree1.traverseDepthFirst_postOrder(function(node) {
            tree1PreOrder.push(node.value);
        });

        tree1.traverseDepthFirst_inOrder(function(node) {
            tree1InOrder.push(node.value);
        });

        tree1.traverseDepthFirst_postOrder(function(node) {
            tree1PostOrder.push(node.value);
        });

        tree2.traverseDepthFirst_postOrder(function(node) {
            tree2PreOrder.push(node.value);
        });

        tree2.traverseDepthFirst_inOrder(function(node) {
            tree2InOrder.push(node.value);
        });

        tree2.traverseDepthFirst_postOrder(function(node) {
            tree2PostOrder.push(node.value);
        });

        //Object.prototype.toString.call(tree1PreOrder);
        return tree1PreOrder.toString() == tree2PreOrder.toString() &&
        tree1InOrder.toString() == tree2InOrder.toString() &&
        tree1PostOrder.toString() == tree2PostOrder.toString();
    }

    logs.push("tree1 == tree2 => false = ", isIdentical2(tree1, tree2));
    logs.push("tree2 == tree3 => true = ", isIdentical2(tree2, tree3));

    /*--------------------------------------------------------- XXXXXXXXX ---------------------------------------------------------*/
    //Given two binary. Check whether one tree is a subtree of another tree.

    function isSubTree(tree1, tree2) {
        if(!tree1 && !tree2) {
            return true;
        }
        if(!tree1 || !tree2) {
            return false;
        }

        if(tree1.value === tree2.value) {
            return isIdentical(tree1, tree2);
        }
        
        return (!!tree1.left && isSubTree(tree1.left, tree2))  || (!!tree1.right && isSubTree(tree1.right, tree2))
     }

     logs.push("Tree2 is subTree of Tree1 =>  false = ", isSubTree(tree1, tree2));
     logs.push("Tree3 is subTree of Tree1 =>  false = ", isSubTree(tree1, tree3));
     logs.push("Tree2 is subTree of Tree3 =>  true = ", isSubTree(tree2, tree3));
     logs.push("Tree4 is subTree of Tree1 =>  true = ", isSubTree(tree1, tree4));

    /*--------------------------------------------------------- XXXXXXXXX ---------------------------------------------------------*/
     //Calculate sum of all nodes in given Binary Tree.

     function sumOfAllNodes(tree) {
         var sum = 0;
         tree.traverseBreadthFirst(function(node){
            sum += node.value;
         })
         return sum;
     }

     logs.push("bsTree1 = ", printTree(bsTree1));
     logs.push("bsTree2 = ", printTree(bsTree2));
     logs.push("Sum => ", sumOfAllNodes(bsTree2));

    /*--------------------------------------------------------- XXXXXXXXX ---------------------------------------------------------*/
    // Given a binary tree , check if it is a sumTree or not.

    function isSumTree(tree) {
        if(!tree) {
            return true;
        }

        if(!tree.left && !tree.right) {
            return true;
        }
        var leftSideSum = sumOfAllNodes(tree.left);
        var rightSideSum = sumOfAllNodes(tree.right);
        if(tree.value !== (leftSideSum + rightSideSum)) return false;
        return isSumTree(tree.left) && isSumTree(tree.right);
    }

    var sumTree = new BinarySearchTree(56);
    sumTree.left = new BinarySearchTree(13);
    sumTree.right = new BinarySearchTree(15);

    sumTree.left.left = new BinarySearchTree(5);
    sumTree.left.right = new BinarySearchTree(3);

    sumTree.left.left.left = new BinarySearchTree(3);
    sumTree.left.left.right = new BinarySearchTree(2);

    sumTree.right.left = new BinarySearchTree(9);
    sumTree.right.right = new BinarySearchTree(3);
    sumTree.right.right.left = new BinarySearchTree(2);
    sumTree.right.right.right = new BinarySearchTree(1);

    logs.push("sumTree = ",printTree(sumTree));

    logs.push("isSumTree => true = ", isSumTree(sumTree));
    logs.push("bsTree2 => false = ", isSumTree(bsTree2));

    /*--------------------------------------------------------- XXXXXXXXX ---------------------------------------------------------*/
    //Given a binary tree. Print the number of leaf nodes in the tree.
    //Approach-1:- Using InOrder Traversal
    //Approach-2:- Using recursive 

    function printLeafNodes(tree) {
        var sum = 0;
        tree.traverseDepthFirst_inOrder(function(node){
            if(!node.left && !node.right) {
                sum++;
            }
        });
        return sum; 
    }
    logs.push("Number of leaf node in sumTree => 6 = ", printLeafNodes(sumTree));
    logs.push("Number of leaf node in bsTree1 => 6 = ", printLeafNodes(bsTree1));
    logs.push("Number of leaf node in bsTree2 => 4 = ", printLeafNodes(bsTree2));

    
    function printLeafNodes2(tree) {
        var leafCount = 0;
        var recursive = function(tree) {
            if(!tree) {
                return;
            }
            if(!tree.left && !tree.right) leafCount++;
            !!tree.left && recursive(tree.left);
            !!tree.right && recursive(tree.right);
        }
        recursive(tree);  
        return leafCount;
    }
    logs.push("Number of leaf node in sumTree => 6 = ", printLeafNodes2(sumTree));
    logs.push("Number of leaf node in bsTree1 => 6 = ", printLeafNodes2(bsTree1));
    logs.push("Number of leaf node in bsTree2 => 4 = ", printLeafNodes2(bsTree2));

    /*--------------------------------------------------------- XXXXXXXXX ---------------------------------------------------------*/
    //Print all ROOT to LEAF paths in a binary tree

    function allRootToLeafPath(tree) {
        var stack = [];
        var str = '\n';
        var inOrder = function(myTree) {
            if(!myTree) {
                return null;
            }
            stack.push(myTree);

            inOrder(myTree.left);

            if(!myTree.left && !myTree.right) {
                stack.forEach(node => str += ` ${node.value}`);
                str += `\n`;
            }

            inOrder(myTree.right);
            stack.pop();
        }
        inOrder(tree);
        return str;
    }

    logs.push(allRootToLeafPath(sumTree));

    /*--------------------------------------------------------- XXXXXXXXX ---------------------------------------------------------*/
    //Level Order Traversal of a Binary Tree (level by level and as a whole).
    //Explanation in detail for both representations of level order traversal.

    //Level Order Traversal
    function levelOrderTraverse(tree) {
        var queue = [tree];
        queue.push(null);
        var row = new Array();
        var hashTable = {};
        var row = 0;
        while(queue.length > 0) {
            var node = queue.shift();
            if(node === null) {
                row++
                queue.push(null);
                if(queue[0] === null) { // if first node is null
                    break;
                }
            } else {
                hashTable[row] = hashTable[row] || [];
                hashTable[row].push(node.value);
                !!node.left && queue.push(node.left);
                !!node.right && queue.push(node.right);
            }
        }
        return hashTable;
    };

    function printLevelOrderTraverse(tree) {
        var getHashTable = levelOrderTraverse(tree);
        var str = `\n`;
        //getHashTable.forEach((row) => str += `${row.join('')}\n`);
        for(var key in getHashTable) {
            if(getHashTable.hasOwnProperty(key)) {
                var row = getHashTable[key];
                str += `${row.join(' ')}\n`;
            }
        }
        return str;
    }
 
    logs.push("LevelOrder: tree1 = ",printLevelOrderTraverse(tree1));
    logs.push("LevelOrder: tree1 = ",printTree(tree1));

    /*--------------------------------------------------------- XXXXXXXXX ---------------------------------------------------------*/
    //Traverse through the diagonal elements in a binary tree.

    //Create Queue and push root and null
    //traverse towards right node
        //print node 
        //push left node into Queue
        //push null where there is no right node.
    
    function printDiagonalElements(tree) {
        var queue = [tree];
        queue.push(null);
        var str =  `\n`;
        while (queue.length > 0) {
            var node = queue.shift();
            if(node === null) {
                str += `\n`;
                queue.push(null);
                if(queue[0] == null) {
                    break;
                }
            } else { // node is not  null
                while(node) {
                    str += ` ${node.value}`;
                    !!node.left && queue.push(node.left);
                    node = node.right;
                }
            }
        }
        return str;
    }
    logs.push(printDiagonalElements(sumTree));

    /*--------------------------------------------------------- XXXXXXXXX ---------------------------------------------------------*/
    //write an algorithm to make vertical order traversal of a binary

    function verticalOrderTraversal(tree) {
        tree.hd = 0; // assign horizontal distance as 0 to root
        var queue = [tree];
        var hashTable = {};
        queue.push(null);
        while(queue.length > 0) {
            var current = queue.shift();
            if(current === null) {
                queue.push(null);
                if(queue[0] == null) {
                    break;
                }
            }
            if(current !== null) {
                if(hashTable[current.hd]) {
                    hashTable[current.hd].push(current);
                } else {
                    hashTable[current.hd] = [current];
                }
                if (current.left) {
                    current.left.hd = current.hd-1;
                    queue.push(current.left);
                }
                if (current.right) {
                    current.right.hd = current.hd+1;
                    queue.push(current.right);
                }
            }
        }
        return hashTable;
    }

    function doVerticalTraversal(tree, fn) {
        var hashTable = verticalOrderTraversal(tree);
        for(var key in hashTable) {
            var row = hashTable[key];
            row.forEach(node => fn(node));
        }
    }

    var verticalOrder = [];
    doVerticalTraversal(sumTree, function(node){
        verticalOrder.push(node.value);
    });

    logs.push("verticalOrder = [56, 3, 9, 15, 2, 3, 1, 13, 2, 5, 3] = ", verticalOrder);

    /*--------------------------------------------------------- XXXXXXXXX ---------------------------------------------------------*/
    //Print the top and Bottom view of a Binary Tree. We use level order traversal and vertical order traversal for this.
    
    function printTopView(tree) {
        var hashTable = verticalOrderTraversal(tree);
        var keys = Object.keys(hashTable);
        keys.sort(function(a,b){
            return a - b;
        });
        var topView = [];
        for(var key in keys) {
            if(keys.hasOwnProperty(key)) {
                var row = hashTable[keys[key]];
                topView.push(row[0].value);
            }
        }
        return topView;
    }
    logs.push("Top View  = [3, 5, 13, 56, 15, 3, 1] = ", printTopView(sumTree));

    function bottomView(tree) {
        var hashTable = verticalOrderTraversal(tree);
        var keys = Object.keys(hashTable);
        keys.sort(function(a,b) {
            return a-b;
        });
        var bottomView = [];
        for (var key in keys) {
            if(keys.hasOwnProperty(key)) {
                var row = hashTable[keys[key]];
                bottomView.push(row[row.length-1].value);
            }
        }
        return bottomView;
    }

    logs.push("Bottom View  = [3, 5, 2, 9, 2, 3, 1] = ", bottomView(sumTree));

    /*--------------------------------------------------------- XXXXXXXXX ---------------------------------------------------------*/
    //Side view of binary tree. Left side view and right side view.
    
    function leftSideView(tree) {
        var levelOrder = levelOrderTraverse(tree);
        var leftView = [];
        for(var key in levelOrder) {
            if(levelOrder.hasOwnProperty(key)) {
                var row = levelOrder[key];
                leftView.push(row[0]);
            }
        }
        return leftView;
    }
    logs.push("Left View  = [56, 13, 5, 3] = ", leftSideView(sumTree));

    function rightSideView(tree) {
        var levelOrder = levelOrderTraverse(tree);
        var rightView = [];
        for(var key in levelOrder) {
            if(levelOrder.hasOwnProperty(key)) {
                var row = levelOrder[key];
                rightView.push(row[row.length-1]);
            }
        }
        return rightView;
    }
    logs.push("Right View  = [56, 15, 3, 1] = ", rightSideView(sumTree));

    /*--------------------------------------------------------- XXXXXXXXX ---------------------------------------------------------*/
    //Print the sum of every diagonal in binary tree.

    //Create queue and push tree and null
    //Move towards right node till end
        //push left node into the queue

    function digonalSum(tree){
        var queue = [tree];
        queue.push(null);
        var row = [];
        var sum = [];
        while(queue.length > 0) {
            var current = queue.shift();
            if (current === null) {
                var getStack = row;
                sum.push(getStack.reduce((previous, node) => previous + node.value, 0));
                row = [];
                queue.push(null);
                if(queue[0] === null) {
                    break;
                }
            } else {
                while(current) {
                    row.push(current);
                    !!current.left && queue.push(current.left);
                    current = current.right;
                }
            }  
        }
        return sum;
    }

    logs.push("Diagonal Sum = [75, 27, 7, 3] = ", digonalSum(sumTree));

    /*--------------------------------------------------------- XXXXXXXXX ---------------------------------------------------------*/
    // Find All common ancestor of two nodes in a binary tree.
    

    function allCommonAncestor(tree, value1, value2) {
        var stack = [];
        var checkAvailableInSubTree = function(tree, value) {
            if(!tree) return false;
            if (tree.value === value) {
                return true;
            }
            return checkAvailableInSubTree(tree.left, value) || checkAvailableInSubTree(tree.right, value);
        }

        function recursive(tree, value1, value2) {
            if(!tree) return false;
    
            recursive(tree.left, value1, value2);
            recursive(tree.right, value1, value2);
            
            if(checkAvailableInSubTree(tree, value1) && checkAvailableInSubTree(tree, value2)) {
                stack.push(tree.value);
            }
        }
        recursive(tree, value1, value2)
        return stack;
    }


    logs.push("AllCommonAncestors(3,8) =>  5,10 = ", allCommonAncestor(bsTree1, 3,8)); 
    logs.push("AllCommonAncestors(7,21) => 10 = ", allCommonAncestor(bsTree1, 7,21)); 
    logs.push("AllCommonAncestors(7,9) => 8,5,10 = ", allCommonAncestor(bsTree1, 7,9));

    /*--------------------------------------------------------- XXXXXXXXX ---------------------------------------------------------*/
    // Find lowest common ancestor of two nodes in a binary tree. - postOrderTraversal
    function lowestCommonAncestor(tree, value1, value2) {
        if(!tree) return false;
        if(tree.value === value1 || tree.value === value2) {
            return tree;
        }
        var left = lowestCommonAncestor(tree.left, value1, value2);
        var right = lowestCommonAncestor(tree.right, value1, value2);
        if(left && right) {
            return tree;
        }
        return left ? left : right;
    }

    logs.push("LCA 5 = ", lowestCommonAncestor(bsTree1, 3,8).value); //5
    logs.push("LCA 10 = ", lowestCommonAncestor(bsTree1, 7,21).value); //10

    /*--------------------------------------------------------- XXXXXXXXX ---------------------------------------------------------*/
    //Nodes having 'K' leaves in its SubTree Algorithm - postOrderTraversal
    
    function nodeHavingKLeaves(tree, k, count) {
        if(!tree) return 0;
        if(!tree.left && !tree.right) {
            return !!count ? ++count : 1;
        }
        var left = nodeHavingKLeaves(tree.left, k, count) || 0;
        var right = nodeHavingKLeaves(tree.right, k, count) || 0;
        if(left + right === k) {
            logs.push("nodeHavingKLeaves = ", tree.value);
        }
        return left+right;
    }
    nodeHavingKLeaves(bsTree1, 2); //8,20
    nodeHavingKLeaves(bsTree1, 3); //5,15

    /*--------------------------------------------------------- XXXXXXXXX ---------------------------------------------------------*/
    //Print Root to Leaf Path with Given sum(Print all K-Sum paths) in a given Binary Tree
    //Print all K-sum paths in the given Binary tree.

    function printRootToLeafPathWithSum(root, sum) {
        //implement me 
        var mySum = 0;
        var stack = [];
        
        var inOrder = function(node) {
            if(!node) return;
            mySum = mySum + node.value;
            stack.push(node.value);
            if(mySum === sum) {
                logs.push(`Nodes for sum = ${sum}`, stack);
            }

            !!node.left && inOrder(node.left);
            !!node.right && inOrder(node.right);
            var last = stack.pop();
            mySum  = mySum - last;
        }
        inOrder(root);
    }
    printRootToLeafPathWithSum(bsTree1, 18); //10, 5, 3
    printRootToLeafPathWithSum(bsTree1, 39); //10, 15, 14
    printRootToLeafPathWithSum(bsTree1, 32); //10, 5, 8, 9


    function freeNode(node) {
        delete node.value;
        delete node.left;
        delete node.right;
    }

    function deleteBinaryTreeAllNodes(node) {

        if(!node) return;
        
        !!node.left && deleteBinaryTreeAllNodes(node.left);
        !!node.right && deleteBinaryTreeAllNodes(node.right);
        freeNode(node);
    }

    let bsTreeForDelete = new BinarySearchTree(10);
    bsTreeForDelete.insert(5).insert(15).insert(8).insert(3).insert(7).insert(20).insert(17).insert(9).insert(14);
    logs.push("bsTreeForDelete: = ",printTree(bsTreeForDelete));
    /* Output :- 
            10
        5       15
      3   8   14   20
         7 9     17
    */
    deleteBinaryTreeAllNodes(bsTreeForDelete);
    logs.push("After delete bsTreeForDelete: = ",printTree(bsTreeForDelete));


    function heightOfABinaryTree() {

    }

    function isTwoBinaryIsomorphic() {

    }

    function diameterOfBinaryTree() {

    }

    function AVLTree() {

    }

    function binaryTreeToDoublyLinkedList() {
        //Inorder traversal based / Depth first serach
    }

    function bstToDoublyLinkedList() {
        //Breadth first search
    } 

    function binaryTreeToDoublyLinkedList() {
        //Breadth first search
    } 

    function threadedBinaryTree() {

    }

    function noOfPossibleBinarySearchTreeWith_N_Nodes() {

    }

    function inorderSuccessorInBST() {

    }

    function inorderPredecessorInBST() {

    }

    logs.print();
})();