/**
 * Created by kumasame on 11/27/2015.
 */

/* Function Objects | Functions literal notations | Anonymous Function */


var f1 = function(){
    alert("I am an anonymous function");
};

f1();  //Output - I am an anonymous function




/* Self Invoking function */

(
   function(){
       alert("I am an self invoking function");
   }
)();


//Eg:-1

(
    function(){
        var s =0;
        for(var i=0; i < arguments.length; i++){
            s +=arguments[i];
        }
        alert("sum = "+ s.toString());
    }
)(10,20,30,40);



/* Callback function */

function doProcess(a,b,d){
    alert("sum = "+ (a+b).toString());
}

function showDifference(a,b){
    alert("difference = "+(a-b).toString());
}

function showMultiplied(a,b){
    alert("multi = "+ (a*b).toString());
}

doProcess(10,20, showDifference);

doProcess(10,20,showMultiplied);


/* Array function */

//a) Array.every()

function isEven(v,i, ary){
    return (v%2 == 0) ? true : false;
}

var a = [2,26,38,12,6,8];
alert(a.every(isEven));


/*--------OR--------*/

alert([2,26,38,12,6,8].every(isEven));


/*--------OR--------*/

alert(
    [2,26,38,12,6,8].every(function(){
            return (v%2 == 0) ? true :false ;
        }
    )
);


//b) Array.filter()

var a = [2,7,38,5,6,8];
var b = a.filter(isEven);
alert(b)   // Output - [2,38,6,8]


//c) Array.forEach()

function doProcess(v,i,ary){
    ary[i] = v+i;
}

var a = [20,30,40];

alert(a);  // 20,30,40
a.forEach(doProcess);

alert(a); //21,31,41


//d) Array.map()

function doProcess(v,i,ary){
    return v*v;
}

var a = [10,20,30,40];

alert(a); //10,20,30,40

var b = a.map(doProcess);

alert(b); //100,400,900



//e) Array.some()

function isEven(v,i,ary){
    return ((v%2)==0 ? true : false);
}

a = [10,20,7,9];

alert(a.some(isEven));    // true



/*  Nested / inner function */

function fn1(a,b) {
    function fn2(){
        alert("sum = "+ (a+b).toStrin());
    }
    fn2();
}

fn1(10,20);


/* Returning function */

function doProcess(a,b){
    function dispSum(){
        alert(a+b);
    }
    function dispDiff(){
        alert(a-b);
    }

 // return dispDiff();  // Will execute immediately
                        // if there is some return value, it will return that value.

    return dispDiff;
}

var a = doProcess(10,20);
alert("after returning");
a(); // Call's dispDiff()



/*--------------OR-----------*/

function doProcess(a,b){
    function dispSum(){
        alert("sum = "+ (a+b).toString());
    }
    dispSum();
    return function(){
        alert("Diff = " + (a+b));
    }
}

var a = doProces(10,20);
a();

//this will work same as previous example



/* Assigning Inner function to outer function */

function doProcess(a,b){
    function dispSum(a,b){
        alert("sum = "+ (a+b));
    }
    dispSum();
    return function(a,b){
        alert("sub = " + (a-b));
    }
}

var a = doProcess(10,20);
a(30,40);





/* */
function doProcess(a,b){
    function dispSum(a,b){
        alert("sum = "+(a+b));
    }
    dispSum();
    doProcess = function(a,b){
        alert("Diff = "+ (a-b));
    }
}

doProcess(10,20);  // sum
doProcess(10,20); // diff
doProcess(10.30); // diff
doProcess(10,40); // diff
doProcess(10,50); // diff


/* Array of functions */

var ary = [];
arg[0] = function(){
            alert("fun 1");
        };
arg[1]= function(){
    alert("fun 2);
};

ary[1]();

/*----OR ---*/

if(typeof ary[1]=== "function"){
    ary[1]();
}else{
    alert("not a function");
}



/* Closure */

function starGenNoTill(n){
    var current = 0;
    var max = n;
    return function(){
        return (current < max) ? current++ : current;
    }
}

var genNow;
genNow = starGenNoTill(5);
alert(getNow());
alert(getNow());
alert(getNow());


/* Built in function Constructor */

var d = new function("a", "b", "alert('sum = ' + (a+b))");
d(10,20);

/* ----OR ---*/

var e = new function("a,b,c,d","alert(a+b+c+d)");

