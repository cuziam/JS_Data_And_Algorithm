function solution(sizes) {
  let maxWidth = 0;
  let minHeight = 0;
  sizes.forEach(([width, height]) => {
    const curWidth = Math.max(width, height);
    const curHeight = Math.min(width, height);
    maxWidth = Math.max(maxWidth, curWidth);
    minHeight = Math.max(minHeight, curHeight);
  });
  return maxWidth * minHeight;
}
