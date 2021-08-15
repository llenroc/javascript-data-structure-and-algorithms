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

class HashTable {

    constructor(size) {
        this._size = size;
        this._storage = new Array(size);
        this._count = 0; 
    }
  
    simpleHash(str, tableSize) {
        var hash = 0;
        for (var i=0; i<str.length; i++) {
            hash += str.charCodeAt(i) * (i+1);
        }
        return hash % tableSize;
    }

    // This is a helper method that you may want to implement to help keep your code DRY
    // You can implement the hash table methods without it.
    // I recommend skipping it and coming back if you find that it will be useful

    //find hash(Index of an array) by passing the key
    find(key) {

    }

    _resize(newSize) {

    }

    /* myMap.set(key, value)
        => myMap object
        Store the key-value pair in the storage array.
        If the key already exists, replace stored value with new value.
        Use the hashing function to map the key to an integer and store the value at the corresponding index.
        Account for the possibility of collisions.  */ 
    set(key, value) {

    }

    // myMap.get(key)
    //  => value associated with key, or undefined if none
    get(key) {

    }

    // myMap.has(key)
    //  => true/false depending on if a value has been associated with the key
    has(key) {

    }

    // myMap.delete(key)
    //  => true if a value was associated with the key
    //  => false if a value was never associated with the key
    //  Remove any value associated to the key
    delete(key) {

    }

    // myMap.count()
    //     => integer number of key/value pairs in hash table
    count() {

    }

    // myMap.forEach(callbackFn)
    //     => no returned value
    //     Invokes callback function once for each key-value pair in the hash table
    forEach(callback) {

    }

}


var myMap = new HashTable(10);
console.log('should be HT object = ', myMap.set('key', 'value'));
console.log('count should be 0', myMap._count);
console.log('size should be 5', myMap._size);
myMap.set('foo', 'bar');
myMap.set('fooAgain', 'barAgain');
myMap.set('a', 1);
myMap.set('b', 2);
myMap.forEach(function(item){
    console.log("ForEach item = ", item);
});
console.log('count should be 4', myMap._count);
console.log('size should be 10 (doubled)', myMap._size);
myMap.delete('a');
console.log('count', myMap._count);
console.log('size', myMap._size);
myMap.delete('b');
console.log('count', myMap._count);
console.log('size should be 5 (halved)', myMap._size);

