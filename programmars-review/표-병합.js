const sheet = Array.from({ length: 50 }, () => Array(50));
const hash = {}; // update2때 사용
const adjacencyList = new Map(); // merge관리
function update1(r, c, value) {
  sheet[r][c] = value;
  if (!hash[value]) hash[value] = [];
  hash[value].push([r, c]);
}
// 동일값일 때도 생각해야 함
function update2(value1, value2) {
  if (value1 === value2) {
    console.log('both values are same');
    return;
  }
  hash[value1].forEach(pos => {
    sheet[pos[0]][pos[1]] = value2;
    if (!hash[value2]) hash[value2] = [];
    hash[value2].push([pos[0], pos[1]]);
  });
  delete hash.value1;
}

function merge(r1, c1, r2, c2) {
  if (r1 === c1 && r2 === c2) return;
  if ((sheet[r1][c1] && sheet[r2][c2]) || (sheet[r1][c1] && !sheet[r2][c2])) {
    sheet[r2][c2] = sheet[r1][c1];
  } else if (!sheet[r1][c1] && sheet[r2][c2]) {
    sheet[r1][c1] = sheet[r2][c2];
  }
  // adjacencyList 추가
  if (!adjacencyList.has([r1, c1])) {
    adjacencyList.set([r1, c1], [r2, c2]);
    adjacencyList.set([r2, c2], [r1, c1]);
  } else {
    const startNode = adjacencyList.get([r1, c1]);
    const endNode = adjacencyList.get([r2, c2]);
    adjacencyList.set([r1, c1], startNode.push([r2, c2]));
    adjacencyList.set([r2, c2], endNode.push([r1, c1]));
  }
}

function unmerge(r, c) {
  const visited = new Map();
  const queue = [[r, c]];
  visited.set([r, c], true);
  while (queue.length > 0) {
    const curNode = queue.shift();
    const neighbors = adjacencyList.get(curNode);
    console.log(neighbors);
    neighbors.forEach(neighbor => {
      if (!visited.has(neighbor)) {
        if (sheet[neighbor[0]][neighbor[1]]) sheet[r][c] = sheet[neighbor[0]][neighbor[1]];
        sheet[neighbor[0]][neighbor[1]] = undefined;
        visited.set([neighbor[0], neighbor[1]], true);
        queue.push(neighbor);
      }
    });
  }
}

function print(r, c) {
  console.log(sheet[r][c]);
}
function solution(commands) {
  commands.forEach(command => {
    const tokens = command.split(' ');
    const order = tokens[0];
    const argument = tokens.slice(1);
    if (order === 'UPDATE' && tokens.length === 4) {
      update1(...argument);
    } else if (order === 'UPDATE' && tokens.length === 3) {
      update2(...argument);
    } else if (order === 'MERGE') {
      merge(...argument);
    } else if (order === 'UNMERGE') {
      // unmerge(...argument);
    } else if (order === 'PRINT') {
      print(...argument);
    }
  });
}

solution([
  'UPDATE 1 1 menu',
  'UPDATE 1 2 category',
  'UPDATE 2 1 bibimbap',
  'UPDATE 2 2 korean',
  'UPDATE 2 3 rice',
  'UPDATE 3 1 ramyeon',
  'UPDATE 3 2 korean',
  'UPDATE 3 3 noodle',
  'UPDATE 3 4 instant',
  'UPDATE 4 1 pasta',
  'UPDATE 4 2 italian',
  'UPDATE 4 3 noodle',
  'MERGE 1 2 1 3',
  'MERGE 1 3 1 4',
  'UPDATE korean hansik',
  'UPDATE 1 3 group',
  'UNMERGE 1 4',
  'PRINT 1 3',
  'PRINT 1 4',
]);
