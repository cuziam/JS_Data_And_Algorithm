/*
<출력>
0이상의 정수

<입력>
점수|보너스|[옵션] 형식의 문자열 '3세트'
점수: 0~10 wjdtn
보너스: S,D,T
옵션: *,#=>옵션은 딱 하나 밖에 없다.
    *일 경우엔? 해당 점수와 바로 이전 점수를 2배로 만듬
    #일 경우엔? 해당 점수는 -처리 한다.
    
<주의>
스타상(*)은 첫 번째 기회에서도 나올 수 있다. 이 경우 첫 번째 스타상(*)의 점수만 2배가 된다. (예제 4번 참고)
스타상(*)의 효과는 다른 스타상(*)의 효과와 중첩될 수 있다. 이 경우 중첩된 스타상(*) 점수는 4배가 된다. (예제 4번 참고)
스타상(*)의 효과는 아차상(#)의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상(#)의 점수는 -2배가 된다. (예제 5번 참고)

문자열을 끊는 방식=> 처음이 숫자로 시작하는 문자열

리팩토링: 딕셔너리 사용
*/
//처음 코드
function solution(dartResult) {
  const scores = Array(3).fill(0);
  const tokens = dartResult.match(/\d{1,2}[SDT]([*#]?)/g);
  for (let i = 0; i < 3; i++) {
    let [, score, bonus, option] = tokens[i].match(/(\d{1,2})([SDT])([*#]?)/);
    score = Number(score);
    if (bonus === 'S') scores[i] = score;
    if (bonus === 'D') scores[i] = score ** 2;
    if (bonus === 'T') scores[i] = score ** 3;
    if (option === '*') {
      scores[i] *= 2;
      if (scores[i - 1] !== undefined) {
        scores[i - 1] *= 2;
      }
    }
    if (option === '#') {
      scores[i] = -scores[i];
    }
  }
  return scores.reduce((acc, cur) => acc + cur, 0);
}

//첫 번째 코드 리팩토링 수행.
function solution(dartResult) {
  const tokens = dartResult.match(/\d{1,2}[SDT]([*#]?)/g);
  const scoreTable = { S: 1, D: 2, T: 3 }; //map이 빠르긴 한데 일단 객체사용
  let scores = tokens.map(token => {
    let [, score, bonus, option] = token.match(/(\d{1,2})([SDT])([*#]?)/);
    score = Math.pow(Number(score), scoreTable[bonus]);
    if (option === '*') score *= 2;
    if (option === '#') score *= -1;
    return score;
  });
  for (let i = 1; i < scores.length; i++) {
    if (tokens[i].includes('*')) scores[i - 1] *= 2;
  }
  return scores.reduce((acc, cur) => acc + cur, 0);
}
