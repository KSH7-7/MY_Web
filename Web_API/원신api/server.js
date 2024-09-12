const express = require('express');
const axios = require('axios');
const app = express();

// Enka Network API를 통해 Genshin Impact 프로필 데이터를 가져오는 경로
app.get('/genshin/:uid', async (req, res) => {
  const uid = req.params.uid;
  const apiUrl = `https://enka.network/api/uid/${uid}?lang=ko`;

  try {
    const response = await axios.get(apiUrl);
    res.json(response.data); // 클라이언트에게 데이터를 전달
  } catch (error) {
    console.error('API 요청 중 오류 발생:', error.message);
    res.status(500).json({ error: 'API 요청 실패' });
  }
});

app.listen(3000, () => {
  console.log('서버가 http://localhost:3000에서 실행 중입니다.');
});
