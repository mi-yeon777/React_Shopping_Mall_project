import ProductCard from "@/components/ProductCard";

export default function ProductList() {
  const products = [
    {
      title: "제목1",
      price: 12345,
      reviewCnt: 101,
      reviewScore: 3.4,
    },
    {
      title: "제목2",
      price: 12345,
      reviewCnt: 101,
      reviewScore: 3.4,
    },
  ];
  return (
    <div className="mx-auto w-full max-w-[1200px] px-4">
      <div className="py-8 grid grid-cols-5 gap-8">
        <div>
          <div className="font-bold text-3xl mb-2">신상품</div>
          <div className="font-bold text-xl mb-8 text-gray-500">
            275 Results
          </div>
          <div className="border-t py-4">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-sm font-semibold">사이즈</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div className="border rounded text-center py-2 font-semibold text-xs text-gray-600 border-gray-300">
                230
              </div>
              <div className="border rounded text-center py-2 font-semibold text-xs text-gray-600 border-gray-300">
                235
              </div>
              <div className="border rounded text-center py-2 font-semibold text-xs text-gray-600 border-gray-300">
                240
              </div>
              <div className="border rounded text-center py-2 font-semibold text-xs bg-[#0063ba] text-white">
                245
              </div>
              <div className="border rounded text-center py-2 font-semibold text-xs text-gray-600 border-gray-300">
                230
              </div>
              <div className="border rounded text-center py-2 font-semibold text-xs text-gray-600 border-gray-300">
                235
              </div>
              <div className="border rounded text-center py-2 font-semibold text-xs text-gray-600 border-gray-300">
                240
              </div>
              <div className="border rounded text-center py-2 font-semibold text-xs text-gray-600 border-gray-300">
                245
              </div>
              <div className="border rounded text-center py-2 font-semibold text-xs text-gray-600 border-gray-300">
                230
              </div>
              <div className="border rounded text-center py-2 font-semibold text-xs text-gray-600 border-gray-300">
                235
              </div>
              <div className="border rounded text-center py-2 font-semibold text-xs text-gray-600 border-gray-300">
                240
              </div>
              <div className="border rounded text-center py-2 font-semibold text-xs text-gray-600 border-gray-300">
                245
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="flex h-[100px] justify-end items-center space-x-8">
            <div>상품명순</div>
            <div className="flex items-center space-x-2">
              <span>필터닫기</span>
              <button
                type="button"
                className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 bg-[#0063ba]"
              >
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 translate-x-6"></span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <div className="flex justify-center mt-16">
            <div className="flex items-center space-x-4 w-fit px-10 py-3 rounded hover:text-[#203864] hover:border-[#203864] text-[#3382c8] border-2 border-[#3382c8] cursor-pointer">
              <div className="font-bold">LOAD MORE</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
