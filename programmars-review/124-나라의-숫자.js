function solution(n) {
  let answer = '';
  const dict = [4, 1, 2];
  const subDict = [3, 1, 2];
  for (let i = 1; n > 0; i++) {
    answer = dict[n % 3] + answer;
    console.log(subDict[n % 3] * 3 ** (i - 1));
    n -= subDict[n % 3] * 3 ** (i - 1);
    console.log(n);
    console.log();
  }
  // rever
}
