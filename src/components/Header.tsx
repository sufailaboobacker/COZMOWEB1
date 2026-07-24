import { useState, useRef, useEffect } from "react";
import imgImageCozmoTravelLogo from "@/assets/images/logos/cozmo-travel-logo.png";

function ServicesDropdown() {
  const items = [
    {
      title: "Flight Booking",
      icon: (
        <svg className="w-[22px] h-[22px] text-[#5e6978]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Hotel Reservations",
      icon: (
        <svg className="w-[22px] h-[22px] text-[#5e6978]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4m-4-8a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 01-1 1h-2a1 1 0 01-1-1v-1z" />
        </svg>
      ),
    },
    {
      title: "Visa Services",
      icon: (
        <svg className="w-[22px] h-[22px] text-[#5e6978]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Holiday Packages",
      icon: (
        <svg className="w-[22px] h-[22px] text-[#5e6978]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 11-4.243-4.243 3 3 0 014.243 4.243z" />
        </svg>
      ),
    },
    {
      title: "Travel Insurance",
      icon: (
        <svg className="w-[22px] h-[22px] text-[#5e6978]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Car Rentals",
      icon: (
        <svg className="w-[22px] h-[22px] text-[#5e6978]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Logistics",
      icon: (
        <svg className="w-[22px] h-[22px] text-[#5e6978]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
  ];

  return (
    <div className="absolute top-[90px] right-[270px] z-50 flex rounded-[28px] overflow-hidden bg-[#f4f5f7] border border-gray-200/60 w-[584px] h-[377px] transition-all transform duration-200 animate-in fade-in slide-in-from-top-2">
      {/* Left List Options */}
      <div className="w-[294px] h-[377px] p-[16px] flex flex-col justify-between bg-[#f4f5f7]">
        {items.map((item, i) => (
          <div
            key={i}
            data-name="Link"
            className="w-[262px] h-[40px] flex items-center gap-[14px] px-[12px] rounded-[12px] hover:bg-white transition-all cursor-pointer group shadow-none shrink-0"
          >
            <div className="text-[#5e6978] group-hover:text-[#0062e3] transition-colors shrink-0">
              {item.icon}
            </div>
            <span className="font-['Helvetica_Neue:Regular',sans-serif] font-normal text-[16px] text-[#0f172a] group-hover:text-[#0062e3] transition-colors whitespace-nowrap">
              {item.title}
            </span>
          </div>
        ))}
      </div>

      {/* Right Blue Card */}
      <div className="w-[290px] h-[377px] bg-[#0062f0] p-[32px] flex flex-col justify-between relative overflow-hidden text-white shrink-0 rounded-r-[28px]">
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/10 blur-2xl pointer-events-none" />

        <h3 className="font-['Helvetica_Neue:Bold',sans-serif] text-[28px] font-bold leading-[34px] tracking-tight relative z-10 w-[210px]">
          Explore Cozmo travel services
        </h3>

        <div className="flex items-end justify-between relative z-10 pt-[40px]">
          <div className="w-[46px] h-[46px] rounded-full border border-white/60 flex items-center justify-center cursor-pointer hover:bg-white/20 hover:scale-105 transition-all group backdrop-blur-sm" data-name="Link">
            <svg className="w-[18px] h-[18px] text-white transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </div>

          <svg className="w-[130px] h-[130px] text-white/20 absolute -bottom-8 -right-8 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.1}>
            <circle cx="12" cy="12" r="9" />
            <path d="M3.6 9h16.8M3.6 15h16.8M12 3a15.3 15.3 0 014 9 15.3 15.3 0 01-4 9 15.3 15.3 0 01-4-9 15.3 15.3 0 014-9z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CompanyDropdown() {
  const items = [
    {
      title: "About Us",
      icon: (
        <svg className="w-[22px] h-[22px] text-[#5e6978]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "Our Team",
      icon: (
        <svg className="w-[22px] h-[22px] text-[#5e6978]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Awards & Recognition",
      icon: (
        <svg className="w-[22px] h-[22px] text-[#5e6978]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      title: "Group Companies",
      icon: (
        <svg className="w-[22px] h-[22px] text-[#5e6978]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3a15.3 15.3 0 014 9 15.3 15.3 0 01-4 9 15.3 15.3 0 01-4-9 15.3 15.3 0 014-9z" />
        </svg>
      ),
    },
    {
      title: "Cozmic",
      url: "https://bejewelled-scone-f129b4.netlify.app/cozmic/introduce",
      icon: (
        <svg className="w-[22px] h-[22px] text-[#5e6978]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      title: "Careers",
      icon: (
        <svg className="w-[22px] h-[22px] text-[#5e6978]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="absolute top-[90px] right-[240px] z-50 flex rounded-[28px] overflow-hidden bg-[#f4f5f7] border border-gray-200/60 w-[584px] h-[377px] transition-all transform duration-200 animate-in fade-in slide-in-from-top-2">
      {/* Left List Options */}
      <div className="w-[294px] h-[377px] p-[16px] flex flex-col justify-start gap-[8px] bg-[#f4f5f7]">
        {items.map((item, i) => (
          <div
            key={i}
            data-name="Link"
            onClick={() => {
              if (item.url) window.location.href = item.url;
            }}
            className="w-[262px] h-[40px] flex items-center gap-[14px] px-[12px] rounded-[12px] hover:bg-white transition-all cursor-pointer group shadow-none shrink-0"
          >
            <div className="text-[#5e6978] group-hover:text-[#0062e3] transition-colors shrink-0">
              {item.icon}
            </div>
            <span className="font-['Helvetica_Neue:Regular',sans-serif] font-normal text-[16px] text-[#0f172a] group-hover:text-[#0062e3] transition-colors whitespace-nowrap">
              {item.title}
            </span>
          </div>
        ))}
      </div>

      {/* Right Blue Card */}
      <div className="w-[290px] h-[377px] bg-[#0062f0] p-[32px] flex flex-col justify-between relative overflow-hidden text-white shrink-0 rounded-r-[28px]">
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/10 blur-2xl pointer-events-none" />

        <h3 className="font-['Helvetica_Neue:Bold',sans-serif] text-[28px] font-bold leading-[34px] tracking-tight relative z-10 w-[210px]">
          Get to know the Cozmo group
        </h3>

        <div className="flex items-end justify-between relative z-10 pt-[40px]">
          <div className="w-[46px] h-[46px] rounded-full border border-white/60 flex items-center justify-center cursor-pointer hover:bg-white/20 hover:scale-105 transition-all group backdrop-blur-sm">
            <svg className="w-[18px] h-[18px] text-white transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </div>

          <svg className="w-[130px] h-[130px] text-white/20 absolute -bottom-8 -right-8 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.1}>
            <circle cx="12" cy="12" r="9" />
            <path d="M3.6 9h16.8M3.6 15h16.8M12 3a15.3 15.3 0 014 9 15.3 15.3 0 01-4 9 15.3 15.3 0 01-4-9 15.3 15.3 0 014-9z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [activeServiceModal, setActiveServiceModal] = useState<string | null>(null);

  // Form states
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [loginSubmitted, setLoginSubmitted] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setIsContactOpen(false);
    }, 2000);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginSubmitted(true);
    setTimeout(() => {
      setLoginSubmitted(false);
      setIsLoginOpen(false);
    }, 2000);
  };

  return (
    <>
      <div ref={dropdownRef} className="sticky top-0 z-50 bg-white col-1 content-stretch flex h-[113px] items-center justify-between px-[200px] row-1 w-[1920px]" data-name="Header">
        {/* Logo on Left */}
        <div className="flex items-center cursor-pointer" data-name="Logo b 2">
          <img src={imgImageCozmoTravelLogo} alt="Cozmo Travel" className="h-[41px] object-contain" />
        </div>

        {/* Right Container: Nav Links + Contact Us + Login grouped together */}
        <div className="flex items-center gap-[32px] relative shrink-0">
          {/* Navigation Links */}
          <div className="flex items-center gap-[28px] shrink-0">
            <div className="flex items-center cursor-pointer shrink-0" data-name="Link" onClick={() => setOpenDropdown(null)}>
              <span className="font-['Helvetica_Neue:Medium',sans-serif] text-[16px] text-[#161616] hover:text-[#0062e3] transition-colors leading-[19px] whitespace-nowrap">
                Corporate Travel
              </span>
            </div>

            <div
              className="flex items-center gap-[4px] cursor-pointer group shrink-0"
              data-name="Link"
              onClick={() => setOpenDropdown(openDropdown === "services" ? null : "services")}
              onMouseEnter={() => setOpenDropdown("services")}
            >
              <span className="font-['Helvetica_Neue:Medium',sans-serif] text-[16px] text-[#161616] group-hover:text-[#0062e3] transition-colors leading-[19px] whitespace-nowrap">
                Our Services
              </span>
              <div className="w-[12px] h-[12px] flex items-center justify-center shrink-0">
                <svg className="w-[12px] h-[12px] text-[#0062e3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <div
              className="flex items-center gap-[4px] cursor-pointer group shrink-0"
              data-name="Link"
              onClick={() => setOpenDropdown(openDropdown === "company" ? null : "company")}
              onMouseEnter={() => setOpenDropdown("company")}
            >
              <span className="font-['Helvetica_Neue:Medium',sans-serif] text-[16px] text-[#161616] group-hover:text-[#0062e3] transition-colors leading-[19px] whitespace-nowrap">
                Company
              </span>
              <div className="w-[12px] h-[12px] flex items-center justify-center shrink-0">
                <svg className="w-[12px] h-[12px] text-[#0062e3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Buttons (Contact us & Login) */}
          <div className="flex items-center gap-[12px] shrink-0">
            <button
              onClick={() => setIsContactOpen(true)}
              className="bg-[#0062e3] text-white px-[22px] py-[10px] rounded-[100px] font-['Helvetica_Neue:Medium',sans-serif] text-[15px] cursor-pointer hover:bg-[#0052c2] active:scale-95 transition-all shadow-sm shrink-0 whitespace-nowrap select-none"
            >
              Contact us
            </button>
            <button
              onClick={() => setIsLoginOpen(true)}
              className="border-2 border-[#0062e3] text-[#0062e3] px-[22px] py-[8px] rounded-[100px] font-['Helvetica_Neue:Medium',sans-serif] text-[15px] font-medium cursor-pointer hover:bg-blue-50 active:scale-95 transition-all shrink-0 whitespace-nowrap select-none"
            >
              Login
            </button>
          </div>

          {/* Dropdown Popups rendering */}
          {openDropdown === "services" && (
            <div onMouseLeave={() => setOpenDropdown(null)}>
              <ServicesDropdown />
            </div>
          )}
          {openDropdown === "company" && (
            <div onMouseLeave={() => setOpenDropdown(null)}>
              <CompanyDropdown />
            </div>
          )}
        </div>
      </div>

      {/* --- Contact Us Modal --- */}
      {isContactOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-[32px] w-[540px] p-[40px] shadow-2xl relative border border-gray-100 animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsContactOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-2">
              <span className="bg-blue-100 text-[#0062e3] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Support & Inquiries
              </span>
            </div>
            <h2 className="text-3xl font-bold text-[#05203c] mb-2 font-['Helvetica_Neue:Bold',sans-serif]">
              Contact Cozmo Travel
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Our 24x7 team across 10 countries is ready to assist you.
            </p>

            {contactSubmitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-3xl mb-4 animate-bounce">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Thank You!</h3>
                <p className="text-gray-500">Your message has been received. Our team will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0062e3] focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Email</label>
                    <input
                      required
                      type="email"
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0062e3] focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Phone</label>
                    <input
                      required
                      type="tel"
                      placeholder="+971 50 000 0000"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0062e3] focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Service Type</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0062e3] focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all bg-white">
                    <option>Corporate Travel Management</option>
                    <option>Flight Booking & Group Travel</option>
                    <option>Hotel & Resort Reservations</option>
                    <option>Visa & Immigration Services</option>
                    <option>Holiday & Leisure Packages</option>
                    <option>Logistics & Cargo Transport</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Message</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="How can we help your travel needs?"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0062e3] focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full mt-2 bg-[#0062e3] hover:bg-[#0052c2] text-white py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-lg shadow-blue-500/25 transition-all"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* --- Login Modal --- */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-[32px] w-[460px] p-[40px] shadow-2xl relative border border-gray-100 animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsLoginOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors"
            >
              ✕
            </button>

            <div className="flex justify-center mb-6">
              <img src={imgImageCozmoTravelLogo} alt="Cozmo Travel" className="h-10 object-contain" />
            </div>

            <h2 className="text-2xl font-bold text-center text-[#05203c] mb-1">
              Sign In to Your Account
            </h2>
            <p className="text-center text-gray-500 text-sm mb-6">
              Access your Cozmo corporate & B2B portal
            </p>

            {loginSubmitted ? (
              <div className="py-8 text-center flex flex-col items-center justify-center">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-[#0062e3] text-2xl mb-3 animate-pulse">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Authenticated!</h3>
                <p className="text-gray-500 text-sm">Redirecting to your dashboard...</p>
              </div>
            ) : (
              <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Work Email</label>
                  <input
                    required
                    type="email"
                    placeholder="user@cozmotravel.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0062e3] focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider">Password</label>
                    <a href="#forgot" onClick={(e) => e.preventDefault()} className="text-xs text-[#0062e3] hover:underline font-medium">Forgot?</a>
                  </div>
                  <input
                    required
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0062e3] focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all"
                  />
                </div>
                <div className="flex items-center justify-between my-1">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-[#0062e3] focus:ring-blue-200" />
                    <span className="text-xs text-gray-600">Remember me</span>
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0062e3] hover:bg-[#0052c2] text-white py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-lg shadow-blue-500/25 transition-all"
                >
                  Sign In
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
