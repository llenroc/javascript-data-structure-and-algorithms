// https://replit.com/@bgando/queue-implementation-solution?v=1

/**
 * Queue class
 * Time: enqueue O(1), dequeue O(1), peek O(1)
 * @constructor
 */
class Queue {
  constructor() {
    this._storage = [];
  }
  /*
  * Adds a new value at the end of the queue
  * @param {*} value - the value to enqueue
  */
  enqueue(value) {
    this._storage.push({ value });
  }
  /*
  * Removes the value at the beginning of the queue and returns it
  * @return {*} the first and oldest value in the queue
  */
  dequeue() {
    if (!this.isEmpty()) {
      let item = this._storage.unshift();
      return item.value;
    }
  }
  /*
  * Returns the value at the end of the queue without removing it
  * @return {*} the first and oldest value in the queue
  */
  peek() {
    if (!this.isEmpty()) {
      let item = this._storage[this._storage.length - 1];
      return item.value;
    }
  }
  /*
  * Returns if the queue is empty or not
  * @return {boolean} - wheter or not the queue is empty
  */
  isEmpty() {
    return this._storage.length === 0;
  }
}