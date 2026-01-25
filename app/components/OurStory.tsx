export default function OurStory() {
  const features = [
    {
      icon: "",
      title: "Slow Baked",
      description:
        "Each cheesecake is slow baked for a signature creamy texture.",
    },
    {
      icon: "",
      title: "Fresh Ingredients",
      description:
        "We have the best cream cheese, fresh farm eggs in town and real vanilla.",
    },
    {
      icon: "",
      title: "Custom Flavors",
      description: "Get the flavors you want. You want it. We got it.",
    },
    {
      icon: "",
      title: "Catering",
      description:
        "Need to cater a party? We do catering and fast free delivery for our customers.",
    },
  ];
  return (
    <section className="mt-20 bg-white min-h-screen mx-auto flex flex-col justify-center items-center">
      <div className="flex flex-col md:flex-row gap-20 justify-center items-center p-8 max-w-7xl">
        <div className="flex flex-col gap-4 max-w-xl">
          <span className="text-[#FE7F9C] font-semibold] text-2xl">
            OUR STORY
          </span>
          <h2 className="font-bold text-5xl">Baked with flavor since 1993</h2>
          <p className="mt-2 text-gray-700 text-lg ">
            Suspendisse volutpat gravida tristique. Nam tempor purus in erat
            ultrices tincidunt. Sed commodo tellus nec nunc sodales interdum.
            Donec condimentum, tellus at ullamcorper porttitor
          </p>
          <p className="text-gray-700 text-lg">
            Suspendisse volutpat gravida tristique. Nam tempor purus in erat
            ultrices tincidunt. Sed commodo tellus nec nunc sodales interdum.
            Donec condimentum, tellus at ullamcorper porttitor
          </p>
        </div>
        <section className="grid sm:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div className="flex flex-col justify-center gap-2 bg-[#FE7F9C]/60 p-2 rounded-xl">
              <div>{feature.icon}</div>
              <h3 className="font-bold text-2xl">{feature.title}</h3>
              <p className="text-md">{feature.description}</p>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
}
