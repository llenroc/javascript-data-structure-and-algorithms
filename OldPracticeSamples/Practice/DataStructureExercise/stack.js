/*
Reference Link :- https://code.tutsplus.com/tutorials/data-structures-with-javascript-whats-a-data-structure--cms-23347
*/


function Stack() {
  this._size = 0;
  this._storage = {};
};

Stack.prototype.push = function(data){
  var size = ++this._size;
  this._storage[size] = data;
};

Stack.prototype.pop = function(){
  var deletedItem, 
      size = this._size;

  if(size) {
    deletedItem  = this._storage[size];
    
    delete this._storage[size];
    this._size--;

    return deletedItem;
  } 
};

(function() {
  const logs = new ConsoleLog("Stack", false);

  var myStack = new Stack();
  logs.push("initial stack", myStack);

  myStack.push("My Name is Sameer");
  myStack.push("Mein duniya mein akela hun");
  logs.push("Stack after adding", myStack);

  myStack.pop();
  logs.push("Stack after adding", myStack);

  myStack.pop();
  myStack.pop();
  myStack.pop();
  logs.push("Stack after adding", myStack);

  logs.print();
})();


