"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
    <section className="relative flex h-screen min-h-[640px] w-full items-center justify-center overflow-hidden bg-forest">
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
            className="object-cover brightness-[.55]"
          />
        </motion.div>
      </AnimatePresence>

      {/* Scrim on top of the brightness filter guarantees WCAG AA contrast
          (4.5:1+) for the cream headline/logo against the darkest and
          brightest of the rotating photos. */}
      <div className="absolute inset-0 bg-forest/50" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 text-center">
        <p className="font-script text-4xl text-cream sm:text-5xl">
          Love, documented
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-cream sm:text-6xl">
          Photography for the moments you&rsquo;ll want to feel again
        </h1>
        <p className="mt-6 max-w-xl font-body text-lg text-cream/90 sm:text-xl">
          [Placeholder supporting line — real copy coming in a later pass.]
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-11 items-center rounded-full bg-moss px-8 py-3 font-body font-semibold uppercase tracking-wide text-cream transition-colors hover:bg-forest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
        >
          Inquire About Your Day
        </Link>
      </div>
    </section>
  );
}
