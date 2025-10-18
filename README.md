#day4


상품목록과 상세는 조회되나,
```
react-dom_client.js?v=e9898430:18616 Each child in a list should have a unique "key" prop.

Check the render method of `ProductList`. See https://react.dev/link/warning-keys for more information.
```
에러가 뜨는 상태.

ProductList컴포넌트: 
React에서 리스트를 렌더링할 때 각 자식 요소에 고유한 key 속성이 필요


* key 추가, 수정 에러 해결


수정전
```
   return (
     <div>
       {products.map((p, idx) => (
         <Link to={`/products/detail/${idx + 1}`}>
           <div>{p.title}</div>
         </Link>
       ))}
     </div>
   );
```

수정후
```
  return (
    <div>
      <h2>{category ? `${category} 카테고리` : "전체 상품"}</h2>
      <ul>
        {filtered.map((p) => (
          <li key={p.id}>
            <Link to={`/products/detail/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

ProdectList.jsx: 임시 배열데이터에 id,category 추가(임시 데이터들이 담긴 productsData.js의 연결 끊은 상태)하고 필터.맵합수블럭안에 key를 지정해주었다 .


productDetail.jsx: 상세보기에 보일 임시데이터 넣어주었다

[key 오류해결 프로젝트](https://github.com/mi-yeon777/React_Shopping_Mall_project/tree/Mall_day4_ShellScript_key%EC%98%A4%EB%A5%98%ED%95%B4%EA%B2%B0)
