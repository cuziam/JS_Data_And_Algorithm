/**
각 유형 별 몇 점인가 계산해야함.

result=[]
각 유형에 따른 점수를 저장하는 카운터 생성
키: 성격유형(문자열) 값: 키가 문자열 값이 점수인 객체
for idx in survey
        survey파싱
        choices[i]<4
            score=4-choices[idx]
            counters[survey[idx][0]]+=score
        choices[i]>4 counters[survey][idx][1]
            score=choices[idx]-4
            count...[idx][1]]+=score

카운터를 바탕으로 정답 만들기
types= [[R,T],...,[A,N]].map
    types[i][0]>=types
        return types[i][0]
    else
        return types[i][1]
.join()
문제되는 부분: survey에서 문자열 순서 바뀜
그냥 문자 하나당 카운터를 사용하면?=> 나중에 정렬이 문제.

 */
function solution(survey, choices) {
  let types = [
    ['R', 'T'],
    ['C', 'F'],
    ['J', 'M'],
    ['A', 'N'],
  ];
  const counter = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  for (let i = 0; i < survey.length; i++) {
    let score;
    let char;
    if (choices[i] < 4) {
      score = 4 - choices[i];
      char = survey[i][0];
    }
    if (choices[i] > 4) {
      score = choices[i] - 4;
      char = survey[i][1];
    }
    counter[char] = (counter[char] || 0) + score;
  }
  console.log(counter);
  types = types
    .map((ele, idx) => {
      if (counter[ele[0]] >= counter[ele[1]]) {
        return ele[0];
      }
      return ele[1];
    })
    .join('');
  console.log(types);
  return types;
}
solution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5]);
