/*

STACK

Abstract data type
LIFO - Last in, first out
Collection of elements with push and pop operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/pop method in your implementation. That's too easy, yeah? =P
Use an object as the underlying data structure.


*** Operations:

myStack.push(value)
=> count of stack
add value to collection

myStack.pop()
=> most recent element added collection
Remove item so that it is no longer in collection

myStack.peek()
=> most recent element added collection
Similiar to pop, but do not remove element from collection

myStack.size()
=> number of elements in stack


*** Additional Exercises:

Modify your stack to take a max capacity and return a string if you try to add an element when there's no more room:
myStack.push(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the stack:
myStack.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of pops until you get to a certain value:
stack values - (first)2-5-7-3-6-9(last)
myStack.until(7)
=> 4
What's the time complexity?


//Usage :- 
  Backtracking in a maze
  Undo operations
  Call Stack
  Parsing expressions
  Depth first Search


 */

  

(function() {
    let logs = new ConsoleLog("F_E_M_Stack", false);

    function Stack(capacity) {
        // implement me...
        this.capacity = capacity || 50;
        this.storage = {};
        this.count = 0;
      }
    
    //If stack is full, push stack error message
    //push the value to storage
    //increment the count
    Stack.prototype.push = function(value) {
        if(this.count > this.capacity){
            return "Stack reached to its Capacity";
        }
        this.storage[this.count++] = value;
    };
    // Time complexity: O(1) - constant
    
    Stack.prototype.pop = function() {
        if(this.count === 0) {
            return "Stack has no value to pop";
        }
        let deletedItem = this.storage[this.count -1];
        delete this.storage[this.count -1];
        this.count--;
        return deletedItem;
    };
    // Time complexity: O(1) - constant
    
    Stack.prototype.peek = function() {
    // implement me...
        if(this.count === 0) {
            return "Stack has no value";
        }
        return this.storage[this.count - 1];
    };
    // Time complexity: O(1) - constant
    
    Stack.prototype.size = function() {
        if(this.count === 0) {
            return "Stack has no value";
        }
        return this.count;
    };
    // Time complexity: O(1) - constant

    //Create a contains method to check if a value is in the stack:
    Stack.prototype.contains = function(value) {
        let { count, storage } = this;
        while((count - 1) >= 0) {
            if (storage[count-1] === value) {
                return true;
            } 
            count --; 
        }
        return false;
    };
    // Time complexity: O(n) - linear

    Stack.prototype.until = function(value) {    
        let { count, storage } = this;
        let maxCount = count;
        if(count === 0) {
            return "Stack has no value";
        }
        while(count > 0) {      
            if (storage[count-1] === value) {
                break;
            }
            count--;
        }
        return count === 0 ? "Value does not exist" : ((maxCount - count) +1);
    }
    // Time complexity: O(n) - linear


    const myWeeklyMenu = new Stack();

    logs.push('myWeeklyMenu', myWeeklyMenu);
    myWeeklyMenu.push("RedBeans");
    logs.push('myWeeklyMenu', myWeeklyMenu);
    myWeeklyMenu.push("Potato");
    logs.push('myWeeklyMenu', myWeeklyMenu);
    myWeeklyMenu.push("Banana");
    logs.push('myWeeklyMenu', myWeeklyMenu);
    logs.push('myWeeklyMenu.size()', myWeeklyMenu.size());
    logs.push('myWeeklyMenu.pop()', myWeeklyMenu.pop());
    myWeeklyMenu.push("Mango");
    myWeeklyMenu.push("Orange");
    logs.push('myWeeklyMenu', myWeeklyMenu);
    logs.push('myWeeklyMenu.peek()', myWeeklyMenu.peek());
    logs.push('myWeeklyMenu', myWeeklyMenu);
    logs.push('myWeeklyMenu.size()', myWeeklyMenu.size());
    logs.push('myWeeklyMenu.pop()', myWeeklyMenu.pop());
    logs.push('myWeeklyMenu', myWeeklyMenu);
    logs.push('myWeeklyMenu.size()', myWeeklyMenu.size());
    logs.push('myWeeklyMenu.pop()', myWeeklyMenu.pop());
    logs.push('myWeeklyMenu', myWeeklyMenu);
    logs.push('myWeeklyMenu.contains(RedBeans)',myWeeklyMenu.contains('RedBeans'));
    logs.push('myWeeklyMenu.contains(Potato)',myWeeklyMenu.contains('Potato'));
    logs.push('myWeeklyMenu.contains(Orange)',myWeeklyMenu.contains('Orange'));
    logs.push('myWeeklyMenu.until(RedBeans)',myWeeklyMenu.until('RedBeans'));
    logs.push('myWeeklyMenu.until(Potato)',myWeeklyMenu.until('Potato'));
    logs.push('myWeeklyMenu.until(Orange)',myWeeklyMenu.until('Orange'));
    logs.print();
})();

  
  
  /*
  *** Exercises:
  
  1. Implement a stack with a min method which returns the minimum element currently in the stack. This method should have O(1) time complexity. Make sure your implementation handles duplicates.
  
  2. Sort a stack so that its elements are in ascending order.
  
  3. Given a string, determine if the parenthesis in the string are balanced.
  Ex: balancedParens( 'sqrt(5*(3+8)/(4-2))' ) => true
  Ex: balancedParens( 'Math.min(5,(6-3))(' ) => false
  
  4. Towers of Hanoi - https://en.wikipedia.org/wiki/Tower_of_Hanoi
  You are given three towers (stacks) and N disks, each of different size. You can move the disks according to three constraints:
     1. only one disk can be moved at a time
     2. when moving a disk, you can only use pop (remove the top element) and push (add to the top of a stack)
     3. no disk can be placed on top of a disk that is smaller than it
  The disks begin on tower#1. Write a function that will move the disks from tower#1 to tower#3 in such a way that none of the constraints are violated.
   */




