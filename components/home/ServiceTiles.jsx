import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionContainer from "@/components/SectionContainer";
import {
  weddingPhotos,
  couplePhotos,
  familyPhotos,
  individualPhotos,
} from "@/lib/photos";

const TILES = [
  {
    label: "Weddings",
    description: "Full-day coverage, from getting-ready nerves to the last dance.",
    href: "/weddings",
    image: weddingPhotos[0],
  },
  {
    label: "Couples",
    description: "Engagement sessions and portraits that feel like the two of you.",
    href: "/gallery#couples",
    image: couplePhotos[0],
  },
  {
    label: "Family",
    description: "Relaxed sessions that hold onto exactly where your family is right now.",
    href: "/gallery#family",
    image: familyPhotos[0],
  },
  {
    label: "Individual",
    description: "Portraits that feel like you, not a stiff studio backdrop.",
    href: "/gallery#individual",
    image: individualPhotos[0],
  },
];

export default function ServiceTiles() {
  return (
    <section className="flex min-h-screen items-center bg-blush py-24">
      <SectionContainer>
        <FadeIn>
          <p className="text-center font-script text-3xl text-charcoal">
            What I offer
          </p>
          <h2 className="mt-2 text-center font-display text-4xl font-bold text-charcoal sm:text-5xl">
            A few ways to work together
          </h2>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TILES.map((tile, i) => (
            <FadeIn key={tile.label} delay={i * 0.1}>
              <Link
                href={tile.href}
                className="group block rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-moss"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
                  <Image
                    src={tile.image.src}
                    alt={tile.image.alt}
                    fill
                    sizes="(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold text-charcoal">
                  {tile.label}
                </h3>
                <p className="mt-2 font-body text-charcoal">
                  {tile.description}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
