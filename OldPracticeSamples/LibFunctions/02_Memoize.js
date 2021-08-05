function memoize(fn) {
  let cache = {};
  return (...args) => {
    if(!cache[JSON.stringify(args)]){
      cache[JSON.stringify(args)] = fn.apply(this, args);
    }
    return cache[JSON.stringify(args)];
  }
}

(function(){
  const logs = new ConsoleLog("memoize", false);

  function Adder(n){
    logs.push(`Calculating....`, {});
    return n+10;
  }
  
  const Adder10 = memoize(Adder);
  logs.push("Call for 5", Adder10(5));
  logs.push("Call for 6", Adder10(6));
  logs.push("Call for 5", Adder10(5));
  logs.push("Call for 5", Adder10(5));
  logs.push("Call for 5", Adder10(5));
  logs.push("Call for 5", Adder10(5));
  logs.push("Call for 15", Adder10(15));

  logs.print();
})();


//output :- 
// Calculating....
// Call for 5 = 15
// Calculating....
// Call for 6 = 16
// Call for 5 = 15
// Call for 5 = 15
// Call for 5 = 15
// Call for 5 = 15
// Calculating....
// Call for 15 = 25
