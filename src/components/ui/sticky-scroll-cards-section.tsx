import React, { useState, useEffect, useRef } from "react";
import imgHomeHeroCard1 from "@/assets/images/hero/home-hero-card1.png";
import imgHomeHeroCard2 from "@/assets/images/hero/home-hero-card2.png";
import imgCorporateFeature from "@/assets/images/corporate/corporate-feature.png";
import imgCorporatePlanning from "@/assets/images/corporate/corporate-planning.png";
import imgCorporateTrends from "@/assets/images/corporate/corporate-trends.png";

export interface FeatureCard {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  bgColor: string;
  textColor: string;
}

const features: FeatureCard[] = [
  {
    title: "Car Rental",
    description: "Our company specializes in seamless ground transportation, car rentals, and luxury airport transfers with astonishing booking platforms.",
    tags: ["Airport Transfer", "Limousine", "Chauffeur Drive"],
    imageUrl: imgHomeHeroCard1,
    bgColor: "bg-[#0f1117]",
    textColor: "text-white/80",
  },
  {
    title: "Travtrolley",
    description: "Advanced B2B travel distribution engine empowering travel agents, corporate planners, and partners with global inventory.",
    tags: ["B2B Booking", "Wholesale Rates", "Agent Portal"],
    imageUrl: imgHomeHeroCard2,
    bgColor: "bg-[#0c2340]",
    textColor: "text-white/80",
  },
  {
    title: "Logistics",
    description: "Comprehensive air freight, supply chain management, and cargo logistics solutions connecting global trade hubs efficiently.",
    tags: ["Cargo Transport", "Supply Chain", "Express Freight"],
    imageUrl: imgCorporateFeature,
    bgColor: "bg-[#064e3b]",
    textColor: "text-white/80",
  },
  {
    title: "Tune Protect",
    description: "Comprehensive travel insurance coverage giving global travellers complete peace of mind on every journey.",
    tags: ["Flight Cover", "Medical Coverage", "Baggage Protection"],
    imageUrl: imgCorporatePlanning,
    bgColor: "bg-[#312e81]",
    textColor: "text-white/80",
  },
  {
    title: "Holidays",
    description: "Bespoke holiday packages, curated leisure experiences, and luxury getaway deals across top global destinations.",
    tags: ["Custom Packages", "Luxury Resorts", "Guided Tours"],
    imageUrl: imgCorporateTrends,
    bgColor: "bg-[#0057ff]",
    textColor: "text-white/80",
  },
];

export const useScrollAnimation = (): [React.RefObject<HTMLDivElement | null>, boolean] => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
};

export function AnimatedHeader() {
  const [headerRef, headerInView] = useScrollAnimation();
  const [pRef, pInView] = useScrollAnimation();

  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2
        ref={headerRef}
        className={`text-5xl md:text-6xl font-bold transition-all duration-700 ease-out text-[#05203c] ${
          headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        Air Arabia <span className="text-[#0062e3] italic">Group Companies</span>
      </h2>
      <p
        ref={pRef}
        className={`text-xl text-[#545860] mt-4 transition-all duration-700 ease-out delay-200 ${
          pInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        Reach travellers actively researching, comparing and exploring trips through rich intent signals.
      </p>
    </div>
  );
}

export function StickyFeatureSection() {
  return (
    <div className="w-full max-w-[1520px] mx-auto py-8 pb-[50vh] card-container">
      <div className="relative flex flex-col">
        {features.map((feature, index) => (
          <div
            key={index}
            id={`card${index + 1}`}
            className={`${feature.bgColor} card grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 p-8 md:p-14 rounded-[32px] mb-[60px] sticky shadow-[0_-10px_30px_rgba(0,0,0,0.3),_0_25px_50px_rgba(0,0,0,0.4)] border border-white/20 transition-transform duration-300 ease-out`}
            style={{
              top: `calc(20vh + ${index * 28}px)`,
              zIndex: index + 1,
            }}
          >
            {/* Left Column: Text, Number Badge & Tags */}
            <div className="flex flex-col justify-center relative">
              <div className="flex items-center justify-between mb-4">
                <span className="px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-semibold tracking-wider uppercase border border-white/20">
                  {`0${index + 1} / 0${features.length}`}
                </span>
              </div>

              <h3 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight leading-tight">
                {feature.title}
              </h3>

              <div className="flex flex-wrap gap-3 mb-6">
                {feature.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full border border-white/30 text-white/90 text-sm font-medium bg-white/5 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className={`${feature.textColor} text-lg leading-relaxed max-w-xl`}>
                {feature.description}
              </p>
            </div>

            {/* Right Column: Image Card */}
            <div className="image-wrapper mt-6 md:mt-0 overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
              <img
                src={feature.imageUrl}
                alt={feature.title}
                loading="lazy"
                className="w-full h-[320px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StickyFeatureSection;
