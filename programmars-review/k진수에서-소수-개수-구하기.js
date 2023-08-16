function isPrime(str) {
  const num = Number(str);
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function solution(n, k) {
  const baseK = n.toString(k);
  const matched = baseK.match(/[1-9]+/g);
  const matchedExceptZero = matched.filter(ele => ele !== '1');
  return matchedExceptZero.reduce((acc, cur) => (isPrime(cur) === true ? acc + 1 : acc), 0);
}
