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
