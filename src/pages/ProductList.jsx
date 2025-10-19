import { useParams } from "react-router-dom";
import { products } from "@/data/productsData";
import ProductCard from "@/components/ProductCard";

export default function ProductList() {
  const { category: nowCategory } = useParams();

  let filteredProducts = nowCategory
    ? products.filter((p) => p.category === nowCategory)
    : products;

  if (nowCategory === "new") {
    filteredProducts = products.filter((p) => p.isNew);
  }
  if (nowCategory === "best") {
    filteredProducts = products.filter((p) => p.isBest);
  }

  return (
    <>
      <h1 className="text-2xl font-bold">ProductList {nowCategory}</h1>
      <div className="grid grid-cols-4 gap-4 my-8">
        {filteredProducts.map((p, idx) => (
          <ProductCard key={`product-${idx}`} idx={idx} product={p} />
        ))}
      </div>
    </>
  );
}
