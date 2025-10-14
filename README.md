
# bay1 10.13 

카카오 맵 스크립트 앱키 발급받아 출력시켜봄 조회는 되나 index.html에서 넣은
```
    <script src="https://dapi.kakao.com/v2/maps/sdk.js?앱키삽입구간&libraries=services"></script>
```
는 임시용 스크립트 때문에 완전한 상태 아님

---
구현할것:


스케쳐스코리아 사이트 참고


상세보기, 선택, 지도 검색


1.상품목록을 다르게
(제목, 가격 리뷰)


2. 상세뷰에서 해당 데이터


3.장바구니 클릭시 해당 정보를 보내는것


제공받은 컴포넌트의
셈플페이지 html 참고해서 작업하기
우먼, 맨등 컴포넌트 부분으로 뺄거 구분해보기(카테고리와 필터로 10.14완료)

---


라우터는 버전 7버전 형식으로 사용


마이 프로젝트 몰(내 작업용)


-테일윈드 설치없이 코드로 셋팅


vite.config.js파일에 강사님 코드 복붙


인덱스,css 복붙


"@/절대경로 설정" , .은 상대경로


브라우저에/샘플스토어, 등 경로 들어가 확인조회


경로지정 App.jsx 컴포넌트:


글로벌레이아웃을 넣을때


칠드런[]안에 path 넣는다. 자식들은 /쓰지않는다.

스텝2


셈플프로덕트 html을
프로덕트로 바꿔 붙여넣음

개발자모드에서 화살표나? 요소 코드에 커서를 올리면 해당영역 표시됨


프로덕트 카드는 중첩할 필요가 없어 컴포넌트에 넣고 백업용으로만 남겨놓음
새로 프로덕트카드jsx 생성

# day2

## day2(지도 오류 해결완료)

## day2_2, day2_3취합 오류해결

* day2_2:

    
홈화면이 조회안됨(App.jsx의 path경로들을 직접화면 url에 입력시에만 일부조회)

    
ProductCard.jsx

    
```
    export default function ProductCard({ product }) {
  const {
    id,
    title,
    price,
    reviewScore,
    reviewCount,
    isNew = false,
    isBest = false,
    isSoldout = false,
  } = product;
  
```

    
{ product }는 부모 컴포넌트가 내려준 props(속성) 을 구조 분해해서 받는 부분.에
카테고리 누락(리턴블럭에도 <div>[{category}]</div>누락)


* day2_3: 홈화면에 제품 정보(가격,제품명, 별점등) 안뜸 

    
ㄴ> Home.jsx에 ProductList.jsx 정보 넣어 보이도록 수정

---

    
ProductCard.jsx 수정전

    
```

export default function ProductCard({ product = {} }) {
  const {
    id,
    title,
    price,
    category,
    reviewScore,
    reviewCount,
    isNew = false,
    isBest = false,
    isSoldout = false,
  } = product || {};
}

```

수정후

    
```

export default function ProductCard({ product = {} }) {
  const {
    id,
    title,
    price,
    category,
    reviewScore,
    reviewCount,
    isNew = false,
    isBest = false,
    isSoldout = false,
  } = product || {};
}

```
    
* product = {}
→ 만약 상위 컴포넌트에서 product를 전달하지 않아도
기본값으로 빈 객체 {}를 받음.

    
⇒ 구조분해가 에러 없이 동작함.

* product || {}

    
→ 혹시라도 null이 들어오는 경우에도
undefined 대신 안전하게 {}로 처리. 
