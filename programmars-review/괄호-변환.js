function isRightStr(str) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
    if (stack[stack.length - 1] === ')' && stack[stack.length - 2] === '(') {
      stack.pop();
      stack.pop();
    }
  }
  return !(stack.length > 0);
}
function reversePair(str) {
  if (str === '') return '';
  let answer = '';
  for (let i = 0; i < str.length; i++) {
    answer += str[i] === '(' ? ')' : '(';
  }
  return answer;
}

function solution(p) {
  // step1: p가 빈 문자면 빈 문자열 반환
  if (p.length === 0) return '';
  // step2: 균형잡힌 괄호 문자열 두 개로 분리하기
  const counter = Array(2).fill(0);
  let u = '';
  let v = '';
  for (let i = 0; i < p.length; i++) {
    p[i] === '(' ? counter[0]++ : counter[1]++;
    if (counter[0] === counter[1]) {
      u = p.slice(0, i + 1);
      v = p.slice(i + 1);
      break;
    }
  }
  // step3: u가 올바른 괄호 문자열인지 확인한 후 재귀
  if (isRightStr(u)) {
    return u + solution(v);
  } // step4
  const str = '(' + solution(v) + ')';
  const newU = reversePair(u.slice(1, u.length - 1));
  return str + newU;
}
