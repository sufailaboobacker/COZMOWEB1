import HeaderNav from "@/components/Header";
import { WobbleCard } from "@/components/ui/wobble-card";

export default function LogisticsPage() {
  return (
    <div className="bg-white min-h-screen font-['Helvetica_Neue:Regular',sans-serif] text-[#05203c]" data-name="Logistics Page">
      <HeaderNav />

      {/* Hero Section */}
      <div className="relative bg-[#05203c] text-white pt-[140px] pb-[100px] px-[100px] overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full bg-[#0062e3]/25 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] rounded-full bg-[#0062f0]/20 blur-[100px] pointer-events-none" />

        <div className="max-w-[1520px] mx-auto relative z-10">
          <span className="self-start px-[16px] py-[6px] rounded-full bg-[#0062e3]/20 border border-[#0062e3]/40 text-[#60a5fa] text-[14px] font-bold uppercase tracking-wider mb-[20px] inline-block">
            Global Cargo Forwarding &amp; Corporate Event Logistics
          </span>

          <h1 className="text-[64px] font-bold leading-[1.1] tracking-[-1.5px] font-['Helvetica_Neue:Bold',sans-serif] mb-[20px]">
            Enterprise <span className="text-[#0062e3] italic font-['Helvetica_Neue:Bold_Italic',sans-serif]">Logistics</span>
          </h1>

          <p className="text-[22px] leading-[34px] text-gray-300 font-normal max-w-[850px] mb-[40px]">
            Comprehensive freight forwarding, customs clearance, and event logistics management for corporate conventions, MICE exhibitions, and global supply chains.
          </p>

          <div className="flex flex-wrap gap-[20px]">
            <div className="bg-white/10 backdrop-blur-md px-[28px] py-[16px] rounded-[20px] border border-white/20">
              <span className="text-[32px] font-bold text-[#60a5fa]">24/7</span>
              <p className="text-[14px] text-gray-300">Live GPS Shipment Tracking</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-[28px] py-[16px] rounded-[20px] border border-white/20">
              <span className="text-[32px] font-bold text-[#60a5fa]">Air &amp; Sea</span>
              <p className="text-[14px] text-gray-300">Freight Forwarding</p>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Showcase */}
      <div className="py-[90px] px-[100px] max-w-[1520px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[28px]">
          <WobbleCard containerClassName="bg-gradient-to-br from-[#0062e3] to-[#004dc2] text-white p-[36px] min-h-[260px] flex flex-col justify-between">
            <span className="text-[48px] font-bold leading-none">Cargo</span>
            <div>
              <h3 className="text-[22px] font-bold mb-[8px]">Air &amp; Sea Freight</h3>
              <p className="text-blue-100 text-[15px]">International cargo forwarding with customs clearance and door-to-door delivery.</p>
            </div>
          </WobbleCard>

          <WobbleCard containerClassName="bg-slate-900 text-white p-[36px] min-h-[260px] flex flex-col justify-between">
            <span className="text-[48px] font-bold text-[#60a5fa] leading-none">MICE</span>
            <div>
              <h3 className="text-[22px] font-bold mb-[8px]">Event &amp; Exhibition Logistics</h3>
              <p className="text-gray-300 text-[15px]">Specialized transport for convention equipment, trade show booths, and delegate gear.</p>
            </div>
          </WobbleCard>

          <WobbleCard containerClassName="bg-gradient-to-br from-[#0062e3] via-[#0052c9] to-[#80b3fc] text-white p-[36px] min-h-[260px] flex flex-col justify-between">
            <span className="text-[48px] font-bold leading-none">Customs</span>
            <div>
              <h3 className="text-[22px] font-bold mb-[8px]">Warehousing &amp; Clearance</h3>
              <p className="text-blue-100 text-[15px]">Secure airport &amp; seaport warehousing facilities with fast-track customs clearance.</p>
            </div>
          </WobbleCard>
        </div>
      </div>
    </div>
  );
}
