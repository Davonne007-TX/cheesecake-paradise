import { CakeSlice } from "lucide-react";
import { useState } from "react";

type FormData = {
  fullName: string;
  address: string;
  email: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
  promo: string;
};

export default function CheckoutForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    address: "",
    email: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    promo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Order Placed:", formData);
    alert(
      "Success, order has been placed. Thank you, see you later, its cheesecake time!",
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-12 bg-black/70 rounded-3xl 
    
      mx-auto p-8 max-w-7xl"
    >
      <h1
        className="font-nic text-5xl text-white 
         flex gap-4 items-center justify-center "
      >
        <CakeSlice width={30} height={30} />
        Checkout
        <CakeSlice width={30} height={30} />
      </h1>
      <p className="text-white max-w-sm text-center p-2 mx-auto">
        {" "}
        And every order comes with a side of apple pie and ice cream on us.
      </p>

      <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-between mt-8">
        <div className="flex flex-col gap-8 font-dm w-full md:w-1/2">
          <input
            type="text"
            required
            onChange={handleChange}
            placeholder="Full Name"
            className="border-3 border-[#FE7F9C] p-2 bg-white rounded-sm outline-none"
          />
          <input
            required
            onChange={handleChange}
            type="address"
            placeholder="Address"
            className="border-3 border-[#FE7F9C] p-2 bg-white rounded-sm outline-none"
          />

          <input
            type="email"
            required
            onChange={handleChange}
            placeholder="E-mail Address"
            className="border-3 border-[#FE7F9C] p-2 bg-white rounded-sm outline-none"
          />

          <input
            required
            onChange={handleChange}
            type="text"
            placeholder="Credit Card Number"
            className="border-3 border-[#FE7F9C] p-2 bg-white rounded-sm outline-none"
          />
          <div className="flex gap-4">
            <input
              required
              onChange={handleChange}
              type="text"
              placeholder="expir"
              className="border-3 border-[#FE7F9C] p-2 bg-white rounded-sm outline-none w-20"
            />

            <input
              required
              onChange={handleChange}
              type="text"
              placeholder="cvv"
              className="border-3 border-[#FE7F9C] p-2 bg-white rounded-sm outline-none w-20"
            />
          </div>

          <input
            onChange={handleChange}
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
            className="w-80 md:w-md rounded-2xl"
            alt="Apple Pie"
          />
        </div>
      </div>
    </form>
  );
}
