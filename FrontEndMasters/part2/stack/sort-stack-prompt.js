//Implement the function sortStack
// https://replit.com/@bgando/sort-stack-prompt?v=1

  /*
  * Sorts a stack with smallest values on top
  * @param {Stack} stack - the stack to sort
  * @return {Stack} - sorted stack
  */
function sortStack(stack) {
  //implement here
}


/**
 * Stack class
 * Time: push O(1), pop O(1), peek O(1)
 * @constructor
 */
class Stack {
  constructor() {
    this._storage = [];
  }
  /*
  * Adds a new value at the end of the stack
  * @param {*} value - the value to push
  */
  push(value) {
    this._storage.push({ value });
  }
  /*
  * Removes the value at the end of the stack and returns it
  * @return {*} the last and newest value in the stack
  */
  pop() {
    if (!this.isEmpty()) {
      let item = this._storage.pop();
      return item.value;
    }
  }
  /*
  * Returns the value at the end of the stack without removing it
  * @return {*} the last and newest value in the stack
  */
  peek() {
    if (!this.isEmpty()) {
      let item = this._storage[this._storage.length - 1];
      return item.value;
    }
  }
  /*
  * Returns if the stack is empty or not
  * @return {boolean} - wheter or not the stack is empty
  */
  isEmpty() {
    return this._storage.length === 0;
  }
}
