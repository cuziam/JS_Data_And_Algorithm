/*
naive approach: 1~1000까지 전부검사해서 토큰의 수를 저장한다.
*/

function getChunkFreq(str, chunkLength) {
  const counter = {};
  let chunk = '';
  for (let i = 0; i < str.length; i++) {
    chunk += str[i];
    if (chunk.length === chunkLength || i === str.length - 1) {
      counter[chunk] = (counter[chunk] || 0) + 1;
      chunk = '';
    }
  }
  let length = 0;
  for (const key in counter) {
    length += key.length + (counter[key] === 1 ? 0 : 1);
  }
  console.log(counter);
  return length;
}
function solution(s) {
  const sizeArr = [];
  for (let size = 1; size <= s.length; size++) {
    sizeArr.push(getChunkFreq(s, size));
  }
  console.log(sizeArr);
  return Math.min(...sizeArr);
}
