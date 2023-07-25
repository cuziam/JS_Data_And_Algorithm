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

function getParsedPlan(plan) {
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

  // Add an infinite plan at the end
  plans.push(['infi', '999:59', '999999']);

  // Sort plans by start time in minutes
  plans.sort((a, b) => convertTimeToMinutes(a[1]) - convertTimeToMinutes(b[1]));

  for (let i = 0; i < plans.length - 1; i++) {
    const curPlan = getParsedPlan(plans[i]);
    const nextPlan = getParsedPlan(plans[i + 1]);
    let restTime = nextPlan.startTime - curPlan.endTime;
    if (0 <= restTime) {
      answer.push(curPlan.name);
      while (restTime && stack.length) {
        if (stack[stack.length - 1][1] > restTime) {
          stack[stack.length - 1][1] -= restTime;
          restTime = 0;
        } else {
          answer.push(stack[stack.length - 1][0]);
          restTime -= stack.pop()[1];
        }
      }
    } else {
      stack.push([curPlan.name, -restTime]);
    }
  }

  while (stack.length) {
    answer.push(stack.pop()[0]);
  }

  return answer;
}
solution([
  ['science', '12:40', '50'],
  ['music', '12:20', '40'],
  ['history', '14:00', '30'],
  ['computer', '12:30', '100'],
]);

function solution(plans) {
  // 시작 시간에 따라 오름차순 정렬
  plans.sort((a, b) => toMinutes(a[1]) - toMinutes(b[1]));

  let taskStack = []; // 진행 중인 과제를 관리하는 스택
  let taskCompleted = []; // 완료된 과제를 관리하는 배열
  let currentTime = 0; // 현재 시간 (분 단위)

  for (let task of plans) {
    task[1] = toMinutes(task[1]); // 시작 시간을 분 단위로 변환
    task[2] += task[1]; // 종료 시간을 계산해서 저장

    // 현재 진행 중인 과제가 있는데 새로운 과제의 시작 시간이 도래했다면
    while (taskStack.length > 0 && task[1] >= taskStack[taskStack.length - 1][2]) {
      taskCompleted.push(taskStack.pop()[0]); // 완료된 과제를 taskCompleted에 추가
    }

    // 새로운 과제의 시작 시간이 도래하기 전까지 진행 중인 과제를 처리
    while (taskStack.length > 0 && task[1] > currentTime) {
      taskStack[taskStack.length - 1][2] -= task[1] - currentTime; // 남은 과제 시간을 업데이트
      currentTime = task[1]; // 현재 시간을 업데이트
    }

    currentTime = task[1]; // 현재 시간을 업데이트
    taskStack.push(task); // 새로운 과제를 스택에 추가
  }

  // 남아있는 모든 과제를 완료
  while (taskStack.length > 0) {
    taskCompleted.push(taskStack.pop()[0]);
  }

  return taskCompleted;
}
