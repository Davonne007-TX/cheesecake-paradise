import { useCart } from "~/context/CartContext";

export default function Order() {
  const { cart } = useCart();

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
    <section className="flex flex-col justify-center items-center mt-28 ">
      <h1 className="text-center text-4xl md:text-5xl font-nic mt-10">
        Your Cart
      </h1>
      <p className="font-thin text-md md:text-2xl mt-4 text-center max-w-xs md:max-w-2xl">
        Every order comes with a side of apple pie and ice cream on us.
      </p>
      {cart.length === 0 ? (
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="font-dm text-lg md:text-2xl mt-8">
            Your cheesecake cart is empty.
          </p>
          <button
            className="bg-[#FE7F9C] p-2 font-dm rounded hover:scale-105 cursor-pointer text-xl"
            onClick={() => scrollToSection("collection")}
          >
            View Menu
          </button>
        </div>
      ) : (
        <ul className="mt-8 ">
          {cart.map((cheesecake) => (
            <div className="flex flex-col items-center justify-center mt-20 gap-8 font-dm text-lg md:text-2xl">
              <div className="flex justify-between gap-20 md:gap-60">
                <li key={cheesecake.id}>{cheesecake.name}</li>
                <div className="flex gap-4">
                  {" "}
                  <li>${cheesecake.price}</li>
                  <li>* {cheesecake.qty}</li>
                </div>
              </div>
              <div className="h-0.5 w-80 md:w-4xl mt-8 cursor-pointer bg-[#FE7F9C]/20 mx-auto"></div>
            </div>
          ))}
        </ul>
      )}
    </section>
  );
}
