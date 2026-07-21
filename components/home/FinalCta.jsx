import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionContainer from "@/components/SectionContainer";

export default function FinalCta() {
  return (
    <section className="flex min-h-screen items-center bg-cream py-24 text-center">
      <SectionContainer>
        <FadeIn>
          <p className="font-script text-3xl text-moss">Let&rsquo;s talk</p>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-4xl font-bold text-moss sm:text-5xl">
            Ready to start planning?
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-body text-lg text-moss/80">
            Tell me about your day, your people, and what you want to
            remember most. I&rsquo;ll take it from there.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-11 items-center rounded-full bg-moss px-10 py-3 font-body font-semibold uppercase tracking-wide text-cream transition-colors hover:bg-forest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-moss"
          >
            Get in Touch
          </Link>
        </FadeIn>
      </SectionContainer>
    </section>
  );
}
