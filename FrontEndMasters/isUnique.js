const isUnique = (arr) => { 
  let result = true;
  
  for (let i = 0; i < arr.length; i++) {
    console.log(`~~~~ OUTER LOOP ~~~~ i === ${i}`);

    for (let j = 0; j < arr.length; j++) {
      console.log(`~~~~ INNER LOOP ~~~~ j === ${j}`);
      if (i !== j && arr[i] === arr[j]) {
        result = false;
      }
    }
  }
  
  return result;
};

console.log(isUnique([1,2,3]) === true);
// console.log(isUnique([1,1,3]) === false);

// TC -> O(n^2)

console.log(`Time complexity of isUnique = O(n^2)`);
console.log("\n\n\n\n\n\n");

/********* Better solution ********* */

const isUnique1 = (arr) => {
  const breadcrumbs = {};
  let result = true;
  
  for (let i = 0; i < arr.length; i++) {
    console.log(`~~~~ LOOP ~~~~ i === ${i}`);
    if (breadcrumbs[arr[i]]) {
      result = false;
    } else {
      breadcrumbs[arr[i]] = true;
    }
  }
  
  return result;
};

console.log(isUnique1([1,2,3]) === true);
// console.log(isUnique1([1,1,3]) === false);

console.log(`Time complexity of isUnique1 = O(n)`);