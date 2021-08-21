/** Class representing a Linked List */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
  }
  /*
  * Inserts a new value to the start of the linked list
  * @param {*} value - the value to insert
  */
  insert(value) { // O(1)
    const node = new Node(value);
    if (this.head) {
      // assign current head to next pointer of new node
      node.next = this.head;
    } else {
      // If head is null, i.e LinkedList is empty, assign first node to tail
     this.tail = node;
    }
   this.head = node;
  }
  /*
  * Deletes a node
  * @param {*} node - the node to remove
  * @return {*} value - the deleted node's value
  */


  // O(1) ->  you have node reference.
  // O(n) -> If you have to find node reference first and delete it

  /**
   
  Steps:- 
  1. Check if head is not null, otherwise LinkedList is empty, nothing to remove
  2. Check if given node is headNode 
  3. Loop through till we find the node, keep currentNode and preNode reference

   */

  remove(value) { 
    if (this.head) {
      if (this.head.value === value) {
        return this.removeHead();
      }

      
      let currentNode =this.head;
      let nextNode =this.head.next;
      let found = false;
      while(currentNode !== null) {
        if(nextNode.value === value) {
          let nextNextNode = nextNode.next;
          currentNode.next = nextNextNode;
          nextNode = nextNextNode;
          found = true;
          break;
        }
        currentNode = currentNode.next;
      }
      return found ? value : undefined;
    }
  }
  /*
  * Removes the value at the start of the linked list
  * @return {*} - the removed value
  */
  removeHead() { // O(1)
    if(this.head) {
      const { value } =this.head;
      const nextNode =this.head.next;
     this.head = nextNode;
      return value;
    }
  }

  /*
  * Removes the value at the end of the linked list
  * @return {*} - the removed value
  */
  removeTail() { // O(1)
    let currentNode =this.head;
    while(currentNode.next !==this.tail) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
   this.tail = currentNode;
  }
  /*
  * Searches the linked list and returns true if it contains the value passed
  * @param {*} value - the value to search for
  * @return {boolean} - true if value is found, otherwise false
  */
  contains(value) { // O(n)
      let currentNode =this.head;
      while(currentNode !== null) {
        if(currentNode.value === value) {
          return true;
        }
        currentNode = currentNode.next;
      }
      return false;
  }  
  /*
  * Checks if a node is the head of the linked list 
  * @param {{prev:Object|null, next:Object|null}} node - the node to check
  * @return {boolean} - true if node is the head, otherwise false
  */
  isHead(node) { // O(1)
    return this.head === node;
  }
  /*
  * Checks if a node is the tail of the linked list 
  * @param {{prev:Object|null, next:Object|null}} node - the node to check
  * @return {boolean} - true if node is the tail, otherwise false
  */
  isTail(node) { // O(1)
    return this.tail === node;
  }

  // https://www.youtube.com/watch?v=sYcOK51hl-A&list=PL2_aWCzGMAwLPEZrZIcNEq9ukGWPfLT4A&index=6
  reverseIterative() {
    let prev = null;
    let current = this.head;
    let firstElement = this.head;

    while(current !== null) {
      let next = current.next || null;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
    this.tail = firstElement;
    return this;
  }   

  // https://www.youtube.com/watch?v=KYH83T4q6Vs&list=PL2_aWCzGMAwLPEZrZIcNEq9ukGWPfLT4A&index=8
  reverseRecursive(node) {
    if(node.next === null) {
      this.head = node;
      return;
    };
    this.reverseRecursive(node.next);
    let nextNode = node.next;
    nextNode.next = node;
    node.next = null;
    this.tail = node;
  }

  // https://www.youtube.com/watch?v=K7J3nCeRC80&list=PL2_aWCzGMAwLPEZrZIcNEq9ukGWPfLT4A&index=7 
  printRecursive (node) {
    if(node === null) return;
    console.log(node.value);
    this.printRecursive(node.next);
  }

  // https://www.youtube.com/watch?v=K7J3nCeRC80&list=PL2_aWCzGMAwLPEZrZIcNEq9ukGWPfLT4A&index=7
  printReverseRecursive (node) {
    if(node === null) return;
    this.printReverseRecursive(node.next);
    console.log(node.value);
  }
}

const myLinedList = new LinkedList();
console.log("1. myLinedList = ", myLinedList);
console.log("2. myLinedList.insert(10) = ",  myLinedList.insert(10));
console.log("3. myLinedList.insert(20) = ",  myLinedList.insert(20));
console.log("4. myLinedList.insert(30) = ",  myLinedList.insert(30));
console.log("5. myLinedList.insert(40) = ",  myLinedList.insert(40));
console.log("6. myLinedList.insert(50) = ",  myLinedList.insert(50), "\n");

console.log("7. myLinedList.tail = ",  myLinedList.isTail(myLinedList.tail));
const isTailTestNode1 = new Node(11);
console.log("7.1 myLinedList.isTail(11) = ",  myLinedList.isTail(isTailTestNode1), "\n");



console.log("8. myLinedList.removeHead() = ",  myLinedList.removeHead(), "\n");

console.log("9. myLinedList.head = ",  myLinedList.isHead(myLinedList.head));
const isHeadTestNode1 = new Node(51);
console.log("9.1 myLinedList.isHead(51) = ",  myLinedList.isHead(isHeadTestNode1), "\n");


console.log("10. myLinedList.contains(30) = ",  myLinedList.contains(30));
console.log("10.1 myLinedList.contains(32) = ",  myLinedList.contains(32), "\n");


console.log("11. myLinedList.remove(30) = ",  myLinedList.remove(30));
console.log("11.1 myLinedList.remove(30) = ",  myLinedList.remove(30), "\n");

console.log("12. myLinedList = ", JSON.stringify(myLinedList), "\n");

console.log("13. myLinedList.removeTail() = ",  myLinedList.removeTail());

console.log("14. myLinedList = ", JSON.stringify(myLinedList));

console.log("15. myLinedList = ", JSON.stringify(myLinedList.reverseIterative()));
console.log("\n16. myLinedList = ", JSON.stringify(myLinedList));

console.log("\n17. myLinedList = ", JSON.stringify(myLinedList.reverseRecursive(myLinedList.head)));
console.log("\n18. myLinedList = ", JSON.stringify(myLinedList));

myLinedList.printRecursive(myLinedList.head);
myLinedList.printReverseRecursive(myLinedList.head);
