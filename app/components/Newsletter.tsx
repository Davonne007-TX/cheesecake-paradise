import { CakeSlice } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="bg-[#FE7F9C] text-white">
      <div className="max-w-3xl mx-auto p-20">
        <div className="flex flex-col gap-8 justify-center items-center">
          <CakeSlice className="w-10 h-10" />
          <h2 className="text-5xl font-dm">Slice of the cake</h2>
          <p className="max-w-md text-center text-md">
            Subscribe to our news letter for new flavors, specials, and of
            course a special treat for your birthday! Bonus for signing up, 20%
            off your first order.{" "}
          </p>
          <div className="flex gap-8">
            <input
              type="text"
              className="p-2 w-full bg-white/20 rounded-sm "
              placeholder="Enter your email"
            />

            <button className="bg-white/60 rounded-lg tracking-widest text-black w-60 p-2">
              Subscribe 📨{" "}
            </button>
          </div>
          <p className="text-center max-w-md text-sm mb-2">
            Unsubscribe at anytime. We love our customers and your privacy.
          </p>
        </div>
      </div>
    </section>
  );
}
