import React from "react";
import { Globe, Target, Diamond, Award, Plane, PhoneCall, Users, Building2, Layers } from "lucide-react";

export interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  component: React.ReactNode;
}

// Slide 1: Cover Page
export function SlideCover() {
  return (
    <div className="relative w-full h-full bg-[#0062E3] text-white flex flex-col justify-between p-12 overflow-hidden select-none">
      {/* Concentric glowing rings background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-[180%] h-[180%] -left-[40%] -top-[40%] absolute" viewBox="0 0 1000 1000">
          <circle cx="200" cy="500" r="150" fill="none" stroke="white" strokeWidth="1.5" />
          <circle cx="200" cy="500" r="250" fill="none" stroke="white" strokeWidth="1.5" />
          <circle cx="200" cy="500" r="350" fill="none" stroke="white" strokeWidth="1.5" />
          <circle cx="200" cy="500" r="450" fill="none" stroke="white" strokeWidth="1.5" />
          <circle cx="200" cy="500" r="550" fill="none" stroke="white" strokeWidth="1.5" />
          <circle cx="200" cy="500" r="650" fill="none" stroke="white" strokeWidth="1.5" />
          <circle cx="200" cy="500" r="750" fill="none" stroke="white" strokeWidth="1.5" />
          <circle cx="200" cy="500" r="850" fill="none" stroke="white" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Decorative Floating Plane */}
      <div className="absolute top-10 left-12 opacity-30 animate-pulse">
        <Plane className="w-12 h-12 text-white transform -rotate-45" />
      </div>

      {/* Header Info */}
      <div className="z-10 mt-6">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold tracking-wider uppercase border border-white/20">
          Corporate Presentation & Brochure
        </span>
      </div>

      {/* Center Branding */}
      <div className="z-10 my-auto flex flex-col items-end w-full pr-8">
        {/* Cozmo Travel Logo Container */}
        <div className="border-2 border-white rounded-full px-8 py-4 backdrop-blur-sm shadow-2xl flex items-center gap-3 group transition-transform hover:scale-105">
          <span className="font-extrabold text-3xl md:text-4xl tracking-tight text-white font-sans">
            cozmo<span className="font-light">travel</span>
          </span>
          <span className="text-[10px] uppercase border border-white/60 rounded px-1 align-top self-start font-mono">
            ®
          </span>
        </div>
        <p className="text-white/80 text-sm mt-3 font-medium tracking-wide">
          Empowering Seamless Corporate Journeys Worldwide
        </p>
      </div>

      {/* Footer info */}
      <div className="z-10 flex justify-between items-center text-xs text-white/70 border-t border-white/15 pt-4">
        <span>Air Arabia Group Member</span>
        <span>www.cozmotravel.com</span>
      </div>
    </div>
  );
}

