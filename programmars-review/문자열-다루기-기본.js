function solution(s) {
  return !!((s.length === 4 || s.length === 6) && /^[0-9]+$/.test(s));
}

function alpha_string46(s) {
  const regex = /^\d{6}$|^\d{4}$/;

  return regex.test(s);
}
