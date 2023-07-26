/*
미로 탈출
격자 사이즈(n*m)
start (x y)
end (r,c)
이동해야할 거리 (k)

<주의>
미로의 좌표는 (1,1)부터 시작
같던 길을 다시 갈 수 있다.
없다면 "impossible"

미로탈출 경로-> 문자열이 사전 순으로 가장 빠른 경로로
이동경로 'l' 'r' 'u' 'd'

1. 미로 탈출이 불가능한 경우
-주어진 거리가 최단거리 보다 짧은 경우
-주어진 거리가 최단거리 + 2k꼴이 아닌 경우

2.미로 탈출이 가능할 때 사전 순으로 빠른 경로를 선택하는 방법
-d l r u 순서로 사전 순으로 빠르다.
-d와 u, 그리고 l과 r은 상호의존관계이다.
-탈출 지점 기준으로 위아래 혹은 오른쪽왼쪽 중 하나에 공간이 있다면
    k/2만큼 d,u나 l,r을 (문자 배열에)추가한다.
    
3.
*/
function getShortestStep(x, y, r, c) {
  return Math.abs(r - x) + Math.abs(c - y);
}
function isPossiblePath(x, y, r, c, k) {
  const shortestStep = getShortestStep(x, y, r, c);
  return (k - shortestStep) % 2 === 0;
}
function getRestSteps(x, y, r, c, k) {
  if (isPossiblePath(x, y, r, c, k) === true) {
    const shortestStep = getShortestStep(x, y, r, c);
    return k - shortestStep;
  }
  console.log('There is no possible path');
}
function getEmptyDirections(n, m, r, c) {
  const emptyDirections = [];
  const directions = {
    l: [-1, 0],
    r: [1, 0],
    u: [0, -1],
    d: [0, 1],
  };
  for (const dir in directions) {
    const newDir = [r + directions[dir][0], c + directions[dir][1]];
    if (newDir[0] > 0 && newDir[0] <= m && newDir[1] > 0 && newDir[1] <= n) {
      console.log(dir, newDir);
      emptyDirections.push(dir);
    }
  }
  return emptyDirections;
}
function solution(n, m, x, y, r, c, k) {
  const charArr = [];
  if (isPossiblePath(x, y, r, c, k) === false) return 'impossible';
  const restSteps = getRestSteps(x, y, r, c, k);
  console.log(getEmptyDirections(n, m, r, c));
}
