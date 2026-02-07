import { createContext, useContext, useState, type ReactNode } from "react";

type Product = {
  id: string;
  description: string;
  name: string;
  price: number;
};

type CartItem = Product & {
  qty: number;
};
const CartContext = createContext<{
  cart: CartItem[];
  addToCart: (product: Product) => void;
} | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (cheesecakeProduct: Product) => {
    setCart((prev) => {
      const isCheesecakeAlreadyThere = prev.find(
        (product) => product.id === cheesecakeProduct.id,
      );
      if (isCheesecakeAlreadyThere) {
        return prev.map((product) =>
          product.id === cheesecakeProduct.id
            ? { ...product, qty: product.qty + 1 }
            : product,
        );
      }
      return [...prev, { ...cheesecakeProduct, qty: 1 }];
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
