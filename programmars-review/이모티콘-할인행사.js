function solution(users, emoticons) {
  // emoticons에 책정한 모든 할인율의 경우 계산하기.
  const dcCases = [];
  const dcElements = [10, 20, 30, 40];
  function generateDcCases(curArr) {
    // basecase
    if (curArr.length === emoticons.length) {
      dcCases.push(curArr);
      return;
    }
    for (let i = 0; i < dcElements.length; i++) {
      const newArr = [...curArr];
      newArr.push(dcElements[i]);
      generateDcCases(newArr, i + 1);
    }
  }
  generateDcCases([]);
}
solution(
  [
    [40, 10000],
    [25, 10000],
  ],
  [7000, 9000]
);
