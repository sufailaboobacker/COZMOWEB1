import { useState, useEffect, useRef } from "react";
import svgPaths from "@/assets/svgs/svg-home-paths";
import imgNeomStv2S3FYw7YUnsplash1 from "@/assets/images/hero/hero-bg-desert.png";
import imgImage457 from "@/assets/images/hero/home-hero-card1.png";
import imgImage491 from "@/assets/images/hero/home-hero-card2.png";
import imgWise1 from "@/assets/images/logos/logo-wise.png";
import imgUber1 from "@/assets/images/logos/logo-uber.png";
import imgApple1 from "@/assets/images/logos/logo-apple.png";
import imgVisa1 from "@/assets/images/logos/logo-visa.png";
import imgNomad1 from "@/assets/images/logos/logo-nomad.png";
import imgHolafly1 from "@/assets/images/logos/logo-holafly.png";
import imgMonzo1 from "@/assets/images/logos/logo-monzo.png";
import imgAmericanExpress from "@/assets/images/logos/logo-amex.png";
import imgCocaCola from "@/assets/images/logos/logo-cocacola.png";
import imgBarclays1 from "@/assets/images/logos/logo-barclays.png";
import imgFooter11 from "@/assets/images/common/footer-bg.png";
import imgImageCozmoTravelLogo from "@/assets/images/logos/cozmo-travel-logo.png";
import { imgGroup } from "@/assets/svgs/svg-home-group";
import HeaderNav from "@/components/Header";
import { StickyFeatureSection } from "@/components/ui/sticky-scroll-cards-section";
import { WhyChooseUsHoverGrid } from "@/components/ui/why-choose-us-grid";

function LogoB() {
  return (
    <div className="h-[41px] relative shrink-0 w-[339.584px]" data-name="Logo b 2">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 339.584 40.9996">
        <g clipPath="url(#clip0_1_734)" id="Logo b 2">
          <path d={svgPaths.p2efc5c40} fill="var(--fill-0, #2D2C2B)" id="Vector" />
          <path d={svgPaths.p37fbf80} fill="var(--fill-0, #2D2C2B)" id="Vector_2" />
          <path d={svgPaths.p271a3600} fill="var(--fill-0, #2D2C2B)" id="Vector_3" />
          <path d={svgPaths.peb13f00} fill="var(--fill-0, #2D2C2B)" id="Vector_4" />
          <path d={svgPaths.p36070080} fill="var(--fill-0, #2D2C2B)" id="Vector_5" />
          <path d={svgPaths.p37168000} fill="var(--fill-0, #2D2C2B)" id="Vector_6" />
          <path d={svgPaths.pc950570} fill="var(--fill-0, #2D2C2B)" id="Vector_7" />
          <path d={svgPaths.p13312980} fill="var(--fill-0, #2D2C2B)" id="Vector_8" />
          <path d={svgPaths.p25472880} fill="var(--fill-0, #2D2C2B)" id="Vector_9" />
          <path d={svgPaths.pe8e1900} fill="var(--fill-0, #2D2C2B)" id="Vector_10" />
          <path d={svgPaths.p2bac7f00} fill="var(--fill-0, #2D2C2B)" id="Vector_11" />
          <path d={svgPaths.p39facff0} fill="var(--fill-0, #2D2C2B)" id="Vector_12" />
          <path d={svgPaths.p5e46200} fill="var(--fill-0, #2D2C2B)" id="Vector_13" />
          <path d={svgPaths.p1f0aabc0} fill="var(--fill-0, #0062F0)" id="Vector_14" />
          <path d={svgPaths.p37fbf80} fill="var(--fill-0, #0062F0)" id="Vector_15" />
          <path d={svgPaths.p1db76e00} fill="var(--fill-0, #0062F0)" id="Vector_16" />
          <path d={svgPaths.p3c1c2f00} fill="var(--fill-0, #0062F0)" id="Vector_17" />
          <path d={svgPaths.p20509700} fill="var(--fill-0, #0062F0)" id="Vector_18" />
          <path d={svgPaths.p37168000} fill="var(--fill-0, #2D2C2B)" id="Vector_19" />
          <path d={svgPaths.pc950570} fill="var(--fill-0, #2D2C2B)" id="Vector_20" />
          <path d={svgPaths.p1a755a00} fill="var(--fill-0, #2D2C2B)" id="Vector_21" />
          <path d={svgPaths.p25472880} fill="var(--fill-0, #2D2C2B)" id="Vector_22" />
          <path d={svgPaths.p3c42c700} fill="var(--fill-0, #2D2C2B)" id="Vector_23" />
          <path d={svgPaths.p1b4c6900} fill="var(--fill-0, #2D2C2B)" id="Vector_24" />
          <path d={svgPaths.p462d380} fill="var(--fill-0, #2D2C2B)" id="Vector_25" />
          <path d={svgPaths.p1826f380} fill="var(--fill-0, #2D2C2B)" id="Vector_26" />
        </g>
        <defs>
          <clipPath id="clip0_1_734">
            <rect fill="white" height="40.9996" width="339.584" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <LogoB />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[41px] items-start max-w-[437.2323913574219px] relative shrink-0" data-name="Container">
      <Link />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container2 />
    </div>
  );
}

function Svg() {
  return (
    <div className="absolute flex h-[9px] items-center justify-center left-[9px] top-[5px] w-[14px]">
      <div className="flex-none rotate-90">
        <div className="h-[14px] relative w-[9px]" data-name="SVG">
          
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[19px] relative shrink-0 w-[23px]" data-name="Container">
      <Svg />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-center pr-[10px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161616] text-[16px] whitespace-nowrap">
        <p className="leading-[19px] mx-[1px] my-[0px]">Corporate Travel</p>
      </div>
      <Container5 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[32px] relative shrink-0" data-name="Margin">
      <Container4 />
    </div>
  );
}

