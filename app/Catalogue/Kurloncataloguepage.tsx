"use client";

import { useState, useEffect, useRef } from "react";

// ─── PRODUCT IMAGES ─────────────────────────────────────────────────────────

const PRODUCT_IMAGES: Record<string, string> = {
  // OrthoMagic Series
  "OrthoMagic Elite":
    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
  "OrthoMagic Premium":
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80",
  "OrthoMagic Popular":
    "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80",
  "OrthoMagic Essential":
    "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=600&q=80",

  // SpringRest Pocket Series
  "SpringRest Pocket Premium":
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
  "SpringRest Pocket Popular":
    "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?w=600&q=80",
  "SpringRest Pocket Essential":
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
};

const CATEGORY_HERO_IMAGES: Record<string, string> = {
  Mattresses:
    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80",
};

// ─── CATALOGUE DATA ──────────────────────────────────────────────────────────

type StorageOption = string;

interface MattressProduct {
  name: string;
  highlights: string[];
  sizes: string;
  storage: StorageOption[];
  specifications: {
    thickness: string;
    warranty: string;
    feel: string;
    core: string;
  };
  features: string[];
  layers: string[];
  tags: string[];
  priceRange: string;
}

interface MattressCategoryData {
  icon: string;
  tagline: string;
  description: string;
  products: MattressProduct[];
}

