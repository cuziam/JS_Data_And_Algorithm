function isBalanced(rotated) {
  const stack = [];
  const pairs = {
    '[': ']',
    '(': ')',
    '{': '}',
  };
  for (const char of rotated) {
    if (char === '[' || char === '{' || char === '(') {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (char !== pairs[top]) return false;
    }
  }
  return !(stack.length > 0);
}

function solution(s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    const rotated = s.slice(i) + s.slice(0, i);
    if (isBalanced(rotated)) answer++;
  }
  return answer;
}
