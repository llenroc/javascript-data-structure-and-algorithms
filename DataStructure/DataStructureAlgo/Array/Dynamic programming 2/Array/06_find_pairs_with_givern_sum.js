// https://www.youtube.com/watch?v=s1xA_K1JReo&list=PLeIMaH7i8JDjd21ZF6jlRKtChLttls7BG&index=16&ab_channel=VivekanandKhyade-AlgorithmEveryDay

/*
 Step 1 - We need to sort array if it is not sorted 
 Step 2 - Apply below logic on sorted array 

*/

const testArray = [1,2,3,4,5,6,7,8,9,10];

function findPairsWithGivenSum(array, sum) {
  let left = 0;
  let right = array.length - 1;
  while(left < right) {
    const currentSum = array[left] + array[right];
    if(currentSum > sum ) {
      right--;
    } else if(currentSum < sum) {
      left++;
    } else {
      console.log(`Pair - {${left}, ${right}}`);
      left++;
    }
  }
}

findPairsWithGivenSum(testArray, 11);