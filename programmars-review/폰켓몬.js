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

/*
N마리 중에서 N/2마리를 선택하려고 한다.
최대한 다양한 폰켓몬을 선택한다.
이 때 폰켓몬 종류의 최대값은?

키-값으로 이루어진 카운터를 만든다.
카운터를 채운다.
카운터의 키의 갯수를 구한다.
return 키의 갯수>=2/N?2/N:키의 갯수
*/
function solution3(nums) {
  //1
  const chosenNum = nums.length / 2;
  const counter = {};

  //2
  nums.forEach((num, idx) => {
    if (!counter[num]) {
      counter[num] = 0;
    }
    counter[num]++;
  });
  console.log('counter: ', counter);

  //3
  const keysLength = Object.keys(counter).length;

  //
  return keysLength >= chosenNum ? chosenNum : keysLength;
}
