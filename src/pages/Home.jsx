// import ProductCard from "@/components/ProductCard";
// import Container from "@/components/Container";
// import ReviewCard from "@/components/ReviewCard";

// export default function Home() {
//   return (
//     <div>
//       <div className="h-[300px] w-full bg-stone-200"></div>
//       <Container>
//         <div className="pt-16 pb-8 font-extrabold text-4xl text-center">
//           WEEKLY BEST
//         </div>
//         <div className="flex font-extrabold text-xl pb-16 space-x-16 justify-center">
//           <div>WOMEN</div>
//           <div className="text-gray-300">MEN</div>
//           <div className="text-gray-300">KIDS</div>
//         </div>
//         <div className="grid grid-cols-5 gap-8">
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//         </div>
//         <div className="pt-16 pb-8 font-extrabold text-4xl text-center">
//           NEW ARRIVAL
//         </div>
//         <div className="flex font-extrabold text-xl pb-16 space-x-16 justify-center">
//           <div>WOMEN</div>
//           <div className="text-gray-300">MEN</div>
//           <div className="text-gray-300">KIDS</div>
//         </div>
//         <div className="grid grid-cols-5 gap-8">
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//         </div>
//       </Container>
//     </div>
//   );
// }

//ProductList.jsx 정보 넣음
import ProductCard from "@/components/ProductCard";
import Container from "@/components/Container";
import ReviewCard from "@/components/ReviewCard";

export default function Home() {
  // 💡 1. 임시 상품(mock) 데이터 추가
  const weeklyBest = [
    {
      id: 1,
      title: "고런 맥스쿠셔닝 아치핏 (와이드 슬립인스)",
      price: 159000,
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
      reviewScore: 3.2,
      reviewCount: 1,
      isNew: true,
      img: "https://cdn.skecherskorea.co.kr/pro_img/SP3WJCFF011_1.jpg?v=250904",
    },
    {
      id: 4,
      title: "신발4",
      price: 129000,
      reviewScore: 4.1,
      reviewCount: 22,
      img: "https://cdn.skecherskorea.co.kr/pro_img/SP3WJCFF011_1.jpg?v=250904",
    },
    {
      id: 5,
      title: "신발5",
      price: 89000,
      reviewScore: 4.8,
      reviewCount: 88,
      isBest: true,
      img: "https://cdn.skecherskorea.co.kr/pro_img/SP3WJCFF011_1.jpg?v=250904",
    },
  ];

  const newArrivals = [
    {
      id: 6,
      title: "신상품1",
      price: 99000,
      reviewScore: 5,
      reviewCount: 42,
      isNew: true,
      img: "https://cdn.skecherskorea.co.kr/pro_img/SL0WPCFY052_1.jpg?v=250904",
    },
    {
      id: 7,
      title: "신상품2",
      price: 89000,
      reviewScore: 4.5,
      reviewCount: 10,
      img: "https://cdn.skecherskorea.co.kr/pro_img/SL0WPCFY052_6.jpg?v=250904",
    },
    {
      id: 8,
      title: "신상품3",
      price: 79000,
      reviewScore: 4.2,
      reviewCount: 17,
      img: "https://cdn.skecherskorea.co.kr/pro_img/SL0WPCFY051_1.jpg?v=250904",
    },
    {
      id: 9,
      title: "신상품4",
      price: 149000,
      reviewScore: 4.7,
      reviewCount: 63,
      isBest: true,
      img: "https://cdn.skecherskorea.co.kr/pro_img/SL0WPCFY052_1.jpg?v=250904",
    },
    {
      id: 10,
      title: "신상품5",
      price: 139000,
      reviewScore: 3.9,
      reviewCount: 8,
      img: "https://cdn.skecherskorea.co.kr/pro_img/SL0WPCFY052_6.jpg?v=250904",
    },
  ];

  // 💡 2. 렌더링
  return (
    <div>
      {/* Hero Banner */}
      <div className="h-[300px] w-full bg-stone-200"></div>

      <Container>
        {/* WEEKLY BEST 섹션 */}
        <div className="pt-16 pb-8 font-extrabold text-4xl text-center">
          WEEKLY BEST
        </div>
        <div className="flex font-extrabold text-xl pb-16 space-x-16 justify-center">
          <div>WOMEN</div>
          <div className="text-gray-300">MEN</div>
          <div className="text-gray-300">KIDS</div>
        </div>
        <div className="grid grid-cols-5 gap-8">
          {weeklyBest.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* NEW ARRIVAL 섹션 */}
        <div className="pt-16 pb-8 font-extrabold text-4xl text-center">
          NEW ARRIVAL
        </div>
        <div className="flex font-extrabold text-xl pb-16 space-x-16 justify-center">
          <div>WOMEN</div>
          <div className="text-gray-300">MEN</div>
          <div className="text-gray-300">KIDS</div>
        </div>
        <div className="grid grid-cols-5 gap-8">
          {newArrivals.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </Container>
    </div>
  );
}
