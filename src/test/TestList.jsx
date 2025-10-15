import { Link } from "react-router-dom";
import { products } from "./productsData"; //배열값 가져오는용 아래 배열담은 products 없어도 조회됨

function Header() {
  return (
    <div className="border-b flex space-x-4 p-4">
      <div>로고</div>
      <div>Women</div>
      <div>Men</div>
      <div>Kids</div>
      <div>New</div>
      <div>Best</div>
      <div className="flex-grow"></div>
      <div>장바구니</div>
    </div>
  );
}
export default function TestList() {
  //   const products = [
  //     {
  //       id: 1,
  //       title: "고런 맥스쿠셔닝 아치핏 (와이드 슬립인스)",
  //       category: "women",
  //       price: 130000,
  //     },
  //     {
  //       id: 2,
  //       title: "상품2",
  //       category: "men",
  //       price: 19000,
  //     },
  //     {
  //       id: 3,
  //       title: "상품3",
  //       category: "men",
  //       price: 29000,
  //     },
  //     {
  //       id: 3,
  //       title: "상품3",
  //       category: "men",
  //       price: 29000,
  //     },
  //     {
  //       id: 3,
  //       title: "상품3",
  //       category: "men",
  //       price: 29000,
  //     },
  //     {
  //       id: 3,
  //       title: "상품3",
  //       category: "men",
  //       price: 29000,
  //     },
  //     {
  //       id: 3,
  //       title: "상품3",
  //       category: "men",
  //       price: 29000,
  //     },
  //     {
  //       id: 3,
  //       title: "상품3",
  //       category: "men",
  //       price: 29000,
  //     },
  //   ]; //s 복수형

  return (
    <div>
      <Header />
      <div className="grid grid-cols-5 gap-4 p-4">
        {products.map((p, idx) => (
          <Link to={`/test/detail/${idx}`}>
            <div className="border p-4 bg-green-50">{p.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
