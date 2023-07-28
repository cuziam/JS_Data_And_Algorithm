/*
어느 번호가 다른 번호의 앞에 들어가 있다면 return false
*/
function solution(phoneBook) {
  phoneBook.sort();
  for (let i = 0; i < phoneBook.length - 1; i++) {
    const { length } = phoneBook[i];
    if (phoneBook[i] === phoneBook[i + 1].slice(0, length)) return false;
  }
  return true;
}
