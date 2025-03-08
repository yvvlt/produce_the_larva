const container = document.getElementById('container');

container.addEventListener('click', (event) => {
    const pig = document.createElement('img');
    pig.src = 'img1.png';  // 돼지 이미지
    pig.classList.add('pig');
    
    // 랜덤 위치 계산
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    
    pig.style.left = `${x}px`;
    pig.style.top = `${y}px`;

    container.appendChild(pig);

    // 돼지 이미지가 등장할 때 "띵동! 땡큐!" 텍스트 추가
    const text = document.createElement('div');
    text.innerText = '꜀( ՞ . ̫ . ՞ ꜀ ) ꜆';
    text.style.position = 'absolute';
    text.style.left = `${x + 20}px`;
    text.style.top = `${y - 20}px`;
    text.style.color = 'blue';
    container.appendChild(text);
    
    setTimeout(() => {
        pig.remove();
        text.remove();
    }, 3000); // 3초 후 돼지와 텍스트 삭제
});
