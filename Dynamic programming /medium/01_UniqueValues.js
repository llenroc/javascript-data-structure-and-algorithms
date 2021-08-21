//Unique Value - approach 3 - Use Set
function unique3(getArray = []) {
    let setData = new Set(getArray);
    return [ ...setData ];
}


//Unique Value - approach 1
function unique(getArray) {
  return getArray.reduce((result, current) => {
    if(!result.find(value => current === value)) {
      result.push(current);
    }
    return result;
  },[]);
};

(function(){
  const logs = new ConsoleLog("Unique", false);
  const valueArray = [1,1,2,2];

  //Unique Value - approach 2
  logs.push(`Appraoch-2 [${valueArray}] = `, valueArray.reduce((result, value) => {
    if(result.indexOf(value) == -1) {
      result.push(value);
    }
    return result;
  },[])); // [1,2]

  logs.push(`Appraoch-1 [${valueArray}] = `, unique(valueArray)); // [1,2];
  
  logs.push(`Appraoch-3 [${valueArray}] = `, unique3(valueArray)); // [1,2];
  logs.print();
})();


/* ~~~~~~~~~~~~~~ */
// https://stackoverflow.com/questions/1960473/unique-values-in-an-array 


