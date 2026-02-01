export default function TermsOfService() {
  return (
    <section>
      <div className="bg-[#FE7F9C]/40 mx-auto rounded h-0.5 max-w-6xl mt-20"></div>
      <div className="flex flex-col md:flex-row gap-4 text-center md:justify-between mx-auto max-w-6xl  mt-10 items-center">
        <p>
          © Velvet Goodness - Davonne Vigil's UI Project. All rights reserved.
        </p>{" "}
        <div className="flex gap-4">
          <p className="text-white/80 cursor-pointer hover:text-white transition">
            Privacy Policy
          </p>
          <p className="text-white/80 cursor-pointer hover:text-white transition">
            Terms of Service
          </p>
        </div>
      </div>
    </section>
  );
}
