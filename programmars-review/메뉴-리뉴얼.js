function getSubsets(order) {
  const subsets = [];
  const n = order.length;
  for (let i = 0; i < 1 << n; i++) {
    let subset = '';
    let count = 0;
    for (let j = 0; j < n; j++) {
      if ((i & (1 << j)) !== 0) {
        subset += order[j];
        count++;
      }
    }
    if (count >= 2) {
      subsets.push(subset);
    }
  }
  return subsets;
}
function solution(orders, course) {
  const setCount = {};
  orders.forEach(order => {
    order = Array.from(order).sort();
    const subsets = getSubsets(order);
    subsets.forEach(subset => {
      setCount[subset] = (setCount[subset] || 0) + 1;
    });
  });
  console.log(setCount);

  const setByCount = {};
  const answer = [];
  Object.entries(setCount).forEach(entry => {
    if (!setByCount[entry[1]]) setByCount[entry[1]] = [];
    setByCount[entry[1]].push(entry[0]);
  });
  console.log(setByCount);

  for (const count in setByCount) {
    const maxLength = Math.max(...setByCount[count].map(str => str.length));
    setByCount[count] = setByCount[count].filter(str => str.length === maxLength);
  }
  console.log(setByCount);

  course.forEach(menuItem => {
    if (!setByCount[menuItem]) return;
    answer.push(...setByCount[menuItem]);
  });
  console.log(answer);
  console.log(answer.sort());

  return answer.sort();
}
