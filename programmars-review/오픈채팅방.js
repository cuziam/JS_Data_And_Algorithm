function solution(records) {
  // userInfo: key=uid value=[nickname,status];
  const userInfo = {};
  // statusChat: key=status value="대화"
  const statusChat = {
    Enter: '님이 들어왔습니다.',
    Leave: '님이 나갔습니다.',
  };
  const chatHistory = [];
  // records 순회,파싱: status, uid, nickname 얻기
  // userInfo에 집어넣기, chatHistory([[uid,statusChat]...])도 채우기.
  records.forEach(record => {
    const tokens = record.split(' ');
    const status = tokens[0];
    const uid = tokens[1];
    const nickname = tokens[2] ? tokens[2] : null;
    if (nickname !== null) {
      userInfo[uid] = nickname;
    }
    if (status !== 'Change') {
      chatHistory.push([uid, statusChat[status]]);
    }
  });
  // record순회끝나면 chatHistory의 uid값을 nickname값으로 바꾸고,join시킨다.
  return chatHistory.map(history => {
    history[0] = userInfo[history[0]];
    return history.join('');
  });
}
