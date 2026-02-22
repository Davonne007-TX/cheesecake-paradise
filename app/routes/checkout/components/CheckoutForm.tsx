import { CakeSlice } from "lucide-react";

export default function CheckoutForm() {
  return (
    <form
      className="mt-10 bg-black/70 rounded-3xl 
      max-w-xs md:max-w-5xl lg:max-w-7xl 
      mx-auto p-10"
    >
      <h1
        className="font-nic text-5xl text-white 
         flex gap-4 items-center justify-center mb-10"
      >
        <CakeSlice width={30} height={30} />
        Checkout
        <CakeSlice width={30} height={30} />
      </h1>

      <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-between">
        <div className="flex flex-col gap-8 font-dm w-full md:w-1/2">
          <input
            type="text"
            placeholder="Full Name"
            className="border-3 border-[#FE7F9C] p-2 bg-white rounded-sm outline-none"
          />
          <input
            type="address"
            placeholder="Address"
            className="border-3 border-[#FE7F9C] p-2 bg-white rounded-sm outline-none"
          />

          <input
            type="email"
            placeholder="E-mail Address"
            className="border-3 border-[#FE7F9C] p-2 bg-white rounded-sm outline-none"
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

          <button className="bg-[#FE7F9C] hover:scale-105 p-2 rounded text-2xl font-nic cursor-pointer">
            Submit
          </button>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/images/applePie.webp"
            className="w-60 md:w-96 rounded-2xl"
            alt="Apple Pie"
          />
        </div>
      </div>
    </form>
  );
}
