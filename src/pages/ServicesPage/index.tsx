import { useState } from "react";
import HeaderNav from "@/components/Header";
import { WobbleCard } from "@/components/ui/wobble-card";

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  icon: JSX.Element;
  badge: string;
  description: string;
  features: string[];
  stats: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "flights",
    title: "Flight Booking",
    subtitle: "Global Airline Ticketing & Route Optimization",
    tagline: "Compare and book flights across 450+ international airlines at guaranteed competitive rates.",
    badge: "450+ Airlines",
    stats: "10M+ Annual Seats Booked",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description: "Cozmo Travel provides direct GDS integration with leading global airlines, low-cost carriers, and regional partners. Enjoy flexible seat selection, real-time fare alerts, and automated multi-city itineraries.",
    features: [
      "Real-time GDS inventory & instant ticket issuance",
      "Special corporate negotiated tariffs & Group bookings",
      "Flexible rebooking, seat selection & baggage add-ons",
      "24/7 flight disruption monitoring & re-accommodation",
    ],
  },
  {
    id: "hotels",
    title: "Hotel Reservations",
    subtitle: "Luxury Resorts, Boutique & Business Stays",
    tagline: "Access over 500,000 verified hotel properties worldwide with exclusive rate upgrades.",
    badge: "500K+ Hotels",
    stats: "98% Satisfaction Rating",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4m-4-8a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 01-1 1h-2a1 1 0 01-1-1v-1z" />
      </svg>
    ),
    description: "From 5-star international luxury chains to executive city hotels and family holiday resorts, our accommodation portfolio ensures seamless check-in, complimentary breakfast options, and free cancellation flexibilities.",
    features: [
      "Direct API integration with global hotel chains",
      "Complimentary room upgrades & VIP amenities",
      "Flexible pay-at-hotel and deferred corporate billing",
      "Verified guest reviews & location safety ratings",
    ],
  },
  {
    id: "visa",
    title: "Visa Services",
    subtitle: "Fast-Track Global Visa Assistance & E-Visas",
    tagline: "End-to-end visa consultation and processing for tourist, business, and transit visas.",
    badge: "99.4% Approval Rate",
    stats: "70+ Destinations Served",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description: "Navigating international visa requirements is effortless with Cozmo Travel. Our dedicated visa specialists assist with document verification, embassy appointment scheduling, express e-visas, and passport tracking.",
    features: [
      "Express Schengen, US, UK, GCC & Asia visa guidance",
      "Document pre-screening & error-free application review",
      "Embassy appointment booking & interview preparation",
      "Real-time SMS & email application status tracking",
    ],
  },
  {
    id: "holidays",
    title: "Holiday Packages",
    subtitle: "Bespoke Leisure Expeditions & Tour Packages",
    tagline: "Tailor-made vacation packages designed around destination, budget, and travel style.",
    badge: "Custom Travel",
    stats: "2,500+ Curated Itineraries",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 11-4.243-4.243 3 3 0 014.243 4.243z" />
      </svg>
    ),
    description: "Discover handcrafted holiday experiences across Asia, Europe, Africa, and the Americas. Packages combine flights, luxury hotel stays, guided sightseeing tours, local transfers, and unique experiential activities.",
    features: [
      "Honeymoon, family, adventure & luxury getaway packages",
      "Dedicated personal travel concierge assistance",
      "Inclusive airport transfers & private guided tours",
      "Easy installment payment options available",
    ],
  },
  {
    id: "insurance",
    title: "Travel Insurance",
    subtitle: "Comprehensive Medical & Trip Cancellation Shield",
    tagline: "Protect your journey against medical emergencies, flight delays, lost luggage, and trip cancellations.",
    badge: "100% DigiCert Secured",
    stats: "Instant Policy Generation",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    description: "Enjoy peace of mind wherever you travel. Cozmo Travel insurance policies provide comprehensive coverage including international emergency medical expenses, baggage loss reimbursement, and 24/7 assistance hotlines.",
    features: [
      "Instant e-policy issuance valid for international visas",
      "Coverage for medical emergencies & evacuation",
      "Trip delay, cancellation & lost luggage compensation",
      "Single-trip & annual multi-trip plan options",
    ],
  },
  {
    id: "cars",
    title: "Car Rentals",
    subtitle: "Chauffeur & Self-Drive Worldwide Mobility",
    tagline: "Rent premium vehicles, luxury sedans, and SUVs with flexible pickup and drop-off locations.",
    badge: "Global Fleet",
    stats: "150+ Airport Locations",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8m-8 4h8m-9 8h10a2 2 0 002-2V9a2 2 0 00-2-2h-1L14 4H10L8.5 7H7a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    description: "Book airport transfers, executive chauffeur rides, or self-drive rentals with top global providers like Hertz, Avis, Uber Enterprise, and local transport operators across major cities worldwide.",
    features: [
      "Zero hidden fee car rental quotes with collision coverage",
      "Executive airport transfer chauffeur service",
      "Wide selection: Economy, Luxury, Electric & Van rentals",
      "Flexible cancelation up to 24 hours prior to pickup",
    ],
  },
  {
    id: "logistics",
    title: "Logistics",
    subtitle: "Enterprise Cargo, Event & Supply Chain Mobility",
    tagline: "Comprehensive logistics support for corporate events, MICE exhibitions, and global cargo forwarding.",
    badge: "Global Freight",
    stats: "24/7 Cargo Tracking",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    description: "Our dedicated logistics division delivers tailored freight forwarding, venue equipment transport, corporate event logistics, and specialized handling for international conventions and business delegacy.",
    features: [
      "Air cargo & sea freight forwarding solutions",
      "MICE & corporate event logistics management",
      "Customs clearance & warehousing support",
      "End-to-end real-time shipment GPS tracking",
    ],
  },
];

