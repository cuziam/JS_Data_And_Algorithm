function solution(numbers, target) {
  let answer = 0;
  function dfs(depth, sum) {
    // basecase
    if (depth === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }
    // different input function
    dfs(depth + 1, sum + numbers[depth]);
    dfs(depth + 1, sum - numbers[depth]);
  }
  dfs(0, 0);
  return answer;
}
