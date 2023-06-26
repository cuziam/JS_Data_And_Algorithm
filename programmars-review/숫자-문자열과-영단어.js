function solution(s) {
  const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  for (const idx in words) {
    s = s.replace(new RegExp(words[idx], 'g'), String(idx));
  }
  console.log(s);
  return Number(s);
}
solution('2three45sixseven');
