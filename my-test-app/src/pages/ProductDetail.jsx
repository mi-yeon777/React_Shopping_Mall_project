// import { useParams } from "react-router-dom";
// export default function ProductDetail() {
//   const { id } = useParams();
//   return <h1 className="text-2xl font-bold">ProductDetail id {id}</h1>;
// }

import { useParams, Link } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();

  // 예시용 상품 데이터 (실제에선 fetch 등으로 가져올 수도 있음)
  const products = [
    { id: 1, title: "상품1", description: "여성용 티셔츠", price: 20000 },
    { id: 2, title: "상품2", description: "남성용 셔츠", price: 25000 },
    { id: 3, title: "상품3", description: "아동용 바지", price: 18000 },
  ];

  // id는 문자열이므로 숫자로 변환해서 비교
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div>
        <h2>상품을 찾을 수 없습니다 😢</h2>
        <Link to="/products" className="text-blue-500">
          상품 목록으로 돌아가기
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
      <p className="mb-2">설명: {product.description}</p>
      <p className="mb-4">가격: {product.price.toLocaleString()}원</p>

      <Link
        to="/products"
        className="inline-block mt-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        목록으로 돌아가기
      </Link>
    </div>
  );
}
