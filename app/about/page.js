import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import SectionContainer from "@/components/SectionContainer";
import PlaceholderBlock from "@/components/PlaceholderBlock";

export const metadata = {
  title: "About | Hannah Thompson Photo Co.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Hannah"
        subtitle="[Placeholder supporting line — real copy coming in a later pass.]"
      />

      {/* Bio placeholder block */}
      <section className="py-12">
        <SectionContainer>
          <FadeIn>
            <h2 className="font-display text-3xl font-bold text-moss">
              Bio
            </h2>
            {/* Hannah's bio goes here */}
            <PlaceholderBlock label="Bio placeholder [TBD]" tone="blush" className="mt-6" />
          </FadeIn>
        </SectionContainer>
      </section>

      {/* How I work / experience stub */}
      <section className="bg-coral py-12">
        <SectionContainer>
          <FadeIn>
            <h2 className="font-display text-3xl font-bold text-charcoal">
              How I Work
            </h2>
            {/* "How I work" / experience content goes here */}
            <PlaceholderBlock
              label="How I work / experience placeholder"
              tone="cream"
              className="mt-6"
            />
          </FadeIn>
        </SectionContainer>
      </section>
    </>
  );
}
