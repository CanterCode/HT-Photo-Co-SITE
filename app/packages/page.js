import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import SectionContainer from "@/components/SectionContainer";
import {
  weddingPhotos,
  couplePhotos,
  familyPhotos,
  individualPhotos,
} from "@/lib/photos";

export const metadata = {
  title: "Packages | Hannah Thompson Photo Co.",
};

const CATEGORIES = [
  {
    name: "Couples",
    rate: "Starting at $265/hr",
    image: couplePhotos[4],
    href: "/contact",
  },
  {
    name: "Engagement & Proposals",
    rate: "Starting at $285/hr",
    // placeholder image — swap once Hannah has engagement-specific shoots
    image: couplePhotos[5],
    href: "/contact",
  },
  {
    name: "Maternity",
    rate: "Starting at $265/hr",
    image: couplePhotos[2],
    href: "/contact",
  },
  {
    name: "Portraits",
    rate: "Starting at $250/hr",
    image: individualPhotos[1],
    href: "/contact",
  },
  {
    name: "Family",
    rate: "Starting at $275/hr",
    image: familyPhotos[2],
    href: "/contact",
  },
  {
    name: "Branding",
    rate: "Starting at $265",
    // placeholder image — swap once Hannah has branding-specific shoots
    image: individualPhotos[2],
    href: "/contact",
  },
  {
    name: "Weddings",
    cta: "Visit Wedding Packages",
    image: weddingPhotos[1],
    href: "/weddings",
  },
  {
    name: "Elopement",
    rate: "Starting at $900",
    image: weddingPhotos[5],
    href: "/contact",
  },
];

export default function PackagesPage() {
  return (
    <>
      <PageHero
        title="Packages"
        subtitle="Inquire for a direct quote for your session."
      />

      <section className="py-12">
        <SectionContainer>
          <FadeIn>
            <p className="mx-auto max-w-2xl text-center font-body text-lg text-moss/90">
              Every session is a little different, so these are starting
              rates rather than a fixed price list — reach out and
              I&rsquo;ll put together a quote built around your day.
            </p>
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((category, i) => (
              <FadeIn key={category.name} delay={(i % 4) * 0.1}>
                <Link
                  href={category.href}
                  className="group block rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-moss"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
                    <Image
                      src={category.image.src}
                      alt={category.image.alt}
                      fill
                      sizes="(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 90vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-moss">
                    {category.name}
                  </h3>
                  <p className="mt-1 font-body font-semibold text-moss/80">
                    {category.cta ?? category.rate}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </SectionContainer>
      </section>

      <section className="bg-blush py-16 text-center">
        <SectionContainer>
          <FadeIn>
            <h2 className="font-display text-3xl font-bold text-charcoal sm:text-4xl">
              Don&rsquo;t see exactly what you&rsquo;re looking for?
            </h2>
            <p className="mx-auto mt-3 max-w-xl font-body text-lg text-charcoal/90">
              Reach out and tell me what you have in mind — I&rsquo;m happy
              to build a session around it.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-11 items-center rounded-full bg-moss px-10 py-3 font-body font-semibold uppercase tracking-wide text-cream transition-colors hover:bg-forest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-moss"
            >
              Inquire Now
            </Link>
          </FadeIn>
        </SectionContainer>
      </section>
    </>
  );
}
