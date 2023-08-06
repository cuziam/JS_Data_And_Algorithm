function solution(storey) {
  let steps = 0;
  let compensation = 0;
  for (let i = storey.length - 1; i >= 0; i--) {
    const curDigit = Number(storey[i]);
    compensation = 0;
    if (curDigit <= 5 && i > 0) {
      if (Number(storey[i - 1]) >= 5) {
        steps += curDigit;
      }
      steps += curDigit;
    } else {
      steps += 10 - curDigit;
      compensation = 1;
    }
    console.log(storey);
  }
  return steps;
}

function solution(storey) {
  let steps = 0;
  for (let i = 0; i < String(storey).length; i++) {
    const curDigit = Math.floor((storey / 10 ** i) % 10);
    const nextDigit = Math.floor((storey / 10 ** (i + 1)) % 10);

    if (curDigit < 5 || (curDigit === 5 && nextDigit < 5)) {
      steps += curDigit;
    } else {
      steps += 10 - curDigit;
      storey += (10 - curDigit) * 10 ** i;
    }
  }
  return steps;
}
