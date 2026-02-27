export default function SecondHeader() {
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      // If element doesn't exist on current page, navigate to home and scroll
      window.location.href = `/#${sectionId}`;
    }
  };
  return (
    <section className="relative max-w-xs md:max-w-3xl lg:max-w-7xl mx-auto py-20 md:py-40">
      <div className="relative overflow-hidden rounded-3xl shadow-2xl">
        <img
          src="./images/candy.webp"
          className="w-full h-100 md:h-125 object-cover"
          alt="Cheesecake, image by Obed Hernandez on Unsplash"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-nic text-3xl md:text-7xl text-white drop-shadow-lg max-w-2xl leading-tight">
            Get your cheesecake on
          </h1>

          <p className="text-white/90 mt-4 text-lg md:text-2xl max-w-lg">
            Fresh home made cheesecake is what we do best. Get yours today!
          </p>

          <button
            onClick={() => scrollToSection("collection")}
            className="
            mt-6 bg-amber-200 text-black px-8 py-3 cursor-pointer rounded-full text-sm
            md:text-lg font-semibold shadow-lg hover:bg-amber-300 hover:scale-105 transition duration-300"
          >
            Order Online
          </button>
        </div>
      </div>
    </section>
  );
}
