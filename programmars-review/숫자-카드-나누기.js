function findGcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function findCommonDivisors(numbers) {
  if (numbers.length < 2) {
    return numbers;
  }
  let gcd = numbers[0];

  // 배열의 모든 수의 GCD를 구하기
  for (let i = 1; i < numbers.length; i++) {
    gcd = findGcd(gcd, numbers[i]);
  }

  // GCD의 약수 찾기.
  const commonDivisors = [];
  for (let i = 1; i <= gcd; i++) {
    if (gcd % i === 0) {
      commonDivisors.push(i);
    }
  }
  return commonDivisors;
}

function solution(arrayA, arrayB) {
  const commonDivisorA = findCommonDivisors(arrayA);
  const commonDivisorB = findCommonDivisors(arrayB);

  const case1 = commonDivisorA.filter(divisor => arrayB.every(ele => ele % divisor !== 0));
  const case2 = commonDivisorB.filter(divisor => arrayA.every(ele => ele % divisor !== 0));
  const result = Math.max(...case1, ...case2);
  return result <= 1 ? 0 : result;
}
function solution2(arrayA, arrayB) {
  const commonDivisorA = findCommonDivisors(arrayA);
  const commonDivisorB = findCommonDivisors(arrayB);

  const case1 = commonDivisorA.filter(divisor => arrayB.every(ele => ele % divisor !== 0));
  const case2 = commonDivisorB.filter(divisor => arrayA.every(ele => ele % divisor !== 0));
  const result = Math.max(...case1, ...case2);
  return result <= 1 ? 0 : result;
}
