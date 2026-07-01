// article 태그 내부에 있는 모든 버튼들을 찾아서 클릭 이벤트를 연결합니다.
const buttons = document.querySelectorAll('article button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        // 현재 버튼 텍스트 (예: "좋아요👍 0")를 가져옵니다.
        const currentText = this.textContent;
        
        // 정규식을 사용해 텍스트에서 숫자만 추출합니다.
        const currentCount = parseInt(currentText.replace(/[^0-9]/g, ''));
        
        // 숫자를 1 증가시킵니다.
        const newCount = currentCount + 1;
        
        // 기존 텍스트 형태를 유지하며 숫자만 바꾼 값으로 업데이트합니다.
        this.textContent = `좋아요👍 ${newCount}`;
        
        // 클릭했을 때 살짝 튕기는 귀여운 시각 효과
        this.style.transform = 'scale(1.08)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);
    });
});