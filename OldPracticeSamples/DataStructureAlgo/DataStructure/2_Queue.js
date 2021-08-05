/*

QUEUE

Abstract data type
FIFO - First in, first out
Collection of elements with enqueue and dequeue operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/shift method in your implementation. Use an object as the underlying data structure.


*** Operations:

myQueue.enqueue(value)
=> count of queue
add value to collection

myQueue.dequeue()
=> oldest element added collection
Remove item so that it is no longer in collection

myQueue.peek()
=> oldest element added collection
Similiar to dequeue, but do not remove element from collection

myQueue.count()
=> number of elements in queue


*** Additional Exercises:

Modify your queue to take a max capacity and return a string if you try to add an element when there's no more room:
myQueue.enqueue(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the queue:
myQueue.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of dequeues until you get to a certain value:
queue values - (first)2-5-7-3-6-9(last)
myQueue.until(7)
=> 3
What's the time complexity?

//Usage

Breadth first Search
Pop-up messages
Events
HTTP Requests

 */

(function() {
    let logs = new ConsoleLog("F_E_M_Queue", false);

    function Queue(capacity) {
      this._capacity = capacity || 5;
      this._storage = {};
      this._head = 0;
      this._tail = 0;  
    }
    
    Queue.prototype.enqueue = function(value) {
      if(this._capacity <= (this._tail-this._head)) {
        return "Queue is full, no space to add more items";
      }
      this._storage[this._tail] = value;
      this._tail++;
      return value;
    };
    // Time complexity: O(1) - Constant
    
    Queue.prototype.dequeue = function() {
      //if head and tail are at same point
      if(this._head === this._tail) {
        return "queue is empty";
      } 

      let deletedItem = this._storage[this._head];
      delete this._storage[this._head];
      if (this._head < this._tail) {
        this._head++;
      }
      return deletedItem;
    };
    // Time complexity: O(1) - Constant
    
    Queue.prototype.peek = function() {
      //if head and tail are at same point
      if(this._head === this._tail) {
        return "queue is empty";
      }
      return this._storage[this._head];
    };
    // Time complexity: O(1) - Constant
    
    Queue.prototype.count = function() {
      //if head and tail are at same point
      if(this._head === this._tail) {
        return "queue is empty";
      }
      return this._tail - this._head;
    };
    // Time complexity: O(1) - Constant

    Queue.prototype.contains = function(value) {
      let current = this._head;
      while(current !== this._tail) {
        if(this._storage[current] === value){
          return true;
        }
        current++;
      }
      return false;
    };
    // Time complexity: O(n) linear

    Queue.prototype.until = function(value) {
      let current = this._tail;
      while (current != this._head) {
        if(this._storage[current-1] === value){
          break;
        }
        current--;
      }
      return current !== this._head ? (this._tail - current) + 1 : "Value does not exist";
    };
    // Time complexity: O(n) linear

    const myQueue = new Queue();
    
    logs.push("myQueue = ", myQueue);
    logs.push("myQueue.enqueue(10) = ", myQueue.enqueue(10));
    logs.push("myQueue.enqueue(20) = ", myQueue.enqueue(20));
    logs.push("myQueue.enqueue(30) = ", myQueue.enqueue(30));
    logs.push("myQueue.enqueue(40) = ", myQueue.enqueue(40));
    logs.push("myQueue.enqueue(50) = ", myQueue.enqueue(50));
    logs.push("myQueue.enqueue(60) = ", myQueue.enqueue(60));
    logs.push("myQueue = ", myQueue);
    logs.push("myQueue.peek() = ", myQueue.peek()); // 10
    logs.push("myQueue.count() = ", myQueue.count()); // 5
    logs.push("myQueue.enqueue(10) = ", myQueue.dequeue());
    logs.push("myQueue.enqueue(20) = ", myQueue.dequeue());
    logs.push("myQueue.enqueue(30) = ", myQueue.dequeue());
    logs.push("myQueue.enqueue(40) = ", myQueue.dequeue());
    logs.push("myQueue.enqueue(50) = ", myQueue.dequeue());
    logs.push("myQueue.enqueue(60) = ", myQueue.dequeue());
    logs.push("myQueue = ", myQueue);
    logs.push("myQueue.enqueue(70) = ", myQueue.enqueue(70));
    logs.push("myQueue.enqueue(80) = ", myQueue.enqueue(80));
    logs.push("myQueue.contains(60) = ", myQueue.contains(60));
    logs.push("myQueue.contains(80) = ", myQueue.contains(80));
    logs.push("myQueue.until(60) = ", myQueue.until(60));
    logs.push("myQueue.until(70) = ", myQueue.until(70));
    logs.push("myQueue.until(80) = ", myQueue.until(80));
    logs.push("myQueue = ", myQueue);
    logs.print();
})();


  
  
  
  /*
  *** Exercises:
  
  1. Implement a queue using two stacks.
  
  2. Implement a double-ended queue, with the following methods: enqueueLeft, dequeueLeft, enqueueRight, dequeueRight.
  
  3. Given a tree, print out the value of each node in breadth-first order using a queue data structure.
  
  
   */