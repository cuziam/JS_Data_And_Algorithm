function solution(x, y, n) {
  if (x === y) return 0;
  if (x > y) return -1;
  const queue = [{ value: x, steps: 0 }];
  const visited = new Set([x]);

  while (queue.length > 0) {
    const { value, steps } = queue.shift();
    const nextValues = [value + n, value * 2, value * 3];
    for (let i = 0; i < nextValues.length; i++) {
      if (nextValues[i] === y) return steps + 1;
      if (nextValues[i] > y || visited.has(nextValues[i])) continue;
      queue.push({ value: nextValues[i], steps: steps + 1 });
      visited.add(nextValues[i]);
    }
  }
  return -1;
}
function solution(x, y, n) {
  const mem = new Array(y + 1).fill(Infinity);
  mem[x] = 0;
  //메모리를 희생하고 O(N)선에서 끝내버리기.
  for (let i = x; i <= y; i++) {
    mem[i + n] = Math.min(mem[i + n], mem[i] + 1);
    mem[i * 2] = Math.min(mem[i * 2], mem[i] + 1);
    mem[i * 3] = Math.min(mem[i * 3], mem[i] + 1);
  }
  console.log(mem);
  return mem[y] === Infinity ? -1 : mem[y];
}
