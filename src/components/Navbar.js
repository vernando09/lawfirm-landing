"use client";
import { useEffect, useState } from "react";

const sections = ["profil", "praktik", "pengalaman", "nilai", "kontak"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const linkClass = (id) =>
    `block transition-colors duration-300 hover:text-[var(--gold)] ${
      active === id ? "text-[var(--gold)]" : "text-white"
    }`;

  return (
    <nav
      className={`fixed w-full z-50 border-b border-[var(--gold)]/20 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--charcoal)] shadow-lg py-4"
          : "bg-[rgba(0,0,0,0.4)] backdrop-blur-md py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img src="/logo-ak.png" alt="AK Logo" className="h-10 w-auto" />
          <span className="heading-font text-lg md:text-xl text-white tracking-wide">
            AK & Partners
          </span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-10 text-base font-medium tracking-wide">
          <a href="#profil" className={linkClass("profil")}>Profil</a>
          <a href="#praktik" className={linkClass("praktik")}>Layanan</a>
          <a href="#pengalaman" className={linkClass("pengalaman")}>Pengalaman</a>
          <a href="#nilai" className={linkClass("nilai")}>Nilai</a>
          <a href="#kontak" className={linkClass("kontak")}>Kontak</a>
        </div>

        {/* HAMBURGER */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--charcoal)] text-white px-6 pb-6 pt-4 space-y-4 text-base font-medium">
          <a href="#profil" onClick={() => setMenuOpen(false)} className={linkClass("profil")}>Profil</a>
          <a href="#praktik" onClick={() => setMenuOpen(false)} className={linkClass("praktik")}>Layanan</a>
          <a href="#pengalaman" onClick={() => setMenuOpen(false)} className={linkClass("pengalaman")}>Pengalaman</a>
          <a href="#nilai" onClick={() => setMenuOpen(false)} className={linkClass("nilai")}>Nilai</a>
          <a href="#kontak" onClick={() => setMenuOpen(false)} className={linkClass("kontak")}>Kontak</a>
        </div>
      )}
    </nav>
  );
}
