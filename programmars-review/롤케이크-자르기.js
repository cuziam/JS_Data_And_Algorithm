function solution(topping) {
  if (topping.length === 1) return 0;
  const counterOfA = { set: new Set() };
  const counterOfB = { set: new Set() };
  for (let i = 0; i < topping.length; i++) {
    counterOfB[topping[i]] = (counterOfB[topping[i]] || 0) + 1;
    counterOfB.set.add(topping[i]);
  }
  let answer = 0;
  for (let i = 0; i < topping.length; i++) {
    const cur = topping[i];
    counterOfA[cur] = (counterOfA[cur] || 0) + 1;
    counterOfA.set.add(cur);
    if (counterOfB[cur] !== undefined) {
      counterOfB[cur] -= 1;
      if (counterOfB[cur] === 0) {
        delete counterOfB[cur];
        counterOfB.set.delete(cur);
      }
    }
    if (counterOfA.set.size === counterOfB.set.size) answer++;
    if (counterOfA.set.size > counterOfB.set.size) return answer;
  }
  return answer;
}
