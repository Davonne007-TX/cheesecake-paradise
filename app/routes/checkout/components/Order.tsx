import { useCart } from "~/context/CartContext";
import CheckoutForm from "./CheckoutForm";
import { useState } from "react";
import PickUpLocation from "./PickUpLocation";

export default function Order() {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const { cart, deleteFromCart } = useCart();

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
  const total = cart
    .reduce((acc, product) => acc + product.price * product.qty, 0)
    .toFixed(2);
  return (
    <section className="flex flex-col justify-center items-center w-full ">
      {orderPlaced ? (
        <PickUpLocation />
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
        <>
          <h1 className="text-center text-4xl md:text-5xl font-nic md:mt-8">
            Your Cart
          </h1>
          <section className="flex flex-col md:flex-row gap-20 my-10">
            <ul className=" mx-auto  w-80 md:w-110 h-full flex flex-col gap-8 mt-8 font-dm text-md md:text-xl max-w-4xl">
              {cart.map((cheesecake) => (
                <div
                  key={cheesecake.id}
                  className="flex flex-col gap-4 w-full bg-white p-6 md:p-4 rounded-2xl "
                >
                  <div className="flex flex-col md:flex-row gap-4">
                    <img src={cheesecake.image} className="w-40 md:w-30" />
                    <span>{cheesecake.name}</span>
                    <div className="flex gap-4">
                      <span>${cheesecake.price} each</span>
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
                </div>
              ))}
              <button
                onClick={() => scrollToSection("collection")}
                className="bg-black/70 cursor-pointer w-60 mx-auto  hover:scale-105 text-white p-2 rounded-lg"
              >
                Add more items
              </button>
            </ul>

            <div className="flex flex-col gap-4 md:mt-4">
              <button className="font-bold cursor-pointer text-black text-lg md:text-xl p-2 rounded-lg">
                Total:${total}
              </button>

              <CheckoutForm onOrderPlaced={() => setOrderPlaced(true)} />
            </div>
          </section>
        </>
      )}
    </section>
  );
}
