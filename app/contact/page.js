import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import SectionContainer from "@/components/SectionContainer";

export const metadata = {
  title: "Contact | Hannah Thompson Photo Co.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        subtitle="[Placeholder supporting line — real copy coming in a later pass.]"
      />

      <section className="py-12">
        <SectionContainer className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Placeholder contact form stub — non-functional, submits nowhere yet */}
          <FadeIn>
            <form className="flex flex-col gap-4 rounded-lg bg-blush p-6 sm:p-8">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="font-body text-sm font-semibold text-moss">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="[TBD]"
                  className="rounded-md border border-moss/20 bg-cream px-3 py-2 font-body text-moss placeholder:text-moss/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="font-body text-sm font-semibold text-moss">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="[TBD]"
                  className="rounded-md border border-moss/20 bg-cream px-3 py-2 font-body text-moss placeholder:text-moss/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="message" className="font-body text-sm font-semibold text-moss">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="[TBD]"
                  className="rounded-md border border-moss/20 bg-cream px-3 py-2 font-body text-moss placeholder:text-moss/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss"
                />
              </div>
              <button
                type="button"
                className="mt-2 rounded-full bg-moss px-6 py-3 font-body font-semibold text-cream transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss"
              >
                Send (not yet connected)
              </button>
            </form>
          </FadeIn>

          {/* Placeholder contact info block */}
          <FadeIn delay={0.1}>
            <div className="flex h-full flex-col justify-center gap-4 rounded-lg bg-coral p-6 sm:p-8">
              <h2 className="font-display text-2xl font-medium text-moss">
                Get in Touch
              </h2>
              <p className="font-body text-moss">[TBD address]</p>
              <p className="font-body text-moss">[TBD phone]</p>
              <p className="font-body text-moss">[TBD email]</p>
              <p className="font-body text-moss">[TBD social links]</p>
            </div>
          </FadeIn>
        </SectionContainer>
      </section>
    </>
  );
}
