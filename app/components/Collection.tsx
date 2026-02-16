import Card from "~/components/Card";
import { useCheesecakeItems } from "~/context/OurCheesecake";

export function Collection() {
  const { cheesecakeItem, loading, fetchError } = useCheesecakeItems();
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
              all our customers. 16 slices, from classic favorites to the works.
              Get your cheesecake today!
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 mt-12">
          {cheesecakeItem.map(
            (cake: {
              id: Key | null | undefined;
              rating: number;
              image: string;
              alt: string;
              price: number;
              name: string;
              description: string;
            }) => {
              return (
                <div
                  key={cake.id}
                  className="bg-amber-50 max-w-xl md:max-w-sm h-full rounded-2xl"
                >
                  {loading && <p>Loading...</p>}
                  {fetchError && <p>{fetchError}</p>}
                  <Card
                    key={cake.id}
                    rating={cake.rating}
                    image={cake.image}
                    alt={cake.alt}
                    price={cake.price}
                    cheeseCakeName={cake.name}
                    description={cake.description}
                    cheeseCakeItem={cake.id}
                  />
                </div>
              );
            },
          )}
        </div>

        <button className="mt-8 border p-2 w-60 rounded-xl hover:bg-[#FE7F9C]/40 cursor-pointer border-gray-400">
          View Full Menu
        </button>
      </div>
    </main>
  );
}
