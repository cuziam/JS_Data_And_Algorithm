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

insertion(push,unshift)=>O(N)
removal=>O(1) or O(N)
searching=> O(N)
Access=> O(N)
삽입과 제거가 많다면 배열의 훌륭한 대안이 될 수 있다.
단방향 연결 리스트를 기반으로 스택이나 큐를 만들 수 있다.
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

  isEmpty() {
    if (this.length === 0) {
      return true;
    }
    return false;
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
      // current는 현재 노드를 가리킨다.
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

  // 주어진 위치에 있는 노드를 반환하는 메소드
  // 0이면 head반환, length-1이면 tail, 그 사이엔 current node반환
  // 배열이 비어있다면?
  // idx가 길이와 같거나 크다면?
  get(targetIdx) {
    if (targetIdx < 0) return null;
    if (this.length === 0 || this.length <= targetIdx) return null;
    let current = this.head;
    let currentIdx = 0;
    while (currentIdx !== targetIdx) {
      current = current.next;
      currentIdx++;
    }
    return current;
  }

  // input1: targetIdx input2: targetVal
  // change the value in targetIdx to targetVal
  set(targetIdx, targetVal) {
    const nodeToSet = this.get(targetIdx);
    if (nodeToSet) {
      nodeToSet.val = targetVal;
      return true;
    }
    return false;
  }

  insert(targetIdx, targetVal) {
    if (this.isEmpty()) return false;
    if (targetIdx < 0 || targetIdx > this.length) return false;
    if (targetIdx === 0) return !!this.unshift(targetVal);
    if (targetIdx === this.length) return !!this.push(targetVal);

    const newNode = new Node(targetVal);
    const prevNode = this.get(targetIdx - 1);
    const nextNode = this.get(targetIdx);

    prevNode.next = newNode;
    newNode.next = nextNode;
    this.length++;

    return true;
  }

  remove(targetIdx) {
    if (this.isEmpty()) return false;
    if (targetIdx < 0 || targetIdx >= this.length) return false;
    if (targetIdx === this.length - 1) return !!this.pop();
    if (targetIdx === 0) return !!this.shift();

    const prevNode = this.get(targetIdx - 1);
    const nodeToRemove = prevNode.next;
    prevNode.next = nodeToRemove.next;

    return nodeToRemove;
  }

  reverse() {
    if (this.isEmpty() || this.length === 1) return true;
    // swap head and tail
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;

    // create next,prev,cur
    let nextNode;
    let prevNode = null; // 이 부분이 상당히 중요함.

    for (let i = 0; i < this.length; i++) {
      // 다음 노드 값 설정
      nextNode = currentNode.next;
      // 현재 노드의 next를 이전 노드로 갱신
      currentNode.next = prevNode;
      // 이전 노드와 현재 노드 재설정(오른쪽으로 이동)
      prevNode = currentNode;
      currentNode = nextNode;
    }
    return this;
  }
}
const list = new SinglyLinkedList();
list.push('a');
list.push('b');
list.push('c');
list.set(3, 'd');
console.log(list.remove(1));
