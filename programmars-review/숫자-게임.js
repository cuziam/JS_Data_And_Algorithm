function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  let answer = 0;
  let i = 0;
  let j = 0;
  while (j < B.length) {
    if (A[i] < B[j]) {
      answer++;
      i++;
    }
    j++;
  }
  return answer;
}
