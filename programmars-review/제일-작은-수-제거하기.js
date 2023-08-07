function solution(arr) {
  const min = Math.min(...arr);
  const result = arr.filter(ele => ele > min);
  return result.length === 0 ? [-1] : result;
}
