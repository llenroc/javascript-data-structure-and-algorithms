//ES5 
Array.prototype.myEvery = function (callback, context){
  for(let i = 0; i < this.length; i++) {
    if(!callback.call(context, this[i], i, this)){
      return false;
    }
  }
  return true;
};




const allNumberAbove10 = [11,12,25,15];
const numberArray = [5,7,10,2,25,15];

const test1 = allNumberAbove10.myEvery(function(value){
  return value > 10;
});
const test2 = numberArray.myEvery(function(value){
  return value > 10;
});


console.log(`test1 = ${test1}`);
console.log(`test2 = ${test2}`)

console.log("\n")
