// Imperative code - You give instruction to computer what to do something.
// Declaritive code - You tell the compute what should be the output ( Best approach for more readable code)


// Arrow function 

function foo() {
  return 2;
}

foo = x => 2;

// variations 
=> 3
() => 3
x => 3
(...x) => 3 
(x,y) => 3
x => { try { 3; } catch(e) {} }
x => { return 3; }
x => ({ y: x });  // returning object 


// 1. Arrow functions are anonymous  
// 2. They are difficult to debug and find in call trace 


var foo = x => 3;
foo.name; // "foo"

foo( x => 3 ) // Inner arrow function does not have a name 

 
// Example 2 
p.then( function(v) { return v.id } ) // If v is undefined , it will give error , and call stack will show anonymous function 

p.then( function extractId(v) { return v.id } ) 

p.then( v => v.id )



// Issue with normal function 
var obj = {
  id: 42,
  foo: function foo() {
    setTimeout(function() {
      console.log( this.id );
    }, 100);
  }
}

obj.foo(); // Will give refrence error 

// ~~~~~~~~ option 1 
var obj = {
  id: 42,
  foo: function foo() {
    setTimeout(function() {
      var self = this;
      console.log( self.id );
    }, 100);
  }
}

obj.foo(); // 42


// ~~~~~~~~ option 2 - better variable name ()
var obj = {
  id: 42,
  foo: function foo() {
    setTimeout(function() {
      var context  = this;
      console.log( context.id );
    }, 100);
  }
}

obj.foo(); // 42

// ~~~~~~~~ option 3 - but actual it should be like below
var obj = {
  id: 42,
  foo: function foo() {
    setTimeout(function() {
      console.log( this.id );
    }.bind(this), 100); // Change is in this line 
  }
}

obj.foo(); // 42



// ~~~~~~~~ option 4 - with arrow function 
var obj = {
  id: 42,
  foo: function foo() {
    setTimeout(() => {
      console.log( this.id );
    }, 100);
  }
}

obj.foo(); // 42




// ~~~~~~~~ Don't get crazy to make it un readable 

function foo(x) {
  if(x > 5) return x;
  else return 1;
}

var foo = x => x > 5 ? x : 1;



// ~~~~~~~~   Exercise - arrow function 
// ex0









