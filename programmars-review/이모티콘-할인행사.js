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
  // 가입자 수 & 매출액의 모든 경우의 수
  let resultArr = [0, 0];
  for (const dcCase of dcCases) {
    // dcCase마다 가입자 수와 매출 계산
    let subscriber = 0;
    let totalSales = 0;
    for (const user of users) {
      let sales = 0;
      for (const idx in emoticons) {
        if (user[0] <= dcCase[idx]) {
          sales += (emoticons[idx] * (100 - dcCase[idx])) / 100;
        }
        if (user[1] <= sales) {
          sales = 0;
          subscriber++;
          break;
        }
      }
      totalSales += sales;
    }
    if (subscriber > resultArr[0]) {
      resultArr = [subscriber, totalSales];
    } else if (subscriber === resultArr[0] && totalSales > resultArr[1]) {
      resultArr = [subscriber, totalSales];
    }
  }
  return resultArr;
}
solution(
  [
    [40, 10000],
    [25, 10000],
  ],
  [7000, 9000]
);
solution(
  [
    [40, 2900],
    [23, 10000],
    [11, 5200],
    [5, 5900],
    [40, 3100],
    [27, 9200],
    [32, 6900],
  ],
  [1300, 1500, 1600, 4900]
);
