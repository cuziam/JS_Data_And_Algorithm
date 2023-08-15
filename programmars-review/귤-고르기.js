function solution(k, tangerine) {
  const counter = new Map();
  tangerine.forEach(size => {
    if (!counter.has(size)) counter.set(size, 0);
    counter.set(size, counter.get(size) + 1);
  });
  const countArr = Array.from(counter).sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < countArr.length; i++) {
    k -= countArr[i][1];
    if (k <= 0) return i + 1;
  }
}
