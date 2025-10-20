# day5_ 고유식별번호 :id


day4작업에 이어서 함 


App. jsx라우터에서
```
      { path: "products/detail/:id", element: <ProductDetail /> }, //여기서 :id정의됨

```
:id 확인


* productsData.js

  
변수명 바꾸고 맴함수 추가 isNew, isBest화면에 필터되어 보이도록 true로 수정


* ProductCard.jsx


고유식별번호를 담을 변수 id추가


* ProductDetail.jsx


고유식별번호 :id가 담긴 변수 nowId와 


ProductsData.js(데이터담긴)의 속성에 맞게 선언된 변수들을 적절히 배치해줌


*ProductList.jsx


map에서 임시로 넣은 인덱스를 빼고 
```
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
```
ProductCard컴포넌트와 연결, key에 넣어줌 p는 파라미터


 
