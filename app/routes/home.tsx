import type { Route } from "./+types/home";
import { Collection } from "~/components/Collection";
import Hero from "~/components/Hero";
import SecondHero from "~/components/SecondHero";
import OurStory from "~/components/OurStory";
import Reviews from "~/components/Reviews";
import Newsletter from "~/components/Newsletter";

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
      <OurStory />
      <Collection />
      <Reviews />
      <SecondHero />
      <Newsletter />
    </main>
  );
}
