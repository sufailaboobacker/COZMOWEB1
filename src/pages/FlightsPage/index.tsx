import { useState } from "react";
import HeaderNav from "@/components/Header";
import { WobbleCard } from "@/components/ui/wobble-card";

export default function FlightsPage() {
  const [tripType, setTripType] = useState<"round" | "one">("round");
  const [searched, setSearched] = useState(false);
  const [searchData, setSearchData] = useState({
    from: "Dubai (DXB)",
    to: "London (LHR)",
    departure: "2026-08-15",
    returnDate: "2026-08-25",
    passengers: "1 Passenger, Economy",
  });

  return (
    <div className="bg-white min-h-screen font-['Helvetica_Neue:Regular',sans-serif] text-[#05203c]" data-name="Flights Page">
      <HeaderNav />

      {/* Hero Section */}
      <div className="relative bg-[#05203c] text-white pt-[140px] pb-[100px] px-[100px] overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full bg-[#0062e3]/25 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] rounded-full bg-[#0062f0]/20 blur-[100px] pointer-events-none" />

        <div className="max-w-[1520px] mx-auto relative z-10">
          <span className="self-start px-[16px] py-[6px] rounded-full bg-[#0062e3]/20 border border-[#0062e3]/40 text-[#60a5fa] text-[14px] font-bold uppercase tracking-wider mb-[20px] inline-block">
            Official Airline Ticketing &amp; Route Optimization
          </span>

          <h1 className="text-[64px] font-bold leading-[1.1] tracking-[-1.5px] font-['Helvetica_Neue:Bold',sans-serif] mb-[20px]">
            Global <span className="text-[#0062e3] italic font-['Helvetica_Neue:Bold_Italic',sans-serif]">Flight Booking</span>
          </h1>

          <p className="text-[22px] leading-[34px] text-gray-300 font-normal max-w-[850px] mb-[40px]">
            Compare and book flights across 450+ international airlines. Enjoy direct GDS inventory, corporate negotiated tariffs, and Air Arabia GSA exclusive privileges.
          </p>

          {/* Search Box Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-[28px] p-[32px] border border-white/20 shadow-2xl max-w-[1100px]">
            <div className="flex gap-[16px] mb-[20px]">
              <button
                onClick={() => setTripType("round")}
                className={`px-[20px] py-[8px] rounded-full text-[14px] font-bold transition-all cursor-pointer ${
                  tripType === "round" ? "bg-[#0062e3] text-white" : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                Round Trip
              </button>
              <button
                onClick={() => setTripType("one")}
                className={`px-[20px] py-[8px] rounded-full text-[14px] font-bold transition-all cursor-pointer ${
                  tripType === "one" ? "bg-[#0062e3] text-white" : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                One Way
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-[16px] mb-[24px]">
              <div className="bg-white text-[#05203c] p-[16px] rounded-[16px]">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-[4px]">From</label>
                <input
                  type="text"
                  value={searchData.from}
                  onChange={(e) => setSearchData({ ...searchData, from: e.target.value })}
                  className="w-full font-bold text-[16px] focus:outline-none bg-transparent"
                />
              </div>

              <div className="bg-white text-[#05203c] p-[16px] rounded-[16px]">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-[4px]">To</label>
                <input
                  type="text"
                  value={searchData.to}
                  onChange={(e) => setSearchData({ ...searchData, to: e.target.value })}
                  className="w-full font-bold text-[16px] focus:outline-none bg-transparent"
                />
              </div>

              <div className="bg-white text-[#05203c] p-[16px] rounded-[16px]">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-[4px]">Dates</label>
                <input
                  type="text"
                  value={`${searchData.departure} ${tripType === "round" ? `- ${searchData.returnDate}` : ""}`}
                  onChange={(e) => setSearchData({ ...searchData, departure: e.target.value })}
                  className="w-full font-bold text-[16px] focus:outline-none bg-transparent"
                />
              </div>

              <div className="bg-white text-[#05203c] p-[16px] rounded-[16px]">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-[4px]">Passengers</label>
                <input
                  type="text"
                  value={searchData.passengers}
                  onChange={(e) => setSearchData({ ...searchData, passengers: e.target.value })}
                  className="w-full font-bold text-[16px] focus:outline-none bg-transparent"
                />
              </div>
            </div>

            <button
              onClick={() => setSearched(true)}
              className="w-full bg-[#0062e3] text-white font-bold text-[18px] py-[16px] rounded-[18px] hover:bg-blue-700 transition-colors shadow-lg cursor-pointer"
            >
              Search Flights Across 450+ Airlines →
            </button>
          </div>
        </div>
      </div>

      {/* Simulated Search Results or Features */}
      {searched && (
        <div className="py-[40px] px-[100px] bg-blue-50 border-b border-blue-200">
          <div className="max-w-[1520px] mx-auto bg-white rounded-[24px] p-[32px] shadow-md border border-blue-100 flex items-center justify-between">
            <div>
              <span className="text-[#0062e3] font-bold text-[14px] uppercase tracking-wider">Flight Search Results Available</span>
              <h3 className="text-[24px] font-bold text-[#05203c] mt-[4px]">
                {searchData.from} → {searchData.to} (Best Fares Found)
              </h3>
              <p className="text-[#545860] text-[15px] mt-[4px]">
                Our GDS agent will lock in special discounts and send e-tickets directly to your email.
              </p>
            </div>
            <a href="#quote" className="bg-[#0062e3] text-white font-bold px-[28px] py-[12px] rounded-full hover:bg-blue-700 transition-colors">
              Lock Best Price →
            </a>
          </div>
        </div>
      )}

      {/* Value Pillars */}
      <div className="py-[90px] px-[100px] max-w-[1520px] mx-auto">
        <div className="text-center max-w-[750px] mx-auto mb-[60px]">
          <h2 className="text-[44px] font-bold text-[#05203c] font-['Helvetica_Neue:Bold',sans-serif]">
            Why Book Flights With <span className="text-[#0062e3] italic font-['Helvetica_Neue:Bold_Italic',sans-serif]">Cozmo Travel</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[28px]">
          <WobbleCard containerClassName="bg-gradient-to-br from-[#0062e3] to-[#004dc2] text-white p-[36px] min-h-[260px] flex flex-col justify-between">
            <span className="text-[48px] font-bold leading-none">450+</span>
            <div>
              <h3 className="text-[22px] font-bold mb-[8px]">Global Airline Alliances</h3>
              <p className="text-blue-100 text-[15px]">Full GDS access including Star Alliance, Oneworld, SkyTeam, and LCC carriers.</p>
            </div>
          </WobbleCard>

          <WobbleCard containerClassName="bg-slate-900 text-white p-[36px] min-h-[260px] flex flex-col justify-between">
            <span className="text-[48px] font-bold text-[#60a5fa] leading-none">GSA</span>
            <div>
              <h3 className="text-[22px] font-bold mb-[8px]">Official Air Arabia GSA</h3>
              <p className="text-gray-300 text-[15px]">Exclusive baggage allowances, priority seat selection, and direct ticketing access.</p>
            </div>
          </WobbleCard>

          <WobbleCard containerClassName="bg-gradient-to-br from-[#0062e3] via-[#0052c9] to-[#80b3fc] text-white p-[36px] min-h-[260px] flex flex-col justify-between">
            <span className="text-[48px] font-bold leading-none">24/7</span>
            <div>
              <h3 className="text-[22px] font-bold mb-[8px]">Disruption Assistance</h3>
              <p className="text-blue-100 text-[15px]">Instant flight delay monitoring, rebooking, and refund management anytime.</p>
            </div>
          </WobbleCard>
        </div>
      </div>
    </div>
  );
}
