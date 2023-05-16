function countDown(num) {
  if (num <= 0) {
    console.log('All done!');
    return;
  }
  num--;
  countDown(num);
}
countDown(10);

function sumRange(num) {
  // base case
  if (num === 1) return 1;
  // different input
  return num + sumRange(num - 1);
}
console.log(sumRange(8));

// 언제나 base case와 different input이 적용되는지를 확인해야한다.
// 둘 중 하나라도 설정해주지 않으면 call stack 초과 오류를 발생한다.
function factorial(num) {
  // base case
  if (num === 1) return 1;
  // different input
  return num * factorial(num - 1);
}
console.log(factorial(8));
