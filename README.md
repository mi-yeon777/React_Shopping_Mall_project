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
