import { SITE_CONFIG } from "@/app/config";

export function Footer() {
  return (
    <footer
      className="bg-(--color-brown-300) border-t border-ivory-100/8 px-6 md:px-12 py-8"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span
            className="w-5 h-5 rotate-45 bg-(--color-orange-300) shrink-0"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-0.5">
            <span className="text-[0.95rem] font-semibold text-(--color-ivory-100) tracking-[-0.02em]">
              {SITE_CONFIG.name}
            </span>
            <span className="type-label text-(--color-brown-50)">{SITE_CONFIG.tagline}</span>
          </div>
        </div>
        <p className="type-card-body text-(--color-brown-50) opacity-60">{SITE_CONFIG.copyright}</p>
      </div>
    </footer>
  );
}
