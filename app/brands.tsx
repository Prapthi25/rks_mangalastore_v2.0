


// "use client";

// import { useState, useRef, useEffect, useCallback } from "react";
// import MarqueeStrip from "./Marqueestrip";
// import NilkamalCatalogueModal from "./Catalogue/NilkamalCatalogueModal";
// import KurlonCatalogueModal from "./Catalogue/KurlonCatalogueModal";

// // --- NEW BRAND CATALOGUE IMPORTS ---
// // import WakefitCatalogueModal from "./Catalogue/WakefitCatalogueModal";
// // -----------------------------------

  

   
// /* ─── Brand Modals Mapping ──────────────────────────────── */
// // Map brand names to their respective Modal components.
// // To add a new brand catalogue:
// // 1. Create the Modal component and Page in the Catalogue folder.
// // 2. Import the Modal component above.
// // 3. Add 'hasCatalogue: true' to the brand in the BRANDS array below.
// // 4. Add the brand name mapping to this BRAND_MODALS object.
// const BRAND_MODALS: Record<string, React.FC<{ isOpen: boolean; onClose: () => void }>> = {
//   "Nilkamal": NilkamalCatalogueModal,
//   "Kurlon": KurlonCatalogueModal,
//   // "Wakefit": WakefitCatalogueModal,
// };

// /* ─── data ─────────────────────────────────────────────── */
// const BRANDS = [
//   { name: "Peps",          category: "Mattresses", logo: "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774889831/images_5_who8pm.png", },
//   { name: "Kurlon",        category: "Mattresses", logo: "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774619883/55bbf973ce793f83b2e887acd4458e2c.w2084.h2084_uwapc8.png", hasCatalogue: true },
//   { name: "Supreme",       category: "Furniture",  logo: "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774890026/images_2_hwkwpy.jpg" },
//   { name: "Wakefit",       category: "Mattresses", logo: "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774611809/Wakefit_Logo_bgtolz.jpg" },
//   { name: "Godrej Interio",category: "Furniture",  logo: "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774610700/images_1_z54k36.jpg" },
//   { name: "Durian",        category: "Furniture",  logo: "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774889858/images_3_gezsm8.jpg" },
//   { name: "Nilkamal",      category: "Furniture",  logo: "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774611294/images_2_hcrzdd.png", hasCatalogue: true },
//   { name: "Italica",       category: "Furniture",  logo: "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774889835/ITALICA_LOGO_PrimaryLogoVertical_d6vfog.jpg" },
//   { name: "Cello",         category: "Furniture",  logo: "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774889831/images_6_ivyl8q.png" },
//   { name: "Featherlite",   category: "Office",     logo: "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774611294/featherlite-logo_tfvhrg.png" },
//   { name: "Herman Miller", category: "Office",     logo: "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774611296/sq-herman-miller-order-design-rebrand_dezeen_2364_col_0_rfcthq.jpg" },
//   { name: "Kokuyo",        category: "Office",     logo: "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774614525/kokuyo_ah4wai.svg" },
// ];

// type Brand = (typeof BRANDS)[0];
// type Filter = "All" | "Mattresses" | "Furniture" | "Office";

// const FILTERS: Filter[] = ["All", "Mattresses", "Furniture", "Office"];

// const CATEGORY_META: Record<string, { icon: string; desc: string; color: string }> = {
//   Mattresses: { icon: "◈", desc: "Sleep Science", color: "#7c6af7" },
//   Furniture:  { icon: "◉", desc: "Living Spaces", color: "#c9a96e" },
//   Office:     { icon: "◎", desc: "Workspaces",    color: "#5ca8d4" },
// };

// /* ─── 3-D Tilt Card ─────────────────────────────────────── */
// function BrandCard({
//   brand,
//   index,
//   onCatalogueClick,
// }: {
//   brand: Brand;
//   index: number;
//   onCatalogueClick?: () => void;
// }) {
//   const cardRef = useRef<HTMLDivElement>(null);
//   const [failed, setFailed] = useState(false);
//   const [tilt, setTilt] = useState({ x: 0, y: 0 });
//   const [hovered, setHovered] = useState(false);
//   const meta = CATEGORY_META[brand.category];

//   const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
//     const card = cardRef.current;
//     if (!card) return;
//     const { left, top, width, height } = card.getBoundingClientRect();
//     const x = ((e.clientX - left) / width - 0.5) * 18;
//     const y = ((e.clientY - top) / height - 0.5) * -18;
//     setTilt({ x, y });
//   }, []);

//   const resetTilt = () => { setTilt({ x: 0, y: 0 }); setHovered(false); };

//   return (
//     <div
//       ref={cardRef}
//       onMouseMove={handleMouseMove}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={resetTilt}
//       onClick={brand.hasCatalogue ? onCatalogueClick : undefined}
//       className={`brand-card${brand.hasCatalogue ? " brand-card--clickable" : ""}`}
//       style={{
//         animationDelay: `${index * 60}ms`,
//         transform: hovered
//           ? `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) translateZ(12px) scale(1.02)`
//           : `perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)`,
//         transition: hovered ? "transform 0.08s ease-out" : "transform 0.4s cubic-bezier(.23,1,.32,1)",
//       }}
//     >
//       <div className="card-border" style={{ opacity: hovered ? 1 : 0 }} />

//       {/* Catalogue badge for Nilkamal */}
//       {brand.hasCatalogue && (
//         <div className="catalogue-badge">
//           <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
//             <path d="M2 1h6a1 1 0 0 1 1 1v7L5 8 1 9V2a1 1 0 0 1 1-1z" fill="currentColor" />
//           </svg>
//           Catalogue
//         </div>
//       )}

//       <div className="card-logo-wrap">
//         <span className="cat-dot" style={{ background: meta.color }} />
//         {failed ? (
//           <span className="logo-fallback" style={{ color: meta.color }}>{brand.name[0]}</span>
//         ) : (
//           <img
//             src={brand.logo}
//             alt={brand.name}
//             className="logo-img"
//             onError={() => setFailed(true)}
//           />
//         )}
//         {hovered && (
//           <div
//             className="logo-glow"
//             style={{ background: `radial-gradient(circle at 50% 60%, ${meta.color}22 0%, transparent 70%)` }}
//           />
//         )}

