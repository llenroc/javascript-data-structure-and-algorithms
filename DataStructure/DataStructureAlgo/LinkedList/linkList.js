/** Class representing a Linked List */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {

  constructor() {
    this._storage = {
      head: null,
      tail: null
    };
  }
  /*
  * Inserts a new value to the start of the linked list
  * @param {*} value - the value to insert
  */
  insert(value) { // O(1)
    const node = new Node(value);
    if (this._storage.head) {
      // assign current head to next pointer of new node
      node.next = this._storage.head;
    } else {
      // If head is null, i.e LinkedList is empty, assign first node to tail
      this._storage.tail = node;
    }
    this._storage.head = node;
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
    if (this._storage.head) {
      if (this._storage.head.value === value) {
        return this.removeHead();
      }

      
      let currentNode = this._storage.head;
      let nextNode = this._storage.head.next;
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
    if( this._storage.head) {
      const { value } = this._storage.head;
      const nextNode = this._storage.head.next;
      this._storage.head = nextNode;
      return value;
    }
  }

  /*
  * Removes the value at the end of the linked list
  * @return {*} - the removed value
  */
  removeTail() { // O(1)
    let currentNode = this._storage.head;
    while(currentNode.next !== this._storage.tail) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
    this._storage.tail = currentNode;
  }
  /*
  * Searches the linked list and returns true if it contains the value passed
  * @param {*} value - the value to search for
  * @return {boolean} - true if value is found, otherwise false
  */
  contains(value) { // O(n)
      let currentNode = this._storage.head;
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
    return this._storage.head === node;
  }
  /*
  * Checks if a node is the tail of the linked list 
  * @param {{prev:Object|null, next:Object|null}} node - the node to check
  * @return {boolean} - true if node is the tail, otherwise false
  */
  isTail(node) { // O(1)
    return this._storage.tail === node;
  }

  reverse(head) {
    let prev = null;
    let current = head;

    while(current !== null) {
      let next = current.next || null;
      current.next = prev;
      prev = current;
      current = next;
    }

    head = prev;
    return head;
  }
}

const myLinedList = new LinkedList();
console.log("1. myLinedList = ", myLinedList);
console.log("2. myLinedList.insert(10) = ",  myLinedList.insert(10));
console.log("3. myLinedList.insert(20) = ",  myLinedList.insert(20));
console.log("4. myLinedList.insert(30) = ",  myLinedList.insert(30));
console.log("5. myLinedList.insert(40) = ",  myLinedList.insert(40));
console.log("6. myLinedList.insert(50) = ",  myLinedList.insert(50), "\n");

console.log("7. myLinedList._storage.tail = ",  myLinedList.isTail(myLinedList._storage.tail));
const isTailTestNode1 = new Node(11);
console.log("7.1 myLinedList.isTail(11) = ",  myLinedList.isTail(isTailTestNode1), "\n");



console.log("8. myLinedList.removeHead() = ",  myLinedList.removeHead(), "\n");

console.log("9. myLinedList._storage.head = ",  myLinedList.isHead(myLinedList._storage.head));
const isHeadTestNode1 = new Node(51);
console.log("9.1 myLinedList.isHead(51) = ",  myLinedList.isHead(isHeadTestNode1), "\n");


console.log("10. myLinedList.contains(30) = ",  myLinedList.contains(30));
console.log("10.1 myLinedList.contains(32) = ",  myLinedList.contains(32), "\n");


console.log("11. myLinedList.remove(30) = ",  myLinedList.remove(30));
console.log("11.1 myLinedList.remove(30) = ",  myLinedList.remove(30), "\n");

console.log("12. myLinedList = ", JSON.stringify(myLinedList), "\n");

console.log("13. myLinedList.removeTail() = ",  myLinedList.removeTail());

console.log("14. myLinedList = ", JSON.stringify(myLinedList));

console.log("15. myLinedList = ", JSON.stringify(myLinedList.reverse(myLinedList._storage.head)));


