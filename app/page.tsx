
"use client";

import { useEffect, useState } from "react";
import BrandsSection from "./brands";


const LOGO_URL = "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774869175/WhatsApp_Image_2026-03-30_at_3.20.23_PM_l967wj.jpg"; 

// ─── DATA ───────────────────────────────────────────────────────────────────

const NAV_LINKS = ["Home", "About Us", "Categories", "Brands", "Contact"];

const HERO_WORDS = ["Luxury.", "Comfort.", "Elegance.", "Crafted."];

const CATEGORIES = [
  {
    id: 1,
    title: "Mattresses",
    subtitle: "Sleep like royalty",
    tag: "Premium Sleep",
    gradient: "from-[#c9a96e] to-[#8b6914]",
    bg: "bg-[#fdf6ec]",
    accent: "#c9a96e",
    emoji: "🛏️",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    description:
      "Orthopedic, memory foam & luxury spring mattresses. Engineered for perfect rest.",
    features: ["Orthopedic Support", "Memory Foam", "Luxury Spring"],
  },
  {
    id: 2,
    title: "Office Chairs",
    subtitle: "Command your workspace",
    tag: "Ergonomic Series",
    gradient: "from-[#1a1a2e] to-[#16213e]",
    bg: "bg-[#f0f0f8]",
    accent: "#4a4a8a",
    emoji: "🪑",
    image:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&q=80",
    description:
      "Executive & ergonomic chairs designed for productivity and posture.",
    features: ["Lumbar Support", "Height Adjust", "Premium Mesh"],
  },
  {
    id: 3,
    title: "Home Furniture",
    subtitle: "Transform your living",
    tag: "Living Collection",
    gradient: "from-[#5c3d1e] to-[#8b5e2d]",
    bg: "bg-[#fdf0e6]",
    accent: "#8b5e2d",
    emoji: "🛋️",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    description:
      "Sofas, beds, wardrobes & dining sets. Crafted for Indian homes.",
    features: ["Solid Wood", "Custom Sizes", "10yr Warranty"],
  },
  {
    id: 4,
    title: "Brand Catalogues",
    subtitle: "World-class brands",
    tag: "Premium Brands",
    gradient: "from-[#1c3a1c] to-[#2d5a27]",
    bg: "bg-[#edf5ec]",
    accent: "#2d5a27",
    emoji: "📖",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    description:
      "Explore our curated catalogue of internationally acclaimed brands.",
    features: ["100+ Brands", "Exclusive Deals", "Import Range"],
  },
];

const TESTIMONIALS = [
  {
    name: "Priya Shetty",
    location: "Kushalnagar",
    text: "The mattress I bought from RKS Mangla has completely transformed my sleep. Exceptional quality and the staff was incredibly helpful.",
    rating: 5,
    product: "Orthopedic Mattress",
  },
  {
    name: "Rajesh Kamath",
    location: "Hassan",
    text: "Best furniture store in the region. The office chairs are ergonomic and my back pain is gone. Worth every rupee!",
    rating: 5,
    product: "Executive Chair",
  },
  {
    name: "Anitha Nair",
    location: "Kushalnagar",
    text: "Furnished my entire home with RKS Mangla Store. The living room sofa set is stunning and delivery was on time. Highly recommend!",
    rating: 5,
    product: "Sofa Set",
  },
];

const STATS = [
  { value: "20+", label: "Years of Excellence" },
  { value: "10K+", label: "Happy Customers" },
  { value: "100+", label: "Premium Brands" },
  { value: "500+", label: "Products" },
];

const STORE_ADDRESS = "Mangala Stores and Furnitures, MORE SUPERMARKET BUILDING, No 12-5-4, 4th Block Behind Government Hospital, Maruthi Circle, Hassan Road, Kushalnagar - 571234";
const STORE_PHONE = "9342202405";
const STORE_EMAIL = "mangalastores.rks@gmail.com";
const STORE_INSTAGRAM = "https://www.instagram.com/mangalastores.rks?igsh=MXQzNjRzeXllYXgyZw==";
const WHATSAPP_LINK = `https://wa.me/91${STORE_PHONE}`;

