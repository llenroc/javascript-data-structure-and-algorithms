### What is encapsulation
		
Encapsulation is the ability of an object to be a container (or capsule) for its member properties, including variables and methods.

1. To protect object variable and methods to expose directly to outer world 
2. To enable client validations 
	
#### Eg:- 3


    function Person() {
      //properties/fields
      var name = "Rob Gravelle";
      var height = 68;
      var weight = 170;
      var socialInsuranceNumber = "555 555 555";
      return {
          setHeight: function(newHeight) {height=newHeight;},
          getHeight: function() { return height; },
          setWeight: function(newWeight) {weight = newWeight;},
          getWeight: function() { return weight; },
          setName:   function(newName) {name=newName;},
          getName:   function() { return name; },
          setSocialInsuranceNumber: function(newSocialInsuranceNumber) {                     socialInsuranceNumber=newSocialInsuranceNumber; }
      };
    }

		// instanciate the Person class
    var aPerson = new Person();
    var myName = aPerson.getName();
    alert(myName); //prints "Rob Gravelle"

		
#### Eg:- 4   Encapsulation + Closure  (Best example )
	
	
    var person = (function () {
      
      var fullName = "Jason Shapiro";
      var reg = new RegExp(/\d+/);
      
      return {
        "setFullName" : function (newValue) {
          if( reg.test(newValue) ) {
            alert("Invalid Name");
          }
          else {
            fullName = newValue;
          }
        },
        "getFullName" : function () {
          return fullName;
        }
      }; // end of the return
    }());
			
	>> "fullName" variable can be accessible outside through getFullName()  and setFullName() closures 
