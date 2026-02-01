import { Quote, Star } from "lucide-react";

export default function Reviews() {
  const testimonials = [
    {
      id: 1,
      quote:
        "Loved the Classic New York cheesecake. It was creamy and the crust was amazing! Best cheesecake I've ever had. I will definitely be back.",
      author: "Topanga Matthews",
      role: "Hairdresser",
    },
    {
      id: 2,
      quote:
        "Every time I visit town, my family and I have to stop by Velvet Goodness. It’s become a tradition. Best cheesecake in town!",
      author: "Angela Hunter",
      role: "Loyal Customer",
    },
    {
      id: 3,
      quote:
        "As a chef, I truly appreciate the attention to quality, the texture, the ingredients. Absolute goodness. Top restaurant in Yummy Magazine.",
      author: "Eric Matthews",
      role: "Chef, The Spot",
    },
  ];

  return (
    <section className="py-40 px-4 bg-[#FFF7F9]">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#FE7F9C] tracking-widest text-sm text-center mb-3">
          TESTIMONIALS
        </p>

        <h2 className="font-nic text-4xl sm:text-5xl md:text-6xl text-center mb-16">
          What our customers say
        </h2>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-gray-100 
                         hover:shadow-lg hover:-translate-y-1"
            >
              <Quote className="w-8 h-8 text-[#FE7F9C] mb-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#FE7F9C] text-[#FE7F9C]"
                  />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-8">
                “{testimonial.quote}”
              </p>

              <div className="border-t pt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
