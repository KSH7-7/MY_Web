const contributionsData = [
    // 데이터는 일별로 난수 생성 (0~4 레벨)
    { date: '2023-09-01', level: 1 },
    { date: '2023-09-02', level: 2 },
    { date: '2023-09-03', level: 3 },
    // 필요한 만큼 데이터를 추가...
    // 총 365일 데이터가 필요함.
  ];
  
  // 그래프 그리기
  const graphContainer = document.getElementById('graph');
  
  // 주어진 데이터에 맞춰서 칸을 채움
  contributionsData.forEach((contribution) => {
    const cell = document.createElement('div');
    cell.classList.add('cell');
  
    // 기여 수준(level)에 따른 클래스 적용
    if (contribution.level === 1) {
      cell.classList.add('level-1');
    } else if (contribution.level === 2) {
      cell.classList.add('level-2');
    } else if (contribution.level === 3) {
      cell.classList.add('level-3');
    } else if (contribution.level === 4) {
      cell.classList.add('level-4');
    }
  
    // 셀을 그래프 컨테이너에 추가
    graphContainer.appendChild(cell);
  });
  