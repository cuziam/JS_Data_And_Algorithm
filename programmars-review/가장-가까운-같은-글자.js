function solution(s) {
  const indices = {};
  return Array.from(s, (ele, i) => {
    if (indices[ele] === undefined) indices[ele] = i;
    const nearestDistance = i !== indices[ele] ? i - indices[ele] : -1;
    indices[ele] = i;
    return nearestDistance;
  });
}
