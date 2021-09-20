// https://leetcode.com/explore/learn/card/graph/622/single-source-shortest-path-algorithm/3867/
// LeetCode 787 - Cheapest Flights Within K Stops - Bellman Ford

/*
There are n cities connected by some number of flights. You are given an array flights where flights[i] = [fromi, toi, pricei] indicates that there is a flight from city fromi to city toi with cost pricei.

You are also given three integers src, dst, and k, return the cheapest price from src to dst with at most k stops. If there is no such route, return -1.

 

Example 1:


Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1
Output: 200
Explanation: The graph is shown.
The cheapest price from city 0 to city 2 with at most 1 stop costs 200, as marked red in the picture.


Example 2:
Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0
Output: 500
Explanation: The graph is shown.
The cheapest price from city 0 to city 2 with at most 0 stop costs 500, as marked blue in the picture.
 

Constraints:

1 <= n <= 100
0 <= flights.length <= (n * (n - 1) / 2)
flights[i].length == 3
0 <= fromi, toi < n
fromi != toi
1 <= pricei <= 104
There will not be any multiple flights between two cities.
0 <= src, dst, k < n
src != dst

*/

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */

// Solution 1 - Using BFS
// https://leetcode.com/problems/cheapest-flights-within-k-stops/discuss/181943/Readable-Javascript-Solution
//1.  Construct a map of key/value pair of startingCity and [desitnationCity, price]
//2.  Start from src with price of 0 with stops (K) of K + 1.
//3.  Using queue (BFS), check current node and see if you have already arrived or push nextFlights into the queue
//4.  If you push nextFlights into the queue, sort it by the price (this is mimicing Priority Queue)

var findCheapestPrice = function(n, flights, src, dst, k) {
    let map = new Map();
    
    for (let i = 0; i < flights.length; i++) {
        const [start, end, price] = flights[i];
        let edges = map.get(start) || [];
        edges.push([end, price]);
        map.set(start, edges);
    }
    
    let queue = [[0, src, k + 1]];
    
    while (queue.length) {
        const [price, city, stops] = queue.shift();
        if (city === dst) return price;
        if (stops > 0) {
            const nextFlights = map.get(city) || [];
            for (let i = 0; i < nextFlights.length; i++) {
                const [next, cost] = nextFlights[i];
                queue.push([cost + price, next, stops - 1]);
            }
            queue.sort((a, b) => a[0] - b[0]);
        }
    }
    
    return -1;
};


var n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1;
console.log(findCheapestPrice(n, flights, src, dst, k)); // 200


var n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0;
console.log(findCheapestPrice(n, flights, src, dst, k)); // 500