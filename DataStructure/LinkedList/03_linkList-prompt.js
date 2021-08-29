/*

LINKED LIST

Comprised of nodes that represent a sequence.
Each node is composed of data and a reference/link to the next node.


*** Operations:

** Part 1

myList.forEach(callbackFn)
invoke callback function with the value of each node

myList.print()
=> string with all values in list (ex: '0, 1, 2, 3')

myList.insertAfter(refNode, value)
=> new node
insert new node associated with value passed in after refNode

myList.removeAfter(refNode)
=> removed node
remove node after the refNode

myList.insertHead(value)
=> new head
insert new head node at the beginning of the list with the value passed in

myList.removeHead()
=> removed head node
remove the head node of the linked list

myList.findNode(value)
=> first node that has a value matching what was passed in


* Optimization:
Say we have a linked list that has 100 items and we want to add an item to the very end. How would you do that with your current implementation? How can you modify the data structure to add an item to the end in constant time?

myList.appendToTail(value)
=> new tail node
add a new tail node at the end of the list with the associated value passed in

myList.removeTail()
=> removed tail node
remove the tail node from the list


** Part 2

Now let's think about creating insertBefore and removeBefore methods for the nodes in our list. Can you think of an efficient way to do so?

Think about time complexity. What would it be for your current implementation of a linked list?

How can we modify our data structures (Node and Linked List classes) so that we can make these O(1) operations?

Once you've come up with a plan, implement the following methods.

myList.insertBefore(refNode, value)
=> new node inserted
insert new node with associated value before refNode

myList.removeBefore(refNode)
=> removed node
remove node before the refNode passed in


*** Additional Exercises:

Implement a circularly linked list:
https://en.wikipedia.org/wiki/Linked_list#Circularly_linked_list

Reimplement stack and queue data structures using linked lists.


 */

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
    
  }
  /*
  * Removes the value at the start of the linked list
  * @return {*} - the removed value
  */
  removeHead() { // O(1)
    
  }

  /*
  * Removes the value at the end of the linked list
  * @return {*} - the removed value
  */
  removeTail() { // O(1)
    
  }
  /*
  * Searches the linked list and returns true if it contains the value passed
  * @param {*} value - the value to search for
  * @return {boolean} - true if value is found, otherwise false
  */
  contains(value) { // O(n)
      
  }  
  /*
  * Checks if a node is the head of the linked list 
  * @param {{prev:Object|null, next:Object|null}} node - the node to check
  * @return {boolean} - true if node is the head, otherwise false
  */
  isHead(node) { // O(1)

  }
  /*
  * Checks if a node is the tail of the linked list 
  * @param {{prev:Object|null, next:Object|null}} node - the node to check
  * @return {boolean} - true if node is the tail, otherwise false
  */
  isTail(node) { // O(1)

  }

  // https://www.youtube.com/watch?v=sYcOK51hl-A&list=PL2_aWCzGMAwLPEZrZIcNEq9ukGWPfLT4A&index=6
  reverseIterative() {
    
  }   

  // https://www.youtube.com/watch?v=KYH83T4q6Vs&list=PL2_aWCzGMAwLPEZrZIcNEq9ukGWPfLT4A&index=8
  reverseRecursive(node) {
   
  }

  // https://www.youtube.com/watch?v=K7J3nCeRC80&list=PL2_aWCzGMAwLPEZrZIcNEq9ukGWPfLT4A&index=7 
  printRecursive (node) {
    
  }

  // https://www.youtube.com/watch?v=K7J3nCeRC80&list=PL2_aWCzGMAwLPEZrZIcNEq9ukGWPfLT4A&index=7
  printReverseRecursive (node) {

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



