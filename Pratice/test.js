function sum(a) {
  return function sum1(b) {
    return function sum2(c) {
      return a + b + c;
    }
  }
}

console.log(sum(1)(2)(3)); // 6

function sum1(a) {
  return (input) => {
    if(!input) {
      return a;
    } else {
      return sum1(a + input);
    }
  }
}

console.log(sum1(1)(2)(3)()); // 6


// function add(a,b){
//         var proxy = function (b){return a+b;};
//         if(typeof b =='undefined'){
//             return proxy;
//         }else{
//             return proxy(b);
//         }
//     }

// console.log(add(2)(3)); // 5
// console.log(add(2,3)); // 5
// console.log(add(2)(3)(1));


function add(n) {
  sum = n;
  const proxy = new Proxy(function a () {}, {
    get (obj, key) {
      return () => sum;
    },
    apply (receiver, ...args) {
      sum += args[1][0];
      return proxy;
    },
  });
  return proxy
}

console.log(add(1)(2)(3)(10));    // 16
console.log(add(10)(10)(1));         // 20