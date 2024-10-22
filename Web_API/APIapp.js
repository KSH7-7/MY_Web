const fetchGameStats = async () => {
    try {
        const apiUrl = 'https://open.api.nexon.com/maplestory/v1/character/basic?ocid=???????????'; // 여기에 실제 게임 API URL을 입력하세요.
        const apiKey = '???????????????????????';
        const response = await fetch(apiUrl);
        const data = await response.json();

        // 데이터를 최신 날짜순으로 정렬한 후, 가장 첫 번째(최신) 데이터만 가져옴
        const latestData = data.sort((a, b) => new Date(b.date) - new Date(a.date))[0];

        // 최신 데이터를 HTML에 표시
        const gameStatsDiv = document.getElementById('game-stats');
        gameStatsDiv.innerHTML = `
            <h2>${latestData.characterName}</h2>
            <p><strong>Level:</strong> ${latestData.level}</p>
            <p><strong>Power:</strong> ${latestData.power}</p>
            <p><strong>Date:</strong> ${latestData.date}</p>
        `;
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('game-stats').innerText = 'Failed to load game stats.';
    }
};

// 페이지가 로드될 때 데이터를 가져옴
fetchGameStats();

// 주기적으로 데이터를 갱신
setInterval(fetchGameStats, 300000); 
