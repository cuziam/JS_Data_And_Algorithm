/**
 * LIFO의 데이터들의 대표: 우리 집 냉장고, 접시
 * push pop unshift shift만 할 거라면, 배열보다 Stack을 사용하는 게 낫긴하다.
 * 대개 함수 콜 스택이나, undo/redo기능. 인터넷 방문기록. Routing알고리즘의 매개체.
 * 무언가에 대한 기록을 남기고 그것을 사용할 때 유용하다.
 *
 * Queue는 FIFO의 대표. 주로 백그라운드 작업이나, 작업 프로세스, 자원을 업로딩할 때 사용한다.
 *
 * 자바스크립트는 배열 객체 내의 메소드가 Stack과 queue를 이용하기 용이하게 되어있다.
 * 만약에 어떤 자료의 기록을 최대한 가볍게 저장하는 용도의 자료구조가 필요하다면
 * 배열 메소드를 사용하는 것보다 따로 자료구조를 만들어서 사용하는 것이 좋을 수 있다.
 *
 */

// Array implementation(push pop)&(unshift shift)
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  isEmpty() {
    if (this.size === 0) {
      return true;
    }
    return false;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.isEmpty()) {
      this.last = newNode;
      this.first = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size++;
    return this.size;
  }
  // 이 부분은 알아서
}
const stack = new Stack();
stack.push('a');
stack.push('b');
stack.push('c');
console.log(stack.push('d'));
