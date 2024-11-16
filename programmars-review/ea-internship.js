function solution(v) {
  const result = [];
  const counterX = {};
  const counterY = {};

  v.forEach(([x, y]) => {
    counterX[x] = (counterX[x] || 0) + 1;
    counterY[y] = (counterY[y] || 0) + 1;
  });
  v.forEach(([x, y]) => {
    if (counterX[x] !== 2) result[0] = x;
    if (counterY[y] !== 2) result[1] = y;
  });
  return result;
}
function solution(category, form, record) {
  const categoryInfo = {};
  const activeCategories = {};
  const results = [];

  // 카테고리 정보를 파싱하여 저장
  category.forEach(item => {
    const [name, duration] = item.split(' ');
    categoryInfo[name] = parseInt(duration); // 유효 기간(개월 수)
  });

  // 날짜 형식을 비교 가능한 형태로 변환하는 함수
  const toDateKey = dateString => {
    const [year, month, day] = dateString.split('.').map(Number);
    return new Date(year, month - 1, day); // 월은 0부터 시작
  };

  // 기록(record)을 처리
  record.forEach(entry => {
    const [date, formIndex] = entry.split(' ');
    const currentDate = toDateKey(date);

    // 만료된 카테고리를 제거
    for (const [name, expiryDate] of Object.entries(activeCategories)) {
      if (currentDate > expiryDate) {
        delete activeCategories[name];
      }
    }

    // 새로운 카테고리를 추가
    const formCategories = form[parseInt(formIndex) - 1].split(' ');
    formCategories.forEach(cat => {
      const expiryDate = new Date(currentDate);
      expiryDate.setMonth(expiryDate.getMonth() + categoryInfo[cat]);
      activeCategories[cat] = expiryDate;
    });

    // 현재 활성화된 카테고리 이름을 사전 순으로 정렬
    const activeCategoryNames = Object.keys(activeCategories).sort();
    results.push(activeCategoryNames.length > 0 ? activeCategoryNames.join(' ') : 'None');
  });

  return results;
}
