# proj-mall-day2_2-3


홈(메인)화면의: 베스트 WOMEN, MEN, KIDS 카테고리 분류 해결안한상태


* ProductList.jsx

```
import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import Toggle from "@/components/Toggle";
import { useParams } from "react-router-dom";
function Option({ children, active }) {
  return (
    <div
      className={`border rounded text-center py-2 font-semibold text-xs ${
        active ? "bg-[#0063ba] text-white" : " text-gray-600 border-gray-300"
      }`}
    >
      {children}
    </div>
  );
}
// 부모컴포넌트(자식 컴포넌트는 productCard. 리턴부확인 <ProductCard key={p.id} product={p} />)
//상품 리스트 전체
export default function ProductList() {
  const { category: nowCategory } = useParams(); //3. 카테고리 추가
  //카테고리(nowCategory)에 따라 상품을 필터링(filteredProducts)함
  //그다음 각 상품마다 ProductCard 컴포넌트를 렌더링
  const products = [
    {
      id: 1,
      title: "고런 맥스쿠셔닝 아치핏 (와이드 슬립인스)",
      price: 159000,
      category: "women",
      reviewScore: 4.5,
      reviewCount: 101,
      isNew: true,
      isBest: true,
      img: "https://cdn.skecherskorea.co.kr/pro_img/SP3WJCFF011_1.jpg?v=250904",
    },
    {
      id: 2,
      title: "신발2",
      price: 179000,
      category: "women",
      reviewScore: 5,
      reviewCount: 3,
      isSoldout: true,
      isBest: true,
      img: "https://cdn.skecherskorea.co.kr/pro_img/SP3WJCFF011_1.jpg?v=250904",
    },
    {
      id: 3,
      title: "신발3",
      price: 9900,
      category: "women",
      reviewScore: 3.2,
      reviewCount: 1,
      img: "https://cdn.skecherskorea.co.kr/pro_img/SP3WJCFF011_1.jpg?v=250904",
    },
    //3. 추가 카테고리, 필터
    {
      id: 4,
      title: "신발3",
      price: 9900,
      reviewScore: 3.2,
      category: "men",
      reviewCount: 1,
      img: "https://cdn.skecherskorea.co.kr/pro_img/SP3WJCFF011_1.jpg?v=250904",
    },
...상품

  const filteredProducts = products.filter((p) =>
    nowCategory === "new"
      ? p.isNew
      : nowCategory === "best"
      ? p.isBest
      : p.category === nowCategory
  );

  return (
    <Container>
      <div className="py-8 grid grid-cols-5 gap-8">
        <div>
          <div className="font-bold text-3xl mb-2">
            {nowCategory?.toUpperCase()}
          </div>
          <div className="font-bold text-xl mb-8 text-gray-500">
            {filteredProducts.length} Results
          </div>
css...
                </svg>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <Option>230</Option>
              <Option>235</Option>
              <Option>240</Option>
              <Option active>245</Option>
...
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="flex h-[100px] justify-end items-center space-x-8">
            <div>상품명순</div>
            <Toggle initial={true} label={["필터열기", "필터닫기"]} />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {filteredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
css...
      </div>
    </Container>
  );
}

```


* ProductCard.jsx


```
/* 이 컴포넌트는:
ProductList로부터 전달받은 product 객체를 props로 받아서
각 상품의 카드 UI(이미지, 이름, 가격, 리뷰, 상태 등)를 출력.

부모가 상품 데이터를 주고, 자식이 그 데이터를 시각적으로 표현하는 역할
*/
import StarRating from "@/components/StarRating";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
//prodoct에서 product = {}로 수정: props 구조 분해 시 기본 값 제공
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
  const thumb =
    "https://cdn.skecherskorea.co.kr/pro_img/SL0WPCFY052_1.jpg?v=250904";
  const thumbHover =
    "https://cdn.skecherskorea.co.kr/pro_img/SL0WPCFY052_6.jpg?v=250904";
  const [src, setSrc] = useState(thumb);

  useEffect(() => {
    const img = new Image();
    img.src = thumbHover;
  }, [thumbHover]);

  return (
    <Link to={`/products/detail/${id}`}>
      <div className="py-2 space-y-2 group min-h-[500px]">
        <div className="bg-stone-100 w-[200px] h-[200px] relative">
          {/* <img src="https://cdn.skecherskorea.co.kr/pro_img/SL0WPCFY052_1.jpg?v=250904" data-onover="https://cdn.skecherskorea.co.kr/pro_img/SL0WPCFY052_6.jpg?v=250904" data-onout="https://cdn.skecherskorea.co.kr/pro_img/SL0WPCFY052_1.jpg?v=250904" name="7278"></img> */}
          <img
            src={src}
            onMouseEnter={() => setSrc(thumbHover)}
            onMouseLeave={() => setSrc(thumb)}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          {isSoldout && (
            <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/20 flex items-center justify-center">
              <div className="text-white font-extrabold text-2xl">SOLD OUT</div>
            </div>
          )}
        </div>
        <div className="hidden space-x-2 group-hover:flex">
          <div className="py-1 hover:border-b border-[#0063ba]">
            <img
              className="h-[44px]"
              src="https://cdn.skecherskorea.co.kr/pro_img/SL0WPCFY051_1.jpg?v=250904"
            />
          </div>
          <div className="py-1 border-b border-[#0063ba]">
            <img
              className="h-[44px]"
              src="https://cdn.skecherskorea.co.kr/pro_img/SL0WPCFY052_1.jpg?v=250904"
            />
          </div>
        </div>

        <div>[{category}]</div>
        <div className="font-bold">{title}</div>
        <StarRating score={reviewScore} count={reviewCount} />
        <div className="text-gray-500">
          <span className="font-bold mr-0.5 text-black">{price}</span>원
        </div>
        {isNew && (
          <div className="block w-fit text-white text-[8pt] font-bold px-2 py-0.5 bg-[#203864]">
            NEW
          </div>
        )}
        {isBest && (
          <div className="block w-fit text-white text-[8pt] font-bold px-2 py-0.5 bg-[#0063ba]">
            BEST
          </div>
        )}
        <div className="text-gray-400 py-1 relative">
          <div className="font-bold text-[8pt] pb-2">SIZE</div>
          <div className="absolute hidden group-hover:block z-10 border-t-2 w-full border-gray-200">
            <div className="grid grid-cols-7 text-[8pt] gap-2 py-2 bg-white">
              <div>225</div>
              <div>230</div>
              <div className="text-gray-300">235</div>
... css
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

```