//         {/* Hover overlay for catalogue cards */}
//         {brand.hasCatalogue && hovered && (
//           <div className="catalogue-overlay">
//             <div className="catalogue-overlay-inner">
//               <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
//                 <path d="M4 2h12a1 1 0 0 1 1 1v14l-4-2-4 2-4-2V3a1 1 0 0 1 1-1z" stroke="#c9a96e" strokeWidth="1.5" fill="rgba(201,169,110,0.1)" />
//                 <path d="M7 7h6M7 10h4" stroke="#c9a96e" strokeWidth="1.2" strokeLinecap="round" />
//               </svg>
//               <span>View Catalogue</span>
//             </div>
//           </div>
//         )}
//       </div>

//       <div className="card-info">
//         <p className="card-name">{brand.name}</p>
//         <div className="card-cat" style={{ color: meta.color }}>
//           <span>{meta.icon}</span>
//           <span>{meta.desc}</span>
//           {brand.hasCatalogue && (
//             <span className="card-cat-badge">View Products →</span>
//           )}
//         </div>
//       </div>

//       <div
//         className="card-line"
//         style={{
//           background: `linear-gradient(90deg, transparent, ${meta.color}, transparent)`,
//           opacity: hovered ? 1 : 0,
//         }}
//       />
//     </div>
//   );
// }

