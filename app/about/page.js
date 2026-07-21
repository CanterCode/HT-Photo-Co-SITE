import Image from "next/image";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import SectionContainer from "@/components/SectionContainer";
import { hannahPhotos } from "@/lib/photos";

export const metadata = {
  title: "About | Hannah Thompson Photo Co.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Hannah"
        subtitle="Wedding and lifestyle photography based in Weatherford and Fort Worth, Texas."
      />

      <section className="py-12">
        <SectionContainer>
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
            <FadeIn>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
                <Image
                  src={hannahPhotos[8].src}
                  alt={hannahPhotos[8].alt}
                  fill
                  sizes="(min-width: 768px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="font-script text-3xl text-moss">Your photographer</p>
              <p className="mt-4 font-body text-lg text-moss/90">
                Hi! I&rsquo;m Hannah, and I&rsquo;m so glad you&rsquo;re here! I
                am a wedding and lifestyle photographer based in Weatherford
                and Fort Worth, Texas, but will travel anywhere for YOU! With
                an upbeat, joyfully chaotic guiding style, I can assure you
                will never feel uncomfortable or out of place with me!
              </p>
              <p className="mt-4 font-body text-lg text-moss/90">
                In 2022, I had the incredible opportunity to travel to
                Vietnam on a mission trip to share the Gospel. Just before
                leaving, I had bought my very first camera and decided to
                bring it along, never imagining how much that simple
                decision would change my life. As I photographed people
                whose language I couldn&rsquo;t speak, I found myself
                connecting with them in ways that words never could. Through
                quiet smiles, timid glances, genuine laughter, and raw
                emotion, I realized that photography has the power to tell
                stories that transcend language and preserve moments that
                speak right to the soul.
              </p>
            </FadeIn>
          </div>
        </SectionContainer>
      </section>

      <section className="py-4">
        <SectionContainer>
          <FadeIn>
            <div className="grid grid-cols-3 gap-4">
              {[hannahPhotos[3], hannahPhotos[11], hannahPhotos[15]].map((photo) => (
                <div
                  key={photo.src}
                  className="relative aspect-square w-full overflow-hidden rounded-lg"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 768px) 30vw, 30vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </FadeIn>
        </SectionContainer>
      </section>

      <section className="py-12">
        <SectionContainer>
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
            <FadeIn className="md:order-2">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
                <Image
                  src={hannahPhotos[18].src}
                  alt={hannahPhotos[18].alt}
                  fill
                  sizes="(min-width: 768px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.1} className="md:order-1">
              <p className="font-body text-lg text-moss/90">
                That trip sparked a passion I couldn&rsquo;t ignore, but as
                life got busy, I eventually put my camera away. It
                wasn&rsquo;t until my own wedding that everything came full
                circle. As I looked through mine and my husband&rsquo;s
                gallery, I found myself studying every image, paying
                attention to the emotion, the storytelling, and the little
                moments that had been preserved forever. I couldn&rsquo;t
                stop thinking about photography, and I knew it was time to
                pick up my camera again, but this time, with purpose.
              </p>
              <p className="mt-4 font-body text-lg text-moss/90">
                What started as curiosity became a calling, and I set out to
                build something meaningful: a business centered around
                serving others well and preserving the moments that matter
                the most.
              </p>
            </FadeIn>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
