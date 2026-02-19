import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { PopularDishes } from "@/components/home/PopularDishes";
import { Reviews } from "@/components/home/Reviews";
import { Gallery } from "@/components/home/Gallery";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Gallery />
      <PopularDishes />
      <Reviews />
    </main>
  );
}
