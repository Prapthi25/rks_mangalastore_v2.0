"use client";

import { useState } from "react";

/* ─── shared data types ─────────────────────────────────── */
const BRANDS = [
  { name: "Sleepwell",     category: "Mattresses", logo: "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774610210/images_xkmpro.jpg" },
  { name: "Kurlon",        category: "Mattresses", logo: "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774619883/55bbf973ce793f83b2e887acd4458e2c.w2084.h2084_uwapc8.png" },
  { name: "Springfit",     category: "Mattresses", logo: "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774610547/images_dmuxme.png" },
  { name: "Wakefit",       category: "Mattresses", logo: "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774611809/Wakefit_Logo_bgtolz.jpg" },
  { name: "Godrej Interio",category: "Furniture",  logo: "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774610700/images_1_z54k36.jpg" },
  { name: "Durian",        category: "Furniture",  logo: "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774620138/images_4_jw1ckk.png" },
  { name: "Nilkamal",      category: "Furniture",  logo: "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774611294/images_2_hcrzdd.png" },
  { name: "Royal Oak",     category: "Furniture",  logo: "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774611294/images_3_cgewbo.png" },
  { name: "Urban Ladder",  category: "Furniture",  logo: "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774620298/urban-ladder-logo-png_seeklogo-411700_wnbycx.png" },
  { name: "Featherlite",   category: "Office",     logo: "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774611294/featherlite-logo_tfvhrg.png" },
  { name: "Herman Miller", category: "Office",     logo: "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774611296/sq-herman-miller-order-design-rebrand_dezeen_2364_col_0_rfcthq.jpg" },
  { name: "Kokuyo",        category: "Office",     logo: "https://res.cloudinary.com/dk05wqwo1/image/upload/v1774614525/kokuyo_ah4wai.svg" },
];

const CATEGORY_META: Record<string, { color: string }> = {
  Mattresses: { color: "#7c6af7" },
  Furniture:  { color: "#c9a96e" },
  Office:     { color: "#5ca8d4" },
};

type Brand = (typeof BRANDS)[0];

