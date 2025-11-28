import { products } from "@/app/data/products";
import ProductClient from "@/app/components/ProductClient";

export default function B07YNK87DD() {
  const product = products.find((p) => p.id === "B07YNK87DD");
  return <ProductClient product={product!} />;
}
