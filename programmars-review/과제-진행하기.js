/*
일단 과제는 시작한 시각이 되면 바로 시작.
과제가 미리 끝나면 멈춰둔 과제를 이어서 진행한다.

과제를 끝낸 순서대로 이름을 배열에 담아 반환해라.

<주의>
배열은 시간순으로 정렬되어 있지 않을 수 있습니다.
진행중이던 과제가 끝나는 시각과 새로운 과제를 시작해야하는 시각이 같은 경우 진행중이던 과제는 끝난 것으로 판단합니다.
3 ≤ plans의 길이 ≤ 1,000

첫 번째 과제를 하나 받는다.
두 번째 과제를 받는다.
n-1 번째 과제의 종료 시각이 n 번째 과제의 시작 시간보다 작거나 같으면 result에 n-1 번째 과제 push
n번째 과제 시작 시각 - n-1 번쨰 과제 종료 시각=restTime 계산
    큐의 첫 번째 부터 restTime가 0이 될 때까지 소모하기.
    큐의 원소가 남은 시간이 0이 될 때마다 result에 push   
반대로 n 번째 과제의 시각 보다 크면, n-1 번째 과제 종료시각-n 번째 과제 시작 시각과 과제의 이름을 Enqueue
*/
function convertTimeToMinutes(time) {
  const tokens = time.split(':');
  return Number(tokens[0]) * 60 + Number(tokens[1]);
}
function makeInfo(plan) {
  const [name, timeStr, processTimeStr] = plan;
  const time = convertTimeToMinutes(timeStr);
  const processTime = Number(processTimeStr);
  return {
    name,
    startTime: time,
    endTime: time + processTime,
  };
}
function solution(plans) {
  const answer = [];
  const stack = [];
  plans.sort((a, b) => a[1].localeCompare(b[1]));
  console.log(plans);
  for (let i = 1; i < plans.length; i++) {
    const prevPlan = makeInfo(plans[i - 1]);
    const curPlan = makeInfo(plans[i]);
    if (prevPlan.endTime <= curPlan.startTime) {
      answer.push(prevPlan.name);
      let restTime = curPlan.startTime - prevPlan.endTime;
      let i = stack.length - 1; // splice때 사용
      while (restTime > 0 && stack.length > 0) {
        stack[i][1]--;
        restTime--;
        if (stack[i][1] === 0) i--;
      }
      answer.push(...stack.splice(i));
    } else {
      stack.push([prevPlan.name, prevPlan.endTime - curPlan.startTime]);
    }
    if (i === plans.length - 1) {
      answer.push(curPlan.name);
    }
  }
  return answer.concat(stack.map(ele => ele[0]));
}
solution([
  ['science', '12:40', '50'],
  ['music', '12:20', '40'],
  ['history', '14:00', '30'],
  ['computer', '12:30', '100'],
]);
