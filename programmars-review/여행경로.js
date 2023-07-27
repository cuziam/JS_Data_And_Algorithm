function getAdjacencyList(tickets) {
  const adjacencyList = {};
  tickets.forEach(([src, dest]) => {
    if (!adjacencyList[src]) adjacencyList[src] = [];
    if (!adjacencyList[dest]) adjacencyList[dest] = [];
    adjacencyList[src].push(dest);
  });
  for (const src in adjacencyList) {
    adjacencyList[src].sort();
  }
  return adjacencyList;
}
function solution(tickets) {
  const adjacencyList = getAdjacencyList(tickets);
  console.log(adjacencyList);
  const path = [];
  function dfs(src) {
    // basecase
    path.push(src);
    if (adjacencyList[src].length === 0) return;
    dfs(adjacencyList[src].splice(0, 1)[0]);
  }
  dfs('ICN');
  console.log(path);
  return path;
}

solution([
  ['ICN', 'SFO'],
  ['ICN', 'SFO'],
  ['ICN', 'ATL'],
  ['SFO', 'ATL'],
  ['ATL', 'ICN'],
  ['ATL', 'SFO'],
]);

solution([
  ['ICN', 'JFK'],
  ['HND', 'IAD'],
  ['JFK', 'HND'],
]);

function getAdjacencyList(tickets) {
  const adjacencyList = {};
  tickets.forEach(([src, dest]) => {
    if (!adjacencyList[src]) adjacencyList[src] = [];
    adjacencyList[src].push(dest);
  });
  for (const src in adjacencyList) {
    adjacencyList[src].sort();
  }
  return adjacencyList;
}
function solution(tickets) {
  const adjacencyList = getAdjacencyList(tickets);

  const path = [];
  function dfs(src) {
    const destinations = adjacencyList[src];
    while (destinations && destinations.length > 0) {
      dfs(destinations.shift());
    }
    path.push(src);
  }
  dfs('ICN');
  return path.reverse();
}
