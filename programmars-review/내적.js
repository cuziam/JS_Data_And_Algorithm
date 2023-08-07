function solution(a, b) {
  return a.reduce((acc, ele, idx) => acc + ele * b[idx], 0);
}
