// https://leetcode.com/problems/longest-common-prefix/
// 14. Longest Common Prefix

/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.

*/


/**
 * @param {string[]} strs
 * @return {string}
 */
// Sameer solution
var longestCommonPrefix = function(strs) {
    const firstWord = strs[0]; 
    
    let i;
    for( i = 0; i < firstWord.length; i++) {
      const char = firstWord[i];
      let j;
      for(j = 1; j < strs.length; j++) {
        if(!strs[j][i] || strs[j][i] !== char ) {
          break; 
        }
      }

      if(j < strs.length) {
        break;
      }
    }

    return i === firstWord.length ? firstWord : firstWord.substr(0, i);
};

console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); // ""
console.log("\n");



//Reverse tracking
const longestCommonPrefix1 = (strs) => {
  if (!strs.length) return '';

  let prefix = strs[0];

  for (let i = strs.length; --i;) {
    for (;strs[i].indexOf(prefix) !== 0;) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (!prefix.length) return '';
    }
  }

  return prefix;
};


console.log(longestCommonPrefix1(["flower","flow","flight"])); // "fl"
console.log(longestCommonPrefix1(["dog","racecar","car"])); // ""