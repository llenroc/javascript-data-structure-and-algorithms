/*

Question 1:- Difference between Promise and Callback
Question 2:- Write Program to Resolve Promise after 1 second 
Question 3:- What are controlled Components ?
Question 4:- When to use React state ?
Question 5:- Write program to check string is anagram is or not.

*/



//cat , act

// Correct approach
/*
    - if any of the string does not exist => false
    - if length are not same => false
    - if they are equal (exact match) => true
    - Sort bot string and compare 
        => On exact match => return true
        => else return false
*/


// Wrong Approach
function anagram(str1, str2) {

    if(!str1 || !str2 ) {
        return false;
    }

    if( str1.length !== str2.length) {
        return false;
    }

    const str1Map = str1.reduce(( result, str1Char) => {  //O(n1)
        if (result[str1Char]) {
            result[str1Char] = ++result[str1Char]
        } else {
            result[str1Char] = 1
        }

        return result;
    }, {});
    
    /* {
        'c': 1,
        'a': 1
    }*/
    
    const str2Map = str2.reduce(( result, str1Char) => { //O(n2)
        if(result[str1Char]) {
            result[str1Char] = ++result[str1Char]
        } else {
            result[str1Char] = 1
        }
        
        return result;
    }, {});

    for(let key in str1Map) {                       // O(n)
        if(str1Map.hasOwnProperty(key)) {
            if(!str2Map(key) || str1Map(key) !== str2Map(key)) return false;
        }
    }

    return true;
}

console.log(anagram('cat', 'act'));
console.log(anagram('catp', 'actp'));