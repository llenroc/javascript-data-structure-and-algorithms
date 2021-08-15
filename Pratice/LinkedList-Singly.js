/*
Reference Link :- https://code.tutsplus.com/tutorials/data-structures-with-javascript-whats-a-data-structure--cms-23347
*/

function Node(value) {
    this.data = value;
    this.next = null;
};

function SinglyLinkedList() {
    this._length = 0;
    this.head = null;
};

SinglyLinkedList.prototype.add = function(value) {
    var newNode = new Node(value),
        currentNode = this.head;
    
    if(!currentNode) {
        this.head = newNode;
        this._length++ ;

        return newNode;
    }

    while(currentNode.next) {
        currentNode = currentNode.next;
    }

    currentNode.next = newNode;
    this._length++;
    return newNode;
};

SinglyLinkedList.prototype.searchNodeAt = function(position) {
    var currentNode = this.head,
    count = 1,
    message = {failure: 'Failure: non-existant node in the list'},
    length = this._length;

    if(length === 0 || position < 1 || position > length) {
        return message.failure;
        //throw new Error(message.failure);
    }

    while(count < position) {
        currentNode = currentNode.next;
        count++;
    }

    return currentNode;
};

SinglyLinkedList.prototype.remove = function(position) {
    var currentNode = this.head,
    count = 0,
    length = this._length,
    message = {faliure: 'Failure: non-existant node in the list'},
    beforeNodeToDelete = null,
    nodeToDelete = null,
    deletedNode = null;

    if(position < 0 || position > length) {
        return message.faliure;
        //throw new Error(message.faliure);
    }

    if(position === 1) {
        this.head =  currentNode.next;
        deletedNode = currentNode;
        currentNode = null;
        this._length--;

        return deletedNode;
    }

    while(count < position) {
        beforeNodeToDelete = currentNode;
        nodeToDelete = currentNode.next;
        count++;
    }

    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this._length--;

    return deletedNode;
};

(function() {
    const logs = new ConsoleLog("SinglyLinkedList", false);

    const myLinkedList = new SinglyLinkedList();

    logs.push("initial list", myLinkedList);
    
    myLinkedList.add("Some Text inserted");
    myLinkedList.add("Some other Text inserted");
    logs.push("After insertion", myLinkedList);


    logs.push("Item at position 1", myLinkedList.searchNodeAt(1));
    logs.push("Item at position 2", myLinkedList.searchNodeAt(2));

    logs.push("Remove item at 2 position", myLinkedList.remove(2));
    logs.push("After deletion", myLinkedList);

    logs.push("Remove item at 2 position", myLinkedList.remove(2));
    logs.push("Find item at 2nd position", myLinkedList.searchNodeAt(2));
        
    logs.print();   
})();