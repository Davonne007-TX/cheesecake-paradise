import { CakeSlice } from "lucide-react";
import { useCheesecakeItems } from "~/context/OurCheesecake";
import { useCart } from "~/context/CartContext";

export default function CheckoutPage() {
  const { cheesecakeItem } = useCheesecakeItems();
  const { cart, deleteFromCart, clearCart } = useCart();
  return (
    <section className="mt-20 mx-auto">
      <h1 className="text-center text-4xl font-nic mt-30">Your Order</h1>
      <ul>
        {cart.map((items) => (
          <li className="text-black">{items.name}</li>
        ))}
      </ul>
      <form className="flex flex-col justify-center mt-40 items-center gap-4 bg-black/70 rounded-3xl max-w-xs md:max-w-lg lg:max-w-4xl mx-auto p-8 md:p-8">
        <h1 className="font-nic text-5xl text-white">
          <div className="flex gap-4 items-center">
            <CakeSlice width={30} height={30} />
            Checkout
            <CakeSlice width={30} height={30} />
          </div>
        </h1>
        <div className="flex flex-col gap-8 mt-4 font-dm">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="border-3 border-[#FE7F9C] p-2 bg-white w-60 md:w-96 rounded-sm outline-none"
          />

          <input
            type="email"
            placeholder="E-mail Address"
            className="border-3 border-[#FE7F9C] p-2 bg-white outline-none rounded-sm"
          />
          <input
            type="text"
            placeholder="Credit Card Number"
            className="border-3 border-[#FE7F9C] p-2 bg-white rounded-sm outline-none"
          />
          <input
            type="text"
            placeholder="PROMO CODE"
            className="border-3 border-[#FE7F9C] p-2 bg-white rounded-sm outline-none"
          />
          <button className="bg-[#FE7F9C] hover:scale-105 p-2 rounded-full text-2xl font-nic cursor-pointer">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
