function solution(food_times, k) {
  // 모든 음식을 먹는데 필요한 시간의 총합을 계산한다.
  // 만약 총합이 k보다 작거나 같다면 -1을 반환하면 된다.
  const sum = food_times.reduce((a, b) => a + b, 0);
  if (sum <= k) {
    return -1;
  }

  // 각 음식의 시간과 인덱스를 튜플로 만들어서 배열에 저장한다.
  // 그리고 이 배열을 시간에 따라 오름차순으로 정렬한다.
  const foodTimesArray = food_times.map((time, index) => ({ time, index: index + 1 })).sort((a, b) => a.time - b.time);

  let previousFoodTime = 0; // 이전 음식을 다 먹는데 필요한 시간
  for (let i = 0; i < foodTimesArray.length; i++) {
    const timeDiff = foodTimesArray[i].time - previousFoodTime;
    if (timeDiff !== 0) {
      // 남은 음식들을 다 먹는데 필요한 총 시간 계산
      const spendTime = timeDiff * (foodTimesArray.length - i);

      if (spendTime <= k) {
        k -= spendTime;
        previousFoodTime = foodTimesArray[i].time;
      } else {
        return foodTimesArray.slice(i).sort((a, b) => a.index - b.index)[k % (foodTimesArray.length - i)].index;
      }
    }
  }
}
