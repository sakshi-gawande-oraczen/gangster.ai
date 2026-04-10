"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { NAV_LINKS, SITE_CONFIG } from "@/app/config";
import { useScrolled } from "@/app/hooks/useScrolled";
import { cn } from "@/app/utils/cn";

export function Navbar() {
  const scrolled = useScrolled(20);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "backdrop-blur-xl border-b" : "bg-transparent"
      )}
      style={
        scrolled
          ? {
              background: "rgba(29,25,22,0.75)", // brown-300
              borderColor: "rgba(238,151,69,0.15)", // orange subtle
            }
          : undefined
      }
    >
      <nav className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between h-16 md:h-18">

        {/* Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 shrink-0"
        >
          <span
            className="w-[7px] h-[7px] rotate-45 bg-[var(--color-orange-300)] transition-transform duration-500 group-hover:rotate-180"
          />
          <span className="text-[1.05rem] font-semibold tracking-[-0.035em] text-[var(--color-ivory-100)] group-hover:text-[var(--color-orange-300)] transition-colors">
            {SITE_CONFIG.name}
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-7 lg:gap-9">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "relative text-[0.72rem] uppercase tracking-[0.13em] font-semibold pb-1 transition-colors duration-200",
                    "after:absolute after:bottom-0 after:left-0 after:h-px after:bg-[var(--color-orange-300)] after:transition-all after:duration-300",
                    isActive
                      ? "text-[var(--color-ivory-100)] after:w-full"
                      : "text-[var(--color-brown-50)] hover:text-[var(--color-ivory-100)] after:w-0 hover:after:w-full"
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2.5 px-5 py-2.5 text-[0.72rem] uppercase tracking-[0.13em] font-semibold text-[var(--color-ivory-100)] border border-[var(--color-ivory-100)]/20 hover:border-[var(--color-orange-300)] hover:text-[var(--color-orange-300)] transition-all duration-200 active:scale-[0.98]"
        >
          Request a Briefing
          <span className="w-1 h-1 rounded-full bg-[var(--color-orange-300)]" />
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden w-9 h-9 flex items-center justify-center text-[var(--color-ivory-100)] hover:text-[var(--color-orange-300)] transition-colors"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          mobileOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        )}
        style={{
          background: "var(--color-brown-300)",
          borderTop: "1px solid rgba(238,151,69,0.15)",
        }}
      >
        <ul className="flex flex-col px-6">
          {NAV_LINKS.map((link, i) => (
            <li
              key={link.href}
              className={cn(
                i !== 0 && "border-t border-[rgba(238,151,69,0.1)]"
              )}
            >
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between py-4 text-[0.72rem] uppercase tracking-[0.13em] font-semibold text-[var(--color-brown-50)] hover:text-[var(--color-ivory-100)] transition-colors group"
              >
                {link.label}
                <span className="text-[var(--color-orange-300)] opacity-60 group-hover:opacity-100 transition">
                  →
                </span>
              </a>
            </li>
          ))}

          {/* Mobile CTA */}
          <li className="border-t border-[rgba(238,151,69,0.1)] py-5">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2.5 py-3 text-[0.72rem] uppercase tracking-[0.13em] font-semibold text-[var(--color-ivory-100)] border border-[var(--color-ivory-100)]/20 hover:border-[var(--color-orange-300)] hover:text-[var(--color-orange-300)] transition-all"
            >
              Request a Briefing
              <span className="w-1 h-1 rounded-full bg-[var(--color-orange-300)]" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}