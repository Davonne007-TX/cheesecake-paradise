import { useCart } from "~/context/CartContext";
import CheckoutForm from "./CheckoutForm";
import { useState } from "react";

export default function Order() {
  const { cart, deleteFromCart } = useCart();
  const [orderedItems, setOrderItems] = useState(cart);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      // If element doesn't exist on current page, navigate to home and scroll
      window.location.href = `/#${sectionId}`;
    }
  };

  // Total price
  const orderTotal = orderedItems
    .reduce((acc, product) => acc + product.price * product.qty, 0)
    .toFixed(2);

  return (
    <section className="flex flex-col justify-center items-center py-10">
      {orderPlaced ? (
        <div className="flex flex-col justify-center items-center gap-4 ">
          <h2 className="font-nic text-4xl md:text-5xl md:mt-4">
            Order is Confirmed!
          </h2>
          <p className="text-lg md:text-xl text-center max-w-xs md:max-w-2xl">
            Pick up location: 2318 Sully Lane, Forks, WA 90210 in 15 minutes
          </p>

          <ul className="mt-4 bg-white rounded-bl-2xl rounded-br-2xl p-2 md:p-10 shadow-lg shadow-[#FE7F9C] mx-auto">
            {orderedItems.map((item) => (
              <div
                key={item.id}
                className=" flex flex-col justify-center items-center gap-4  p-8 rounded-2xl font-dm text-md md:text-xl mx-auto"
              >
                <li className="text-xl">
                  {item.name} x {item.qty} — $
                  {(item.price * item.qty).toFixed(2)}
                </li>
                <img
                  src={item.image}
                  className="max-w-xs md:max-w-sm rounded-xl"
                />
              </div>
            ))}
            <p className="font-bold text-xl mt-4 text-center">
              Total: ${orderTotal}
            </p>
          </ul>
        </div>
      ) : cart.length === 0 ? (
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-center text-4xl md:text-5xl font-nic mt-20 md:mt-8">
            Your Cart
          </h1>

          <p className="text-lg md:text-xl mt-2 font-semibold">
            Your cheesecake cart is empty.
          </p>

          <button
            className="bg-[#FE7F9C] p-2 font-dm rounded hover:scale-105 cursor-pointer md:text-xl"
            onClick={() => scrollToSection("collection")}
          >
            View Menu
          </button>
          <img
            src="./images/drip.webp"
            className="w-full aspect-4/1 object-cover shadow-xl shadow-[#FE7F9C]/60 mt-10"
          />
        </div>
      ) : (
        <section className="w-xs md:w-3xl py-10 ">
          <h1 className="text-center text-4xl md:text-5xl font-nic mt-4 md:mt-8">
            Your Cart
          </h1>
          <ul className="mx-auto mt-8 font-dm text-md md:text-xl">
            {cart.map((cheesecake) => (
              <li
                key={cheesecake.id}
                className="flex flex-col gap-4 mb-6 bg-white p-8 rounded-2xl   "
              >
                <div className="flex justify-between">
                  <span>{cheesecake.name}</span>
                  <div className="flex gap-4">
                    <span>${cheesecake.price}</span>
                    <span>x {cheesecake.qty}</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => scrollToSection("collection")}
                    className="outline-1 p-2 rounded-lg cursor-pointer hover:scale-105"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteFromCart(cheesecake.id)}
                    className="bg-pink-100 text-red-500/90 hover:scale-105 cursor-pointer rounded-lg p-2"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex flex-col md:flex-row justify-center items-center mt-10 md:gap-10 ">
            <button className="font-bold cursor-pointer text-black text-lg md:text-2xl p-2 rounded-lg">
              Total:${orderTotal}
            </button>
            <button
              onClick={() => scrollToSection("collection")}
              className="bg-black/70 cursor-pointer  hover:scale-105 text-white p-2 rounded-lg"
            >
              Add more items
            </button>
          </div>

          <div>
            <CheckoutForm
              onOrderPlaced={() => {
                setOrderItems(cart);
                setOrderPlaced(true);
              }}
            />
          </div>
        </section>
      )}
    </section>
  );
}
