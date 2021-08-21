/*

Static array 
// fixed in size
// Need to set length of array ahead of time
- lookup O(1)
- push  O(1)
- insert O(n)
- delete O(n)


Dynamic array
// Allow copy and rebuild array at new location with increased in size.
- lookup  O(1)
- append* O(1). => Can be O(n) => If under the hood it is copying all elements and adding new element.
- insert O(n)
- delete  O(n)


// C++ 
int a[20];  // define the size of the array
int b[5] {1,2,3,4,5};

// Javascript ( High level language )
- We don't define size ahead 
- Auto sizing automaticall handled by JS ingine itself 


*/