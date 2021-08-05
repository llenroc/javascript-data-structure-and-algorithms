/*

LINKED LIST

Comprised of nodes that represent a sequence.
Each node is composed of data and a reference/link to the next node.


*** Operations:

** Part 1

myList.forEach(callbackFn)
invoke callback function with the value of each node

myList.print()
=> string with all values in list (ex: '0, 1, 2, 3')

myList.insertAfter(refNode, value)
=> new node
insert new node associated with value passed in after refNode

myList.removeAfter(refNode)
=> removed node
remove node after the refNode

myList.insertHead(value)
=> new head
insert new head node at the beginning of the list with the value passed in

myList.removeHead()
=> removed head node
remove the head node of the linked list

myList.findNode(value)
=> first node that has a value matching what was passed in


* Optimization:
Say we have a linked list that has 100 items and we want to add an item to the very end. How would you do that with your current implementation? How can you modify the data structure to add an item to the end in constant time?

myList.appendToTail(value)
=> new tail node
add a new tail node at the end of the list with the associated value passed in

myList.removeTail()
=> removed tail node
remove the tail node from the list


** Part 2

Now let's think about creating insertBefore and removeBefore methods for the nodes in our list. Can you think of an efficient way to do so?

Think about time complexity. What would it be for your current implementation of a linked list?

How can we modify our data structures (Node and Linked List classes) so that we can make these O(1) operations?

Once you've come up with a plan, implement the following methods.

myList.insertBefore(refNode, value)
=> new node inserted
insert new node with associated value before refNode

myList.removeBefore(refNode)
=> removed node
remove node before the refNode passed in


*** Additional Exercises:

Implement a circularly linked list:
https://en.wikipedia.org/wiki/Linked_list#Circularly_linked_list

Reimplement stack and queue data structures using linked lists.


 */


