// https://www.youtube.com/watch?v=QZOLb0xHB_Q&list=PL2_aWCzGMAwLPEZrZIcNEq9ukGWPfLT4A&index=10&t=663s


// Scan str from 0 --> n 
// IF char is opening bracket '(' , { , [ ==> push in to stack 
// If char is closing bracket ), }, ] => pop top element and check stack top element 
// If not matching return false 
// After while loop, 
//    if stack is empty => return true
//    If stack is not empty ==> return false 


function balancedParentheses(str) {
  const stack = [];
 const pairs = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  for(let i = 0; i < str.length; i++) {
    const current = str[i];
    if(current === '(' || current === '{' || current === '[') {
      stack.push(current);
    }
    else if(current === ')' || current === '}' || current === ']') {
        // Top of the stack
        const top = stack[stack.length -1] || null;
        if(stack.length === 0 || pairs[top] !== current){
          return false;
        }
        // Remove the top elemnent from the top
        stack.pop();
    }
  }

  return stack.length === 0 ? true : false;

}

const testStr = '(){}[]';
const testStr1 = '(){}[}';
const testStr2 = ')()()()(';

balancedParentheses(testStr);
console.log(`(){}[] = ${balancedParentheses(testStr)} `);
console.log(`(){}[] = ${balancedParentheses(testStr1)} `);
console.log(`(){}[] = ${balancedParentheses(testStr2)} `);