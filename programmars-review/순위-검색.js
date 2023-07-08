function solution(info, query) {
  const result = [];
  // 지원자 파싱
  const infoArr = info.map(ele => ele.split(' '));
  console.log(infoArr);
  // 쿼리 순회
  for (let i = 0; i < query.length; i++) {
    let count = 0;
    // 쿼리 파싱
    const queryArr = query[i].split(' and ');
    queryArr.splice(3, 1, ...queryArr[3].split(' '));
    console.log(queryArr);
    // 지원자
    for (let j = 0; j < infoArr.length; j++) {
      // 쿼리와 매칭되는 사람 수 구하기.
      if (
        (infoArr[j][0] === queryArr[0] || queryArr[0] === '-') &&
        (infoArr[j][1] === queryArr[1] || queryArr[1] === '-') &&
        (infoArr[j][2] === queryArr[2] || queryArr[2] === '-') &&
        (infoArr[j][3] === queryArr[3] || queryArr[3] === '-') &&
        Number(infoArr[j][4]) >= Number(queryArr[4])
      ) {
        count++;
      }
    }
    result.push(count);
  }
  console.log(result);
  return result;
}
solution(
  [
    'java backend junior pizza 150',
    'python frontend senior chicken 210',
    'python frontend senior chicken 150',
    'cpp backend senior pizza 260',
    'java backend junior chicken 80',
    'python backend senior chicken 50',
  ],
  [
    'java and backend and junior and pizza 100',
    'python and frontend and senior and chicken 200',
    'cpp and - and senior and pizza 250',
    '- and backend and senior and - 150',
    '- and - and - and chicken 100',
    '- and - and - and - 150',
  ]
);

function solution2(info, query) {
  const result = [];
  const map = new Map(); // Map을 이용해 쿼리와 지원자를 매칭

  // 이진 검색을 위한 함수
  function binarySearch(arr, score) {
    let start = 0;
    let end = arr.length;
    while (start < end) {
      const mid = Math.floor((start + end) / 2);
      if (arr[mid] >= score) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }
    return arr.length - start; // score 이상인 사람의 수
  }

  // 지원자 정보를 분해하고 모든 경우의 수에 대해 map에 저장
  for (let i = 0; i < info.length; i++) {
    const [lang, job, career, food, score] = info[i].split(' ');
    const scoreNum = Number(score);
    // 모든 조합을 만들어내는 방법
    const keys = ['-', lang].map(a => ['-', job].map(b => ['-', career].map(c => ['-', food].map(d => a + b + c + d))));
    keys.flat(3).forEach(key => {
      const value = map.get(key) || [];
      value.push(scoreNum);
      map.set(key, value);
    });
  }

  // map에 저장된 점수를 오름차순으로 정렬
  map.forEach((value, key) => {
    map.set(
      key,
      value.sort((a, b) => a - b)
    );
  });

  // 쿼리를 순회하며 지원자의 수를 구함
  for (let i = 0; i < query.length; i++) {
    const [lang, job, career, foodScore] = query[i].split(' and ');
    const [food, score] = foodScore.split(' ');
    const scoreNum = Number(score);
    const key = lang + job + career + food;
    const scores = map.get(key) || [];
    result.push(binarySearch(scores, scoreNum)); // 이진 검색을 이용
  }

  return result;
}
