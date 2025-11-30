import { products } from "@/app/data/products";
import ProductClient from "@/app/components/ProductClient";
import { use } from "react";

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const pid = use(params).id;
  const product = products.find((p) => p.id === pid);

  if (!product) return <div>Product not found</div>;

  return <ProductClient product={product} />;
}
