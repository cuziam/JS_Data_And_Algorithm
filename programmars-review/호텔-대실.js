/*
필요한 최소 객실의 수 반환
한번 사용한 객실은 10분 청소 후, 다음 손님이 사용한다.
객실을 추가해야 하는 경우: 기존 객실에서 사용할 시간이 없을 때
객실에서 사용할 시간이 없는 걸 어떻게 알지?
    객실순회, 객실의 대실시작 시각 대실 종료 시각 확인
        0 to 첫 대실 시작 시간 이전+(대실 종료 시각+10 to 다음 대실 시작 시각)+(대실 종료 시각+10) to 23 59
        이 시간 대 내에 현재시간대가 있는가.
        우려되는 문제: 모든 객실의 모든 시간을 다 순회해야함.
*/
function convertTime(time) {
  const [hour, minute] = time.split(':');
  return Number(hour) * 60 + Number(minute);
}

function solution(bookTimes) {
  const bookList = bookTimes.map(bookTime => {
    const startTime = convertTime(bookTime[0]);
    const endTime = convertTime(bookTime[1]);
    return [startTime, endTime];
  });
  bookList.sort((a, b) => a[0] - b[0]);
  console.log(bookList);
}
