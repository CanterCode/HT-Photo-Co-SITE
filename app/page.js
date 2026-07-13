import Hero from "@/components/Hero";
import AboutTeaser from "@/components/home/AboutTeaser";
import ServiceTiles from "@/components/home/ServiceTiles";
import FeaturedWork from "@/components/home/FeaturedWork";
import FinalCta from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <ServiceTiles />
      <FeaturedWork />
      <FinalCta />
    </>
  );
}
