/*
Question 1:- ((()((())()  Check the correct order => return true / false

Question 2:- Implement sum(1)(2)(3)

Question 3:- findPair(arr, k)   [0,1,2,3,4,5] => [[0,4], [1,3]]

Question 4:- Implement incremental search




*/


//-------------Question 1 -----------
var checkOrder = logs => {
    let order = 0;
    for(let i=0; i<logs.length; i++) {
        order = logs.charAt(i) === "(" ? ++order : --order;
        if(order < 0) break;
    }
    return order !== 0 ? false : true;
}

logs.push(" (()((() => false ", checkOrder('(()((()') );
logs.push(" )(()((() => false ", checkOrder(')(()((()') );
logs.push(" (())(())((())) => true ", checkOrder('(())(())((()))') );



//-------------Question 2 -----------
function sum(x) {
    return function (y) {
        return function(z) {
            return x+y+z;
        }
    }
}

let q = sum(1)(2)(3); //logs 6


function add(x) {
    return function sum(y) {
        if (typeof y !== 'undefined') {
            x = x + y;
            return sum
        } else {
            return x;
        }
    };
}

let p = add(1)(2)(3)(); // logs 6

