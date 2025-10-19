import { useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "@/data/productsData";

export default function ProductDetail() {
  const { id } = useParams();
  const [size, setSize] = useState(null);
  const [count, setCount] = useState(1);

  const nowProduct = products[1];
  const { title, price, priceBefore, saleRate, sizes } = nowProduct;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">상품제목 : {title}</h1>
      <div>
        가격 :
        {saleRate ? (
          <div>
            <span className="text-red-500">[{saleRate}% 할인가]</span>
            {price} /{" "}
            <span className="text-gray-400 line-through">
              정가 {priceBefore}
            </span>
          </div>
        ) : (
          <div>정가 price</div>
        )}
      </div>
      <div>Size {size}</div>
      <div className="flex space-x-4">
        {sizes.map((s) => (
          <div
            onClick={() => setSize(225)} //나중에 map(s)에 맞춰 225를 s로
            key={s}
            className="border border-black px-2 py-1"
          >
            {s}
          </div>
        ))}
      </div>
      <div>count {count}</div>
      <div className="flex border border-black w-fit">
        <div className="border border-black px-2 py-1">-</div>
        <div className="w-[100px] text-center">{count}</div>
        <div className="border border-black px-2 py-1">+</div>
      </div>
    </div>
  );
}
