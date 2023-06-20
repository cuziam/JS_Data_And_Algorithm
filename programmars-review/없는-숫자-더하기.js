function solution(numbers) {
  return 45 - numbers.reduce((acc, cur) => cur + acc);
}
