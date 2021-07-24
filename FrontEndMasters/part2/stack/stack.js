console.log("********** Stack **********");

/** Class representing a Stack. */

class Stack {

  constructor() {
    this._storage = {};
    this._counter = 0;
  }
  /*
  * Adds a new value at the end of the 
  * stack
  * @param {*} value the value to push
  */
  push(value) { // TC = O(1)
    this._storage[this._counter] = value;
    this._counter++;
  }

  /*
  * Removes the value at the end of the stack and returns it
  * @return {*} the last and newest value in the stack
  */
  pop() { // TC = O(1)
    if(this._counter === 0) {
      console.log("Stack is empty");
      return;
    }
    this._counter--;
    const topValue = this._storage[this._counter];
    delete this._storage[this._counter];
    return topValue;
  }
  /*
  * Returns the value at the end of the stack without removing it
  * @return {*} the last and newest value in the stack
  */
  peek() { // TC = O(1)
    if(this._counter === 0) {
      console.log("Stack is empty");
      return;
    }
    return this._storage[this._counter - 1];
  }
}

const myStack = new Stack();
console.log("myStack = ", myStack);

myStack.push(10);
myStack.push(15);
myStack.push(20);
console.log("myStack = ", myStack);

console.log(`myStack.pop() = ${myStack.pop()}`, myStack);
console.log(`myStack.pop() = ${myStack.pop()}`, myStack);

console.log(`myStack.peek() = ${myStack.peek()}` , myStack);
