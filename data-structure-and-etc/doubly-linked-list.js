/**
 * 이중 연결 리스트는 개념적으론 쉬움.
 * 단연결 리스트에서 앞 노드를 가리키는 포인터가 추가된 것 뿐이다.
 * head와 tail은 동일하게 존재한다.
insertion(push,unshift)=>O(1)
removal=>O(1)~O(N)
searching=> O(N), 사실 O(N/2)이긴 한데 점근적 표기법에 따르면 아무튼 O(N)
Access=> O(N)

단방향 연결 보다 두 배 빨리 노드를 찾지만, 메모리도 그만큼 두 배이다.
웹브라우저의 뒤로가기 앞으로가기가 이 자료형으로 구현되어있다.
 */
class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    if (this.length === 0) {
      console.log(`The list is empty`);
      return true;
    }
  }

  push(val) {
    const newNode = new Node(val);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 현재 tail의 next를 newNode로 변경
      this.tail.next = newNode;
      // newNode의 prev를 tail노드로 변경
      newNode.prev = this.tail;
      // tail을 newNode로 갱신
      this.tail = newNode;
    }
    this.length++;
    console.log('push complete');
    return this;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    console.log('pop complete');
    return poppedNode;
  }

  shift() {
    if (this.isEmpty()) {
      return undefined;
    }
    const shiftedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      // this.pop()해도 됨
    } else {
      shiftedNode.next = this.head;
      this.head.prev = null;
      shiftedNode.next = null;
    }
    this.length--;
    console.log('shift complete');
    return shiftedNode;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    console.log('unshift complete');
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) {
      return null;
    }
    const midIdx = Math.floor((this.length - 1) / 2);
    let current;
    let currentIdx;
    if (idx > midIdx) {
      current = this.tail;
      currentIdx = this.length - 1;
      while (currentIdx !== idx) {
        current = current.prev;
        currentIdx--;
      }
    } else {
      current = this.head;
      currentIdx = 0;
      while (currentIdx !== idx) {
        current = current.next;
        currentIdx++;
      }
    }
    return current;
  }

  set(idx, val) {
    const targetNode = this.get(idx);
    if (targetNode === Node) {
      targetNode.val = val;
      return true;
    }
    return false;
  }

  insert(idx, val) {
    if (idx > this.length - 1 || idx < 0) return false;
    if (idx === 0) return this.unshift(val);
    if (idx === this.length - 1) return this.push(val);

    const newNode = new Node(val);
    const afterNode = this.get(idx);
    const beforeNode = afterNode.prev;

    newNode.prev = beforeNode;
    beforeNode.next = newNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;

    return true;
  }

  remove(idx) {
    if (idx > this.length - 1 || idx < 0) return false;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) this.pop();

    const targetNode = this.get(idx);
    const beforeNode = targetNode.prev;
    const afterNode = targetNode.next;

    targetNode.prev = null;
    targetNode.next = null;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    this.length--;

    return true;
  }
}
const list = new DoublyLinkedList();
list.push('a');
list.push('b');
list.push('c');
list.push('d');
list.insert(2, 'cccc');
console.log(list.get(2));
