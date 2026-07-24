import HeaderNav from "@/components/Header";
import { WobbleCard } from "@/components/ui/wobble-card";

export default function VisaPage() {
  return (
    <div className="bg-white min-h-screen font-['Helvetica_Neue:Regular',sans-serif] text-[#05203c]" data-name="Visa Page">
      <HeaderNav />

      {/* Hero Section */}
      <div className="relative bg-[#05203c] text-white pt-[140px] pb-[100px] px-[100px] overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full bg-[#0062e3]/25 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] rounded-full bg-[#0062f0]/20 blur-[100px] pointer-events-none" />

        <div className="max-w-[1520px] mx-auto relative z-10">
          <span className="self-start px-[16px] py-[6px] rounded-full bg-[#0062e3]/20 border border-[#0062e3]/40 text-[#60a5fa] text-[14px] font-bold uppercase tracking-wider mb-[20px] inline-block">
            Fast-Track E-Visas &amp; Embassy Consultation
          </span>

          <h1 className="text-[64px] font-bold leading-[1.1] tracking-[-1.5px] font-['Helvetica_Neue:Bold',sans-serif] mb-[20px]">
            Visa <span className="text-[#0062e3] italic font-['Helvetica_Neue:Bold_Italic',sans-serif]">Services</span>
          </h1>

          <p className="text-[22px] leading-[34px] text-gray-300 font-normal max-w-[850px] mb-[40px]">
            Navigating international visa requirements is effortless with Cozmo Travel. End-to-end assistance for Schengen, US, UK, GCC, and Asian tourist &amp; business visas.
          </p>

          <div className="flex flex-wrap gap-[20px]">
            <div className="bg-white/10 backdrop-blur-md px-[28px] py-[16px] rounded-[20px] border border-white/20">
              <span className="text-[32px] font-bold text-[#60a5fa]">99.4%</span>
              <p className="text-[14px] text-gray-300">Approval Success Rate</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-[28px] py-[16px] rounded-[20px] border border-white/20">
              <span className="text-[32px] font-bold text-[#60a5fa]">70+</span>
              <p className="text-[14px] text-gray-300">Destinations Covered</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pillars */}
      <div className="py-[90px] px-[100px] max-w-[1520px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[28px]">
          <WobbleCard containerClassName="bg-gradient-to-br from-[#0062e3] to-[#004dc2] text-white p-[36px] min-h-[260px] flex flex-col justify-between">
            <span className="text-[48px] font-bold leading-none">Express</span>
            <div>
              <h3 className="text-[22px] font-bold mb-[8px]">E-Visa Processing</h3>
              <p className="text-blue-100 text-[15px]">Rapid e-visa generation for UAE, Saudi Arabia, Oman, Turkey, Georgia, and more.</p>
            </div>
          </WobbleCard>

          <WobbleCard containerClassName="bg-slate-900 text-white p-[36px] min-h-[260px] flex flex-col justify-between">
            <span className="text-[48px] font-bold text-[#60a5fa] leading-none">Embassy</span>
            <div>
              <h3 className="text-[22px] font-bold mb-[8px]">Appointment Assistance</h3>
              <p className="text-gray-300 text-[15px]">Schengen, US, and UK visa document preparation &amp; interview scheduling.</p>
            </div>
          </WobbleCard>

          <WobbleCard containerClassName="bg-gradient-to-br from-[#0062e3] via-[#0052c9] to-[#80b3fc] text-white p-[36px] min-h-[260px] flex flex-col justify-between">
            <span className="text-[48px] font-bold leading-none">100%</span>
            <div>
              <h3 className="text-[22px] font-bold mb-[8px]">Document Verification</h3>
              <p className="text-blue-100 text-[15px]">Rigorous pre-checks by certified visa specialists to prevent application rejections.</p>
            </div>
          </WobbleCard>
        </div>
      </div>
    </div>
  );
}
