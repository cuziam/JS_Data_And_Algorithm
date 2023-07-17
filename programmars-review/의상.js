function solution(clothes) {
  const clothList = {};
  clothes.forEach(cloth => {
    const [clothName, clothType] = cloth;
    clothList[clothType] ? clothList[clothType].push(clothName) : (clothList[clothType] = [clothName]);
  });
  let result = 1;
  for (const clothType in clothList) {
    result *= clothList[clothType].length + 1;
  }
  return result - 1;
}
// 난 그냥 이름을 넣었는데 숫자를 넣어도 됨.
solution([
  ['yellow_hat', 'headgear'],
  ['blue_sunglasses', 'eyewear'],
  ['green_turban', 'headgear'],
]);
