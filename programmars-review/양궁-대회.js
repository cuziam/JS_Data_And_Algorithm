/**
양궁대회를 한다.
연속 우승한 사람에게는 페널티를 부여.
라이언(이전 우승자), 어피치가 승부.
1. 어피치 n발 쏘고, 라이언이 n발을 쏜다.
2. 점수판은 양궁과 동일.
3. 동일점을 동일한 횟수로 맞출 경우. 어피치가 k점을 가져감.
- 횟수가 다르면 더 많은 횟수를 가진 사람이 가져감
- 못 맞추면 점수 없음
- 동일점 여러 번 맞춰봤자 동일한 점수임. 합산 X

라이언이 가장 큰 점수로 이기려면 n발의 화살을 어디쏴야할까.
우승 못하면 -1리턴
input
화살개수 n, 어피치가 점수 별 맞춘 횟수 info 배열
주의! info의 인덱스, -1리턴

고득점 하려면?
라이언은 어피치와 동일한 횟수를 쏴야한다.
반드시 동일점수에서 어피치보다 한번 더 맞혀야함.
-높은 점수를 가진 영역부터 어피치에게서 뺏어오는 게 좋다.
-제일 높은 점수를 포기하면, 어피치가 가진 다른 점수 중 높은 것들을 차례대로 뺏는다
-못 뺏게 될 때는 미점유 영역을 높은 점수부터 가져간다.

구현하려면?
라이언의 점수표(lionTable)생성.
라이언의 남은 화살 갯수(restNum)를 저장한다(초기엔 n).
라이언의 총 점수 lionTotal=0생성
어피치의 총점(apeachTotal)  계산.

info를 뒤에서부터 순회한다. 큰 점수부터 방문하기 위함이다.    
    어피치의 점수를 큰 것 부터 읽는다.
    score=10-i

    apeachTable[i]>=lionTable[i] && apeachTable[i]>restNum
        usedNum=apeachTable[i]+1;
        lionTable갱신 lionTable[i]=usedNum로
        lionTotal+=score
        rest-=usedNum

    아래 부분은 쓰지 않음!!!!!
    restNum이 0이면
        lionTable에서 제일 높은 점수부터 쏜 횟수가 2이상인 것 중 검색
            newtotal=lionTotal-(score)
            if(lionTotal<newTotal)
                rest+=lionTable[i]
                lionTable[i]=0;
            else
                break
다 했으면? lionTotal<=어피치 총점?[-1]:lionTable

*/
function solution(n, info) {
  const lionTable = Array(11).fill(0);
  let restNum = n;
  let lionTotal = 0;
  const apeachTotal = info.reduce((acc, cur, idx) => (cur !== 0 ? acc + 10 - idx : acc), 0);

  console.log(info, apeachTotal);

  for (let i = 0; i < info.length; i++) {
    const score = 10 - i;
    if (info[i] >= lionTable[i] && info[i] < restNum) {
      const usedNum = info[i] + 1;
      lionTable[i] = usedNum;
      lionTotal += score;
      restNum -= usedNum;
    }
  }
  console.log(lionTable, lionTotal);
}
solution(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1]);