// /* ─── Stat Counter ──────────────────────────────────────── */
// function Counter({ end, label }: { end: number; label: string }) {
//   const [val, setVal] = useState(0);
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const obs = new IntersectionObserver(([e]) => {
//       if (!e.isIntersecting) return;
//       obs.disconnect();
//       let start = 0;
//       const step = end / 40;
//       const t = setInterval(() => {
//         start += step;
//         if (start >= end) { setVal(end); clearInterval(t); }
//         else setVal(Math.floor(start));
//       }, 30);
//     }, { threshold: 0.5 });
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, [end]);

//   return (
//     <div ref={ref} className="stat-item">
//       <span className="stat-num">{val}+</span>
//       <span className="stat-label">{label}</span>
//     </div>
//   );
// }

// /* ─── Main Section ──────────────────────────────────────── */
// export default function BrandsSection() {
//   const [active, setActive] = useState<Filter>("All");
//   const [mounted, setMounted] = useState(false);
//   const [activeCatalogueBrand, setActiveCatalogueBrand] = useState<string | null>(null);

//   useEffect(() => { setMounted(true); }, []);

//   const filtered = active === "All" ? BRANDS : BRANDS.filter(b => b.category === active);

//   return (
//     <section id="brands" className="brands-section">

//       {/* ── Animated mesh background ── */}
//       <div className="mesh-bg" aria-hidden="true">
//         <div className="mesh-orb orb-1" />
//         <div className="mesh-orb orb-2" />
//         <div className="mesh-orb orb-3" />
//         <div className="grid-lines" />
//       </div>

//       <div className="section-inner">

//         {/* ── Editorial Header ── */}
//         <header className="sec-header">
//           <div className="header-eyebrow">
//             <span className="eyebrow-line" />
//             <span className="eyebrow-text">Trusted Partners</span>
//             <span className="eyebrow-line" />
//           </div>

//           <h2 className="sec-title">
//             <span className="title-word title-word--outline">Premium</span>
//             <br />
//             <span className="title-word title-word--fill">Brand Universe</span>
//           </h2>

//           <p className="sec-sub">
//             Every brand — hand-picked for craftsmanship, durability,
//             <br className="hidden sm:block" /> and design excellence.
//           </p>

//           <div className="stats-row">
//             <Counter end={12}  label="Brand Partners" />
//             <div className="stat-divider" />
//             <Counter end={500} label="Products In Store" />
//             <div className="stat-divider" />
//             <Counter end={3}   label="Categories" />
//           </div>
//         </header>

//         {/* ── Filter Tabs ── */}
//         <div className="filter-row">
//           {FILTERS.map(f => (
//             <button
//               key={f}
//               onClick={() => setActive(f)}
//               className={`filter-btn ${active === f ? "filter-btn--active" : ""}`}
//             >
//               {f !== "All" && (
//                 <span className="filter-dot" style={{ background: CATEGORY_META[f]?.color }} />
//               )}
//               {f}
//               {active === f && <span className="filter-underline" />}
//             </button>
//           ))}
//         </div>

//         {/* ── Hint banner ── */}
//         <div className="catalogue-hint">
//           <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
//             <circle cx="6" cy="6" r="5" stroke="#c9a96e" strokeWidth="1.2" />
//             <path d="M6 5.5v3M6 4v.5" stroke="#c9a96e" strokeWidth="1.2" strokeLinecap="round" />
//           </svg>
//           Click on brands with the <strong>Catalogue</strong> badge to explore their full products
//         </div>

//         {/* ── Brand Grid ── */}
//         <div className="brand-grid" style={{ minHeight: 280 }}>
//           {mounted && filtered.map((brand, i) => (
//             <BrandCard
//               key={brand.name}
//               brand={brand}
//               index={i}
//               onCatalogueClick={brand.hasCatalogue ? () => setActiveCatalogueBrand(brand.name) : undefined}
//             />
//           ))}
//         </div>

//       </div>

//       {/* ── Marquee Strip ── */}
//       <MarqueeStrip />

//       {/* ── CTA Block ── */}
//       <div className="section-inner">
//         <div className="cta-block mt-20">
//           <span className="cta-corner cta-corner--tl" />
//           <span className="cta-corner cta-corner--tr" />
//           <span className="cta-corner cta-corner--bl" />
//           <span className="cta-corner cta-corner--br" />

//           <div className="cta-badge">500+ Products Available</div>
//           <h3 className="cta-title">Experience Every Brand<br />In Our Showroom</h3>
//           <p className="cta-sub">Visit us in Mangaluru — touch, feel, and choose from our complete collection.</p>

//           <div className="cta-actions">
//             <a href="#contact" className="btn-primary">
//               <span>Request Catalogue</span>
//               <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                 <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </a>
//             <a href="#contact" className="btn-ghost">Visit Showroom</a>
//           </div>
//         </div>
//       </div>

//       {/* ── Brand Catalogue Modals ── */}
//       {Object.entries(BRAND_MODALS).map(([brandName, ModalComponent]) => (
//         <ModalComponent
//           key={brandName}
//           isOpen={activeCatalogueBrand === brandName}
//           onClose={() => setActiveCatalogueBrand(null)}
//         />
//       ))}

//       {/* ── Styles ── */}
//       <style jsx>{`
//         /* ---------- layout ---------- */
//         .brands-section {
//           position: relative;
//           background: #060608;
//           overflow: hidden;
//           padding: 0 0 100px;
//           font-family: 'DM Sans', system-ui, sans-serif;
//         }
//         .section-inner {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 0 24px;
//           position: relative;
//           z-index: 2;
//         }

//         /* ---------- mesh bg ---------- */
//         .mesh-bg { position: absolute; inset: 0; pointer-events: none; }
//         .mesh-orb {
//           position: absolute;
//           border-radius: 50%;
//           filter: blur(90px);
//           animation: orbFloat 12s ease-in-out infinite alternate;
//         }
//         .orb-1 { width: 480px; height: 480px; top: -120px; left: -100px; background: radial-gradient(circle, #c9a96e18 0%, transparent 70%); }
//         .orb-2 { width: 360px; height: 360px; top: 30%; right: -80px; background: radial-gradient(circle, #7c6af720 0%, transparent 70%); animation-delay: -4s; }
//         .orb-3 { width: 320px; height: 320px; bottom: 10%; left: 30%; background: radial-gradient(circle, #5ca8d415 0%, transparent 70%); animation-delay: -8s; }
//         @keyframes orbFloat { from { transform: translateY(0) scale(1); } to { transform: translateY(30px) scale(1.07); } }
//         .grid-lines {
//           position: absolute; inset: 0;
//           background-image: linear-gradient(rgba(201,169,110,0.03) 1px, transparent 1px),
//                             linear-gradient(90deg, rgba(201,169,110,0.03) 1px, transparent 1px);
//           background-size: 60px 60px;
//         }

//         /* ---------- header ---------- */
//         .sec-header {
//           padding-top: 100px;
//           text-align: center;
//           margin-bottom: 56px;
//         }
//         .header-eyebrow {
//           display: flex; align-items: center; justify-content: center;
//           gap: 14px; margin-bottom: 28px;
//         }
//         .eyebrow-line { display: block; width: 40px; height: 1px; background: linear-gradient(90deg, transparent, #c9a96e80); }
//         .eyebrow-line:last-child { background: linear-gradient(90deg, #c9a96e80, transparent); }
//         .eyebrow-text {
//           font-size: 11px; font-weight: 600; letter-spacing: 0.3em; text-transform: uppercase;
//           color: #c9a96e; background: #c9a96e12; border: 1px solid #c9a96e30;
//           padding: 6px 18px; border-radius: 100px;
//         }
//         .sec-title {
//           font-family: 'Cormorant Garamond', Georgia, serif;
//           font-size: clamp(52px, 8vw, 96px); font-weight: 700; line-height: 1.0;
//           margin: 0 0 28px; letter-spacing: -0.02em;
//         }
//         .title-word--outline { -webkit-text-stroke: 1.5px rgba(255,255,255,0.25); color: transparent; display: block; }
//         .title-word--fill {
//           background: linear-gradient(135deg, #c9a96e 0%, #f0c97a 40%, #c9a96e 80%);
//           background-size: 200% auto;
//           -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
//           display: block; animation: shimmerText 4s linear infinite;
//         }
//         @keyframes shimmerText { from { background-position: 0% center; } to { background-position: 200% center; } }
//         .sec-sub { color: rgba(255,255,255,0.42); font-size: 17px; line-height: 1.7; margin: 0 0 44px; }

//         /* ---------- stats ---------- */
//         .stats-row { display: flex; align-items: center; justify-content: center; gap: 40px; flex-wrap: wrap; }
//         .stat-item { text-align: center; }
//         .stat-num {
//           display: block;
//           font-family: 'Cormorant Garamond', Georgia, serif;
//           font-size: 42px; font-weight: 700;
//           background: linear-gradient(135deg, #c9a96e, #f0c97a);
//           -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
//           line-height: 1;
//         }
//         .stat-label {
//           display: block; font-size: 12px; color: rgba(255,255,255,0.35);
//           letter-spacing: 0.12em; text-transform: uppercase; margin-top: 4px;
//         }
//         .stat-divider { width: 1px; height: 44px; background: linear-gradient(to bottom, transparent, #c9a96e40, transparent); }

//         /* ---------- filter ---------- */
//         .filter-row {
//           display: flex; align-items: center; justify-content: center;
//           gap: 6px; margin-bottom: 16px; flex-wrap: wrap;
//         }
//         .filter-btn {
//           position: relative; display: flex; align-items: center; gap: 7px;
//           background: transparent; border: 1px solid rgba(255,255,255,0.08);
//           color: rgba(255,255,255,0.45); font-size: 13px; font-weight: 500;
//           padding: 9px 22px; border-radius: 100px; cursor: pointer;
//           transition: all 0.25s ease; font-family: inherit; letter-spacing: 0.03em; overflow: hidden;
//         }
//         .filter-btn:hover { color: rgba(255,255,255,0.8); border-color: rgba(255,255,255,0.16); background: rgba(255,255,255,0.04); }
//         .filter-btn--active {
//           color: #1a1200 !important; background: linear-gradient(135deg, #c9a96e, #f0c97a) !important;
//           border-color: transparent !important; box-shadow: 0 4px 20px #c9a96e40;
//         }
//         .filter-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
//         .filter-btn--active .filter-dot { background: #1a1200 !important; }

//         /* ---------- hint banner ---------- */
//         .catalogue-hint {
//           display: flex; align-items: center; justify-content: center;
//           gap: 7px; margin-bottom: 32px;
//           font-size: 12px; color: rgba(201,169,110,0.65);
//           background: rgba(201,169,110,0.06); border: 1px solid rgba(201,169,110,0.15);
//           border-radius: 100px; padding: 8px 20px; width: fit-content; margin-left: auto; margin-right: auto;
//         }
//         .catalogue-hint strong { color: #c9a96e; font-weight: 600; }

//         /* ---------- brand grid ---------- */
//         .brand-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 14px; }
//         @media (max-width: 640px) {
//           .brand-grid { grid-template-columns: repeat(3, 1fr); gap: 8px; }
//           .card-name { font-size: 11px; }
//           .card-info { padding: 8px 10px 10px; }
//         }

//         /* ---------- brand card ---------- */
//         .brand-card {
//           position: relative; background: #0e0e12;
//           border: 1px solid rgba(255,255,255,0.07); border-radius: 20px;
//           overflow: hidden; cursor: default; will-change: transform;
//           animation: cardReveal 0.5s cubic-bezier(.23,1,.32,1) both;
//         }
//         .brand-card--clickable { cursor: pointer; }
//         @keyframes cardReveal {
//           from { opacity: 0; transform: translateY(24px) scale(0.95); }
//           to   { opacity: 1; transform: translateY(0) scale(1); }
//         }
//         .card-border {
//           position: absolute; inset: 0; border-radius: 20px;
//           border: 1px solid rgba(201,169,110,0.5); pointer-events: none; transition: opacity 0.3s;
//         }

//         /* Catalogue badge */
//         .catalogue-badge {
//           position: absolute; top: 8px; left: 8px; z-index: 3;
//           display: flex; align-items: center; gap: 4px;
//           font-size: 8px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
//           color: #1a1200; background: linear-gradient(135deg, #c9a96e, #f0c97a);
//           padding: 3px 8px; border-radius: 100px;
//         }

//         .cat-dot { position: absolute; top: 12px; right: 12px; width: 7px; height: 7px; border-radius: 50%; z-index: 2; }
//         .card-logo-wrap {
//           position: relative; width: 100%; aspect-ratio: 1;
//           background: #ffffff; display: flex; align-items: center; justify-content: center;
//           padding: 20%; overflow: hidden;
//         }
//         .logo-img {
//           width: 100%; height: 100%; object-fit: contain;
//           transition: transform 0.4s cubic-bezier(.23,1,.32,1); position: relative; z-index: 1;
//         }
//         .brand-card:hover .logo-img { transform: scale(1.08); }
//         .logo-fallback { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 40px; font-weight: 700; }
//         .logo-glow { position: absolute; inset: 0; pointer-events: none; }

//         /* Catalogue hover overlay */
//         .catalogue-overlay {
//           position: absolute; inset: 0; z-index: 4;
//           background: rgba(6,6,8,0.72); backdrop-filter: blur(4px);
//           display: flex; align-items: center; justify-content: center;
//           animation: fadeIn 0.2s ease;
//         }
//         @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
//         .catalogue-overlay-inner {
//           display: flex; flex-direction: column; align-items: center; gap: 6px;
//           font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
//           color: #c9a96e;
//         }

//         .card-info { padding: 12px 14px 14px; background: #0e0e12; }
//         .card-name {
//           color: #fff; font-size: 13px; font-weight: 600; margin: 0 0 4px;
//           white-space: nowrap; overflow: hidden; text-overflow: ellipsis; letter-spacing: 0.01em;
//         }
//         .card-cat {
//           display: flex; align-items: center; gap: 5px;
//           font-size: 10px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase;
//         }
//         .card-cat-badge {
//           margin-left: auto; font-size: 9px; color: #c9a96e;
//           font-weight: 700; letter-spacing: 0.05em;
//         }
//         .card-line {
//           position: absolute; bottom: 0; left: 0; right: 0;
//           height: 2px; transition: opacity 0.3s;
//         }

//         /* ---------- CTA ---------- */
//         .cta-block {
//           position: relative;
//           background: linear-gradient(135deg, #c9a96e10 0%, #0e0e14 60%);
//           border: 1px solid rgba(201,169,110,0.2); border-radius: 28px;
//           padding: 64px 40px; text-align: center; overflow: hidden;
//         }
//         .cta-corner { position: absolute; width: 18px; height: 18px; border-color: rgba(201,169,110,0.5); border-style: solid; }
//         .cta-corner--tl { top: 16px; left: 16px;   border-width: 1px 0 0 1px; border-radius: 4px 0 0 0; }
//         .cta-corner--tr { top: 16px; right: 16px;   border-width: 1px 1px 0 0; border-radius: 0 4px 0 0; }
//         .cta-corner--bl { bottom: 16px; left: 16px;  border-width: 0 0 1px 1px; border-radius: 0 0 0 4px; }
//         .cta-corner--br { bottom: 16px; right: 16px; border-width: 0 1px 1px 0; border-radius: 0 0 4px 0; }
//         .cta-badge {
//           display: inline-block; font-size: 11px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase;
//           color: #c9a96e; background: #c9a96e15; border: 1px solid #c9a96e35;
//           padding: 6px 18px; border-radius: 100px; margin-bottom: 24px;
//         }
//         .cta-title {
//           font-family: 'Cormorant Garamond', Georgia, serif;
//           font-size: clamp(30px, 4vw, 52px); font-weight: 700; color: #fff;
//           margin: 0 0 16px; line-height: 1.15; letter-spacing: -0.01em;
//         }
//         .cta-sub { color: rgba(255,255,255,0.4); font-size: 16px; margin: 0 0 40px; line-height: 1.6; }
//         .cta-actions { display: flex; align-items: center; justify-content: center; gap: 16px; flex-wrap: wrap; }
//         .btn-primary {
//           display: inline-flex; align-items: center; gap: 10px;
//           background: linear-gradient(135deg, #c9a96e, #f0c97a); color: #1a1200;
//           font-size: 14px; font-weight: 700; padding: 14px 32px; border-radius: 100px;
//           text-decoration: none; letter-spacing: 0.03em; transition: all 0.3s ease;
//         }
//         .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 32px #c9a96e50; }
//         .btn-ghost {
//           display: inline-flex; align-items: center;
//           background: transparent; border: 1px solid rgba(255,255,255,0.16);
//           color: rgba(255,255,255,0.65); font-size: 14px; font-weight: 500;
//           padding: 14px 32px; border-radius: 100px; text-decoration: none; transition: all 0.3s ease;
//         }
//         .btn-ghost:hover { border-color: rgba(255,255,255,0.35); color: #fff; background: rgba(255,255,255,0.05); }
//       `}</style>
//     </section>
//   );
// }


"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import MarqueeStrip from "./Marqueestrip";
import NilkamalCatalogueModal from "./Catalogue/NilkamalCatalogueModal";
import KurlonCatalogueModal from "./Catalogue/KurlonCatalogueModal";

// ─── To add a new brand catalogue modal:
// 1. Create the Modal component in ./Catalogue/
// 2. Import it below
// 3. Add it to the brand's action: { type: "catalogue", modal: YourModal }
//
// ─── To add a new brand PDF:
// 1. Drop the PDF in /public/catalogues/
// 2. Add the brand with action: { type: "pdf", url: "/catalogues/your-brand.pdf" }

/* ─── Types ─────────────────────────────────────────────── */
type BrandAction =
  | { type: "catalogue"; modal: React.FC<{ isOpen: boolean; onClose: () => void }> }
  | { type: "pdf"; url: string }
  | { type: "none" };

type Brand = {
  name: string;
  category: "Mattresses" | "Furniture" | "Office";
  logo: string;
  action: BrandAction;
};

type Filter = "All" | "Mattresses" | "Furniture" | "Office";

/* ─── Brand Data ─────────────────────────────────────────── */
// action.type options:
//   "catalogue" → opens internal modal  (pass the modal component)
//   "pdf"       → opens PDF in new tab  (pass the /public path)
//   "none"      → no interaction
const BRANDS: Brand[] = [
  {
    name: "Peps",
    category: "Mattresses",
    logo: "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774889831/images_5_who8pm.png",
    action: { type: "pdf", url: "/catalogues/peps.pdf" },
  },
  {
    name: "Kurlon",
    category: "Mattresses",
    logo: "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774619883/55bbf973ce793f83b2e887acd4458e2c.w2084.h2084_uwapc8.png",
    action: { type: "catalogue", modal: KurlonCatalogueModal },
  },
  {
    name: "Supreme",
    category: "Furniture",
    logo: "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774890026/images_2_hwkwpy.jpg",
    action: { type: "pdf", url: "/catalogues/supreme.pdf" },
  },
  {
    name: "Wakefit",
    category: "Mattresses",
    logo: "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774611809/Wakefit_Logo_bgtolz.jpg",
    action: { type: "pdf", url: "/catalogues/wakefit.pdf" },
  },
  {
    name: "Godrej Interio",
    category: "Furniture",
    logo: "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774610700/images_1_z54k36.jpg",
    action: { type: "pdf", url: "/catalogues/godrej-interio.pdf" },
  },
  {
    name: "Durian",
    category: "Furniture",
    logo: "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774889858/images_3_gezsm8.jpg",
    action: { type: "pdf", url: "/catalogues/durian.pdf" },
  },
  {
    name: "Nilkamal",
    category: "Furniture",
    logo: "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774611294/images_2_hcrzdd.png",
    action: { type: "catalogue", modal: NilkamalCatalogueModal },
  },
  {
    name: "Italica",
    category: "Furniture",
    logo: "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774889835/ITALICA_LOGO_PrimaryLogoVertical_d6vfog.jpg",
    action: { type: "pdf", url: "/catalogues/italica.pdf" },
  },
  {
    name: "Cello",
    category: "Furniture",
    logo: "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774889831/images_6_ivyl8q.png",
    action: { type: "pdf", url: "/catalogues/cello.pdf" },
  },
  {
    name: "Featherlite",
    category: "Office",
    logo: "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774611294/featherlite-logo_tfvhrg.png",
    action: { type: "pdf", url: "/catalogues/featherlite.pdf" },
  },
  {
    name: "Herman Miller",
    category: "Office",
    logo: "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774611296/sq-herman-miller-order-design-rebrand_dezeen_2364_col_0_rfcthq.jpg",
    action: { type: "pdf", url: "/catalogues/herman-miller.pdf" },
  },
  {
    name: "Kokuyo",
    category: "Office",
    logo: "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774614525/kokuyo_ah4wai.svg",
    action: { type: "pdf", url: "/catalogues/kokuyo.pdf" },
  },
];

const FILTERS: Filter[] = ["All", "Mattresses", "Furniture", "Office"];

const CATEGORY_META: Record<string, { icon: string; desc: string; color: string }> = {
  Mattresses: { icon: "◈", desc: "Sleep Science",  color: "#7c6af7" },
  Furniture:  { icon: "◉", desc: "Living Spaces",  color: "#c9a96e" },
  Office:     { icon: "◎", desc: "Workspaces",     color: "#5ca8d4" },
};

/* ─── useBrandAction hook ───────────────────────────────── */
function useBrandAction() {
  const [activeModal, setActiveModal] = useState<Brand | null>(null);

  const trigger = useCallback((brand: Brand) => {
    const { action } = brand;
    if (action.type === "catalogue") {
      setActiveModal(brand);
    } else if (action.type === "pdf") {
      window.open(action.url, "_blank", "noopener,noreferrer");
    }
    // type === "none" → do nothing
  }, []);

  const closeModal = useCallback(() => setActiveModal(null), []);

  return { trigger, activeModal, closeModal };
}

/* ─── Helper: badge label ───────────────────────────────── */
function getBadgeLabel(action: BrandAction): string | null {
  if (action.type === "catalogue") return "Catalogue";
  if (action.type === "pdf") return "PDF";
  return null;
}

/* ─── 3-D Tilt Card ─────────────────────────────────────── */
function BrandCard({
  brand,
  index,
  onClick,
}: {
  brand: Brand;
  index: number;
  onClick: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const meta = CATEGORY_META[brand.category];
  const badgeLabel = getBadgeLabel(brand.action);
  const isClickable = brand.action.type !== "none";

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 18;
    const y = ((e.clientY - top) / height - 0.5) * -18;
    setTilt({ x, y });
  }, []);

  const resetTilt = () => { setTilt({ x: 0, y: 0 }); setHovered(false); };

  const overlayIcon =
    brand.action.type === "pdf" ? (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="2" width="14" height="16" rx="2" stroke="#c9a96e" strokeWidth="1.5" fill="rgba(201,169,110,0.1)" />
        <path d="M6 6h8M6 9h8M6 12h5" stroke="#c9a96e" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M13 13l2.5 2.5" stroke="#c9a96e" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ) : (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 2h12a1 1 0 0 1 1 1v14l-4-2-4 2-4-2V3a1 1 0 0 1 1-1z" stroke="#c9a96e" strokeWidth="1.5" fill="rgba(201,169,110,0.1)" />
        <path d="M7 7h6M7 10h4" stroke="#c9a96e" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );

  const overlayLabel = brand.action.type === "pdf" ? "Open PDF ↗" : "View Catalogue";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={resetTilt}
      onClick={isClickable ? onClick : undefined}
      className={`brand-card${isClickable ? " brand-card--clickable" : ""}`}
      style={{
        animationDelay: `${index * 60}ms`,
        transform: hovered
          ? `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) translateZ(12px) scale(1.02)`
          : `perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)`,
        transition: hovered
          ? "transform 0.08s ease-out"
          : "transform 0.4s cubic-bezier(.23,1,.32,1)",
      }}
    >
      <div className="card-border" style={{ opacity: hovered ? 1 : 0 }} />

      {/* Badge */}
      {badgeLabel && (
        <div className={`catalogue-badge badge--${brand.action.type}`}>
          {brand.action.type === "pdf" ? (
            <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
              <rect x="1" y="1" width="8" height="8" rx="1" fill="currentColor" />
              <path d="M3 4h4M3 6h2.5" stroke="white" strokeWidth="0.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
              <path d="M2 1h6a1 1 0 0 1 1 1v7L5 8 1 9V2a1 1 0 0 1 1-1z" fill="currentColor" />
            </svg>
          )}
          {badgeLabel}
        </div>
      )}

      {/* Logo area */}
      <div className="card-logo-wrap">
        <span className="cat-dot" style={{ background: meta.color }} />
        {failed ? (
          <span className="logo-fallback" style={{ color: meta.color }}>{brand.name[0]}</span>
        ) : (
          <img
            src={brand.logo}
            alt={brand.name}
            className="logo-img"
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
          />
        )}
        {hovered && (
          <div
            className="logo-glow"
            style={{ background: `radial-gradient(circle at 50% 60%, ${meta.color}22 0%, transparent 70%)` }}
          />
        )}

        {/* Hover overlay */}
        {isClickable && hovered && (
          <div className="catalogue-overlay">
            <div className="catalogue-overlay-inner">
              {overlayIcon}
              <span>{overlayLabel}</span>
            </div>
          </div>
        )}
      </div>

      {/* Card footer */}
      <div className="card-info">
        <p className="card-name">{brand.name}</p>
        <div className="card-cat" style={{ color: meta.color }}>
          <span>{meta.icon}</span>
          <span>{meta.desc}</span>
          {isClickable && (
            <span className="card-cat-badge">
              {brand.action.type === "pdf" ? "PDF ↗" : "Products →"}
            </span>
          )}
        </div>
      </div>

      <div
        className="card-line"
        style={{
          background: `linear-gradient(90deg, transparent, ${meta.color}, transparent)`,
          opacity: hovered ? 1 : 0,
        }}
      />
    </div>
  );
}