// Slide 2: Vision, Mission & Values
export function SlideVisionMissionValues() {
  return (
    <div className="relative w-full h-full bg-white text-slate-800 p-10 flex flex-col justify-between overflow-hidden select-none">
      {/* Top Vision & Mission Grid */}
      <div className="grid grid-cols-2 gap-10">
        {/* Vision */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-[#0062E3] flex items-center justify-center text-[#0062E3]">
              <Diamond className="w-5 h-5 fill-[#0062E3]/10" />
            </div>
            <h3 className="text-2xl font-serif italic text-[#0062E3] font-semibold">Vision</h3>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed pl-13">
            To be a trusted leader and partner in global travel.
          </p>
        </div>

        {/* Mission */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-[#0062E3] flex items-center justify-center text-[#0062E3]">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-serif italic text-[#0062E3] font-semibold">Mission</h3>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed pl-13">
            To deliver exceptional and affordable travel experiences through quality service, a diverse portfolio of products, and innovative solutions.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="mt-8 flex flex-col gap-6 relative">
        {/* Horizontal Line with Values Badge */}
        <div className="relative flex items-center justify-start w-full">
          <div className="w-full h-0.5 bg-[#0062E3]" />
          <div className="absolute left-6 bg-[#0062E3] text-white px-8 py-2 rounded-full font-serif italic text-lg font-medium shadow-md">
            Values
          </div>
        </div>

        {/* Soft Blue Radial Shadow Effect */}
        <div className="w-full h-12 bg-blue-400/20 blur-xl rounded-full absolute -bottom-4 -z-0" />

        {/* 4 Capsule Shapes */}
        <div className="grid grid-cols-4 gap-4 mt-6 z-10">
          {[
            { label: "Ownership", color: "from-blue-100/90 via-blue-50 to-blue-200/40" },
            { label: "Communication", color: "from-blue-100/90 via-blue-50 to-blue-200/40" },
            { label: "People", color: "from-blue-100/90 via-blue-50 to-blue-200/40" },
            { label: "Innovation", color: "from-blue-100/90 via-blue-50 to-blue-200/40" },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`h-48 rounded-[60px] bg-gradient-to-b ${item.color} border border-blue-200/60 shadow-lg flex items-center justify-center text-center p-4 hover:scale-[1.03] transition-transform duration-300`}
            >
              <span className="text-[#0052CC] font-bold text-lg leading-snug">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-xs text-slate-400 font-mono text-right mt-2">Page 02</div>
    </div>
  );
}

// Slide 3: Network
export function SlideNetwork() {
  return (
    <div className="relative w-full h-full bg-white text-slate-800 p-8 flex flex-col justify-between overflow-hidden select-none">
      {/* Title */}
      <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
        <Globe className="w-7 h-7 text-[#0062E3]" />
        <h2 className="text-2xl font-serif italic text-[#0062E3] font-semibold">Network</h2>
      </div>

      <div className="grid grid-cols-12 gap-4 my-auto">
        {/* Country Lists Column (8 cols) */}
        <div className="col-span-8 grid grid-cols-3 gap-3 text-xs leading-snug">
          {/* UAE Column */}
          <div className="space-y-1.5">
            <h4 className="font-serif italic font-bold text-[#0062E3] text-sm">United Arab Emirates</h4>
            <div className="pl-1 space-y-1 text-slate-700">
              <p className="font-medium text-slate-900">Sharjah</p>
              <p className="text-[11px] text-slate-500 pl-2">Head Quarters</p>
              <p className="text-[11px] text-slate-500 pl-2">Al Dhaid</p>
              <p className="text-[11px] text-slate-500 pl-2">Muwaileh</p>

              <p className="font-medium text-slate-900 pt-1">Dubai</p>
              <p className="text-[11px] text-slate-500 pl-2">Corporate Office</p>
              <p className="text-[11px] text-slate-500 pl-2">Karama</p>
              <p className="text-[11px] text-slate-500 pl-2">Shindagha City Centre</p>
            </div>
          </div>

          {/* UAE Extended & KSA */}
          <div className="space-y-1.5">
            <div className="space-y-1 text-slate-700">
              <p className="font-medium text-slate-900">Abu Dhabi</p>
              <p className="text-[11px] text-slate-500 pl-2">Hamdan St</p>
              <p className="text-[11px] text-slate-500 pl-2">Mussaffah Ind</p>

              <p className="font-medium text-slate-900 pt-1">Ajman</p>
              <p className="text-[11px] text-slate-500 pl-2">Ajman HQ</p>
              <p className="text-[11px] text-slate-500 pl-2">Safeer Mall Ajman</p>
            </div>

            <div className="pt-2">
              <h4 className="font-serif italic font-bold text-[#0062E3] text-sm">Saudi Arabia</h4>
              <p className="text-[11px] text-slate-600 pl-1">Riyadh, Jeddah, Dammam</p>
            </div>

            <div className="pt-1">
              <h4 className="font-serif italic font-bold text-[#0062E3] text-sm">Oman</h4>
              <p className="text-[11px] text-slate-600 pl-1">Muscat, Salalah</p>
            </div>
          </div>

          {/* Other MENA & India */}
          <div className="space-y-1.5">
            <p className="font-medium text-slate-900">Al Ain, Fujairah</p>
            <p className="font-medium text-slate-900">Umm Al Quwain</p>
            <p className="font-medium text-slate-900">Ras Al Khaimah</p>

            <div className="pt-1">
              <h4 className="font-serif italic font-bold text-[#0062E3] text-sm">Bahrain</h4>
              <p className="text-[11px] text-slate-600 pl-1">Manama HQ, Sitra Mall</p>
            </div>

            <div className="pt-1">
              <h4 className="font-serif italic font-bold text-[#0062E3] text-sm">Qatar</h4>
              <p className="text-[11px] text-slate-600 pl-1">Doha HQ, Kharaitiyat</p>
            </div>

            <div className="pt-1">
              <h4 className="font-serif italic font-bold text-[#0062E3] text-sm">India</h4>
              <p className="text-[11px] text-slate-600 pl-1">Mumbai HQ, Pune, Delhi, Kerala +5</p>
            </div>

            <div className="flex gap-4 pt-1">
              <div>
                <h4 className="font-serif italic font-bold text-[#0062E3] text-xs">Egypt</h4>
                <p className="text-[10px] text-slate-600">Cairo</p>
              </div>
              <div>
                <h4 className="font-serif italic font-bold text-[#0062E3] text-xs">Morocco</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Flight Trajectory Graphic Column (4 cols) */}
        <div className="col-span-4 relative flex items-center justify-center min-h-[220px]">
          {/* Stylized Vector World Map Route */}
          <svg className="w-full h-full opacity-80" viewBox="0 0 300 200" fill="none">
            <path d="M 20 180 Q 80 120 140 140 T 260 80" stroke="#0062E3" strokeWidth="2" fill="none" strokeDasharray="4 4" />
            <path d="M 40 120 Q 120 50 200 90 T 280 40" stroke="#94A3B8" strokeWidth="1.5" fill="none" />
            <path d="M 80 190 Q 160 160 220 100" stroke="#0062E3" strokeWidth="2" fill="none" />
            {/* Planes */}
            <g transform="translate(140, 140) rotate(-20)">
              <path d="M0,0 L10,5 L0,10 L3,5 Z" fill="#0062E3" />
            </g>
            <g transform="translate(260, 80) rotate(-45)">
              <path d="M0,0 L12,6 L0,12 L4,6 Z" fill="#0062E3" />
            </g>
            <g transform="translate(200, 90) rotate(15)">
              <path d="M0,0 L10,5 L0,10 L3,5 Z" fill="#64748B" />
            </g>
          </svg>

          {/* Ambient Glow */}
          <div className="absolute right-0 bottom-0 w-36 h-36 bg-blue-400/20 rounded-full blur-2xl pointer-events-none" />
        </div>
      </div>

      <div className="text-xs text-slate-400 font-mono text-right">Page 03</div>
    </div>
  );
}

// Slide 4: Bento Grid Highlights
export function SlideBentoHighlights() {
  return (
    <div className="relative w-full h-full bg-slate-50 text-slate-800 p-6 flex flex-col justify-between overflow-hidden select-none">
      <div className="grid grid-cols-4 grid-rows-3 gap-3 h-full pb-6">
        {/* Main Blue Box (2 cols x 2 rows) */}
        <div className="col-span-1 row-span-2 bg-[#0062E3] text-white p-5 rounded-2xl flex flex-col justify-between shadow-md">
          {/* Bird Icon */}
          <div className="w-12 h-12 text-white/90">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
              <path d="M 10 50 Q 40 10 90 20 Q 50 40 10 50 Z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold leading-tight">Owned by Air Arabia PJSC</h3>
            <p className="text-white/80 text-xs mt-1 font-medium">& Official GSA</p>
          </div>
        </div>

        {/* 10 Countries */}
        <div className="col-span-1 bg-[#E8ECEF] p-4 rounded-2xl flex flex-col justify-between shadow-sm">
          <span className="text-3xl font-extrabold text-[#0062E3]">10</span>
          <p className="text-xs font-semibold text-slate-700 leading-tight">Countries across MENA & India</p>
        </div>

        {/* Direct access to 130+ airlines */}
        <div className="col-span-1 bg-[#E8F1FD] p-4 rounded-2xl flex flex-col justify-between shadow-sm">
          <span className="text-xs text-slate-600 font-medium">Direct access to</span>
          <span className="text-3xl font-extrabold text-[#0062E3]">130+</span>
          <p className="text-[11px] text-slate-600 leading-tight">airlines across all alliances & low-cost carriers</p>
        </div>

        {/* IATA Accredited */}
        <div className="col-span-1 bg-[#E8F1FD] p-4 rounded-2xl flex flex-col justify-between shadow-sm">
          <div className="w-8 h-8 rounded-full bg-blue-500/10 text-[#0062E3] flex items-center justify-center">
            <Award className="w-5 h-5" />
          </div>
          <p className="text-xs font-semibold text-slate-700 leading-tight">IATA accredited travel company since 2010</p>
        </div>

        {/* 50+ Offices */}
        <div className="col-span-1 bg-[#C6DDFD] p-4 rounded-2xl flex flex-col justify-between shadow-sm">
          <span className="text-3xl font-extrabold text-[#0052CC]">50+</span>
          <p className="text-xs font-semibold text-slate-800 leading-tight">Offices Across our network</p>
        </div>

        {/* 1,100+ Multilingual */}
        <div className="col-span-1 bg-[#E8F1FD] p-4 rounded-2xl flex flex-col justify-between shadow-sm">
          <span className="text-3xl font-extrabold text-[#0062E3]">1,100+</span>
          <p className="text-xs font-semibold text-slate-700 leading-tight">Multilingual professionals</p>
        </div>

        {/* 24x7 Support */}
        <div className="col-span-1 bg-[#E8F1FD] p-4 rounded-2xl flex flex-col justify-between shadow-sm">
          <span className="text-3xl font-extrabold text-[#0062E3]">24x7</span>
          <p className="text-[11px] text-slate-600 leading-tight">in-person support not automated, not outsourced</p>
        </div>

        {/* Bottom Row Left: End-to-end travel management */}
        <div className="col-span-2 bg-[#E8F1FD] p-4 rounded-2xl flex flex-col justify-between shadow-sm">
          <h4 className="text-sm font-bold text-slate-800">End-to-end travel management</h4>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {["Corporate", "Leisure", "MICE", "Logistics"].map((p, idx) => (
              <span key={idx} className="bg-[#0062E3] text-white text-[11px] px-3 py-1 rounded-full font-medium">
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Row Mid: cozmobizz */}
        <div className="col-span-1 bg-[#0062E3] text-white p-4 rounded-2xl flex flex-col justify-between shadow-sm">
          <p className="text-xs font-semibold leading-tight">Proprietary corporate booking platform</p>
          <span className="bg-white text-[#0062E3] text-[11px] font-bold px-3 py-1 rounded-full text-center self-start mt-2 shadow-sm">
            cozmobizz
          </span>
        </div>

        {/* Bottom Row Right: Travtrolley */}
        <div className="col-span-1 bg-[#0052CC] text-white p-4 rounded-2xl flex flex-col justify-between shadow-sm">
          <p className="text-xs font-semibold leading-tight">B2B distribution platform</p>
          <span className="bg-white text-[#0052CC] text-[11px] font-bold px-3 py-1 rounded-full text-center self-start mt-2 shadow-sm">
            Travtrolley
          </span>
        </div>
      </div>

      <div className="text-xs text-slate-400 font-mono text-right">Page 04</div>
    </div>
  );
}

// Slide 5: Who We Are
export function SlideWhoWeAre() {
  return (
    <div className="relative w-full h-full bg-[#0062E3] text-white flex overflow-hidden select-none">
      {/* Left Photo Container */}
      <div className="w-1/2 h-full relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=1200&q=80"
          alt="Hiker writing on mountain"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0062E3]/40" />
      </div>

      {/* Right Content Container */}
      <div className="w-1/2 h-full p-10 flex flex-col justify-center gap-6 z-10">
        <h2 className="text-3xl font-extrabold tracking-wide uppercase font-sans">
          WHO WE ARE
        </h2>
        <p className="text-white/90 text-sm leading-relaxed font-sans">
          Established in January 2010, Cozmo Travel is a full-service travel management company offering flights, holidays, hotels, visa services, and corporate travel management. The company operates across 10 countries, supported by a multilingual team and a 24/7 call centre.
        </p>
        <p className="text-white/90 text-sm leading-relaxed font-sans">
          Cozmo Travel is part of the Air Arabia Group and serves as the airline's official General Sales Agent. This positions us within one of the region's leading aviation groups, with the governance and operational standards that come with it.
        </p>

        <div className="pt-4 border-t border-white/20 flex justify-between items-center text-xs text-white/70">
          <span>Air Arabia Group</span>
          <span className="font-mono">Page 05</span>
        </div>
      </div>
    </div>
  );
}

export const CORPORATE_SLIDES: SlideData[] = [
  {
    id: 1,
    title: "Cover",
    subtitle: "Cozmo Travel Brochure",
    component: <SlideCover />,
  },
  {
    id: 2,
    title: "Vision & Values",
    subtitle: "Core Principles & Pillars",
    component: <SlideVisionMissionValues />,
  },
  {
    id: 3,
    title: "Network",
    subtitle: "Regional Presence & Offices",
    component: <SlideNetwork />,
  },
  {
    id: 4,
    title: "Highlights",
    subtitle: "Bento Grid Statistics",
    component: <SlideBentoHighlights />,
  },
  {
    id: 5,
    title: "Who We Are",
    subtitle: "Company Profile & Background",
    component: <SlideWhoWeAre />,
  },
];
