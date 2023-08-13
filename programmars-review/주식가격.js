function solution(prices) {
  const stack = [];
  const answer = Array(prices.length).fill(0);
  for (const idx in prices) {
    while (stack.length > 0 && prices[idx] < prices[stack[stack.length - 1]]) {
      const j = stack.pop();
      answer[j] = idx - j;
    }
    stack.push(idx);
  }
  while (stack.length > 0) {
    const j = stack.pop();
    answer[j] = prices.length - 1 - j;
  }
  return answer;
}

function solution(prices) {
  const stack = [];
  const answer = Array(prices.length).fill(0);
  for (let idx = 0; idx < prices.length; idx++) {
    while (stack.length > 0 && prices[idx] < prices[stack[stack.length - 1]]) {
      const j = stack.pop();
      answer[j] = idx - j;
    }
    stack.push(idx);
  }
  while (stack.length > 0) {
    const j = stack.pop();
    answer[j] = prices.length - 1 - j;
  }
  return answer;
}