// ─── LOGO COMPONENT ──────────────────────────────────────────────────────────

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

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (link: string) => {
    if (link === "About Us") {
      window.location.href = "/about";
      return;
    }
    const id = link.toLowerCase().replace(" ", "-");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
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
              className="text-white/70 hover:text-[#c9a96e] text-sm tracking-wide transition-colors duration-200 font-medium bg-transparent border-none cursor-pointer"
            >
              {link}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={WHATSAPP_LINK}
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
            href={WHATSAPP_LINK}
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

// ─── HERO ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % HERO_WORDS.length);
        setVisible(true);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&q=80"
          alt="Luxury Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/90 via-[#0d0d0d]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/80 via-transparent to-transparent" />
      </div>

      {/* Decorative rings */}
      <div className="absolute top-32 right-20 w-64 h-64 rounded-full border border-[#c9a96e]/20 animate-spin-slow hidden lg:block" style={{ animationDuration: "20s" }} />
      <div className="absolute top-40 right-28 w-48 h-48 rounded-full border border-[#c9a96e]/10 animate-spin-slow hidden lg:block" style={{ animationDuration: "15s", animationDirection: "reverse" }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-32 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#c9a96e]/20 border border-[#c9a96e]/40 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#c9a96e] animate-pulse" />
            <span className="text-[#c9a96e] text-sm font-medium tracking-wider uppercase">
              Kushalnagar's Premier Furniture Store
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
            Where Every
            <br />
            Room Tells a
            <br />
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-r from-[#c9a96e] to-[#f5d08a] transition-all duration-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ display: "inline-block" }}
            >
              {HERO_WORDS[wordIndex]}
            </span>
          </h1>

          <p className="text-white/70 text-lg sm:text-xl max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
            Over 20 years of crafting extraordinary living spaces. Premium
            mattresses, ergonomic office chairs, and bespoke home furniture —
            all under one roof.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => scrollTo("categories")}
              className="bg-gradient-to-r from-[#c9a96e] to-[#8b6914] text-white px-8 py-4 rounded-full font-semibold text-base hover:shadow-2xl hover:shadow-[#c9a96e]/40 transition-all duration-300 hover:-translate-y-1 cursor-pointer border-none"
            >
              Explore Collections →
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-white/10 transition-all duration-300 cursor-pointer bg-transparent"
            >
              Visit Showroom
            </button>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start">
            {STATS.map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-[#c9a96e]">{s.value}</p>
                <p className="text-white/50 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right floating cards */}
        <div className="hidden lg:flex flex-col gap-4 w-72">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 hover:-translate-y-2 transition-transform duration-500">
            <img
              src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80"
              alt="Premium Mattress"
              className="w-full h-36 object-cover rounded-2xl mb-4"
            />
            <p className="text-white font-semibold">Premium Mattresses</p>
            <p className="text-[#c9a96e] text-sm mt-1">Starting from ₹8,999</p>
          </div>
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 hover:-translate-y-2 transition-transform duration-500 ml-8">
            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80"
              alt="Luxury Sofa"
              className="w-full h-36 object-cover rounded-2xl mb-4"
            />
            <p className="text-white font-semibold">Home Furniture</p>
            <p className="text-[#c9a96e] text-sm mt-1">Custom Designs</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#c9a96e] to-transparent" />
      </div>
    </section>
  );
}

// ─── CATEGORIES ───────────────────────────────────────────────────────────────

function CategoryCard({ cat, index }: { cat: (typeof CATEGORIES)[0]; index: number }) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 cursor-pointer"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <img
          src={cat.image}
          alt={cat.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${cat.gradient} opacity-60`} />
        <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1">
          <span className="text-white text-xs font-semibold tracking-wide">{cat.tag}</span>
        </div>
        <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-xl">
          {cat.emoji}
        </div>
      </div>

      <div className="p-6">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#c9a96e] mb-1">{cat.subtitle}</p>
        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">{cat.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{cat.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {cat.features.map((f) => (
            <span key={f} className="bg-gray-100 text-gray-600 rounded-full px-3 py-1 text-xs font-medium">
              {f}
            </span>
          ))}
        </div>

        <button
          onClick={() => scrollTo("contact")}
          className="w-full py-3 rounded-2xl font-semibold text-sm transition-all duration-300 text-white hover:shadow-lg border-none cursor-pointer"
          style={{ background: `linear-gradient(135deg, ${cat.accent}, ${cat.accent}cc)` }}
        >
          Explore {cat.title} →
        </button>
      </div>
    </div>
  );
}

function CategoriesSection() {
  return (
    <section id="categories" className="py-24 bg-[#f8f5f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-[#c9a96e] text-sm font-semibold tracking-[0.3em] uppercase mb-3">What We Offer</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] mb-4">Our Collections</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Handpicked furniture and sleep solutions to elevate every corner of your life.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#c9a96e] to-[#8b6914] mx-auto mt-6 rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.id} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── WHY US ───────────────────────────────────────────────────────────────────

function WhyUsSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const points = [
    { icon: "🏆", title: "20+ Years of Trust", desc: "Two decades serving families across Kushalnagar, Hassan & surrounding regions." },
    { icon: "🛡️", title: "Warranty Assured", desc: "Every product backed by manufacturer warranty and our service promise." },
    { icon: "🚚", title: "Home Delivery", desc: "Free delivery and professional installation across the region." },
    { icon: "💎", title: "Premium Quality", desc: "Curated selection of international and Indian premium furniture brands." },
    { icon: "💰", title: "Best Price Promise", desc: "Competitive pricing with EMI options on all major purchases." },
    { icon: "🎨", title: "Custom Designs", desc: "Bespoke furniture crafted to your exact requirements and taste." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <p className="text-[#c9a96e] text-sm font-semibold tracking-[0.3em] uppercase mb-3">Why Choose Us</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] mb-6 leading-tight">
              Experience the
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a96e] to-[#8b6914]">
                RKS Mangla Store
              </span>
              <br />
              Difference
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              From the moment you walk into our showroom to the day your furniture arrives at home — we ensure an experience that's nothing short of exceptional.
            </p>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-block bg-[#1a1a1a] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c9a96e] transition-colors duration-300 border-none cursor-pointer"
            >
              Visit Our Showroom →
            </button>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {points.map((p) => (
              <div
                key={p.title}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-[#c9a96e]/30 hover:shadow-xl hover:shadow-[#c9a96e]/10 transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#f8f5f0] flex items-center justify-center text-2xl mb-4 group-hover:bg-[#c9a96e]/10 transition-colors">
                  {p.icon}
                </div>
                <h3 className="font-bold text-[#1a1a1a] mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SHOWROOM GALLERY ─────────────────────────────────────────────────────────

function ShowroomSection() {
  return (
    <section className="py-24 bg-[#f8f5f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-[#c9a96e] text-sm font-semibold tracking-[0.3em] uppercase mb-3">Gallery</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] mb-4">Inside Our Showroom</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#c9a96e] to-[#8b6914] mx-auto mt-2 rounded-full" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774865259/WhatsApp_Image_2026-03-30_at_3.20.21_PM_yx39xg.jpg",
            "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774865331/WhatsApp_Image_2026-03-30_at_3.20.22_PM_hl3tkq.jpg",
            "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774865585/WhatsApp_Image_2026-03-30_at_3.20.22_PM_sma5mz.jpg",
            "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774865465/WhatsApp_Image_2026-03-30_at_3.20.22_PM_zxrvht.jpg",
            "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774865384/WhatsApp_Image_2026-03-30_at_3.20.22_PM_z9ubrb.jpg",
            "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774865770/WhatsApp_Image_2026-03-30_at_3.20.22_PM_k4yxm0.jpg",
          ].map((src, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl group ${i === 0 ? "col-span-2 lg:col-span-1 row-span-2" : ""}`}
            >
              <img
                src={src}
                alt={`Showroom ${i + 1}`}
                className={`w-full object-cover group-hover:scale-105 transition-transform duration-700 ${i === 0 ? "h-[400px] sm:h-[500px]" : "h-44 sm:h-52"}`}
              />
              <div className="absolute inset-0 bg-[#0d0d0d]/20 group-hover:bg-[#0d0d0d]/0 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────

function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#0d0d0d] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&q=80')] bg-cover bg-center opacity-5" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-[#c9a96e] text-sm font-semibold tracking-[0.3em] uppercase mb-3">Testimonials</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">What Our Customers Say</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#c9a96e] to-[#8b6914] mx-auto mt-2 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-[#c9a96e]/40 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <span key={j} className="text-[#c9a96e]">★</span>
                ))}
              </div>
              <p className="text-white/80 leading-relaxed mb-6 text-sm">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c9a96e] to-[#8b6914] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{t.name[0]}</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.location} · {t.product}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────

function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", category: "", message: "" });

  const handleSubmit = () => {
    if (!formData.name || !formData.phone) {
      alert("Please fill in your name and phone number.");
      return;
    }
    // Compose WhatsApp message
    const msg = encodeURIComponent(
      `Hello RKS Mangla Store!\n\nName: ${formData.name}\nPhone: ${formData.phone}\nInterested in: ${formData.category || "General enquiry"}\n\n${formData.message || ""}`
    );
    window.open(`https://wa.me/91${STORE_PHONE}?text=${msg}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left */}
          <div className="flex-1">
            <p className="text-[#c9a96e] text-sm font-semibold tracking-[0.3em] uppercase mb-3">Get in Touch</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] mb-6">Visit Us Today</h2>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed">
              Come experience our showroom in person. Our experts will help you find the perfect furniture for your home.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#f8f5f0] flex items-center justify-center text-xl flex-shrink-0">📍</div>
                <div>
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">Address</p>
                  <p className="text-[#1a1a1a] font-medium text-sm leading-relaxed">
                    Mangala Stores and Furnitures<br />
                    MORE SUPERMARKET BUILDING,<br />
                    No 12-5-4, 4th Block Behind Government Hospital,<br />
                    Maruthi Circle, Hassan Road<br />
                    Kushalnagar – 571234
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#f8f5f0] flex items-center justify-center text-xl flex-shrink-0">📞</div>
                <div>
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">Phone / WhatsApp</p>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1a1a1a] font-medium hover:text-[#c9a96e] transition-colors"
                  >
                    +91 93422 02405
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#f8f5f0] flex items-center justify-center text-xl flex-shrink-0">🕐</div>
                <div>
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">Timings</p>
                  <p className="text-[#1a1a1a] font-medium">Mon–Sat: 10:00 AM – 8:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#f8f5f0] flex items-center justify-center text-xl flex-shrink-0">📧</div>
                <div>
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">Email</p>
                  <a
                    href={`mailto:${STORE_EMAIL}`}
                    className="text-[#1a1a1a] font-medium hover:text-[#c9a96e] transition-colors"
                  >
                    {STORE_EMAIL}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex gap-3 mt-10 flex-wrap">
              <a
                href={STORE_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-200 hover:border-[#c9a96e] hover:text-[#c9a96e] text-gray-500 rounded-xl px-4 py-2 text-sm transition-all duration-200 flex items-center gap-1.5"
              >
                📸 Instagram
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-200 hover:border-[#25D366] hover:text-[#25D366] text-gray-500 rounded-xl px-4 py-2 text-sm transition-all duration-200 flex items-center gap-1.5"
              >
                💬 WhatsApp
              </a>
              <a
                href={`mailto:${STORE_EMAIL}`}
                className="border border-gray-200 hover:border-[#c9a96e] hover:text-[#c9a96e] text-gray-500 rounded-xl px-4 py-2 text-sm transition-all duration-200 flex items-center gap-1.5"
              >
                ✉️ Email Us
              </a>
            </div>
          </div>

          {/* Right - Enquiry Form */}
          <div className="flex-1 bg-[#f8f5f0] rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">Send an Enquiry</h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center h-64 gap-4">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl">✅</div>
                <p className="text-[#1a1a1a] font-bold text-xl">Enquiry Sent!</p>
                <p className="text-gray-500 text-sm text-center">We've opened WhatsApp with your message. Our team will respond shortly.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-500 text-sm mb-2 block">Your Name *</label>
                    <input
                      type="text"
                      placeholder="Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c9a96e] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-gray-500 text-sm mb-2 block">Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="+91 93422 02405"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c9a96e] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-gray-500 text-sm mb-2 block">I'm interested in</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c9a96e] transition-colors text-gray-700"
                  >
                    <option value="">Select a category</option>
                    <option>Mattresses</option>
                    <option>Office Chairs</option>
                    <option>Home Furniture</option>
                    <option>Brand Catalogues</option>
                  </select>
                </div>
                <div>
                  <label className="text-gray-500 text-sm mb-2 block">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what you're looking for..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c9a96e] transition-colors resize-none"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-[#c9a96e] to-[#8b6914] text-white py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-[#c9a96e]/30 transition-all duration-300 hover:-translate-y-0.5 border-none cursor-pointer"
                >
                  Send via WhatsApp →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────

function Footer() {
  const handleNav = (link: string) => {
    if (link === "About Us") { window.location.href = "/about"; return; }
    const el = document.getElementById(link.toLowerCase().replace(" ", "-"));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="/" className="flex items-center gap-3">
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
            <a href={STORE_INSTAGRAM} target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#c9a96e]/30 flex items-center justify-center transition-colors text-sm">
              📸
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#25D366]/30 flex items-center justify-center transition-colors text-sm">
              💬
            </a>
            <a href={`mailto:${STORE_EMAIL}`}
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

// ─── ABOUT US ─────────────────────────────────────────────────────────────────


// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; }
        body { font-family: 'DM Sans', sans-serif; margin: 0; }
        h1, h2, h3, h4 { font-family: 'Playfair Display', serif; }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .transition-400 { transition: all 0.4s ease; }
      `}</style>
      <Navbar />
      <HeroSection />
      <BrandsSection />
      <CategoriesSection />
      <WhyUsSection />
      <ShowroomSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  );
}