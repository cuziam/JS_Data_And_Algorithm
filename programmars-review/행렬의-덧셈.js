function solution(arr1, arr2) {
  const maxRow = arr1.length;
  const maxCol = arr1[0].length;
  const result = Array.from({ length: maxRow }, () => Array(maxCol).fill(0));
  for (let row = 0; row < maxRow; row++) {
    for (let col = 0; col < maxCol; col++) {
      result[row][col] = arr1[row][col] + arr2[row][col];
    }
  }
  return result;
}
