import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import SectionContainer from "@/components/SectionContainer";
import { weddingPhotos } from "@/lib/photos";

export const metadata = {
  title: "Weddings | Hannah Thompson Photo Co.",
};

// Array-driven so more tiers can be added later without restructuring the page.
const WEDDING_PACKAGES = [
  {
    name: "Wedding Day Coverage",
    price: "Starting at $1,200",
    note: "Full package details and what’s included coming soon — reach out and I’ll send you a custom quote.",
  },
];

const GALLERY_PHOTOS = weddingPhotos.slice(0, 9);

export default function WeddingsPage() {
  return (
    <>
      <PageHero
        title="Weddings"
        subtitle="Full-day coverage for the parts you'll want to remember and the parts you won't even notice happened."
      />

      <section className="py-12">
        <SectionContainer className="max-w-3xl text-center">
          <FadeIn>
            <p className="font-body text-lg text-moss/90">
              Your wedding day moves fast. My job is to stay close to it —
              getting ready, the ceremony, the in-between moments nobody
              plans for, and the whole reception — so you get to just be in
              it. I&rsquo;ll guide you through anything that feels
              unfamiliar and stay out of the way for everything else.
            </p>
          </FadeIn>
        </SectionContainer>
      </section>

      <section className="py-4">
        <SectionContainer>
          <FadeIn>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {GALLERY_PHOTOS.map((photo) => (
                <div
                  key={photo.src}
                  className="relative aspect-[4/5] w-full overflow-hidden rounded-lg"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 640px) 30vw, 45vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </FadeIn>
        </SectionContainer>
      </section>

      <section className="bg-forest py-16">
        <SectionContainer className="text-center">
          <FadeIn>
            <p className="font-script text-3xl text-blush">Investment</p>
            <h2 className="mt-2 font-display text-4xl font-bold text-cream sm:text-5xl">
              Wedding Packages
            </h2>
          </FadeIn>

          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {WEDDING_PACKAGES.map((pkg) => (
              <FadeIn key={pkg.name} delay={0.1}>
                <div className="flex w-full max-w-sm flex-col items-center gap-3 rounded-lg bg-cream p-8 text-center">
                  <h3 className="font-display text-2xl font-bold text-moss">
                    {pkg.name}
                  </h3>
                  <p className="font-display text-3xl font-bold text-moss">
                    {pkg.price}
                  </p>
                  <p className="font-body text-moss/80">{pkg.note}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <Link
              href="/contact"
              className="mt-10 inline-flex min-h-11 items-center rounded-full bg-blush px-10 py-3 font-body font-semibold uppercase tracking-wide text-charcoal transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
            >
              Get in Touch
            </Link>
          </FadeIn>
        </SectionContainer>
      </section>
    </>
  );
}
