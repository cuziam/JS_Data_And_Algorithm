// naive approach
function solution(n) {
  let primeCount = 0;
  function isPrime(k) {
    for (let i = 2; i <= Math.sqrt(k); i++) {
      if (k % i === 0) {
        return false;
      }
    }
    return true;
  }
  for (let i = 2; i <= n; i++) {
    if (isPrime(i) === true) primeCount++;
  }
  return primeCount;
}

// 에라토스테네스의 체
function countPrimes(n) {
  const primes = new Array(n + 1).fill(true);
  primes[0] = primes[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (primes[i]) {
      for (let j = i * i; j <= n; j += i) {
        primes[j] = false;
      }
    }
  }

  let count = 0;
  for (let k = 2; k <= n; k++) {
    if (primes[k]) {
      count++;
    }
  }

  return count;
}
