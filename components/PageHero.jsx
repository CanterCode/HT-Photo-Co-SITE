import FadeIn from "@/components/FadeIn";

export default function PageHero({ title, subtitle }) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 pt-36 text-center sm:px-6 sm:pb-24 sm:pt-40 md:pt-44 lg:px-8 lg:pt-48">
      <FadeIn>
        <h1 className="font-display text-5xl font-bold text-moss sm:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-xl font-body text-lg text-moss">
          {subtitle}
        </p>
      </FadeIn>
    </section>
  );
}
