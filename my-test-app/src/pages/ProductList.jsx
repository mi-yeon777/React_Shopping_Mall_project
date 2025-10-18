import { Link } from "react-router-dom";
export default function ProductList() {
  const products = [
    {
      title: "상품1",
    },
    {
      title: "상품2",
    },
    {
      title: "상품3",
    },
    {
      title: "상품4",
    },
    {
      title: "상품5",
    },
    {
      title: "상품6",
    },
  ];
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
