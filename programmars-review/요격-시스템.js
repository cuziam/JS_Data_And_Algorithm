function solution(targets) {
  let answer = 0;
  targets.sort((a, b) => a[0] - b[0]);
  let end = targets[0][1];
  for (let i = 1; i < targets.length; i++) {
    if (targets[i][0] >= end) {
      answer++;
      end = targets[i][1];
    }
    if (targets[i][1] < end) {
      end = targets[i][1];
    }
  }
  return answer + 1;
}
