function solution1(ingredient) {
  const stack = [];
  let count = 0;
  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);
    if (
      stack[stack.length - 1] === 1 &&
      stack[stack.length - 2] === 3 &&
      stack[stack.length - 3] === 2 &&
      stack[stack.length - 4] === 1
    ) {
      count++;
      stack.splice(-4);
    }
  }
  return count;
}

function solution(ingredient) {
  let result = 0;
  let i = 0;
  let canProcess = true;
  while (canProcess) {
    if (ingredient[i] === 1 && ingredient[i + 1] === 2 && ingredient[i + 2] === 3 && ingredient[i + 3] === 1) {
      ingredient.splice(i, 4);
      result++;
      if (i >= 0) {
        i -= 3;
      }
    } else if (i > ingredient.length - 3) {
      canProcess = false;
    } else {
      i++;
    }
  }
  return result;
}
