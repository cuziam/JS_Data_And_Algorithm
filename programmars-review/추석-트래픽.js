function getEndTime(time) {
  const [hours, minutes, seconds] = time.split(':');
  return Number(hours) * 60 * 60 * 1000 + Number(minutes) * 60 * 1000 + Number(seconds) * 1000;
}
function getProcessTime(processTime) {
  return Number(processTime.slice(0, -1)) * 1000;
}
function getBeginTime(endTime, processTime) {
  return endTime - processTime + 1;
}
function solution(lines) {
  const logs = lines.map(line => {
    let [, endTime, processTime] = line.split(' ');
    endTime = getEndTime(endTime);
    processTime = getProcessTime(processTime);
    const beginTime = getBeginTime(endTime, processTime);

    return { beginTime, endTime };
  });
  let result = 0;
  logs.forEach(log => {
    let [beginTraffic, endTraffic] = [0, 0];
    logs.forEach(ele => {
      if (ele.endTime >= log.beginTime && ele.beginTime < log.beginTime + 1000) beginTraffic++;
      if (ele.endTime >= log.endTime && ele.beginTime < log.endTime + 1000) endTraffic++;
    });
    result = Math.max(result, beginTraffic, endTraffic);
  });
  return result;
}
