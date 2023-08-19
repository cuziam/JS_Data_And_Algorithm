function solution(data, col, rowBegin, rowEnd) {
  if (rowBegin === rowEnd) return 0;
  data.sort((a, b) => {
    const colIdx = col - 1;
    if (a[colIdx] < b[colIdx]) {
      return -1;
    }
    if (a[colIdx] === b[colIdx]) {
      if (a[0] > b[0]) {
        return -1;
      }
      if (a[0] === b[0]) {
        return 0;
      }
      return 1;
    }
    return 1;
  });
  console.log(data);
  const remainderData = data.map((tuple, idx) => {
    const row = idx + 1;
    return tuple.reduce((acc, cur) => acc + (cur % row), 0);
  });
  const rowBeginIdx = rowBegin - 1;
  const rowEndIdx = rowEnd - 1;
  let answer = remainderData[rowBeginIdx];
  for (let i = rowBeginIdx; i <= rowEndIdx - 1; i++) {
    answer ^= remainderData[i + 1];
  }
  return answer;
}

// 찾아보니 더 좋은 sort함수 구현이 있었다.
function sort(a, b, col) {
  return a[col - 1] - b[col - 1] || b[0] - a[0];
}