function Svg1() {
  return (
    <div className="absolute flex h-[9px] items-center justify-center left-[90.6px] top-[7px] w-[14px]">
      <div className="flex-none rotate-90">
        <div className="h-[14px] relative w-[9px]" data-name="SVG">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 14">
            <g clipPath="url(#clip0_1_832)" id="SVG">
              <path d="M1 1L7 7L1 13" id="Vector" stroke="var(--stroke-0, #0062E3)" strokeWidth="2" />
            </g>
            <defs>
              <clipPath id="clip0_1_832">
                <rect fill="white" height="14" width="9" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[19px] relative shrink-0 w-[93.59px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] left-[-10.23px] not-italic text-[#161616] text-[16px] top-[9.5px] whitespace-nowrap">
        <p className="leading-[19px]">Our Services</p>
      </div>
      <Svg1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-center pr-[10px] relative shrink-0" data-name="Container">
      <Container7 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start ml-0 mt-0 pr-[32px] relative row-1" data-name="Margin">
      <Container6 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="absolute flex h-[9px] items-center justify-center left-[90.6px] top-[7px] w-[14px]">
      <div className="flex-none rotate-90">
        <div className="h-[14px] relative w-[9px]" data-name="SVG">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 14">
            <g clipPath="url(#clip0_1_832)" id="SVG">
              <path d="M1 1L7 7L1 13" id="Vector" stroke="var(--stroke-0, #0062E3)" strokeWidth="2" />
            </g>
            <defs>
              <clipPath id="clip0_1_832">
                <rect fill="white" height="14" width="9" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[19px] relative shrink-0 w-[93.59px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] left-[-10.23px] not-italic text-[#161616] text-[16px] top-[9.5px] whitespace-nowrap">
        <p className="leading-[19px]">Our Services</p>
      </div>
      <Svg2 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-center pr-[10px] relative shrink-0" data-name="Container">
      <Container9 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start ml-0 mt-0 pr-[32px] relative row-1" data-name="Margin">
      <Container8 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="absolute flex h-[9px] items-center justify-center left-[90.6px] top-[7px] w-[14px]">
      <div className="flex-none rotate-90">
        <div className="h-[14px] relative w-[9px]" data-name="SVG">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 14">
            <g clipPath="url(#clip0_1_832)" id="SVG">
              <path d="M1 1L7 7L1 13" id="Vector" stroke="var(--stroke-0, #0062E3)" strokeWidth="2" />
            </g>
            <defs>
              <clipPath id="clip0_1_832">
                <rect fill="white" height="14" width="9" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[19px] relative shrink-0 w-[93.59px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] left-[-10.23px] not-italic text-[#161616] text-[16px] top-[9.5px] whitespace-nowrap">
        <p className="leading-[19px]">Our Services</p>
      </div>
      <Svg3 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex items-center pr-[10px] relative shrink-0" data-name="Container">
      <Container11 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start ml-0 mt-0 pr-[32px] relative row-1" data-name="Margin">
      <Container10 />
    </div>
  );
}

function Svg4() {
  return (
    <div className="absolute flex h-[9px] items-center justify-center left-[73.06px] top-[7px] w-[14px]">
      <div className="flex-none rotate-90">
        <div className="h-[14px] relative w-[9px]" data-name="SVG">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 14">
            <g clipPath="url(#clip0_1_832)" id="SVG">
              <path d="M1 1L7 7L1 13" id="Vector" stroke="var(--stroke-0, #0062E3)" strokeWidth="2" />
            </g>
            <defs>
              <clipPath id="clip0_1_832">
                <rect fill="white" height="14" width="9" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[19px] relative shrink-0 w-[76.06px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] left-0 not-italic text-[#161616] text-[16px] top-[9.5px] whitespace-nowrap">
        <p className="leading-[19px]">Company</p>
      </div>
      <Svg4 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-center pr-[10px] relative shrink-0" data-name="Container">
      <Container13 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start ml-[135.59px] mt-0 pr-[32px] relative row-1" data-name="Margin">
      <Container12 />
    </div>
  );
}

function Svg5() {
  return (
    <div className="absolute flex h-[9px] items-center justify-center left-[7.27px] top-[10px] w-[14px]">
      <div className="flex-none rotate-90">
        <div className="h-[14px] relative w-[9px]" data-name="SVG">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 14">
            <g clipPath="url(#clip0_1_832)" id="SVG">
              <path d="M1 1L7 7L1 13" id="Vector" stroke="var(--stroke-0, #0062E3)" strokeWidth="2" />
            </g>
            <defs>
              <clipPath id="clip0_1_832">
                <rect fill="white" height="14" width="9" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[19px] relative shrink-0 w-[37px]" data-name="Container">
      <Svg5 />
    </div>
  );
}

function Container14() {
  return (
    <div className="col-1 content-stretch flex items-center ml-[334.65px] mt-0 pr-[10px] relative row-1" data-name="Container">
      <Container15 />
    </div>
  );
}

function Group17() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Margin1 />
      <Margin2 />
      <Margin3 />
      <Margin4 />
      <div className="[word-break:break-word] col-1 flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center ml-[253.65px] mt-0 not-italic relative row-1 text-[#161616] text-[16px] whitespace-nowrap">
        <p className="leading-[19px]">Contact us</p>
      </div>
      <Container14 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[544px]" data-name="Container">
      <Margin />
      <Group17 />
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-white content-stretch flex items-start justify-center px-[18px] py-[14px] relative rounded-[8px] shrink-0" data-name="Link">
      <div aria-hidden className="absolute border-2 border-[#0062e3] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0062e3] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Login</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[280px] h-[113px] items-center relative shrink-0 w-[1520px]" data-name="Container">
      <Container1 />
      <Container3 />
      <Link1 />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white col-1 content-stretch flex flex-col h-[113px] items-start ml-0 mt-0 px-[200px] relative row-1 w-[1920px]" data-name="Header">
      <Container />
    </div>
  );
}

function Group4() {
  return <HeaderNav />;
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Loretta_Display_VF:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[32px] text-white whitespace-nowrap">
        <p className="leading-[28px] font-[Loretta_Display_VF] italic font-normal">Looking for your next adventure?</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1112px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[148px] text-white tracking-[-4.8px] w-full">
        <p className="leading-[140px] font-[Helvetica_Neue] font-bold">
          Your Trusted
          <br aria-hidden />
          Travel Company
        </p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14.39px] items-start left-[60px] md:left-[101.5px] bottom-[48px] md:bottom-[64px] max-w-[1072px] z-10" data-name="Container">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[calc(100dvh-113px)] min-h-[500px] overflow-hidden relative rounded-[32px] shrink-0 w-[1723px] max-w-[95vw] mx-auto box-border">
      <div className="absolute inset-0 rounded-[32px]" data-name="neom-STV2s3FYw7Y-unsplash 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32px] size-full" src={imgNeomStv2S3FYw7YUnsplash1} />
      </div>
      <Container17 />
    </div>
  );
}

function Group5() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[553px] mt-0 place-items-start relative row-1">
      <div className="col-1 h-[656px] ml-0 mt-0 relative row-1 w-[599px]" data-name="image 491">
        <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgImage491} />
      </div>
    </div>
  );
}

function Group13() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 h-[598px] ml-0 mt-[113.66px] relative rounded-[392.084px] row-1 w-[1528px]" data-name="image 457">
        <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none rounded-[392.084px] size-full" src={imgImage457} />
      </div>
      <Group5 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#05203c] text-[0px] tracking-[-2.16px] w-full">
        <p className="text-[68px]">
          <span className="font-['Helvetica_Neue:Bold',sans-serif] leading-[72px] not-italic">Powered by smart </span>
          <span className="font-['Helvetica_Neue:Bold_Italic',sans-serif] italic leading-[72px] text-[#0062e3]">Our Services</span>
        </p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-px relative self-stretch shrink-0 w-[1124px]" data-name="Container">
      <Container21 />
    </div>
  );
}

function EndWidgetSpanMargin() {
  return <div className="min-h-px relative self-stretch shrink-0 w-[396px]" data-name="end widget-span:margin" />;
}

function EndRowWrapper1() {
  return (
    <div className="content-stretch flex h-[72px] items-start justify-center relative shrink-0 w-full" data-name="end row-wrapper">
      <Container20 />
      <EndWidgetSpanMargin />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#545860] text-[20px] w-full">
        <p className="leading-[24px]">From leisure getaways to corporate travel management, we tailor every journey to fit your needs, backed by round-the-clock support and deep industry expertise.</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[14.39px] relative shrink-0 w-full" data-name="Container">
      <Container24 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-px relative self-stretch shrink-0 w-[1124px]" data-name="Container">
      <Container23 />
    </div>
  );
}

function EndWidgetSpanMargin1() {
  return <div className="min-h-px relative self-stretch shrink-0 w-[396px]" data-name="end widget-span:margin" />;
}

function EndRowWrapper2() {
  return (
    <div className="content-stretch flex h-[62.39px] items-start justify-center relative shrink-0 w-full" data-name="end row-wrapper">
      <Container22 />
      <EndWidgetSpanMargin1 />
    </div>
  );
}

function EndRowWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start min-h-px pt-[82px] relative shrink-0 w-[1520px]" data-name="end row-wrapper">
      <EndRowWrapper1 />
      <EndRowWrapper2 />
    </div>
  );
}