/* ─── Single marquee card ───────────────────────────────── */
function MarqueeCard({ brand }: { brand: Brand }) {
  const [failed, setFailed] = useState(false);
  const color = CATEGORY_META[brand.category]?.color ?? "#aaa";

  return (
    <div className="ms-card">
      <div className="ms-logo">
        {failed ? (
          <span className="ms-logo-fallback" style={{ color }}>{brand.name[0]}</span>
        ) : (
          <img
            src={brand.logo}
            alt={brand.name}
            className="ms-logo-img"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      <div className="ms-text">
        <span className="ms-name">{brand.name}</span>
        <span className="ms-cat">
          <span className="ms-dot" style={{ background: color }} />
          <span style={{ color }}>{brand.category}</span>
        </span>
      </div>
    </div>
  );
}

/* ─── Marquee Row (reusable) ────────────────────────────── */
function MarqueeRow({ brands, direction }: { brands: Brand[]; direction: "fwd" | "rev" }) {
  const tripled = [...brands, ...brands, ...brands];
  return (
    <div className={`ms-row ms-row--${direction}`}>
      {tripled.map((b, i) => (
        <MarqueeCard key={`${direction}-${b.name}-${i}`} brand={b} />
      ))}
    </div>
  );
}

/* ─── Main export ───────────────────────────────────────── */
export default function MarqueeStrip() {
  const reversed = [...BRANDS].reverse();

  return (
    <div className="ms-root">
      {/* Top ruled line */}
      <div className="ms-ruled" />

      <div className="ms-body-wrap">
        {/* Left editorial label */}
        <div className="ms-label">
          <span className="ms-label-eyebrow">Partners</span>
          <span className="ms-label-title">
            Brand<br />Universe
          </span>
          <span className="ms-label-rule" />
        </div>

        {/* Right edge fade */}
        <div className="ms-fade-right" />

        {/* Dual scrolling rows */}
        <div className="ms-body">
          <MarqueeRow brands={BRANDS}    direction="fwd" />
          <div className="ms-row-divider" />
          <MarqueeRow brands={reversed}  direction="rev" />
        </div>
      </div>

      {/* Counter strip */}
      <div className="ms-counter">
        <div className="ms-ctr-item">
          <span className="ms-ctr-num">12</span>
          Brand Partners
        </div>
        <div className="ms-ctr-sep" />
        <div className="ms-ctr-item">
          <span className="ms-ctr-num">3</span>
          Categories
        </div>
        <div className="ms-ctr-sep" />
        <div className="ms-ctr-item">
          <span className="ms-ctr-num">500+</span>
          Products
        </div>
      </div>

      {/* Bottom ruled line */}
      <div className="ms-ruled" />

      <style>{`
        /* ── root ── */
        .ms-root {
          position: relative;
          overflow: hidden;
          margin: 60px 0 0;
          z-index: 2;
          font-family: 'DM Sans', system-ui, sans-serif;
        }

        /* ── ruled lines ── */
        .ms-ruled {
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(201,169,110,0.18) 20%,
            rgba(201,169,110,0.35) 50%,
            rgba(201,169,110,0.18) 80%,
            transparent 100%
          );
        }

        /* ── body wrapper (positions label + rows) ── */
        .ms-body-wrap {
          position: relative;
        }

        /* ── left label column ── */
        .ms-label {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 130px;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 0 0 0 24px;
          /* covers left edge + acts as fade */
          background: linear-gradient(to right, #060608 65%, transparent 100%);
        }
        .ms-label-eyebrow {
          font-size: 9px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(201,169,110,0.5);
          margin-bottom: 6px;
        }
        .ms-label-title {
          font-size: 13px;
          font-weight: 600;
          color: rgba(255,255,255,0.75);
          letter-spacing: 0.02em;
          line-height: 1.3;
        }
        .ms-label-rule {
          display: block;
          margin-top: 10px;
          width: 24px;
          height: 1px;
          background: rgba(201,169,110,0.4);
        }

        /* ── right fade ── */
        .ms-fade-right {
          position: absolute;
          right: 0; top: 0; bottom: 0;
          width: 100px;
          background: linear-gradient(to left, #060608, transparent);
          z-index: 10;
          pointer-events: none;
        }

        /* ── scrolling body ── */
        .ms-body {
          display: flex;
          flex-direction: column;
          padding: 20px 0;
          padding-left: 130px;
          overflow: hidden;
        }

        /* ── rows ── */
        .ms-row {
          display: flex;
          width: max-content;
          gap: 10px;
          padding: 5px 0;
          will-change: transform;
        }
        .ms-row--fwd { animation: msFwd 30s linear infinite; }
        .ms-row--rev { animation: msRev 26s linear infinite; }
        .ms-root:hover .ms-row { animation-play-state: paused; }

        @keyframes msFwd {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
        @keyframes msRev {
          from { transform: translateX(-33.333%); }
          to   { transform: translateX(0); }
        }

        /* ── row divider ── */
        .ms-row-divider {
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,0.04) 30%,
            rgba(255,255,255,0.04) 70%,
            transparent
          );
        }

        /* ── card ── */
        .ms-card {
          display: flex;
          align-items: center;
          height: 62px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          flex-shrink: 0;
          transition: border-color 0.25s, background 0.25s, transform 0.25s;
        }
        .ms-card:hover {
          background: rgba(201,169,110,0.07);
          border-color: rgba(201,169,110,0.35);
          transform: translateY(-2px);
        }

        /* ── logo box — fixed square, always white ── */
        .ms-logo {
          width: 62px;
          height: 62px;
          min-width: 62px;
        //   background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          padding: 10px;
          border-right: 1px solid rgba(0,0,0,0.08);
        }
        .ms-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }
        .ms-logo-fallback {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 22px;
          font-weight: 700;
        }

        /* ── text block ── */
        .ms-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 18px;
          gap: 3px;
          min-width: 0;
        }
        .ms-name {
          font-size: 12.5px;
          font-weight: 600;
          color: rgba(255,255,255,0.88);
          white-space: nowrap;
          letter-spacing: 0.01em;
        }
        .ms-cat {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .ms-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* ── counter strip ── */
        .ms-counter {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 32px;
          padding: 14px 24px;
          border-top: 1px solid rgba(255,255,255,0.05);
          flex-wrap: wrap;
        }
        .ms-ctr-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .ms-ctr-num {
          font-size: 13px;
          font-weight: 600;
          color: rgba(201,169,110,0.7);
        }
        .ms-ctr-sep {
          width: 1px;
          height: 14px;
          background: rgba(255,255,255,0.1);
        }

        /* ── mobile ── */
        @media (max-width: 640px) {
          .ms-label { width: 90px; padding-left: 16px; }
          .ms-label-title { font-size: 11px; }
          .ms-body { padding-left: 90px; }
          .ms-card { height: 54px; }
          .ms-logo { width: 54px; height: 54px; min-width: 54px; }
          .ms-counter { gap: 20px; padding: 12px 16px; }
        }
      `}</style>
    </div>
  );
}