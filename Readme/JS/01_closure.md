### What is Closure  ?

A closure is an inner object which has access to all of the variables available in its parent function.  So although methods of an object can’t see each other’s local variables, an inner object does have access to the local variables of its parent function. 
	
	
A closure is an inner function that has access to the outer (enclosing) function.

#### Closure has three scopes:-

1. Has access to own scope (variable defined in between curly braces)
2. Has access to outer function variables
3. Has access to global variables 
	
Eg:- 1


	makecall( url, "POST" , { data object }, success(a,b), error());
	
	function success(a,b){
		return functions(response){
		 alert("output = "+ a+b+response);
		}
	};
	
Eg:- 2


	<button type="button" onclick="myFunc()"> Count</button>
	<p id = "demo"> 0 </p>
	
	function myFunc(){
		$("#demo").value = add();  
	}
	
	var add = ( function(){
      Var counter = 0;
      return function(){
        return counter+1;
      }
    })();
