function convertTimeToMinutes(time) {
  const [hour, minute] = time.split(':');
  return Number(hour) * 60 + Number(minute);
}
function convertMinutesToTime(minutes) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  const formattedHours = hours < 10 ? '0' + hours : hours;
  const formattedMins = mins < 10 ? '0' + mins : mins;
  return formattedHours + ':' + formattedMins;
}
function solution(n, t, m, timetable) {
  const newTimetable = timetable.map(arrivalTime => convertTimeToMinutes(arrivalTime)).sort((a, b) => a - b);
  let busArrivalTime = convertTimeToMinutes('09:00');

  // 기억할 거: 마지막 대기열과 막차 도착 시각.
  let i = 0;
  while (n > 1) {
    let count = 0;
    while (newTimetable[i] <= busArrivalTime && count < m) {
      i++;
      count++;
    }
    busArrivalTime += t;
    n--;
  }
  // 마지막 대기열 완성,막차시간 완성
  let lastQueue = newTimetable.slice(i);
  lastQueue = lastQueue.filter(ele => !(ele > busArrivalTime && ele <= 1439));
  const result = lastQueue.length >= m ? lastQueue[m - 1] - 1 : busArrivalTime;
  return convertMinutesToTime(result);
}
