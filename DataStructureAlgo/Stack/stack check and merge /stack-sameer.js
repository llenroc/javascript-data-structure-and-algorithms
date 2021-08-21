console.log("********** Stack **********");

/** Class representing a Stack. */

class Stack {

  constructor() {
    this._storage = {};
    this._length = 0;
  }
  /*
  * Adds a new value at the end of the 
  * stack
  * @param {*} value the value to push
  */
  push(value) { // TC = O(1)
    this._storage[this._length] = value;
    this._length++;
  }

  /*
  * Removes the value at the end of the stack and returns it
  * @return {*} the last and newest value in the stack
  */
  pop() { // TC = O(1)
    if(this._length === 0) {
      return "Stack is empty";
    }
    this._length--;
    const topValue = this._storage[this._length];
    delete this._storage[this._length];
    return topValue;
  }
  /*
  * Returns the value at the end of the stack without removing it
  * @return {*} the last and newest value in the stack
  */
  peek() { // TC = O(1)
    if(this._length === 0) {
      return "Stack is empty";
    }
    return this._storage[this._length - 1];
  }
}

const myStack = new Stack();
console.log("1 myStack = ", myStack);

myStack.push(10);
myStack.push(15);
myStack.push(20);
console.log("2 myStack = ", myStack);

console.log(`3 myStack.pop() = ${myStack.pop()}, `, myStack);
console.log(`4 myStack.pop() = ${myStack.pop()}, `, myStack);

console.log(`5 myStack.peek() = ${myStack.peek()}, ` , myStack);

console.log(`6 myStack.pop() = ${myStack.pop()}, `, myStack);
console.log(`7 myStack.pop() = ${myStack.pop()}, `, myStack);