/* ─── Stat Counter ──────────────────────────────────────── */
function Counter({ end, label }: { end: number; label: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      let start = 0;
      const step = end / 40;
      const t = setInterval(() => {
        start += step;
        if (start >= end) { setVal(end); clearInterval(t); }
        else setVal(Math.floor(start));
      }, 30);
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="stat-item">
      <span className="stat-num">{val}+</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

/* ─── Main Section ──────────────────────────────────────── */
export default function BrandsSection() {
  const [active, setActive] = useState<Filter>("All");
  const [mounted, setMounted] = useState(false);
  const { trigger, activeModal, closeModal } = useBrandAction();

  useEffect(() => { setMounted(true); }, []);

  const filtered = active === "All" ? BRANDS : BRANDS.filter(b => b.category === active);

  // Only catalogue-type brands need a modal rendered in the DOM
  const catalogueBrands = BRANDS.filter((b): b is Brand & { action: { type: "catalogue"; modal: React.FC<{ isOpen: boolean; onClose: () => void }> } } =>
    b.action.type === "catalogue"
  );

  return (
    <section id="brands" className="brands-section">

      {/* ── Animated mesh background ── */}
      <div className="mesh-bg" aria-hidden="true">
        <div className="mesh-orb orb-1" />
        <div className="mesh-orb orb-2" />
        <div className="mesh-orb orb-3" />
        <div className="grid-lines" />
      </div>

      <div className="section-inner">

        {/* ── Editorial Header ── */}
        <header className="sec-header">
          <div className="header-eyebrow">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">Trusted Partners</span>
            <span className="eyebrow-line" />
          </div>

          <h2 className="sec-title">
            <span className="title-word title-word--outline">Premium</span>
            <br />
            <span className="title-word title-word--fill">Brand Universe</span>
          </h2>

          <p className="sec-sub">
            Every brand — hand-picked for craftsmanship, durability,
            <br className="hidden sm:block" /> and design excellence.
          </p>

          <div className="stats-row">
            <Counter end={12}  label="Brand Partners" />
            <div className="stat-divider" />
            <Counter end={500} label="Products In Store" />
            <div className="stat-divider" />
            <Counter end={3}   label="Categories" />
          </div>
        </header>

        {/* ── Filter Tabs ── */}
        <div className="filter-row">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`filter-btn ${active === f ? "filter-btn--active" : ""}`}
            >
              {f !== "All" && (
                <span
                  className="filter-dot"
                  style={{ background: active === f ? "#1a1200" : CATEGORY_META[f]?.color }}
                />
              )}
              {f}
            </button>
          ))}
        </div>

        {/* ── Hint banner ── */}
        <div className="catalogue-hint">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="5" stroke="#c9a96e" strokeWidth="1.2" />
            <path d="M6 5.5v3M6 4v.5" stroke="#c9a96e" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          Brands with a badge — click to view their <strong>Catalogue</strong> or open the <strong>PDF</strong>
        </div>

        {/* ── Brand Grid ── */}
        <div className="brand-grid" style={{ minHeight: 280 }}>
          {mounted && filtered.map((brand, i) => (
            <BrandCard
              key={brand.name}
              brand={brand}
              index={i}
              onClick={() => trigger(brand)}
            />
          ))}
        </div>

      </div>

      {/* ── Marquee Strip ── */}
      <MarqueeStrip />

      {/* ── CTA Block ── */}
      <div className="section-inner">
        <div className="cta-block mt-20">
          <span className="cta-corner cta-corner--tl" />
          <span className="cta-corner cta-corner--tr" />
          <span className="cta-corner cta-corner--bl" />
          <span className="cta-corner cta-corner--br" />

          <div className="cta-badge">500+ Products Available</div>
          <h3 className="cta-title">Experience Every Brand<br />In Our Showroom</h3>
          <p className="cta-sub">Visit us in Mangaluru — touch, feel, and choose from our complete collection.</p>

          <div className="cta-actions">
            <a href="#contact" className="btn-primary">
              <span>Request Catalogue</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#contact" className="btn-ghost">Visit Showroom</a>
          </div>
        </div>
      </div>

      {/* ── Catalogue Modals (only for "catalogue" type brands) ── */}
      {catalogueBrands.map(brand => {
        const Modal = brand.action.modal;
        return (
          <Modal
            key={brand.name}
            isOpen={activeModal?.name === brand.name}
            onClose={closeModal}
          />
        );
      })}

      {/* ── Styles ── */}
      <style jsx>{`
        /* ---------- layout ---------- */
        .brands-section {
          position: relative;
          background: #060608;
          overflow: hidden;
          padding: 0 0 100px;
          font-family: 'DM Sans', system-ui, sans-serif;
        }
        .section-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        /* ---------- mesh bg ---------- */
        .mesh-bg { position: absolute; inset: 0; pointer-events: none; }
        .mesh-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          animation: orbFloat 12s ease-in-out infinite alternate;
        }
        .orb-1 { width: 480px; height: 480px; top: -120px; left: -100px; background: radial-gradient(circle, #c9a96e18 0%, transparent 70%); }
        .orb-2 { width: 360px; height: 360px; top: 30%; right: -80px; background: radial-gradient(circle, #7c6af720 0%, transparent 70%); animation-delay: -4s; }
        .orb-3 { width: 320px; height: 320px; bottom: 10%; left: 30%; background: radial-gradient(circle, #5ca8d415 0%, transparent 70%); animation-delay: -8s; }
        @keyframes orbFloat { from { transform: translateY(0) scale(1); } to { transform: translateY(30px) scale(1.07); } }
        .grid-lines {
          position: absolute; inset: 0;
          background-image: linear-gradient(rgba(201,169,110,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(201,169,110,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        /* ---------- header ---------- */
        .sec-header { padding-top: 100px; text-align: center; margin-bottom: 56px; }
        .header-eyebrow { display: flex; align-items: center; justify-content: center; gap: 14px; margin-bottom: 28px; }
        .eyebrow-line { display: block; width: 40px; height: 1px; background: linear-gradient(90deg, transparent, #c9a96e80); }
        .eyebrow-line:last-child { background: linear-gradient(90deg, #c9a96e80, transparent); }
        .eyebrow-text {
          font-size: 11px; font-weight: 600; letter-spacing: 0.3em; text-transform: uppercase;
          color: #c9a96e; background: #c9a96e12; border: 1px solid #c9a96e30;
          padding: 6px 18px; border-radius: 100px;
        }
        .sec-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(52px, 8vw, 96px); font-weight: 700; line-height: 1.0;
          margin: 0 0 28px; letter-spacing: -0.02em;
        }
        .title-word--outline { -webkit-text-stroke: 1.5px rgba(255,255,255,0.25); color: transparent; display: block; }
        .title-word--fill {
          background: linear-gradient(135deg, #c9a96e 0%, #f0c97a 40%, #c9a96e 80%);
          background-size: 200% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          display: block; animation: shimmerText 4s linear infinite;
        }
        @keyframes shimmerText { from { background-position: 0% center; } to { background-position: 200% center; } }
        .sec-sub { color: rgba(255,255,255,0.42); font-size: 17px; line-height: 1.7; margin: 0 0 44px; }

        /* ---------- stats ---------- */
        .stats-row { display: flex; align-items: center; justify-content: center; gap: 40px; flex-wrap: wrap; }
        .stat-item { text-align: center; }
        .stat-num {
          display: block;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 42px; font-weight: 700;
          background: linear-gradient(135deg, #c9a96e, #f0c97a);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          line-height: 1;
        }
        .stat-label { display: block; font-size: 12px; color: rgba(255,255,255,0.35); letter-spacing: 0.12em; text-transform: uppercase; margin-top: 4px; }
        .stat-divider { width: 1px; height: 44px; background: linear-gradient(to bottom, transparent, #c9a96e40, transparent); }

        /* ---------- filter ---------- */
        .filter-row { display: flex; align-items: center; justify-content: center; gap: 6px; margin-bottom: 16px; flex-wrap: wrap; }
        .filter-btn {
          position: relative; display: flex; align-items: center; gap: 7px;
          background: transparent; border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.45); font-size: 13px; font-weight: 500;
          padding: 9px 22px; border-radius: 100px; cursor: pointer;
          transition: all 0.25s ease; font-family: inherit; letter-spacing: 0.03em; overflow: hidden;
        }
        .filter-btn:hover { color: rgba(255,255,255,0.8); border-color: rgba(255,255,255,0.16); background: rgba(255,255,255,0.04); }
        .filter-btn--active { color: #1a1200 !important; background: linear-gradient(135deg, #c9a96e, #f0c97a) !important; border-color: transparent !important; box-shadow: 0 4px 20px #c9a96e40; }
        .filter-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }

        /* ---------- hint banner ---------- */
        .catalogue-hint {
          display: flex; align-items: center; justify-content: center;
          gap: 7px; margin-bottom: 32px;
          font-size: 12px; color: rgba(201,169,110,0.65);
          background: rgba(201,169,110,0.06); border: 1px solid rgba(201,169,110,0.15);
          border-radius: 100px; padding: 8px 20px; width: fit-content; margin-left: auto; margin-right: auto;
        }
        .catalogue-hint strong { color: #c9a96e; font-weight: 600; }

        /* ---------- brand grid ---------- */
        .brand-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 14px; }
        @media (max-width: 640px) {
          .brand-grid { grid-template-columns: repeat(3, 1fr); gap: 8px; }
          .card-name { font-size: 11px; }
          .card-info { padding: 8px 10px 10px; }
        }

        /* ---------- brand card ---------- */
        .brand-card {
          position: relative; background: #0e0e12;
          border: 1px solid rgba(255,255,255,0.07); border-radius: 20px;
          overflow: hidden; cursor: default; will-change: transform;
          animation: cardReveal 0.5s cubic-bezier(.23,1,.32,1) both;
        }
        .brand-card--clickable { cursor: pointer; }
        @keyframes cardReveal {
          from { opacity: 0; transform: translateY(24px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .card-border {
          position: absolute; inset: 0; border-radius: 20px;
          border: 1px solid rgba(201,169,110,0.5); pointer-events: none; transition: opacity 0.3s;
        }

        /* ---------- badge ---------- */
        .catalogue-badge {
          position: absolute; top: 8px; left: 8px; z-index: 3;
          display: flex; align-items: center; gap: 4px;
          font-size: 8px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
          color: #1a1200; padding: 3px 8px; border-radius: 100px;
        }
        .badge--catalogue { background: linear-gradient(135deg, #c9a96e, #f0c97a); }
        .badge--pdf       { background: linear-gradient(135deg, #5ca8d4, #7ec8e8); color: #071520; }

        /* ---------- card logo wrap ---------- */
        .cat-dot { position: absolute; top: 12px; right: 12px; width: 7px; height: 7px; border-radius: 50%; z-index: 2; }
        .card-logo-wrap {
          position: relative; width: 100%; aspect-ratio: 1;
          background: #ffffff; display: flex; align-items: center; justify-content: center;
          padding: 20%; overflow: hidden;
        }
        .logo-img {
          width: 100%; height: 100%; object-fit: contain;
          transition: transform 0.4s cubic-bezier(.23,1,.32,1); position: relative; z-index: 1;
        }
        .brand-card:hover .logo-img { transform: scale(1.08); }
        .logo-fallback { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 40px; font-weight: 700; }
        .logo-glow { position: absolute; inset: 0; pointer-events: none; }

        /* ---------- hover overlay ---------- */
        .catalogue-overlay {
          position: absolute; inset: 0; z-index: 4;
          background: rgba(6,6,8,0.72); backdrop-filter: blur(4px);
          display: flex; align-items: center; justify-content: center;
          animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .catalogue-overlay-inner {
          display: flex; flex-direction: column; align-items: center; gap: 6px;
          font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
          color: #c9a96e;
        }

        /* ---------- card info ---------- */
        .card-info { padding: 12px 14px 14px; background: #0e0e12; }
        .card-name {
          color: #fff; font-size: 13px; font-weight: 600; margin: 0 0 4px;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis; letter-spacing: 0.01em;
        }
        .card-cat { display: flex; align-items: center; gap: 5px; font-size: 10px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; }
        .card-cat-badge { margin-left: auto; font-size: 9px; color: #c9a96e; font-weight: 700; letter-spacing: 0.05em; }
        .card-line { position: absolute; bottom: 0; left: 0; right: 0; height: 2px; transition: opacity 0.3s; }

        /* ---------- CTA ---------- */
        .cta-block {
          position: relative;
          background: linear-gradient(135deg, #c9a96e10 0%, #0e0e14 60%);
          border: 1px solid rgba(201,169,110,0.2); border-radius: 28px;
          padding: 64px 40px; text-align: center; overflow: hidden;
        }
        .cta-corner { position: absolute; width: 18px; height: 18px; border-color: rgba(201,169,110,0.5); border-style: solid; }
        .cta-corner--tl { top: 16px; left: 16px;   border-width: 1px 0 0 1px; border-radius: 4px 0 0 0; }
        .cta-corner--tr { top: 16px; right: 16px;   border-width: 1px 1px 0 0; border-radius: 0 4px 0 0; }
        .cta-corner--bl { bottom: 16px; left: 16px;  border-width: 0 0 1px 1px; border-radius: 0 0 0 4px; }
        .cta-corner--br { bottom: 16px; right: 16px; border-width: 0 1px 1px 0; border-radius: 0 0 4px 0; }
        .cta-badge {
          display: inline-block; font-size: 11px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase;
          color: #c9a96e; background: #c9a96e15; border: 1px solid #c9a96e35;
          padding: 6px 18px; border-radius: 100px; margin-bottom: 24px;
        }
        .cta-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4vw, 52px); font-weight: 700; color: #fff;
          margin: 0 0 16px; line-height: 1.15; letter-spacing: -0.01em;
        }
        .cta-sub { color: rgba(255,255,255,0.4); font-size: 16px; margin: 0 0 40px; line-height: 1.6; }
        .cta-actions { display: flex; align-items: center; justify-content: center; gap: 16px; flex-wrap: wrap; }
        .btn-primary {
          display: inline-flex; align-items: center; gap: 10px;
          background: linear-gradient(135deg, #c9a96e, #f0c97a); color: #1a1200;
          font-size: 14px; font-weight: 700; padding: 14px 32px; border-radius: 100px;
          text-decoration: none; letter-spacing: 0.03em; transition: all 0.3s ease;
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 32px #c9a96e50; }
        .btn-ghost {
          display: inline-flex; align-items: center;
          background: transparent; border: 1px solid rgba(255,255,255,0.16);
          color: rgba(255,255,255,0.65); font-size: 14px; font-weight: 500;
          padding: 14px 32px; border-radius: 100px; text-decoration: none; transition: all 0.3s ease;
        }
        .btn-ghost:hover { border-color: rgba(255,255,255,0.35); color: #fff; background: rgba(255,255,255,0.05); }
      `}</style>
    </section>
  );
}