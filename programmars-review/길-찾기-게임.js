/*
이진 트리
이진트리 노드의 위치는 주어진다.
이진트리를 전위순회 후위순회한 결과를 반환해라.

해야할 일
1. 트리 만들기
2. 트리에 node집어넣고 자리 찾아가게 하기
3. preorder, postorder를 반환한다.

x값은 노드의 value가 되며, y값은 depth와 관련이 있다.
nodeinfo를 depth기준으로 내림차순으로 정렬하는 것이 좋을 것 같다.
하지않으면? node넣을 때 depth값을 고려하는 것이 귀찮아짐.
*/
class Node {
  constructor(x, y, idx) {
    this.x = x;
    this.y = y;
    this.left = null;
    this.right = null;
    this.number = idx + 1;
  }
}
class Tree {
  constructor() {
    this.root = null;
  }

  // 재귀방식대신 반복문 방식으로 insert구현
  insert(x, y, i) {
    const newNode = new Node(x, y, i);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    let currentNode = this.root;
    // true말고 다른 값이 좋긴하다
    while (true) {
      // 제한사항에서 중복된 값은 없다고 하여서 예외처리 생략
      if (y < currentNode.y && x < currentNode.x) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      }
      if (y < currentNode.y && x > currentNode.x) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  preOrder() {
    const data = [];
    function traverse(node) {
      data.push(node.number);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  postOrder() {
    const data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.number);
    }
    traverse(this.root);
    return data;
  }
}
function solution(nodeinfo) {
  nodeinfo.map((ele, idx) => {
    ele.push(idx);
  });
  nodeinfo.sort((a, b) => b[1] - a[1]);
  const tree = new Tree();
  for (const node of nodeinfo) {
    console.log(node);
    tree.insert(node[0], node[1], node[2]);
  }
  return [tree.preOrder(), tree.postOrder()];
}
solution([
  [5, 3],
  [11, 5],
  [13, 3],
  [3, 5],
  [6, 1],
  [1, 3],
  [8, 6],
  [7, 2],
  [2, 2],
]);
