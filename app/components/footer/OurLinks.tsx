export default function OurLinks() {
  const collection = [
    { name: "Classic Cheesecake", id: 0 },
    { name: "Mini Cheesecakes", id: 1 },
    { name: "Gift Boxes", id: 2 },
    { name: "Seasonal Specials", id: 3 },
  ];

  const company = [
    { name: "Our Story", id: 0 },
    { name: "Catering", id: 1 },
    { name: "Careers", id: 2 },
    { name: "FAQS", id: 3 },
  ];
  return (
    <section className="flex flex-col md:flex-row gap-20 mt-4">
      <div className="flex flex-col gap-4">
        <p className="font-bold font-dm text-lg">Collection</p>
        {collection.map((cheesecakes) => (
          <ul key={cheesecakes.id}>
            <li className=" text-white/80 cursor-pointer hover:text-white transition">
              {cheesecakes.name}
            </li>
          </ul>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-bold font-dm text-lg">Business</p>
        {company.map((info) => (
          <ul key={info.id}>
            <li className=" text-white/80 cursor-pointer hover:text-white transition">
              {info.name}
            </li>
          </ul>
        ))}
      </div>
    </section>
  );
}
