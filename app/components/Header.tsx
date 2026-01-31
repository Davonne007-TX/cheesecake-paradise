import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const nav = [
    { name: "Collection", id: 1 },
    { name: "Our Story", id: 2 },
    { name: "Contact", id: 3 },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <div className="flex gap-4 items-center">
          <img src="./images/cake.png" className="w-8" />
          <h1 className="font-nic text-4xl tracking-wide">
            Velvet
            <span className="text-[#FE7F9C]"> Goodness</span>
          </h1>
        </div>

        {/* Desktop */}
        <ul className="hidden md:flex gap-10 text-md font-medium mr-20">
          {nav.map((item) => (
            <li
              key={item.id}
              className="relative cursor-pointer text-white/80 hover:text-white transition"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#FE7F9C] transition-all duration-300 hover:w-full" />
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          <button className="relative text-white/80 hover:text-white transition">
            <ShoppingCart className="h-8 w-8" />

            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#FE7F9C] text-[10px] flex items-center justify-center">
              2
            </span>
          </button>

          <button className="hidden md:block rounded bg-[#FE7F9C] w-24 p-2 text-sm font-semibold cursor-progress  hover:scale-105 hover:shadow-pink-500/30 active:scale-95">
            Order Now
          </button>

          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="md:hidden focus:outline-none cursor-pointer"
          >
            {mobileNavOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}

      {mobileNavOpen && (
        <div>
          {nav.map((item) => (
            <li
              key={item.id}
              onClick={() => setMobileNavOpen(false)}
              className="relative cursor-pointer text-white/80 hover:text-white transition"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#FE7F9C] transition-all duration-300 hover:w-full" />
            </li>
          ))}
          <button className="rounded bg-[#FE7F9C] w-40 p-2 text-sm font-semibold hover:scale-105 hover:shadow-pink-500/30 active:scale-95">
            Order Now
          </button>
        </div>
      )}
    </header>
  );
}
