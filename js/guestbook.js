// 미니 방명록: 등록 버튼을 누르면 리스트에 바로 추가
const guestInput = document.getElementById('guestInput');
const guestSubmit = document.getElementById('guestSubmit');
const guestList = document.getElementById('guestList');

function addGuestEntry() {
    const text = guestInput.value.trim();

    if (text === "") {
        alert("한 줄 평을 입력해 주세요!");
        return;
    }

    const li = document.createElement('li');
    li.className = 'guestbook-item';
    li.textContent = text;
    guestList.prepend(li);

    guestInput.value = "";
    guestInput.focus();
}

guestSubmit.addEventListener('click', addGuestEntry);

guestInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addGuestEntry();
});