function ImagePhotographyGroupBookingsAndEvents() {
  return <div className="absolute h-[520px] left-0 rounded-[28px] top-0 w-[420px]" data-name="Image (Photography Group Bookings And Events)" />;
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_812)" id="Icon">
          <path d={svgPaths.p3adb3b00} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 1.33333V2.66667" id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 13.3333V14.6667" id="Vector_3" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p11bc9dc0} id="Vector_4" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p191ca260} id="Vector_5" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M1.33333 8H2.66667" id="Vector_6" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M13.3333 8H14.6667" id="Vector_7" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pe73b76f} id="Vector_8" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1df25380} id="Vector_9" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_812">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] items-center left-[40px] px-[16px] py-[8px] rounded-[9999px] top-[568.64px]" data-name="Text">
      <Icon />
      <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2563eb] text-[16px] text-center whitespace-nowrap">Holiday Packages</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_805)" id="Icon">
          <path d="M8 6.79267V9.33333" id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 1.33333V3.33333" id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p183c7940} id="Vector_3" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3deae800} id="Vector_4" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3f202e00} id="Vector_5" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_805">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] items-center left-[237px] px-[16px] py-[8px] rounded-[9999px] top-[568.64px]" data-name="Text">
      <Icon1 />
      <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2563eb] text-[16px] text-center whitespace-nowrap">Cruise Bookings</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_788)" id="Icon">
          <path d={svgPaths.p29415d00} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p39ee6532} id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_788">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] items-center left-[40px] px-[16px] py-[8px] rounded-[9999px] top-[614.64px]" data-name="Text">
      <Icon2 />
      <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2563eb] text-[16px] text-center whitespace-nowrap">Religious Travel</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p13f2e300} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] items-center left-[216px] px-[16px] py-[8px] rounded-[9999px] top-[614.64px]" data-name="Text">
      <Icon3 />
      <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2563eb] text-[16px] text-center whitespace-nowrap">Honeymoon Packages</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p23e1fe80} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p18e64300} id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2238d180} id="Vector_3" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3b0d7cc0} id="Vector_4" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 2.66667H7.33333" id="Vector_5" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] items-center left-[40px] px-[16px] py-[8px] rounded-[9999px] top-[660.64px]" data-name="Text">
      <Icon4 />
      <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2563eb] text-[16px] text-center whitespace-nowrap">{`Meet & Greet Services`}</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1f466f80} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] items-center left-[40px] px-[16px] py-[8px] rounded-[9999px] top-[706.64px]" data-name="Text">
      <Icon5 />
      <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2563eb] text-[16px] text-center whitespace-nowrap">Destination Management Services</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f197700} id="Vector_3" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3bf3e100} id="Vector_4" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] items-center left-[265px] px-[16px] py-[8px] rounded-[9999px] top-[660.64px]" data-name="Text">
      <Icon6 />
      <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2563eb] text-[16px] text-center whitespace-nowrap">Group Travel</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2a5ebdb0} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 6.66667H10.6667" id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 12H10.6667" id="Vector_3" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p314b3c0} id="Vector_4" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2eaaea00} id="Vector_5" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] items-center left-[40px] px-[16px] py-[8px] rounded-[9999px] top-[752.64px]" data-name="Text">
      <Icon7 />
      <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2563eb] text-[16px] text-center whitespace-nowrap">Educational Travel</p>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute bg-[#0062e3] h-[834px] left-0 top-0 w-[565px]" data-name="Text">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Loretta_Display_VF:Medium_Italic',sans-serif] font-medium italic justify-center leading-[0] left-[40px] text-white text-[68px] top-[142.64px] tracking-[-2px] w-[306px]">
        <p className="leading-[72px]">{`Holiday & Leisure`}</p>
      </div>
      <Text1 />
      <Text2 />
      <Text3 />
      <Text4 />
      <Text5 />
      <Text6 />
      <Text7 />
      <Text8 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[834px] overflow-clip relative rounded-[28px] shrink-0 w-[494px]" data-name="Container">
      <ImagePhotographyGroupBookingsAndEvents />
      <Text />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] h-[36px] items-center left-[42px] overflow-clip px-[16px] py-[8px] rounded-[9999px] top-[660.64px]" data-name="Text">
      <Icon8 />
      <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2563eb] text-[16px] text-center whitespace-nowrap">MICE Events</p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1c647980} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p13d22180} id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] h-[36px] items-center left-[195px] overflow-clip px-[16px] py-[8px] rounded-[9999px] top-[660.64px]" data-name="Text">
      <Icon9 />
      <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2563eb] text-[16px] text-center whitespace-nowrap">Business Travel</p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p5a98780} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p18f4d100} id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 11.6667V4.33333" id="Vector_3" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] h-[36px] items-center left-[42px] overflow-clip px-[16px] py-[8px] rounded-[9999px] top-[706.64px]" data-name="Text">
      <Icon10 />
      <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2563eb] text-[16px] text-center whitespace-nowrap">Expense Management</p>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f197700} id="Vector_3" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3bf3e100} id="Vector_4" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] h-[36px] items-center left-[42px] overflow-clip px-[16px] py-[8px] rounded-[9999px] top-[752.64px]" data-name="Text">
      <Icon11 />
      <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2563eb] text-[16px] text-center whitespace-nowrap">Group Bookings</p>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p37f49070} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] h-[36px] items-center left-[266px] px-[16px] py-[8px] rounded-[9999px] top-[706.64px]" data-name="Text">
      <Icon12 />
      <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2563eb] text-[16px] text-center whitespace-nowrap">Duty of Care</p>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19416e00} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3e059a80} id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6H5.33333" id="Vector_3" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 8.66667H5.33333" id="Vector_4" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 11.3333H5.33333" id="Vector_5" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] h-[36px] items-center left-[221px] overflow-clip px-[16px] py-[8px] rounded-[9999px] top-[752.64px]" data-name="Text">
      <Icon13 />
      <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2563eb] text-[16px] text-center whitespace-nowrap">Travel Policy</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute bg-[#0062e3] h-[834px] left-0 top-0 w-[565px]" data-name="Text">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Loretta_Display_VF:Medium_Italic',sans-serif] font-medium italic justify-center leading-[0] left-[54px] text-[68px] text-white top-[143.98px] tracking-[-2px] w-[387px]">
        <p className="leading-[72px]">{`Corporate & Business`}</p>
      </div>
      <Text10 />
      <Text11 />
      <Text12 />
      <Text13 />
      <Text14 />
      <Text15 />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[834px] overflow-clip relative rounded-[28px] shrink-0 w-[494px]" data-name="Container">
      <Text9 />
    </div>
  );
}

function ImagePhotographyGroupBookingsAndEvents1() {
  return <div className="absolute h-[520px] left-0 rounded-[28px] top-0 w-[420px]" data-name="Image (Photography Group Bookings And Events)" />;
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p37f49070} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17134c00} id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] h-[36px] items-center left-[35px] px-[16px] py-[8px] rounded-[9999px] top-[660.64px]" data-name="Text">
      <Icon14 />
      <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2563eb] text-[16px] text-center whitespace-nowrap">Travel Insurance</p>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_823)" id="Icon">
          <path d={svgPaths.p3a6156f0} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2f084ee0} id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4.66667 4H5.33333V6.66667" id="Vector_3" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pd94e100} id="Vector_4" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_823">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] h-[36px] items-center left-[35px] px-[16px] py-[8px] rounded-[9999px] top-[614.64px]" data-name="Text">
      <Icon15 />
      <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2563eb] text-[16px] text-center whitespace-nowrap">Currency Exchange</p>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p270c3400} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p90de340} id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 11.3333H10" id="Vector_3" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p38e3c580} id="Vector_4" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] h-[36px] items-center left-[35px] px-[16px] py-[8px] rounded-[9999px] top-[706.64px]" data-name="Text">
      <Icon16 />
      <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2563eb] text-[16px] text-center whitespace-nowrap">Car Rentals</p>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p37181900} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] h-[36px] items-center left-[35px] px-[16px] py-[8px] rounded-[9999px] top-[753.64px]" data-name="Text">
      <Icon17 />
      <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2563eb] text-[16px] text-center whitespace-nowrap">Airport Transfers</p>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 13.3333H8.00667" id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3978c100} id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3aa7f280} id="Vector_3" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3129d700} id="Vector_4" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] h-[36px] items-center left-[182px] px-[16px] py-[8px] rounded-[9999px] top-[706.64px]" data-name="Text">
      <Icon18 />
      <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2563eb] text-[16px] text-center whitespace-nowrap">Travel SIM</p>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19416e00} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3e059a80} id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p5ecae80} id="Vector_3" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] h-[36px] items-center left-[217px] px-[16px] py-[8px] rounded-[9999px] top-[660.64px]" data-name="Text">
      <Icon19 />
      <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2563eb] text-[16px] text-center whitespace-nowrap">Visa Assistance</p>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_680)" id="Icon">
          <path d={svgPaths.p2a44c680} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_680">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text23() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] h-[36px] items-center left-[238px] px-[16px] py-[8px] rounded-[9999px] top-[614.64px]" data-name="Text">
      <Icon20 />
      <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2563eb] text-[16px] text-center whitespace-nowrap">24/7 Support</p>
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute bg-[#0062e3] h-[834px] left-0 top-0 w-[565px]" data-name="Text">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Loretta_Display_VF:Medium_Italic',sans-serif] font-medium italic justify-center leading-[0] left-[57px] text-white text-[68px] top-[143.98px] tracking-[-2px] w-[364px]">
        <p className="leading-[72px]">Travel Essentials</p>
      </div>
      <Text17 />
      <Text18 />
      <Text19 />
      <Text20 />
      <Text21 />
      <Text22 />
      <Text23 />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[834px] overflow-clip relative rounded-[28px] shrink-0 w-[500px]" data-name="Container">
      <ImagePhotographyGroupBookingsAndEvents1 />
      <Text16 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[1520px]">
      <Container25 />
      <Container26 />
      <Container27 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#05203c] text-[0px] tracking-[-2.16px] w-full">
        <p className="text-[68px]">
          <span className="font-['Helvetica_Neue:Bold',sans-serif] leading-[72px] not-italic">Air Arabia </span>
          <span className="font-['Helvetica_Neue:Bold_Italic',sans-serif] italic leading-[72px] text-[#0062e3]">Group Companies</span>
        </p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-px relative self-stretch shrink-0 w-[1124px]" data-name="Container">
      <Container29 />
    </div>
  );
}

