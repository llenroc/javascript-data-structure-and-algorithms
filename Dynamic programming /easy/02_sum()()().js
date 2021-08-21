// https://www.thatjs.dev/post/sum1234-n-frontend-javascript-interview-question-ae2fa85f8a37d6dbfa116fc128ddf834/

// https://stackoverflow.com/questions/2272902/how-can-i-make-var-a-add23-5-work

function sum(a) {
  return function sum1(b) {
    return function sum2(c) {
      return a + b + c;
    }
  }
}

console.log(sum(1)(2)(3));

function sum1(a) {
  return (input) => {
    if(!input) {
      return a;
    } else {
      return sum1(a + input);
    }
  }
}

console.log(sum1(1)(2)(3)());


// Working solution but don't know how ?
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
console.log(add(10)(10)(1));      // 20