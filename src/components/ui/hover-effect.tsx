import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export interface ChooseUsItem {
  title: string;
  badge?: string;
  stat?: string;
  description: string;
  link?: string;
  bgColor?: string;
}

export const ChooseUsItems: ChooseUsItem[] = [
  {
    title: "Air Arabia GSA",
    badge: "Official GSA",
    stat: "PJSC",
    description: "Owned by Air Arabia PJSC & Official GSA serving global travelers.",
    bgColor: "bg-gradient-to-br from-[#0062f0] to-[#003ca8]",
  },
  {
    title: "Regional Reach",
    badge: "MENA & India",
    stat: "10+",
    description: "Countries operating across MENA & India with full service hubs.",
    bgColor: "bg-[#0f172a]",
  },
  {
    title: "Global Network",
    badge: "Branch Offices",
    stat: "50+",
    description: "Offices across our global network providing localized travel care.",
    bgColor: "bg-[#0f172a]",
  },
  {
    title: "Multilingual Experts",
    badge: "Travel Team",
    stat: "1,100+",
    description: "Multilingual professionals providing seamless corporate & leisure service.",
    bgColor: "bg-[#0f172a]",
  },
  {
    title: "Airline Partners",
    badge: "Direct Access",
    stat: "130+",
    description: "Airlines across all major alliances and low-cost carriers worldwide.",
    bgColor: "bg-[#0f172a]",
  },
  {
    title: "Always-On Care",
    badge: "Human Support",
    stat: "24x7",
    description: "In-person support – strictly human care, not automated or outsourced.",
    bgColor: "bg-[#0f172a]",
  },
  {
    title: "cozmobizz",
    badge: "Corporate Tech",
    stat: "B2B Tech",
    description: "Proprietary corporate travel booking and expense management platform.",
    bgColor: "bg-gradient-to-br from-[#0062f0] to-[#0040b3]",
  },
  {
    title: "Travtrolley",
    badge: "Distribution",
    stat: "Engine",
    description: "Advanced B2B travel distribution engine for travel agents and partners.",
    bgColor: "bg-gradient-to-br from-[#0062f0] to-[#0040b3]",
  },
];

export function HoverEffectCards({ items = ChooseUsItems }: { items?: ChooseUsItem[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-[1520px] mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="relative group block p-2 h-full w-full cursor-pointer"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-[#0062f0]/20 dark:bg-blue-600/30 block rounded-[28px]"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.2 },
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                    transition: { duration: 0.15, delay: 0.05 },
                  }}
                />
              )}
            </AnimatePresence>

            <div
              className={`rounded-[24px] h-full w-full p-8 overflow-hidden ${
                item.bgColor || "bg-[#0f172a]"
              } border border-white/10 group-hover:border-[#0062f0] group-hover:shadow-[0_20px_50px_rgba(0,98,240,0.3)] transition-all duration-300 relative z-20 flex flex-col justify-between min-h-[260px]`}
            >
              <div className="relative z-50 flex flex-col justify-between h-full">
                {/* Header Badge & Stat */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  {item.badge && (
                    <span className="px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
                      {item.badge}
                    </span>
                  )}
                  {item.stat && (
                    <span className="text-3xl font-extrabold text-[#38bdf8] group-hover:text-white transition-colors duration-300">
                      {item.stat}
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <div>
                  <h4 className="text-white text-2xl font-bold tracking-tight mb-2 group-hover:translate-x-1 transition-transform duration-300">
                    {item.title}
                  </h4>
                  <p className="text-slate-300 text-base leading-relaxed group-hover:text-white transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HoverEffectCards;
