function solution(word) {
  const chars = ['A', 'E', 'I', 'O', 'U'];
  let index = 0;
  let found = false;

  function dfs(str) {
    if (found || str.length === 5) return;
    for (const char of chars) {
      if (found) return;

      const newStr = str + char;
      index += 1;
      if (newStr === word) {
        found = true;
        return;
      }
      dfs(newStr);
    }
  }
  dfs('');
  return index;
}
