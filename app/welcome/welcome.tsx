import Card from "~/components/Card";

const cheeseCake = [
  {
    id: 1,
    name: "Classic Cherry",
    price: 20,
    description:
      "A rich and creamy cheesecake with a smooth vanilla filling topped with a sweet layer of cherries on a graham cracker crust.",
    rating: 4.9,
    image: "/images/cherry.webp",
    alt: "Cherry Classic Cheesecake, image by Kalisha Ocheni on Unsplash",
  },
  {
    id: 2,
    name: "NY Style",
    price: 30,
    description:
      "Your classic favorite cheesecake. A rich, smooth, velvety texture on a buttery graham cracker crust.",
    rating: 5.0,
    image: "/images/classic.webp",
    alt: "Classic New York Style Cheesecake, image by Tina Guina on Unsplash",
  },
  {
    id: 3,
    name: "Berry Delight",
    price: 32,
    description:
      "Flavor in every bite with our blueberry topped cheesecake. Smooth, elegant, delicious on a graham cracker crust.",
    rating: 4.8,
    image: "/images/blueberry.webp",
    alt: "Blueberry Classic Cheesecake, image by Mink Mingle on Unsplash",
  },
];

export function Welcome() {
  return (
    <main
      id="collection"
      className="flex flex-col min-h-screen items-center justify-center relative overflow-hidden scroll-mt-40"
    >
      <div className="flex flex-col gap-2 justify-center items-center md:mt-20">
        <p className="text-[#FE7F9C] text-lg font-serif text-center">
          OUR COLLECTION
        </p>

        <div className="max-w-2xl">
          <div className="flex flex-col gap-4 justify-center items-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-center font-nic mx-auto">
              Signature cheesecakes
            </h2>
            <p className="text-gray-500 text-center text-lg mx-auto max-w-xs">
              From our family to yours. Our cheesecake is made to perfection for
              all our customers. From classic favorites to the works. Get your
              cheesecake today!
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 mt-12">
          {cheeseCake.map((cake) => (
            <div
              key={cake.id}
              className="bg-amber-50 max-w-xl md:max-w-sm h-full rounded-2xl"
            >
              <Card
                rating={cake.rating}
                image={cake.image}
                alt={cake.alt}
                price={`$${cake.price.toFixed(2)}`}
                cheeseCakeName={cake.name}
                description={cake.description}
              />
            </div>
          ))}
        </div>

        <button className="mt-8 border p-2 w-60 rounded-xl hover:bg-[#FE7F9C]/40 cursor-pointer border-gray-400">
          View Full Menu
        </button>
      </div>
    </main>
  );
}
