// https://leetcode.com/problems/top-k-frequent-words/

// Solution 
//https://github.com/SameerMakhija/Amazon-Online-Assessment-Questions-LeetCode/blob/master/Top%20K%20Frequently%20Mentioned%20Keywords/index.js 

/*
Given an array of strings words and an integer k, return the k most frequent strings.

Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

Example 1:

Input: words = ["i","love","leetcode","i","love","coding"], k = 2
Output: ["i","love"]
Explanation: "i" and "love" are the two most frequent words.
Note that "i" comes before "love" due to a lower alphabetical order.


Example 2:
Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
Output: ["the","is","sunny","day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.


Constraints:
1 <= words.length <= 500
1 <= words[i] <= 10
words[i] consists of lowercase English letters.
k is in the range [1, The number of unique words[i]]

Follow-up: Could you solve it in O(n log(k)) time and O(n) extra space?

*/

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    
};


function GetTopKeywords(K, keywords, reviews) {

    // create a map of all the keywords
    let map = new Map();
    for (let keyword of keywords) {
        map.set(keyword.toLowerCase(), 0)
    }

    // get all the counts for all the keywords
    for (let i = 0; i < reviews.length; i++) {
        let review = reviews[i].split(" ");
        for (let i = 0; i < review.length; i++) {
            let reviewData = review[i].toLowerCase();
            if (map.has(reviewData)) {
                let getVal = map.get(reviewData)
                map.set(reviewData, getVal + 1)
            }
        }
    }

    // Sort the hasMap with count value and lexicographical order
    let sortedData = new Map([...map.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])));
    console.log(sortedData);

    // Select top k words which has highest count
    let returTopKData = [];
    let index = 0;
    sortedData.forEach((val, key) => {
        if (index < K) {
            returTopKData.push(key);
        }
        index++;
    });

    return returTopKData
}





let k = 2,
    keywords = ["anacell", "cetracular", "betacellular"],
    reviews = [
        "Anacell provides the best services in the city",
        "betacellular has awesome services",
        "Best services provided by anacell, everyone should use anacell",
    ];

// console.log(GetTopKeywords(k, keywords, reviews));


k = 3
keywords = ["betacellular", "anacell", "cetracular", "deltacellular", "eurocell"]
reviews = [
  "I love anacell Best services; Best services provided by anacell",
  "betacellular has great services",
  "deltacellular provides much better services than betacellular",
  "cetracular is worse than anacell",
  "Betacellular is better than deltacellular.",
]
console.log(GetTopKeywords(k, keywords, reviews));
