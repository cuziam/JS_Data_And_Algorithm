function solution(m, n, board) {
  let count = 0;
  board = board.map(v => v.split(''));
  // 1. 부셔질 블록 찾기
  while (true) {
    const blockToDestroy = new Set();
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (
          board[i][j] !== 0 &&
          board[i][j] === board[i + 1][j] &&
          board[i][j] === board[i][j + 1] &&
          board[i][j] === board[i + 1][j + 1]
        ) {
          blockToDestroy.add([i, j]);
          blockToDestroy.add([i + 1, j]);
          blockToDestroy.add([i, j + 1]);
          blockToDestroy.add([i + 1, j + 1]);
        }
      }
    }
    // 2. 부숴질 블록의 값을 0으로 설정
    // +루프 중단 조건: 부숴질 블록이 없는 경우
    if (blockToDestroy.size === 0) break;
    count += blockToDestroy.size;
    console.log(count, blockToDestroy);
    blockToDestroy.forEach(v => {
      board[v[0]][v[1]] = 0;
    });
    // 3. 재정렬
    for (let i = m - 1; i >= 0; i--) {
      for (let j = n - 1; j >= 0; j--) {
        if (board[i][j] === 0) {
          for (let k = i - 1; k >= 0; k--) {
            if (board[k][j] !== 0) {
              [board[i][j], board[k][j]] = [board[k][j], board[i][j]];
              break;
            }
          }
        }
      }
    }
  }
  return count;
}

function solution2(m, n, board) {
  board = board.map(element => element.split(''));

  let blockDestroyed = true;
  let count = 0;

  // While we can destroy blocks, keep going
  while (blockDestroyed) {
    const blocksToDestroy = [];

    // Find blocks to destroy
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        const current = board[i][j];
        if (current && current === board[i + 1][j] && current === board[i][j + 1] && current === board[i + 1][j + 1]) {
          blocksToDestroy.push([i, j], [i + 1, j], [i, j + 1], [i + 1, j + 1]);
        }
      }
    }

    // If we found blocks to destroy, count and destroy
    if (blocksToDestroy.length > 0) {
      blocksToDestroy.forEach(([i, j]) => {
        if (board[i][j] !== 0) {
          count++;
          board[i][j] = 0;
        }
      });

      // Gravity - pull blocks down
      for (let j = 0; j < n; j++) {
        let emptyRow = m - 1;
        for (let i = m - 1; i >= 0; i--) {
          if (board[i][j] !== 0) {
            [board[i][j], board[emptyRow][j]] = [board[emptyRow][j], board[i][j]];
            emptyRow--;
          }
        }
      }
    } else {
      blockDestroyed = false;
    }
  }
  return count;
}

function solution3(m, n, board) {
  board = board.map(v => v.split(''));
  let result = 0;
  // step 1,2
  function dfs(i, j) {
    const current = board[i][j];
    board[i][j] = 0;
    if (current && current === board[i + 1][j] && current === board[i][j + 1] && current === board[i + 1][j + 1]) {
      return 1 + dfs(i + 1, j) + dfs(i, j + 1) + dfs(i + 1, j + 1);
    }
    // basecase
    return 1;
  }
  let canLoop = true;
  while (canLoop) {
    let count = 0;
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        const current = board[i][j];
        if (
          current !== 0 &&
          current === board[i + 1][j] &&
          current === board[i][j + 1] &&
          current === board[i + 1][j + 1]
        ) {
          count += dfs(i, j);
        }
      }
    }
    // loop end condtion
    if (count === 0) {
      canLoop = false;
    } else {
      result += count;
    }
    // step 3
    for (let j = 0; j < n; j++) {
      let emptyRow = m - 1;
      for (let i = m - 1; i >= 0; i--) {
        if (board[i][j] !== 0) {
          [board[i][j], board[emptyRow][j]] = [board[emptyRow][j], board[i][j]];
          emptyRow--;
        }
      }
    }
  }
  console.log(result);
  return result;
}
solution3(6, 6, ['TTTANT', 'RRFACC', 'RRRFCC', 'TRRRAA', 'TTMMMF', 'TMMTTJ']); // 15
