import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import svgPaths from "@/assets/svgs/svg-home-paths";

export function WhyChooseUsHoverGrid() {
  return (
    <div className="w-full max-w-[1520px] mx-auto py-6" data-name="WhyChooseUsSection">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: Air Arabia PJSC */}
        <WobbleCard
          containerClassName="col-span-1 md:col-span-2 lg:col-span-1 min-h-[280px] bg-gradient-to-br from-[#0062f0] via-[#0052c9] to-[#80b3fc] border border-blue-400/30"
          className="p-8 flex flex-col justify-between"
        >
          <div className="flex justify-between items-start">
            <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
              Official GSA
            </span>
            <div className="w-16 h-14 relative opacity-90">
              <svg className="w-full h-full" viewBox="0 0 124 103" fill="white">
                <path d={svgPaths.p81fd900} />
              </svg>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="font-['Helvetica:Bold',sans-serif] text-3xl font-bold leading-tight text-white">
              Owned by Air Arabia PJSC &amp; Official GSA
            </h3>
          </div>
        </WobbleCard>

        {/* Card 2: 10 Countries */}
        <WobbleCard
          containerClassName="col-span-1 min-h-[280px] bg-slate-900 border border-slate-800"
          className="p-8 flex flex-col justify-between"
        >
          <span className="text-[64px] font-bold text-[#0062f0] leading-none tracking-tight">
            10
          </span>
          <p className="text-gray-100 text-xl font-medium leading-relaxed mt-4">
            Countries across MENA &amp; India
          </p>
        </WobbleCard>

        {/* Card 3: 130+ Airlines */}
        <WobbleCard
          containerClassName="col-span-1 min-h-[280px] bg-[#0062f0] border border-blue-400/30"
          className="p-8 flex flex-col justify-between"
        >
          <div>
            <span className="text-[64px] font-bold text-white leading-none tracking-tight">
              130+
            </span>
            <p className="text-xs font-semibold uppercase text-blue-100 tracking-wider mt-2 bg-white/10 inline-block px-2.5 py-1 rounded-full">
              Direct Access
            </p>
          </div>
          <p className="text-white text-lg leading-relaxed mt-4">
            Airlines across all major alliances &amp; low-cost carriers
          </p>
        </WobbleCard>

        {/* Card 4: 50+ Offices */}
        <WobbleCard
          containerClassName="col-span-1 min-h-[280px] bg-slate-800 border border-slate-700"
          className="p-8 flex flex-col justify-between"
        >
          <span className="text-[64px] font-bold text-[#388bfd] leading-none tracking-tight">
            50+
          </span>
          <p className="text-gray-100 text-xl font-medium leading-relaxed mt-4">
            Offices Across our global network
          </p>
        </WobbleCard>

        {/* Card 5: 1,100+ Professionals */}
        <WobbleCard
          containerClassName="col-span-1 min-h-[280px] bg-blue-950 border border-blue-900"
          className="p-8 flex flex-col justify-between"
        >
          <span className="text-[64px] font-bold text-[#60a5fa] leading-none tracking-tight">
            1,100+
          </span>
          <p className="text-gray-100 text-xl font-medium leading-relaxed mt-4">
            Multilingual professionals worldwide
          </p>
        </WobbleCard>

        {/* Card 6: 24x7 Support */}
        <WobbleCard
          containerClassName="col-span-1 min-h-[280px] bg-[#0062f0] border border-blue-400/30"
          className="p-8 flex flex-col justify-between"
        >
          <span className="text-[64px] font-bold text-white leading-none tracking-tight">
            24x7
          </span>
          <div>
            <p className="text-white text-xl font-semibold leading-snug">
              In-person support
            </p>
            <p className="text-blue-100 text-sm mt-1">
              Not automated, not outsourced
            </p>
          </div>
        </WobbleCard>

        {/* Card 7: End-to-End Travel Management */}
        <WobbleCard
          containerClassName="col-span-1 md:col-span-2 lg:col-span-1 min-h-[280px] bg-slate-900 border border-slate-800"
          className="p-8 flex flex-col justify-between"
        >
          <h4 className="text-[32px] font-bold text-white leading-tight">
            End-to-end travel management
          </h4>
          <div className="flex flex-wrap gap-2 mt-6">
            {["Corporate", "Leisure", "MICE", "Logistics"].map((badge, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full bg-[#0062f0] text-white text-sm font-medium"
              >
                {badge}
              </span>
            ))}
          </div>
        </WobbleCard>

        {/* Card 8: cozmobizz */}
        <WobbleCard
          containerClassName="col-span-1 min-h-[280px] bg-gradient-to-br from-[#0062f0] to-[#003896] border border-blue-400/30"
          className="p-8 flex flex-col justify-between"
        >
          <span className="self-start px-4 py-1.5 rounded-full bg-white text-[#0062f0] text-lg font-bold shadow-md">
            cozmobizz
          </span>
          <p className="text-2xl font-bold text-white leading-snug mt-6">
            Proprietary corporate booking platform
          </p>
        </WobbleCard>

        {/* Card 9: Travtrolley */}
        <WobbleCard
          containerClassName="col-span-1 min-h-[280px] bg-indigo-950 border border-indigo-900"
          className="p-8 flex flex-col justify-between"
        >
          <span className="self-start px-4 py-1.5 rounded-full bg-white text-[#0062f0] text-lg font-bold shadow-md">
            Travtrolley
          </span>
          <p className="text-2xl font-bold text-white leading-snug mt-6">
            B2B distribution platform for global agents
          </p>
        </WobbleCard>
      </div>
    </div>
  );
}

export default WhyChooseUsHoverGrid;
