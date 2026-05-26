"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { PhoneLink } from "@/components/content/phone-link";
import { QuoteCTA } from "@/components/content/quote-cta";
import { NAV_LINKS } from "./nav-links";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-md text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open ? (
        <div className="absolute inset-x-0 top-full lg:hidden">
          <nav
            className="border-t border-navy/10 bg-cream"
            aria-label="Mobile"
          >
            <ul className="divide-y divide-navy/10 px-6">
              {NAV_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 text-base font-medium text-navy"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 border-t border-navy/10 px-6 py-4">
              <QuoteCTA>Get a free quote</QuoteCTA>
              <PhoneLink size="lg" />
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}
