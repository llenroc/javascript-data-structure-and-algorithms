//Find min and max price of a hotel

const hotels = [
  {price: 200, brand: "A"},
  {price: 50, brand: "A"},
  //..
  //..
  //..
  {price: 175, brand: "A"},
];

// Approach 1 - Compare all numbers to on another  (nested loop) -> n^2 or O(n^2)
// Approach 2 - Track min and max in a variable => 2n or O(n)
// Approach 3 - Sorted list, find first and last -> 2 or O(1)

