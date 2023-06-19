/**
 기사에게 번호가 매겨짐

 각 기사는 자신의 번호에 대한 약수 개수를 구하고 그 약수개수와 동일한 공격력을 가진 무기들을 구매한다.
 일정 공격력을 초과하면 정해진 공격력을 가진 무기를 구매한다.
 공격력 1당 1kg의 철필요.

 모든 기사에 대한 필요한 철의 무게는 얼마인가?

 getDivisorNum(num)
    count=0
    for(i=1..i++)
        if num%i===0
            count
    endloop
    return count    
solution(number,limit,power)
    weight=0
    for value of number
        let count=getDivisorNum(value)
        if(count<=limit)
            weight+=count
        else
            weight+=power
    endloop
    return weight

 */
// 각 숫자(num)에 대한 약수의 개수를 얻는 함수
function getDivisorNum(num) {
  let count = 0;
  // 탐색 범위를 sqrt(num)까지로 줄였다.
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      // 약수 중 제곱근의 경우 count를 1만 추가
      if (i ** 2 === num) {
        count++;
        // 나머지 경우엔 2 추가
      } else {
        count += 2;
      }
    }
  }
  return count;
}
function solution(number, limit, power) {
  let weight = 0;
  // num까지 순회
  for (let i = 1; i <= number; i++) {
    const count = getDivisorNum(i);
    // 약수의 개수가 limit를 넘는지 안 넘는지 판단 후, 필요한 철의 무게 결정.
    if (count <= limit) {
      weight += count;
    } else {
      weight += power;
    }
  }
  return weight;
}
console.log(solution(5, 3, 2));
