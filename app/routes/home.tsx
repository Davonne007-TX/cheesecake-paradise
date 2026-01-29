import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Header from "~/components/Header";
import Hero from "~/components/Hero";
import OurStory from "~/components/OurStory";
import Reviews from "~/components/Reviews";

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
      <Header />
      <Welcome />
      <OurStory />
      <Reviews />
    </main>
  );
}
