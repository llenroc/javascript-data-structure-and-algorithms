// ES6 Reference - https://davidwalsh.name/function-debounce
// ES5 Reference - https://davidwalsh.name/javascript-debounce-function
// ES5 Reference - https://davidwalsh.name/function-debounce
// The Difference Between Throttling and Debouncing

// https://medium.com/@griffinmichl/implementing-debounce-in-javascript-eab51a12311e

//ECMA 6
/* function Debounce(func, wait){
  let timeout;
  return function(...args){
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait); 
  }
} */

function Debounce(fn, wait) {
  let timeout;
  return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
          fn.apply(this, args);
      }, wait);
  }
}



//ECMA 5 
function debounce(fn,wait) {
  var timeout;
  return function(){
      var context = this,
          args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function() {
          fn.apply(context, args);
      }, wait);
  }
}


/*
Reference Link:- https://davidwalsh.name/javascript-debounce-function

1. Returns a function, that, as long as it continues to be invoked, will not
   be triggered. The function will be called after it stops being called for
   N milliseconds. 

2. If `immediate` is passed, trigger the function on the
   leading edge, instead of the trailing.

E.g:-

var myEfficientFn = debounce(function() {
	// All the taxing stuff you do
}, 250);

window.addEventListener('resize', myEfficientFn);

The function above will only fire once every quarter of a second instead of as 
quickly as it's triggered

*/

function _debounce(func, wait, immediate) {
  let timeout;
  return function(...args){
    const context = this;
    const later = () => {
      timeout = null;
      if(!immediate){
        func.apply(context,args);
      }
    }
    
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    
    if(callNow){
      func.apply(context,args);
    }
  }
}

(function() {
  function printLog(str){
    console.log(str);
  }

  const debounceInstance = Debounce(printLog, 200);
  debounceInstance("Debounce Some String - 1");
  debounceInstance("Debounce Some String - 2");
  debounceInstance("Debounce Some String - 3");
  //Output:- [_debounceInstance Some String - 3]
  
  const _debounceInstance = _debounce(printLog, 200);
  _debounceInstance("_debounceInstance Some String - 1");
  _debounceInstance("_debounceInstance Some String - 2");
  _debounceInstance("_debounceInstance Some String - 3");
  //Output:- [_debounceInstance Some String - 3]
  
  const _immediateInstance = _debounce(printLog, 200,true);
  _immediateInstance("_immediateInstance Some String - 1");
  _immediateInstance("_immediateInstance Some String - 2");
  _immediateInstance("_immediateInstance Some String - 3");
  //Output:- [_immediateInstance Some String - 1]
})();
  
