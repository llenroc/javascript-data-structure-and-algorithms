//Exercise 1 -  Find 1st twwet and last tweet

// Lets assume tweets are stored in an array
const array = ["hi", "my", "teddy"];
array[0];  // O(1)
array[array.length -1 ];  // O(1)

// BigO = > O(1)



// Exercise 2 = What if each tweets has in an Object and has date in it.

const tweets = [
  {tweet: "hi", data: 2010},
  {tweet: "hi", data: 2012},
  {tweet: "hi", data: 2013},
  {tweet: "hi", data: 2014}
]

// We will have to compare each item to one another to get the oldest and 1st tweet. 
// WE will have to write nested tweet
//Big O = O(n^2);


// Exercise 3 = What would be BigO for 
"hgjhgdsjfgjkhagsdfjh".length

//In JavaScript length is a property attach to each string 
// BigO = O(1)

//Note - it depends upon coding language .. and length calculation logic