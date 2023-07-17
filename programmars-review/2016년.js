function solution(a, b) {
  const week = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
  const daysOfMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let days = 0;
  for (let i = 0; i < a - 1 && a !== 1; i++) {
    days += daysOfMonth[i];
  }
  days += b;
  return week[days % 7];
}
