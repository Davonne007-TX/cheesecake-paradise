export default function PickUpLocation() {
  return (
    <section className="flex flex-col justify-center items-center gap-4 my-20">
      <h2 className="font-nic text-4xl md:text-5xl">Order Confirmed! 🎉</h2>
      <p className="text-lg md:text-2xl text-center max-w-xs md:max-w-sm">
        Pick up location: 2319 Sully Lane, Forks, WA 90210 in 15 minutes
      </p>

      <img
        src="./images/applePie.webp"
        alt="Apple Pie and Ice Cream"
        className="w-70 h-70 md:w-90 md:h-90 object-cover rounded-3xl shadow-xs shadow-white shake mt-8"
      />
    </section>
  );
}
