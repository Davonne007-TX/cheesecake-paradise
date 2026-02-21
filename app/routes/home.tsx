import type { Route } from "./+types/home";
import { Collection } from "~/components/Collection";
import Header from "~/components/Header";
import Hero from "~/components/Hero";
import OurStory from "~/components/OurStory";
import Reviews from "~/components/Reviews";
import Newsletter from "~/components/Newsletter";
import Footer from "~/components/footer/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Collection />
      <OurStory />
      <Reviews />
      <Newsletter />
      <Footer />
    </main>
  );
}