const CATALOGUE: Record<string, MattressCategoryData> = {
  Mattresses: {
    icon: "🛏",
    tagline: "Sleep Reimagined",
    description:
      "Premium mattresses engineered for comfort, spinal support, and healthier sleep — from natural latex to advanced pocket springs.",
    products: [
      // ── ORTHOMAGIC SERIES ──────────────────────────────────────────────
      {
        name: "OrthoMagic Elite",
        highlights: [
          "Natural Latex core for responsive bounce",
          "Full-body pressure relief & spine alignment",
          "Higher motion isolation — ideal for couples",
          "Breathable knitted fabric cover",
        ],
        sizes: "Thickness: 8\" & 10\" | All standard bed sizes",
        storage: [],
        specifications: {
          thickness: "8\" & 10\"",
          warranty: "10 Years",
          feel: "Medium Firm",
          core: "Natural Latex",
        },
        features: [
          "Natural Spine Alignment",
          "Full Body Pressure Relief",
          "Higher Motion Isolation",
          "Responsive Bounce",
          "Breathable Knitted Fabric",
        ],
        layers: [
          "Soft Foam & Fibre Quilt",
          "Natural Latex",
          "High Resilience Foam",
          "Rubberised Coir",
          "STR8 Coir Pad",
          "Anti-Skid Fabric",
        ],
        tags: ["orthopedic", "latex", "premium", "couples"],
        priceRange: "₹₹₹₹",
      },
      {
        name: "OrthoMagic Premium",
        highlights: [
          "Natural Latex core with anti-microbial treatment",
          "Ergonomic spine alignment & pressure relief",
          "Motion isolation for undisturbed sleep",
          "Soft foam quilt for plush surface feel",
        ],
        sizes: "Thickness: 7\" & 8\" | All standard bed sizes",
        storage: [],
        specifications: {
          thickness: "7\" & 8\"",
          warranty: "7 Years",
          feel: "Medium Firm",
          core: "Natural Latex",
        },
        features: [
          "Natural Spine Alignment",
          "Higher Motion Isolation",
          "Breathable Knitted Fabric",
          "Responsive Bounce",
          "Anti-Microbial",
        ],
        layers: [
          "Soft Foam Quilt",
          "Natural Latex",
          "High Resilience Foam",
          "Rubberised Coir",
          "STR8 Coir Pad",
          "Anti-Skid Fabric",
        ],
        tags: ["orthopedic", "latex", "anti-microbial"],
        priceRange: "₹₹₹",
      },
      {
        name: "OrthoMagic Popular",
        highlights: [
          "Natural Latex core with motion isolation",
          "Spine alignment for healthy posture",
          "Anti-microbial protection",
          "Breathable fabric for cool sleep",
        ],
        sizes: "Thickness: 6\" & 8\" | All standard bed sizes",
        storage: [],
        specifications: {
          thickness: "6\" & 8\"",
          warranty: "6 Years",
          feel: "Medium Firm",
          core: "Natural Latex",
        },
        features: [
          "Natural Spine Alignment",
          "Motion Isolation",
          "Breathable Knitted Fabric",
          "Responsive Bounce",
          "Anti-Microbial",
        ],
        layers: [
          "Soft Foam Quilt",
          "Natural Latex",
          "High Resilience Foam",
          "STR8 Coir Pad",
          "Anti-Skid Fabric",
        ],
        tags: ["orthopedic", "latex", "value"],
        priceRange: "₹₹",
      },
      {
        name: "OrthoMagic Essential",
        highlights: [
          "Natural Latex core — entry-level ortho comfort",
          "Spine alignment for everyday support",
          "Anti-microbial fabric treatment",
          "Compact size, ideal for single beds",
        ],
        sizes: "Thickness: 5\" & 6\" | All standard bed sizes",
        storage: [],
        specifications: {
          thickness: "5\" & 6\"",
          warranty: "5 Years",
          feel: "Medium Firm",
          core: "Natural Latex",
        },
        features: [
          "Natural Spine Alignment",
          "Breathable Knitted Fabric",
          "Responsive Bounce",
          "Anti-Microbial",
        ],
        layers: [
          "Soft Foam Quilt",
          "Natural Latex",
          "High Resilience Foam",
          "STR8 Coir Pad",
          "Anti-Skid Fabric",
        ],
        tags: ["orthopedic", "latex", "entry-level"],
        priceRange: "₹",
      },

      // ── SPRINGREST POCKET SERIES ───────────────────────────────────────
      {
        name: "SpringRest Pocket Premium",
        highlights: [
          "3-Zone Pocket Spring for targeted body support",
          "Memory Foam + Natural Latex comfort layers",
          "Zero partner disturbance — independent coils",
          "Side wall support prevents edge sag",
        ],
        sizes: "Thickness: 8\" & 10\" | All standard bed sizes",
        storage: [],
        specifications: {
          thickness: "8\" & 10\"",
          warranty: "10 Years",
          feel: "Medium Firm",
          core: "Pocket Spring",
        },
        features: [
          "3 Zone Pocket Spring",
          "No Partner Disturbance",
          "Body Zone HR Foam",
          "Memory Foam Comfort",
          "Natural Latex Layer",
        ],
        layers: [
          "Soft Foam Quilt",
          "Natural Latex",
          "Memory Foam",
          "High Resilience Foam",
          "Pocket Spring",
          "Side Wall Support",
        ],
        tags: ["spring", "memory-foam", "latex", "couples", "premium"],
        priceRange: "₹₹₹₹",
      },
      {
        name: "SpringRest Pocket Popular",
        highlights: [
          "Pocket springs with body-zone HR foam",
          "Memory foam comfort layer",
          "No partner disturbance",
          "Sag prevention with side wall support",
        ],
        sizes: "Thickness: 7\" & 8\" | All standard bed sizes",
        storage: [],
        specifications: {
          thickness: "7\" & 8\"",
          warranty: "7 Years",
          feel: "Medium Firm",
          core: "Pocket Spring",
        },
        features: [
          "Body Zone HR Foam",
          "Memory Foam Layer",
          "No Partner Disturbance",
          "Sag Prevention",
          "Medium Firm Support",
        ],
        layers: [
          "Soft Foam Quilt",
          "Memory Foam",
          "High Resilience Foam",
          "Pocket Spring",
          "Side Wall Support",
        ],
        tags: ["spring", "memory-foam", "couples"],
        priceRange: "₹₹₹",
      },
      {
        name: "SpringRest Pocket Essential",
        highlights: [
          "Pocket spring technology at accessible price",
          "Body-zone support for back & lumbar",
          "Sag prevention for long-lasting comfort",
          "Medium firm feel for all sleepers",
        ],
        sizes: "Thickness: 6\" & 8\" | All standard bed sizes",
        storage: [],
        specifications: {
          thickness: "6\" & 8\"",
          warranty: "6 Years",
          feel: "Medium Firm",
          core: "Pocket Spring",
        },
        features: [
          "Body Zone Support",
          "Pocket Spring Technology",
          "Sag Prevention",
          "Medium Firm Comfort",
        ],
        layers: [
          "Soft Foam Quilt",
          "High Resilience Foam",
          "Pocket Spring",
          "Side Wall Support",
        ],
        tags: ["spring", "value", "entry-level"],
        priceRange: "₹₹",
      },
    ],
  },
};

type CategoryKey = keyof typeof CATALOGUE;

// ─── PRODUCT CARD ────────────────────────────────────────────────────────────

