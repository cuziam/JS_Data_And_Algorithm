function solution(arr) {
  let i = 0;
  const result = [];
  while (i < arr.length) {
    if (arr[i] !== arr[i + 1]) {
      result.push(arr[i]);
    }
    i++;
  }
  return result;
}
