/*
Create a function that reverse a string 
 
Input - My name is Sameer
Output - reemaS si eman yM.

*/

// Solutions 1
function reverse(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Not a valid string to reverse"
  }
  str = str.split('');
  let start = 0;
  let end = str.length - 1;
  while(start < end ) {
    const temp = str[end];
    str[end] = str[start];
    str[start] = temp;
    start++;
    end--;
  }
  return str.join('');
}

console.log(reverse("My name is Sameer"));


// Solution 2 
function reverse1(str) {
  return str.split('').reverse().join('');
}

console.log(reverse1("My name is Sameer"));

// Solutions 3
const reverse2 = (str) => str.split('').reverse().join('');
console.log(reverse2("My name is Sameer"));

// Solutions 4 
const reverse3 = (str) => [...str].reverse().join('');
console.log(reverse3("My name is Sameer"));