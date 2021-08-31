
// Create a stack 
// Run a loop from 0 -> n-1
// If charAt(i) is (, {, [ .. push to the stack.
// if charAt(i) is ), }, ] pop the stack and compare with map value
 
var isValid = function(s) {
  if(!s) return true;
  const map = new Map();
  const stack = [];
  map.set(')', '(').set('}', '{').set(']', '[');

  for (let i = 0; i < s.length; i ++) {
    // console.log(`char = ${s[i]}, stack = ${stack}`);
    const char = s[i];
    if(map.has(char)) {
      const pop = stack.pop();
      if(map.get(char) !== pop) return false;
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0 ? true : false;  
};

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true
console.log(isValid("[")); // false
console.log(isValid("((")); // false