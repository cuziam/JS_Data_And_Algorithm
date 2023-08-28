class Queue {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  enqueue(ele) {
    this.inStack.push(ele);
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
function solution(n, roads, sources, destination) {
  // 인접 리스트 만들기
  const adjacencyList = {};
  roads.forEach(road => {
    const [src, dest] = road;
    if (!adjacencyList[src]) adjacencyList[src] = [];
    if (!adjacencyList[dest]) adjacencyList[dest] = [];
    adjacencyList[src].push(dest);
    adjacencyList[dest].push(src);
  });
  // 목적지가 고정이다. 즉 목적지와 다른 노드 간의 거리를 처음부터 다시 계산할 필요가 없다.
  // BFS로 목적지와 다른 노드와의 거리를 한번 구해놓고 계속 사용하면 된다.
  // 만약에 목적지가 계속 바뀐다면 플로이드 워셜이나 다익스트라를 사용한다.
  const mem = new Array(n + 1).fill(-1); // mem은 목적지에서 다른 노드까지의 거리를 저장함.
  mem[destination] = 0;
  function setMemByBfs(src) {
    const steps = 0;
    const history = new Set();
    const queue = new Queue();
    queue.enqueue([src, steps]);
    history.add(src);
    mem[src] = 0;
    while (queue.length() > 0) {
      const [curNode, curSteps] = queue.dequeue();
      adjacencyList[curNode].forEach(neighbor => {
        if (!history.has(neighbor)) {
          queue.enqueue([neighbor, curSteps + 1]);
          history.add(neighbor);
          mem[neighbor] = curSteps + 1;
        }
      });
    }
  }
  setMemByBfs(destination);
  return sources.map(source => mem[source]);
}
