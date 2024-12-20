function solution(progresses, speeds) {
  const result = [];
  let count = 0;
  for (let i = 0; i < progresses.length; i++) {
    const curRemainDays = Math.ceil((100 - progresses[i]) / speeds[i]);
    const nextRemainDays = Math.ceil((100 - progresses[i + 1]) / speeds[i + 1]);
    count++;
    if (curRemainDays < nextRemainDays) {
      result.push(count);
      count = 0;
    }
    // 배열의 끝에 다다랐을 때 count도 push한다.
    if (i === progresses.length - 1) {
      result.push(count);
    }
  }
  return result;
}

/*
뒤에 있는 녀석이 먼저 개발될 수 있어도
앞에 있는 기능이 일단 배포되어야 한다

각 배포 때마다 몇 개의 기능이 배포되는지 배열에 담아 반환해야함.
필요한 것
-각 기능에 대해 남은 일수를 계산해야 함.
-count변수
-앞 기능이 뒤의 기능보다 남은 일수가 작다면 push count
*/
function solution2(progresses, speeds) {
  const result = [];
  let count = 0;
  let maxRemainDays = Math.ceil((100 - progresses[0]) / speeds[0]);
  for (let i = 0; i < progresses.length; i++) {
    const curRemainDays = Math.ceil((100 - progresses[i]) / speeds[i]);
    if (curRemainDays > maxRemainDays) {
      maxRemainDays = curRemainDays;
      result.push(count);
      count = 1;
    } else {
      count++;
    }
    if (i === progresses.length - 1) {
      result.push(count);
    }
  }
  return result;
}

/*
배포 때 마다 몇 개의 기능이 배포되는 지를 배열형태로 반환해라
작업의 진도와 속도가 주어진다.
*/
function solution3(progresses, speeds) {
  // 며칠 걸리는 지 계산
  const costList = progresses.map((progress, idx) => Math.ceil((100 - progress) / speeds[idx]));

  // 결과 계산
  const results = [0];
  let maxCost = costList[0];
  for (let i = 0, j = 0; i < costList.length; i++) {
    if (costList[i] <= maxCost) {
      results[j]++;
    } else {
      maxCost = costList[i];
      results[++j] = 1;
    }
  }

  console.log(results);
  return results;
}
