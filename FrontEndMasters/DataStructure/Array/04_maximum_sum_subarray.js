// https://www.youtube.com/watch?v=kekmCQXYwQ0&ab_channel=VivekanandKhyade-AlgorithmEveryDay

/* ~~~~~~~~~~~~~ Kadane's Algorithm ~~~~~~~~~ */

const testArray = [4, -3, -2, 2, 3, 1, -2, -3, 4, 2, -6, -3, -1, 3, 1, 2 ]


function minimumSumSubArray(array) {
  let max_so_far = array[0];
  let max_ending_here = 0;
  let start = 0, end = 0, s = 0;
  
  for(let i = 0; i < array.length; i++) {
    max_ending_here = max_ending_here + array[i];
    if(max_ending_here > max_so_far) {
      max_so_far = max_ending_here;
      start = s;
      end = i;
    }
    if(max_ending_here < 0) {
      max_ending_here = 0;
      s = i + 1;
    }
  }
  console.log(`max_so_far = ${max_so_far}`);
  console.log(`start = ${start}, end = ${end}`);
}

minimumSumSubArray(testArray);
