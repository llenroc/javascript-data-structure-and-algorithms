
/*

Array 
 
1. lookup -> O(1)   //As we give direct memory index for lookup
2. push -> O(1) // Push will be at the end, so index is fixed
3. pop -> O(1) // Pop will be from the end, so index is fixed
4. insert -> O(n) // Because it will have to reIndex the whole array based on position of insertion
5. delete --> O(n) // Because it will have to reIndex the whole array based on position of deletion

6. Array.splice(position from where to start,  number of elements to be deleted from that position, items to be inserted from the position)


// Pros
1. Fast lookup
2. fast push & pop
3. Ordered

//cons
1. Slow insertion
2. Slow deletion 
3. Fixed size ( If using static array)


*/ 

const strings= ['a', 'b', 'c', 'd'];
const numbers = [1,2,3,4,5];
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.


//push
strings.push('e'); // O(1)

//pop
strings.pop(); // O(1)
strings.pop(); // O(1)

//unshift
strings.unshift('x') // O(n)

//splice
strings.splice(2, 0, 'alien'); // O(n)

console.log(strings)