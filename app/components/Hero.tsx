import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="mt-28 text-center flex flex-col gap-4">
      <div className="relative mx-auto w-72 h-72">
        <div className="absolute top-4 right-4 bg-white px-3 py-1 font-semibold rounded-full flex items-center gap-2 shadow">
          <Star size={18} fill="#FE7F9C" stroke="none" />
          <span>5.0</span>
        </div>

        <div className="absolute bottom-4 -left-4 bg-[#FE7F9C] px-4 py-1 font-semibold rounded-full text-white shadow">
          From $20
        </div>
        <img
          src="./images/classic.jpeg"
          className="w-full h-full rounded-full border-4 border-white object-cover"
        />
      </div>
      <p className="text-gray-500 tracking-widest">
        STATE OF THE ART CHEESECAKE SINCE 1993
      </p>
      <h2 className="text-7xl font-nic">Velvet Goodness</h2>
      <p className="italic text-gray-500 text-center text-2xl">
        where every bite hits
      </p>
      <p className="max-w-sm text-gray-500 mx-auto mt-2">
        Family owned business making cheesecake. Made fresh daily, all natural
        ingredients, and recipes perfected over 30 years.
      </p>
      <div className="flex gap-8 mx-auto my-10">
        <button className="bg-[#FE7F9C] p-4 rounded-full text-white">
          Order for Delivery →
        </button>
        <button className="bg-white text-pink-300 p-4 rounded-full">
          View Full Menu
        </button>
      </div>
    </section>
  );
}
