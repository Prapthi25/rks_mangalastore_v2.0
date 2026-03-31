
"use client";

import { useEffect, useRef, useState } from "react";


const LOGO_URL = "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774869175/WhatsApp_Image_2026-03-30_at_3.20.23_PM_l967wj.jpg"; 

// ─── LOGO COMPONENT ───────────────────────────────────────────────────────────

function LogoBadge() {
  if (LOGO_URL) {
    return (
      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#c9a96e]/50 flex-shrink-0 shadow-lg shadow-[#c9a96e]/20 bg-white flex items-center justify-center">
        <img src={LOGO_URL} alt="RKS Mangla Logo" className="w-full h-full object-contain p-0.5" />
      </div>
    );
  }
  return (
    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#c9a96e] to-[#8b6914] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#c9a96e]/30">
      <span className="text-white font-bold text-base tracking-wide">RKS</span>
    </div>
  );
}

// ─── NAVBAR ──────────────────────────────────────────────────────────────────

const NAV_LINKS = ["Home", "About Us", "Categories", "Brands", "Contact"];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (link: string) => {
    if (link === "Home") { window.location.href = "/"; return; }
    if (link === "About Us") { window.location.href = "/about"; return; }
    // For other links, go home and scroll
    window.location.href = `/#${link.toLowerCase().replace(" ", "-")}`;
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0d0d0d]/95 backdrop-blur-xl shadow-2xl py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 cursor-pointer">
          <LogoBadge />
          <div>
            <p className="text-white font-bold text-lg leading-none tracking-wide">
              RKS Mangla Store
            </p>
            <p className="text-[#c9a96e] text-[10px] tracking-[0.2em] uppercase">
              Luxury Furniture
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => handleNavClick(link)}
              className={`text-sm tracking-wide transition-colors duration-200 font-medium bg-transparent border-none cursor-pointer ${
                link === "About Us"
                  ? "text-[#c9a96e] border-b border-[#c9a96e]"
                  : "text-white/70 hover:text-[#c9a96e]"
              }`}
            >
              {link}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/919342202405"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#c9a96e] to-[#8b6914] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-[#c9a96e]/30 transition-all duration-300"
          >
            📞 Visit Store
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-[#0d0d0d]/98 backdrop-blur-xl transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-80 py-4" : "max-h-0"}`}>
        <div className="px-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => handleNavClick(link)}
              className="text-white/80 hover:text-[#c9a96e] text-base py-1 border-b border-white/10 transition-colors text-left bg-transparent border-l-0 border-r-0 border-t-0 cursor-pointer"
            >
              {link}
            </button>
          ))}
          <a
            href="https://wa.me/919342202405"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#c9a96e] to-[#8b6914] text-white px-5 py-3 rounded-full text-sm font-semibold text-center mt-2"
          >
            📞 Visit Our Store
          </a>
        </div>
      </div>
    </nav>
  );
}

// ─── HERO ────────────────────────────────────────────────────────────────────

