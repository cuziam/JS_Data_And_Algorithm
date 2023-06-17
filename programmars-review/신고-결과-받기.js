function solution(id_list, report, k) {
  const reporters = {};
  const badguys = {};
  const uniqueReport = new Set();
  report.forEach(element => {
    // 중복 신고의 경우 무시한다.
    if (!uniqueReport.has(element)) {
      uniqueReport.add(element);
    } else {
      return;
    }
    // 신고 파싱
    const [reporter, badguy] = element.split(' ');
    // 신고 상황을 저장한다.
    if (!reporters[reporter]) {
      reporters[reporter] = [badguy];
    } else {
      reporters[reporter].push(badguy);
    }
    badguys[badguy] = (badguys[badguy] || 0) + 1;
  });
  Object.keys(badguys).forEach(badguy => {
    if (badguys[badguy] < k) {
      delete badguys[badguy];
    }
  });

  const result = id_list.map(id => {
    let count = 0;
    if (!reporters[id]) return count;
    reporters[id].forEach(badguy => {
      if (badguys[badguy]) count++;
    });
    return count;
  });
  return result;
}
