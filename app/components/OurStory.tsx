import { Clock2, Tractor, ThumbsUp, Truck } from "lucide-react";
import { motion } from "motion/react";

export default function OurStory() {
  const features = [
    {
      id: 1,
      icon: Clock2,
      title: "Slow Baked",
      description:
        "Each cheesecake is slow baked for a signature creamy texture.",
    },
    {
      id: 2,
      icon: Tractor,
      title: "Fresh Ingredients",
      description:
        "We have the best cream cheese, fresh farm eggs in town and real vanilla.",
    },
    {
      id: 3,
      icon: ThumbsUp,
      title: "Custom Flavors",
      description:
        "Get the flavors you want. You want it. We got it. Simple and delicious.",
    },
    {
      id: 4,
      icon: Truck,
      title: "Catering",
      description:
        "Need to cater a party? We do catering and fast free delivery.",
    },
  ];

  return (
    <section
      id="story"
      className="mt-40 bg-white min-h-screen mx-auto flex flex-col justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col lg:flex-row gap-20 justify-center items-center p-8 max-w-7xl"
      >
        <div className="flex flex-col gap-4 max-w-xl mt-20 md:mt-0 scroll-mt-80">
          <span className="text-[#FE7F9C] font-semibold] text-2xl">
            OUR STORY
          </span>
          <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl">
            Baked with
            <br /> flavor since 1993
          </h2>
          <p className="mt-2 text-gray-700 text-xl ">
            What began with a mother and her daughters spending time together in
            the kitchen making their favorite dessert, has grown into a family
            owned business.
          </p>
          <p className="mt-2 text-gray-700 text-xl">
            Every cheesecake is made from scratch in small batches. We have our
            signature New York style, to seasonal creations. Our mission is to
            give our customers a cheesecake experience that will always be
            remembered.
          </p>
        </div>
        <section className="grid sm:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col justify-center gap-2 bg-[#FE7F9C]/60 p-6 rounded-xl"
            >
              <feature.icon className="h-10 w-10 bg-white rounded-full p-2 flex items-center justify-center" />
              <h3 className="font-bold text-2xl">{feature.title}</h3>
              <p className="text-md">{feature.description}</p>
            </div>
          ))}
        </section>
      </motion.div>
    </section>
  );
}
