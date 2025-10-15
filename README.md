# day3

Step 1.


ProductDetail.jsx



ㄴ코드 수정추가 신발 사이즈 선택


Step 2.


src에 test폴더: TestLIst.jsx, ProductsData.js 작업


App.jsx: test 경로 지정 


test폴더: TestDetail.jsx 컴포넌트 생성후 작업


App.jsx: test 자식경로는 list(TestList.jsx)지정. 브라우저url test/list로 조회할것


```
      {
        //변할 수 있는 변수 자리(파라미터)
        path: "detail/:id",
        element: <TestDetail />,
      },


```


TestList.jsx 리턴부 


```
    <div>
      <Header />
      <div className="grid grid-cols-5 gap-4 p-4">
        {products.map((p, idx) => (
          <div className="border p-4 bg-green-50">{p.title}</div>
        ))}
      </div>
    </div>

```
에서 

```
          <Link to={`/test/detail/${idx}`}>
            <div className="border p-4 bg-green-50">{p.title}</div>
          </Link>

```
추가


TestList.jsx


import { products } from "./productsData"; //배열값 가져오는용 아래 배열담은 products 없어도 조회됨



임포트후 기존의 배열담은 변수 없앰


TestDetail.jsx


 scrape파일 node.mjs로 실행 해보고 가져온값 넣음




