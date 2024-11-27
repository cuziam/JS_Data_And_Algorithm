function getYearningOfNames(names, yearning) {
  const yearningOfNames = new Map();
  for (let i = 0; i < names.length; i++) {
    yearningOfNames.set(names[i], yearning[i]);
  }
  return yearningOfNames;
}

function getYearningOfPhoto(yearningOfName, photo) {
  const result = photo.map(picture =>
    picture.reduce(
      (totalYearning, name) => totalYearning + (yearningOfName.has(name) ? yearningOfName.get(name) : 0),
      0
    )
  );
  return result;
}

function solution(name, yearning, photo) {
  const yearningOfName = getYearningOfNames(name, yearning);
  return getYearningOfPhoto(yearningOfName, photo);
}

// 추억점수가 없다는 것을 주의한다.
function solution2(name, yearning, photo) {
  const dict = {};
  name.forEach((n, i) => {
    dict[n] = yearning[i];
  });
  const result = photo.map((p, _) => p.reduce((acc, person, __) => acc + (!dict[person] ? 0 : dict[person]), 0));
  return result;
}
