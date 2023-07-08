/*
신규 사용자와 기존 사용자 사이의 스테이지 차이가 심함.
게임시간 조절

실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return
배열의 길이=N, 1~N까지의 수가 담긴다.

실패율=해당 스테이지 클리어 못한 플레이어의 수/ 스테이지에 도달한 플레이어 수
N=스테이지의 수
stages=사용자 별? 최종 클리어하지 못한 스테이지

접근
스테이지 별 실패율을 계산하고 배열에 넣고 정렬한다.
스테이지 별 실패율 계산
stages에 나타난 숫자의 갯수/stages에 나타난 숫자까지의 사람들.
for let i 1 to N
1번 실패율= stagesCounter[1]/N, N=N-stagesCounter[1]; result.push(i)
2번 실패율= stage~[2]/N, N~ 

*/

function solution(N, stages) {
  // 스테이지 별 실패한 사람 수
  const failedCounts = {};
  stages.forEach(stage => {
    failedCounts[stage] = (failedCounts[stage] || 0) + 1;
  });
  // 스테이지 별 실패율 계산
  let numOfPlayers = stages.length;
  const failureRateByStages = {};
  for (let i = 1; i <= N; i++) {
    failedCounts[i] = !failedCounts[i] ? 0 : failedCounts[i];
    const failureRate = failedCounts[i] / numOfPlayers;
    failureRateByStages[i] = failureRate;
    numOfPlayers -= failedCounts[i];
  }
  // failureRateByStages를 배열로 만들어서 정렬하고, key값들만 빼낸다.
  return Object.entries(failureRateByStages)
    .sort((a, b) => b[1] - a[1])
    .map(item => Number(item[0]));
}
