/*

HASH TABLE

1. Collection of key-value pairs.
2. Map keys to values for efficient lookup.
3. Use an array as the underlying data structure.
4. Hash table should have a size - this will be used by the hashing function to determine what index to map the key to.
5. A hashing function is used to map the key to an integer, which is the index that the value is to be stored at.
6. Since our hashing function might map multiple keys to the same integer, we have to deal with collisions by creating buckets at each index of the storage array. These buckets can be arrays or linked lists.


*** Note:

ES6 includes a Map data structure. It differs from the JavaScript object because the keys can be any value (not just strings like for objects), there is a size property, and there is a guaranteed order (the insertion order).

Hash tables are also referred to as hash mapse or dictionaries.


*** Operations:

myMap.set(key, value)
  => myMap object
  Store the key-value pair in the storage array.
  If the key already exists, replace stored value with new value.
  Use the hashing function to map the key to an integer and store the value at the corresponding index.
  Account for the possibility of collisions.  

myMap.get(key)
  => value associated with key, or undefined if none

myMap.has(key)
  => true/false depending on if a value has been associated with the key

myMap.delete(key)
  => true if a value was associated with the key
  => false if a value was never associated with the key
  Remove any value associated to the key

myMap.count()
  => integer number of key/value pairs in hash table

myMap.forEach(callbackFn)
  => no returned value
  Invokes callback function once for each key-value pair in the hash table


*** Additional Exercises:

Resize the hash table:
- if the count becomes greater than 75% of the table size, double the table size and redistribute the key/value pairs
- if the count becomes less than 25% of the table size, cut the table size in half and redistribute the key/value pairs

*/

/*
  Other resourec Reference link : - https://gist.github.com/alexhawkins/f6329420f40e5cafa0a4
*/

/* [
  <>,
  <>,
  ,,,,,,
  [{key1: value1}, {key2: value2}, {key2: value2} ],
  <>,
  <>
] */

(function() {
    let logs = new ConsoleLog("F_E_M_HashTable", false);
    
    // Simple hashing function to use in your implementation
    function simpleHash(str, tableSize) {
        var hash = 0;
        for (var i=0; i<str.length; i++) {
        hash += str.charCodeAt(i) * (i+1);
        }
        return hash % tableSize;
    };
    // source: http://pmav.eu/stuff/javascript-hashing-functions/source.html
    
    function HashTable(size) {
        // implement me...
        this._storage = [];
        this._size = size;
        this._count = 0;
    };
    
    // This is a helper method that you may want to implement to help keep your code DRY
    // You can implement the hash table methods without it.
    // I recommend skipping it and coming back if you find that it will be useful

    //find hash(Index of an array) by passing the key
    //find bucket from storage w.r.t hash 
        // if exists 
            //find the key, value pair from the bucket
        // else 
            //assign empty array
    HashTable.prototype.find = function(key) {
        // implement me...
        var hash = simpleHash(key, this._size);
        this._storage[hash] = this._storage[hash] || [];
        var bucket = this._storage[hash];
        var match, matchIndex;
        bucket.forEach(function(item, index) {
            if(item.hasOwnProperty(key)) {
                match = item;
                matchIndex = index;
            }
        });

        return {
            match: match,
            bucket: bucket,
            matchIndex: matchIndex
        };
    };

    HashTable.prototype._resize = function(newSize) {
        var oldStorage = this._storage;
        this._count = 0;
        this._size = newSize;
        this._storage = [];
        var that = this;
        oldStorage.forEach(function(bucket){
            bucket.forEach(function(item){
                var key = Object.keys(item)[0];
                that.set(key, item[key]);
            });
        });
    };
    

    //Find bucket and item in storage
        //if item exist 
            // update the value
        //else 
            //create new item and push to bucket
            //increment the count
    //resize storage if count reaches to 25% or 75% of the storage
    HashTable.prototype.set = function(key, value) {
        // implement me...
        var bucket = this.find(key).bucket;
        var match = this.find(key).match;
        if(match) {
            match[key] = value;
        } else {
            var newItem = {};
            newItem[key] = value;
            bucket.push(newItem);
            this._count++;

            if(this._count >  (this._size * .75)  ) { //double the capacity
                this._resize(this._size * 2);
            }
        }

        return this;
    }; 
    // Time complexity:

    var myMap = new HashTable(10);
    logs.push('should be HT object = ', myMap.set('key', 'value'));
    
    
    HashTable.prototype.get = function(key) {
        // implement me...
        var match = this.find(key).match;

        return match && match[key];
    }; 
    // Time complexity:
    logs.push('should be value', myMap.get('key'));
    // => value associated with key, or undefined if none
    
    HashTable.prototype.has = function(key) {
        // implement me...
        var match = this.find(key).match;

        return !!match;
    };
    // Time complexity:
    logs.push('should be true', myMap.has('key'));
    logs.push('should be false', myMap.has('foo'));
    // => true/false depending on if a value has been associated with the key
    
    HashTable.prototype.delete = function(key) {
        // implement me...
        var match = this.find(key).match;

        if(match) {
            var bucket = this.find(key).bucket;
            var matchIndex = this.find(key).matchIndex;
            bucket.splice(matchIndex, 1);
            this._count--;
            if(this._count <  (this._size * .25)) { // half the capacity
                this._resize(this._size * .5);
            }
        }
        return !!match;
    };
    // Time complexity:

    logs.push('should be true', myMap.delete('key'));
    logs.push('should be false', myMap.delete('foo'));
    logs.push('should have no elements', myMap);
    // => true if a value was associated with the key
    // => false if a value was never associated with the key
    // Remove any value associated to the key
    
    HashTable.prototype.count = function() {
        // implement me...
        return this._count;
    };
    // Time complexity:
    
    HashTable.prototype.forEach = function(callback) {
        // implement me...
        this._storage.forEach(function(bucket){
            bucket = bucket || [];
            bucket.forEach(function(item){
                callback(item);
            });
        });
    };
    // Time complexity:

    logs.push('count should be 0', myMap._count);
    logs.push('size should be 5', myMap._size);
    myMap.set('foo', 'bar');
    myMap.set('fooAgain', 'barAgain');
    myMap.set('a', 1);
    myMap.set('b', 2);
    myMap.forEach(function(item){
        logs.push("ForEach item = ", item);
    });
    logs.push('count should be 4', myMap._count);
    logs.push('size should be 10 (doubled)', myMap._size);
    myMap.delete('a');
    logs.push('count', myMap._count);
    logs.push('size', myMap._size);
    myMap.delete('b');
    logs.push('count', myMap._count);
    logs.push('size should be 5 (halved)', myMap._size);

    logs.print();
})();


  
  
  
  /*
  *** Exercises:
  
  1. Implement a hash table with a binary search tree.
  
  2. Given two arrays with values, return the values that are present in both. Do this in linear time.
  
  3. Implement a hash table using linked lists for collision-handling. Why might this be preferable to using arrays.
  
  */