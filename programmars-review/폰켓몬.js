function solution(nums) {
  let answer = 0;
  const uniqueAnimal = new Set();
  for (const animal of nums) {
    if (!uniqueAnimal.has(animal)) {
      answer++;
      uniqueAnimal.add(animal);
    }
    if (answer === nums.length / 2) {
      break;
    }
  }
  return answer;
}

function solution2(nums) {
  const maxCount = nums.length / 2;
  const uniqueAnimals = [...new Set(nums)];
  return uniqueAnimals.length > maxCount ? maxCount : uniqueAnimals.length;
}
