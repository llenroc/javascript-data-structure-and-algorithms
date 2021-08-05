/*

	1)  var Obj= {
		name: "Sameer",
		printName: function () {
			console.log(this.name)
		}
	}

	Obj.printName() // Sameer
	Var fun = Obj.printName;
	
	fun()  // undefined 
	
	Obj.printName.bind(this, fun)


	2) Implementation of myBind() function


	3) [1,2,3,7,4,5, 6].findPairs(6) = [[2,4], [1,5]]    Implement this | Complexity 

	4) Example of closure 

	5) Implement of debounce function 

	function Debounce(func, wait){
	  let timeout;
	  return function(...args){
	    const context = this;
	    clearTimeout(timeout);
	    timeout = setTimeout(() => {
	      func.apply(context, args);
	    }, wait); 
	  }
	}

	
	6) Type of Data Structures => stack , queue , tree, sets 
	7) Binary Sort , which sort has high complexity 
	8) CLI
	9) Testing tools:- Protector 
	10) Coding standard tools - Eslint, Linter
	
	11) How to improve page performance 
	
	==> Event bubbling  ( Have 500 <li></li> element and bind click event to each item)
	12) Difference between let and var 


*/

// --------- 1 -----------

var Obj= {
    name: "Sameer",
    printName: function () {
        console.log(this.name)
    }
}

Obj.printName() // Sameer
var fun = Obj.printName;

fun()  // undefined 


//----- solution -----
var Obj= {
    name: "Sameer",
    printName: function () {
        console.log(this.name)
    }
}
var fun = Obj.printName;
fun = fun.bind(Obj);
fun(); // "Sameer"

// --------- 2 -----------

Function.prototype.bind = (context, ...rest) => {
    return (...args) => {
        return this.apply(context, [...rest, ...args]);
    }
}

// --------- 3 -----------

function debounce(fn, wait) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(this, args);
        }, wait);
    }
}