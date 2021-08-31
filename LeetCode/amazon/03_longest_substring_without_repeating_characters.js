// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Solution. - youtube.com/watch?v=3IETreEybaA

/**

Given a string s, find the length of the longest substring without repeating characters.

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.


Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

 */



/**
 * @param {string} s
 * @return {number}
 */
// Approach 1 - easy
// Solution. - youtube.com/watch?v=3IETreEybaA
var lengthOfLongestSubstring = function(s) {
      let a_pointer = 0;
      let b_pointer = 0;
      let max = 0;
      const charSet = new Set();

      while(b_pointer < s.length) {
        // If does not have the char
        if(!charSet.has(s[b_pointer])) {
          charSet.add(s[b_pointer]);
          b_pointer++;
          max = Math.max(charSet.size, max);
        } else {
          charSet.delete(s[a_pointer]);
          a_pointer++; // when you delete only a pointer move
        }
      }
      return max;
};


console.log(lengthOfLongestSubstring("abcabcbb")); //  3   ["abc"]
console.log(lengthOfLongestSubstring("bbbbb")); //  1   ["b"]
console.log(lengthOfLongestSubstring("pwwkew")); //  3   ["wke"]



/**
 * @param {string} s
 * @return {number}
 */
// Approach 2
var lengthOfLongestSubstring2 = function(s) { //"abcabcbb"
      var start = 0, maxLen = 0;
      var map = new Map();

      for(var i = 0; i < s.length; i++) {
          var ch = s[i];

          if(map.get(ch) >= start) start = map.get(ch) + 1;
          map.set(ch, i);

          // if(i - start + 1 > maxLen) maxLen = i - start + 1;
          maxLen = Math.max(maxLen, i - start + 1);
      }

      return maxLen;
};