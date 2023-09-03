function solution(x, y) {
  const A = -2;
  const B = x + 4;
  const C = -2 * x - 2 * y;
  const discriminant = B * B - 4 * A * C;
  const root1 = (-B + Math.sqrt(discriminant)) / (2 * A);
  const root2 = (-B - Math.sqrt(discriminant)) / (2 * A);
  return [root2, root1];
}
