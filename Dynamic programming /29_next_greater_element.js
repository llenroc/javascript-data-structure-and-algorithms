//https://www.youtube.com/watch?v=uFso48YRRao&list=PLeIMaH7i8JDjd21ZF6jlRKtChLttls7BG&index=13&ab_channel=VivekanandKhyade-AlgorithmEveryDay

const testArray = [5, 3, 2, 10, 6, 8, 1, 4, 12, 7, 4];

function nextGreaterElement(array) {
  const stack = [array[0]];
  let i = 1;
  while( i < array.length) {
    if(array[i] < stack[stack.length - 1]) {
      stack.push(array[i]);
    } else {
      while (stack.length) {
        const top = stack.pop();
        console.log(`${top} --> ${array[i]}`);
      }
      stack.push(array[i]);
    }

    console.log(`i = ${i}, stack = ${stack}`);
    i++;
  }
}

nextGreaterElement(testArray);