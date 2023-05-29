/*
<구성요소>
head, tail, and length 프로퍼티를 가진다.
head: 처음 노드
tail: 마지막 노드
length: 노드의 갯수.
단방향 연결 리스트는 노드로 구성되어있다.
각각의 노드들은 값을 가지고 다른 노드들이나 NULL을 가리킨다.

<배열 vs 단방향 연결 리스트>
1.단방향 연결 리스트는 삽입과 제거가 편함. 반면 배열은 비용이 크다.(싹 다 갱신해줘야 한다.)
2.단방향 연결 리스트는 next pointer를 통해서 값에 접근
반면 배열은 인덱스를 통해 바로 접근가능하다. 
3.단방향 연결 리스트는 인덱스가 없고, 배열은 있다.

*/
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    // head가 없는 경우, 즉 비어있는 리스트인 경우. 새 노드를 head겸 tail로 설정.
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // head가 있다면 현재 tail의 next를 새 노드로 설정한 후,newNode를 새로운 tail로 갱신.
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      // 리스트가 비어있다면(=head가 없다면 그냥 오류 띄우기)
      console.log('Empty list: There is nothing to pop()');
      return undefined;
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      // current는 마지막 노드를, newTail은 마지막에서 두 번재 노드를 가리키도록 한다.
      newTail = current;
      current = current.next;
    }
    console.log(current.val);
    console.log(newTail.val);
    // tail노드를 newTail 노드(마지막에서 두 번째)로 갱신
    this.tail = newTail;
    // tail노드의 next는 언제나 null
    this.tail.next = null;
    this.length--;
    // pop을 했는데 비어있다면 head와 tail와 모두 null로 만들어버려야 한다.
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    // pop된 노드 반환.
    return current;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }
    const currentHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    // 여기서 newNode.next=this.head하면 안 된다.
    // 리스트가 비어 있는 경우에 newNode를 그대로 추가하면 문제가 되기 때문이다.
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}
const list = new SinglyLinkedList();
list.push('a');
list.push('b');
list.push('c');
list.shift();
list.unshift('abc');
console.log(list);