// Stack using storage as string 
(function() {
    
        class Stack {
            constructor() {
                this.storage = '';
            }
    
            push(value) {
                /* let { storage } = this;
                if(storage.length === 0) {
                    this.storage = value;
                } else {
                    this.storage = `${storage}-${value}`;
                } */
    
                this.storage = this.storage.concat("-", value);;
            }
    
            pop() {
                /* let { storage } = this;
                if(storage.length === 0) {
                    return `Stack is empty, nothing to pop`;
                } else {
                    let collectAll = storage.split('-');
                    let itemToPop = collectAll[collectAll.length -1];
                    if(collectAll.length === 1) {
                        this.storage = '';
                    } else {
                        collectAll.pop();
                        this.storage = collectAll.join('-');
                    }
    
                    return itemToPop; 
                }
                */
    
                let str = this.storage.slice(this.storage.lastIndexOf('-')+1);
                this.storage = this.storage.substring(0, this.storage.lastIndexOf('-'));
                return str; 
            }
    
            size() {
                let { storage } = this;
                let collectAll = storage.split('-');
                return collectAll.length;
            }
        }
    
    
        let logs = new ConsoleLog("FrontEndMaster_Stack", false);
        const myWeeklyMenu = new Stack();
        
    
        logs.push('myWeeklyMenu', myWeeklyMenu);
        myWeeklyMenu.push("RedBeans");
        logs.push('myWeeklyMenu', myWeeklyMenu);
        myWeeklyMenu.push("Potato");
        logs.push('myWeeklyMenu', myWeeklyMenu);
        myWeeklyMenu.push("Banana");
        logs.push('myWeeklyMenu', myWeeklyMenu);
        logs.push('myWeeklyMenu.pop()', myWeeklyMenu.pop());
        logs.push('myWeeklyMenu', myWeeklyMenu);
        logs.push('myWeeklyMenu.pop()', myWeeklyMenu.pop());
        logs.push('myWeeklyMenu', myWeeklyMenu);
        logs.push('myWeeklyMenu.size()', myWeeklyMenu.size());
        logs.push('myWeeklyMenu', myWeeklyMenu);
        logs.push('myWeeklyMenu.pop()', myWeeklyMenu.pop());
        logs.push('myWeeklyMenu.size()', myWeeklyMenu.size());
        logs.push('myWeeklyMenu.pop()', myWeeklyMenu.pop());
        logs.push('myWeeklyMenu', myWeeklyMenu);
    
        logs.print();
    })();