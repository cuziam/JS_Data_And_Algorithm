/*
가운데 키패드는 가장 가까운 손으로
거리가 같다면 오른손-왼손잡이에 따라 달라진다.

번호와 주로 사용하는 손이 주어짐. 버튼을 누를 때 어떤 손을 사용했는지 배열에 담아 반환해라.

엄지는 상하좌우로만 움직인다.
오른쪽,왼쪽 엄지 위치를 기억하고 있어야 함.

147 369일 때는 노 상관
2580일 때는 두 경우에 대해 거리계산 한 후에 사용한 손 반환

숫자를 key로 x,y 위치를 값으로 두는 딕셔너리 keypad 만들기.
=>배열로 만들어도 될듯 하다.
-numbers읽기(for let num in numbers)
-1,3,4의 경우
    left hand pos=keypad[num]
    arr.push('L')
-7,8,9의 경우
    right hand pos=keypad[num]
    arr.push('R')
-2,5,8,0의 경우
    calculate distance between keypad[num] to left,right hand position
    if leftdistance>rightdistance
        left hand pos=keypad[num]
    else if leftdiastnace<rightdistance
        right hand pos=keypad[num]
    else
        hand pos=keypad[num]
*/

function solution(numbers, hand) {
  const resultArr = [];
  let leftThumb = '*';
  let rightThumb = '#';
  // 각 숫자의 좌표
  const keypad = {
    0: [1, 0],
    1: [0, 3],
    2: [1, 3],
    3: [2, 3],
    4: [0, 2],
    5: [1, 2],
    6: [2, 2],
    7: [0, 1],
    8: [1, 1],
    9: [2, 1],
    '*': [0, 0],
    '#': [2, 0],
  };
  for (const num of numbers) {
    let usedThumb = '';
    if (num === 1 || num === 4 || num === 7) {
      leftThumb = num;
      usedThumb = 'L';
    } else if (num === 3 || num === 6 || num === 9) {
      rightThumb = num;
      usedThumb = 'R';
    } else {
      const leftDistance =
        Math.abs(keypad[num][0] - keypad[leftThumb][0]) + Math.abs(keypad[num][1] - keypad[leftThumb][1]);
      const rightDistance =
        Math.abs(keypad[num][0] - keypad[rightThumb][0]) + Math.abs(keypad[num][1] - keypad[rightThumb][1]);
      console.log(leftDistance, rightDistance);
      if (leftDistance < rightDistance) {
        leftThumb = num;
        usedThumb = 'L';
      } else if (leftDistance > rightDistance) {
        rightThumb = num;
        usedThumb = 'R';
      } else if (hand === 'right') {
        usedThumb = 'R';
        rightThumb = num;
      } else {
        usedThumb = 'L';
        leftThumb = num;
      }
    }
    resultArr.push(usedThumb);
  }
  return resultArr.join('');
}
console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left'));
