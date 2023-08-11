/*
1. 깊이가 i인 노드는 깊이가 i+1인 노드 중 최대값을 택해서 올라간다.
=>상향식 접근 발상
2. 달리 말하면 깊이가 i인 노드는 깊이가 i+1인 두 노드에 접근할 수 있다.
3. 상향식 접근을 통해 루트값을 갱신하자
*/

function solution(triangle) {
  const dp = triangle;
  for (let i = dp.length - 2; i >= 0; i--) {
    for (let j = 0; j < dp[i].length; j++) {
      dp[i][j] += Math.max(dp[i + 1][j], dp[i + 1][j + 1]);
    }
  }
  return dp[0][0];
}
