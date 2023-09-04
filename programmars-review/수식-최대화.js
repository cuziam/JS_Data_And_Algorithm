// 주어진 연산자 우선순위에 따라 계산을 수행하는 재귀함수
function calculate(expression, priorities) {
  if (priorities.length === 0) {
    // basecase
    return Math.abs(Number(expression));
  }
  const currentPriority = priorities[0];
  const nextPriorities = priorities.slice(1);

  const splitted = expression.split(currentPriority);
  const calculated = splitted.map(split => calculate(split, nextPriorities));

  return eval(calculated.join(currentPriority));
}
function solution(expression) {
  // 모든 가능한 연산자 우선순위 조합
  const operatorPermutations = [
    ['+', '-', '*'],
    ['+', '*', '-'],
    ['-', '+', '*'],
    ['-', '*', '+'],
    ['*', '+', '-'],
    ['*', '-', '+'],
  ];

  let max = 0;
  operatorPermutations.forEach(priorities => {
    const result = calculate(expression, priorities);
    max = Math.max(max, Math.abs(result));
  });
  return max;
}

console.log('-400-900'.split('-'));
