/*
Q1:- What is event bubbling and event delegation explain and give example
Q2 - Below Foo question 
Q3 - What is Accessibility ? How do you explain this ? What all situtaions you have implememnted it ? What are some syntax ?
Q3 - Implement memoize function 
Q4 - Implement toolTip on link hoover 

*/


// ------ Question 2 ------

var Foo = function( a ) { 
  function bar () {   
    return a; 
  };
  this.baz = function() {   
    return a; 
  };
};
 
Foo.prototype = {
  biz: function() {    
    return a; 
  }
};
 
var f = new Foo( 7 );
f.bar(); // output ?? // bar does not exist 
f.baz(); // output ?? // 7
f.biz(); // output ?? // a is not defined


// --------- Final answer
var Foo = function( a ) { 
  this.a = a;
  this.bar = function() {   
    return a; 
  };
  this.baz = function() {   
    return a; 
  };
};
 
Foo.prototype = {
  biz: function() {    
    return this.a; 
  }
};

var f = new Foo( 7 );
f.bar(); // 7
f.baz(); // 7
f.biz(); // 7