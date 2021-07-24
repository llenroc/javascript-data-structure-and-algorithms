/*
"~~~~~~~~~~~~Recursion~~~~~~~~~~~~~~"
1. Identify base case(s)
2. Identify recursive case(s)
3. Return where appropriate 
4. Write procedures for each case that bring you closer to the base case(s)


 Common pattern of recursion 
 1. Wrapper function 
 2. Accumulators


 */

/*
const callMyseld = () => {
  if() {
    // base case 
    return;
  } else {
    // recursive case 
    callMyself();
  }
  return;
}

 */




/*
//Example-1 - Stack overflow case
const callMe = () => {
  callMe();
  callMe();
  callMe("anytime");
}
*/

/*
//Example-2  - Stack overflow case
const callMe = () => {
  return callMe();
  callMe();
  callMe("anytime");
}
*/


//Example-3
let tracker = 0;
const callMe = () => {
  tracker++;
  if(tracker === 3) {
    return "loops";
  }
  return callMe("anytime");
}

console.log(callMe());



//Example-4
const loopNTimes = (n) => {
  console.log("n ===", n);
  if(n <=1 ) {
    return "complete";
  }

  return loopNTimes(n-1);
};

console.log(loopNTimes(3));
