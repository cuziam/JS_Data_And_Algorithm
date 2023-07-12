function solution(answers) {
  const a = [1, 2, 3, 4, 5];
  const b = [2, 1, 2, 3, 2, 4, 2, 5];
  const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const scores = [0, 0, 0];
  for (const i in answers) {
    scores[0] += answers[i] === a[i % 5] ? 1 : 0;
    scores[1] += answers[i] === b[i % 8] ? 1 : 0;
    scores[2] += answers[i] === c[i % 10] ? 1 : 0;
  }
  const max = Math.max(...scores);
  const result = [];
  scores.forEach((cur, idx) => {
    if (cur === max) {
      result.push(idx + 1);
    }
  });
  return result;
}
