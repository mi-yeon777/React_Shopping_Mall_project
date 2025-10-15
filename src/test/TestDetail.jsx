import { useParams } from "react-router-dom";
import { products } from "./productsData";

export default function TestDetail() {
  const { id } = useParams();
  const nowProduct = products[id];
  return (
    <div>
      상세 id {id}
      {/*?는 있을수도 없을수도 있는경우 사용*/}
      <div>{nowProduct?.title}</div>
      <div>{nowProduct?.price}</div>
    </div>
  );
}
