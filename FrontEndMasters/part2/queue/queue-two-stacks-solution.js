// https://replit.com/@bgando/queue-two-stacks-solution?v=1


// We are given a stack data structure with push and pop operations, the task is to implement a queue using instances of stack data structure and operations on them.
// Remember the interface of a stack & queue: https://www.geeksforgeeks.org/wp-content/uploads/Stack-Queue.png

/**
 * Creates a queue implemented with two stacks.
 * @constructor
 */
class TwoStackQueue {
  constructor() {
    this.inbox = [];
    this.outbox = [];
  }
  /**
   * Add a value to the queue.
   * @param {*} value - The value to enqueue.
   */
  enqueue(value) {
    this.inbox.push(value);
  }
  /**
   * Removes a value from the queue and returns it.
   * @return {*} The removed value.
   */
  dequeue() {
    if (!this.outbox.length) {
      if (!this.inbox.length) return;

      while (this.inbox.length) {
        this.outbox.push(this.inbox.pop());
      }
    } 
    return this.outbox.pop();
  }
}