import { motion } from "motion/react";
import { useCart } from "~/context/CartContext";

interface CardProps {
  image: string;
  alt: string;
  rating: number;
  cheeseCakeName: string;
  price: string | number;
  description: string;
  cheeseCakeItem: string | number;
}

export default function Card({
  image,
  cheeseCakeName,
  price,
  alt,
  rating,
  cheeseCakeItem,
  description,
}: CardProps) {
  const { addToCart } = useCart();

  const product = {
    id: String(cheeseCakeItem),
    name: cheeseCakeName,
    price: Number(price),
    description: description,
    image: image,
    qty: 1,
  };

  return (
    <section className="flex gap-6 items-start">
      <div className="flex flex-col gap-4">
        <img src={image} alt={alt} loading="lazy" className="md:max-w-sm" />

        <div className="p-4 flex flex-col gap-4">
          <p className="md:text-md font-bold">⭐ {rating}</p>
          <div className="flex justify-between items-center gap-40">
            <h3 className="font-dm text-2xl md:text-xl">{cheeseCakeName}</h3>
            <p className="font-bold text-[#FE7F9C]">${price}</p>
          </div>
          <p>{description}</p>
          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            onClick={() => {
              console.log("Added to cart:", product);
              addToCart(product);
            }}
            className="bg-[#FE7F9C] w-full md:mx-auto  cursor-pointer font-bold p-4 text-white rounded leading-2"
          >
            + Add to Cart
          </motion.div>
        </div>
      </div>
    </section>
  );
}
