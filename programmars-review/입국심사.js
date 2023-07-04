function solution(n, times) {
  times.sort((a, b) => a - b);
  let left = 1;
  let right = times[times.length - 1] * n;
  let answer = right;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let totalPersons = 0;

    times.forEach(minutes => {
      totalPersons += Math.floor(mid / minutes);
    });

    if (totalPersons >= n) {
      answer = Math.min(mid, answer);
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return answer;
}
