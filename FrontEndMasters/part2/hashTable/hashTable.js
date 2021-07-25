/** Class representing a Hash Table */

class HashTable {

  constructor(size) {
    this._size = size;
    this._storage = new Array(size);    
  }
  /*
  * Inserts a new key-value pair
  * @param {string} key - the key associated 
  * with the value
  * @param {*} value - the value to insert
  */
  insert(key, value) { // O(1)
    const hash = this._hash(key, this._size);
    console.log(`this._size = ${this._size}, this._hash = ${hash}`);
    const current = this._storage[hash];
    if (current) {
      this._storage[hash].push({[key]: value});
    } else {
      this._storage[hash] = [{[key]: value}];
    }
  }
  /*
  * Deletes a key-value pair
  * @param {string} key - the key associated with the value
  * @return {*} value - the deleted value
  */
  remove(key) { // O(1)
    const hash = this._hash(key, this._size);
    const hashValues = this._storage[hash];
    if (hashValues && hashValues.length > 0) {
      let i = 0;
      while (i < hashValues.length) {
        if(hashValues[i][key]) {
          break;
        }
        i++;
      }
      if (i !== hashValues.length) {
        const value = hashValues[i][key];
        this._storage[hash].splice(i, 1);
        return value;
      }
    }
  }
  /*
  * Returns the value associated with a key
  * @param {string} key - the key to search for
  * @return {*} - the value associated with the key
  */
  retrieve(key) { // O(1)
    const hash = this._hash(key, this._size);
    const hashValues = this._storage[hash];
    if (hashValues) {
      let i = 0;
      while (i < hashValues.length) {
        if(hashValues[i][key]) {
          break;
        }
        i++;
      }
      if (i !== hashValues.length) {
        return hashValues[i];
      }
    }
  }  
  /*
  * Hashes string value into an integer that can be mapped to an array index
  * @param {string} str - the string to be hashed
  * @param {number} n - the size of the storage array
  * @return {number} - an integer between 0 and n
  */
  _hash(str, n) {
    let sum = 0;
    for (let i = 0; i < str.length; i++)
        sum += str.charCodeAt(i) * 3

    return sum % n;
  }
}

const myHT = new HashTable(15);
myHT.insert("fName", "Sameer");
myHT.insert("lName", "Kumar");
myHT.insert("fullName", "Sameer Kumar");
myHT.insert("fullName", "Sameer Kumar");

console.log(" myHT.retrieve('fullName') = ", myHT.retrieve("fullName"), "\n");

console.log("myHT.remove('fullName') = ", myHT.remove("fullName"), "\n");
// console.log("myHT.remove('fullName') = ", myHT.remove("fullName"), "\n");
// console.log("myHT.remove('fullName') = ", myHT.remove("fullName"), "\n");

console.log("myHT = ", JSON.stringify(myHT._storage), "\n");
