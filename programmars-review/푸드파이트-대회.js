/*
음식의 종류와 음식의 양이 배열형태로 주어짐
이것을 가지고 대회의 음식배치를 나타내는 '문자열'을 반환해라.

-일종의 연결리스트를 활용하는 것이다.push와 unshift를 활용하면 편한데 속도가 걱정이다.
따라서 일단 해보고 시간 부족이 뜨면 다시 생각해보자.
-배열을 만들고 난 후에 한번에 join하자.
*/
function solution(food) {
  const person1 = [];
  const person2 = [];
  for (const kind in food) {
    const allotment = Math.floor(food[kind] / 2);
    for (let i = 1; i <= allotment; i++) {
      person1.push(kind);
      person2.unshift(kind);
    }
  }
  const answer = person1.join('') + '0' + person2.join('');
  return answer;
}
