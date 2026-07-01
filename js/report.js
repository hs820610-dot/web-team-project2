// 맛집 제보하기 폼 유효성 검사
const reportForm = document.getElementById('reportForm');
const shopNameInput = document.getElementById('shopName');

reportForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (shopNameInput.value.trim() === "") {
        alert("식당 이름을 입력해 주세요!");
        shopNameInput.focus();
        return;
    }

    alert("소중한 제보 감사합니다! 🙌");
    reportForm.reset();
});
