import Link from "next/link";
import { NAV_LINKS } from "@/lib/navigation";
import LogoWordmark from "@/components/logos/LogoWordmark";

export default function Footer() {
  return (
    <footer className="bg-forest">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div>
            <LogoWordmark
              className="h-12 w-auto"
              style={{ "--logo-ink": "#F4F1EA", "--logo-bg": "#3B3B1B" }}
            />
            <p className="mt-2 font-body text-sm text-blush">
              Photo Co. &mdash; [TBD tagline]
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col items-center gap-2 md:items-start">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-start">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm font-semibold uppercase tracking-wide text-cream transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="font-body text-sm text-cream">
            <p>[TBD address]</p>
            <p>[TBD phone]</p>
            <p>[TBD email]</p>
          </div>
        </div>

        <p className="mt-10 text-center font-body text-xs text-blush/70">
          &copy; {new Date().getFullYear()} Hannah Thompson Photo Co. All rights reserved. Site by Canterbury Web.
        </p>
      </div>
    </footer>
  );
}
