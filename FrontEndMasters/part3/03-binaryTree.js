/** Class representing a Binary Tree. */

class BinaryTree {

  constructor(question) {
    this.question = question;
    this.yes = null;
    this.no = null;
  }

  insertChild(question, side) {
    const newQuestion = new BinaryTree(question);
    this[side] = newQuestion;
    return newQuestion;
  }

  removeChild(value) {
    // ??
  }

  /*
  * Explores all the nodes in the tree
  */
  traverse(func) {
    func(this.question);
    // this.children.forEach(child => child.traverse());
    if(this.yes) this.yes.traverse(func);
    if(this.no) this.no.traverse(func);
  }

  /*
  * Returns true if value is found
  */
  contains(question) {
    if (question == this.question) return true;
    // return !!(this.yes && this.yes.contains(question)) || !!(this.no && this.no.contains(question));
    return this.yes && this.yes.contains(question) ? true : false || this.no && this.no.contains(question) ? true : false;
  }


  // if node is null, return 0.
  // elseIf yes and no child nodes are null, return 1
  // else recursively calculate 
      // Leaf count of left subtree + 
      // Leaf count of right subtree
  countReccos() {
    if(!this) return 0;
    if (!this.yes && !this.no ) return 1;
    return this.yes.countReccos() + this.no.countReccos();
  }

  // left, root, right
  inOrderTraversal(func = console.log) {
    if(this.yes) {
      this.yes.inOrderTraversal(func);
    }
    func(this.question);
    if (this.no) {
      this.no.inOrderTraversal(func);
    }
  }

  // root, left, right
  preOrderTraversal(func = console.log) {
    func(this.question);
    if(this.yes) {
      this.yes.preOrderTraversal(func);
    }
    if (this.no) {
      this.no.preOrderTraversal(func);
    }
  }

  // left, right, root
  postOrderTraversal(func = console.log) {
    if(this.yes) {
      this.yes.postOrderTraversal(func);
    }
    if (this.no) {
      this.no.postOrderTraversal(func);
    }
    func(this.question);
  }
}

const myChatBotTree = new BinaryTree("Do you feel like cooking?");
const yesChild1 = myChatBotTree.insertChild("Do you like milk?", "yes");
const noChild1 = myChatBotTree.insertChild("Do you like toast?", "no");
console.log("myChatBotTree = ", myChatBotTree);

myChatBotTree.traverse(console.log);

console.log(myChatBotTree.contains("Do you like toast?"));

console.log("countReccos = ", myChatBotTree.countReccos());

console.log("\n");
console.log("inOrderTraversal");
myChatBotTree.inOrderTraversal(console.log);
console.log("\n");

console.log("preOrderTraversal");
myChatBotTree.preOrderTraversal(console.log);
console.log("\n");

console.log("postOrderTraversal");
myChatBotTree.postOrderTraversal(console.log);


const numberTree1 = new BinaryTree("1");
const numberTree2 = numberTree1.insertChild("2", "yes");
const numberTree3 = numberTree1.insertChild("3", "no");

const numberTree4 = numberTree2.insertChild("4", "yes");
const numberTree5 = numberTree2.insertChild("5", "no");

const numberTree6 = numberTree3.insertChild("6", "yes");
const numberTree7 = numberTree3.insertChild("7", "no");

console.log("numberTree1 = ", numberTree1);
console.log("\n");
console.log("inOrderTraversal");
numberTree1.inOrderTraversal(console.log);
console.log("\n");

console.log("preOrderTraversal");
numberTree1.preOrderTraversal(console.log);
console.log("\n");

console.log("postOrderTraversal");
numberTree1.postOrderTraversal(console.log);