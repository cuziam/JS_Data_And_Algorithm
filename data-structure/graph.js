/**
 * 정말 많이 사용하는 자료구조 중 하나이다.
 * <정의>
 * wikipidea: A graph data structure consists of a finite(and possibly mutable) set of vertices or nodes or points
 * together with a set of unordered pairs of these vertices for
 * an undirected graph(무방향 그래프) or a set of ordered pairs for a directed graph.(유방향 그래프)
 * 간단히 요약하면, nodes + connection의 구조를 가진 것을 모두 그래프라고 말한다.
 * 트리같은 경우 깊이가 있고, 위 아래의 노드(자신의 부모노드와 자식노드)만 연결할 수 있다는 제약이 있었다.
 *
 * <사용되는 곳>
 * social network, location/mapping, routing, visual hierarchy, file system, GAN... etc..
 *
 * <Terminology>
 * 1. Vertex, Edge
 *
 * 2. weighted/unweighted(가중/비가중): values assigned to distances between vertices.
 * 가중의 경우: 간선에 가중치를 둠. (서울에서 대전까지 가는 거리)
 * 비가중의 경우: 모든 간선엔 가중치가 아예 없다,
 *
 * 3. directed/undirected(방향/무방향): directions assigned to distanced between vertices.
 * 무방향의 경우: 노드 간 양방향이 연결되어 있음(페이스북 친구)
 * 유방향의 경우: 노드 간 방향이 한 방향으로 고정되어 있음.(인스타그램 친구)
 *
 * <구현방법>
 * 인접행렬과 인접 리스트 방법이 있다.
 *
 * 인접 행렬: 모든 노드의 연결 상태를 '노드 개수 ** 2' 크기의 2차원 배열에 저장하는 방법.
 * 인접 리스트: 각 노드가 연결된 상태를 2차원 배열로 구현된 리스트에 저장하는 방법.[[2,4][1,5]...]
 * 만약에 노드의 값들이 숫자가 아니라면 배열에 어떻게 저장해야 할까?
 * =>해쉬테이블을 이용하면 된다. 해쉬테이블을 이용하면 키가 문자열이라도 특정 숫자로 매칭되기 때문에 사용가능.
 *
 * <두 구현방법에 따른 시간,공간 복잡도 비교>
 * if V= the number of vertices, E= the number of edges, then
 * Add Vertex: O(1),O(V^2) => 리스트의 경우 추가하려는 노드의 연결정보를 담은 배열 하나를 추가하는 방식. 행렬의 경우 행렬을 재생성 해야함.
 * Add Edge: O(1),O(1) => 리스트의 경우 연결정보를 담은 배열의 원소를 추가하는 방식, 행렬의 경우 원소값만 0에서 1로만 바꿔줌.
 * Remove Vertex: O(V+E),O(V^2) =>리스트의 경우 연결정보를 담은 배열을 제거하고, 다른 정점의 배열에서 연결을 전부 없애줘야해.
 * => 행렬의 경우 행렬 재생성.
 * Remove Edge: O(E), O(1) => 리스트의 경우 연결된 노드마다 원소를 없애줘야함. 행렬의 경우 원소값을 1에서 0으로 바꿔줌
 * Query: O(V+E), O(1)
 * Storage: O(V+E), O(V^2)
 *
 * 두 방식은 각각 언제 유용한가?
 * 1. 리스트 방식은 공간은 적게 차지하고 모든 간선을 순회하기 좋지만, 특정 간선에 접근하는 것이 느리다.
 * 느린 이유는 노드의 연결 정보를 담은 배열을 순회해야 하기 때문이다.
 * => 노드 추가 및 제거가 빈번한 경우에, 노드 수가 많은 경우에, 토폴로지 재구성 유리.
 *
 * 2.행렬 방식은 특정 간선에 접근하는 것은 빠르지만, 공간을 더 차지하며 모든 간선을 순회하는 것이 느리다.
 * 느린 이유는 행렬의 모든 원소를 순회해야하기 때문이다. 행렬의 원소가 0이어도 전부 접근한다...
 * 그리고 공간도 많이 사용한다. 실제로 연결되어 있지 않아도 연결된 것과 똑같은 공간을 차지한다.
 * => 노드의 수가 거의 변하지 않는 경우에, 노드 수가 많지 않은 경우에, 토폴로지 재구성 유리.
 *---------------------------------------------------------------------------------------------------
 * 여기선 무엇을 구현할 것인가? 인접 리스트 방식을 구현할 것이다.
 * 왜? 대다수의 데이터는 정점의 수는 아주 많지만 연결 되어있지 않은 경우가 많다.
 * 실제 존재하는 연결만 저장하는 인접 리스트 방식이 유용할때가 많다.
 */

