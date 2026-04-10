import { AnimateOnScroll } from "@/app/components/AnimateOnScroll";
import { WHO_ITS_FOR_SECTION } from "@/app/config";

export function WhoItsForSection() {
  return (
    <section
      id="who-its-for"
      className="py-24 md:py-32 bg-(--color-ivory-200)"
      aria-labelledby="whoitsfor-headline"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left */}
          <div>
            <AnimateOnScroll>
              <span className="type-label text-(--color-orange-300) block mb-5">
                {WHO_ITS_FOR_SECTION.label}
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll delay={80}>
              <h2 id="whoitsfor-headline" className="type-title text-(--color-brown-300) mb-7">
                {WHO_ITS_FOR_SECTION.headline}
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={160}>
              <p className="type-subtitle text-(--color-brown-100) mb-10">
                {WHO_ITS_FOR_SECTION.intro}
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={240}>
              <div className="p-7 bg-(--color-orange-100) border border-(--color-orange-200)">
                <span className="type-label text-(--color-orange-300) block mb-4">
                  Who you'll work with
                </span>
                <p className="type-card-body text-(--color-brown-100)">
                  {WHO_ITS_FOR_SECTION.whoYouWork}
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right — firm profile table */}
          <AnimateOnScroll delay={120}>
            <div className="overflow-hidden border border-(--color-orange-100)">
              <div className="px-7 py-5 bg-(--color-brown-300)">
                <span className="type-label text-(--color-brown-50)">Firm profile</span>
              </div>
              <ul role="list" className="bg-(--color-ivory-100)">
                {WHO_ITS_FOR_SECTION.firmProfile.map((item, i) => (
                  <li
                    key={item.label}
                    className={`flex items-center justify-between gap-8 px-7 py-4 hover:bg-orange-100/40 transition-colors duration-150 ${
                      i < WHO_ITS_FOR_SECTION.firmProfile.length - 1
                        ? "border-b border-(--color-orange-100)"
                        : ""
                    }`}
                  >
                    <span className="type-card-body text-(--color-brown-50) shrink-0">
                      {item.label}
                    </span>
                    <span className="type-card-body font-medium text-(--color-brown-300) text-right">
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
