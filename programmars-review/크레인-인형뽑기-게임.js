function solution(board, moves) {
  let answer = 0;
  const stack = [];
  for (let i = 0; i < moves.length; i++) {
    const targetIdx = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      const curDoll = board[j][targetIdx];
      if (curDoll !== 0) {
        stack.push(curDoll);
        board[j][targetIdx] = 0;
        break;
      }
    }
    while (stack.length >= 2 && stack[stack.length - 1] === stack[stack.length - 2]) {
      stack.pop();
      stack.pop();
      answer += 2;
    }
  }
  return answer;
}
