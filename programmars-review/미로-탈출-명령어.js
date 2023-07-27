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

const directions = ['d', 'l', 'r', 'u'];
const dx = [1, 0, 0, -1]; // down, left, right, up
const dy = [0, -1, 1, 0];
let answer = '';

function isValid(x, y, n, m) {
  return x > 0 && y > 0 && x <= n && y <= m;
}

function dfs(x, y, count, path, n, m, k, r, c) {
  if (count > k) return;

  if (x === r && y === c && count === k) {
    if (!answer || path < answer) {
      answer = path;
    }
    return;
  }

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (isValid(nx, ny, n, m)) {
      dfs(nx, ny, count + 1, path + directions[i], n, m, k, r, c);
    }
  }
}

function solution(n, m, x, y, r, c, k) {
  answer = '';
  dfs(x, y, 0, '', n, m, k, r, c);
  return answer ? answer : 'impossible';
}

function solution(n, m, x, y, r, c, k) {
  const dx = [1, 0, 0, -1]; // down, left, right, up
  const dy = [0, -1, 1, 0];
  const dirs = ['d', 'l', 'r', 'u'];

  let dp = Array.from({ length: n + 1 }, () => Array.from({ length: m + 1 }, () => Array(k + 1).fill('impossible')));

  dp[x][y][0] = '';

  for (let move = 0; move < k; ++move) {
    for (let i = 1; i <= n; ++i) {
      for (let j = 1; j <= m; ++j) {
        if (dp[i][j][move] === 'impossible') continue;

        for (let dir = 0; dir < 4; ++dir) {
          let nx = i + dx[dir];
          let ny = j + dy[dir];
          if (nx >= 1 && ny >= 1 && nx <= n && ny <= m) {
            let np = dp[i][j][move] + dirs[dir];
            if (dp[nx][ny][move + 1] > np) {
              dp[nx][ny][move + 1] = np;
            }
          }
        }
      }
    }
  }

  return dp[r][c][k];
}

function getShortestStep(x, y, r, c) {
  return Math.abs(r - x) + Math.abs(c - y);
}
function isPossiblePath(x, y, r, c, k) {
  const shortestStep = getShortestStep(x, y, r, c);
  return (k - shortestStep) % 2 === 0;
}
function solution2(n, m, x, y, r, c, k) {
  let answer = '';
  if (isPossiblePath(x, y, r, c, k) === false) return 'impossible';

  let direction = {
    d: 0,
    l: 0,
    r: 0,
    u: 0,
  };
  x > r ? (direction[u] += x - r) : (direction[d] += r - x);
  y > c ? (direction[l] += y - c) : (direction[r] += c - y);
  answer.push('d'.repeat(direction['d']));
  let d = Math.min(Math.floor(k / 2), n - (x + direction['d']));
  answer.push('d'.repeat(d));
  direction['u'] += d;
  k -= 2 * d;

  answer.push('l'.repeat(direction['l']));
  let l = Math.min(Math.floor(k / 2), y - direction['l'] - 1);
  answer.push('l'.repeat(l));
  direction['r'] += l;
  k -= 2 * l;

  answer.push('rl'.repeat(Math.floor(k / 2)));
  answer.push('r'.repeat(direction['r']));
  answer.push('u'.repeat(direction['u']));

  return answer.join('');
}