function ProductCard({
  product,
  index,
}: {
  product: MattressProduct;
  index: number;
}) {
  const img =
    PRODUCT_IMAGES[product.name] ??
    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80";
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <article className="product-card" style={{ animationDelay: `${index * 50}ms` }}>
      {/* Image */}
      <div className="product-img-wrap">
        {!imgLoaded && <div className="img-skeleton" />}
        <img
          src={img}
          alt={product.name}
          className={`product-img ${imgLoaded ? "loaded" : ""}`}
          onLoad={() => setImgLoaded(true)}
          loading="lazy"
        />
        <div className="product-img-overlay" />
        <span className="product-index-badge">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Specs chips on image */}
        <div className="product-img-tags">
          <span className="img-storage-tag">
            {product.specifications.thickness}
          </span>
          <span className="img-storage-tag">
            {product.specifications.warranty}
          </span>
          <span className="img-storage-tag">{product.specifications.feel}</span>
        </div>
      </div>

      {/* Content */}
      <div className="product-content">
        <div className="product-header">
          <h3 className="product-name">{product.name}</h3>
          <span className="product-price">{product.priceRange}</span>
        </div>

       

        {/* Layers section */}
        {product.layers.length > 0 && (
          <div className="layers-wrap">
            <span className="layers-label">Construction Layers</span>
            <div className="layers-list">
              {product.layers.map((l, i) => (
                <div key={l} className="layer-item">
                  <span className="layer-num">{i + 1}</span>
                  <span className="layer-name">{l}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="tag-row">
          {product.tags.map((t) => (
            <span key={t} className="tag-chip">
              #{t}
            </span>
          ))}
        </div>

        <a
          href="https://wa.me/919342202405"
          target="_blank"
          rel="noopener noreferrer"
          className="product-enquire-btn"
        >
          Enquire on WhatsApp →
        </a>
      </div>
    </article>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function KurlonCataloguePage() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryKey>("Mattresses");
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const category = CATALOGUE[activeCategory];
  const filtered = searchQuery.trim()
    ? (Object.keys(CATALOGUE) as CategoryKey[]).flatMap((cat) =>
        CATALOGUE[cat].products
          .filter(
            (p) =>
              p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              p.highlights.some((h) =>
                h.toLowerCase().includes(searchQuery.toLowerCase())
              ) ||
              p.tags.some((t) =>
                t.toLowerCase().includes(searchQuery.toLowerCase())
              )
          )
          .map((p) => ({ ...p, _cat: cat }))
      )
    : category.products.map((p) => ({ ...p, _cat: activeCategory }));

  const handleCategoryChange = (cat: CategoryKey) => {
    setActiveCategory(cat);
    setSearchQuery("");
    setSidebarOpen(false);
    if (mainRef.current)
      mainRef.current.scrollTo({ top: 0, behavior: "smooth" });
  };

  const totalProducts = Object.values(CATALOGUE).reduce(
    (acc, c) => acc + c.products.length,
    0
  );

  return (
    <div className="page-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .page-root {
          font-family: 'DM Sans', system-ui, sans-serif;
          background: #0a0a0e;
          color: #fff;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* ─── TOP NAV ─── */
        .top-nav {
          position: sticky; top: 0; z-index: 100;
          transition: all 0.4s ease;
          background: rgba(10,10,14,0.0);
          border-bottom: 1px solid transparent;
        }
        .top-nav.scrolled {
          background: rgba(10,10,14,0.95);
          backdrop-filter: blur(20px);
          border-bottom-color: rgba(201,169,110,0.1);
          box-shadow: 0 4px 30px rgba(0,0,0,0.5);
        }
        .nav-inner {
          max-width: 1400px; margin: 0 auto; padding: 0 24px;
          height: 68px; display: flex; align-items: center; gap: 16px;
        }
        .nav-back {
          display: flex; align-items: center; gap: 8px;
          color: rgba(255,255,255,0.5); font-size: 13px; font-weight: 500;
          text-decoration: none; transition: color 0.2s;
          background: none; border: 1px solid rgba(255,255,255,0.08);
          cursor: pointer; padding: 6px 12px; border-radius: 8px;
        }
        .nav-back:hover { color: #c9a96e; border-color: rgba(201,169,110,0.2); }
        .nav-divider { width: 1px; height: 24px; background: rgba(255,255,255,0.1); }
        .nav-brand { display: flex; align-items: center; gap: 10px; }
        .nav-logo {
          width: 42px; height: 42px; border-radius: 10px; background: #fff;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden; padding: 5px;
          border: 1px solid rgba(201,169,110,0.2); flex-shrink: 0;
        }
        .nav-logo img { width: 100%; height: 100%; object-fit: contain; }
        .nav-brand-text { line-height: 1; }
        .nav-brand-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px; font-weight: 700; color: #fff;
        }
        .nav-brand-sub {
          font-size: 10px; color: rgba(201,169,110,0.7);
          letter-spacing: 0.15em; text-transform: uppercase; margin-top: 1px;
        }
        .nav-spacer { flex: 1; }
        .nav-search-wrap {
          display: flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1);
          border-radius: 100px; padding: 9px 18px; transition: border-color 0.2s;
        }
        .nav-search-wrap:focus-within { border-color: rgba(201,169,110,0.4); }
        .search-ico { color: rgba(255,255,255,0.3); flex-shrink: 0; }
        .nav-search {
          background: none; border: none; outline: none; color: #fff;
          font-size: 13px; font-family: 'DM Sans', sans-serif; width: 190px;
        }
        .nav-search::placeholder { color: rgba(255,255,255,0.25); }
        .nav-stats {
          display: flex; align-items: center; gap: 6px;
          background: rgba(201,169,110,0.08); border: 1px solid rgba(201,169,110,0.2);
          border-radius: 100px; padding: 6px 14px;
        }
        .nav-stats-dot { width: 6px; height: 6px; border-radius: 50%; background: #c9a96e; }
        .nav-stats-text { font-size: 12px; color: #c9a96e; font-weight: 600; }
        .mobile-menu-btn {
          display: none; background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1); color: #fff;
          width: 40px; height: 40px; border-radius: 10px;
          align-items: center; justify-content: center; cursor: pointer; font-size: 18px;
        }

        /* ─── BODY LAYOUT ─── */
        .page-body {
          flex: 1; display: flex; max-width: 1400px;
          margin: 0 auto; width: 100%; padding: 0 24px; gap: 0;
        }

        /* ─── SIDEBAR ─── */
        .sidebar {
          width: 230px; flex-shrink: 0;
          position: sticky; top: 68px; height: calc(100vh - 68px);
          overflow-y: auto; padding: 28px 0;
          border-right: 1px solid rgba(255,255,255,0.06);
          display: flex; flex-direction: column; gap: 3px;
          scrollbar-width: thin; scrollbar-color: rgba(255,255,255,0.1) transparent;
        }
        .sidebar::-webkit-scrollbar { width: 4px; }
        .sidebar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }
        .sidebar-heading {
          font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase;
          color: rgba(255,255,255,0.2); font-weight: 700;
          padding: 0 10px; margin-bottom: 8px; margin-top: 4px;
        }
        .sidebar-cat-btn {
          display: flex; align-items: center; gap: 10px; padding: 10px 12px;
          border-radius: 12px; background: transparent; border: 1px solid transparent;
          cursor: pointer; color: rgba(255,255,255,0.4); font-size: 13px; font-weight: 500;
          font-family: 'DM Sans', sans-serif; text-align: left; transition: all 0.2s; width: 100%;
        }
        .sidebar-cat-btn:hover { background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.7); }
        .sidebar-cat-btn.active {
          background: rgba(201,169,110,0.1);
          border-color: rgba(201,169,110,0.25); color: #c9a96e;
        }
        .cat-icon { font-size: 16px; flex-shrink: 0; }
        .cat-label { flex: 1; }
        .cat-count {
          font-size: 10px; background: rgba(255,255,255,0.07);
          padding: 2px 7px; border-radius: 100px; color: rgba(255,255,255,0.3);
        }
        .sidebar-cat-btn.active .cat-count {
          background: rgba(201,169,110,0.15); color: rgba(201,169,110,0.8);
        }
        .sidebar-sep { height: 1px; background: rgba(255,255,255,0.06); margin: 12px 0; }
        .sidebar-brand-card {
          margin: 0 4px; background: rgba(201,169,110,0.06);
          border: 1px solid rgba(201,169,110,0.12); border-radius: 12px; padding: 14px;
        }
        .brand-card-title {
          font-family: 'Cormorant Garamond', serif; font-size: 13px; font-weight: 700;
          color: rgba(255,255,255,0.5); margin-bottom: 6px;
        }
        .brand-card-text { font-size: 10px; color: rgba(255,255,255,0.2); line-height: 1.6; }
        .brand-certs { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 8px; }
        .cert-badge {
          font-size: 9px; color: rgba(201,169,110,0.6);
          background: rgba(201,169,110,0.08); border: 1px solid rgba(201,169,110,0.15);
          border-radius: 100px; padding: 2px 7px; font-weight: 600; letter-spacing: 0.05em;
        }

        /* ─── MAIN ─── */
        .main-content { flex: 1; padding: 28px 0 28px 28px; overflow-y: auto; min-width: 0; }

        /* ─── CATEGORY HERO ─── */
        .cat-hero {
          position: relative; height: 220px; border-radius: 20px;
          overflow: hidden; margin-bottom: 28px;
        }
        .cat-hero-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
        .cat-hero:hover .cat-hero-img { transform: scale(1.04); }
        .cat-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(90deg, rgba(10,10,14,0.9) 0%, rgba(10,10,14,0.5) 60%, rgba(10,10,14,0.2) 100%);
        }
        .cat-hero-content {
          position: absolute; inset: 0;
          display: flex; flex-direction: column; justify-content: center; padding: 32px;
        }
        .cat-hero-eyebrow {
          font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
          color: #c9a96e; font-weight: 600; margin-bottom: 8px;
          display: flex; align-items: center; gap: 8px;
        }
        .cat-hero-eyebrow::before {
          content: ''; display: block; width: 24px; height: 1px; background: #c9a96e;
        }
        .cat-hero-title {
          font-family: 'Cormorant Garamond', serif; font-size: 42px;
          font-weight: 700; color: #fff; line-height: 1; margin-bottom: 8px;
        }
        .cat-hero-desc { font-size: 13px; color: rgba(255,255,255,0.55); max-width: 360px; line-height: 1.6; }
        .cat-hero-badge {
          position: absolute; top: 20px; right: 20px;
          background: rgba(201,169,110,0.15); border: 1px solid rgba(201,169,110,0.3);
          backdrop-filter: blur(8px); border-radius: 100px; padding: 6px 14px;
          font-size: 12px; color: #c9a96e; font-weight: 600;
        }

        /* ─── SEARCH RESULTS LABEL ─── */
        .search-results-label {
          display: flex; align-items: center; gap: 10px; margin-bottom: 20px;
          padding: 12px 16px; background: rgba(201,169,110,0.06);
          border: 1px solid rgba(201,169,110,0.15); border-radius: 10px;
        }
        .search-results-label span { font-size: 13px; color: rgba(255,255,255,0.5); }
        .search-results-label strong { color: #c9a96e; }

        /* ─── PRODUCT GRID ─── */
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 16px;
        }

        .product-card {
          background: #111116; border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px; overflow: hidden; display: flex; flex-direction: column;
          transition: all 0.3s ease;
          animation: cardReveal 0.5s cubic-bezier(0.23,1,0.32,1) both;
          cursor: default;
        }
        .product-card:hover {
          border-color: rgba(201,169,110,0.3); transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,169,110,0.1);
        }
        @keyframes cardReveal {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .product-img-wrap {
          position: relative; height: 180px; overflow: hidden;
          background: #1a1a20; flex-shrink: 0;
        }
        .img-skeleton {
          position: absolute; inset: 0;
          background: linear-gradient(90deg, #1a1a20 25%, #222228 50%, #1a1a20 75%);
          background-size: 200% 100%; animation: shimmer 1.5s infinite;
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .product-img {
          width: 100%; height: 100%; object-fit: cover;
          opacity: 0; transition: opacity 0.4s ease, transform 0.5s ease;
        }
        .product-img.loaded { opacity: 1; }
        .product-card:hover .product-img { transform: scale(1.06); }
        .product-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(10,10,14,0.05) 0%, rgba(10,10,14,0.6) 100%);
        }
        .product-index-badge {
          position: absolute; top: 12px; left: 12px;
          font-family: 'Cormorant Garamond', serif; font-size: 11px; font-weight: 700;
          color: rgba(201,169,110,0.8); background: rgba(10,10,14,0.7);
          backdrop-filter: blur(4px); padding: 3px 8px; border-radius: 6px;
          border: 1px solid rgba(201,169,110,0.2); letter-spacing: 0.08em;
        }
        .product-img-tags {
          position: absolute; bottom: 10px; left: 10px; right: 10px;
          display: flex; flex-wrap: wrap; gap: 4px;
        }
        .img-storage-tag {
          font-size: 9px; font-weight: 600; color: rgba(201,169,110,0.9);
          background: rgba(10,10,14,0.8); backdrop-filter: blur(4px);
          border: 1px solid rgba(201,169,110,0.2); padding: 3px 8px;
          border-radius: 100px; text-transform: uppercase; letter-spacing: 0.06em;
        }

        .product-content { padding: 16px; display: flex; flex-direction: column; gap: 10px; flex: 1; }

        .product-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; }
        .product-name { font-size: 15px; font-weight: 700; color: #fff; line-height: 1.3; letter-spacing: 0.01em; }
        .product-price {
          font-size: 12px; font-weight: 700; color: #c9a96e;
          background: rgba(201,169,110,0.08); border: 1px solid rgba(201,169,110,0.15);
          padding: 2px 8px; border-radius: 100px; flex-shrink: 0; margin-top: 2px;
        }

        /* Spec chips */
        .spec-row { display: flex; gap: 6px; }
        .spec-chip {
          display: flex; flex-direction: column; gap: 1px;
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06);
          border-radius: 8px; padding: 6px 10px; flex: 1;
        }
        .spec-label {
          font-size: 8px; text-transform: uppercase; letter-spacing: 0.12em;
          color: rgba(201,169,110,0.5); font-weight: 700;
        }
        .spec-val { font-size: 11px; color: rgba(255,255,255,0.6); font-weight: 500; }

        .product-highlights { list-style: none; display: flex; flex-direction: column; gap: 4px; }
        .product-highlights li {
          font-size: 11.5px; color: rgba(255,255,255,0.4); line-height: 1.5;
          padding-left: 14px; position: relative;
        }
        .product-highlights li::before {
          content: '›'; position: absolute; left: 0;
          color: #c9a96e; font-weight: 700; font-size: 13px;
        }

        /* Layers */
        .layers-wrap {
          background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05);
          border-radius: 10px; padding: 10px;
        }
        .layers-label {
          font-size: 9px; text-transform: uppercase; letter-spacing: 0.12em;
          color: rgba(201,169,110,0.5); font-weight: 700; display: block; margin-bottom: 8px;
        }
        .layers-list { display: flex; flex-direction: column; gap: 4px; }
        .layer-item { display: flex; align-items: center; gap: 8px; }
        .layer-num {
          width: 16px; height: 16px; border-radius: 50%; background: rgba(201,169,110,0.12);
          border: 1px solid rgba(201,169,110,0.2); display: flex; align-items: center;
          justify-content: center; font-size: 8px; color: #c9a96e; font-weight: 700; flex-shrink: 0;
        }
        .layer-name { font-size: 10.5px; color: rgba(255,255,255,0.3); }

        /* Tags */
        .tag-row { display: flex; flex-wrap: wrap; gap: 4px; }
        .tag-chip {
          font-size: 9px; color: rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07);
          padding: 2px 7px; border-radius: 100px; font-weight: 500;
        }

        .product-enquire-btn {
          display: block; text-align: center;
          background: linear-gradient(135deg, rgba(201,169,110,0.12), rgba(139,105,20,0.12));
          border: 1px solid rgba(201,169,110,0.25); color: #c9a96e;
          font-size: 12px; font-weight: 600; padding: 10px; border-radius: 10px;
          text-decoration: none; transition: all 0.2s; font-family: 'DM Sans', sans-serif;
          letter-spacing: 0.02em;
        }
        .product-enquire-btn:hover {
          background: linear-gradient(135deg, rgba(201,169,110,0.2), rgba(139,105,20,0.2));
          border-color: rgba(201,169,110,0.5); color: #f5d08a;
        }

        /* ─── EMPTY STATE ─── */
        .empty-state {
          display: flex; flex-direction: column; align-items: center;
          justify-content: center; padding: 80px 20px; text-align: center; gap: 12px;
        }
        .empty-icon { font-size: 48px; opacity: 0.3; }
        .empty-title { font-size: 18px; color: rgba(255,255,255,0.3); font-weight: 600; }
        .empty-sub { font-size: 13px; color: rgba(255,255,255,0.15); }

        /* ─── MOBILE SIDEBAR ─── */
        .mobile-sidebar-overlay {
          display: none; position: fixed; inset: 0; z-index: 200;
          background: rgba(0,0,0,0.7); backdrop-filter: blur(4px);
        }
        .mobile-sidebar-drawer {
          position: fixed; left: 0; top: 0; bottom: 0; width: 260px;
          background: #111116; border-right: 1px solid rgba(255,255,255,0.08);
          z-index: 201; overflow-y: auto; padding: 24px 16px;
          transform: translateX(-100%);
          transition: transform 0.3s cubic-bezier(0.23,1,0.32,1);
          display: flex; flex-direction: column; gap: 3px;
        }
        .mobile-sidebar-drawer.open { transform: translateX(0); }
        .mobile-drawer-header {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 20px; padding-bottom: 16px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .mobile-drawer-title {
          font-family: 'Cormorant Garamond', serif; font-size: 18px; font-weight: 700; color: #fff;
        }
        .drawer-close-btn {
          width: 32px; height: 32px; background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1); border-radius: 8px;
          color: rgba(255,255,255,0.5); cursor: pointer; display: flex;
          align-items: center; justify-content: center; font-size: 18px;
        }

        /* ─── MOBILE BOTTOM TABS ─── */
        .mobile-bottom-tabs {
          display: none; position: fixed; bottom: 0; left: 0; right: 0; z-index: 90;
          background: rgba(10,10,14,0.97); backdrop-filter: blur(20px);
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 8px 4px 12px; gap: 2px; overflow-x: auto; scrollbar-width: none;
        }
        .mobile-bottom-tabs::-webkit-scrollbar { display: none; }
        .mobile-tab-btn {
          display: flex; flex-direction: column; align-items: center; gap: 3px;
          padding: 6px 10px; border-radius: 10px; background: transparent; border: none;
          cursor: pointer; color: rgba(255,255,255,0.35); font-size: 10px;
          font-family: 'DM Sans', sans-serif; font-weight: 500; flex-shrink: 0;
          transition: all 0.2s; white-space: nowrap;
        }
        .mobile-tab-btn.active { color: #c9a96e; }
        .mobile-tab-icon { font-size: 20px; }
        .mobile-tab-active-dot { width: 4px; height: 4px; border-radius: 50%; background: #c9a96e; }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 768px) {
          .sidebar { display: none; }
          .mobile-menu-btn { display: flex; }
          .mobile-sidebar-overlay { display: block; }
          .mobile-bottom-tabs { display: flex; }
          .page-body { padding: 0 16px; padding-bottom: 80px; }
          .main-content { padding: 20px 0 20px; }
          .cat-hero { height: 180px; }
          .cat-hero-title { font-size: 32px; }
          .product-grid { grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 12px; }
          .nav-search-wrap { display: none; }
          .nav-stats { display: none; }
          .nav-inner { padding: 0 16px; height: 60px; }
        }

        @media (max-width: 480px) {
          .product-grid { grid-template-columns: 1fr; gap: 10px; }
          .product-img-wrap { height: 160px; }
          .product-name { font-size: 13px; }
          .product-content { padding: 12px; gap: 8px; }
          .product-enquire-btn { font-size: 11px; padding: 8px; }
        }
      `}</style>

      {/* ─── TOP NAV ─── */}
      <nav className={`top-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <a href="/" className="nav-back">← Back</a>
          <div className="nav-divider" />
          <div className="nav-brand">
            <div className="nav-logo">
              {/* Replace with Kurlon logo URL */}
              <img
                src="https://res.cloudinary.com/dk05wqwo1/image/upload/v1774619883/55bbf973ce793f83b2e887acd4458e2c.w2084.h2084_uwapc8.png"
                alt="Kurlon"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://via.placeholder.com/42x42/fff/333?text=K";
                }}
              />
            </div>
            <div className="nav-brand-text">
              <div className="nav-brand-name">Kurlon</div>
              <div className="nav-brand-sub">Mattress Catalogue</div>
            </div>
          </div>

          <div className="nav-spacer" />

          <div className="nav-search-wrap">
            <svg className="search-ico" width="14" height="14" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              className="nav-search"
              placeholder="Search all mattresses…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                style={{ background: "none", border: "none", color: "rgba(255,255,255,0.3)", cursor: "pointer", fontSize: "16px", lineHeight: 1, padding: 0 }}
              >×</button>
            )}
          </div>

          <div className="nav-stats">
            <div className="nav-stats-dot" />
            <span className="nav-stats-text">{totalProducts} Products</span>
          </div>

          <button className="mobile-menu-btn" onClick={() => setSidebarOpen(true)} aria-label="Open categories">☰</button>
        </div>
      </nav>

      {/* ─── MAIN BODY ─── */}
      <div className="page-body">
        {/* Desktop Sidebar */}
        <aside className="sidebar">
          <p className="sidebar-heading">Categories</p>
          {(Object.keys(CATALOGUE) as CategoryKey[]).map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`sidebar-cat-btn ${activeCategory === cat && !searchQuery ? "active" : ""}`}
            >
              <span className="cat-icon">{CATALOGUE[cat].icon}</span>
              <span className="cat-label">{cat}</span>
              <span className="cat-count">{CATALOGUE[cat].products.length}</span>
            </button>
          ))}
          <div className="sidebar-sep" />
          <div className="sidebar-brand-card">
            <div className="brand-card-title">Kurlon Enterprise Ltd.</div>
            <p className="brand-card-text">60+ years of sleep science — India's most trusted mattress brand.</p>
            <div className="brand-certs">
              <span className="cert-badge">ISO 9001</span>
              <span className="cert-badge">Greenguard</span>
              <span className="cert-badge">OEKO-TEX</span>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content" ref={mainRef}>
          {!searchQuery && (
            <div className="cat-hero">
              <img
                src={CATEGORY_HERO_IMAGES[activeCategory]}
                alt={activeCategory}
                className="cat-hero-img"
              />
              <div className="cat-hero-overlay" />
              <div className="cat-hero-content">
                <div className="cat-hero-eyebrow">
                  {CATALOGUE[activeCategory].icon} Kurlon
                </div>
                <h1 className="cat-hero-title">{activeCategory}</h1>
                <p className="cat-hero-desc">{CATALOGUE[activeCategory].description}</p>
              </div>
              <div className="cat-hero-badge">{category.tagline}</div>
            </div>
          )}

          {searchQuery && (
            <div className="search-results-label">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <circle cx="7" cy="7" r="5" stroke="#c9a96e" strokeWidth="1.5" />
                <path d="M11 11l3 3" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span>
                Showing <strong>{filtered.length} result{filtered.length !== 1 ? "s" : ""}</strong> for "{searchQuery}"
              </span>
              <button
                onClick={() => setSearchQuery("")}
                style={{ marginLeft: "auto", background: "none", border: "none", color: "rgba(201,169,110,0.6)", cursor: "pointer", fontSize: "12px" }}
              >Clear ×</button>
            </div>
          )}

          {filtered.length === 0 ? (
            <div className="empty-state">
              <span className="empty-icon">🔍</span>
              <p className="empty-title">No products found</p>
              <p className="empty-sub">Try a different keyword or browse by category</p>
            </div>
          ) : (
            <div className="product-grid">
              {filtered.map((product, i) => (
                <ProductCard key={`${product.name}-${i}`} product={product as MattressProduct} index={i} />
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Mobile Drawer */}
      {sidebarOpen && (
        <div className="mobile-sidebar-overlay" onClick={() => setSidebarOpen(false)}>
          <div
            className={`mobile-sidebar-drawer ${sidebarOpen ? "open" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mobile-drawer-header">
              <span className="mobile-drawer-title">Categories</span>
              <button className="drawer-close-btn" onClick={() => setSidebarOpen(false)}>×</button>
            </div>
            {(Object.keys(CATALOGUE) as CategoryKey[]).map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`sidebar-cat-btn ${activeCategory === cat ? "active" : ""}`}
              >
                <span className="cat-icon">{CATALOGUE[cat].icon}</span>
                <span className="cat-label">{cat}</span>
                <span className="cat-count">{CATALOGUE[cat].products.length}</span>
              </button>
            ))}
            <div className="sidebar-sep" />
            <div className="sidebar-brand-card">
              <div className="brand-card-title">Kurlon Enterprise Ltd.</div>
              <p className="brand-card-text">60+ years of sleep science.</p>
              <div className="brand-certs">
                <span className="cert-badge">ISO 9001</span>
                <span className="cert-badge">Greenguard</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Bottom Tabs */}
      <nav className="mobile-bottom-tabs">
        {(Object.keys(CATALOGUE) as CategoryKey[]).map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`mobile-tab-btn ${activeCategory === cat && !searchQuery ? "active" : ""}`}
          >
            <span className="mobile-tab-icon">{CATALOGUE[cat].icon}</span>
            <span>{cat}</span>
            {activeCategory === cat && !searchQuery && <div className="mobile-tab-active-dot" />}
          </button>
        ))}
      </nav>
    </div>
  );
}