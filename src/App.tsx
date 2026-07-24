import { useState, useEffect, useLayoutEffect, useRef } from "react";
import HomePage from "@/pages/HomePage/index";
import AboutUs from "@/pages/AboutUs/index";
import CorporatePage from "@/pages/CorporatePage/index";

type Page = "home" | "about" | "corporate";

function getInitialPage(): Page {
  if (typeof window === "undefined") return "home";
  const path = window.location.pathname.toLowerCase();
  if (path.includes("corporate")) return "corporate";
  if (path.includes("about")) return "about";
  return "home";
}

const NAV_RULES: Array<{ match: (text: string) => boolean; page: Page }> = [
  // Corporate Travel
  { match: (t) => t.includes("Corporate Travel") || t.includes("cozmobizz"), page: "corporate" },
  // About Us
  { match: (t) => t.includes("About Us") || t.includes("Our Team") || t.includes("Awards") || t.includes("Contact Us Today") || t.includes("Explore destinations"), page: "about" },
  // Home / Group Companies
  { match: (t) => t === "Home" || t.includes("Group Companies"), page: "home" },
];

function ScaledPage({
  children,
  onNavigate,
}: {
  children: React.ReactNode;
  onNavigate: (page: Page) => void;
}) {
  const [scale, setScale] = useState(1);
  const [scaledHeight, setScaledHeight] = useState<number | undefined>(undefined);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    function update() {
      const currentScale = Math.min(1, window.innerWidth / 1920);
      setScale(currentScale);
      if (contentRef.current) {
        setScaledHeight(contentRef.current.offsetHeight * currentScale);
      }
    }
    update();
    const observer = new ResizeObserver(update);
    if (contentRef.current) observer.observe(contentRef.current);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [children]);

  function handleClick(e: React.MouseEvent) {
    const path = e.nativeEvent.composedPath() as HTMLElement[];

    for (const el of path) {
      if (!(el instanceof HTMLElement)) continue;
      if (el === contentRef.current) break;

      const tagName = el.tagName.toLowerCase();
      const dataName = el.getAttribute("data-name") ?? "";

      // Logo check
      if (
        dataName === "Logo b 2" ||
        (dataName === "Link" && el.querySelector('img[alt="Cozmo Travel"]')) ||
        (el instanceof HTMLImageElement && el.alt === "Cozmo Travel")
      ) {
        e.preventDefault();
        onNavigate("home");
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      // Nav link check: only check elements with data-name="Link", <a> tags, or cursor-pointer with short text
      const isNavElement = dataName === "Link" || tagName === "a";
      if (isNavElement) {
        const text = el.textContent?.trim() ?? "";
        if (text.length > 0 && text.length < 60) {
          if (text.includes("Cozmic") || text.includes("cozmic")) {
            e.preventDefault();
            window.location.href = "https://bejewelled-scone-f129b4.netlify.app/cozmic/introduce";
            return;
          }
          for (const rule of NAV_RULES) {
            if (rule.match(text)) {
              e.preventDefault();
              onNavigate(rule.page);
              window.scrollTo({ top: 0, behavior: "smooth" });
              return;
            }
          }
        }
      }
    }
  }

  return (
    <div
      className="relative w-full overflow-x-hidden"
      style={{ height: scaledHeight ? `${scaledHeight}px` : "auto" }}
      onClick={handleClick}
    >
      <style>{`
        /* Pointer on all named links and the logo */
        [data-name="Link"],
        [data-name="Margin"],
        [data-name="Logo b 2"],
        img[alt="Cozmo Travel"] { cursor: pointer; }

        /* Hide the stray floating Login button on Corporate Page */
        [data-name="Corporate Page"] > :last-child { display: none !important; }
      `}</style>
      <div
        ref={contentRef}
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          width: "1920px",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default function App() {
  const [activePage, setActivePage] = useState<Page>(getInitialPage);

  const handleNavigate = (page: Page) => {
    setActivePage(page);
    if (typeof window !== "undefined") {
      const urlMap: Record<Page, string> = {
        home: "/",
        corporate: "/corporate",
        about: "/about",
      };
      window.history.pushState({}, "", urlMap[page] || "/");
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      setActivePage(getInitialPage());
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <div className="flex-1">
        <ScaledPage onNavigate={handleNavigate}>
          {activePage === "home" && <HomePage />}
          {activePage === "about" && <AboutUs />}
          {activePage === "corporate" && <CorporatePage />}
        </ScaledPage>
      </div>
    </div>
  );
}
