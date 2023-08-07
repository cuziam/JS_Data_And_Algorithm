function solution(phoneNumber) {
  return '*'.repeat(phoneNumber.length - 4) + phoneNumber.slice(phoneNumber.length - 4);
}
