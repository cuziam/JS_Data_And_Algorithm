function solution(today, terms, privacies) {
  const result = [];
  // 날짜 파싱
  const normDate = today.split('.').map(ele => Number(ele));
  const normDays = (normDate[0] - 1) * 28 * 12 + (normDate[1] - 1) * 28 + normDate[2];
  // 약관 파싱
  const term = {};
  for (const value of terms) {
    const tokens = value.split(' ');
    term[tokens[0]] = Number(tokens[1]);
  }
  // 고객정보 읽기
  for (let i = 0; i < privacies.length; i++) {
    // 고객정보 파싱
    const tokens = privacies[i].split(' ');
    const clientDate = tokens[0].split('.').map(ele => Number(ele));
    const clientTerm = tokens[1];
    // 폐기 여부 판정
    // 고객의 유효기간 계산
    const clientDays =
      (clientDate[0] - 1) * 28 * 12 + (clientDate[1] - 1) * 28 + clientDate[2] - 1 + term[clientTerm] * 28;
    console.log(clientDays, normDays);
    if (clientDays < normDays) result.push(i + 1);
  }
  return result;
}
