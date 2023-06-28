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

// 연결리스트를 만들어서 사용할 경우
class Node {
  constructor(value) {
    this.prev = null;
    this.next = null;
    this.value = value;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this[this.length] = newNode; // 유사배열 객체로 사용하기 위해 추가
    this.length++;
  }

  // 사실 Enqueue 동작이긴 한데, 편의상 unshift라는 이름을 붙였다.
  unshift(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  join() {
    let currentNode = this.head;
    let result = '';
    while (currentNode !== null) {
      result += currentNode.value;
      currentNode = currentNode.next;
    }
    return result;
  }
}

function solution2(food) {
  const order = new DoublyLinkedList();
  order.push('0');
  for (let i = food.length - 1; i >= 0; i--) {
    const allotment = Math.floor(food[i] / 2);
    for (let j = 0; j <= allotment; j++) {
      order.push(i);
      order.unshift(i);
    }
  }
  return order.join();
}
const list = new DoublyLinkedList();
list.push('a');
list.push('b');
list.push('c');
console.log(list);
console.log(list.join());
solution([1, 3, 4, 6]);
