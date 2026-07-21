import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionContainer from "@/components/SectionContainer";
import { hannahPhotos } from "@/lib/photos";

const aboutTeaserImage = hannahPhotos[0];

export default function AboutTeaser() {
  return (
    <section className="flex min-h-screen items-center bg-cream py-24">
      <SectionContainer>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <FadeIn>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
              <Image
                src={aboutTeaserImage.src}
                alt={aboutTeaserImage.alt}
                fill
                sizes="(min-width: 768px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="font-script text-3xl text-moss">Hi, I&rsquo;m Hannah</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-moss sm:text-5xl">
              Your day, told honestly
            </h2>
            <p className="mt-6 font-body text-lg text-moss/80">
              I care more about how you feel in front of the camera than a
              perfectly posed shot. My favorite photos are usually the ones
              nobody saw me take: a laugh between readings, a hand squeezed
              a little tighter before you walk out. That kind of quiet
              noticing is the whole job, as far as I&rsquo;m concerned.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex min-h-11 items-center font-body text-sm font-semibold uppercase tracking-[0.15em] text-moss underline underline-offset-4 transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-moss"
            >
              Learn more about Hannah
            </Link>
          </FadeIn>
        </div>
      </SectionContainer>
    </section>
  );
}
