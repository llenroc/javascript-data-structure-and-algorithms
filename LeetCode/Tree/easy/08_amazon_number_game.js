// Amazon 

/*
Link1 - Number Game ( LCD )
https://www.youtube.com/watch?v=ImNPkxN5vQ8
https://leetcode.com/discuss/interview-question/1139522/amazon-oa-2021 
https://leetcode.com/problems/maximize-score-after-n-operations/




You are playing a card game with your friends. Every card is marked with a positive integer. You start the game with2N cardson your hand, and the game lasts N rounds. In each round, you have to remove 2 cards from your hand.

Your score in each round isgcd(card, card2) * round_number, where card and card2 are the cards that you removed and round_number is the current round. Your total score will be the sum of the scores that you received in each round.

What is the maximum total score that you can get?

Constraints

1 <= n <= 10, n represents the total number of rounds.
1 <= cards[i] <= 10^9, cards represents the array of the cards on your hand, and cards[i] represents the positive integer marked on card i.
The round_number starts from 1.

Examples
Example 1:
Input: n = 3 cards = [8, 5, 6, 25, 6, 16]
Output: 41

*/ 