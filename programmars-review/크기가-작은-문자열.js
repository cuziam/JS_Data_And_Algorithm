function solution(t, p) {
  let result = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    const num = Number(t.slice(i, i + p.length));
    if (num <= Number(p)) result++;
  }
  return result;
}
