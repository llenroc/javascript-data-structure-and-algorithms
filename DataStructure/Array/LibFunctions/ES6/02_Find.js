//ES5
Array.prototype.myFind = function(callback, context) {
  let result;
  for(let i = 0; i<this.length; i++) {
    if(callback.call(context, this[i], i, this)){
      result =  this[i];
      break;
    }
  }
  return result;
}