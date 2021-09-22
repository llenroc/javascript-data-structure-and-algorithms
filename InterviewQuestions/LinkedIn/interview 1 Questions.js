/*
Q1:- What is event bubbling explain and give example
Q2:- What are difference between GET and POST
Q3:- Name other AJAX method and purposes
Q4:- What is difference between callback and promises 

*/


// ------ Question 1 ------

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


// Sameer 
function Foo (a) {
    this.a = a;
    this.baz = function(){
        return this.a;
    }
}

Foo.prototype.bar = function() {
    return this.a;
}


// Interviewer correction 

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




// ------ Question 2 ------

// Given
var endorsements = [
  { skill: 'css', user: 'Bill' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'html', user: 'Sue' }
];
 
// Result
[
  { skill: 'javascript', user: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
  { skill: 'css', user: [ 'Sue', 'Bill' ], count: 2 },
  { skill: 'html', user: [ 'Sue' ], count: 1 } 
]; 


//Input
var endorsements = [
  { skill: 'css', user: 'Bill' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'html', user: 'Sue' }
];

function getResults(endorsements) {
  const resultSet =  endorsements.reduce( (output, item ) => {
              if(output[item.skill]) {
                  output[item.skill] = [...output[item.skill], item.user];
              } else {
                  output[item.skill] = [item.user];
              }
              return output;
          }, {});

  const result = [];
  for (let key in  resultSet) {
    if(resultSet.hasOwnProperty(key)) {
      result.push({skill: key, user: resultSet[key], count: resultSet[key].length});
    }
  }

  return result;
}

getResults(endorsements);


