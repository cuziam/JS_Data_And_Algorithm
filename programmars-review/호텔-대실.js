function convertTime(time) {
  const [hour, minute] = time.split(':');
  return Number(hour) * 60 + Number(minute);
}
function solution(bookTimes) {
  bookTimes.sort();
  const roomInfo = [];
  bookTimes.forEach(time => {
    const startTime = convertTime(time[0]);
    const endTime = convertTime(time[1]) + 10;
    const idx = roomInfo.findIndex(ele => ele <= startTime);
    idx === -1 ? roomInfo.push(endTime) : (roomInfo[idx] = endTime);
  });
  return roomInfo.length;
}
