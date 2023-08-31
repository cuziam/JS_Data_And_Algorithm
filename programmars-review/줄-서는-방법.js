function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

function solution(n, k) {
  const answer = [];
  const arr = Array.from({ length: n }, (_, idx) => idx + 1);

  while (n > 0) {
    const fac = factorial(n - 1); // (n-1)! 계산
    const i = Math.ceil(k / fac) - 1; // 올림 연산으로 인덱스 계산

    answer.push(arr[i]);
    arr.splice(i, 1);

    k -= i * fac; // k 업데이트
    n--; // n 업데이트
  }

  return answer;
}
