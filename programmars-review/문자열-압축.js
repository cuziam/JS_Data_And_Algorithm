function getCompressedLength(str, chunkLength) {
  let i = 0;
  let curChunk = '';
  let nextChunk = '';
  let compressedLength = 0;
  while (i < str.length) {
    // 현재 문자열과 다음 문자열 얻기
    curChunk = str.slice(i, i + chunkLength);
    nextChunk = str.slice(i + chunkLength, i + 2 * chunkLength);
    // 현재 문자열과 다음 문자열이 같으면 compressedLength에 chunkLength+1을
    // 아니면 nextChunk.Length를 더한다.(마지막에 남은 문자열 고려해서 chunkLength대신 nextChunk.Length를 사용함)

    compressedLength += curChunk === nextChunk ? chunkLength + 1 : curChunk.length;
    // i값 변경
    if (curChunk === nextChunk) {
      while (curChunk === nextChunk) {
        i += chunkLength;
        curChunk = str.slice(i, i + chunkLength);
        nextChunk = str.slice(i + chunkLength, i + 2 * chunkLength);
      }
    }
    i += chunkLength;
  }
  return compressedLength;
}
function solution(s) {
  const arr = [];
  for (let i = 1; i <= s.length; i++) {
    arr.push(getCompressedLength(s, i));
  }
  return Math.min(...arr);
}

function getCompressedLength(str, chunkLength) {
  let compressed = '';
  let count = 1;

  for (let i = 0; i < str.length; i += chunkLength) {
    const curChunk = str.slice(i, i + chunkLength);
    const nextChunk = str.slice(i + chunkLength, i + 2 * chunkLength);

    if (curChunk === nextChunk) {
      count++;
    } else {
      compressed += (count > 1 ? String(count) : '') + curChunk;
      count = 1; // 카운트 초기화
    }
  }
  return compressed.length;
}
function solution(s) {
  let min = s.length;
  for (let i = 1; i <= s.length / 2; i++) {
    const length = getCompressedLength(s, i);
    if (length < min) min = length;
  }
  return min;
}
