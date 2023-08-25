/* 그라디언트와도 관련이 있어보임. 풀이는 누적합으로 품 */
function solution(board, skills) {
  const arr = Array.from({ length: board.length + 1 }, () => Array(board[0].length + 1).fill(0));
  skills.forEach(skill => {
    const [type, r1, c1, r2, c2, degree] = skill;
    const signOfDamage = type === 1 ? -1 : 1;
    arr[r1][c1] += signOfDamage * degree;
    arr[r2 + 1][c1] += -signOfDamage * degree;
    arr[r1][c2 + 1] += -signOfDamage * degree;
    arr[r2 + 1][c2 + 1] += signOfDamage * degree;
  });
  // arr의 각 열에 대해 누적합 구하기
  console.log(arr);
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      arr[i + 1][j] += arr[i][j];
    }
  }
  // arr의 각 행에 대해 누적합 구하기
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      arr[i][j + 1] += arr[i][j];
    }
  }
  // board에 총 변화량(arr) 더하기
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      board[i][j] += arr[i][j];
    }
  }

  // 부숴지지 않은 건물의 수 구하기
  let answer = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      answer += board[i][j] > 0 ? 1 : 0;
    }
  }
  return answer;
}
