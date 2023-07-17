/*
점수가 지금까지 출연가수의 상위 k번째 이내면 명예의 전당에 들어간다.
명예의 전당 최하위 점수를 반환하는 배열을 만들어라.

내가 생각한 것
우선순위 큐. 정렬은 단순하게 sort쓰다가, 효율탈락하면 최소 힙 만들어서 대응
*/

function solution(k, scores) {
  const result = [];
  const hallOfFame = [];
  scores.forEach((score, idx) => {
    if (idx < k) {
      hallOfFame.push(score);
    } else if (hallOfFame[hallOfFame.length - 1] < score) {
      hallOfFame.pop();
      hallOfFame.push(score);
    }
    hallOfFame.sort((a, b) => b - a); // 이 부분은 속도개선 가능
    result.push(hallOfFame[hallOfFame.length - 1]);
  });
  return result;
}
