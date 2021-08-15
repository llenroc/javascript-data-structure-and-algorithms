// Example 1 - Wrapper function
function wrapperFnLoop(start, end) {
  function recurse(i) {
    console.log(`looping from ${i} until ${end}`);

    if(i < end) {
      recurse(i + 1);
    }
  }

  recurse(start);
}


// Example 2 - Accumulator
function MemoFnLoop(i, end) {
  console.log(`looping from ${i} until ${end}`);
  if(i < end) {
    MemoFnLoop(i + 1, end);
  }
}

console.log('~~~ wrapperFnLoop ~~~')
wrapperFnLoop(1,5);
console.log('~~~ MemoFnLoop ~~~')
MemoFnLoop(1, 6);


// Example 3 - Accumulator
function joinElementsAccumulator(array, joinString) {

  function recurse(index, resultSoFar) {
    resultSoFar += array[index];

    if(index === array.length - 1) {
      return resultSoFar;
    } else {
      return recurse(index + 1, resultSoFar + joinString);
    }
  }

  return recurse(0, '');
}

console.log("--- recursion --- ", joinElementsAccumulator(['s','cr','t cod', ' :) :)'], 'e'));


// Task: rewrite this function so that it uses a loop rather than recursion

function joinElementsLoop(array, joinString) {

 let result = "";
 for(let index = 0; index < array.length -1; index++) {
   result = `${result}${array[index]}${joinString}`;
 }
 return result + array[array.length - 1]; // Do not forgot last :) :) part.
}

console.log("--- Loop --- ", joinElementsLoop(['s','cr','t cod', ' :) :)'], 'e'))