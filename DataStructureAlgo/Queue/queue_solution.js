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

 */

/*
    ~~~~~~~ Usage ~~~~~~

    Breadth first Search
    Pop-up messages
    Events
    HTTP Requests
*/

/*
  *** Exercises:
  
  1. Implement a queue using two stacks.
  
  2. Implement a double-ended queue, with the following methods: enqueueLeft, dequeueLeft, enqueueRight, dequeueRight.
  
  3. Given a tree, print out the value of each node in breadth-first order using a queue data structure.
  
*/

class Queue {
    constructor(capacity) {
        this._capacity = capacity || 5;
        this._storage = {};
        this._head = 0;
        this._tail = 0;
    }

    /*
        myQueue.enqueue(value)
        => count of queue
        add value to collection
    */
    enqueue(value) {
      if((this._tail - this._head) >= this._capacity) {
        return "Max capacity already reached. Remove element before adding a new one."
      }

      this._storage[this._tail] = value;
      this._tail++;
      return this._tail - this._head;
    }

    /*
        myQueue.dequeue()
        => oldest element added collection
        Remove item so that it is no longer in collection
    */
    dequeue() {
      if(this._head === this._tail) {
        return "Queue is empty";
      }

      const deleteItem = this._storage[this._head];
      delete this._storage[this._head];
      this._head++;
      return deleteItem;
    }

    /*
        myQueue.peek()
        => oldest element added collection
        Similiar to dequeue, but do not remove element from collection
    */
    peek() {
      if(this._head === this._tail) {
        return "Queue is empty";
      }

      return this._storage[this._head];
    }

    /*
        myQueue.count()
        => number of elements in queue
    */
    count() {
      return this._tail - this._head;
    }

    /*
        myQueue.contains('findme')
        => true/false
        What's the time complexity?
    */
    contains(value) {
      let headCount = this._head;
      while (headCount < this._tail) {
        if(this._storage[headCount] === value) {
          return true;
        }
        headCount++;
      }
      return false;
    }

    /*
        Create an until method to get the number of dequeues until you get to a certain value:
        queue values - (first)2-5-7-3-6-9(last)
        myQueue.until(7)
        => 3
        What's the time complexity?
    */
    until(value) {
      if(this._head === this._tail) {
        return "Queue is empty";
      }
      let counter = 0;
      let exist = false;
      while(this._head !== this._tail){
        const currentValue = this.dequeue();
        counter++;
        if(currentValue === value) {
          exist = true;
          break;
        }
      }

      return exist ? counter : "value does not exist"; 
    }
}

const myQueue = new Queue();
    
console.log("myQueue = ", myQueue);
console.log("myQueue.enqueue(10) = ", myQueue.enqueue(10));
console.log("myQueue.enqueue(20) = ", myQueue.enqueue(20));
console.log("myQueue.enqueue(30) = ", myQueue.enqueue(30));
console.log("myQueue.enqueue(40) = ", myQueue.enqueue(40));
console.log("myQueue.enqueue(50) = ", myQueue.enqueue(50));
console.log("myQueue.enqueue(60) = ", myQueue.enqueue(60));
console.log("myQueue = ", myQueue);
console.log("myQueue.peek() = ", myQueue.peek()); // 10
console.log("myQueue.count() = ", myQueue.count()); // 5
console.log("myQueue.enqueue(10) = ", myQueue.dequeue());
console.log("myQueue.enqueue(20) = ", myQueue.dequeue());
console.log("myQueue.enqueue(30) = ", myQueue.dequeue());
console.log("myQueue.enqueue(40) = ", myQueue.dequeue());
console.log("myQueue.enqueue(50) = ", myQueue.dequeue());
console.log("myQueue.enqueue(60) = ", myQueue.dequeue());
console.log("myQueue = ", myQueue);
console.log("myQueue.enqueue(70) = ", myQueue.enqueue(70));
console.log("myQueue.enqueue(80) = ", myQueue.enqueue(80));
console.log("myQueue.contains(60) = ", myQueue.contains(60));
console.log("myQueue.contains(80) = ", myQueue.contains(80));
console.log("myQueue = ", myQueue, "\n\n\n");
console.log("myQueue.until(60) = ", myQueue.until(60));


console.log("myQueue.enqueue(70) = ", myQueue.enqueue(70));
console.log("myQueue.enqueue(80) = ", myQueue.enqueue(80));
console.log("\n\n myQueue = ", myQueue, "\n\n\n");
console.log("myQueue.until(80) = ", myQueue.until(80));
console.log("myQueue.until(70) = ", myQueue.until(70));
console.log("myQueue = ", myQueue);