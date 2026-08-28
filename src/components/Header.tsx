import { useEffect, useState } from "react";
import { FaBars, FaDownload, FaTimes } from "react-icons/fa";
import profileImg from "../images/Logo.jpeg";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8" aria-label="Primary navigation">
        <a href="#about" className="flex min-w-0 items-center gap-3" aria-label="Mohammad Sohail Ahmed, home">
          <img src={profileImg} alt="" className="h-9 w-9 rounded-full border border-slate-200 object-cover object-top" />
          <span className="truncate text-sm font-bold text-slate-900 sm:text-base">Mohammad Sohail Ahmed</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-blue-700">
              {item.label}
            </a>
          ))}
          <a
            href="/docs/resume.pdf"
            download
            className="inline-flex h-10 items-center gap-2 rounded-lg bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <FaDownload aria-hidden="true" />
            Resume
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 md:hidden"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open navigation"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          <FaBars aria-hidden="true" />
        </button>
      </nav>

      <div
        className={"fixed inset-0 z-50 bg-slate-950/40 transition-opacity md:hidden " + (isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0")}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />
      <div
        id="mobile-navigation"
        className={"fixed right-0 top-0 z-50 flex h-dvh w-[min(20rem,86vw)] flex-col bg-white p-5 shadow-2xl transition-transform duration-300 md:hidden " + (isMenuOpen ? "translate-x-0" : "translate-x-full")}
      >
        <div className="flex items-center justify-between border-b border-slate-200 pb-5">
          <span className="text-sm font-bold text-slate-900">Navigation</span>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close navigation"
          >
            <FaTimes aria-hidden="true" />
          </button>
        </div>

        <div className="flex flex-col py-5">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="border-b border-slate-100 py-4 text-base font-semibold text-slate-700"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="/docs/resume.pdf"
          download
          className="mt-auto inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 font-semibold text-white"
        >
          <FaDownload aria-hidden="true" />
          Download resume
        </a>
      </div>
    </header>
  );
}
