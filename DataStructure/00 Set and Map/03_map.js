console.log("Map");
// https://www.youtube.com/watch?v=ycohYSx5h9w
// https://www.youtube.com/watch?v=SjK9qU6oRVo

// JavaScript Object only hold one Object as key, if we add mutiple object as key to JS object, it remeber only the last one.
// Map story key, value pairs and can store multiple objects and key 


// Initalization
const myMap = new Map([['name','John'], ['surname', 'Doe']]);
console.log(myMap); // Map { 'name' => 'John', 'surname' => 'Doe' }


//Object issue 
const myObject = {};
const a = {};
const b = {};

myObject[a] = 'a';
console.log(myObject); // { '[object Object]': 'a' }

myObject[b] = 'b';
console.log(myObject); // { '[object Object]': 'b' } < Overwrite previous value



//Map - solution 
const myMap1 = new Map([[a,'a'], [b, 'b']]);
console.log(myMap1); // Map { {} => 'a', {} => 'b' }

// Add value 
const c = {};
myMap1.set(c, 'c'); // key as an object
myMap1.set("d", 'd'); // key as an string 
myMap1.set(5, 5); // key as an number 
myMap1.set([1,2,3,4], 5); // key as an number 

console.log(myMap1); // Map { {} => 'a', {} => 'b', {} => 'c', 'd' => 'd', 5 => 5, [ 1, 2, 3, 4 ] => 5 }

// Delete value 
myMap1.delete(a);
console.log(myMap1); // Map { {} => 'b', {} => 'c', 'd' => 'd', 5 => 5, [ 1, 2, 3, 4 ] => 5 } 

// has Value 
console.log(myMap1.has(a)); // false
console.log(myMap1.has(b)); // true

//size
console.log(myMap1.size); // 5

// clear
myMap1.clear();
console.log(myMap1); // Map {}
console.log("\n");



// Loops 
const myMap2 = new Map();
myMap2.set(a,'a').set(b, 'b').set(c, 'c');

// For - of loop
for(let value of myMap2) {
  console.log(value);
}
