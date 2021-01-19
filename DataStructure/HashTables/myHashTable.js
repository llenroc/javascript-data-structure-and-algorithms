/*
Thought process

1. hash map is providing the index loaction on which we need to store elements 
2. We might need to store multiple set at same index.
3. lookup should be O(1)
[
  <>,
  <>,
  ,,,,,,
  [[], [] [] ],
  <>,
  <>
]


// For keys()
1. find all the filled location 
2. collect the keys 

*/

class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key, value) {
    const address = this._hash(key);
    if(!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key,value]);
  }

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address]; // O(1)
    if (currentBucket.length) {
      for ( let i = 0;  i < currentBucket.length; i++ ) { // O(n)
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() { // O(n2)
    const keyArray = [];
    // loop through all the data elements 
    for( let i = 0; i < this.data.length; i++) { // O(n)
      const currentBucket = this.data[i];
      // check for all elements in each bucket
      if(currentBucket && currentBucket.length > 0) {
        for (let j = 0; j < currentBucket.length; j++) { // O(n)
          keyArray.push(currentBucket[j][0]);
        }
      }
    }
    return keyArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000) //  should be O(1)
console.log(myHashTable.get('grapes')); // should be O(1)
myHashTable.set('apples', 9);
console.log(myHashTable.get('apples'));
console.log(myHashTable);
console.log(myHashTable.keys()); // O(n2)