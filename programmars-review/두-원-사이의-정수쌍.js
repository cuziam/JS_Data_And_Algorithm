function solution(r1, r2) {
  let result = 0;
  for (let x = -r2; x <= r2; x++) {
    for (let y = -r2; y <= r2; y++) {
      const distance = Math.sqrt(x ** 2 + y ** 2);
      if (distance >= r1 && distance <= r2) {
        result++;
      }
    }
  }
  return result;
}
function solution(r1, r2) {
  let result = 0;
  for (let x = 1; x <= r2; x++) {
    const short = ~~Math.ceil((r1 ** 2 - x ** 2) ** 0.5);
    const long = ~~Math.floor((r2 ** 2 - x ** 2) ** 0.5);
    result += long - short + 1;
  }
  result = result * 4;

  return result;
}
