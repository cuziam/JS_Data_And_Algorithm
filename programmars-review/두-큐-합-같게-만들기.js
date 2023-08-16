// JS에는 제대로 된 queue가 없어서 그냥 만들었다....
class Queue {
  constructor(arr) {
    this.inStack = arr;
    this.outStack = [];
  }

  enqueue(val) {
    this.inStack.push(val);
  }

  dequeue() {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop());
      }
    }
    return this.outStack.pop();
  }

  length() {
    return this.inStack.length + this.outStack.length;
  }
}

function solution(queue1, queue2) {
  let queue1Total = queue1.reduce((acc, cur) => acc + cur, 0);
  let queue2Total = queue2.reduce((acc, cur) => acc + cur, 0);

  const newQueue1 = new Queue(queue1);
  const newQueue2 = new Queue(queue2);

  let result = 0;
  while (newQueue1.length() > 0 && newQueue2.length() > 0) {
    if (queue1Total === queue2Total) return result;
    if (queue1Total > queue2Total) {
      const dequeuedEle = newQueue1.dequeue();
      queue1Total -= dequeuedEle;
      newQueue2.enqueue(dequeuedEle);
      queue2Total += dequeuedEle;
    } else {
      const dequeuedEle = newQueue2.dequeue();
      queue2Total -= dequeuedEle;
      newQueue1.enqueue(dequeuedEle);
      queue1Total += dequeuedEle;
    }
    result++;
  }
  return -1;
}

function solution(queue1, queue2) {
  let queue1Total = queue1.reduce((acc, cur) => acc + cur, 0);
  let queue2Total = queue2.reduce((acc, cur) => acc + cur, 0);
  const length = queue1.length + queue2.length;

  let i = 0,
    j = 0;
  let result = 0;

  while (result < length * 2) {
    if (queue1Total === queue2Total) return result;
    if (queue1Total > queue2Total) {
      const dequeuedEle = queue1[i++];
      queue1Total -= dequeuedEle;
      queue2.push(dequeuedEle);
      queue2Total += dequeuedEle;
    } else {
      const dequeuedEle = queue2[j++];
      queue2Total -= dequeuedEle;
      queue1.push(dequeuedEle);
      queue1Total += dequeuedEle;
    }

    result++;
  }
  return -1;
}
