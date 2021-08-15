/** Class representing a Tree. */

class Tree {

  constructor(value) {
    this.value = value;
    this.children = [];

  }
  /*
  * Adds a new value as a child of the tree
  * @param {*} value the value to add
  */
  insertChild(value) { // O(1)
    const newTree = new Tree(value);
    this.children.push(newTree);
    return newTree;
  }

  /*
  * Removes a value from the tree
  * @param {*} value the value to remove
  */
  removeChild(value) {
    // ?

  }

  traverse() {
    console.log(this.value);
    this.children.forEach(child => child.traverse());
  }
}

const myTree1 = new Tree(1);
console.log("myTree = ", myTree1);

const myTree2 = myTree1.insertChild(2);
console.log("myTree = ", myTree1);

const myTree3 = myTree2.insertChild(3);
console.log("myTree = ", myTree1);

myTree1.traverse(myTree1);




// Example 2 - Family Trees 
const mother = { name: "Ashleigh" };
const son = { name: "Sammy" };
const daughter = { name: "Alex" };

const mother1 = {
  name: "Ashleigh",
  children: [son, daughter]
}

const familyTree = new Tree("Ashleigh");
const sammy = familyTree.insertChild("Sammy");
const alex = familyTree.insertChild("Alex");
const bowser = sammy.insertChild("bowser");
const puppy = bowser.insertChild("puppy");

familyTree.traverse();