[async await javascript youtube video](https://www.youtube.com/watch?v=PoRJizFvM7s)

https://www.geeksforgeeks.org/difference-between-promise-and-async-await-in-node-js/


https://betterprogramming.pub/should-i-use-promises-or-async-await-126ab5c98789


##. Promise 

> Promise is an object representing intermediate state of operation which is guaranteed to complete its execution at some point in future.

> Promise has 3 states – resolved, rejected and pending.

> If the function “fxn1” is to executed after the promise, then promise.then(fxn1) continues execution of the current function after adding the fxn1 call to the callback chain.

> Error handling is done using .then() and .catch() methods.

> Promise chains can become difficult to understand sometimes.

```
<script>
  const promise = new Promise(function (resolve, reject) {
    const string1 = "geeksforgeeks";
    const string2 = "geeksforgeeks";
    if (string1 === string2) {
      resolve();
    } else {
      reject();
    }
  });
  
  promise
    .then(function () {
      console.log("Promise resolved successfully");
    })
    .catch(function () {
      console.log("Promise is rejected");
    });
</script>

// Output - Promise resolved successfully
```

##. Async Await 

> Async/Await is a syntactic sugar for promises, a wrapper making the code execute more synchronously.

> It does not have any states. It returns a promise either resolved or rejected.

> If the function “fxn1” is to executed after await, then await X() suspends execution of the current function and then fxn1 is executed.

> Error handling is done using .try() and .catch() methods.

> Using Async/Await makes it easier to read and understand the flow of the program as compared to promise chains.

```
<script>
  const helperPromise = function () {
    const promise = new Promise(function (resolve, reject) {
      const x = "geeksforgeeks";
      const y = "geeksforgeeks";
      if (x === y) {
        resolve("Strings are same");
      } else {
        reject("Strings are not same");
      }
    });
  
    return promise;
  };
  
  async function demoPromise() {
    try {
      let message = await helperPromise();
      console.log(message);
    } catch (error) {
      console.log("Error: " + error);
    }
  }
  
  demoPromise();
</script>

// Output - Strings are same
```