(function () {
    let logs = new ConsoleLog("F_E_M_SinglyLinkedList", false);

    // PART 1

    function Node(value) {
        this.next = null;
        this.value = value;
    }

    function LinkedList(headValue) {
        if (headValue === undefined)  {
            return 'Must provide value for first node';
        }
        this.head = new Node(headValue);
        this.tail = this.head;
    }

    LinkedList.prototype.forEach = function (callback) {
        // implement me...
        let currentNode = this.head;
        while(currentNode) {
            callback(currentNode.value);
            currentNode = currentNode.next;
        }
    };
    // Time complexity: O(n)

    LinkedList.prototype.print = function () {
        let str = '';
        this.forEach(function(value){
            str = str === '' ? `${value}` : `${str}-${value}`;
        });
        return str;
    };
    // Time complexity:

    LinkedList.prototype.insertAfter = function (node, value) {
        // implement me...
        let keep = node.next;
        let newNode = new Node(value);
        node.next = newNode;
        newNode.next = keep;
        if(this.tail === node) {
            this.tail = newNode;
        }
        return newNode;
    };
    // Time complexity: O(1) - constant

    LinkedList.prototype.removeAfter = function (node) {
        // implement me...
        let removeNode = node.next;
        if(!removeNode) {
            return "Nothing to remove";
        }
        let newNext = removeNode.next;
        node.next = newNext;
        removeNode.next = null;

        if(removeNode === this.tail) {
            node = this.tail;
        }
        return removeNode;
    };
    // Time complexity:

    LinkedList.prototype.insertHead = function (value) {
        // implement me...
        let node = new Node(value);
        let oldHead = this.head;
        node.next = oldHead;
        this.head = node;
        return this.head;
    };
    // Time complexity: O(1) - constant

    LinkedList.prototype.removeHead = function () {
        // implement me...
        let oldHead = this.head;
        let newHead = this.head.next;
        this.head = newHead;
        oldHead.next = null;
        return oldHead;
    }

    LinkedList.prototype.findNode = function (value) {
        // implement me...
        let currentNode = this.head;
        while(currentNode) {
            if(currentNode.value === value){
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        
        return `No node exist with value = ${value}`;
    };
    // Time complexity: O(n) - linear

    LinkedList.prototype.appendToTail = function (value) {
        // implement me...
        let node = new Node(value);
        this.tail.next = node;
        this.tail = node;
        return node;
    };
    // Time complexity: O(1) - constant


    // PART 2:

    LinkedList.prototype.insertBefore = function (node, value) {
        // implement me...
        let newNode = new Node(value);
        let currentNode = this.head;
        
        if(currentNode === node) {
            node.next = currentNode;
            this.head = node;
            return node;
        }

        let prevNode;
        while (currentNode) {      
            if(currentNode === node){
                newNode.next = node;
                prevNode.next = newNode;
                return newNode;
            }
            prevNode = currentNode;
            currentNode = currentNode.next;
        }

        return "Node does not exist in the list";
    };
    // Time complexity: O(n) - linear

    LinkedList.prototype.removeBefore = function (node) {
        // implement me...
        // if node is equal to head
           // throw error message 
        
        //find previous node and previousOfPrevious node
            //loop from node to tail
               // if previousOfPrevious does not exist
                    //move head to node
                    //assign null to previous.next
                    //return previous;

               //point previousOfPrevious.next to node
               //assign null to previous.next
               //return previous;
              
        // throw error message

        let currentNode = this.head;
        if(currentNode === node) {
            return "Nothing to remove";
        } 

        let prevNode, previousOfPrevious;
        while(currentNode) {
            if(currentNode === node){                                          
                if(previousOfPrevious === undefined) {
                    this.head = node;   
                } else {
                    previousOfPrevious.next = node;
                }
                prevNode.next = null;
                return prevNode;
                
            }
            previousOfPrevious = prevNode;
            prevNode = currentNode;
            currentNode = currentNode.next;
        }

        return "Node does not exist in the list";
    };
    // Time complexity: O(n) - linear




    var myList = new LinkedList(0); 
    logs.push('should be 0 = ', myList.print());
    myList.insertAfter(myList.head, 1)
    logs.push('should be 0, 1 = ', myList.print(), 'should be 0, 1');
    myList.insertAfter(myList.head.next, 3)
    logs.push('should be 0, 1, 3 = ', myList.print());
    myList.insertAfter(myList.head.next, 2);
    logs.push('should be 0, 1, 2, 3 = ', myList.print());
    myList.removeAfter(myList.head)
    logs.push('should be 0, 2, 3 = ', myList.print());
    myList.insertHead(-1);
    logs.push('should be -1, 0, 2, 3 = ', myList.print());
    myList.removeHead();
    logs.push('should be 0, 2, 3 = ', myList.print());
    myList.appendToTail(4);
    logs.push('should be 0, 2, 3, 4 = ', myList.print());
    logs.push('myList.findNode(0) === myList.head) should be true = ', myList.findNode(0) === myList.head);
    logs.push('myList.findNode(3) === myList.head.next.next should be true = ', myList.findNode(3) === myList.head.next.next);
    myList.insertAfter(myList.findNode(2), 2.5);
    logs.push('should be 0, 2, 2.5, 3, 4 = ', myList.print());
    myList.removeAfter(myList.findNode(2));
    logs.push('should be 0, 2, 3, 4 = ', myList.print()); 
    myList.insertBefore(myList.head.next, 1);
    logs.push('should be 0, 1, 2, 3, 4 = ', myList.print());
    myList.removeBefore(myList.head.next.next);
    logs.push('should be 0, 2, 3, 4 = ', myList.print());
    logs.push('removeBefore(myList.head) - Nothing to remove = ', myList.removeBefore(myList.head));
    logs.push('removeBefore(myList.head.next)', myList.removeBefore(myList.head.next));
    logs.push('myList.findNode(2) === myList.head) should be true = ', myList.findNode(2) === myList.head);
    logs.push('should be 2, 3, 4 = ', myList.print());


    { // reverse the singly Linked List
        // https://www.youtube.com/watch?v=4mm39dVLlZ0&index=23&list=PLeIMaH7i8JDio7glJoO1rQIAo4g1msRRG

        function reverse(list) {
            var recursive = function recursive(node) {
                if( !node ) return;
                let p = node,
                    q = p.next;
                if(!q) return;

                q = recursive( q ); // recursive call

                p.next.next = p;
                p.next = null;
                return q;
            }

            //Below logic to swap the head and tail
            let { head, tail } = list;
            recursive(list.head);
            list.head = tail;
            list.tail = head;
            return list; 
        }

        myList.appendToTail(5);
        myList.appendToTail(6);
        myList.appendToTail(7);
        logs.push('Orignal 2-3-4-5-6-7 = ', myList.print());
        reverse(myList);
        logs.push("Reverse of 7-6-5-4-3-2 = ", myList.print());
        reverse(myList);
        logs.push('Back to Orignal 2-3-4-5-6-7 = ', myList.print());
    }

    { // Compare two Linked List
        function compareTwoLinkedList( { head: node1 }, { head: node2 }) {
            if(!node1 && !node2) return true;

            while( node1 || node2) {
                if(!node1 || !node2) return false;
                if (node1.value !== node2.value) return false;
                node1 = !!node1 ? node1.next : null;
                node2 = !!node2 ? node2.next : null;
            }
            return true;
        }

        var myList2 = new LinkedList(2);
        myList2.appendToTail(3);
        myList2.appendToTail(4);
        myList2.appendToTail(5);
        myList2.appendToTail(6);
        myList2.appendToTail(7);
        logs.push('List 1  2-3-4-5-6-7 = ', myList.print());
        logs.push('List 2  2-3-4-5-6-7 = ', myList2.print());
        logs.push(`${myList} == ${myList2} => true = `, compareTwoLinkedList(myList, myList2));

        myList2.appendToTail(8);
        logs.push(`${myList.print()} == ${myList2.print()} => false = `, compareTwoLinkedList(myList, myList2));
    }

    { // Check if the singly Linked List is a Palindrome 
        function isLinkedListPalindrome(linkedList) {
            let { head: p, head: q } = linkedList;
            if( !p ) return true;

            let secondStart;

            while ( true ) {
                q = q.next.next;
                if (!q) {
                    secondStart = p.next;
                    break;
                } 
                if ( !q.next) {
                    secondStart = p.next.next;
                    break;
                }
                p = p.next;
            }


            let list2 = new LinkedList(0); // Created 2nd list with dummy value
            list2.head = secondStart;
            list2.tail = linkedList.tail;

            p.next = null; // disconnect from the end
            linkedList.tail = p; // move tail to last item 

            list2 = reverse(list2);

            return compareTwoLinkedList(linkedList , list2 );
        }

        var myList3 = new LinkedList('a');
        myList3.appendToTail('b');
        myList3.appendToTail('c');
        myList3.appendToTail('d');
        myList3.appendToTail('c');
        myList3.appendToTail('b');
        myList3.appendToTail('a');
        logs.push(`myList3 = ${myList3.print()} = `, myList3);
        logs.push(`isPalendrom ${myList3.print()} true = `, isLinkedListPalindrome(myList3));

        logs.push("myList3 = ", myList3.print());
        myList3.appendToTail('d');
        myList3.appendToTail('c');
        myList3.appendToTail('b');
        myList3.appendToTail('a');
        myList3.appendToTail('a');
        logs.push("myList3 = ", myList3.print());
        myList3.appendToTail('a');
        logs.push(`isPalendrom ${myList3.print()} false = `, isLinkedListPalindrome(myList3));
        
    }

    { // Find the length of the LinkedList
        LinkedList.prototype.length = function () {
            let { head: current } = this, count = 0;
            if ( !current ) return;
            while (current) {
                ++count;
                current = current.next;
            }

            return count;
        }

        logs.push(`myList2.length = ${ myList2.print()} =  7 `, myList2.length());
        logs.push(`myList.length = ${ myList.print()} =  6 `, myList.length());
    }

    { // Check whether length is odd or even without coutning

        LinkedList.prototype.isLength = function () {
            let { head: p, head: q } = this;
            if(!p) return true;

            while ( true ) {
                q = q.next.next;

                if ( !q ) { // EVEN
                    return 'EVEN';
                }
                if ( !q.next ) { // ODD
                    return 'ODD';
                }

                p = p.next;
            }
        }

        logs.push(`myList.length = ${ myList.print()} =  6 - EVEN `, myList.isLength());
        logs.push(`myList2.length = ${ myList2.print()} =  7  - ODD `, myList2.isLength());
    }

    { // Find Intersection of two Linked Lists using stack(3rd approach)
        
        { //Approach :1 Using two stacks
 
            function intersectionTwoLinkedList( list1, list2 ) {
                let { head: p } = list1,
                    { head: q } = list2,
                    stack1 = [],
                    stack2 = [],
                    intersection = 'Not Found';
    
                while(p) {
                    stack1.push(p.value);
                    p = p.next;
                }
    
                while(q) {
                    stack2.push(q.value);
                    q = q.next;
                }
                   
                while (stack1.length > 0 && stack2.length > 0) {
                    let pop1 = stack1.pop();
                    let pop2 = stack2.pop();
    
                    if (pop1 !== pop2 ) {
                        break;
                    }
                    intersection = pop1;
                }
    
                return intersection;
            }
    
            var myList4 = new LinkedList('a');
            myList4.appendToTail('b');
            myList4.appendToTail('c');
            myList4.appendToTail('d');
            myList4.appendToTail('e');
            myList4.appendToTail('f');
            myList4.appendToTail('g');
    
            var myList5 = new LinkedList('l');
            myList5.appendToTail('m');
            myList5.appendToTail('n');
            myList5.appendToTail('o');
            myList5.appendToTail('e');
            myList5.appendToTail('f');
            myList5.appendToTail('g');
    
    
            logs.push("Intersection With Two Stack => e  = ", intersectionTwoLinkedList(myList4, myList5));
        }
        
        { // Apprach: 2 - Usning difference 
          // https://www.youtube.com/watch?v=_7byKXAhxyM&index=14&list=PLeIMaH7i8JDio7glJoO1rQIAo4g1msRRG
      
            function intersectionTwoLinkedList2(list1, list2) {
                let l1 = list1.length,
                    l2 = list2.length,
                    { head : p } = list1,
                    { head : q } = list2;
                
                function move(pointer, n) {
                    while (n > 0) {
                        pointer = pointer.next;
                        n--;
                    }
                }

                let difference = Math.abs(l1, l2);
                
                if(l1 > l2) {
                    move ( list1, difference);
                } else {
                    move ( list2, difference);
                }

                while (p && q) {
                    if ( p.value == q.value ) {
                        return p.value;
                    }
                    p = p.next;
                    q = q.next;
                }
                return 'Not Found';
            }

            logs.push("Intersection2 With difference => e  = ", intersectionTwoLinkedList2(myList4, myList5));
        }
    }

    { // Detect Loop in the linked list - Floyd's cycle detecting algorithm
      // https://www.youtube.com/watch?v=zbozWoMgKW0&list=PLeIMaH7i8JDio7glJoO1rQIAo4g1msRRG&index=21

        function detectLoopAndStartingPoint(list) {
            let { head } = list;
            if( !head ) return 'List doest not exist';
            
            function checkLoop({ head: p, head: q }) {     
                while ( p && q && q.next) {
                    p = p.next;
                    q = q.next.next;

                    if( p.value === q.value ) {
                        return p;
                    }
                }
                return null;
            }

            function findLoopStarting(p, q) {
                while ( true ) {
                    if ( p.value === q.value) {
                        return p.value;
                    }
                    p = p.next;
                    q = q.next;
                }
            }

            let checkPoint = checkLoop(list);
            if ( checkPoint ) {
                return findLoopStarting( head, checkPoint );
            } else {
                return 'No Loop';
            }
        }

        let myList6 = new LinkedList('l');
            myList6.appendToTail('m');
            myList6.appendToTail('n');
        let pointerO = myList6.appendToTail('o');
            myList6.appendToTail('e');
            myList6.appendToTail('f');
        let pointerG = myList6.appendToTail('g');

        pointerG.next = pointerO;

        logs.push("detectLoopAndStartingPoint  o = ", detectLoopAndStartingPoint( myList6 ));

    }

    { // Clone/Copy a linked list with next and random pointers - IMPORTANT
      // https://www.youtube.com/watch?v=EHpS2TBfWQg&list=PLeIMaH7i8JDio7glJoO1rQIAo4g1msRRG&index=15

        let myList7 = new LinkedList('l');
        let pointerM = myList7.appendToTail('m');
        let pointerN = myList7.appendToTail('n');
        let pointerO = myList7.appendToTail('o');
        let pointerE = myList7.appendToTail('e');
        let pointerF = myList7.appendToTail('f');
        let pointerG = myList7.appendToTail('g');

        myList7.head.random = pointerO;
        pointerM.random = pointerO;
        pointerN.random = pointerE;
        pointerO.random = pointerF;
        pointerE.random = pointerG;
        pointerF.random = pointerM;
        pointerG.random = pointerN;

        LinkedList.prototype.forEachWithRandom = function (callback) {
            // implement me...
            let currentNode = this.head;
            while(currentNode) {
                callback( currentNode.value, (currentNode.random ? currentNode.random.value : '') );
                currentNode = currentNode.next;
            }
        };

        LinkedList.prototype.printWithRandom = function () {
            let str = '';
            this.forEachWithRandom(function(value, random = ''){
                str = str === '' ? `${value}->${random}` : `${str}  ${value}->${random}   `;
            });
            return str;
        };


        function copyLLWithRandomPointer(list) {
            let { head: current } = list;
            if( !current ) return;

            // Clone the list and add random to each node 
            let cloned = new LinkedList(current.value);
            cloned.head.random = null;

            while (current.next) {
                let newNode = cloned.appendToTail(current.next.value);
                newNode.random = null;
                current = current.next;
            } // cloning ends here

            logs.push("Given List = ", list.printWithRandom());     // l->o  m->o     n->e     o->f     e->g     f->m     g->n
            logs.push("Cloned List = ", cloned.printWithRandom());  // l->  m->     n->     o->     e->     f->     g->

            let { head: p } = list,
                { head: q } = cloned;

            while ( p ) {
                let nextNodeOfP = p.next; // Save P next reference
                p.next = q; // assign p.next to q
                q.random = p; // saving reference of P into q.random
                q = q.next; // Moving q to next node
                p = nextNodeOfP; // assigning p to the next node 
            }

            let { head: q1 } = cloned;

            while ( q1 ) {
                q1.random = q1.random.random.next; // restoring the random pointer to cloned list
                q1 = q1.next;
            }

            logs.push("Cloned List random = ", cloned.printWithRandom()); // l->o  m->o     n->e     o->f     e->g     f->m     g->n

            return cloned;
        }
        
        copyLLWithRandomPointer(myList7);

    }

    { // Swap nodes pairwise in Linked List (nodes in pairs)
      // https://www.youtube.com/watch?v=jiLloHVmLDc&index=19&list=PLeIMaH7i8JDio7glJoO1rQIAo4g1msRRG

        function swapPairWise(list) {
            let { head : p } = list;
            if( !p) return;

            let newStart = p.next;
            while ( true ) {
                let q = p.next;
                let temp = q.next;
                q.next = p;


                if ( !temp || !temp.next ) {

                    list.tail = !!temp ? temp : p;

                    p.next = temp; // IMPORTANT :-  Even case temp is null, odd no. of nodes case, temp is last node.
                    break;
                }

                p.next = temp.next;
                p = temp;   
            }

            list.head = newStart;
            return list;
        }

        logs.push(`Odd Nodes -  ${myList2.print()} =>  3-2-5-4-7-6-8 = `, swapPairWise(myList2).print());
        logs.push(`Even Nodes -  ${myList.print()} =>  3-2-5-4-7-6 = `, swapPairWise(myList).print());

    }

    { // Swap/Reverse nodes in a group of size = k in a linked list
      // https://www.youtube.com/watch?v=9F55R1VJRZ4&list=PLeIMaH7i8JDio7glJoO1rQIAo4g1msRRG&index=16

        function swapPairsOfK(list, k) {
            let { head: p, head: start} = list;
            if( !p ) return;

            let count = 1, 
                temp,
                newStart,
                q;

            //To get the first group 
            while (count != k) {
                if ( !p.next ) {
                    return start;
                }
                p = p.next;
                count++;
            }

            newStart = p;
            q = newStart;

            while ( true ) {
                p = start;
                temp = q.next;
    
                // If list has only K element
                if( !temp ) { // if temp is null
                    reverse ( p ); 
                    return newStart;
                }

                q.next = null;
                q = temp;
                start = temp;
                count = 1;

                while ( count != k) {
                    if( !temp.next ) { //if temp.next does not exist
                        reverse( p );
                        p.next = q;
                        return newStart;
                    }

                    temp = temp.next;
                    count++;
                }

                reverse ( p );

                p.next = temp;
                q = temp;
            }

            return newStart;  
        }
    }

    logs.print();
})();


/*
*** Exercises:
  
1. Implement a stack using a linked list.
  
2. Implement a queue using a linked list.
  
3. Write a method that remove duplicates from an unsorted linked list. What is the time complexity? Re-implement the method without using any additional storage structure (constant space complexity). What is the time complexity?
  
4. Reverse a linked list. Do not use any additional storage structures.
  
5. Find the kth to last element of a singly linked list.
  
6. Detect if a linked list has a loop.
  
7. Check if a linked list is a Palindromee.
  
8. Given two linked lists that represent numbers, return a linked list that represents the sum of those numbers:
  4 2 5        (4 -> 2 -> 5)
+ 7 3 1        (7 -> 3 -> 1)
--------
1 1 5 6   (1 -> 1 -> 5 -> 6)
  
 */