function exampleClass(){
        this.property1 = 5;
        this.property2 = "world";
        this.method1 = function(arg1){
            return arg1 + " " + this.property2 ;
        }
    }

    var instance1 = new exampleClass();
    var instance2 = new exampleClass();

    var result = instance1.method1("Hello");
    instance1.property1 = 10;
    console.log(instance1.property1);   // print 10
    console.log(instance2.property1);   // print 5
    /*  end class example  */



    /**************Prototype property example*****************/

    function Player(){
        this.name;
        this.hitPoints = 100;
        this.attack  = function attack(opponent){
            opponent.hitPoints -= 10;
            console.log(this.name + " just hit "+ opponent.name );
        }
    }

    var p1 = new Player();
    var p2 = new Player();

    //Name the Players
    p1.name = "Sameer";
    p2.name = "Ravi";

    //Make player 1 attack player 2
    p1.attack(p2);

    console.log(p1.name + " hitPoints are = "+ p1.hitPoints);
    console.log(p2.name + " hitPoints are = "+ p2.hitPoints);

    Player.prototype.heel = function heel(targetPlayer){
        targetPlayer.hitPoints += 5;
    };

    p1.heel(p2);
    console.log(p1.name + " hitPoints are = "+ p1.hitPoints);
    console.log(p2.name + " hitPoints are = "+ p2.hitPoints);

    //Add an "energy" property to the Player object using the ProtoType property
    Player.prototype.energy = "200";

    console.log("P1 energy = "+ p1.energy);
    console.log("P2 energy = "+ p2.energy);
    /* end Prototype property example*/


    /**************End of Prototype property example*****************/


    /**************Inheritance property example*****************/

     function ParentClass(){
        this.parent_property1 = "Hola";
        this.parentmethod1 =function parentmethod1(arg1){
            return arg1+ "Parent method 1 return data -- ";
        }
    }

    function ChildClass(){
        this.child_property1 = "Adios";
        this.childmethod1= function childmethod1(arg1){
            return arg1+ "Child method 1 return data -- ";
        }
    }

    //make the childClass ingerit all of the Prent class characteristics
    ChildClass.prototype = new ParentClass();

    var instance1 = new ChildClass();
    console.log(instance1 instanceof ParentClass);
    console.log(instance1 instanceof ChildClass);

    //Access the instance methods and properties
    console.log(instance1.parentmethod1("Result:- "));
    console.log(instance1.childmethod1("Result:- "));
    console.log(instance1.parent_property1);
    console.log(instance1.child_property1);

    ChildClass.prototype.parentmethod1 = function parentmethod1(args){
        return args + "I have over written parent class parentmethod1()";
    };

    console.log(instance1.parentmethod1("Result: - "));