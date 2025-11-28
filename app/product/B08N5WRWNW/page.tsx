import { products } from "@/app/data/products";
import ProductClient from "@/app/components/ProductClient";

export default function B08N5WRWNW() {
  const product = products.find((p) => p.id === "B08N5WRWNW");
  return <ProductClient product={product!} />;
}
