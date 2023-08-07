function solution(s, n) {
  return s
    .split('')
    .map(char => {
      if (char === ' ') return char;

      const base = char.charCodeAt(0) <= 90 ? 65 : 97;
      return String.fromCharCode(((char.charCodeAt(0) - base + n) % 26) + base);
    })
    .join('');
}
