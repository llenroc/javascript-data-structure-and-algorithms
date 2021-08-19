// https://www.youtube.com/watch?v=ufwPuyxkNVE&list=PLeIMaH7i8JDjd21ZF6jlRKtChLttls7BG&index=12&ab_channel=VivekanandKhyade-AlgorithmEveryDay

/*


getMinimum from Stack with time complexity  = O(1) or constant time complexity

*/

class Stack {
  constructor() {
    this.top = 0;
    this.storage = [];
    this.supportingStack = [];;
  }

  push(value) {
    this.storage[this.top] = value;
    this.top++;
    if(!this.supportingStack.length || this.supportingStack[this.supportingStack.length - 1] > value) {
      this.supportingStack.push(value);
    }
    return this;
  }

  pop() {
    this.top--;
    const topValue = this.storage[this.top];
    this.storage.pop();
    if(this.supportingStack[this.supportingStack.length - 1] === topValue) {
      this.supportingStack.pop();
    }
    return topValue;
  }

  getMinimumValue() {
    return this.supportingStack[this.supportingStack.length - 1]
  }

}

const myStack = new Stack();
myStack.push(31);
myStack.push(15);
myStack.push(40);
myStack.push(10);
myStack.push(9);

console.log(`myStack = ${JSON.stringify(myStack)}`);
console.log(`getMinimumValue = ${myStack.getMinimumValue()}`);

myStack.pop();
console.log(`myStack = ${JSON.stringify(myStack)}`);

console.log(`getMinimumValue = ${myStack.getMinimumValue()}`);