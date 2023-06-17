/*
<문제>
로봇 강아지 산책 수행
미리 입력된 명령에 따라 수행.
    명령 수행 이전에
    1. 공원 벗어나는지 확인
    2. 장애물을 만나는지 확인
    => 해당 경우엔 다음 명령 수행

좌표칸의 값 H*W 형식
park: 공원 문자열 배열=> 문자열을 쌓으면 모양이 나온다.
routes: 명령 문자열 배열=> op n구조.

최종적인 놓인 위치result를 [H,W]형식으로 리턴하시오.
해야할 것.
1. 루트를 하나씩 읽기.
2. 루트를 읽을 때 park의 장애물 조건을 고려하는 것.
3. 투트를 읽을 때 park의 크기를 고려하는 것.

로직 짜기
recursive DFS를 활용할 수 있을 것 같다.
아니면 동서남북 방향에 대해 딕셔너리를 만들 수도 있을 것 같다.

나는 후자를 선택해보았다.

로직
선형순회로 초기 위치 row, col를 찾는다.
동서남북 방향에 대한 딕셔너리를 만든다.

주어진 routes 명령을 차례대로 읽는다.
    명령을 파싱한다.
    거리의 한도를 넘지 않는 선에서 && (공원을 벗어나지 않거나 X를 만나지 않으면서)
    움직일 거리를 갱신한다.
    처음 위치를 움직일 거리만큼 갱신한다.
위치값 반환
*/
function solution(park, routes) {
  let start;
  const height = park.length;
  const width = park[0].length;
  for (let row = 0; row < park.length; row++) {
    for (let col = 0; col < park[0].length; col++) {
      if (park[row][col] === 'S') {
        start = [row, col];
      }
    }
  }

  // 방향을 나타내는 딕셔너리
  const directions = {
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
    N: [-1, 0],
  };

  for (const route of routes) {
    const [direction, distanceStr] = route.split(' ');
    const distance = parseInt(distanceStr);
    let [moveRow, moveCol] = start;

    let count = 0;
    while (count < distance) {
      moveRow += directions[direction][0];
      moveCol += directions[direction][1];
      if (moveRow < 0 || moveCol < 0 || moveRow >= height || moveCol >= width || park[moveRow][moveCol] === 'X') break;
      count++;
    }
    if (count === distance) start = [moveRow, moveCol];
  }
  return start;
}
solution(['OSO', 'OOO', 'OXO', 'OOO'], ['E 2', 'S 3', 'W 1']);
