import Card from "~/components/Card";
import Header from "~/components/Header";
import Hero from "~/components/Hero";

const cheeseCake = [
  {
    id: 1,
    name: "Classic Cherry",
    price: 20,
    description:
      "A rich and creamy cheesecake with a smooth vanilla filling topped with a sweet layer of cherries on a graham cracker crust.",
    rating: 4.9,
    image: "/images/cherry.jpg",
  },
  {
    id: 2,
    name: "Classic Favorite",
    price: 30,
    description:
      "Your classic favorite cheesecake. A rich, smooth, velvety texture on a buttery graham cracker crust.",
    rating: 5.0,
    image: "/images/classic.jpg",
  },
  {
    id: 3,
    name: "Berry Delight",
    price: 32,
    description:
      "Flavor in every bite with our blueberry topped cheesecake. Smooth, elegant, delicious on a graham cracker crust.",
    rating: 4.8,
    image: "/images/blueberry.jpg",
  },
];

export function Welcome() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10">
        <span className="text-[30vw] font-dm font-bold tracking-tight text-black/5 select-none">
          Cake
        </span>
      </div>

      <div className="flex flex-col gap-2 justify-center items-center mt-40">
        <p className="text-[#FE7F9C] text-lg font-serif text-center">
          OUR COLLECTION
        </p>

        <div className="max-w-2xl">
          <div className="flex flex-col gap-4 justify-center items-center">
            <h2 className="text-5xl font-nic mx-auto">Signature cheesecakes</h2>
            <p className="text-gray-500 text-center text-lg mx-auto">
              From our family to yours. Our cheesecake is made to perfection for
              all our customers. From classic favorites to the works. Get your
              cheesecake today!
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 mt-8">
          {cheeseCake.map((cake) => (
            <div
              key={cake.id}
              className="bg-amber-50 max-w-xl md:max-w-sm h-full rounded-2xl"
            >
              <Card
                rating={cake.rating}
                image={cake.image}
                price={`$${cake.price.toFixed(2)}`}
                cheeseCakeName={cake.name}
                description={cake.description}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
