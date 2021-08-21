### Difference between call and apply and bind

[Refrence link - Difference between Call, apply and bind](https://stackoverflow.com/questions/1986896/what-is-the-difference-between-call-and-apply)

#### `Apply()` :- lets you invoke the function with arguments as an array
	
#### `Call()`:-  requires the parameters be listed explicitly
	
#### `Call/apply` call the function immediately
	
#### `bind`  returns a function that when later executed will have the correct context set for calling the original function. 
	
Eg-1 :-    

```
  theFunction.apply(valueForThis, arrayOfArgs)
  theFunction.call(valueForThis, arg1, arg2, ...)
    
    
  function theFunction(name, profession) {
      alert("My name is " + name + " and I am a " + profession + ".");
  }
  
  theFunction("John", "fireman");
  theFunction.apply(undefined, ["Susan", "school teacher"]);
  theFunction.call(undefined, "Claude", "mathematician");
```

Eg-2 :- 

They all attach `this` into function ( or object ) and the `differences is in the function invocation` (see below).

#### `Call` attaches `this` into function and executes the function immediately. 


```
  const person = {
    name: "Sameer Kumar",
    hello: function(thing) {
      console.log(`${this.name} says hello ${thing}`);
    }
  }

  person.hello.call(person, "world"); // Sameer Kumar says hello world

```

#### `bind` attaches `this` into function and it needs to be invoked separately like this.

```
const person = {
  name: "Sameer Kumar",
  hello: function(thing) {
    console.log(`${this.name} says hello ${thing}`);
  }
}

const helloFunc =  person.hello.bind(person);
helloFunc("world"); // Sameer Kumar says hello world

```

#### `apply` is similar to `call` except that it takes an array-like object instead of listing the arguments out one at a time:

```
function personContainer() {
  const person = {
    name: "Sameer Kumar",
    hello: function(thing) {
      console.log(`${this.name} says hello ${arguments[0]}`);
    }
  }
  person.hello.apply(person, arguments);
}
personContainer("world", "mars"); // Sameer Kumar says hello world
```

### Note ### 

This allows to set the value for `this` independent of how the function is called. This is very useful when working with callbacks.


```
function sayHello() {
  alert(this.message);
}

const obj = {
  message: "hello"
};

setTimeout(sayHello.bind(obj),  1000);
```

To achieve the same result with `call` would look like this :- 

```
function sayHello() {
  alert(this.message);
}

const obj = {
  message: "hello"
}

setTimeout(function() {
  sayHello.call(obj);
}, 1000);


