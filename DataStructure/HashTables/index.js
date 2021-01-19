console.log("hash table");

/*
JavaScript Objects are hash table 

1. Insert = O(1)
2. Lookup = O(1) //. In case of collision => O(n/k) ( where k = constant) => O(n)
3. delete = O(1)
4. search = O(1)


1. Fast lookups * ( Good collision resolution needed )
2. Fast inserts 
3. Flexible Keys 
4. Unordered 
5. Slow key iteration 


ES5
key should be only string 


ES6
Two new data types 
//Map 
  --> Gives you some order
  --> key can be of any order 
//Set 
  --> No duplicate keys
  --> it stores only value 


const a = new Map();
const b = new Sets();


*/

let user = {
  age: 50,
  name: "Coder",
  hasMagic: true,
  scream: () => {
    console.log("Ahhhhhhhh!");
  }
}

console.log(user.age); // lookup O(1)
user.spell = "Abra ka daabra"; // insertion O(1)
console.log(user.spell); 
user.scream(); // O(1)

