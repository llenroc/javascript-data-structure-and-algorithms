// https://www.youtube.com/watch?v=hLgUTM3FOII

// Set is an unordered list where as Array is an order list
// You can access Set value through index.
// Set only contains distinct values



// Use Cases
// 1. Remove all the duplicates values of an array 


const myArray = [1,2,3,4,5,6,7];
const mySet = new Set(myArray);

console.log(myArray); //[ 1, 2, 3, 4, 5, 6, 7 ] 
console.log(mySet); // Set { 1, 2, 3, 4, 5, 6, 7 }



// Remove duplicate value from the array
const testArray = [1,2,2,1,6,1,3,4,5,5,5,2];
const mySet1 = new Set(testArray);

const uniqueValues = [...mySet1];
console.log(`Unique value`, uniqueValues);


//Add new value to Set
mySet1.add(7); // number 
mySet1.add('7'); // string 
mySet1.add({n: 7}); //Object
mySet1.add([8,9,10]); //Array
console.log(mySet1); 

//Delete value 
mySet1.delete(2);
console.log(mySet1); 


// has value 
console.log(mySet1.has(1)); // true
console.log(mySet1.has(2)); // false

// Size 
console.log(mySet1.size); // 9

//Clear value 
mySet1.clear();
console.log(mySet1);  // {}

