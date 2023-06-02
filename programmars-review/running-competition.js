/*
while(callings.length===0)
calling: queue=> shift로 받아올 수 있음
calledPlayer 선언
players에서 calledPlayer의 인덱스 검색(이름이 유니크하므로 indexOf사용해도 됨)
인덱스 저장(calledPlayerIdx)
Swap한다.
*/
// 이 방법 쓰니까 75점 나왔음... 시간 초과됨.
// 생각해보니까 중간에 어떤 과정을 거쳤는지는 별로 안 중요함. 최종 순위가 중요하다.
// counter써서 구하고. 최종적으로 얼마 차이나는지 구한다. 추월횟수다.
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
// 충실한 구현이지만 뭔가 부족하다 이거다.
function solution(players, callings) {
  for (let i = 0; i < callings.length; i++) {
    const calledPlayer = callings[i];
    //swap은 속도상 문제가 크게 되지 않을 것 같은데, indexOf는 속도에 영향을 많이 줄 것이다.
    //Players와 callings의 길이에 비례해서, indexOf의 속도가 모두 느려지기 때문이다.
    //
    const playerIdx = players.indexOf(calledPlayer);
    swap(players, playerIdx, playerIdx - 1);
  }
  return players;
}
