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
// fibonacci, naive approach
function fibonacci(n) {
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
/*
이 코드의 문제는 기존에 계산한 값을 재활용하지 못한다. 그래서 더럽게 느리다.
함수 연산이 2^n꼴로 반복되기 때문이다. 즉 O(2^n)이 된다.
메모리 상으로도 똑같은 복잡도를 가지기 때문에 fib(100)만 해도 터져버린다.

어떻게 해결할까? memoization or tabulation
memoization: storing the results of expensive function calls and
returning the cached result when the same inputs occur again.
소위 Top-down 방식이라고 부른다.
*/
function fib(n, memo = [undefined, 0, 0]) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  const res = fib(n - 1, memo) + fib(n - 2, memo);
  // 하위 함수의 결과값을 저장해나간다.
  memo[n] = res;
  return res;
}
// 이 경우 시간복잡도가 거의 O(N)이 된다.
// 처리시간은 빠르긴 하지만 여전히 콜스택은 계속 2^n꼴이라 n이 너무 크면 꺼진다.
/*
tabulation은 반대로 bottom-up방식이다.
Storing the result of a previous result in a 'table'(usually an array)
usually done using iteration
Better space complexity can be achieved using tabulation.
*/
function fib2(n) {
  if (n <= 2) return 1;
  const fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}
// 이 경우엔 함수 콜이 따로 없기 때문에 큰 숫자도 계산가능하다.
