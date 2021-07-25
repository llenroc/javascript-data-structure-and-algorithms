/** Class representing a Queue. */

class Queue {

  constructor() {
    this._storage = {};
    this._head = 0;
    this._tail = 0;
  }
  /*
  * Enqueues a new value at the end 
  * of the queue
  * @param {*} value - the value to 
  * enqueue
  */
  enqueue(value) { // O(1)
    this._storage[this._head] = value;
    this._head++;
  }

  /*
  * Dequeues the value from the beginning of the queue and returns it
  * @return {*} the first and oldest value in the queue
  */
  dequeue() { // O(1)
    if(this._head > this._tail) {
      const tailValue = this._storage[this._tail];
      delete this._storage[this._tail];
      this._tail++;
      return tailValue;
    }
  }
  /*
  * Returns the value at the beginning of the queue without removing it from the queue
  * @return {*} value the first and oldest value in the queue
  */
  peek() { // O(1)
    if(this._head > this._tail) {
      return this._storage[this._tail];
    }
  }
}

const myQueue = new Queue();
console.log("1. MyQueue = ", myQueue);

myQueue.enqueue(10);
console.log("2. myQueue.enqueue(10) = ", myQueue);

myQueue.enqueue(20);
console.log("3. myQueue.enqueue(20) = ", myQueue);

myQueue.enqueue(30);
console.log("4. myQueue.enqueue(30) = ", myQueue);

console.log("5. myQueue.dequeue() = ", myQueue.dequeue(), myQueue);

console.log("6. myQueue.dequeue() = ", myQueue.dequeue(), myQueue);

console.log("7. myQueue.peek() = ", myQueue.peek(), myQueue);

console.log("8. myQueue.dequeue() = ", myQueue.dequeue(), myQueue);

console.log("9. myQueue.dequeue() = ", myQueue.dequeue(), myQueue);

console.log("10. myQueue.peek() = ", myQueue.peek(), myQueue);


