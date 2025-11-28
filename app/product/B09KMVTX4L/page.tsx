import { products } from "@/app/data/products";
import ProductClient from "@/app/components/ProductClient";

export default function B09KMVTX4L() {
  const product = products.find((p) => p.id === "B09KMVTX4L");
  return <ProductClient product={product!} />;
}
