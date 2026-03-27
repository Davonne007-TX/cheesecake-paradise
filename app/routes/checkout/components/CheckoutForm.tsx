import { CakeSlice } from "lucide-react";
import { useState } from "react";

import { useCart } from "~/context/CartContext";

type FormData = {
  fullName: string;
  address: string;
  email: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
  promo: string;
};
interface CheckoutFormProps {
  onOrderPlaced: () => void;
}

export default function CheckoutForm({ onOrderPlaced }: CheckoutFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    address: "",
    email: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    promo: "",
  });

  const { clearCart } = useCart();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const cheesecakeOrderSent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    clearCart();
    onOrderPlaced();
  };
  return (
    <section className=" max-w-2xs">
      <form
        onSubmit={cheesecakeOrderSent}
        className="bg-black/70 p-6 max-w-md  px-8 rounded-2xl"
      >
        <h1
          className="font-nic text-4xl text-white 
         flex gap-4 items-center justify-center "
        >
          <CakeSlice width={30} height={30} />
          Checkout
          <CakeSlice width={30} height={30} />
        </h1>

        <section className="mt-4 font-serif">
          <div className="flex flex-col gap-8">
            <input
              type="text"
              name="fullName"
              required
              onChange={handleChange}
              placeholder="Full Name"
              className="p-2 bg-white outline-none rounded-sm w-full"
            />

            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              placeholder="E-mail Address"
              className="p-2 bg-white outline-none rounded-sm w-full"
            />

            <input
              required
              name="cardNumber"
              onChange={handleChange}
              type="text"
              placeholder="Credit Card Number"
              className="p-2 bg-white outline-none rounded-sm w-full"
            />
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <input
                  required
                  name="expiry"
                  onChange={handleChange}
                  type="text"
                  placeholder="expir"
                  className="p-2 bg-white outline-none rounded-sm w-full"
                />

                <input
                  required
                  name="cvv"
                  onChange={handleChange}
                  type="text"
                  placeholder="cvv"
                  className="p-2 bg-white outline-none rounded-sm w-full"
                />
              </div>
              <input
                onChange={handleChange}
                type="text"
                name="promo"
                placeholder="PROMO CODE"
                className="p-2 bg-white outline-none w-full rounded"
              />
            </div>

            <button className="p-2 outline-none rounded-md bg-[#FE7F9C] font-dm text-lg cursor-pointer transition duration-300 hover:scale-105">
              Submit
            </button>
          </div>
        </section>
      </form>
    </section>
  );
}
