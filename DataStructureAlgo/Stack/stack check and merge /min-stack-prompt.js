// https://replit.com/@bgando/min-stack-prompt?v=1


// Implement the a min method for the Stack class below.
/**
 * Stack class
 * Time: push O(1), pop O(1), peek O(1), min O(1)
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
    this._storage.push({
      value: value
    });
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
  * Returns the min in the stack without removing it
  * @return {*} the minimum value in the stack
  */
  min() {

  }
  /*
  * Returns if the stack is empty or not
  * @return {boolean} - wheter or not the stack is empty
  */
  isEmpty() {
    return this._storage.length === 0;
  }
}