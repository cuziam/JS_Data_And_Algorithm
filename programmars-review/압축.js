function solution(msg) {
  // 초기 사전 만들기(<Map> key=문자열, value=인덱스번호)
  const dict = new Map();
  for (let i = 1; i <= 26; i++) {
    const char = String.fromCharCode(64 + i);
    dict.set(char, i);
  }

  // 사전에서 출력값 얻기
  const answer = [];
  let maxVal = 26;
  let i = 0;
  while (i < msg.length) {
    // 입력값 선택
    let word = msg[i];
    while (dict.has(word + msg[i + 1])) {
      word += msg[i + 1];
      i++;
    }
    dict.set(word + msg[i + 1], ++maxVal); // 입력값+다음 문자를 사전에 추가하기
    answer.push(dict.get(word)); // 입력값으로 출력값을 얻고, 정답 배열에 추가하기.
    i++;
  }
  return answer;
}
