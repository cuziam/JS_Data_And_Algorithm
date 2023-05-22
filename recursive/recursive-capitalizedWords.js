// 이 문제는 설명이 너무 부족했어서 상상으로 예시를 만들어서 풀어야했음...
function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  const res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  return res;
}