function EndWidgetSpanMargin2() {
  return <div className="min-h-px relative self-stretch shrink-0 w-[396px]" data-name="end widget-span:margin" />;
}

function EndRowWrapper4() {
  return (
    <div className="content-stretch flex h-[72px] items-start justify-center relative shrink-0 w-full" data-name="end row-wrapper">
      <Container28 />
      <EndWidgetSpanMargin2 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#545860] text-[20px] w-full">
        <p className="leading-[24px] mb-0">Reach travellers actively researching, comparing and exploring trips through rich intent signals, powered by first-</p>
        <p className="leading-[24px]">party behavioural insights that uncover audience mindsets and motivations.</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[14.39px] relative shrink-0 w-[1124px]" data-name="Container">
      <Container31 />
    </div>
  );
}

function GroupCompaniesStack() {
  return <StickyFeatureSection />;
}

function EndRowWrapper5() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="end row-wrapper">
      <GroupCompaniesStack />
    </div>
  );
}

function EndRowWrapper3() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-px pt-[40px] relative shrink-0 w-[1520px]" data-name="end row-wrapper">
      <EndRowWrapper5 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#05203c] text-[0px] tracking-[-2.16px] w-full">
        <p className="text-[68px]">
          <span className="font-['Helvetica_Neue:Bold',sans-serif] leading-[72px] not-italic">Why to </span>
          <span className="font-['Helvetica_Neue:Bold_Italic',sans-serif] italic leading-[72px] text-[#0062e3]">choose us</span>
        </p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-px relative self-stretch shrink-0 w-[1124px]" data-name="Container">
      <Container33 />
    </div>
  );
}

function EndWidgetSpanMargin3() {
  return <div className="min-h-px relative self-stretch shrink-0 w-[396px]" data-name="end widget-span:margin" />;
}

function EndRowWrapper8() {
  return (
    <div className="content-stretch flex h-[72px] items-start justify-center relative shrink-0 w-full" data-name="end row-wrapper">
      <Container32 />
      <EndWidgetSpanMargin3 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#545860] text-[20px] w-full">
        <p className="leading-[24px]">With over a decade of industry experience, a wide regional network and a multilingual team on call around the clock, we make travel management simple, reliable and stress-free.</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[14.39px] relative shrink-0 w-full" data-name="Container">
      <Container36 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-px relative self-stretch shrink-0 w-[1124px]" data-name="Container">
      <Container35 />
    </div>
  );
}

function EndWidgetSpanMargin4() {
  return <div className="min-h-px relative self-stretch shrink-0 w-[396px]" data-name="end widget-span:margin" />;
}

function EndRowWrapper9() {
  return (
    <div className="content-stretch flex h-[62.39px] items-start justify-center relative shrink-0 w-full" data-name="end row-wrapper">
      <Container34 />
      <EndWidgetSpanMargin4 />
    </div>
  );
}

function EndRowWrapper7() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start min-h-px pt-[82px] relative shrink-0 w-[1520px]" data-name="end row-wrapper">
      <EndRowWrapper8 />
      <EndRowWrapper9 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#0062f0] col-1 content-stretch flex h-[52px] items-center justify-center ml-0 mt-0 px-[24px] py-[12px] relative rounded-[60px] row-1 w-[155px]">
      <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[24px] text-white tracking-[-0.72px] whitespace-nowrap">Corporate</p>
    </div>
  );
}

function Component1Group() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[49.97px] mt-[721.67px] place-items-start relative row-1" data-name="1 Group">
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#0062f0] col-1 content-stretch flex h-[52px] items-center justify-center ml-[212.97px] mt-[721.67px] px-[24px] py-[12px] relative rounded-[60px] row-1 w-[125px]">
      <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[24px] text-white tracking-[-0.72px] whitespace-nowrap">Leisure</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#0062f0] col-1 content-stretch flex h-[52px] items-center justify-center ml-[345.97px] mt-[721.67px] px-[24px] py-[12px] relative rounded-[60px] row-1 w-[107px]">
      <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[24px] text-white tracking-[-0.72px] whitespace-nowrap">MICE</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#0062f0] col-1 content-stretch flex h-[52px] items-center justify-center ml-[460.97px] mt-[721.67px] px-[24px] py-[12px] relative rounded-[60px] row-1 w-[160px]">
      <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[24px] text-white tracking-[-0.72px] whitespace-nowrap">Logistics</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#0062f0] col-1 h-[259px] ml-[687px] mt-[556px] relative rounded-[20px] row-1 w-[448px] p-[32px] flex flex-col justify-between cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(0,98,240,0.4)] z-10">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Helvetica_Neue:Bold',sans-serif] text-[36px] text-white tracking-[-0.72px] leading-[1.16]" dir="auto">{`Proprietary corporate booking platform `}</p>
      <div className="bg-white flex h-[51px] items-center justify-center px-[24px] py-[12px] rounded-[60px] self-start">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[1.15] text-[#0062f0] text-[24px] tracking-[-0.72px] whitespace-nowrap">cozmobizz</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#0062f0] col-1 h-[259px] ml-[1148.94px] mt-[556px] relative rounded-[20px] row-1 w-[377px] p-[32px] flex flex-col justify-between cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(0,98,240,0.4)] z-10">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Helvetica_Neue:Bold',sans-serif] text-[36px] text-white tracking-[-0.72px] leading-[1.16]" dir="auto">
        B2B distribution platform
      </p>
      <div className="bg-white flex h-[51px] items-center justify-center px-[24px] py-[12px] rounded-[60px] self-start">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[1.15] text-[#0062f0] text-[24px] tracking-[-0.72px] whitespace-nowrap">Travtrolley</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="col-1 flex h-[81.366px] items-center justify-center ml-[1.86px] mt-[-0.01px] relative row-1 w-[70.628px]">
      <div className="flex-none rotate-[-0.08deg] skew-x-[0.01deg]">
        <div className="h-[81.264px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.863px_0.003px] mask-size-[74.367px_81.394px] relative w-[70.503px]" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70.5034 81.2639">
            <g id="Group">
              <path clipRule="evenodd" d={svgPaths.p3f95e000} fill="var(--fill-0, #0062F0)" fillRule="evenodd" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] h-[81.393px] inline-grid ml-[1240.97px] mt-[71.56px] place-items-start relative row-1 w-[74.367px]" data-name="Clip path group">
      <Group />
    </div>
  );
}

