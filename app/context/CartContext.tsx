import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Product = {
  id: string;
  description: string;
  name: string;
  price: number;
  image: string;
  qty: number;
};

type CartItem = Product & {
  qty: number;
  image: string;
};
const CartContext = createContext<{
  cart: CartItem[];
  mounted: boolean;
  addToCart: (product: Product) => void;
  deleteFromCart: (id: string) => void;
  clearCart: () => void;
} | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") return [];
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  //local storage
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, mounted]);
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

  const deleteFromCart = (id: string) => {
    setCart((prev) =>
      prev.filter((cheesecakeProduct) => cheesecakeProduct.id !== id),
    );
  };

  const clearCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider
      value={{ mounted, cart, addToCart, deleteFromCart, clearCart }}
    >
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
