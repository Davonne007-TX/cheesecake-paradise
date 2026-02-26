export default function SecondHeader() {
  return (
    <section className="relative max-w-xl md:max-w-7xl mx-auto mt-20 px-4">
      <div className="relative overflow-hidden rounded-3xl shadow-2xl">
        <img
          src="./images/candy.webp"
          className="w-full h-100 md:h-125 object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-nic text-4xl md:text-7xl text-white drop-shadow-lg max-w-2xl leading-tight">
            Get your cheesecake on
          </h1>

          <p className="text-white/90 mt-4 text-lg md:text-2xl max-w-lg">
            Choose from over 50 rich, creamy, unforgettable flavors.
          </p>

          <button
            className="
            mt-6
            bg-amber-200
            text-black
            px-8
            py-3
            rounded-full
            text-md
            md:text-lg
            font-semibold
            shadow-lg
            hover:bg-amber-300
            hover:scale-105
            transition
            duration-300
          "
          >
            Order Online
          </button>
        </div>
      </div>
    </section>
  );
}
