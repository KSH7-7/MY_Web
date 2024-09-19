// 숨겨진 링크 클릭 시 관리 페이지로 이동
document.getElementById('admin-link').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = '/admin'; // 관리 페이지 URL로 변경
});

// 히스토리 그래프에 가상 데이터 적용 (모양새만 구현)
document.addEventListener('DOMContentLoaded', () => {
    const days = document.querySelectorAll('.day');
    days.forEach(day => {
        // 랜덤하게 레벨 부여 (예시)
        const randomLevel = Math.floor(Math.random() * 4) + 1; // 1 ~ 4
        day.classList.add(`level-${randomLevel}`);

        // 가상 날짜와 게임 수 설정 (이미 HTML에 data-date와 data-games가 있음)
        // 실제 API 연동 시, data 속성을 동적으로 설정할 수 있습니다.
        // 예시로 data-games 값을 0~5 사이의 랜덤 숫자로 설정
        const randomGames = Math.floor(Math.random() * 6); // 0 ~ 5
        day.setAttribute('data-games', randomGames);

        // 날짜는 이미 HTML에 설정되어 있다고 가정 (data-date)
    });
});
;

// 예시: API로부터 데이터를 받아와 히스토리 그래프 업데이트
fetch('YOUR_API_ENDPOINT')
    .then(response => response.json())
    .then(data => {
        // data는 날짜별 게임 접속 기록 배열이라고 가정
        // 예: [{ date: '2024-01-01', games: 3 }, ...]
        data.forEach(record => {
            const dayElement = document.querySelector(`.day[data-date="${record.date}"]`);
            if (dayElement) {
                dayElement.setAttribute('data-games', record.games);
                // 레벨 설정 (예: games 수에 따라 level 결정)
                let level;
                if (record.games === 0) level = 0;
                else if (record.games <= 1) level = 1;
                else if (record.games <= 3) level = 2;
                else if (record.games <= 5) level = 3;
                else level = 4;
                dayElement.classList.add(`level-${level}`);
            }
        });
    })
    .catch(error => console.error('API 연동 오류:', error));
