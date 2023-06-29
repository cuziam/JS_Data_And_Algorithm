/*
<Dynamic Programming>
A method for solving a complex problem by breaking it down into a collection of simpler subproblems,
solving each of those subproblems just once, and storing their solutions.

it's not related in programming in origin.
it's like a paradigm that can be used in solving complex problem.

When to use
1. Optimal substructure(최적 부분구조)
=>하위 구조의 최적해를 이용하여 상위구조의 최적해를 이끌어낼 수 있는 구조
2. Overlapping subproblems(중복되는 부분문제)
=>하위 구조가 상위구조와 동일한 문제를 안고 있을 때.

ex)피보나치 수열
merge sort의 경우 [10,24,10,24] 이럴 때가 중복되는 부분 문제가 된다.
shortest path 문제의 경우 최적 부분구조를 가지고 있다.
*/
