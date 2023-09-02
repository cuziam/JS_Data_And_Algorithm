function solution(files) {
  const regex = /(.+?)(\d+)/;
  files.sort((str1, str2) => {
    let [, str1head, str1num] = str1.match(regex);
    let [, str2head, str2num] = str2.match(regex);
    // 전처리
    str1head = str1head.toUpperCase();
    str2head = str2head.toUpperCase();
    str1num = parseInt(str1num);
    str2num = parseInt(str2num);
    if (str1head < str2head) {
      return -1;
    }
    if (str1head > str2head) {
      return 1;
    }
    return str1num - str2num;
  });
  return files;
}
