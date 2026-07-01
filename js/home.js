// 1. 맛집 데이터 배열 (실제 연결할 link 주소 추가)
const restaurantData = [
    { 
        name: "비욘더 강남", 
        category: "양식", 
        desc: "생면으로 만든 진한 크림 파스타 맛집", 
        emoji: "🍝",
        link: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%ED%8C%8C%EC%8A%A4%ED%83%80%20%EB%A7%9B%EC%A7%91/place/1242730767?c=15.00,0,0,0,dh&placePath=%3FabtExp%253DNEW-PLACE-SEARCH%25253A3%2526entry%253Dpll%2526n_ad_group_type%253D10%2526n_query%253D%2525EC%252584%25259C%2525EC%25259A%2525B8%2525ED%25258C%25258C%2525EC%25258A%2525A4%2525ED%252583%252580%2525EB%2525A7%25259B%2525EC%2525A7%252591" // 👈 이동하고 싶은 실제 맛집 링크 입력 (예: 네이버 지도 주소)
    },
    { 
        name: "육일관 본점", 
        category: "한식", 
        desc: "짚불 향 가득한 숙성 삼겹살 전문점", 
        emoji: "🥩",
        link: "https://www.google.com/maps/place/%EA%B3%B5%EA%B0%90+%ED%99%8D%EB%8C%80%EC%A0%90/data=!3m1!4b1!4m6!3m5!1s0x357c99451c3c3cdb:0x469e07724fd90ab5!8m2!3d37.5503049!4d126.922482!16s%2Fg%2F11l27gxbnd?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D"
    },
    { 
        name: "공감 홍대점", 
        category: "일식", 
        desc: "입에서 살살 녹는 신선한 제철 초밥", 
        emoji: "🍣",
        link: "https://www.google.com/maps?sca_esv=a3cad282a0e635c3&biw=1536&bih=730&output=search&q=%EA%B3%B5%EA%B0%90+%ED%99%8D%EB%8C%80%EC%A0%90&source=lnms&fbs=ABfTbFXzkoiOgE3D9qJbCO-_hycNsfN2oPJ_645ClXMizCGJF9wfP4HEdIE8X7SnuBxd7IgAkbiMGQ8ttYD0dMv6V9fNThCzkEHUhJOpRnrf0M5AoNQAxpoBgQhG3zUOe3U_Rj5Cb2CBdyteqx_iWQD7WKUeiypB4Q7pGiUFmYbNM9fST_18KaA1Z2So6zvlkZDG3Vhtu6-eGeUtwd2wuBwgiJXB7lBYzw&entry=mc&ved=1t:200715&ictx=111"
    },
    { 
        name: "매운 향솥", 
        category: "중식", 
        desc: "알싸한 마라 향이 일품인 중독성 강한 마라탕", 
        emoji: "🍜",
        link: "https://www.google.com/maps?sca_esv=a3cad282a0e635c3&biw=1536&bih=730&output=search&q=%EB%A7%A4%EC%9A%B4+%ED%96%A5%EC%86%A5&source=lnms&fbs=ABfTbFUgt-aXEFkBhPo84x72c1XoLHFs6TcISYM3FayWAWWA76SqvP3GouhYE8rgAj1Db8xX-LhsJlDbtQ0PDBgCCF7WdhBAA49_sJimfnJqC9mvbP5nn2Fls0La700zPWX38fiVJkPPTAd8n-0phew5de64t253x-J_CCiVGk7gA-_0yLtm0SkSkIOp6FDVSMor8PIbAwuRBxq9aC9oFzj8HBhB1nuc9MU5BdJYBANOC6DiTWTOOgE&entry=mc&ved=1t:200715&ictx=111"
    },
    { 
        name: "스케줄 성수", 
        category: "카페/샐러드", 
        desc: "몸도 마음도 고급 스러워 지는..나를 위한 한끼", 
        emoji: "🥗",
        link: "https://www.google.com/maps?sca_esv=a3cad282a0e635c3&biw=1536&bih=730&output=search&q=%EC%8A%A4%EC%BC%80%EC%A4%84+%EC%84%B1%EC%88%98&source=lnms&fbs=ABfTbFXzkoiOgE3D9qJbCO-_hycNljAC8zAc8lWUPktpQj6rA-wsKDVkhjFWJrwqwOASel8GM89ZR8eP_N_KGFfWwEZt6YjYGVPihTa3QOMpYaT1wPQ_1nCQlVZyUuO0-1yYQpxuzNG8ZeXWte3atH0zLSgJA_Eap48Fh-BVuwgliPg8i5Q6xBMNsIPiQf3bDDLmEBPPR39M2EcILBObcH7nFX9DXxlLWg&entry=mc&ved=1t:200715&ictx=111"
    },
    { 
        name: "광안제일 돼지국밥", 
        category: "한식", 
        desc: "24시간 푹 고아낸 깊은 국물의 부산식 국밥", 
        emoji: "🍲",
        link: "https://www.google.com/maps?sca_esv=a3cad282a0e635c3&biw=1536&bih=730&output=search&q=%EA%B4%91%EC%95%88+%EC%A0%9C%EC%9D%BC+%EB%8F%BC%EC%A7%80+%EA%B5%AD%EB%B0%A5&source=lnms&fbs=ABfTbFXzkoiOgE3D9qJbCO-_hycNsfN2oPJ_645ClXMizCGJF9wfP4HEdIE8X7SnuBxd7IgdAOmklEELr39xzScZU4dHpzkMmhD4UvzyFXSIajW6igSaPQlHChTw7GvdYVCQQgKE7qb_gHhF-Gs5SdtE7Owerw0cVTgW_aP9XHVpNi_VVH1NngLc-8G5UbipZxOq9az4Mvg2VvtGceBJSVDgF3ZrlW5SZQ&entry=mc&ved=1t:200715&ictx=111"
    }
];

// 2. HTML 요소 가져오기
const searchInput = document.querySelector('header input[type="text"]');
const cardContainer = document.getElementById('cardContainer');
const noResult = document.getElementById('noResult');

// 3. 화면에 맛집 카드를 그려주는 함수
function displayRestaurants(restaurants) {
    // 기존 카드들 초기화
    cardContainer.innerHTML = "";
    
    if (restaurants.length === 0) {
        noResult.style.display = "block"; // 결과 없음 메시지 표시
        return;
    }
    
    noResult.style.display = "none";
    
    // 데이터 개수만큼 카드 HTML 생성해서 삽입
    restaurants.forEach(shop => {
        // 원래 <div>였던 가장 바깥 틀을 <a> 태그로 변경하고 href와 target을 넣었습니다.
        const cardHtml = `
            <a href="${shop.link}" target="_blank" class="card">
                <div class="card-img">${shop.emoji}</div>
                <div class="card-info">
                    <span class="category">${shop.category}</span>
                    <h3 class="title">${shop.name}</h3>
                    <p class="desc">${shop.desc}</p>
                </div>
            </a>
        `;
        cardContainer.innerHTML += cardHtml;
    });
}

// 4. 검색창에 글자를 입력할 때마다 실행되는 필터링 이벤트
searchInput.addEventListener('input', (e) => {
    const keyword = e.target.value.trim().toLowerCase();
    
    const filtered = restaurantData.filter(shop => {
        return shop.name.toLowerCase().includes(keyword) || shop.desc.toLowerCase().includes(keyword);
    });
    
    displayRestaurants(filtered);
});

// 5. 페이지가 처음 켜졌을 때 전체 맛집 보여주기
displayRestaurants(restaurantData);