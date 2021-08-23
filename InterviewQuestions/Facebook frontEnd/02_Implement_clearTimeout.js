/*

Q2.  Implement clearAllTimeouts to clear all the timeout in the app.

window.setTimeout(fn1, wait);
window.setTimeout(fn2, wait);
window.setTimeout(fn3, wait);
window.setTimeout(fn4, wait);

function clearAllTimeouts() {

}

*/


// Solution link - https://stackoverflow.com/questions/8860188/javascript-clear-all-timeouts

const timeouts = [];
const originalTimeoutFn = window.setTimeout;

window.setTimeout = function(fun, delay) { //this is over-writing the original method
  const t = originalTimeoutFn(fn, delay);
  timeouts.push(t);
}

function clearTimeouts(){
  while(timeouts.length){
    clearTimeout(timeouts.pop());
  }
}