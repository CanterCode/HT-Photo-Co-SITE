import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import SectionContainer from "@/components/SectionContainer";
import { weddingPhotos, couplePhotos } from "@/lib/photos";

const featuredWorkImages = [weddingPhotos[10], couplePhotos[8], weddingPhotos[20]];

export default function FeaturedWork() {
  return (
    <section className="flex min-h-screen items-center bg-forest py-24">
      <SectionContainer>
        <FadeIn>
          <p className="text-center font-script text-3xl text-blush">
            A few favorites
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-center font-display text-4xl font-bold text-cream sm:text-5xl">
            Real moments, not staged ones
          </h2>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-6">
          <FadeIn delay={0.1} className="sm:col-span-3 sm:row-span-2">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
              <Image
                src={featuredWorkImages[0].src}
                alt={featuredWorkImages[0].alt}
                fill
                sizes="(min-width: 640px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.2} className="sm:col-span-3">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
              <Image
                src={featuredWorkImages[1].src}
                alt={featuredWorkImages[1].alt}
                fill
                sizes="(min-width: 640px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.3} className="sm:col-span-3 sm:col-start-4">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
              <Image
                src={featuredWorkImages[2].src}
                alt={featuredWorkImages[2].alt}
                fill
                sizes="(min-width: 640px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </SectionContainer>
    </section>
  );
}
