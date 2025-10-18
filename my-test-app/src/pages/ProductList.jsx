// import { Link } from "react-router-dom";
// import { products } from "@/data/productsData"; //2
// export default function ProductList() {
//   //step2: date 폴더에 배열넣어 분리후, 이 컴포넌트에 임포트 해줌
//   // const products = [
//   //   {
//   //     title: "상품1",
//   //   },
//   //   {
//   //     title: "상품2",
//   //   },
//   //   {
//   //     title: "상품3",
//   //   },
//   //   {
//   //     title: "상품4",
//   //   },
//   //   {
//   //     title: "상품5",
//   //   },
//   //   {
//   //     title: "상품6",
//   //   },
//   // ];
//   return (
//     <div>
//       {products.map((p, idx) => (
//         <Link to={`/products/detail/${idx + 1}`}>
//           <div>{p.title}</div>
//         </Link>
//       ))}
//     </div>
//   );
// }

import { Link, useParams } from "react-router-dom";

export default function ProductList() {
  const { category } = useParams();

  const products = [
    { id: 1, title: "상품1", category: "women" },
    { id: 2, title: "상품2", category: "men" },
    { id: 3, title: "상품3", category: "kids" },
  ];

  // category가 있으면 필터링
  const filtered = category
    ? products.filter((p) => p.category === category)
    : products;

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
