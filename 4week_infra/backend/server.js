// server.js

const express = require('express');        // CommonJS 방식
const app = express();

// 포트는 환경변수 PORT가 있으면 사용하고, 없으면 3000번
const PORT = process.env.PORT || 3000;

// 루트 경로에 GET 요청이 들어오면 텍스트 응답
app.get('/', (req, res) => {
  res.send('Hello, EC2에서 실행 중인 간단한 Node.js 서버입니다!');
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
