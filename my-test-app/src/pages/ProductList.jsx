import { Link } from "react-router-dom";
import { products } from "@/data/productsData"; //2
export default function ProductList() {
  //step2: date 폴더에 배열넣어 분리후, 이 컴포넌트에 임포트 해줌
  // const products = [
  //   {
  //     title: "상품1",
  //   },
  //   {
  //     title: "상품2",
  //   },
  //   {
  //     title: "상품3",
  //   },
  //   {
  //     title: "상품4",
  //   },
  //   {
  //     title: "상품5",
  //   },
  //   {
  //     title: "상품6",
  //   },
  // ];
  return (
    <div>
      {products.map((p, idx) => (
        <Link to={`/products/detail/${idx + 1}`}>
          <div>{p.title}</div>
        </Link>
      ))}
    </div>
  );
}
