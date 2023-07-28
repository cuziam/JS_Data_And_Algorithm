/*
한 번에 하나의 작업 밖에 처리하지 못 한다.
다른 작업을 번갈아가며 처리하지 않는다.

요청부터 처리종료까지 걸린 시간의 평균. 그 중 최소값은 얼마일까?
처리시간이 언제나 동일하므로, 처리지연시각의 평균이 짧을 수록 좋다.
-언제 처리하는가? 컨트롤러가 놀고 있을 때.
    즉 작업을 하고 있지 않은 아무 때나, 다른 작업의 종료시각에
3ms가 됐을 때 B작업은 2ms, C작업은 1ms가 지연됐다.
C작업을 우선처리하면 1+processtimeC+(2+processtimeC+processTimeB) C의 처리시간만큼 더 걸린다.
B작업을 우선처리하면 2+procsssTimeB+(1+processtimeB+provessTimeC) B의 처리시간만큼 더 걸린다.
따라서 C와 B중 더 작은 처리시간을 가진 것을 우선적으로 처리해야한다.

*/
function solution(jobs) {
  var answer = 0;
  let q = [];

  jobs.sort((u, v) => {
    return u[0] - v[0];
  });

  console.log(jobs);

  let len = jobs.length;
  let i = 0;
  let now = 0;
  while (i < len || q.length > 0) {
    if (i < len && jobs[i][0] <= now) {
      q.push(jobs[i++]);
      continue;
    }
    q.sort((u, v) => {
      return u[1] - v[1];
    });
    if (q.length > 0) {
      let job = q.shift();
      now += job[1];
      answer += now - job[0];
    } else {
      now = jobs[i][0];
    }
  }

  return Math.floor(answer / len);
}

function solution(jobs) {
  jobs.sort((a, b) => a[0] - b[0]);
  const queue = [];
  let length = jobs.length;
  let i = 0;
  let now = 0;
  let answer = 0;
  while (i < length || queue.length > 0) {
    //시작시각이 현재시각보다 작으면 우선순위 큐에 넣는다.
    if (i < length && jobs[i][0] <= now) {
      queue.push(jobs[i++]);
      continue;
    }
    //시작시각이 현재시각보다 같거나 크면 우선순위 큐를 정렬해놓는다.
    queue.sort((u, v) => {
      return u[1] - v[1];
    });
    if (queue.length > 0) {
      let job = queue.shift();
      now += job[1]; //현재 시각 갱신
      answer += now - job[0]; //총 소요시간 갱신
    } else {
      //우선순위 큐가 비어있을 경우
      now = jobs[i][0];
    }
  }
  return Math.floor(answer / length);
}
