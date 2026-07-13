import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import SectionContainer from "@/components/SectionContainer";
import PlaceholderBlock from "@/components/PlaceholderBlock";

export const metadata = {
  title: "Gallery | Hannah Thompson Photo Co.",
};

const TONES = ["coral", "blush", "cream"];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="[Placeholder supporting line — real copy coming in a later pass.]"
      />

      {/* Placeholder image grid — colored boxes stand in for real photos */}
      <section className="py-12">
        <SectionContainer>
          <FadeIn>
            {/* Gallery image grid goes here */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {Array.from({ length: 12 }).map((_, index) => (
                <PlaceholderBlock
                  key={index}
                  label="Gallery grid placeholder"
                  tone={TONES[index % TONES.length]}
                  compact
                />
              ))}
            </div>
          </FadeIn>
        </SectionContainer>
      </section>
    </>
  );
}
