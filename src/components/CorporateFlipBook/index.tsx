import React from "react";
import { FlipBookViewer } from "./FlipBookViewer";

export function CorporateFlipBookSection() {
  return (
    <section className="w-full max-w-[1723px] mx-auto px-4 my-12">
      <div className="text-center mb-8">
        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-[#0062E3] text-xs font-bold tracking-wider uppercase mb-3">
          Interactive Presentation
        </span>
        <h2 className="text-4xl font-extrabold text-[#05203C] tracking-tight">
          Cozmo Travel Corporate Flipbook
        </h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto mt-2">
          Explore our vision, global network, capabilities, and Air Arabia PJSC partnership in this interactive 3D digital brochure.
        </p>
      </div>

      <FlipBookViewer />
    </section>
  );
}

export { FlipBookViewer };
export default CorporateFlipBookSection;
