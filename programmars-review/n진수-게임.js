function solution(n, t, m, p) {
  let answer = '';
  let count = 0;
  for (let num = 0; answer.length < t; num++) {
    const convertedNum = num.toString(n).toUpperCase();
    for (let i = 0; i < convertedNum.length; i++) {
      if (count % m === p - 1) {
        answer += convertedNum[i];
        if (answer.length === t) return answer;
      }
      count++;
    }
  }
  return answer; // 혹시나 반복문을 빠져나가는 경우를 대비한 반환문
}
