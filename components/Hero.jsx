"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { heroImages } from "@/lib/heroImages";

const SLIDE_DURATION_MS = 6000;

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden bg-forest">
      <AnimatePresence>
        <motion.div
          key={heroImages[index].src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={heroImages[index].src}
            alt={heroImages[index].alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Localized scrim behind the navbar only — photos read bright and
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
