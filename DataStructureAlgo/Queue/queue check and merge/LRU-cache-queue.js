// https://replit.com/@bgando/LRU-cache-queue?v=1

/* 
LRU cache
limit in size
two methods, get(key) & put(key,value)
if go over the size, kick out the least recently used (oldest) item
*/

var LRUCache = function(size) {
  this._storage = {};
  this._queue = []; //doubly ll is better
  this._maxSize = size;
};

LRUCache.prototype.get = function(key) {
  this.updateMostRecent(key);
  return this._storage[key];
};

LRUCache.prototype.updateMostRecent = function(key) {
  
  if (this._storage[key] !== undefined) {
    var keyIndex = this._queue.indexOf(key);
    this._queue.splice(keyIndex, 1);
  }

  this._queue.push(key);

}


LRUCache.prototype.put = function(key, value) {
  
  //full, remove
  if (this._queue.length === this._maxSize) {
    var oldestKey = this._queue.shift();
    delete this._storage[oldestKey];
  }
  
  this.updateMostRecent(key);

  //basic case
  this._storage[key] = value;
  
};


var myCache = new LRUCache(2); 

myCache.put('one', 0);
console.log(myCache)
myCache.put('two', 2);
console.log(myCache)
myCache.put('one', 11);
console.log(myCache)
myCache.get('two', 2);

