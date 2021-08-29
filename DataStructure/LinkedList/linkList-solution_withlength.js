/** Class representing a Linked List */

class LinkedList {

  constructor(value) {
    this.head = { value, next: null };
    this.tail = this.head;
    this.length = 1;
  }
  /*
  * Inserts a new value to the end of the linked list
  * @param {*} value - the value to insert
  */
  insert(value) {
    this.tail.next = {value, next: null};
    this.length++;
  }
  /*
  * Deletes a node
  * @param {*} value - the value of the node to remove
  * @return {*} node - the deleted node
  */
remove(value) {
  if(this.isEmpty()) {
    return undefined;
  }
  
  let prevNode = null;
  let currNode = this.head;
  
  while(currNode) {
    if(currNode.value === value) {
      break;
    }
    
    prevNode = currNode;
    currNode = currNode.next;
  }
  
  if (currNode === null) {
    return undefined;
  }

  if (this.head === currNode) {
    this.head = currNode.next;
  } else {
    previousNode.next = currNode.next;
  }

  this.length--;
  return currNode;
}
  /*
  * Removes the value at the end of the linked list
  * @return {*} - the removed value
  */
  removeTail() {

  }
  /*
  * Searches the linked list and returns true if it contains the value passed
  * @param {*} value - the value to search for
  * @return {boolean} - true if value is found, otherwise false
  */
  contains(value) {
    let currentNode = this.head;

    while(currentNode) {
      if(currentNode.value === val) {
        return currentNode;
      }
            
      currentNode = currentNode.next;
    }

    return !!currentNode;
  }
  /*
  * Checks if a node is the head of the linked list 
  * @param {{prev:Object|null, next:Object|null}} node - the node to check
  * @return {boolean} - true if node is the head, otherwise false
  */
  isHead() {

  }
  /*
  * Checks if a node is the tail of the linked list 
  * @param {{prev:Object|null, next:Object|null}} node - the node to check
  * @return {boolean} - true if node is the tail, otherwise false
  */
  isTail() {

  }

  isEmpty() {
    return !!this.length === 0;
  }
}