function InstagramPost() {
  return (
    <div className="col-1 h-[541px] ml-0 mt-[0.33px] overflow-clip relative rounded-[26px] row-1 w-[488px] cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,98,240,0.35)] z-10" style={{ backgroundImage: "linear-gradient(131.711deg, rgb(0, 98, 240) 21.222%, rgb(176, 206, 250) 145.23%)" }} data-name="Instagram post - 14">
      <div className="-translate-x-1/2 absolute h-[1890px] left-[calc(50%-256px)] top-[-861px] w-[1966px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1966 1890">
          <path d={svgPaths.p18070f00} id="Vector" stroke="url(#paint0_linear_1_675)" strokeOpacity="0.25" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_675" x1="983" x2="983" y1="0" y2="1890">
              <stop stopColor="white" />
              <stop offset="0.442611" stopColor="#0162F0" />
              <stop offset="0.975962" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="[word-break:break-word] absolute font-['Helvetica:Bold',sans-serif] inset-[64.94%_29.51%_11.77%_10.24%] leading-[0] not-italic text-[36px] text-white tracking-[-1.08px] whitespace-pre-wrap">
        <p className="leading-[1.16] mb-0" dir="auto">{`Owned by `}</p>
        <p className="leading-[1.16]" dir="auto">{`Air Arabia PJSC & Official GSA`}</p>
      </div>
      <div className="absolute flex inset-[40.52%_64.3%_40.43%_10.24%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(0.114486cqw,99.8066cqh)] rotate-[-0.09deg] skew-x-[-0.01deg] w-[hypot(99.8855cqw,-0.193411cqh)]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 124.091 102.876">
              <path d={svgPaths.p81fd900} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 flex h-[266px] items-center justify-center ml-[843.12px] mt-[0.33px] relative row-1 w-[349px]">
        <div className="flex-none rotate-180">
          <div className="bg-[#e6effe] h-[266px] relative rounded-[20px] w-[349px] cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,98,240,0.25)]" />
        </div>
      </div>
      <div className="col-1 flex h-[260px] items-center justify-center ml-[1206.44px] mt-[280px] relative row-1 w-[318px]">
        <div className="flex-none rotate-180">
          <div className="bg-[#e6effe] h-[260px] relative rounded-[20px] w-[318px] cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,98,240,0.25)]" />
        </div>
      </div>
      <div className="col-1 flex h-[260px] items-center justify-center ml-[843.44px] mt-[280.33px] relative row-1 w-[349px]">
        <div className="flex-none rotate-180">
          <div className="bg-[#e6effe] h-[260px] relative rounded-[20px] w-[349px] cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,98,240,0.25)]" />
        </div>
      </div>
      <div className="col-1 flex h-[266px] items-center justify-center ml-[502.81px] mt-[0.33px] relative row-1 w-[326px]">
        <div className="flex-none rotate-180">
          <div className="bg-[#e5e5e5] h-[266px] relative rounded-[20px] w-[326px] cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,98,240,0.25)]" />
        </div>
      </div>
      <div className="col-1 flex h-[260px] items-center justify-center ml-[502.12px] mt-[280.33px] relative row-1 w-[327px]">
        <div className="flex-none rotate-180">
          <div className="bg-[#b0cefa] h-[260px] relative rounded-[20px] w-[327px] cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,98,240,0.25)]" />
        </div>
      </div>
      <div className="col-1 flex h-[259px] items-center justify-center ml-0 mt-[556px] relative row-1 w-[673px]">
        <div className="flex-none rotate-180">
          <div className="bg-[#e6effe] h-[259px] relative rounded-[20px] w-[673px] cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,98,240,0.25)]" />
        </div>
      </div>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] col-1 font-['Helvetica_Neue:Bold',sans-serif] leading-none ml-[530.97px] mt-[354.67px] not-italic relative row-1 text-[#0062f0] text-[68px] tracking-[-2.04px] whitespace-nowrap pointer-events-none" dir="auto">
        50+
      </p>
      <p className="[word-break:break-word] col-1 font-['Helvetica_Neue:Regular',sans-serif] leading-[1.16] ml-[530.97px] mt-[422.67px] not-italic relative row-1 text-[#2d2c2b] text-[20px] w-[173px] pointer-events-none" dir="auto">
        Offices Across our network
      </p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] col-1 font-['Helvetica_Neue:Bold',sans-serif] leading-none ml-[530.97px] mt-[106.67px] not-italic relative row-1 text-[#0062f0] text-[68px] tracking-[-2.04px] whitespace-nowrap pointer-events-none" dir="auto">
        10
      </p>
      <p className="[word-break:break-word] col-1 font-['Helvetica_Neue:Regular',sans-serif] h-[56px] leading-[1.16] ml-[530.97px] mt-[170.67px] not-italic relative row-1 text-[#2d2c2b] text-[20px] w-[237px] pointer-events-none" dir="auto">{`Countries across MENA & India`}</p>
      <p className="[word-break:break-word] col-1 font-['Helvetica_Neue:Bold',sans-serif] leading-[1.16] ml-[49.97px] mt-[595px] not-italic relative row-1 text-[#0062f0] text-[36px] tracking-[-0.72px] w-[379px] pointer-events-none" dir="auto">{`End-to-end travel management `}</p>
      <Component1Group />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] col-1 font-['Helvetica_Neue:Bold',sans-serif] leading-none ml-[870.97px] mt-[354.67px] not-italic relative row-1 text-[#0062f0] text-[68px] tracking-[-2.04px] whitespace-nowrap pointer-events-none" dir="auto">
        1,100+
      </p>
      <p className="[word-break:break-word] col-1 font-['Helvetica_Neue:Regular',sans-serif] leading-[1.16] ml-[870.97px] mt-[422.67px] not-italic relative row-1 text-[#2d2c2b] text-[20px] w-[260px] pointer-events-none" dir="auto">
        Multilingual professionals
      </p>
      <p className="[word-break:break-word] col-1 font-['Helvetica_Neue:Regular',sans-serif] leading-[1.16] ml-[870.97px] mt-[71.67px] not-italic relative row-1 text-[#2d2c2b] text-[20px] whitespace-nowrap pointer-events-none" dir="auto">
        Direct access to
      </p>
      <p className="[word-break:break-word] col-1 font-['Helvetica_Neue:Regular',sans-serif] leading-[1.16] ml-[870.97px] mt-[170.67px] not-italic relative row-1 text-[#2d2c2b] text-[20px] w-[298px] pointer-events-none" dir="auto">
        airlines across all alliances and low-cost carriers
      </p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] col-1 font-['Helvetica_Neue:Bold',sans-serif] leading-[1.12] ml-[870.97px] mt-[106.67px] not-italic relative row-1 text-[#0062f0] text-[68px] tracking-[-2.04px] whitespace-nowrap pointer-events-none" dir="auto">
        130+
      </p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] col-1 font-['Helvetica_Neue:Bold',sans-serif] leading-none ml-[1240.97px] mt-[354.67px] not-italic relative row-1 text-[#0062f0] text-[68px] tracking-[-2.04px] whitespace-nowrap pointer-events-none" dir="auto">
        24x7
      </p>
      <div className="[word-break:break-word] col-1 font-['Helvetica_Neue:Regular',sans-serif] ml-[1240.97px] mt-[422.67px] not-italic relative row-1 text-[#2d2c2b] text-[20px] w-[256px] pointer-events-none">
        <p className="leading-[1.16] mb-0" dir="auto">
          in-person support
        </p>
        <p className="leading-[1.16]" dir="auto">
          not automated, not outsourced
        </p>
      </div>
      <Frame5 />
      <Frame6 />
      <div className="col-1 flex h-[266px] items-center justify-center ml-[1206.44px] mt-0 relative row-1 w-[319px]">
        <div className="flex-none rotate-180">
          <div className="bg-[#e6effe] h-[266px] relative rounded-[20px] w-[319px] cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,98,240,0.25)]" />
        </div>
      </div>
      <p className="[word-break:break-word] col-1 font-['Helvetica_Neue:Regular',sans-serif] h-[59px] leading-[1.16] ml-[1240.97px] mt-[170.67px] not-italic relative row-1 text-[#2d2c2b] text-[20px] w-[274px] pointer-events-none" dir="auto">{`IATA accredited travel company since 2010 `}</p>
      <ClipPathGroup />
      <InstagramPost />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#05203c] text-[0px] tracking-[-2.16px] w-full">
        <p className="text-[68px]">
          <span className="font-['Helvetica_Neue:Bold_Italic',sans-serif] italic leading-[72px] text-[#0062e3]">Partners </span>
          <span className="font-['Helvetica_Neue:Bold',sans-serif] leading-[72px] not-italic">we deal with</span>
        </p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Heading3 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-px relative self-stretch shrink-0 w-[1124px]" data-name="Container">
      <Container38 />
    </div>
  );
}

function EndWidgetSpanMargin5() {
  return <div className="min-h-px relative self-stretch shrink-0 w-[396px]" data-name="end widget-span:margin" />;
}

