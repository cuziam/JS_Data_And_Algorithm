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
        Number(infoArr[4]) >= Number(queryArr[4])
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
