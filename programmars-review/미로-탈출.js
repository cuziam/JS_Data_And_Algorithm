function solution(maps) {
  const maxRow = maps.length;
  const maxCol = maps[0].length;

  function stepsToTarget(startPos, target) {
    const tempMaps = maps;
    const queue = [];
    queue.push(startPos);
    while (queue.length > 0) {
      const curNode = queue.shift();
      const [row, col, steps] = curNode;
      if (row >= 0 && col >= 0 && row < maxRow && col < maxCol && tempMaps[row][col] !== 'X') {
        if (tempMaps[row][col] === target) {
          return steps;
        }
        tempMaps[row][col] = 'X';
        queue.push([row, col + 1, steps + 1]);
        queue.push([row, col - 1, steps + 1]);
        queue.push([row + 1, col, steps + 1]);
        queue.push([row - 1, col, steps + 1]);
      }
    }
    return -1;
  }
  let result = 0;
  const targets = {
    S: 'L',
    L: 'E',
  };
  for (let row = 0; row < maps.length; row++) {
    for (let col = 0; col < maps.length; col++) {
      const curVal = maps[row][col];
      if (targets[curVal]) {
        const steps = stepsToTarget([row, col, 0], targets[curVal]);
        if (steps < 0) {
          return -1;
        }
        result += steps;
      }
    }
  }
  return result;
}

function solution(maps) {
  const maxRow = maps.length;
  const maxCol = maps[0].length;
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let start, lever, exit;

  for (let i = 0; i < maxRow; i++) {
    for (let j = 0; j < maxCol; j++) {
      if (maps[i][j] === 'S') start = [i, j];
      if (maps[i][j] === 'L') lever = [i, j];
      if (maps[i][j] === 'E') exit = [i, j];
    }
  }

  const bfs = (start, end) => {
    const visited = Array.from({ length: maxRow }, () => Array(maxCol).fill(false));
    const queue = [[...start, 0]];
    visited[start[0]][start[1]] = true;

    while (queue.length > 0) {
      const [x, y, steps] = queue.shift();
      if (x === end[0] && y === end[1]) return steps;
      for (let [dx, dy] of dirs) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx >= 0 && nx < maxRow && ny >= 0 && ny < maxCol && !visited[nx][ny] && maps[nx][ny] !== 'X') {
          queue.push([nx, ny, steps + 1]);
          visited[nx][ny] = true;
        }
      }
    }
    return -1;
  };

  const leverDist = bfs(start, lever);
  const exitDist = bfs(lever, exit);
  return leverDist === -1 || exitDist === -1 ? -1 : leverDist + exitDist;
}
