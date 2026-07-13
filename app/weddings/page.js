import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import SectionContainer from "@/components/SectionContainer";
import PlaceholderBlock from "@/components/PlaceholderBlock";

export const metadata = {
  title: "Weddings | Hannah Thompson Photo Co.",
};

export default function WeddingsPage() {
  return (
    <>
      <PageHero
        title="Weddings"
        subtitle="[Placeholder supporting line — real copy coming in a later pass.]"
      />

      {/* What's included stub */}
      <section className="py-12">
        <SectionContainer>
          <FadeIn>
            <h2 className="font-display text-3xl font-medium text-moss">
              What&rsquo;s Included
            </h2>
            {/* "What's included" list/content goes here */}
            <PlaceholderBlock
              label="What's included placeholder"
              tone="blush"
              className="mt-6"
            />
          </FadeIn>
        </SectionContainer>
      </section>

      {/* Featured wedding gallery stub */}
      <section className="bg-blush py-12">
        <SectionContainer>
          <FadeIn>
            <h2 className="font-display text-3xl font-medium text-moss">
              Featured Weddings
            </h2>
            {/* Featured Weddings grid goes here */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <PlaceholderBlock label="Featured wedding 1" tone="cream" />
              <PlaceholderBlock label="Featured wedding 2" tone="coral" />
              <PlaceholderBlock label="Featured wedding 3" tone="cream" />
            </div>
          </FadeIn>
        </SectionContainer>
      </section>
    </>
  );
}