function EndRowWrapper12() {
  return (
    <div className="content-stretch flex h-[72px] items-start justify-center relative shrink-0 w-full" data-name="end row-wrapper">
      <Container37 />
      <EndWidgetSpanMargin5 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#545860] text-[20px] w-full">
        <p className="leading-[24px]">We've built strong partnerships with global leaders in finance, technology and mobility to make every trip smoother, safer and more rewarding for our travellers.</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[14.39px] relative shrink-0 w-full" data-name="Container">
      <Container41 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-px relative self-stretch shrink-0 w-[1124px]" data-name="Container">
      <Container40 />
    </div>
  );
}

function EndWidgetSpanMargin6() {
  return <div className="min-h-px relative self-stretch shrink-0 w-[396px]" data-name="end widget-span:margin" />;
}

function EndRowWrapper13() {
  return (
    <div className="content-stretch flex h-[62.39px] items-start justify-center relative shrink-0 w-full" data-name="end row-wrapper">
      <Container39 />
      <EndWidgetSpanMargin6 />
    </div>
  );
}

function EndRowWrapper11() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start min-h-px pt-[82px] relative shrink-0 w-[1520px]" data-name="end row-wrapper">
      <EndRowWrapper12 />
      <EndRowWrapper13 />
    </div>
  );
}

const PARTNERS_LIST = [
  {
    id: "wise",
    name: "Wise",
    category: "Financial Infrastructure",
    logo: imgWise1,
    description: "Cozmo Travel x Wise",
    details: "Multi-currency settlement solution with zero hidden fees and real-time exchange rates for global corporate travel bookings.",
  },
  {
    id: "uber",
    name: "Uber",
    category: "Ground Mobility",
    logo: imgUber1,
    description: "Cozmo Travel x Uber Enterprise",
    details: "Seamless ground transportation integration enabling automated travel expense claims and rides for business travelers.",
  },
  {
    id: "apple",
    name: "Apple Pay",
    category: "Digital Payments",
    logo: imgApple1,
    description: "Cozmo Travel x Apple Pay",
    details: "One-touch biometric checkout for rapid, high-security booking of flights, hotels, and holiday packages.",
  },
  {
    id: "visa",
    name: "Visa",
    category: "Global Payment Network",
    logo: imgVisa1,
    description: "Cozmo Travel x Visa Signature",
    details: "Exclusive cardholder privileges, airport lounge access, and zero-liability payment protection for international travelers.",
  },
  {
    id: "nomad",
    name: "Nomad eSIM",
    category: "Travel Connectivity",
    logo: imgNomad1,
    description: "Cozmo Travel x Nomad eSIM",
    details: "Instant high-speed mobile data connectivity across 170+ countries with no physical SIM swapping required.",
  },
  {
    id: "holafly",
    name: "Holafly",
    category: "International Data",
    logo: imgHolafly1,
    description: "Cozmo Travel x Holafly eSIM",
    details: "Unlimited high-speed international data packages tailored for frequent corporate travelers and digital nomads.",
  },
  {
    id: "monzo",
    name: "Monzo",
    category: "Digital Banking",
    logo: imgMonzo1,
    description: "Cozmo Travel x Monzo Business",
    details: "Automated expense categorization, fee-free international spending, and instant corporate travel reimbursements.",
  },
  {
    id: "amex",
    name: "American Express",
    category: "Enterprise Finance",
    logo: imgAmericanExpress,
    description: "Cozmo Travel x American Express",
    details: "Dedicated Corporate Card concierge services, Membership Rewards point redemptions, and premium travel perks.",
  },
  {
    id: "cocacola",
    name: "Coca-Cola",
    category: "Corporate Client & Event Partner",
    logo: imgCocaCola,
    description: "Cozmo Travel x Coca-Cola",
    details: "Official travel management and event logistics partner powering worldwide corporate conventions and employee travel.",
  },
  {
    id: "barclays",
    name: "Barclays",
    category: "Commercial Banking",
    logo: imgBarclays1,
    description: "Cozmo Travel x Barclays Corporate",
    details: "Enterprise merchant settlement, multi-currency credit lines, and automated financial auditing for corporate travel.",
  },
];