// adjecency list를 사용하여 undirected, unweighted graph 구현해보기.
// node는 따로 구현하지 않고 만들어보겠음.
class Graph {
  constructor() {
    this.adjecencyList = {};
  }

  addVertex(vertex) {
    // 정점을 추가하면 해당 정점의 연결정보를 추가하는 배열을 리스트에 추가한다.
    // vertex에 대한 유효성 검사는 간단하게 구현했다.
    if (!this.adjecencyList[vertex]) {
      this.adjecencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    // 일단 vertex1과 vertex2가 존재하는지 부터 확인한다.
    // 둘 중 하나라도 존재하지 않는다면 에러메세지 띄우고 undefined 반환
    if (!this.adjecencyList[vertex1]) {
      console.log(`the first vertex doesn't exist`);
      return undefined;
    }
    if (!this.adjecencyList[vertex2]) {
      console.log(`the second vertex doesn't exit`);
      return undefined;
    }
    // vertex1의 배열에 vertex2 추가
    // vertex2의 배열에 vertex1 추가
    this.adjecencyList[vertex1].push(vertex2);
    this.adjecencyList[vertex2].push(vertex1);

    // 가능하다면 각 배열에 중복되는 vertex가 있는지 확인하는 게 좋다.
    // 나라면
    // 1번 방법: 배열의 원소가 문자열이므로 이진 트리 형태로 배열을 정렬해놓고, 이진 탐색으로 해당 vertex가 존재하는지 확인하거나
    // 2번 방법: 애초에 리스트의 원소에 대한 해쉬테이블을 만들거나 =>3번이 사실상 해쉬테이블을 이용하는 방식이다.
    // 3번 방법: Set자료형에 연결정보를 저장하여 빠르게 존재 유무를 확인할 것이다. => 이 방법이 가장 시간효율도 좋고, 코드도 짧을 듯.
    // 하지만 지금은 그래프의 개념을 학습하는 것이니 이 과정은 일단 생략한다.
  }

  removeEdge(vertex1, vertex2) {
    this.adjecencyList[vertex1] = this.adjecencyList[vertex1].filter(v => v !== vertex2);
    this.adjecencyList[vertex2] = this.adjecencyList[vertex2].filter(v => v !== vertex1);
  }

  removeVertex(vertex) {
    // vertex들을 돌며 리스트를 갱신한다.
    while (this.adjecencyList[vertex].length) {
      const adjacentVertex = this.adjecencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    // 그 후에 연결상태를 관리하는 배열을 삭제한다.
    delete this.adjecencyList[vertex];
  }
}

/**
 * 내가 개선해본다면...
 * 1. 유효성 검사를 위한 정적 메소드 추가. isVerticesExist(vertex1,vertex2){} 함수
 * 2. 배열로 리스트를 만들지 않고, Set 객체에 연결정보를 넣어본다.
 */
class Graph2 {
  constructor() {
    this.adjecencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjecencyList[vertex]) {
      this.adjecencyList[vertex] = new Set();
    }
  }

  isVerticesExist(vertex1, vertex2) {
    if (!this.adjecencyList[vertex1]) {
      console.log(`the first vertex doesn't exist`);
      return undefined;
    }
    if (!this.adjecencyList[vertex2]) {
      console.log(`the second vertex doesn't exit`);
      return undefined;
    }
  }

  addEdge(vertex1, vertex2) {
    this.isVerticesExist(vertex1, vertex2);
    // 중복값 체크하는 코드 추가.
    if (!(this.adjecencyList[vertex1].has(vertex2) && this.adjecencyList[vertex2].has(vertex1))) {
      // vertex1의 집합에 vertex2 추가
      // vertex2의 집합에 vertex1 추가
      this.adjecencyList[vertex1].add(vertex2);
      this.adjecencyList[vertex2].add(vertex1);
    }
  }

  removeEdge(vertex1, vertex2) {
    this.isVerticesExist(vertex1, vertex2);
    if (!(this.adjecencyList[vertex1].has(vertex2) && this.adjecencyList[vertex2].has(vertex1))) {
      this.adjecencyList[vertex1].delete(vertex2);
      this.adjecencyList[vertex2].delete(vertex1);
    }
  }

  removeVertex(vertex) {
    // vertex들을 돌며 리스트를 갱신한다.
    this.adjecencyList[vertex].array.forEach(element => {
      this.adjecencyList[element].delete(vertex);
    });
    // 그 후에 연결상태를 관리하는 배열을 삭제한다.
    delete this.adjecencyList[vertex];
  }

  /**
   * 이제 순회 메소드들을 구현해볼 것이다.
   * <순회 메소드들의 쓰임>
   * =>peer to peer(P2P) network, webcrawlers, finding closest matches/recommendations, short path problem
   *
   * <순회 기법>
   * 순회는 트리에서 처럼 DFS,BFS가 존재한다.
   * DFS: 자식노드가 존재한다면 자식노드 먼저 순회하는 방식. 즉 길이 막힐 때까지 가보는 거다.
   * BFS: 형제노드를 먼저 순회하는 방식.
   *
   * <순회구현 시 중요한 점!!!>
   * 트리와 다르게 모든 노드들이 서로 이어질 수 있다.
   * 따라서 한 번 방문한 노드를 재방문하지 않도록 자신의 경로를 기억하고 있어야 한다. 어떻게?
   * => 인접리스트에서 방문한 노드에 대한 edge를 건너뛰고 다른 edge를 선택하면 된다.
   *
   * <구현 기법 두 가지>
   * 1. 재귀함수를 구현하기
   * 2. 반복문을 사용한 함수구현
   *
   * <DFS 슈도코드>
   * Recursive 방식
   *  if vertex is empty
   *    return(base case)
   *  add vertex to results list
   *  mark vertex as visited
   *  for each neighbor in vertex's neighbors:
   *    if neighbor is not visited:
   *      recursively call DFS on neighbor
   *
   * Iterative 방식
   * let S be a stack
   * S.push(start)
   * while S is not empty
   *  vertex=S.pop()
   *  if vertex is not labeled as discovered
   *    visit vertex(add to result list)
   *    label vertex as discovered
   *    for each of vertex's neighbors, N do
   *      S.push(N)
   */

  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const { adjecencyList } = this;
    function dfs(vertex) {
      // basecase
      if (!vertex) return null;
      // record vertex in result
      result.push(vertex);
      // mark vertex as visited
      visited[vertex] = true;
      adjecencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    }
    dfs(start);
    console.log(result);
    return result;
  }

