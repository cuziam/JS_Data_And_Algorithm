class GenreInfo {
  constructor() {
    this.totalPlayTime = 0;
    this.musicList = [];
  }
}
function solution(genres, plays) {
  const info = {}; // key:name, value: genreInfo
  for (let i = 0; i < genres.length; i++) {
    const id = i;
    const genre = genres[i];
    const playTime = plays[i];
    if (!info[genre]) info[genre] = new GenreInfo();
    console.log(info[genre].totalPlayTime);
    info[genre].totalPlayTime += playTime;
    info[genre].musicList.push([id, playTime]);
  }
  // topTwoSongs 추출해서 정렬해놓았음.
  for (const genre in info) {
    info[genre].musicList.sort((a, b) => b[1] - a[1]);
    info[genre].topTwoSongs = info[genre].musicList.slice(0, 2);
    if (info[genre].topTwoSongs.length >= 2 && info[genre].topTwoSongs[0][1] === info[genre].topTwoSongs[1][1]) {
      info[genre].topTwoSongs.sort((a, b) => a[0] - b[0]);
    }
  }
  const answer = [];
  const test = Object.values(info)
    .sort((a, b) => b.totalPlayTime - a.totalPlayTime)
    .forEach(inf => {
      inf.topTwoSongs.forEach(song => answer.push(song[0]));
    });
  return answer;
}

function solution(genres, plays) {
  //장르별 정보 삽입
  let genreInfo = {};
  genres.forEach((genre, idx) => {
    if (!genreInfo[genre]) {
      genreInfo[genre] = {
        plays: 0,
        songs: [],
      };
    }
    genreInfo[genre].plays += plays[idx];
    genreInfo[genre].songs.push([idx, plays[idx]]);
  });

  console.log(genreInfo);

  //장르별 정보 정렬
  genreInfo = Object.entries(genreInfo);
  genreInfo.sort(([, dict1], [, dict2]) => dict2.plays - dict1.plays);
  console.log(genreInfo);

  genreInfo.forEach(([, dict1]) => {
    dict1.songs.sort(([num1, plays1], [num2, plays2]) => {
      if (plays1 > plays2) {
        return -1;
      } else if (plays1 === plays2) {
        if (num1 < num2) return -1;
      } else {
        return 1;
      }
    });
  });

  //결과값 추출
  const result = [];
  genreInfo.forEach(([, dict]) => {
    return result.push(...dict.songs.slice(0, 2));
  });
  return result.map(song => song[0]);
}
