import { useParams } from "react-router-dom";
import { products } from "@/data/productsData";
import ProductCard from "@/components/ProductCard";

//ProductCard.jsx컴포넌트로 링크 분리
// function ProductCard({ product, idx }) {
//   return (
//     <Link to={`/products/detail/${idx + 1}`}>
//       <div className="p-4 border rounded">{product?.title}</div>
//     </Link>
//   );
// }

export default function ProductList() {
  const { category: nowCategory } = useParams();

  const filteredProducts = nowCategory
    ? products.filter((p) => p.category === nowCategory)
    : products;

  //임시데이터용
  // export default function ProductList() {
  //   const { category } = useParams();

  //   const products = [
  //     {
  //       title: "상품1", // idx 0
  //     },
  //     {
  //       title: "상품2", // idx 1
  //     },
  //     {
  //       title: "상품3",
  //     },
  //     {
  //       title: "상품4",
  //     },
  //     {
  //       title: "상품5",
  //     },
  //     {
  //       title: "상품6",
  //     },
  //   ];

  return (
    <>
      {/* <h1 className="text-2xl font-bold">ProductList {category}</h1>
      <div className="grid grid-cols-4 gap-4 my-8">
        {products.map((p, idx) => ( */}
      <h1 className="text-2xl font-bold">ProductList {nowCategory}</h1>
      <div className="grid grid-cols-4 gap-4 my-8">
        {filteredProducts.map((p, idx) => (
          <ProductCard key={`product-${idx}`} idx={idx} product={p} />
        ))}
      </div>
    </>
  );
}
