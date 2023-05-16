const fs = require('fs');
const path = require('path');

// 대상 폴더 경로
// 코드를 퍼가서 사용하신다면 아래의 folderPath를 원하는 폴더 경로로 설정해주세요.
const folderPath = path.dirname(__filename);
console.log(`대상 폴더 경로: ${folderPath}`);

// 폴더 내의 파일 목록 가져오기
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error(`해당 폴더를 읽을 수 없습니다`, err);
    return;
  }

  // 파일명을 케밥 케이스로 변경한다.
  files.forEach(file => {
    const sourcePath = path.join(folderPath, file);
    const targetPath = path.join(folderPath, convertToKebabCase(file));

    // 파일명 변경
    if (sourcePath !== targetPath) {
      fs.rename(sourcePath, targetPath, err => {
        if (err) {
          console.log(`파일명 변경 실패: ${file}`, err);
        } else {
          console.log(`파일명 변경 완료: ${file} -> ${path.basename(targetPath)}`);
        }
      });
    }
  });
});

// 스네이크 케이스를 케밥 케이스로 변환하는 함수
function convertToKebabCase(snakeCase) {
  return snakeCase.replace(/_/g, '-');
}
