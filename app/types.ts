// app/types.ts

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  prime: boolean;
  category: string;
  inStock: boolean;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  brand: string;
  seller: string;
  sellerId: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface SidebarProps {
  selectedCategory: string;
  priceRange: [number, number];
  primeOnly: boolean;
  minRating: number;
}

export interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export interface ProductDetailProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  total: number;
}
