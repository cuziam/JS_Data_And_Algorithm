function solution(s) {
  const arr = s.match(/([0-9]\,*){1,}/g).map(str => str.split(','));
  arr.sort((a, b) => a.length - b.length);
  const result = new Set();
  arr.forEach(arr => arr.forEach(value => result.add(Number(value))));
  return Array.from(result);
}
