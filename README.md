# Data Structure Algorithms ( JavaScript )


## Resources
[backtobackswe.com](https://backtobackswe.com/platform/content)

## Data structure topics 

### Data Structure 
- [ ] Linked Lists 
- [ ] Trees, Tries, & Graphs 
- [ ] Stacks and Queue 
- [ ] Heaps 
- [ ] Vectors / ArrayLists
- [ ] Hash tables 


### Algorithms 
- [ ] Breadth-first Search
- [ ] Depth first search 
- [ ] Binary Search
- [ ] Merge Sort
- [ ] Quick Sort


### Concepts
- [ ] Bit Manipulations 
- [ ] Memory (Stack vs. Heap)
- [ ] Recursion 
- [ ] Dynamic Programming 
- [ ] Big O Time & Space 


## Amazon online assesment questions

[Sameer status link](https://docs.google.com/spreadsheets/d/109gSY4frs7uqitTbAuEpvEYZmgAyb_K5_gCSyt0FUP4/edit#gid=1731630353)

[*** Git solutions for Amazon-Online-Assesment-Questions *** ](https://github.com/SameerMakhija/Amazon-Online-Assessment-Questions-LeetCode)


[Amazon-Online-Assesment-Questions](https://leetcode.com/discuss/interview-question/1183360/Amazon-Online-Assesment-Questions)

[ Amazon-Online-Assesment-Questions post]( https://leetcode.com/discuss/interview-question/1059837/Amazon-Online-Assessment-Questions-list)

[Amazon-online-assessment-questions](https://aonecode.com/amazon-online-assessment-questions)

[Amazon 126 questions](https://leetcode.com/list/xyknlrg2/)

[Top amazon Questions](https://leetcode.com/problem-list/7p5x763/?page=1)


[Amazon Final Interview Questions | SDE1](https://leetcode.com/discuss/interview-question/488887/Amazon-Final-Interview-Questions-or-SDE1)

[Algorithms GitHub](https://github.com/williamfiset/algorithms)




### Solutions for amazon problems 

Amazon Association Group/Recommendation Problem: https://leetcode.com/playground/jsveHJPT

Amazon Fresh Promotion Problem: https://leetcode.com/playground/mKNSShqR

Amazon Top-N Competitor Problem: https://leetcode.com/playground/Y7wiv8Md

Amazon Favorite Genre Problem: https://leetcode.com/playground/nRYF2eXg

Amazon Treasure Island Problem: https://leetcode.com/playground/Z8w4rzVn

Amazon Cost Evaluation / Warehouse Problem: https://leetcode.com/playground/CH26nCyE

Amazon Optimal Utilization Problem: https://leetcode.com/playground/FSj8xqKU

Amazon Knight Moves Problem: https://leetcode.com/playground/WSJzH6DS

Amazon Items in Containers Problem: https://leetcode.com/playground/D7Z6gQdr

Amazon Transaction Logs Problem: https://leetcode.com/playground/k5mQfFb5



## List of Amazon Online assesment from Leet Code 

1. Amazon Go stores https://leetcode.com/problems/number-of-islands/

2. Reorder Data in log files https://leetcode.com/problems/reorder-data-in-log-files/

3. https://leetcode.com/discuss/interview-question/1023609/amazon-oa-shopping-options

4. https://leetcode.com/problems/robot-bounded-in-circle/

5. Flight Media - basically two sums, but you had to account for multiple pairs that could add up to the target

6. Subscriber Groups - similar to https://leetcode.com/problems/number-of-provinces/, find the number of unique friend groups

Each question followed up with an explanation on approach and complexity. This was done on Hackerrank.

7. Optimizing Alexa Suggestions

  https://codescript.in/amazon-software-development-engineering-hiring-coding-question-answer/431/


8. Device Application Pairs

  https://leetcode.com/discuss/interview-question/373202
 
  * Note : Bonus Tip
   Explain the approach and time complexity in another section properly.



9. Ques: https://aonecode.com/interview-question/maximum-bounded-array 

10. Parking lot
Consider the car parking lot as 0 indexed array. Given a list of positions occupied by cars and k, return the min length of roof required to cover k cars.

11. Number of possible encoded copies
For an array, another array is considered as a encoded if the difference between consecutive elements is same for both. Given an array of consecutive differnces, lowerbound and upperbound value, return the number of possibile copies such that all the elements lay in range of lowerbound and upperbound(both included). If there is no possibility return 0.


  * EDIT:
  For second question, we will be provided a list of integers (difference between consecutive elements of an array), a lowerbound(int) and an upperbound(int). We have to return number of possible arrays such that all the elements are in the range [lowerbound, upperbound] and having same consecutive element differences as given list.



12.1 Amazon Music Pair.

  Given durations of songs and the rideDuration of the bus, return the pair of songs which when added is exactly equal to rideDuration-30 seconds. You cannot repeat the song.Return the index of the songs

  Ex: RideDuration: 250

  songDurations = [100,180,40,120,10]

  ans: [2,1]

  Approach: First create hashmap to store the original indexes of the songs "map<int,vector>", vector is to store the indexes of the same duration of songs. Then sort the songDurations and use two poinetr approach to get the pair of songs. similar to : https://leetcode.com/problems/two-sum/


12.2 Demolition Robot

Given a matrix with values 0 (trenches) , 1 (flat) , and 9 (obstacle) you have to find minimum distance to reach 9 (obstacle). If not possible then return -1.

The demolition robot must start at the top left corner of the matrix, which is always flat, and can move on block up, down, right, left.

The demolition robot cannot enter 0 trenches and cannot leave the matrix.

Sample Input :
```
[1, 0, 0],
[1, 0, 0],
[1, 9, 1]]
```
Sample Output : 3

Approach: BFS traversal

- Workstyle Survey
- Feedback

13.1 https://leetcode.com/problems/shortest-path-to-get-food/

13.2 https://leetcode.com/problems/minimum-cost-to-connect-sticks/

14.1 In Flight Media (https://leetcode.com/discuss/interview-question/313719/Amazon-or-Online-Assessment-2019-or-Movies-on-Flight)

- you have to remember the original indices
- sort -> two pointer (get as close to the constraint <= k) -> pop respective movie id's from map of lists (i.e same movies cannot map to the same index)
  * movie_duration: [movie_id_1, movie_id_2]


14.2 Items in Containers (https://algo.monster/problems/items_in_containers)
 - there's an off by one error in the solution for items in containers

15.1  You are given an array with random numbers [1,4,6,7,6]. Return an array in the same order but with minimized values: [1,2,3,4,3]. So since 4 is greater than 1 but less than 6 it becomes 2, 6 is greater than 4 so it's value should be 3. [3,5,3,8] would become [1,2,1,3]. My guess is we need to somehow calculate the value that then would be subtracted from each number in the array.


16.1 

Amazon website contains one to many items in each pagee. To mimic the logic of the websire, an Amazon programmer has a list of items and each item has its name, relevance and price. After sorting the items by [name:0, relevance:1, price:2], the programmer is trying to find out a list of items displayed in a chosen page.

Given a list of items, the sort column, the sortd order(0: ascending, 1:descending), the number of utems to be displayed in each page and a page number, write an algorithm to determine the list of item names in the specified page while respecting the item's order. Page Number starts from 0.

function signature (cpp):

```
vector<string> fetchItemsToDisplay(int numOfItems,map<string,pair<int,int>> items, int sortParameter, int sortOrder, int itemsPerPage,
int pageNumber){
	//...//
}
```

```
Sample Input:
numOfItems = 3
items: ["item1",10,15],["item2",3,4],["item3",17,8]
sortParameter: 1
sortOrder: 0
itemsPerPage: 2
pageNumber: 1
Output:
{"item3"}

```

17.1  different ways to choose fleets of vehicle -- https://leetcode.com/discuss/interview-question/1365052/Amazon-OA

17.2 Max number of meetings --https://stackoverflow.com/questions/56500343/maximum-number-of-meetings-that-we-can-conduct#answer-56501517


18.1
```
Kindle Direct Publishing, Amazon's e-book selfpublishing platform, is working on a new feature to help authors use 
special text characters in different ways. They have asked for your help in beta testing a new part of the feature involving 
round and square brackets. Given a string that consists of characters (, ), [, ) and ?, determine how many ways it can be split 
into two non-empty substrings such that the characters in each substring can be rearranged into a balanced string. 
A sequence of round and square brackets can be rearranged into a balanced sequence if and only if the number of opened and closed
bracket is equal for both types of the brackets. The question marks can take the place of any needed character, 
and the substrings together must contain the entire string.

Note: A substring is a contiguous group of characters in a string.
Sample Case 1
Sample Input For Custom Testing
STDIN
Function
– – – – –
(((?

s = '(((?'
Sample Output
Explanation s = (((?
There are 3 splits into two non-empty substrings:


(and (? 2.(( and (? 3.((( and ?
None has two balanced substrings.

```

18.2

```
Given a list of companies arrival times, and duration of their presentations.. find out number of presentations that can be scheduled.

Problem:
https://stackoverflow.com/questions/56500343/maximum-number-of-meetings-that-we-can-conduct#answer-56501517

Solution:
https://stackoverflow.com/a/56502047
```


19.1  You are given a grid of size (m, n) where each (i, j) is the cost of unlocking door (i, j).
You are given a starting position (sx, sy). And you have to collect 2 gems at position (g1x, g1y) and (g2x, g2y).

19.2  You only need to unlock a door once, no matter how many times you visit it.
Find the minimum cost of collecting both the gems, you can move left, right, down and up.


20.1 https://aonecode.com/interview-question/load_cargo.
20.2 https://leetcode.com/problems/maximum-units-on-a-truck/

21.1 Given an input string and a set of strings find if the string can be formed using the strings in the set.
Example: input = rosesarered and the set is [ro, roses, rosesar, ere, e, r, d]
should return "true" because rosesarered = rosesar + ere + d.

```
public boolean canFormString(String input, String[] strArr) {

}
```

22.1 [Below Resources are on the link ](https://leetcode.com/discuss/general-discussion/506342/Amazon-online-assessment-2020/947304)

[Amazon Online Assessment Questions 2021 (OA) - Amazon Online Assessment Questions (OA) / OA2 2021/2020 (algo.monster)](https://algo.monster/problems/amazon_online_assessment_questions)

[GitHub - swolecoder/Amazon-Online-Assessment-Questions-LeetCode: Amazon Online Assessment Questions](https://github.com/swolecoder/Amazon-Online-Assessment-Questions-LeetCode)

[GitHub - SwethaSrikanth/Leetcode-Practice-GHC19: Started out as a practice study group for Grace Hopper 2019](https://github.com/SwethaSrikanth/Leetcode-Practice-GHC19)


[GitHub - TNadir/OAcoding] (https://github.com/TNadir/OAcoding)


[Leetcode Amazon prep list] (https://leetcode.com/list/xyknlrg2/)

PS: I have never seen the actual post, so I am not sure how much content given in above links matches with the https://leetcode.com/discuss/interview-question/344650/Amazon-Online-Assessment-Questions.

[https://leetcode.com/list/xyknlrg2/](https://leetcode.com/list/xyknlrg2/)


23.1 https://leetcode.com/problems/robot-bounded-in-circle/

23.2 Given an array and a sorting algorithm, the sorting algorithm will do a selection swap. Find the number of swaps to sort the array.

```
Example 1:
Input: [5, 4, 1, 2]
Output: 5
Explanation:
Swap index 0 with 1 to form the sorted array [4, 5, 1, 2].
Swap index 0 with 2 to form the sorted array [1, 5, 4, 2].
Swap index 1 with 2 to form the sorted array [1, 4, 5, 2].
Swap index 1 with 3 to form the sorted array [1, 2, 5, 4].
Swap index 2 with 3 to form the sorted array [1, 2, 4, 5].
```


24.1 https://algo.monster/problems/amazon_oa_prime_air_route

```
Similar to this : First problem was a variant of closest pair sum. You'll be given two arrays
arr1 = { {1, 2000}, {2, 3000}, {3, 4000} }
arr2 = { { 1, 5000 }, {2, 3000} }
the first element of every pair represents id and the second value represents the value.
and a target x = 5000
Find the pairs from both the arrays whose vaue add upto a sum which is less than given target and should be close to the target.
(You have to output all the pairs)
Output for the above example:
{ {1, 2} } // Note that the output should be in id's
```

24.2 Given vector consist of alphanumeric strings. Arrange them in order such that old one comes first and in sorted form while new one in same order as given.
aplhanumeric string consist of alpha/numeric id + alphanumeric string
old one string consist of alpha id + alpha string
new one string cosist of numeric id + alpha string

I able to submit both the question in time and able to explain also.

I want to know if some one of you also given OA have you also received reminder even after submitting test successfully because I do. But whenever I open it, it shows only feedback survey form. and one more question about how much time after you got mail for futher steps or result?
 
25.1 Top K Frequently mentioned keywords
25.2 Partition labels


26.1 first one is similar find two sum that equal to k, if two value is same, return two lower index , if there exist many ans, return the largest value one

26.2 second question is similar to https://leetcode.com/discuss/interview-question/823550/amazon-oa-2020-optimize-memory-usage
did not change a lot, they update some input I think.

27.1 one was based on linked lists (LC medium)

27.2 another one was of bridges in graph (LC hard).

28.1  One was sort/heap related, 
28.2 another was intervals (I think). Both LC medium.





Amazon Transaction Logs Problem: https://leetcode.com/playground/k5mQfFb5

