// https://leetcode.com/discuss/interview-question/844979/amazon-online-assessment-question

/*

Question:
In order to improve customer experience, Amazon has developed a system to provide recommendations to the customer regarding the item they can purchase. Based on historical customer purchase information, an item association can be defined as - If an item A is ordered by a customer, then item B is also likely to be ordered by the same customer (e.g. Book 1 is frequently orderered with Book 2). All items that are linked together by an item association can be considered to be in the same group. An item without any association to any other item can be considered to be in its own item association group of size 1.

Given a list of item association relationships(i.e. group of items likely to be ordered together), write an algorithm that outputs the largest item association group. If two groups have the same number of items then select the group which contains the item that appears first in lexicographic order.

Input
The itput to the function/method consists of an argument - itemAssociation, a list containing paris of string representing the items that are ordered together.

Output
Return a list of strings representing the largest association group sorted lexicographically.

Example
Input:
itemAssociation: [
[Item1, Item2],
[Item3, Item4],
[Item4, Item5]
]

Output:
[Item3, Item4, Item5]

Explanation:
There are two item association groups:
group1: [Item1, Item2]
group2: [Item3,Item4,Item5]
In the available associations, group2 has the largest association. So, the output is [Item3, Item4, Item5].

*/


/**
 * @param {string} moves
 * @return {boolean}
 */
var largestItemAssociation = function(itemAssociation) {
  
}

console.log(largestItemAssociation(Arrays.asList(
    new PairString("Item1", "Item2"),
    new PairString("Item3", "Item4"),
    new PairString("Item4", "Item5")
))); // [Item3, Item4, Item5]

console.log(largestItemAssociation(Arrays.asList(
    new PairString("A Farewell to Arms", "For Whom the Bell Tolls"),
    new PairString("Grapes of Wrath", "Of Mice and Men"),
    new PairString("Of Mice and Men", "East of Eden"),
    new PairString("Canary Row", "Sweet Thursday"),
    new PairString("On Writing", "Working Days"),
    new PairString("Sweet Thursday", "Tortilla Flat"),
    new PairString("The Big Sleep", "Farewell My Lovely"),
    new PairString("David Copperfield", "Pickwick Papers")
))); // [Canary Row, Sweet Thursday, Tortilla Flat]