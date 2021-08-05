<html>
  <head>
    <style>
      body {
        background-color: #1d2126;
        color: white;
      }
    </style>
  </head>
  <body>
    <h1>Hello, World</h1>
    <label for="numberArray" />
    <input id="numberArray">
    <button onclick="onSubmit()" action="button">Submit</button>
    <span id="result"></span>
    
    <script>
      const myInput = document.getElementById('numberArray');
      const result = document.getElementById('result');
      
      function onSubmit() {
        //console.log(myInput.value.split(','));
        console.log(`result is  ${getMissingNumber(myInput.value.split(','))}`);
        result.innerHtml = `result is  ${getMissingNumber(myInput.value.split(','))}`;
      }
      
      function getMissingNumber (getArray) { 
          console.log(getArray);
        
          const getSum = getArray.reduce( (sum, item) => {
            //sum += Number(item);          
            return sum ^ Number(item);
          }, 0);
        
        const getSum = getArray.reduce( (sum, item) => {
            //sum += Number(item);          
            return sum ^ Number(item);
          }, 0);
               
        //n(n+1) /2
        const len = getArray.length;
        const totalSum =  (len*(len+1)) / 2 ;  
        console.log(getSum, totalSum, getSum ^ totalSum);
        return  totalSum - getSum;
          
      }
    </script>
  </body>
</html>

<!--
Write a function that takes in an int array. Whos lenght is N and this array must contain the numbers from [0,N] so if N=5 then you can get [1,0,5,3,4] and missing number is 2.

[0,1,3,4,5]
Write a function that given an array returns the missing number.

UI add an input, a button that pressed returns the missing number. The format of the input 1,0,5,3,4 and prints the missing number.


Input          |    Expected
[]             |     0  
[-1, 0 , 1]     |  [ 2 ]


-->