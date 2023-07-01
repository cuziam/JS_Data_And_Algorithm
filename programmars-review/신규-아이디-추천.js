/*
3자 이상 15자 이하
문자타입 제한이 있음.
마침표는 연속사용 불가
*/
function solution(new_id) {
  const answer = '';
  // step 1
  new_id = new_id.toLowerCase();
  // step 2
  const regex1 = /[a-z0-9\-_.]/g;
  new_id = new_id.match(regex1).join('');
  // step 3
  const regex2 = /\.{2,}/g;
  new_id = new_id.replace(regex2, '.');
  // step 4
  const regex3 = /^\.?(.*?)\.?$/;
  new_id = new_id.replace(regex3, '$1');
  // step 5
  new_id = new_id.length === 0 ? new_id.concat('a') : new_id;
  // step 6
  if (new_id.length >= 16) {
    new_id = new_id.slice(0, 15);
    new_id = new_id.endsWith('.') ? new_id.slice(0, -1) : new_id;
  }
  // step 7
  if (new_id.length <= 2) {
    const lastIndex = new_id.length - 1;
    while (new_id.length < 3) {
      new_id = new_id.concat(new_id[lastIndex]);
    }
  }
  return new_id;
}
// 위의 코드를 이제 개선해보자.

function solution2(new_id) {
  const answer = new_id
    .toLowerCase()
    .replace(/[^a-z0-9\-_.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.?(.*?)\.?$/, '$1')
    .replace(/^$/, 'a')
    .slice(0, 15)
    .replace(/\.$/, '');
  const { length } = answer;
  return length <= 2 ? answer + answer.charAt(length - 1).repeat(3 - length) : answer;
}
