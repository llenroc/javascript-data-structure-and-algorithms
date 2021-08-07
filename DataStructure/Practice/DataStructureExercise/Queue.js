/*
Reference Link :- https://code.tutsplus.com/tutorials/data-structures-with-javascript-whats-a-data-structure--cms-23347
*/

// Practicle example of Queue :-  event-loop of a browser 

function Queue() {
    this._oldIndex = 1;
    this._newIndex = 1;
    this._storage = {}; 
}

Queue.prototype.size = function() {
    return this._newIndex - this._oldIndex;
}

//To add new object into the queue
Queue.prototype.enqueue = function(data) {
    this._storage[this._newIndex] = data;
    this._newIndex++;
}

//To delete the oldest data from the Queue
Queue.prototype.dequeue = function() {
    var oldIndex = this._oldIndex,
        newIndex = this._newIndex,
        deletedItem;

        if( newIndex !== oldIndex ) {
            deletedItem = this._storage[oldIndex];
            delete this._storage[oldIndex];
            this._oldIndex++;

            return deletedItem;
        }
};

(function() {
    const logs = new ConsoleLog("Queue", false);

    const myQueue = new Queue();

    logs.push("initial Queue", myQueue);
    
    myQueue.enqueue("Some Text inserted");
    myQueue.enqueue("Some other Text inserted");
    logs.push("After insertion", myQueue);

    myQueue.dequeue();
    logs.push("After deleting", myQueue);
    
    logs.print();   
})();
