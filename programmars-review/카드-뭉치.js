/*
### **로직 짜기**

투 포인터 방식
1. cards1과 cards2에 맨 앞 문자열을 가리키는 포인터를 만든다.
2. goal에서 하나씩 문자열을 꺼낸다.
3. 그리고 goal에서 꺼낸 문자열이 cards1과 cards2가 가리키는 문자열과 일치하는지 확인한다.
    일치하면 포인터를 1씩 증가시킨다.
    일치하지 않으면 return “no”
    주의! 뽑을 카드가 부족한지 확인해야 한다.
4. 만약에 goal에서 모든 문자열을 확인 했다면 return “yes”

고찰
function solution(cards1, cards2, goal) {

    for(const s of goal) {

        if(cards1[0] == s) {
            cards1.shift();
        } else if(cards2[0] == s) {
            cards2.shift();
        } else {
            return "No"
        }
    }

    return "Yes";
}
shift()는 느려빠졌다.
cards1, cards2, goal의 길이를 각각 A,B,C라고 할 때 shift를 사용하는 방식은O((A^2+B^2)*C)의 시간 복잡도를 갖는다.
반면 투포인터를 사용하면 O(A+B)*C)의 시간복잡도를 가진다.
따라서 시간복잡도의 측면에서 보면 투 포인터 방식이 낫다고 판단된다.
*/
function solution(cards1, cards2, goal) {
  let i = 0;
  let j = 0;
  for (let idx = 0; idx < goal.length; idx++) {
    if (cards1[i] && goal[idx] === cards1[i]) {
      i++;
    } else if (cards2[j] && goal[idx] === cards2[j]) {
      j++;
    } else {
      return 'No';
    }
  }
  return 'Yes';
}
