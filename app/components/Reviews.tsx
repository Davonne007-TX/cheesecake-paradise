import { Quote } from "lucide-react";

export default function Reviews() {
  const testimonials = [
    {
      quote:
        "Loved the Classic New York cheesecake. It was creamy and the crust was amazing! Best cheesecake I've ever had. I will definitely be back. ",
      author: "Topanga Matthews",
      role: "Hairdresser",
      id: 1,
    },
    {
      quote:
        "Every time I visit town, me and the family have to visit Velvet Goodness. It has become a tradition. Best cheesecake in town! ",
      author: "Angela Hunter",
      role: "Loyal Customer",
      id: 2,
    },
    {
      quote:
        "As a chef, I appreciate the attention to quality of the cheesecake. The texture, the ingredients. Absolute goodness! Top Restaurant in Yummy Magazine.",
      author: "Eric Matthews",
      role: "Chef, The Spot",
      id: 3,
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-nic text-5xl p-8 text-center">
          What our customers say
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div className="mx-auto max-w-sm" key={testimonial.id}>
              <div className="bg-white shadow-md p-6 rounded-2xl max-w-xl md:max-w-sm flex flex-col">
                <Quote className="w-8 h-8 text-[#FE7F9C] mb-4" />
                <p className="text-gray-700">"{testimonial.quote}"</p>
                <div className="mt-6">
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
