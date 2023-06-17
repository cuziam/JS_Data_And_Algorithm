/**
 * 일반적인 주차요금.
 * 요금표가 주어짐.=> 기본시간, 기본요금, 단위 시간, 단위 요금
 * 입 출차 기록이 주어짐=> 24단위계 시각, 4자리의 차량번호 내역
 *
 * 입차 후 출차내역이 없다면 23:59에 출차한 것.
 * 기본 시간 이하 사용: 기본 요금
 * 기본 시간 초과 사용: 기본요금+ 단위 요금
 * 초과시간/10에 대해선 받아올림 계산.
 *
 * 차량 번호가 작은 작동차보다 청구할 요금을 정수 배열에 담아서 return 해라.
 */

const fees = [180, 5000, 10, 600];
const records = [
  '05:34 5961 IN',
  '06:00 0000 IN',
  '06:34 0000 OUT',
  '07:59 5961 OUT',
  '07:59 0148 IN',
  '18:59 0000 IN',
  '19:09 0148 OUT',
  '22:59 5961 IN',
  '23:00 5961 OUT',
];

function convertTimeToMinutes(time) {
  const hours = parseInt(time.substring(0, 2), 10);
  const minutes = parseInt(time.substring(3), 10);

  const totalMinutes = hours * 60 + minutes;
  return totalMinutes;
}
function solution(fees, records) {
  // fees파싱
  const [baseTime, baseFee, unitTime, unitTimeFee] = fees;
  console.log(`fees: ${[baseTime, baseFee, unitTime, unitTimeFee]}`);
  console.log(`records: ${records}`);
  const timePerCar = {};
  records.forEach(record => {
    // record에 담긴 정보 파싱
    let [time, carNumber, state] = record.split(' ');
    time = convertTimeToMinutes(time);
    console.log(time, carNumber, state);

    if (!timePerCar[carNumber]) {
      timePerCar[carNumber] = { duration: 0, carNumber };
    }
    timePerCar[carNumber].state = state;
    if (state === 'OUT') {
      timePerCar[carNumber].duration += time - timePerCar[carNumber].lastTime;
      return;
    }
    timePerCar[carNumber].lastTime = time;
  });
  console.log(timePerCar);
  const result = Object.values(timePerCar)
    .sort((a, b) => a.carNumber - b.carNumber)
    .map(car => {
      if (car.state === 'IN') {
        car.duration += 1439 - car.lastTime;
      }
      if (baseTime > car.duration) {
        return baseFee;
      }
      return baseFee + Math.ceil((car.duration - baseTime) / unitTime) * unitTimeFee;
    });
  return result;
}
console.log(solution(fees, records));