export default function ServicesPage() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>("flights");
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const currentService = SERVICES_DATA.find((s) => s.id === selectedServiceId) ?? SERVICES_DATA[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryForm.name || !inquiryForm.email) return;
    setInquirySubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen font-['Helvetica_Neue:Regular',sans-serif] text-[#05203c]" data-name="Services Page">
      {/* Navigation Header */}
      <HeaderNav />

      {/* Hero Section */}
      <div className="relative bg-[#05203c] text-white pt-[140px] pb-[90px] px-[100px] overflow-hidden">
        {/* Decorative background glows */}
        <div className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full bg-[#0062e3]/25 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] rounded-full bg-[#0062f0]/20 blur-[100px] pointer-events-none" />

        <div className="max-w-[1520px] mx-auto relative z-10">
          <div className="flex flex-col gap-[20px] max-w-[900px]">
            <span className="self-start px-[16px] py-[6px] rounded-full bg-[#0062e3]/20 border border-[#0062e3]/40 text-[#60a5fa] text-[14px] font-bold uppercase tracking-wider">
              Comprehensive Travel &amp; Hospitality
            </span>

            <h1 className="text-[64px] font-bold leading-[1.1] tracking-[-1.5px] font-['Helvetica_Neue:Bold',sans-serif]">
              Our <span className="text-[#0062e3] italic font-['Helvetica_Neue:Bold_Italic',sans-serif]">Services</span>
            </h1>

            <p className="text-[22px] leading-[34px] text-gray-300 font-normal">
              Experience seamless, end-to-end travel solutions powered by Cozmo Travel. From global airline ticketing to luxury hotel stays, visa assistance, and corporate logistics.
            </p>

            <div className="flex flex-wrap gap-[30px] pt-[20px]">
              <div className="flex items-center gap-[12px]">
                <div className="w-[12px] h-[12px] rounded-full bg-[#0062e3]" />
                <span className="text-[16px] font-medium text-gray-200">100% DigiCert Secured</span>
              </div>
              <div className="flex items-center gap-[12px]">
                <div className="w-[12px] h-[12px] rounded-full bg-[#0062e3]" />
                <span className="text-[16px] font-medium text-gray-200">24/7 Dedicated Support</span>
              </div>
              <div className="flex items-center gap-[12px]">
                <div className="w-[12px] h-[12px] rounded-full bg-[#0062e3]" />
                <span className="text-[16px] font-medium text-gray-200">Official Air Arabia GSA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive Showcase (Design System Layout) */}
      <div className="py-[90px] px-[100px] max-w-[1720px] mx-auto">
        <div className="text-center max-w-[800px] mx-auto mb-[60px]">
          <h2 className="text-[48px] font-bold tracking-tight text-[#05203c] mb-[16px] font-['Helvetica_Neue:Bold',sans-serif]">
            Everything You Need For Your <span className="text-[#0062e3] italic font-['Helvetica_Neue:Bold_Italic',sans-serif]">Next Journey</span>
          </h2>
          <p className="text-[19px] text-[#545860] leading-[30px]">
            Select a service below to explore features, direct booking flexibilities, and personalized travel management options.
          </p>
        </div>

        {/* 2-Column Interactive Master-Detail matching User Image Design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px] bg-[#f8fafc] rounded-[32px] p-[40px] border border-gray-200/80 shadow-sm">
          {/* Left Navigation Sidebar (7 Services List matching user's uploaded image style) */}
          <div className="lg:col-span-4 flex flex-col gap-[8px]">
            <h3 className="text-[14px] font-bold uppercase tracking-wider text-gray-400 px-[20px] mb-[8px]">
              Services Directory
            </h3>

            {SERVICES_DATA.map((service) => {
              const isSelected = service.id === selectedServiceId;

              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`flex items-center justify-between px-[24px] py-[18px] rounded-[20px] transition-all cursor-pointer text-left group ${
                    isSelected
                      ? "bg-white text-[#0062e3] shadow-md border border-[#0062e3]/20 scale-[1.02]"
                      : "bg-transparent text-[#05203c] hover:bg-white/70 hover:text-[#0062e3]"
                  }`}
                >
                  <div className="flex items-center gap-[16px]">
                    <div className={`p-[10px] rounded-[14px] transition-colors ${
                      isSelected ? "bg-[#0062e3]/10 text-[#0062e3]" : "bg-gray-100 text-gray-500 group-hover:text-[#0062e3] group-hover:bg-blue-50"
                    }`}>
                      {service.icon}
                    </div>
                    <span className="text-[20px] font-semibold font-['Helvetica_Neue:Bold',sans-serif]">
                      {service.title}
                    </span>
                  </div>

                  <svg
                    className={`w-[20px] h-[20px] transition-transform ${
                      isSelected ? "text-[#0062e3] translate-x-1" : "text-gray-400 group-hover:text-[#0062e3]"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              );
            })}
          </div>

          {/* Right Detail Card Panel */}
          <div className="lg:col-span-8 bg-white rounded-[28px] p-[44px] border border-gray-200/80 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-[16px] mb-[24px]">
                <div className="flex items-center gap-[16px]">
                  <div className="p-[14px] rounded-[20px] bg-[#0062e3] text-white shadow-md">
                    {currentService.icon}
                  </div>
                  <div>
                    <h3 className="text-[32px] font-bold text-[#05203c] font-['Helvetica_Neue:Bold',sans-serif]">
                      {currentService.title}
                    </h3>
                    <p className="text-[16px] text-gray-500 font-medium">
                      {currentService.subtitle}
                    </p>
                  </div>
                </div>

                <span className="px-[16px] py-[8px] rounded-full bg-blue-50 text-[#0062e3] text-[14px] font-bold uppercase tracking-wider">
                  {currentService.badge}
                </span>
              </div>

              <p className="text-[20px] text-[#2d2c2b] leading-[32px] font-normal mb-[32px]">
                {currentService.description}
              </p>

              <h4 className="text-[18px] font-bold text-[#05203c] mb-[18px] uppercase tracking-wider font-['Helvetica_Neue:Bold',sans-serif]">
                Key Features &amp; Capabilities
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] mb-[40px]">
                {currentService.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-[12px] p-[16px] rounded-[16px] bg-[#f8fafc] border border-gray-100">
                    <div className="w-[22px] h-[22px] rounded-full bg-[#0062e3] text-white flex items-center justify-center text-[12px] font-bold shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span className="text-[16px] text-[#545860] leading-[24px] font-medium">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div className="flex flex-wrap items-center justify-between gap-[20px] pt-[24px] border-t border-gray-100">
              <div className="flex items-center gap-[12px]">
                <div className="w-[10px] h-[10px] rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[15px] font-bold text-gray-600">
                  {currentService.stats}
                </span>
              </div>

              <a
                href="#inquiry"
                className="bg-[#0062e3] text-white font-bold text-[16px] px-[32px] py-[14px] rounded-full shadow-lg hover:bg-blue-700 hover:scale-[1.03] transition-all"
              >
                Inquire For {currentService.title} →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Wobble Cards Grid Showcase */}
      <div className="py-[60px] px-[100px] max-w-[1720px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-[50px]">
          <h2 className="text-[42px] font-bold text-[#05203c] font-['Helvetica_Neue:Bold',sans-serif]">
            Why Book With <span className="text-[#0062e3] italic font-['Helvetica_Neue:Bold_Italic',sans-serif]">Cozmo Travel</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          <WobbleCard containerClassName="bg-gradient-to-br from-[#0062e3] to-[#004dc2] text-white p-[36px] min-h-[260px] flex flex-col justify-between">
            <span className="text-[48px] font-bold leading-none">0%</span>
            <div>
              <h3 className="text-[22px] font-bold mb-[8px]">Zero Hidden Fees</h3>
              <p className="text-blue-100 text-[15px]">Transparent pricing across all flight, hotel, and visa bookings with instant receipt issuing.</p>
            </div>
          </WobbleCard>

          <WobbleCard containerClassName="bg-slate-900 text-white p-[36px] min-h-[260px] flex flex-col justify-between">
            <span className="text-[48px] font-bold text-[#60a5fa] leading-none">24/7</span>
            <div>
              <h3 className="text-[22px] font-bold mb-[8px]">In-Person Global Support</h3>
              <p className="text-gray-300 text-[15px]">Multi-lingual travel consultants available 24/7 via phone, WhatsApp, and physical outlets.</p>
            </div>
          </WobbleCard>

          <WobbleCard containerClassName="bg-gradient-to-br from-[#0062e3] via-[#0052c9] to-[#80b3fc] text-white p-[36px] min-h-[260px] flex flex-col justify-between">
            <span className="text-[48px] font-bold leading-none">GSA</span>
            <div>
              <h3 className="text-[22px] font-bold mb-[8px]">Air Arabia Official Partner</h3>
              <p className="text-blue-100 text-[15px]">Direct access to preferred routes, baggage allowances, and exclusive group pricing tariffs.</p>
            </div>
          </WobbleCard>
        </div>
      </div>

      {/* Interactive Service Inquiry Form Section */}
      <div id="inquiry" className="py-[90px] px-[100px] bg-[#f8fafc] border-t border-gray-200/80">
        <div className="max-w-[1000px] mx-auto bg-white rounded-[32px] p-[56px] shadow-xl border border-gray-200/80">
          <div className="text-center max-w-[600px] mx-auto mb-[40px]">
            <h2 className="text-[36px] font-bold text-[#05203c] font-['Helvetica_Neue:Bold',sans-serif] mb-[12px]">
              Ready To Plan Your <span className="text-[#0062e3] italic font-['Helvetica_Neue:Bold_Italic',sans-serif]">Trip?</span>
            </h2>
            <p className="text-[17px] text-[#545860]">
              Submit your details below and a Cozmo Travel expert will get back to you within 30 minutes with custom quotes.
            </p>
          </div>

          {inquirySubmitted ? (
            <div className="bg-blue-50 border border-blue-200 text-[#0062e3] p-[40px] rounded-[24px] text-center">
              <div className="w-[60px] h-[60px] rounded-full bg-[#0062e3] text-white flex items-center justify-center mx-auto mb-[16px] text-[28px] font-bold">
                ✓
              </div>
              <h3 className="text-[26px] font-bold mb-[8px]">Inquiry Received Successfully!</h3>
              <p className="text-[16px] text-gray-600 mb-[24px]">
                Thank you, {inquiryForm.name}! Our dedicated consultant will contact you at {inquiryForm.email} shortly.
              </p>
              <button
                onClick={() => {
                  setInquirySubmitted(false);
                  setInquiryForm({ name: "", email: "", phone: "", notes: "" });
                }}
                className="bg-[#0062e3] text-white font-bold px-[28px] py-[12px] rounded-full hover:bg-blue-700 transition-colors"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                <div>
                  <label className="block text-[14px] font-bold text-[#05203c] uppercase tracking-wider mb-[8px]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiryForm.name}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                    placeholder="e.g. Sufail Ahmed"
                    className="w-full px-[20px] py-[14px] rounded-[16px] border border-gray-200 bg-[#f8fafc] text-[16px] text-[#05203c] focus:outline-none focus:border-[#0062e3] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[14px] font-bold text-[#05203c] uppercase tracking-wider mb-[8px]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={inquiryForm.email}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                    placeholder="e.g. sufail@example.com"
                    className="w-full px-[20px] py-[14px] rounded-[16px] border border-gray-200 bg-[#f8fafc] text-[16px] text-[#05203c] focus:outline-none focus:border-[#0062e3] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                <div>
                  <label className="block text-[14px] font-bold text-[#05203c] uppercase tracking-wider mb-[8px]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={inquiryForm.phone}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                    placeholder="+971 50 123 4567"
                    className="w-full px-[20px] py-[14px] rounded-[16px] border border-gray-200 bg-[#f8fafc] text-[16px] text-[#05203c] focus:outline-none focus:border-[#0062e3] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[14px] font-bold text-[#05203c] uppercase tracking-wider mb-[8px]">
                    Selected Service
                  </label>
                  <select
                    value={selectedServiceId}
                    onChange={(e) => setSelectedServiceId(e.target.value)}
                    className="w-full px-[20px] py-[14px] rounded-[16px] border border-gray-200 bg-[#f8fafc] text-[16px] text-[#05203c] focus:outline-none focus:border-[#0062e3] focus:bg-white transition-colors cursor-pointer"
                  >
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title} ({s.badge})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[14px] font-bold text-[#05203c] uppercase tracking-wider mb-[8px]">
                  Travel Details / Notes
                </label>
                <textarea
                  rows={4}
                  value={inquiryForm.notes}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, notes: e.target.value })}
                  placeholder="Specify destination, preferred dates, number of travelers, or special requirements..."
                  className="w-full px-[20px] py-[14px] rounded-[16px] border border-gray-200 bg-[#f8fafc] text-[16px] text-[#05203c] focus:outline-none focus:border-[#0062e3] focus:bg-white transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0062e3] text-white font-bold text-[18px] py-[16px] rounded-[20px] shadow-lg hover:bg-blue-700 hover:scale-[1.01] transition-all cursor-pointer"
              >
                Send Free Quote Inquiry →
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
