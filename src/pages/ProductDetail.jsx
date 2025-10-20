import { useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "@/data/productsData";
import clsx from "clsx";

export default function ProductDetail() {
  //const { id } = useParams();
  const { id: nowId } = useParams(); //2.id: 추가 URL에서 가져온 id 값을 nowId라는 변수에 저장
  const [size, setSize] = useState(null);
  const [count, setCount] = useState(1);

  // const nowProduct = products[1];
  // const { title, price, priceBefore, saleRate, sizes } = nowProduct;
  const nowProduct = products.find((p) => p.id == nowId);
  const { title, price, saleRate, priceBefore, sizes, disabledSizes } =
    nowProduct || {}; // 2. 추가 수정

  const handleSeleteSize = (s) => {
    console.log("handleSeleteSize", s);

    if (!disabledSizes?.includes(s)) setSize(s);
  };
  const handleCountMinus = () => {
    console.log("CountMinus");
    setCount(count > 1 ? count - 1 : 1);
  };

  const handleCountPlus = () => {
    console.log("CountPlus");
    setCount(count + 1);
  };

  const handleCart = () => {
    console.log("handleCart");
    console.log("id", nowId); //id는 정의되지 않은 변수이므로 nowId로 바꿔줌.
    //id: (nowId)는 고유 식별번호
    //productList에서 ProductCard와 연결되어, 맵함수에서 jsx로 변환후 리엑트로 렌더링
    console.log("count", count);
    console.log("size", size);

    if (!size) {
      alert("사이즈를 선택해주세요.");
    }

    if (count < 1) {
      alert("최소 수량은 1이상이어야 합니다.");
    }

    alert("장바구니에 담겼습니다.");
  };

  //2. 리턴부 수정 추가
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">
        #{nowId} 상품제목 : {title}
      </h1>
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
          <div>정가 {price}</div>
        )}
      </div>
      <div>Size {size}</div>
      <div className="flex space-x-4">
        품절 사이즈 {JSON.stringify(disabledSizes)}
        {sizes?.map((s) => (
          <div
            onClick={() => handleSeleteSize(s)}
            key={s}
            className={clsx("border border-black px-2 py-1", {
              "bg-blue-500 text-white ": s === size,
              "bg-gray-200 text-gray-400":
                disabledSizes && disabledSizes.includes(s),
            })}
          >
            {s}
          </div>
        ))}
      </div>
      <div>count {count}</div>
      <div className="flex border border-black w-fit">
        <div
          className={`border px-2 py-1 ${count === 1 ? "text-gray-400" : ""}`}
          onClick={handleCountMinus}
        >
          -
        </div>
        <div className="w-[100px] text-center">{count}</div>
        <div className="border px-2 py-1" onClick={handleCountPlus}>
          +
        </div>
      </div>
      <div onClick={handleCart} className="border border-black px-2 py-1 w-fit">
        장바구니에 넣기
      </div>
    </div>
  );
}

//   return (
//     <div className="space-y-4">
//       <h1 className="text-2xl font-bold">상품제목 : {title}</h1>
//       <div>
//         가격 :
//         {saleRate ? (
//           <div>
//             <span className="text-red-500">[{saleRate}% 할인가]</span>
//             {price} /{" "}
//             <span className="text-gray-400 line-through">
//               정가 {priceBefore}
//             </span>
//           </div>
//         ) : (
//           <div>정가 price</div>
//         )}
//       </div>
//       <div>Size {size}</div>
//       <div className="flex space-x-4">
//         {sizes.map((s) => (
//           <div
//             onClick={() => setSize(225)} //2. map(s)에 225를 s로
//             key={s}
//             className="border border-black px-2 py-1"
//           >
//             {s}
//           </div>
//         ))}
//       </div>
//       <div>count {count}</div>
//       <div className="flex border border-black w-fit">
//         <div className="border border-black px-2 py-1">-</div>
//         <div className="w-[100px] text-center">{count}</div>
//         <div className="border border-black px-2 py-1">+</div>
//       </div>
//     </div>
//   );
// }
