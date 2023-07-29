function solution(s) {
  const stack = [];
  for (const brace of s) {
    stack.push(brace);
    while (stack.length > 1 && stack[stack.length - 2] === '(' && stack[stack.length - 1] === ')') {
      stack.pop();
      stack.pop();
    }
  }
  return !(stack.length > 0);
}
