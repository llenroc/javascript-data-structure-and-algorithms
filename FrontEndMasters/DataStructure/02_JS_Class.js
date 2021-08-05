/*
1. Reference type 
2. Context 
3. Instantiation
*/

// Reference type 

[] === [] // false
{} === {} // false 

var obj1 = { x: 10 };
var obj2 = obj1;
var obj3 = { x: 10 };

obj1 === obj2 // true
obj1 === obj3 // false 

obj1.value = 15;
console.log(obj2.value); // 15
console.log(obj3.value); // 10

// context vs scope

// Context will tell you where we are with in the object
// Scope is define with in the block.

console.log(this); // Window object
console.log(this === window); // true
this.alert("hello"); 
//OR
window.alert("hello"); 



// what will it print 

function a() {
  console.log(this);
}
a(); // window object 

const b = {
  a: function() {
    console.log(this);
  }
}
b.a(); // {a: ƒ}


// 3. Instantiation

class Player {
  constructor(name, type){
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`My name is ${this.name} and I am a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }

  play() {
    console.log(`Whooooooo, I am a ${this.type}`);
  }
}

const Wizard1 = new Wizard("Sameer", "healer");
const Wizard2= new Wizard("Kumar", "coder");

Wizard1.introduce();
Wizard1.play();


Wizard2.introduce();
Wizard2.play();


/******** ES5 implementation of class ********/
var Player1 = function(name, type) {
  this.name = name;
  this.type = type;
}

Player1.prototype.introduce = function() {
  console.log(`My name is ${this.name} and I am a ${this.type}`);
}

var wizard11 = new Player1("Sameer", "healer");
var wizard21 = new Player1("Kumar", "magician");

wizard11.play = function() {
  console.log(`Whooooooo, I am a ${this.type}`);
}

wizard21.play = function() {
  console.log(`Whooooooo, I am a ${this.type}`);
}


wizard11.introduce();
wizard11.play();


wizard21.introduce();
wizard21.play();








