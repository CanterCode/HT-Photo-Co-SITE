import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import SectionContainer from "@/components/SectionContainer";

export const metadata = {
  title: "Packages | Hannah Thompson Photo Co.",
};

const PLACEHOLDER_PACKAGES = [
  { name: "[Package name TBD]", price: "[$TBD]" },
  { name: "[Package name TBD]", price: "[$TBD]" },
  { name: "[Package name TBD]", price: "[$TBD]" },
];

export default function PackagesPage() {
  return (
    <>
      <PageHero
        title="Packages"
        subtitle="[Placeholder supporting line — real copy coming in a later pass.]"
      />

      {/* Pricing / packages grid stub */}
      <section className="py-12">
        <SectionContainer>
          <FadeIn>
            {/* Packages grid goes here */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {PLACEHOLDER_PACKAGES.map((pkg, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center rounded-lg bg-blush p-8 text-center"
                >
                  <p className="font-display text-2xl font-medium text-moss">
                    {pkg.name}
                  </p>
                  <p className="mt-2 font-body text-lg text-moss">
                    {pkg.price}
                  </p>
                  <p className="mt-4 font-body text-sm text-moss/80">
                    [Package details placeholder]
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </SectionContainer>
      </section>
    </>
  );
}
