var binaryTree = function(){

};

function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

function binarySearchTree(){
    this.root = null;
}

binarySearchTree.prototype.push = function(value){
    var root = this.root;

    if(!root){
        this.root = new Node(value);
        return;
    }

    var currentNode = root;
    var newNode = new Node(value);

    while(currentNode){
        if(currentNode.value > newNode.value){ //left branch
            if(!currentNode.left){ //If left node doesn't exist then add new node to left
                currentNode.left = newNode;
                break;
            }else{
                currentNode = currentNode.left; //assign left node as root node for next iteration
            }
        }else{ //right branch
            if(!currentNode.right){ //if right node doesn't exist then add new node to right
                currentNode.right = newNode;
                break;
            }else{
                currentNode = currentNode.right;
            }
        }
    }
};

(function(){

    var treeInstance = new binarySearchTree();
    treeInstance.push(40);
    treeInstance.push(25);
    treeInstance.push(10);
    treeInstance.push(32);
    treeInstance.push(78);
    treeInstance.push(65);
    treeInstance.push(80);
 

    console.log(treeInstance); // Print binary tree

    //preorder
    function preorder(node){
        if(node){
            console.log(node.value);
            preorder(node.left);
            preorder(node.right);
        }
    }

    //preorder(treeInstance.root); // Print tree  40, 25, 10, 32, 78, 65, 80


    //inorder
    function inorder(node){
        if(node){         
            inorder(node.left);
            console.log(node.value);
            inorder(node.right);
        }
    }

    //inorder(treeInstance.root); // Print tree   10, 25, 32, 40, 65, 78, 80

    //postorder
    function postorder(node){
        if(node){         
            postorder(node.left);
            postorder(node.right);
            console.log(node.value);
        }
    }

    postorder(treeInstance.root); // Print tree   10, 32, 25, 65, 80, 78, 40


    function minValue(node){
        if(!node){
            return 0;
        }
        if(node.left){
            return minValue(node.left);
        }

        return node.value;
    }

    console.log("min value = "+ minValue(treeInstance.root));

    function maxValue(node){
        if(!node){
            return 0;
        }
        if(node.right){
            return maxValue(node.right);
        }
        return node.value;
    }

    console.log("max value = "+ maxValue(treeInstance.root));

    function isBinarySearchTree(node){
        if(!node){
            return true;
        }

        if(node.left != null && minValue(node) > node.value){
            return false;
        }

        if(node.right != null && maxValue(node) < node.value){
            return false;
        }

        if(!isBinarySearchTree(node.left) || !isBinarySearchTree(node.right)){
            return false;
        }
        return true;
    }

    console.log("Is tree instance of Binary serach tree = " + isBinarySearchTree(treeInstance.root) );


    function heightOfTree(node){
        if(!node) return 0;
        var leftNodeHeight =  heightOfTree(node.left);
        var rightNodeHeight = heightOfTree(node.right);
        return Math.max(leftNodeHeight,rightNodeHeight) + 1;
    }

    console.log("height of tree = "+ heightOfTree(treeInstance.root));


    function printValueBetweenNodes(node, v1, v2){
        if(!node) return true;
        if(node.value > v1 && node.value < v2) {
            console.log(node.value);
        }
        else {
            return false;
        }

        if(node.left != null){
            printValueBetweenNodes(node.left, v1, v2);
        }
        if(node.right != null){
            printValueBetweenNodes(node.right, v1, v2);
        };       
    }

    console.log("Value between 10 and 80 = "+ printValueBetweenNodes(treeInstance.root,10,80));

    function isBinaryTreeBalanced(node){
            if(!node) return true;
            if(!isBinaryTreeBalanced(node.left) || !isBinaryTreeBalanced(node.right)) return false;
            return Math.abs(heightOfTree(node.left) - heightOfTree(node.right)) <= 1 ;
    }

    console.log("Is binary tree balanced = "+ isBinaryTreeBalanced(treeInstance.root));

    function towerOfHanoi(n, a, b,c){
        if(n > 0){
            towerOfHanoi(n-1, a, c, b );
            console.log(a+" to "+c);
            towerOfHanoi(n-1, b, a, c);
        }
    }
    towerOfHanoi(3, "A", "B", "C");

})();
