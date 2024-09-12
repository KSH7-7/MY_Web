const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/genshin/:uid', async (req, res) => {
    const uid = req.params.uid;
    try {
        const response = await axios.get(`https://enka.network/api/uid/${uid}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'API 요청 실패' });
    }
});

app.listen(3000, () => {
    console.log('서버가 http://localhost:3000에서 실행 중입니다.');
});
