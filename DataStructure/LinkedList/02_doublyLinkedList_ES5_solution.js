(function() {
    let logs = new ConsoleLog("F_E_M_DoublyLinkedList", false);

    function Node(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }

    function LinkedList(headValue) {
        if (headValue === undefined) {
            return "Must provide value for first node";
        }
        this.head = new Node(headValue);
        this.tail = this.head;
    }

    LinkedList.prototype.forEach = function(callBack) {
        var currentNode = this.head;
        while(currentNode) {
            callBack(currentNode.value);
            currentNode = currentNode.next;
        }
    }

    LinkedList.prototype.print = function() {
        var result = [];
        this.forEach(function(value){
            result.push(value);
        });
        return result.join('-');
    }

    //create Node with value
    //strore reference of next node 
    //newNode.next = nextNode
    //node.next = newNode
    //newNode.prev = node
    //if nextNode exist
        //NextNode.prev = newNode
    //if tail was at node
        //tail = newNode
    //return newNode
    LinkedList.prototype.insertAfter = function (node, value) {
        // implement me...
        let newNode = new Node(value);
        let nextNode = node.next;

        node.next = newNode;
        newNode.next = nextNode;
        newNode.prev = node;
        if(nextNode) {
            nextNode.prev = newNode;
        }

        if (node === this.tail) { 
            this.tail = newNode;
        } 
        return newNode;
    };

    LinkedList.prototype.removeAfter = function (node) {
        // implement me...
        let removeNode = node.next;
        if (!removeNode) {
            return "Nothing to remove";
        }

        let nodeNextToRemoveNode = removeNode.next;
        node.next = nodeNextToRemoveNode;

        if (nodeNextToRemoveNode) {
            nodeNextToRemoveNode.prev = node;
        }

        if (this.tail === removeNode) {
            this.tail = node;
        }
        removeNode.next = null;
        removeNode.prev = null;
        return removeNode;
    };

    LinkedList.prototype.insertHead = function (value) {
        // implement me...
        let newHead = new Node(value);
        let oldHead = this.head;

        oldHead.prev = newHead;
        newHead.next = oldHead;
        this.head = newHead;
        return this.head;
    };

    LinkedList.prototype.removeHead = function () {
        // implement me...
        let oldHead = this.head;
        let newHead = oldHead.next;
        this.head = newHead;
        newHead.prev = null;
        if(!newHead) {
            this.tail = null;
        }
        oldHead.next = null;
        return oldHead;
    };

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

    LinkedList.prototype.appendToTail = function (value) {
        // implement me...
        let oldTail = this.tail;
        let newNode = new Node(value);

        oldTail.next = newNode;
        newNode.prev = oldTail;
        this.tail = newNode;
        return this.tail;
    };
    // Time complexity:


    // PART 2:

    LinkedList.prototype.insertBefore = function (node, value) {
        // implement me...
        let newNode = new Node(value);
        let previousNode = node.prev;
        node.prev = newNode;
        newNode.next = node;

        newNode.prev = previousNode;
        if(previousNode) {
            previousNode.next = newNode;
        }

        if(node === this.head) {
            this.head = newNode;
        }
        return newNode;
    };
    // Time complexity:

    LinkedList.prototype.removeBefore = function (node) {
        // implement me...
        let removeNode = node.prev;
        if(!removeNode) {
            return 'Nothing to remove';
        }

        let nodeBeforeToRemove = removeNode.prev;
        node.prev = nodeBeforeToRemove

        if(nodeBeforeToRemove) {
            nodeBeforeToRemove.next = node;
        }

        if(this.head === removeNode) {
            this.head = node;
        }
        removeNode.next = null;
        removeNode.prev = null;
        return removeNode;

    };
    // Time complexity:

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
    myList.insertAfter(myList.head, 1);
    myList.insertBefore(myList.head, 0);
    myList.appendToTail(5);
    myList.appendToTail(6);
    myList.appendToTail(7);
    myList.appendToTail(8);
    myList.appendToTail(8);
    myList.appendToTail(9);
    myList.appendToTail(9);
    logs.push('should be 0,0, 2, 3, 4 .. 8, 8, 9 ,9 = ', myList.print());

    // Remove duplicate elements from a sorted linked list. If the linked list is sorted , 
    // then you just have to check the consecutive elements to check the duplicate elements.
    
    { // Remove duplicate elements from a sorted linked list
       
        // store reference of head and head.next
        // compare p.value with q.value
        // if values are equal
            // delete q
            // move q to next node
            // move tail to previous if tail was pointing to deleted node
        // else 
            // move p and q to next node 
        LinkedList.prototype.removeDuplicateFromSorted = function () {
            if(!this.head) return;
            var p = this.head,
                q = this.head.next;
                
            var free = (node) => {
                node.prev = null;
                node.next = null;
                node.value = null;
            };

            while (q) {
                if( p.value === q.value ) {
                    let temp = q.next;
                    p.next = temp;
                    if(temp) {
                        temp.prev = p;
                    }

                    if( this.tail === q ) {
                        this.tail = p;
                    }
                    free(q);
                    q = temp;
                } else {
                    p = p.next;
                    q = q.next;
                }
            }
        }

        myList.removeDuplicateFromSorted();
        logs.push('should be 0-1-2-3-4-5-6-7-8-9  = ', myList.print());

    }

    { // Remove duplicate from unsorted Linked List
        myList.appendToTail(4);
        myList.appendToTail(5);
        myList.appendToTail(6);

        /*
            Method 1 :- Use two loops
            Method 2 :- Sort the list and then remove duplicate
            Method 3 :- Use Hashing 
        */

        // Methoid 1:- Use two loops

        //store head to p
        // loop through till p exist
            // store p.next in q
            // loop through q exist
                //match q value with p value for eact iteration
                //if matches 
                    // delete node
                //else 
                    //move q to next node.
        LinkedList.prototype.removeDuplicateUnSorted = function() {
            let { head } = this;
            if( !head ) return;

            let p = head;

            var free = (node) => {
                node.value = null;
                node.next = null;
                node.prev = null;
            }
                
            while ( p ) {
                let q = p.next;
                while ( q ) {
                    if ( p.value === q.value ) {
                        let prev = q.prev;
                        let next = q.next;

                        prev.next = next;
                        if(next) {
                            next.prev = prev;
                        }
                        if( this.tail === q ) {
                            this.tail = prev;
                        }
                        free(q);
                        q = next;
                    } else {
                        q = q.next;
                    }
                }
                p = p.next;
            }
        }

        logs.push('should be 0-1-2-3-4-5-6-7-8-9-4-5-6  = ', myList.print());
        myList.removeDuplicateUnSorted();
        logs.push('should be 0-1-2-3-4-5-6-7-8-9  = ', myList.print());


        // Methode 3 :-  HashTable

        // store head to Set()
        // store head to p,  head.next to q
        // loop through till q exist
            //check value of q exist in Set() data
            //if matches 
                // delete node
                // free memory
                // move tail to prev, if tail was pointing to deleted node
            //else 
                //move q to next node.
        LinkedList.prototype.removeDuplicateUnSorted2 = function () {
            let { head } = this;
            if( !head ) return;

            const free = (node) => {
                node.value = null;
                node.next = null;
                node.prev = null;
            }

            let storage = new Set(),
            p = head,
            q = head.next;

            storage.add(p.value);

            while ( q ) {
                if ( storage.has(q.value) ) {
                    let temp = q.next;
                    p.next = temp;
                    if(temp) {
                        temp.prev = p;
                    }

                    if( this.tail === q ) {
                        this.tail = p;
                    }
                    free(q);
                    q = temp;
                } else {
                    storage.add(q.value);
                    p = p.next;
                    q = q.next;
                }
            }
        }

        myList.appendToTail(4);
        myList.appendToTail(5);
        myList.appendToTail(6);

        logs.push('# should be 0-1-2-3-4-5-6-7-8-9-4-5-6  = ', myList.print());
        myList.removeDuplicateUnSorted2();
        logs.push('# should be 0-1-2-3-4-5-6-7-8-9  = ', myList.print());
    }

    { // Find n th node from end of linked list. Write code for this.

        //store head value to p, q
        //move q to nth position ahead
        //loop till q.next not equal to null
            // return p 
        LinkedList.prototype.nthNodeFromEnd =  function (n) {
            let { head } = this;
            if(!head) return;
            let p = q = head;
            while ( n > 1) {
                if(!q.next) return `List does not have enough nodes`;
                q = q.next;
                n--;
            }
            while(q.next) {
                p = p.next;
                q = q.next;
            }
            return p.value;
        }

        logs.push("2nd node 0-1-2-3-4-5-6-7-8-9 => 9 = ", myList.nthNodeFromEnd(1)); // 9
        logs.push("2nd node 0-1-2-3-4-5-6-7-8-9 => 8 = ", myList.nthNodeFromEnd(2)); // 8
        logs.push("2nd node 0-1-2-3-4-5-6-7-8-9 => 7 = ", myList.nthNodeFromEnd(3)); // 7
        logs.push("2nd node 0-1-2-3-4-5-6-7-8-9 => 6 = ", myList.nthNodeFromEnd(4)); // 6
        logs.push("2nd node 0-1-2-3-4-5-6-7-8-9 => 2 = ", myList.nthNodeFromEnd(8)); // 2
        logs.push("2nd node 0-1-2-3-4-5-6-7-8-9 => 1 = ", myList.nthNodeFromEnd(9)); // 1
        logs.push("2nd node 0-1-2-3-4-5-6-7-8-9 => 0 = ", myList.nthNodeFromEnd(10));// 0
        logs.push("2nd node 0-1-2-3-4-5-6-7-8-9 => 8 = ", myList.nthNodeFromEnd(11));// `List does not have enough nodes`
    }

    { // Add two numbers represented by linked list

        
    }

    { //Delete node from Doubly Linked List. It can be at the start / in the middle somewhere / at the end.

        LinkedList.prototype.deleteNode = function(value) {
            
            let { head } = this;
            if(!head) return;

            var free = (node) => {
                node.prev = null;
                node.next = null;
                node.value = null;
            };

            //If given value node is a head node 
            if(head.value === value) {
                let oldHead = head;
                this.head = head.next;
                //If new head is not null
                if(this.head) {
                    this.head.prev = null;
                }
                free(oldHead);
                return;
            }
            
            //If given value node is a middle node or tail node
            let p = head;
            let q = head.next;
            while(q) {
                if(q.value === value) {
                    let nextNode = q.next;
                    p.next = nextNode;
                    //If nextNode exist , assign p to its prev.
                    if(nextNode) {
                        nextNode.prev = p;
                    }
                    //If given value node is a tail node
                    if(this.tail === q) {
                        this.tail = p;
                    }

                    free(q);
                    return;
                }
                p = p.next;
                q = q.next;
            }   
        }
        
        //First node
        myList.deleteNode(0);
        logs.push("Delete 0 from 1-2-3-4-5-6-7-8-9 = ", myList.print());
        // middle node 
        myList.deleteNode(3);
        logs.push("Delete 3 from 1-2-4-5-6-7-8-9 = ", myList.print());
        //last node 
        myList.deleteNode(9);
        logs.push("Delete 1 from 1-2-4-5-6-7-8 = ", myList.print());

    }

    { //Insert / add a node in Doubly Linked List

        LinkedList.prototype.addNodeAtStart = function (value) {
            const newNode = new Node(value);
            let { head } = this;
            if(!head) return;

            newNode.next = head;
            head.prev = newNode;
            this.head = newNode;
            return newNode.value;
        }

        LinkedList.prototype.addNodeAtEnd = function (value) {
            const newNode = new Node(value);
            let { head, tail } = this;
            if(!head) return;

            newNode.prev = tail;
            tail.next = newNode;
            this.tail = newNode;
            return newNode.value;
        }

        LinkedList.prototype.addNodeAfterNodeWithValue = function (value, newValue) {
            const newNode = new Node(newValue);
            let { head, tail } = this;
            if(!head) return;

            let p = head;
            while(p) {
                if(p.value === value){
                    let nextNode = p.next;
                    newNode.prev = p;
                    p.next = newNode;

                    newNode.next = nextNode;

                    if(nextNode) {
                        nextNode.prev = newNode;
                    }

                    if(this.tail === p) {
                        this.tail = newNode;
                    }

                    return newNode.value;
                }
                p = p.next;
            }

            return 'Node does not exist';
        }

       //First node
       myList.addNodeAtStart(0);
       logs.push("Add 0 from 0-1-2-4-5-6-7-8 = ", myList.print());
       // middle node 
       myList.addNodeAfterNodeWithValue(2, 3);
       logs.push("Add 3 from 0-1-2-3-4-5-6-7-8 = ", myList.print());
       //last node 
       myList.addNodeAtEnd(9);
       logs.push("Add 1 from 0-1-2-3-4-5-6-7-8-9 = ", myList.print());
        
    }

    { //Merge two sorted Linked Lists to form a new Sorted Linked List

        function mergeTwoSortedLinkedList(list1, list2) {
            let { head: p } = list1;
            let { head: q } = list2;
            if( !p && !q ) return;
            let mergedList, current;

            if (p.value < q.value) {
                mergedList = new LinkedList(p.value);
                p = p.next;
            } else {
                mergedList = new LinkedList(q.value);
                q = q.next;
            }

            current = mergedList.head;

            while (p || q) {
                // Case 1:- p and q both are not null
                    //Compare p.value and q.value 
                    //If p.node value is less 
                        //Assign p to current
                        //move p to next
                    //If q.node value is less
                        //Assign q to current
                        //move q to next
                // Case 2:- p is not null but q is null
                    // Connect P and current
                    // assign p.tail to mergedList.tail
                    // break the loop
                // Case 3:- p is null but q is not null
                    // Connect q and current
                    // assign q.tail to mergedList.tail
                    // break the loop

                if( p && q ) {
                    if (p.value < q.value) {
                        current.next = p;
                        p.prev = current;

                        current = current.next;
                        p = p.next;
                    } else {
                        current.next = q;
                        q.prev = current;

                        current = current.next;
                        q = q.next;
                    }
                } else if( p && !q ){
                    current.next = p;
                    p.prev = current;
                    mergedList.tail = list1.tail;
                    break;
                } else {
                    current.next = q;
                    q.prev = current;
                    mergedList.tail = list2.tail;
                    break;
                }

            }

            return mergedList;
        }

        var sortedList1 = new LinkedList(10);
        sortedList1.addNodeAtEnd(50);
        sortedList1.addNodeAtEnd(70);
        sortedList1.addNodeAtEnd(90);
        sortedList1.addNodeAtEnd(150);

        var sortedList2 = new LinkedList(20);
        sortedList2.addNodeAtEnd(30);
        sortedList2.addNodeAtEnd(40);
        sortedList2.addNodeAtEnd(60);
        sortedList2.addNodeAtEnd(80);

        logs.push("SortedList1 = 10-50-70-90-150 ", sortedList1.print());
        logs.push("SortedList2 = 20-30-40-60-80 ", sortedList2.print());

        var mergedList = mergeTwoSortedLinkedList(sortedList1, sortedList2);
        logs.push("MergedList = 10-20-30-40-50-60-70-80-90-150 ", mergedList.print());
        logs.push("MergedList head = 10 ", mergedList.head.value);
        logs.push("MergedList tail = 150 ", mergedList.tail.value);

    }






    logs.print();
})();