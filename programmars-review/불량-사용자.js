/*
제재 아이디 목록의 경우의 수는?

불량 사용자 목록
하나 이상의 *로 가려서 제재아이디를 만듬.
.?

*/
function getNumOfMatched(regex, arr) {
  console.log(regex);
  const matchedArr = arr.filter(str => regex.test(str));
  console.log(matchedArr);
  return matchedArr.length;
}
function solution(userId, bannedId) {
  const result = 1;
  bannedId.forEach(id => {
    const regexStr = '^' + id.replace(/[*]/g, '.{1}') + '$';
    const regex = new RegExp(regexStr);
    getNumOfMatched(regex, userId);
  });
  return result;
}

function solution(userId, bannedId) {
  const bannedIdCandidates = bannedId.map(id => {
    const regexStr = '^' + id.replace(/[*]/g, '.{1}') + '$';
    const regex = new RegExp(regexStr);
    return new Set(userId.filter(str => regex.test(str)));
  });

  const set = new Set();
  function recursive(index, arr) {
    if (index === bannedId.length) {
      arr.sort();
      set.add(arr.join(',')); //join안하면 set기능을 제대로 못함
      return;
    }
    for (let id of bannedIdCandidates[index]) {
      if (!arr.includes(id)) {
        recursive(index + 1, [...arr, id]);
      }
    }
  }
  recursive(0, []);
  return set.size;
}
