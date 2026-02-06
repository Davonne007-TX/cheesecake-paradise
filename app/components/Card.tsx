interface CardProps {
  image: string;
  alt: string;
  rating: number;
  cheeseCakeName: string;
  price: string | number;
  description: string;
}

export default function Card({
  image,
  cheeseCakeName,
  price,
  alt,
  rating,
  description,
}: CardProps) {
  return (
    <>
      <section className="flex gap-6 items-start">
        <div className="flex flex-col gap-4">
          <img src={image} alt={alt} loading="lazy" className="md:max-w-sm" />

          <div className="p-4 flex flex-col gap-4">
            <p className="md:text-sm font-bold">⭐ {rating}</p>
            <div className="flex justify-between items-center gap-40">
              <h3 className="font-dm text-2xl md:text-xl">{cheeseCakeName}</h3>
              <p className="font-bold text-[#FE7F9C]">{price}</p>
            </div>
            <p>{description}</p>
            <button className="bg-[#FE7F9C] font-bold p-4 text-white rounded leading-2">
              + Add to Cart
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
