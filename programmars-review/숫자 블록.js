function largestDivisor(num) {
  // 짝수일 경우 가장 큰 약수는 num / 2
  if (num % 2 === 0) {
    return num / 2;
  }

  // 홀수일 경우에는 제곱근부터 시작해서 2씩 빼면서 계산
  let sqrt = Math.floor(Math.sqrt(num));
  // 만약 sqrt가 짝수이면, 홀수로 만들어줌
  if (sqrt % 2 === 0) sqrt--;

  for (let i = sqrt; i >= 1; i -= 2) {
    if (num % i === 0) {
      // 여기서 num / i 가 num 보다 작은 가장 큰 약수를 반환
      if (num / i !== num) {
        //! !!!!!!!!!!!!!!!!!!!!이 때 이 반환된 수가 천만을 넘어가는 경우가 있기 때문에 에러가 났었다.
        return num / i;
      }
    }
  }
  return 1;
}
function solution(begin, end) {
  const maxVal = 10000000;
  const result = [];

  for (let i = begin; i <= end; i++) {
    if (i == 1) {
      result.push(0);
      continue;
    }
    let found = false;
    for (let j = 2; j <= i / 2; j++) {
      if (i % j == 0 && i / j <= maxVal) {
        result.push(i / j);
        found = true;
        break;
      }
    }
    if (!found) result.push(1);
  }

  return result;
}
//--------------------------------------
function getMaxDivisor(n) {
  if (n === 1) {
    return 0;
  }
  let data = [];
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      data.push(i);
      if (n / i <= 10000000) {
        return Math.floor(n / i);
      }
    }
  }
  if (data.length >= 1) {
    return data[data.length - 1];
  }
  return 1;
}

function solution(begin, end) {
  let answer = [];
  for (let i = begin; i <= end; i++) {
    let maxDivisor = getMaxDivisor(i);
    answer.push(maxDivisor);
  }

  return answer;
}
