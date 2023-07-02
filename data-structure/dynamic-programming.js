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

분할 정복 알고리즘과 무엇이 다르냐?

DP는 '과거문제의 해'를 기억해 놓았다가, 동일한 문제가 또 나타나면 계산하지 않고 과거의 해를 활용하는 기법을 말한다.
최적 부분 구조를 갖고 있는 문제에 사용될 수 있는 것은 동일하다.
여기서 DP는 중복되는 부분문제가 있을 때 사용한다.
*/
