import Image from "next/image";
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
  title: "Gallery | Hannah Thompson Photo Co.",
};

const SECTIONS = [
  { id: "weddings", label: "Weddings", photos: weddingPhotos },
  { id: "couples", label: "Couples", photos: couplePhotos },
  { id: "family", label: "Family", photos: familyPhotos },
  { id: "individual", label: "Individual", photos: individualPhotos },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="A closer look at the weddings, couples, families, and portraits I've had the honor of photographing."
      />

      <nav aria-label="Gallery categories" className="pb-8">
        <SectionContainer>
          <ul className="flex flex-wrap justify-center gap-3">
            {SECTIONS.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="inline-flex min-h-11 items-center rounded-full bg-blush px-5 py-2 font-body text-sm font-semibold uppercase tracking-wide text-charcoal transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </SectionContainer>
      </nav>

      {SECTIONS.map((section, i) => (
        <section
          key={section.id}
          id={section.id}
          className={`scroll-mt-32 py-12 ${i % 2 === 1 ? "bg-blush" : ""}`}
        >
          <SectionContainer>
            <FadeIn>
              <h2
                className={`font-display text-3xl font-bold sm:text-4xl ${
                  i % 2 === 1 ? "text-charcoal" : "text-moss"
                }`}
              >
                {section.label}
              </h2>
            </FadeIn>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {section.photos.map((photo) => (
                <div
                  key={photo.src}
                  className="relative aspect-square w-full overflow-hidden rounded-lg"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 768px) 23vw, (min-width: 640px) 30vw, 45vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </SectionContainer>
        </section>
      ))}
    </>
  );
}
