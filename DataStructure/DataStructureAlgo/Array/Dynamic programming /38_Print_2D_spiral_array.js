// https://www.youtube.com/watch?v=siKFOI8PNKM&list=PL2_aWCzGMAwLPEZrZIcNEq9ukGWPfLT4A&index=5

/*
  
    [[2,  4,  6,  8]
     [5,  9, 12, 16]
     [2, 11,  5,  9]
     [3,  2,  1,  8]]

Top = t
Bottom = b
Left = l 
Right = r
*/

const matrix = [[2,  4,  6,  8],
                [5,  9, 12, 16],
                [2, 11,  5,  0],
                [3,  2,  1,  8]];

function printSpiral(array, m, n) {
  let t = 0;
  let b = m-1;
  let l = 0;
  let r = n-1;
  let dir = 0;
  let str = '';
  while (t <= b && l <= r ) {
    if(dir === 0 ) {
      for(let k = l; k<= r; k++) str = `${str}, ${array[t][k]}`;
      t++;
    } else if(dir === 1) {
      for(let k = t; k<= b; k++) str = `${str}, ${array[b][k]}`;
      r--;
    } else if(dir === 2) {
      for(let k = r; k >= l; k--) str = `${str}, ${array[b][k]}`;
      b--;
    } else if(dir === 3) {
      for(let k = b; k >= t; k--) str = `${str}, ${array[k][l]}`;
      l++;
    }
    dir = (dir+1)%4;
   };

   console.log(str);
}

printSpiral(matrix, 4, 4); 