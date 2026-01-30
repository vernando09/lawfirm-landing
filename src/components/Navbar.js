"use client";
import { useEffect, useState } from "react";

const sections = ["profil", "praktik", "pengalaman", "nilai", "kontak"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
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
    `transition-colors duration-300 hover:text-[var(--gold)] ${
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
        <div className="heading-font text-lg md:text-xl text-white">
          AK & Partners
        </div>

        <div className="hidden md:flex gap-10 text-base font-medium tracking-wide">
          <a href="#profil" className={linkClass("profil")}>Profil</a>
          <a href="#praktik" className={linkClass("praktik")}>Layanan</a>
          <a href="#pengalaman" className={linkClass("pengalaman")}>Pengalaman</a>
          <a href="#nilai" className={linkClass("nilai")}>Nilai</a>
          <a href="#kontak" className={linkClass("kontak")}>Kontak</a>
        </div>
      </div>
    </nav>
  );
}
