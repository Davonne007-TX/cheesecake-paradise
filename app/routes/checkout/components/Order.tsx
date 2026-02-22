import { useCart } from "~/context/CartContext";
import CheckoutForm from "./CheckoutForm";
import PickUpLocation from "./PickUpLocation";

export default function Order() {
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
  return (
    <section className="flex flex-col justify-center items-center ">
      <h1 className="text-center text-4xl md:text-5xl font-nic mt-10">
        Your Cart
      </h1>
      <p className="font-thin text-md mx-auto md:text-2xl mt-4 text-center max-w-xs md:max-w-lg">
        And every order comes with a side of apple pie and ice cream on us.
      </p>
      {cart.length === 0 ? (
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-lg md:text-xl mt-8 font-semibold">
            Your cheesecake cart is empty.
          </p>

          <button
            className="bg-[#FE7F9C] p-2 font-dm rounded  hover:scale-105 cursor-pointer md:text-xl"
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
        <section>
          <ul>
            {cart.map((cheesecake) => (
              <div className="flex flex-col bg-white w-full p-4 rounded-2xl mt-8 gap-8 font-dm text-lg md:text-2xl">
                <div className="flex justify-between gap-20 md:gap-60">
                  <li key={cheesecake.id}>{cheesecake.name}</li>
                  <div className="flex gap-4">
                    {" "}
                    <li>${cheesecake.price}</li>
                    <li>x {cheesecake.qty}</li>
                  </div>
                </div>

                <div className="flex  gap-4">
                  <button
                    onClick={() => scrollToSection("collection")}
                    className="outline-1 p-2 rounded-lg cursor-pointer hover:scale-105"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteFromCart(cheesecake.id)}
                    className="bg-pink-100 text-red-500/90  hover:scale-105 cursor-pointer rounded-lg p-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </ul>

          <div className="flex flex-col justify-center items-center mt-8">
            <button
              onClick={() => scrollToSection("collection")}
              className="mt-8 bg-black/70 cursor-pointer hover:scale-105 text-white p-2 rounded-lg"
            >
              Add more items
            </button>
          </div>

          <CheckoutForm />
        </section>
      )}
    </section>
  );
}