  depthFirstIterative(start) {
    const result = [];
    const stack = [start];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length > 0) {
      // pop을 하기 때문에 recursive 방식과 반대 방향으로 간선리스트를 순회한다.
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjecencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    console.log(result);
    return result;
  }

  /**
   * <BFS 슈도코드>
   * input name: start
   * gererate result<Array>, queue<Array>, visited<Object>
   * Enqueue start into the queue
   * label start in visited
   * Loop as long as there is anything in queue
   *  Dequeue the first element from the queue.
   *  push it into the result
   *  Loop over each vertex in adjacency list for the vertex you are visiting.
   *  If the vertex is not visited vertex. mark it as visited. and enque.
   */
  breadthFirstSearch(start) {
    const result = [];
    const queue = [start];
    const visited = {};
    visited[start] = true;
    while (queue.length > 0) {
      const currentVertex = queue.shift();
      result.push(currentVertex);
      // 거꾸로 가고 싶으면 어떻게 할까? Set객체의 경우면 리스트의 재조립 과정이 필요.
      // 배열로 만들어진 리스트라면 reverse()를 사용해서 쓰면 됨
      this.adjecencyList[currentVertex].forEach(edge => {
        if (!visited[edge]) {
          visited[edge] = true;
          queue.push(edge);
        }
      });
    }
    console.log(result);
    return result;
  }
}

const g = new Graph2();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');
g.depthFirstRecursive('A');
g.depthFirstIterative('A');
g.breadthFirstSearch('A');
// recursive result: [ 'A', 'B', 'D', 'E', 'C', 'F' ]
// iterative result: [ 'A', 'C', 'E', 'F', 'D', 'B' ]
//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
