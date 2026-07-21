import Image from "next/image";
import { heroImage } from "@/lib/photos";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden bg-forest">
      <Image
        src={heroImage.src}
        alt={heroImage.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_25%]"
      />

      {/* Localized scrim behind the navbar only — photo reads bright and
          clear everywhere else. Opacity stays >=0.75 through the tallest
          navbar height (lg: ~168px) before fading out, which is computationally
          verified to clear WCAG AA (4.5:1) for cream nav text/logo against
          even a blown-out-bright photo highlight in that zone. */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64"
        style={{
          background:
            "linear-gradient(to bottom, rgba(59,59,27,0.78) 0%, rgba(59,59,27,0.75) 55%, rgba(59,59,27,0) 100%)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
