// enqueue를 push로
// dequeue를 shift로 구현하겠음
// 동일 중요도를 가진 원소들 때문에, 문제 그대로 구현하는 방식을 택함
function solution(priorities, location) {
  const indices = priorities.map((_, idx) => idx);
  let steps = 0;
  let max = Math.max(...priorities);
  while (priorities.length > 0) {
    const cur = priorities.shift();
    const curIdx = indices.shift();
    if (cur === max) {
      steps++;
      if (curIdx === location) return steps;
      max = Math.max(...priorities);
    } else {
      priorities.push(cur);
      indices.push(curIdx);
    }
  }
}