function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&q=80"
          alt="Showroom"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 to-transparent" />
      </div>

      <div className="absolute top-24 right-16 w-80 h-80 rounded-full border border-[#c9a96e]/15 hidden lg:block" style={{ animation: "spin 25s linear infinite" }} />
      <div className="absolute top-32 right-24 w-56 h-56 rounded-full border border-[#c9a96e]/10 hidden lg:block" style={{ animation: "spin 18s linear infinite reverse" }} />
      <div className="absolute top-16 right-8 w-4 h-4 rounded-full bg-[#c9a96e]/40 hidden lg:block" />
      <div className="absolute top-48 right-48 w-2 h-2 rounded-full bg-[#c9a96e]/60 hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-20 pt-40 w-full">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-px bg-[#c9a96e]" />
          <span className="text-[#c9a96e] text-xs font-semibold tracking-[0.4em] uppercase">Established 1992 · Kushalnagar</span>
        </div>

        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-8 max-w-4xl">
          A Story Built on{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a96e] via-[#f5d08a] to-[#c9a96e]">
            Courage &<br />Hard Work.
          </span>
        </h1>

        <p className="text-white/60 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10">
          Thirty-two years ago, a boy who failed his SSLC exam proved to the world that failure is never the end — it's just the beginning of something greater.
        </p>

        <div className="flex flex-wrap gap-10">
          {[
            { value: "32", label: "Years of Excellence" },
            { value: "1992", label: "Founded in Kushalnagar" },
            { value: "10K+", label: "Families Served" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-bold text-[#c9a96e] font-display">{s.value}</p>
              <p className="text-white/40 text-sm mt-1 tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f8f5f0] to-transparent" />
    </section>
  );
}

// ─── ORIGIN STORY ─────────────────────────────────────────────────────────────

function OriginStory() {
  const chapters = [
    {
      year: "1992",
      icon: "🏠",
      heading: "The Beginning",
      text: "In a small town called Kushalnagar, a young man named Ramesh failed his SSLC exam. While others saw an ending, he saw a beginning. With small savings and enormous courage, he set up a humble home appliances shop right at his own residence. The shop was tiny. The stock was limited. Some days saw no customers at all.",
      accent: "#c9a96e",
      side: "left",
    },
    {
      year: "Early Days",
      icon: "🔥",
      heading: "Fuelled by Hard Work",
      text: "He opened early every morning and closed late every night. Financial pressure was constant. But instead of giving up, he chose to learn — by observing every customer, by making and owning his mistakes, and by trusting experience more than textbooks. Gradually, customers began to trust not just the products, but the man behind them.",
      accent: "#8b6914",
      side: "right",
    },
    {
      year: "The Leap",
      icon: "💡",
      heading: "A Vision Expands",
      text: "Ramesh noticed something: every home that bought appliances also needed furniture. So he made a bold move. He expanded — adding beds, sofas, dining tables, cupboards, and chairs. The humble appliance shop began its transformation into a full furniture showroom. And then came mattresses — because he believed: every hardworking person deserves comfortable sleep.",
      accent: "#c9a96e",
      side: "left",
    },
    {
      year: "A Legacy",
      icon: "🏆",
      heading: "Trusted. Respected. Loved.",
      text: "He became the first in the region to carry the most trusted mattress brands — Kurlon, Duroflex, Peps. The business wasn't built in a day. It was built customer by customer, trust by trust. Through struggles, financial pressures, fierce market competition, and tough seasons — he never gave up. Today, after 32 successful years, the store stands not just as a business, but as a symbol of resilience.",
      accent: "#8b6914",
      side: "right",
    },
  ];

  return (
    <section className="bg-[#f8f5f0] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <p className="text-[#c9a96e] text-xs font-semibold tracking-[0.4em] uppercase mb-4">The Journey</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1a1a] leading-tight mb-5">
            From a Small Room
            <br />to a Respected Legacy
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-[#c9a96e] to-[#8b6914] mx-auto rounded-full" />
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#c9a96e]/30 via-[#c9a96e] to-[#c9a96e]/30 -translate-x-1/2" />

          <div className="flex flex-col gap-16 lg:gap-24">
            {chapters.map((ch, i) => (
              <div
                key={ch.year}
                className={`flex flex-col lg:flex-row gap-8 items-center ${ch.side === "right" ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={`flex-1 ${ch.side === "right" ? "lg:text-right" : ""}`}>
                  <div className={`inline-flex items-center gap-2 mb-4 ${ch.side === "right" ? "lg:flex-row-reverse" : ""}`}>
                    <span className="text-2xl">{ch.icon}</span>
                    <span
                      className="text-xs font-bold tracking-[0.3em] uppercase px-3 py-1 rounded-full"
                      style={{ background: `${ch.accent}20`, color: ch.accent }}
                    >
                      {ch.year}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-4">{ch.heading}</h3>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg">{ch.text}</p>
                </div>

                <div className="hidden lg:flex flex-col items-center justify-center flex-shrink-0">
                  <div
                    className="w-14 h-14 rounded-full border-4 flex items-center justify-center text-xl shadow-lg"
                    style={{ borderColor: ch.accent, background: `${ch.accent}15` }}
                  >
                    {ch.icon}
                  </div>
                </div>

                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FOUNDER QUOTE ────────────────────────────────────────────────────────────

function FounderQuote() {
  return (
    <section className="relative py-28 bg-[#0d0d0d] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1800&q=80"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-[#0d0d0d]/80" />
      </div>

      <div
        className="absolute top-10 left-10 font-display text-[20rem] text-[#c9a96e]/5 leading-none select-none hidden lg:block"
        aria-hidden="true"
      >
        "
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="w-16 h-px bg-[#c9a96e] mx-auto mb-10" />

        <p className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-bold leading-snug mb-10">
          "What started as a{" "}
          <em className="text-[#c9a96e] not-italic">'failed boy's small shop'</em>
          <br />
          has become a symbol of{" "}
          <em className="text-[#c9a96e] not-italic">resilience, trust,</em>
          <br />
          and the power of{" "}
          <em className="text-[#c9a96e] not-italic">never giving up."</em>
        </p>

        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c9a96e] to-[#8b6914] flex items-center justify-center">
            <span className="text-white font-bold">R</span>
          </div>
          <div className="text-left">
            <p className="text-white font-semibold">Ramesh</p>
            <p className="text-[#c9a96e] text-sm">Founder, RKS Mangla Store</p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { icon: "🏪", val: "1", label: "Started at home" },
            { icon: "🛋️", val: "500+", label: "Products today" },
            { icon: "🏷️", val: "100+", label: "Premium brands" },
            { icon: "❤️", val: "10K+", label: "Happy families" },
          ].map((m) => (
            <div
              key={m.label}
              className="border border-white/10 rounded-2xl py-7 px-4 hover:border-[#c9a96e]/40 transition-all duration-300 hover:bg-white/5"
            >
              <div className="text-3xl mb-3">{m.icon}</div>
              <p className="font-display text-3xl font-bold text-[#c9a96e]">{m.val}</p>
              <p className="text-white/50 text-sm mt-1">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── LEADERSHIP ───────────────────────────────────────────────────────────────

function Leadership() {
  const CHITRA_IMAGE_URL = "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774629939/WhatsApp_Image_2026-03-26_at_10.43.17_PM_ochzot.jpg";

  const qualities = [
    { icon: "👥", title: "People First", desc: "Manages customers and staff with warmth and empathy — building lasting relationships." },
    { icon: "📊", title: "Business Acumen", desc: "Oversees accounts, inventory, and operations with precision and confidence." },
    { icon: "💛", title: "Legacy Keeper", desc: "Upholds Ramesh's founding principles: honesty, quality, and unwavering trust." },
    { icon: "🚀", title: "Growth Leader", desc: "Actively expanding the brand's reach, partnerships, and product range." },
  ];

  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <p className="text-[#c9a96e] text-xs font-semibold tracking-[0.4em] uppercase mb-4">Leadership Today</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1a1a] leading-tight">
            The Strength Behind
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a96e] to-[#8b6914]">
              the Legacy
            </span>
          </h2>
        </div>

        <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#f8f5f0] to-[#fdf6ec] border border-[#c9a96e]/20 shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gradient-to-br from-[#c9a96e]/10 to-transparent -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gradient-to-tr from-[#8b6914]/10 to-transparent translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-0">
            <div className="lg:w-2/5 relative">
              <div className="relative h-72 lg:h-full min-h-[480px] overflow-hidden rounded-t-[2.5rem] lg:rounded-l-[2.5rem] lg:rounded-tr-none">
                <img
                  src={CHITRA_IMAGE_URL}
                  alt="Mrs. Chitra Ramesh"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#f8f5f0]/30" />
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden">
                  <p className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-1">Leading with Grace</p>
                  <h3 className="font-display text-2xl font-bold text-white">Mrs. Chitra Ramesh</h3>
                  <p className="text-white/70 text-sm">Managing Director, RKS Mangla</p>
                </div>
              </div>
              <div className="absolute top-6 left-6 bg-[#c9a96e] text-white rounded-2xl px-4 py-2 text-xs font-bold tracking-wide shadow-lg hidden lg:block">
                32 Years Legacy ✦
              </div>
            </div>

            <div className="lg:w-3/5 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              <div className="hidden lg:block mb-8">
                <p className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase mb-2 font-semibold">Leading with Grace & Determination</p>
                <h3 className="font-display text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-2">
                  Mrs. Chitra Ramesh
                </h3>
                <p className="text-gray-400 text-base font-medium">Managing Director · RKS Mangla Store</p>
              </div>

              <div className="space-y-5 mb-10">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  And the most beautiful part of this story is yet to be told.
                </p>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Today, the business is proudly managed by{" "}
                  <strong className="text-[#1a1a1a]">Mrs. Chitra Ramesh</strong> — a strong, determined woman who has taken this legacy forward with dedication, love, and unshakeable confidence.
                </p>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  She handles customers, staff, accounts, and vendor relationships with grace and precision. She is not just maintaining what was built — she is actively taking it to new heights.
                </p>
                <p className="text-[#8b6914] font-semibold text-base sm:text-lg italic border-l-4 border-[#c9a96e] pl-4">
                  "A legacy is not just inherited — it is renewed every single day."
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {qualities.map((q) => (
                  <div
                    key={q.title}
                    className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300 cursor-default border border-transparent hover:border-[#c9a96e]/20"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#c9a96e]/10 flex items-center justify-center text-lg flex-shrink-0 group-hover:bg-[#c9a96e]/20 transition-colors">
                      {q.icon}
                    </div>
                    <div>
                      <p className="font-bold text-[#1a1a1a] text-sm mb-1">{q.title}</p>
                      <p className="text-gray-500 text-xs leading-relaxed">{q.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── VALUES ───────────────────────────────────────────────────────────────────

function ValuesSection() {
  const values = [
    {
      icon: "🤝",
      title: "Honesty Above All",
      desc: "From day one, Ramesh spoke the truth to every customer. That culture of honesty is the foundation every team member stands on today.",
      color: "#c9a96e",
    },
    {
      icon: "💪",
      title: "Resilience",
      desc: "We've faced financial pressure, market competition, and tough seasons. We are still here — stronger. That's our proof.",
      color: "#8b6914",
    },
    {
      icon: "❤️",
      title: "Customer First",
      desc: "Every customer who walks in is family. We don't just sell furniture — we help build homes and lives.",
      color: "#c9a96e",
    },
    {
      icon: "⭐",
      title: "Quality Without Compromise",
      desc: "We carry only the best brands because we believe every hardworking person deserves the very best comfort.",
      color: "#8b6914",
    },
  ];

  return (
    <section className="py-24 bg-[#f8f5f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-[#c9a96e] text-xs font-semibold tracking-[0.4em] uppercase mb-4">What We Stand For</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1a1a1a]">Our Values</h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#c9a96e] to-[#8b6914] mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="group bg-white rounded-3xl p-8 hover:shadow-2xl hover:shadow-[#c9a96e]/10 transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-[#c9a96e]/20 text-center"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ background: `${v.color}15` }}
              >
                {v.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-[#1a1a1a] mb-3">{v.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA BANNER ───────────────────────────────────────────────────────────────

function CtaBanner() {
  return (
    <section className="relative py-24 bg-[#0d0d0d] overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[#c9a96e]/5 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[#8b6914]/5 blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-[#c9a96e] text-xs font-semibold tracking-[0.4em] uppercase mb-5">Come Experience It</p>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          32 Years of Trust,
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a96e] to-[#f5d08a]">
            All Under One Roof.
          </span>
        </h2>
        <p className="text-white/50 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Visit our showroom in Kushalnagar and let us help you find furniture that feels like home — because that's what we've been doing since 1992.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/919342202405"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#c9a96e] to-[#8b6914] text-white px-10 py-4 rounded-full font-semibold text-base hover:shadow-2xl hover:shadow-[#c9a96e]/40 transition-all duration-300 hover:-translate-y-1"
          >
            Visit Our Showroom →
          </a>
          <a
            href="/"
            className="border border-white/30 text-white px-10 py-4 rounded-full font-semibold text-base hover:bg-white/10 transition-all duration-300"
          >
            Explore Collections
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────

function Footer() {
  const handleNav = (link: string) => {
    if (link === "Home") { window.location.href = "/"; return; }
    if (link === "About Us") { window.location.href = "/about"; return; }
    window.location.href = `/#${link.toLowerCase().replace(" ", "-")}`;
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="/" className="flex items-center gap-3 cursor-pointer">
            <LogoBadge />
            <div>
              <p className="text-white font-bold tracking-wide">RKS Mangla Store</p>
              <p className="text-[#c9a96e] text-[10px] tracking-[0.2em] uppercase">Luxury Furniture Experience</p>
            </div>
          </a>

          <div className="flex flex-wrap justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => handleNav(link)}
                className="text-white/40 hover:text-[#c9a96e] text-sm transition-colors bg-transparent border-none cursor-pointer"
              >
                {link}
              </button>
            ))}
          </div>

          <div className="flex gap-3">
            <a href="https://www.instagram.com/mangalastores.rks?igsh=MXQzNjRzeXllYXgyZw==" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#c9a96e]/30 flex items-center justify-center transition-colors text-sm">
              📸
            </a>
            <a href="https://wa.me/919342202405" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#25D366]/30 flex items-center justify-center transition-colors text-sm">
              💬
            </a>
            <a href="mailto:mangalastores.rks@gmail.com"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#c9a96e]/30 flex items-center justify-center transition-colors text-sm">
              ✉️
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-white/30 text-sm">
            © 2025 RKS Mangla Store · Kushalnagar, Karnataka · All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; }
        body { font-family: 'DM Sans', sans-serif; margin: 0; background: #f8f5f0; }
        .font-display, h1, h2, h3, h4 { font-family: 'Playfair Display', serif; }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fadeUp 0.8s ease forwards; }
      `}</style>
      <Navbar />
      <AboutHero />
      <OriginStory />
      <FounderQuote />
      <Leadership />
      <ValuesSection />
      <CtaBanner />
      <Footer />
    </>
  );
}