function PartnersCarousel() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState<typeof PARTNERS_LIST[0] | null>(null);

  const totalSteps = 5;

  // Auto scroll timer
  useEffect(() => {
    if (isPaused || selectedPartner !== null) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % totalSteps);
    }, 3200);
    return () => clearInterval(interval);
  }, [isPaused, selectedPartner]);

  const handlePrev = () => {
    setActiveStep((prev) => (prev === 0 ? totalSteps - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % totalSteps);
  };

  return (
    <div className="w-full flex flex-col items-center gap-[32px] my-[20px]" data-name="PartnersCarousel">
      {/* Top Carousel controls & track container */}
      <div 
        className="relative w-full max-w-[1520px] overflow-hidden px-[20px] py-[10px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          className="absolute left-[10px] top-1/2 -translate-y-1/2 z-20 w-[48px] h-[48px] rounded-full bg-white/90 shadow-lg border border-gray-200 flex items-center justify-center text-[#0062e3] hover:bg-[#0062e3] hover:text-white hover:scale-110 transition-all cursor-pointer"
          aria-label="Previous partners"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          className="absolute right-[10px] top-1/2 -translate-y-1/2 z-20 w-[48px] h-[48px] rounded-full bg-white/90 shadow-lg border border-gray-200 flex items-center justify-center text-[#0062e3] hover:bg-[#0062e3] hover:text-white hover:scale-110 transition-all cursor-pointer"
          aria-label="Next partners"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Sliding Cards Track */}
        <div className="w-full overflow-hidden">
          <div
            className="flex gap-[24px] transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeStep * 352}px)` }}
          >
            {PARTNERS_LIST.map((partner) => (
              <div
                key={partner.id}
                onClick={() => setSelectedPartner(partner)}
                className="w-[328px] h-[218px] shrink-0 rounded-[16px] bg-white border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#0062e3]/40 hover:scale-[1.03] transition-all duration-300 cursor-pointer relative group overflow-hidden"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 pointer-events-none"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-[#0062e3]/90 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-[16px] text-white text-center">
                  <span className="font-bold text-[18px] mb-[4px]">{partner.name}</span>
                  <span className="text-[13px] opacity-90 mb-[12px]">{partner.category}</span>
                  <span className="bg-white text-[#0062e3] text-[12px] font-bold px-[12px] py-[6px] rounded-full shadow-sm">
                    View Partner Details →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Step Indicator Bars / Tablist */}
      <div className="flex gap-[12px] items-center justify-center max-w-[1520px] w-full px-[20px]">
        {[...Array(totalSteps)].map((_, idx) => {
          const isActive = idx === activeStep;

          return (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className="flex-1 max-w-[280px] h-[10px] py-[3px] focus:outline-none cursor-pointer group"
              aria-label={`Jump to partner group ${idx + 1}`}
            >
              <div
                className={`h-[4px] rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-[#0062e3] shadow-[0_0_8px_rgba(0,98,227,0.6)]"
                    : "bg-[#eff1f2] group-hover:bg-gray-300"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Partner Detail Modal */}
      {selectedPartner && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-[24px] p-[36px] max-w-[540px] w-[90%] shadow-2xl relative border border-gray-100 flex flex-col items-center text-center">
            {/* Close button */}
            <button
              onClick={() => setSelectedPartner(null)}
              className="absolute top-[18px] right-[18px] w-[36px] h-[36px] rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-black flex items-center justify-center transition-colors cursor-pointer"
            >
              ✕
            </button>

            {/* Partner Logo */}
            <div className="h-[120px] flex items-center justify-center mb-[20px] p-[10px] bg-gray-50 rounded-[16px] w-full border border-gray-100">
              <img
                src={selectedPartner.logo}
                alt={selectedPartner.name}
                className="max-h-[90px] object-contain"
              />
            </div>

            <span className="bg-blue-50 text-[#0062e3] font-bold text-[12px] px-[12px] py-[4px] rounded-full uppercase tracking-wider mb-[10px]">
              {selectedPartner.category}
            </span>

            <h3 className="text-[24px] font-bold text-[#05203c] mb-[8px] font-['Helvetica_Neue:Bold',sans-serif]">
              {selectedPartner.description}
            </h3>

            <p className="text-[#545860] text-[15px] leading-[24px] mb-[28px] font-['Helvetica_Neue:Regular',sans-serif]">
              {selectedPartner.details}
            </p>

            <button
              onClick={() => setSelectedPartner(null)}
              className="bg-[#0062e3] text-white font-bold text-[15px] px-[32px] py-[12px] rounded-full shadow-md hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Close Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function EndRowWrapper10() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start min-h-px relative shrink-0 w-[1520px]" data-name="end row-wrapper">
      <EndRowWrapper11 />
      <PartnersCarousel />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#05203c] text-[0px] tracking-[-2.16px] w-full">
        <p className="text-[68px]">
          <span className="font-['Helvetica_Neue:Bold',sans-serif] leading-[72px] not-italic">We </span>
          <span className="font-['Helvetica_Neue:Bold_Italic',sans-serif] italic leading-[72px] text-[#0062e3]">simplify </span>
          <span className="font-['Helvetica_Neue:Bold',sans-serif] leading-[72px] not-italic">Travel</span>
        </p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Heading4 />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-px relative self-stretch shrink-0 w-[1124px]" data-name="Container">
      <Container71 />
    </div>
  );
}

function EndWidgetSpanMargin7() {
  return <div className="min-h-px relative self-stretch shrink-0 w-[396px]" data-name="end widget-span:margin" />;
}

function EndRowWrapper16() {
  return (
    <div className="content-stretch flex h-[72px] items-start justify-center relative shrink-0 w-full" data-name="end row-wrapper">
      <Container70 />
      <EndWidgetSpanMargin7 />
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#545860] text-[20px] w-full">
        <p className="leading-[24px] mb-0">Reach travellers actively researching, comparing and exploring trips through rich intent signals, powered by first-</p>
        <p className="leading-[24px]">party behavioural insights that uncover audience mindsets and motivations.</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[14.39px] relative shrink-0 w-full" data-name="Container">
      <Container74 />
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-px relative self-stretch shrink-0 w-[1124px]" data-name="Container">
      <Container73 />
    </div>
  );
}

function EndWidgetSpanMargin8() {
  return <div className="min-h-px relative self-stretch shrink-0 w-[396px]" data-name="end widget-span:margin" />;
}

function EndRowWrapper17() {
  return (
    <div className="content-stretch flex h-[62.39px] items-start justify-center relative shrink-0 w-full" data-name="end row-wrapper">
      <Container72 />
      <EndWidgetSpanMargin8 />
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="SVG">
          <path d={svgPaths.p1c298900} fill="var(--fill-0, #05203C)" id="Vector" stroke="var(--stroke-0, #05203C)" strokeWidth="0.5625" />
          <path d={svgPaths.p1167db00} fill="var(--fill-0, #05203C)" id="Vector_2" stroke="var(--stroke-0, #05203C)" strokeWidth="0.5625" />
          <path d={svgPaths.p3562b800} fill="var(--fill-0, #05203C)" id="Vector_3" stroke="var(--stroke-0, #05203C)" strokeWidth="0.5625" />
          <path d={svgPaths.p2232d400} fill="var(--fill-0, #05203C)" id="Vector_4" stroke="var(--stroke-0, #05203C)" strokeWidth="0.5625" />
          <path d={svgPaths.p14081a00} fill="var(--fill-0, #05203C)" id="Vector_5" stroke="var(--stroke-0, #05203C)" strokeWidth="0.5625" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_0px_10px_rgba(0,0,0,0.07)] flex flex-col items-start p-[20px] relative rounded-[10px] shrink-0 size-[100px]" data-name="Background+Shadow">
      <Svg6 />
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundShadow />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="[word-break:break-word] flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0062e3] text-[24px] tracking-[-0.72px] w-full">
        <p className="leading-[32px] font-bold">Countless options</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#545860] text-[20px] w-full">
        <p className="leading-[26px]">Compares flights from 450+ airlines to bring you the best deals.</p>
      </div>
    </div>
  );
}

function EndRowWrapper19() {
  return (
    <div className="content-stretch flex flex-col gap-[14.39px] items-start relative shrink-0 w-full" data-name="end row-wrapper">
      <Heading5 />
      <Container77 />
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col gap-[23px] items-start min-h-px pb-px relative shrink-0 w-[348px]" data-name="Container">
      <Container76 />
      <EndRowWrapper19 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[3.13%_3.18%_3.18%_3.13%]" data-name="Group">
      <div className="absolute inset-[-1.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.0938 58.0938">
          <g id="Group">
            <path d={svgPaths.p3faa3b00} id="Vector" stroke="var(--stroke-0, #05203C)" strokeWidth="1.875" />
            <path d={svgPaths.p2c34b880} id="Vector_2" stroke="var(--stroke-0, #05203C)" strokeWidth="1.875" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[3.13%_3.18%_3.18%_3.13%]" data-name="Group">
      <Group2 />
    </div>
  );
}

function GeneratorAdobeIllustrator2750SvgExportPlugInSvgVersion600Build() {
  return (
    <div className="overflow-clip relative shrink-0 size-[60px]" data-name="Generator: Adobe Illustrator 27.5.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)">
      <Group1 />
    </div>
  );
}

function BackgroundShadow1() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_0px_10px_rgba(0,0,0,0.07)] flex flex-col items-start p-[20px] relative rounded-[10px] shrink-0 size-[100px]" data-name="Background+Shadow">
      <GeneratorAdobeIllustrator2750SvgExportPlugInSvgVersion600Build />
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundShadow1 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="[word-break:break-word] flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0062e3] text-[24px] tracking-[-0.72px] w-full">
        <p className="leading-[32px] font-bold">Flexible ways to pay</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#545860] text-[20px] w-full">
        <p className="leading-[26px]">Book the best flights quickly and easily with just a few clicks.</p>
      </div>
    </div>
  );
}

function EndRowWrapper20() {
  return (
    <div className="content-stretch flex flex-col gap-[14.39px] items-start relative shrink-0 w-full" data-name="end row-wrapper">
      <Heading6 />
      <Container79 />
    </div>
  );
}

function EndWidgetSpan() {
  return (
    <div className="content-stretch flex flex-col gap-[23px] items-start min-h-px pb-px relative shrink-0 w-[348px]" data-name="end widget-span">
      <Container78 />
      <EndRowWrapper20 />
    </div>
  );
}

function GeneratorAdobeIllustrator2750SvgExportPlugInSvgVersion600Build1() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Generator: Adobe Illustrator 27.5.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="Generator: Adobe Illustrator 27.5.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)">
          <path d={svgPaths.p38105000} id="Vector" stroke="var(--stroke-0, #05203C)" strokeWidth="1.875" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundShadow2() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_0px_10px_rgba(0,0,0,0.07)] flex flex-col items-start p-[20px] relative rounded-[10px] shrink-0 size-[100px]" data-name="Background+Shadow">
      <GeneratorAdobeIllustrator2750SvgExportPlugInSvgVersion600Build1 />
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundShadow2 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="[word-break:break-word] flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0062e3] text-[24px] tracking-[-0.72px] w-full">
        <p className="leading-[32px] font-bold">We're with you 24/7</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#545860] text-[20px] w-full">
        <p className="leading-[26px]">Your payments are secured by DigiCert, a leader in digital certificate protection.</p>
      </div>
    </div>
  );
}

function EndRowWrapper21() {
  return (
    <div className="content-stretch flex flex-col gap-[14.39px] items-start relative shrink-0 w-full" data-name="end row-wrapper">
      <Heading7 />
      <Container81 />
    </div>
  );
}

function EndWidgetSpan1() {
  return (
    <div className="content-stretch flex flex-col gap-[23px] items-start min-h-px pb-px relative shrink-0 w-[348px]" data-name="end widget-span">
      <Container80 />
      <EndRowWrapper21 />
    </div>
  );
}

function EndRowWrapper18() {
  return (
    <div className="content-stretch flex gap-[158.6px] items-start pb-[28px] pt-[63px] relative shrink-0 w-full" data-name="end row-wrapper">
      <Container75 />
      <EndWidgetSpan />
      <EndWidgetSpan1 />
    </div>
  );
}

function EndRowWrapper15() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start min-h-px pt-[82px] relative shrink-0 w-[1520px]" data-name="end row-wrapper">
      <EndRowWrapper16 />
      <EndRowWrapper18 />
    </div>
  );
}

function PassionateSection() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center min-h-[100vh] py-[80px] my-[40px] px-[100px] relative shrink-0 w-[1920px]">
      <div className="flex flex-col gap-[48px] items-center max-w-[1528px] relative w-[1528px] my-auto">
        <div className="[word-break:break-word] flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[1.15] not-italic relative shrink-0 text-[#05203c] text-[58px] tracking-[-1.8px] w-[1321px] text-center">
          <p>{`We're passionate about travel, and we're committed to making it accessible and enjoyable for everyone.`}</p>
        </div>
        <div className="w-full flex justify-center">
          <Group13 />
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center min-h-px pb-[80px] relative shrink-0 w-full" data-name="Main">
      <Frame7 />
      <PassionateSection />
      <EndRowWrapper />
      <Frame />
      <EndRowWrapper7 />
      <Group3 />
      <EndRowWrapper10 />
      <EndRowWrapper15 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Main />
    </div>
  );
}

function Group12() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 h-[754px] ml-0 mt-0 relative row-1 w-[1810px]" data-name="footer-1 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFooter11} />
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[200px] top-[109.86px]">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Bold',sans-serif] leading-none left-[200px] not-italic text-[96px] text-white top-[109.86px] tracking-[-3.84px] w-[924px]">Ready to plan your next adventure?</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute bg-[#101828] content-stretch drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] flex flex-col items-start left-0 px-[32px] py-[14px] rounded-[16777200px] top-0 mx-[204px] my-[425px]" data-name="Link">
      <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Contact Us Today</p>
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p154e6c80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.33333" />
          <path d={svgPaths.p22879fc0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[220px] top-[14px] mx-[200px] my-[424px]" data-name="Link">
      <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.9)] whitespace-nowrap">Explore destinations</p>
      <Icon21 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents left-[200px] top-[437.41px]">
      <Link2 />
      <Link3 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents left-[200px] top-[332.41px]">
      <p className="[word-break:break-word] absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[28px] left-[200px] not-italic text-[18px] text-[rgba(255,255,255,0.8)] top-[332.41px] whitespace-nowrap">Our travel experts are ready to craft your perfect getaway.</p>
      <Group14 />
    </div>
  );
}

function EndRowWrapper22() {
  return (
    <div className="absolute bg-[#0062e3] content-stretch flex flex-col h-[599px] items-end justify-end left-0 pl-[200px] pt-[104px] top-[154px] w-[1920px]" data-name="end row-wrapper">
      <Group12 />
      <Group6 />
      <Group15 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#101828] text-[18px] whitespace-nowrap">Company</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">About Us</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">{`Offers & Deals`}</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">{`Mission & Vision`}</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">Careers</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[168px] relative shrink-0 w-[264px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pt-[24px] relative size-full">
        <Link4 />
        <Link5 />
        <Link6 />
        <Link7 />
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading8 />
        <Container84 />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#101828] text-[18px] whitespace-nowrap">Our Services</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">{`Holiday & Leisure`}</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">{`Corporate & Business`}</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">Visa Services</p>
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">Flights</p>
      </div>
    </div>
  );
}

function Link12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">Accommodation</p>
      </div>
    </div>
  );
}

function Link13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">Car Rentals</p>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="h-[248px] relative shrink-0 w-[264px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pt-[24px] relative size-full">
        <Link8 />
        <Link9 />
        <Link10 />
        <Link11 />
        <Link12 />
        <Link13 />
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading9 />
        <Container86 />
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#101828] text-[18px] whitespace-nowrap">Specialized Services</p>
      </div>
    </div>
  );
}

function Link14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">Logistics</p>
      </div>
    </div>
  );
}

function Link15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">{`Marine & Offshore`}</p>
      </div>
    </div>
  );
}

function Link16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">gocozmo</p>
      </div>
    </div>
  );
}

function Link17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">Sayara</p>
      </div>
    </div>
  );
}

function Link18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6a7282] text-[16px] whitespace-nowrap">Travtrolley</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="h-[208px] relative shrink-0 w-[264px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pt-[24px] relative size-full">
        <Link14 />
        <Link15 />
        <Link16 />
        <Link17 />
        <Link18 />
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading10 />
        <Container88 />
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#101828] text-[18px] whitespace-nowrap">Subscribe</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[22.5px] not-italic relative shrink-0 text-[#6a7282] text-[15px] w-[264px]">Join our community to receive updates and exclusive offers.</p>
      </div>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="bg-[rgba(243,244,246,0.8)] h-[49px] relative rounded-bl-[16777200px] rounded-tl-[16777200px] shrink-0 w-[153px]" data-name="Email Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip px-[17px] py-[13px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-[rgba(16,24,40,0.5)] w-full">Enter your email</p>
      </div>
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-bl-[16777200px] rounded-tl-[16777200px]" />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0057ff] relative rounded-br-[16777200px] rounded-tr-[16777200px] self-stretch shrink-0 w-[135px]" data-name="Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[24px] py-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Subscribe</p>
        </div>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="relative shrink-0 w-[264px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <EmailInput />
        <Button />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">By subscribing, you agree to our Privacy Policy</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="relative shrink-0 w-[264px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start pt-[16px] relative size-full">
        <Container91 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="col-4 justify-self-start relative row-1 self-stretch shrink-0 w-[389px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading11 />
        <Paragraph />
        <Container90 />
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="gap-x-[145px] gap-y-[48px] grid grid-cols-[____264px_264px_264px_264px] grid-rows-[_276px] h-[276px] relative shrink-0 w-[1520px]" data-name="Container">
      <Container83 />
      <Container85 />
      <Container87 />
      <Container89 />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[332px] items-center justify-center left-0 top-[793px] w-[1920px]" data-name="Container:margin">
      <Container82 />
    </div>
  );
}

function ImageCozmoTravelLogo() {
  return (
    <div className="h-[48px] relative shrink-0 w-[404.203px]" data-name="Image (Cozmo Travel Logo)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageCozmoTravelLogo} />
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3cb86600} fill="var(--fill-0, #00104A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Link19() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[16777200px] shrink-0 size-[40px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon22 />
      </div>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p138d980} fill="var(--fill-0, #00104A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Link20() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[16777200px] shrink-0 size-[40px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon23 />
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_652)" id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3e7f1900} fill="var(--fill-0, #00104A)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_652">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link21() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[16777200px] shrink-0 size-[40px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon24 />
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Link19 />
        <Link20 />
        <Link21 />
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="absolute content-stretch flex h-[88px] items-center justify-between left-0 pl-[201px] pt-[40px] top-[1125px] w-[1720px]" data-name="Container">
      <ImageCozmoTravelLogo />
      <Container93 />
    </div>
  );
}

function Link22() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#6a7282] text-[14px] whitespace-nowrap">Privacy Policy</p>
      </div>
    </div>
  );
}

function Link23() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#6a7282] text-[14px] whitespace-nowrap">Terms of Service</p>
      </div>
    </div>
  );
}

function Link24() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#6a7282] text-[14px] whitespace-nowrap">Cookie Policy</p>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center justify-center relative size-full">
        <Link22 />
        <Link23 />
        <Link24 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] whitespace-nowrap">© 2026 Cozmo Travel. All rights reserved</p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex h-[71px] items-center justify-between pt-px relative shrink-0 w-[1520px]" data-name="Container">
      <div aria-hidden className="absolute border-[#f3f4f6] border-solid border-t inset-0 pointer-events-none" />
      <Container95 />
      <Paragraph2 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center left-0 pt-[32px] top-[1213px] w-[1920px]" data-name="Container:margin">
      <Container94 />
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents left-0 top-[154px]">
      <EndRowWrapper22 />
      <ContainerMargin />
      <Container92 />
      <ContainerMargin1 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-white h-[1340px] overflow-clip relative shrink-0 w-[1920px]">
      <Group16 />
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Home Page">
      <Group4 />
      <Container16 />
      <Frame12 />
    </div>
  );
}