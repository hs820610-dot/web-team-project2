// 1. 카테고리별 메뉴 데이터
const menuData = {
    korean: ["🍲 김치찌개와 계란말이", "🥘 뚝배기 불고기", "🥩 제육볶음", "🍗 후라이드 치킨", "🍜 장칼국수"],
    chinese: ["🍜 짜장면과 탕수육", "🌶️ 화끈한 마라탕", "🥟 고추잡채와 꽃빵", "🍛 마파두부밥"],
    japanese: ["🍤 돈카츠와 냉소바", "🍣 신선한 초밥 세트", "🍜 따끈한 돈코츠 라멘", "🍛 규동(소고기덮밥)"],
    western: ["🍝 까르보나라 파스타", "🥩 육즙 가득 스테이크", "🍔  버거와 감튀", "🍕 페페로니 피자"],
    vietnam: ["🍜 소고기 쌀국수", "🥗 새콤달콤 분짜", "🥖 바삭한 반미 샌드위치", "🍛 껌승(돼지고기 덮밥)"],
    snack: ["🍿 팝콘", "🍪 쿠키", "🍫 초콜릿", "🥨 프레첼", "🍩 도넛"]
};

// 전체 랜덤용 통합 배열
const allMenus = Object.values(menuData).flat();

// 2. 프로그램 시작 (첫 화면 세팅)
function initMenuSelector() {
    const display = document.getElementById("result-display");
    display.innerHTML = `<p class="cb-main-msg">어떤 스타일의 음식을 원하시나요?<br>원하는 카테고리를 고르거나 전체 랜덤을 돌려보세요!</p>`;

    // 기본 선택 버튼 배열 렌더링
    renderButtons([
        { text: " 한식", action: "pickCategory('korean')" },
        { text: " 중식", action: "pickCategory('chinese')" },
        { text: " 일식", action: "pickCategory('japanese')" },
        { text: " 양식", action: "pickCategory('western')" },
        { text: " 베트남", action: "pickCategory('vietnam')" },
        { text: " 간식/디저트", action: "pickCategory('snack')" },
        { text: "🎲 전체 랜덤 뽑기", action: "pickRandomAll()" }
    ]);
}

// 3. 특정 카테고리 선택 시 그 안에서 랜덤 뽑기
function pickCategory(categoryKey) {
    const menus = menuData[categoryKey];
    const randomIndex = Math.floor(Math.random() * menus.length);
    const finalMenu = menus[randomIndex];

    const categoryNames = { korean: "한식", chinese: "중식", japanese: "일식", western: "양식", vietnam: "베트남 요리" };
    
    const display = document.getElementById("result-display");
    display.innerHTML = `
        <div class="cb-result-box">
            <span class="cb-tag">${categoryNames[categoryKey]} 추천</span>
            <h3 class="cb-final-menu">${finalMenu}</h3>
            <p class="cb-sub-text">오늘 식사는 이 메뉴로 결정하는 게 어때요? 😉</p>
        </div>
    `;

    // 결과 화면 전용 버튼 세팅
    renderButtons([
        { text: "🔄 이 카테고리에서 다시 뽑기", action: `pickCategory('${categoryKey}')` },
        { text: "🌐 다른 카테고리 보기", action: "initMenuSelector()" }
    ]);
}

// 4. 전체 메뉴 중에서 아무거나 하나 뽑기
function pickRandomAll() {
    const randomIndex = Math.floor(Math.random() * allMenus.length);
    const finalMenu = allMenus[randomIndex];

    const display = document.getElementById("result-display");
    display.innerHTML = `
        <div class="cb-result-box">
            <span class="cb-tag random-tag">🎲 운명의 랜덤 픽</span>
            <h3 class="cb-final-menu">${finalMenu}</h3>
            <p class="cb-sub-text">고민 해결! 오늘은 이거 먹으러 갑시다! 🚀</p>
        </div>
    `;

    renderButtons([
        { text: "🎲 한 번 더 뽑기", action: "pickRandomAll()" },
        { text: "⏪ 처음으로 돌아가기", action: "initMenuSelector()" }
    ]);
}

// 5. 초기 화면으로 리셋
function resetMenuSelector() {
    const display = document.getElementById("result-display");
    display.innerHTML = `<p class="cb-notice-text">아래 버튼을 눌러 오늘 먹을 메뉴 카테고리를 정해보세요!</p>`;
    
    const buttonContainer = document.getElementById("chatting-container");
    if (buttonContainer) buttonContainer.innerHTML = ""; 
}

// 버튼 동적 생성기
function renderButtons(buttonList) {
    const buttonContainer = document.getElementById("chatting-container");
    if (!buttonContainer) return;

    buttonContainer.innerHTML = ""; 
    buttonList.forEach(btn => {
        const button = document.createElement("button");
        button.classList.add("cb-chip-btn");
        button.type = "button";
        button.innerText = btn.text;
        button.setAttribute("onclick", btn.action);
        buttonContainer.appendChild(button);
    });
}