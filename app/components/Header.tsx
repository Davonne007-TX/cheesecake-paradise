import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "~/context/CartContext";
import { useState } from "react";

interface NavItem {
  id: number;
  name: string;
  sectionId: string;
}

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const { cart, deleteFromCart } = useCart();

  // Total items in cart (for badge)
  const itemCount = cart.reduce((acc, product) => acc + product.qty, 0);

  // Total price
  const total = cart
    .reduce((acc, product) => acc + product.price * product.qty, 0)
    .toFixed(2);

  const nav: NavItem[] = [
    { name: "Collection", id: 1, sectionId: "collection" },
    { name: "Our Story", id: 2, sectionId: "story" },
    { name: "Reviews", id: 3, sectionId: "reviews" },
    { name: "Contact", id: 4, sectionId: "contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        {/* Logo */}
        <div className="flex gap-4 items-center">
          <img
            src="./images/cake.png"
            alt="Velvet Goodness Logo"
            className="w-8"
          />
          <h1
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-nic text-4xl tracking-wide cursor-pointer"
          >
            Velvet
            <span className="text-[#FE7F9C]"> Goodness</span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 text-md font-medium mr-20">
          {nav.map((item) => (
            <li
              key={item.id}
              className="relative cursor-pointer text-white/80 hover:text-white transition"
              onClick={() => scrollToSection(item.sectionId)}
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#FE7F9C] transition-all duration-300 hover:w-full" />
            </li>
          ))}
        </ul>

        {/* Cart + Mobile Menu */}
        <div className="flex items-center gap-6">
          <button className="hidden md:block rounded bg-[#FE7F9C] w-24 p-2 text-sm font-semibold cursor-pointer hover:scale-105 hover:shadow-pink-500/30 active:scale-95">
            Order Now
          </button>

          {/* Cart Icon */}
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="relative text-white/80 hover:text-white transition cursor-pointer"
          >
            <ShoppingCart className="h-8 w-8" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#FE7F9C] text-[10px] flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>

          {/* Cart Dropdown */}
          {showDropdown && (
            <section
              className="absolute top-28 md:top-18 right-0 w-full md:w-99
              bg-black backdrop-blur-md  p-12 text-white border-t border-white/10
            shadow-2xl shadow-black/40 z-50 animate-in fade-in slide-in-from-top-4 duration-300"
            >
              <h2 className="font-nic text-4xl mb-4">My Cart</h2>

              {cart.length === 0 ? (
                <p className="text-xl">Your cart is empty</p>
              ) : (
                <>
                  <ul className="flex flex-col gap-8 text-white">
                    {cart.map((product) => (
                      <li
                        key={product.id}
                        className="text-xl flex flex-col mt-8"
                      >
                        <p>{product.name}</p>
                        <div className="flex justify-between gap-20">
                          <span>
                            {product.qty} × ${product.price.toFixed(2)}
                          </span>
                          <img src={product.image} className="w-40" />
                        </div>

                        <button
                          onClick={() => deleteFromCart(product.id)}
                          className="flex hover:underline font-bold mt-2 text-[#FE7F9C] text-lg cursor-pointer"
                        >
                          Remove
                        </button>
                        <div className="h-0.5 w-60 md:w-4xl mt-8 cursor-pointer bg-[#FE7F9C]/20"></div>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-10 font-bold text-xl">Total: ${total}</p>
                  <button className="rounded bg-[#FE7F9C] w-80s p-2 mt-8 text-sm font-semibold cursor-pointer hover:scale-105 hover:shadow-pink-500/30 active:scale-95">
                    Checkout
                  </button>
                </>
              )}
            </section>
          )}

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="md:hidden focus:outline-none cursor-pointer"
          >
            {mobileNavOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileNavOpen && (
        <div className="flex flex-col justify-center items-center gap-6 mt-6 p-6 bg-black/10 backdrop-blur-lg md:hidden rounded-b-lg">
          {nav.map((item) => (
            <ul key={item.id} className="font-dm font-thin">
              <li
                onClick={() => {
                  scrollToSection(item.sectionId);
                  setMobileNavOpen(false);
                }}
                className="relative cursor-pointer text-center hover:underline p-2 text-xl hover:text-[#FE7F9C] text-white/80 transition"
              >
                {item.name}
              </li>
            </ul>
          ))}
          <button className="rounded cursor-pointer bg-[#FE7F9C] font-nic text-2xl tracking-wider w-60 p-2 hover:scale-105 hover:shadow-pink-500/30 active:scale-95">
            Order Now
          </button>
        </div>
      )}
    </header>
  );
}
