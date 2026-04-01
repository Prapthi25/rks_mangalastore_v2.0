"use client";

import { useState, useEffect, useRef } from "react";

// ─── PRODUCT IMAGES ─────────────────────────────────────────────────────────

const PRODUCT_IMAGES: Record<string, string> = {
  // Beds
  "Hawk (Calipso Bed)": "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=600&q=80",
  "Wave (Calipso Bed)": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
  "Drift (Calipso Bed)": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80",
  "Tokyo (Calipso Bed)": "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80",
  "Clint Bedroom Set": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
  "Mesa Bedroom Set": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
  "Omera Bedroom Set": "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80",
  "Calipso Nightstand": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
  "Calipso Dresser": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  "Calipso Wardrobe": "https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=600&q=80",
  "Lucas Neo (Metal Single Bed)": "https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=600&q=80",
  "Crossett (Metal Bunk Bed)": "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&q=80",

  // Sofa
  "Cinema Recliner": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
  "Enjoy Recliner": "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?w=600&q=80",
  "Berlin Sofa": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
  "Livo Sofa": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
  "Joy Sofa": "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80",
  "Bright Sofa": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  "Rebecca Sofa": "https://images.unsplash.com/photo-1550254478-ead40cc54513?w=600&q=80",
  "Rebecca Corner Sofa": "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=600&q=80",
  "Skelton Recliner": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",

  // Living
  "Clive TV Unit": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
  "Cyndy Wall Unit": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80",
  "Lopez Wall Unit": "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80",
  "Zora Neo Center Table": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80",
  "Zio Center Table": "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&q=80",
  "Nordan Center Table": "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?w=600&q=80",
  "Flexi Foldable Bench": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",

  // Dining
  "Telford 1+4 Dining Set": "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=600&q=80",
  "Telford 1+6 Dining Set": "https://images.unsplash.com/photo-1533044309907-0fa3413da946?w=600&q=80",
  "Capacious 1+4 Dining Set": "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=600&q=80",
  "Capacious 1+6 Dining Set": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",

  // Office
  "Otis Mid-Back Chair": "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600&q=80",
  "Calida Mid-Back Chair": "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600&q=80",
  "Solitaire Mid-Back Chair": "https://images.unsplash.com/photo-1589884629038-b631346a23c0?w=600&q=80",
  "Soren Mid-Back Chair": "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&q=80",
  "Cleo Visitor Chair": "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&q=80",
  "Mazda Visitor Chair": "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600&q=80",
  "Artemis Folding Chair": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80",

  // Utility
  "Slide Neo Shoe Cabinet": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
  "Flow Neo Shoe Cabinet": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  "Itsy Shoe Cabinet": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
  "Ashford Neo Computer Table": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80",
  "Neptune Neo Study Table": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80",
  "Bean Bag": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80",
  "Zeal Cloth Dryer": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  "Maxima Iron Board": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  "Stellar Neo 4-Step Ladder": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  "Stellar Neo 5-Step Ladder": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  "Elevate Neo 6-Step Aluminium Ladder": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
};

const CATEGORY_HERO_IMAGES: Record<string, string> = {
  Beds: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80",
  Sofa: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80",
  Living: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
  Dining: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=1200&q=80",
  Office: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=1200&q=80",
  Utility: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
};

// ─── CATALOGUE DATA ──────────────────────────────────────────────────────────

const CATALOGUE = {
  Beds: {
    icon: "🛏",
    tagline: "Your Space to Unwind",
    description: "Crafted for perfect rest — from statement headboards to complete bedroom sets.",
    products: [
      {
        name: "Hawk (Calipso Bed)",
        highlights: ["Integrated shelf headboard with open space", "Curved edges, white & walnut finish", "Dual-tone design"],
        sizes: "King: 1874×2045×1095 | Queen: 1574×2045×1095",
        storage: ["Without storage", "Box storage", "Hydraulic storage"],
      },
      {
        name: "Wave (Calipso Bed)",
        highlights: ["Unique double wave headboard design", "Layered floral & walnut tones", "Blends ethnic and modern styling"],
        sizes: "King: 1874×2045×1095 | Queen: 1574×2045×1095",
        storage: ["Without storage", "Box storage", "Hydraulic storage"],
      },
      {
        name: "Drift (Calipso Bed)",
        highlights: ["Full open headboard storage with closure sliders", "3D textured high-gloss sliders", "Walnut & white membrane finish"],
        sizes: "King: 1874×2045×1095 | Queen: 1574×2045×1095",
        storage: ["Without storage", "Box storage", "Hydraulic storage"],
      },
      {
        name: "Tokyo (Calipso Bed)",
        highlights: ["Open & closed headboard storage sections", "Drop-down shutter with linear pattern", "Curved edges, seamless look"],
        sizes: "King: 1874×2045×1095 | Queen: 1574×2045×1095",
        storage: ["Without storage", "Box storage", "Hydraulic storage"],
      },
      {
        name: "Clint Bedroom Set",
        highlights: ["Engineered wood, Oak & White dual-tone", "Wardrobe with mirror, drawers & hanging bar", "Dresser + Night stand included"],
        sizes: "King Bed: 1927×2114×1010 | 2D Wardrobe: 840×490×1810",
        storage: ["Without storage", "Box storage"],
      },
      {
        name: "Mesa Bedroom Set",
        highlights: ["Walnut & Grey dual-tone modern-classic", "Wardrobe with full-length mirror", "Complete bedroom set"],
        sizes: "King Bed: 1904×2107×900 | 3D Wardrobe: 1171×480×1825",
        storage: ["Without storage", "Box storage"],
      },
      {
        name: "Omera Bedroom Set",
        highlights: ["Light Oak & Brown dual-tone finish", "Wardrobe, dresser & night stand", "Modern-classic design"],
        sizes: "King Bed: 1927×2108×925 | 3D Wardrobe: 1203×485×1830",
        storage: ["Without storage", "Box storage"],
      },
      {
        name: "Calipso Nightstand",
        highlights: ["Handle-less drawer, neat look", "Extra open shelf below", "Rounded edges, walnut finish"],
        sizes: "W 450 × D 400 × H 450",
        storage: [],
      },
      {
        name: "Calipso Dresser",
        highlights: ["Open shelf + side racks", "¾ mirror shutter, push-to-open", "Walnut finish"],
        sizes: "W 600 × D 461 × H 1700",
        storage: [],
      },
      {
        name: "Calipso Wardrobe",
        highlights: ["¾ mirror curved handle profile", "Drawer, shelf & hanging rod", "Walnut finish, 2D / 3D / 4D"],
        sizes: "2D: 800×558×1830 | 3D: 1198×558×1830 | 4D: 1596×558×1830",
        storage: [],
      },
      {
        name: "Lucas Neo (Metal Single Bed)",
        highlights: ["Neat black powder-coated MS tube", "Floating bedstead, easy transport", "Maximizes space"],
        sizes: "W 1080 × D 1990 × H 1030",
        storage: [],
      },
      {
        name: "Crossett (Metal Bunk Bed)",
        highlights: ["Thick powder-coated mild steel", "Side railing for safety", "Steel tube base"],
        sizes: "W 2030 × D 990 × H 1730",
        storage: [],
      },
    ],
  },
  Sofa: {
    icon: "🛋",
    tagline: "Comfort That Connects",
    description: "From plush recliners to spacious corner sofas — seating made for every gathering.",
    products: [
      {
        name: "Cinema Recliner",
        highlights: ["Cup holder & wide armrests", "Easy push-back recline", "Smooth curved edges"],
        sizes: "W 370 × D 1000 × H 1020",
        storage: [],
      },
      {
        name: "Enjoy Recliner",
        highlights: ["360° swivel + smooth rocking", "Cushioned headrest, high back", "Available in Blue & Brown"],
        sizes: "W 370 × D 1000 × H 1000",
        storage: [],
      },
      {
        name: "Berlin Sofa",
        highlights: ["Plush comfort with spring support", "Gunmetal legs, straight-line quilting", "MDF & Neem wood frame"],
        sizes: "2 Seater: 1460×860×1010 | 3 Seater: 1960×860×1010",
        storage: [],
      },
      {
        name: "Livo Sofa",
        highlights: ["PU foam with pocket & zig-zag springs", "Straight-line quilting, gunmetal legs", "Available in 1, 2 & 3 seater"],
        sizes: "1S: 1980×860×880 | 2S: 1460×860×880 | 3S: 930×860×880",
        storage: [],
      },
      {
        name: "Joy Sofa",
        highlights: ["Rich Brown leatherette finish", "Ergonomic seating, throw cushions", "Contemporary elevated design"],
        sizes: "1S: 840×800×780 | 2S: 1320×800×780 | 3S: 1820×800×780",
        storage: [],
      },
      {
        name: "Bright Sofa",
        highlights: ["Chic leatherette 1/2/3 seater", "Thick foam with strong webbing", "Wide armrests for comfort"],
        sizes: "1S: 900×860×860 | 2S: 1420×890×850 | 3S: 1940×860×860",
        storage: [],
      },
      {
        name: "Rebecca Sofa",
        highlights: ["Super soft foam filling", "Sturdy solid wood frame", "Classic design for modern décor"],
        sizes: "1S: 900×840×910 | 2S: 1520×840×890 | 3S: 2030×840×890",
        storage: [],
      },
      {
        name: "Rebecca Corner Sofa",
        highlights: ["Large L-shaped corner sofa", "Solid wood frame, soft foam", "Classic complementing design"],
        sizes: "W 4900 × D 830 × H 890",
        storage: [],
      },
      {
        name: "Skelton Recliner",
        highlights: ["Premium fabric recliner sofa", "Available in 1, 2 & 3 seater", "Brown tone, contemporary design"],
        sizes: "1S: 850×960×1010 | 2S: 1450×940×1000 | 3S: 2000×940×1000",
        storage: [],
      },
    ],
  },
  Living: {
    icon: "🏠",
    tagline: "Where Every Day Unfolds",
    description: "TV units, wall units & center tables that anchor your living space with style.",
    products: [
      {
        name: "Clive TV Unit",
        highlights: ["Free-flowing sliding shutters", "Ample storage, dual-tone"],
        sizes: "W 900 × D 345 × H 470",
        storage: [],
      },
      {
        name: "Cyndy Wall Unit",
        highlights: ["Fits 48\" TV, 8 shelves (4 each side)", "Ample storage, dual-tone combo"],
        sizes: "W 1080 × D 520 × H 1810",
        storage: [],
      },
      {
        name: "Lopez Wall Unit",
        highlights: ["Fits 32\" TV, 6 open shelves + 2 shutter cabinets", "15mm particle board + MDF back"],
        sizes: "W 910 × D 420 × H 1216",
        storage: [],
      },
      {
        name: "Zora Neo Center Table",
        highlights: ["Organic shape with curvy edges", "Compact sturdy design with shelf"],
        sizes: "W 800 × D 450 × H 400",
        storage: [],
      },
      {
        name: "Zio Center Table",
        highlights: ["MDF top & shelf, solid wood legs", "Walnut colour, suits all interiors"],
        sizes: "W 1000 × D 500 × H 460",
        storage: [],
      },
      {
        name: "Nordan Center Table",
        highlights: ["Tempered glass top", "Compact sturdy design with shelf"],
        sizes: "W 900 × D 540 × H 457",
        storage: [],
      },
      {
        name: "Flexi Foldable Bench",
        highlights: ["Lift top padded cushion seating", "Storage compartment with drawer", "Easy to assemble, space-saving"],
        sizes: "Small: 400×400×400 | Large: 780×400×400",
        storage: [],
      },
    ],
  },
  Dining: {
    icon: "🍽",
    tagline: "For Moments That Matter!",
    description: "Dining sets that bring family together — in solid rubberwood or premium ceramic.",
    products: [
      {
        name: "Telford 1+4 Dining Set",
        highlights: ["18mm MDF + veneer tabletop", "Rubberwood & MDF chairs with PU cushion", "Solid rubberwood frame & legs"],
        sizes: "Table: 740×1200×750 | Chair: 450×490×825",
        storage: [],
      },
      {
        name: "Telford 1+6 Dining Set",
        highlights: ["18mm MDF + veneer tabletop", "Polyester fabric upholstery", "Solid rubberwood frame & legs"],
        sizes: "Table: 900×1500×750 | Chair: 450×490×825",
        storage: [],
      },
      {
        name: "Capacious 1+4 Dining Set",
        highlights: ["Premium ceramic (sintered stone) tabletop", "Sturdy metal frame, sandy finish", "Upholstered chairs, sponge cushioning"],
        sizes: "Table: 1400×800×740 | Chair: 460×520×830",
        storage: [],
      },
      {
        name: "Capacious 1+6 Dining Set",
        highlights: ["Premium ceramic (sintered stone) tabletop", "Elegant modern design, smooth edges", "Metal frame with sandy finish"],
        sizes: "Table: 1600×900×740 | Chair: 460×520×830",
        storage: [],
      },
    ],
  },
  Office: {
    icon: "💼",
    tagline: "Focus, Made Comfortable",
    description: "Ergonomic chairs and visitor seating engineered for productivity and posture.",
    products: [
      {
        name: "Otis Mid-Back Chair",
        highlights: ["Center tilt with upright locking", "Adjustable height, PP fixed armrest", "Dual-tone colour combo"],
        sizes: "W 660 × D 660 × H 1040",
        storage: [],
      },
      {
        name: "Calida Mid-Back Chair",
        highlights: ["Center tilt mechanism", "Adjustable height, push-back comfort"],
        sizes: "W 630 × D 630 × H 1000",
        storage: [],
      },
      {
        name: "Solitaire Mid-Back Chair",
        highlights: ["Moulded foam seat, PVC back upholstery", "Nylon star base with decorative strip", "PP armrest, dual-tone"],
        sizes: "W 643 × D 630 × H 1115–1215",
        storage: [],
      },
      {
        name: "Soren Mid-Back Chair",
        highlights: ["Adjustable height, push-back comfort", "PP fixed armrest"],
        sizes: "W 643 × D 630 × H 1115–1215",
        storage: [],
      },
      {
        name: "Cleo Visitor Chair",
        highlights: ["Modern curvilinear quilted form", "MS frame with fixed armrest"],
        sizes: "W 500 × D 560 × H 860",
        storage: [],
      },
      {
        name: "Mazda Visitor Chair",
        highlights: ["Diamond quilting on seat & back", "Stainless steel, high weight capacity", "Dual-tone colour combo"],
        sizes: "W 500 × D 560 × H 860",
        storage: [],
      },
      {
        name: "Artemis Folding Chair",
        highlights: ["Collapsible, space-saving design", "Stainless steel frame, durable"],
        sizes: "W 560 × D 550 × H 840",
        storage: [],
      },
    ],
  },
  Utility: {
    icon: "🧰",
    tagline: "For Everyday Ease!",
    description: "Smart utility solutions — shoe cabinets, study tables, ladders & more.",
    products: [
      {
        name: "Slide Neo Shoe Cabinet",
        highlights: ["9+ pairs, push-to-open handleless shutter", "15mm panel, lockable, dual-tone"],
        sizes: "W 616 × D 348 × H 870",
        storage: [],
      },
      {
        name: "Flow Neo Shoe Cabinet",
        highlights: ["12+ pairs, durable metal handles", "15mm panel, lockable, dual-tone"],
        sizes: "W 618 × D 350 × H 820",
        storage: [],
      },
      {
        name: "Itsy Shoe Cabinet",
        highlights: ["9+ pairs, open shelf design", "Complete knockdown, space saver", "Raised bottom shelf"],
        sizes: "W 625 × D 295 × H 595",
        storage: [],
      },
      {
        name: "Ashford Neo Computer Table",
        highlights: ["Keyboard tray + CPU shelf", "Easy movement with lockable castors", "Ergonomic working height"],
        sizes: "W 935 × D 450 × H 755",
        storage: [],
      },
      {
        name: "Neptune Neo Study Table",
        highlights: ["Foldable writing pad with storage shelves", "Push-to-open storage, ample space", "Ergonomic height, dual-tone"],
        sizes: "W 1080 × D 400 × H 1210",
        storage: [],
      },
      {
        name: "Bean Bag",
        highlights: ["Fade & tear-resistant leatherette", "Indoor & outdoor use, bean granule fill", "Designer printed leatherette"],
        sizes: "W 640 × H 1070",
        storage: [],
      },
      {
        name: "Zeal Cloth Dryer",
        highlights: ["82ft drying space, adjustable racks", "Footwear add-on, sweater mesh", "Space-saving vertical provision"],
        sizes: "W 1540 × D 700 × H 1980",
        storage: [],
      },
      {
        name: "Maxima Iron Board",
        highlights: ["Anti-skid shoes, sturdy mesh top", "Safety iron rest, wire hanger", "Foldable & space-saving"],
        sizes: "W 1290 × D 340 × H 770",
        storage: [],
      },
      {
        name: "Stellar Neo 4-Step Ladder",
        highlights: ["Rubber-coated anti-skid steps", "150kg weight capacity", "Top handle rail for safety"],
        sizes: "W 450 × D 910 × H 1330",
        storage: [],
      },
      {
        name: "Stellar Neo 5-Step Ladder",
        highlights: ["Rubber-coated anti-skid steps", "150kg weight capacity", "Top handle rail for safety"],
        sizes: "W 450 × D 1050 × H 1550",
        storage: [],
      },
      {
        name: "Elevate Neo 6-Step Aluminium Ladder",
        highlights: ["Lightweight rust-free aluminium", "150kg weight capacity", "Anti-skid shoes, top handle rail"],
        sizes: "W 1130 × D 480 × H 1865",
        storage: [],
      },
    ],
  },
} as const;

type CategoryKey = keyof typeof CATALOGUE;
type CatalogProduct = (typeof CATALOGUE)[CategoryKey]["products"][number] & { _cat?: CategoryKey };

// ─── PRODUCT CARD ────────────────────────────────────────────────────────────

function ProductCard({ product, index }: { product: CatalogProduct; index: number }) {
  const img = PRODUCT_IMAGES[product.name] ?? "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80";
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <article
      className="product-card"
      style={{ animationDelay: `${index * 50}ms` }}
    >
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
        {/* Gradient overlay */}
        <div className="product-img-overlay" />
        {/* Index badge */}
        <span className="product-index-badge">{String(index + 1).padStart(2, "0")}</span>
        {/* Storage tags on image */}
        {product.storage.length > 0 && (
          <div className="product-img-tags">
            {product.storage.map((s) => (
              <span key={s} className="img-storage-tag">{s}</span>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="product-content">
        <h3 className="product-name">{product.name}</h3>
        <ul className="product-highlights">
          {product.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
        <div className="product-dims">
          <span className="dims-label">Dimensions (mm)</span>
          <span className="dims-value">{product.sizes}</span>
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

export default function NilkamalCataloguePage() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("Beds");
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
              p.highlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase()))
          )
          .map((p) => ({ ...p, _cat: cat }))
      )
    : category.products.map((p) => ({ ...p, _cat: activeCategory }));

  const handleCategoryChange = (cat: CategoryKey) => {
    setActiveCategory(cat);
    setSearchQuery("");
    setSidebarOpen(false);
    if (mainRef.current) mainRef.current.scrollTo({ top: 0, behavior: "smooth" });
  };

  const totalProducts = Object.values(CATALOGUE).reduce((acc, c) => acc + c.products.length, 0);

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
          position: sticky;
          top: 0;
          z-index: 100;
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
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 24px;
          height: 68px;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .nav-back {
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,0.5);
          font-size: 13px;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.2s;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px 12px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.08);
        }
        .nav-back:hover { color: #c9a96e; border-color: rgba(201,169,110,0.2); }
        .nav-divider { width: 1px; height: 24px; background: rgba(255,255,255,0.1); }
        .nav-brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .nav-logo {
          width: 42px; height: 42px;
          border-radius: 10px;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 5px;
          border: 1px solid rgba(201,169,110,0.2);
          flex-shrink: 0;
        }
        .nav-logo img { width: 100%; height: 100%; object-fit: contain; }
        .nav-brand-text { line-height: 1; }
        .nav-brand-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-weight: 700;
          color: #fff;
        }
        .nav-brand-sub {
          font-size: 10px;
          color: rgba(201,169,110,0.7);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-top: 1px;
        }
        .nav-spacer { flex: 1; }
        .nav-search-wrap {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 100px;
          padding: 9px 18px;
          transition: border-color 0.2s;
        }
        .nav-search-wrap:focus-within { border-color: rgba(201,169,110,0.4); }
        .search-ico { color: rgba(255,255,255,0.3); flex-shrink: 0; }
        .nav-search {
          background: none;
          border: none;
          outline: none;
          color: #fff;
          font-size: 13px;
          font-family: 'DM Sans', sans-serif;
          width: 190px;
        }
        .nav-search::placeholder { color: rgba(255,255,255,0.25); }
        .nav-stats {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(201,169,110,0.08);
          border: 1px solid rgba(201,169,110,0.2);
          border-radius: 100px;
          padding: 6px 14px;
        }
        .nav-stats-dot { width: 6px; height: 6px; border-radius: 50%; background: #c9a96e; }
        .nav-stats-text { font-size: 12px; color: #c9a96e; font-weight: 600; }
        .mobile-menu-btn {
          display: none;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: #fff;
          width: 40px; height: 40px;
          border-radius: 10px;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 18px;
        }

        /* ─── BODY LAYOUT ─── */
        .page-body {
          flex: 1;
          display: flex;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          padding: 0 24px;
          gap: 0;
        }

        /* ─── SIDEBAR ─── */
        .sidebar {
          width: 230px;
          flex-shrink: 0;
          position: sticky;
          top: 68px;
          height: calc(100vh - 68px);
          overflow-y: auto;
          padding: 28px 0 28px;
          border-right: 1px solid rgba(255,255,255,0.06);
          display: flex;
          flex-direction: column;
          gap: 3px;
          scrollbar-width: thin;
          scrollbar-color: rgba(255,255,255,0.1) transparent;
        }
        .sidebar::-webkit-scrollbar { width: 4px; }
        .sidebar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }

        .sidebar-heading {
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
          font-weight: 700;
          padding: 0 10px;
          margin-bottom: 8px;
          margin-top: 4px;
        }
        .sidebar-cat-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 12px;
          background: transparent;
          border: 1px solid transparent;
          cursor: pointer;
          color: rgba(255,255,255,0.4);
          font-size: 13px;
          font-weight: 500;
          font-family: 'DM Sans', sans-serif;
          text-align: left;
          transition: all 0.2s;
          width: 100%;
        }
        .sidebar-cat-btn:hover {
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.7);
        }
        .sidebar-cat-btn.active {
          background: rgba(201,169,110,0.1);
          border-color: rgba(201,169,110,0.25);
          color: #c9a96e;
        }
        .cat-icon { font-size: 16px; flex-shrink: 0; }
        .cat-label { flex: 1; }
        .cat-count {
          font-size: 10px;
          background: rgba(255,255,255,0.07);
          padding: 2px 7px;
          border-radius: 100px;
          color: rgba(255,255,255,0.3);
        }
        .sidebar-cat-btn.active .cat-count {
          background: rgba(201,169,110,0.15);
          color: rgba(201,169,110,0.8);
        }
        .sidebar-sep {
          height: 1px;
          background: rgba(255,255,255,0.06);
          margin: 12px 0;
        }
        .sidebar-brand-card {
          margin: 0 4px;
          background: rgba(201,169,110,0.06);
          border: 1px solid rgba(201,169,110,0.12);
          border-radius: 12px;
          padding: 14px;
        }
        .brand-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          font-weight: 700;
          color: rgba(255,255,255,0.5);
          margin-bottom: 6px;
        }
        .brand-card-text {
          font-size: 10px;
          color: rgba(255,255,255,0.2);
          line-height: 1.6;
        }
        .brand-certs {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          margin-top: 8px;
        }
        .cert-badge {
          font-size: 9px;
          color: rgba(201,169,110,0.6);
          background: rgba(201,169,110,0.08);
          border: 1px solid rgba(201,169,110,0.15);
          border-radius: 100px;
          padding: 2px 7px;
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        /* ─── MAIN ─── */
        .main-content {
          flex: 1;
          padding: 28px 0 28px 28px;
          overflow-y: auto;
          min-width: 0;
        }

        /* ─── CATEGORY HERO ─── */
        .cat-hero {
          position: relative;
          height: 220px;
          border-radius: 20px;
          overflow: hidden;
          margin-bottom: 28px;
        }
        .cat-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .cat-hero:hover .cat-hero-img { transform: scale(1.04); }
        .cat-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(10,10,14,0.9) 0%, rgba(10,10,14,0.5) 60%, rgba(10,10,14,0.2) 100%);
        }
        .cat-hero-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 32px;
        }
        .cat-hero-eyebrow {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #c9a96e;
          font-weight: 600;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .cat-hero-eyebrow::before {
          content: '';
          display: block;
          width: 24px;
          height: 1px;
          background: #c9a96e;
        }
        .cat-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 42px;
          font-weight: 700;
          color: #fff;
          line-height: 1;
          margin-bottom: 8px;
        }
        .cat-hero-desc {
          font-size: 13px;
          color: rgba(255,255,255,0.55);
          max-width: 360px;
          line-height: 1.6;
        }
        .cat-hero-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(201,169,110,0.15);
          border: 1px solid rgba(201,169,110,0.3);
          backdrop-filter: blur(8px);
          border-radius: 100px;
          padding: 6px 14px;
          font-size: 12px;
          color: #c9a96e;
          font-weight: 600;
        }

        /* ─── SEARCH RESULTS LABEL ─── */
        .search-results-label {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
          padding: 12px 16px;
          background: rgba(201,169,110,0.06);
          border: 1px solid rgba(201,169,110,0.15);
          border-radius: 10px;
        }
        .search-results-label span { font-size: 13px; color: rgba(255,255,255,0.5); }
        .search-results-label strong { color: #c9a96e; }

        /* ─── PRODUCT GRID ─── */
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px;
        }

        .product-card {
          background: #111116;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
          animation: cardReveal 0.5s cubic-bezier(0.23,1,0.32,1) both;
          cursor: default;
        }
        .product-card:hover {
          border-color: rgba(201,169,110,0.3);
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,169,110,0.1);
        }
        @keyframes cardReveal {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .product-img-wrap {
          position: relative;
          height: 180px;
          overflow: hidden;
          background: #1a1a20;
          flex-shrink: 0;
        }
        .img-skeleton {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #1a1a20 25%, #222228 50%, #1a1a20 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 0.4s ease, transform 0.5s ease;
        }
        .product-img.loaded { opacity: 1; }
        .product-card:hover .product-img { transform: scale(1.06); }
        .product-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(10,10,14,0.05) 0%, rgba(10,10,14,0.6) 100%);
        }
        .product-index-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 11px;
          font-weight: 700;
          color: rgba(201,169,110,0.8);
          background: rgba(10,10,14,0.7);
          backdrop-filter: blur(4px);
          padding: 3px 8px;
          border-radius: 6px;
          border: 1px solid rgba(201,169,110,0.2);
          letter-spacing: 0.08em;
        }
        .product-img-tags {
          position: absolute;
          bottom: 10px;
          left: 10px;
          right: 10px;
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
        }
        .img-storage-tag {
          font-size: 9px;
          font-weight: 600;
          color: rgba(201,169,110,0.9);
          background: rgba(10,10,14,0.8);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(201,169,110,0.2);
          padding: 3px 8px;
          border-radius: 100px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .product-content {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
        }
        .product-name {
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          line-height: 1.3;
          letter-spacing: 0.01em;
        }
        .product-highlights {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
        }
        .product-highlights li {
          font-size: 11.5px;
          color: rgba(255,255,255,0.4);
          line-height: 1.5;
          padding-left: 14px;
          position: relative;
        }
        .product-highlights li::before {
          content: '›';
          position: absolute;
          left: 0;
          color: #c9a96e;
          font-weight: 700;
          font-size: 13px;
        }
        .product-dims {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 8px;
          padding: 8px 10px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .dims-label {
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: rgba(201,169,110,0.5);
          font-weight: 600;
        }
        .dims-value {
          font-size: 10.5px;
          color: rgba(255,255,255,0.35);
          line-height: 1.5;
          word-break: break-word;
        }
        .product-enquire-btn {
          display: block;
          text-align: center;
          background: linear-gradient(135deg, rgba(201,169,110,0.12), rgba(139,105,20,0.12));
          border: 1px solid rgba(201,169,110,0.25);
          color: #c9a96e;
          font-size: 12px;
          font-weight: 600;
          padding: 10px;
          border-radius: 10px;
          text-decoration: none;
          transition: all 0.2s;
          font-family: 'DM Sans', sans-serif;
          letter-spacing: 0.02em;
        }
        .product-enquire-btn:hover {
          background: linear-gradient(135deg, rgba(201,169,110,0.2), rgba(139,105,20,0.2));
          border-color: rgba(201,169,110,0.5);
          color: #f5d08a;
        }

        /* ─── EMPTY STATE ─── */
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 20px;
          text-align: center;
          gap: 12px;
        }
        .empty-icon { font-size: 48px; opacity: 0.3; }
        .empty-title { font-size: 18px; color: rgba(255,255,255,0.3); font-weight: 600; }
        .empty-sub { font-size: 13px; color: rgba(255,255,255,0.15); }

        /* ─── MOBILE OVERLAY SIDEBAR ─── */
        .mobile-sidebar-overlay {
          display: none;
          position: fixed;
          inset: 0;
          z-index: 200;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(4px);
        }
        .mobile-sidebar-drawer {
          position: fixed;
          left: 0;
          top: 0;
          bottom: 0;
          width: 260px;
          background: #111116;
          border-right: 1px solid rgba(255,255,255,0.08);
          z-index: 201;
          overflow-y: auto;
          padding: 24px 16px;
          transform: translateX(-100%);
          transition: transform 0.3s cubic-bezier(0.23,1,0.32,1);
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .mobile-sidebar-drawer.open { transform: translateX(0); }
        .mobile-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .mobile-drawer-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-weight: 700;
          color: #fff;
        }
        .drawer-close-btn {
          width: 32px; height: 32px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          color: rgba(255,255,255,0.5);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
        }

        /* ─── MOBILE BOTTOM TABS ─── */
        .mobile-bottom-tabs {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 90;
          background: rgba(10,10,14,0.97);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 8px 4px 12px;
          gap: 2px;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .mobile-bottom-tabs::-webkit-scrollbar { display: none; }
        .mobile-tab-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
          padding: 6px 10px;
          border-radius: 10px;
          background: transparent;
          border: none;
          cursor: pointer;
          color: rgba(255,255,255,0.35);
          font-size: 10px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          flex-shrink: 0;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .mobile-tab-btn.active { color: #c9a96e; }
        .mobile-tab-icon { font-size: 20px; }
        .mobile-tab-active-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: #c9a96e;
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 1024px) {
          .sidebar { width: 200px; }
          .nav-search { width: 140px; }
        }

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
          .product-grid { grid-template-columns: 1fr 1fr; gap: 10px; }
          .product-img-wrap { height: 130px; }
          .product-name { font-size: 13px; }
          .product-content { padding: 12px; gap: 8px; }
          .product-enquire-btn { font-size: 11px; padding: 8px; }
          .dims-value { font-size: 9.5px; }
        }

        @media (max-width: 360px) {
          .product-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ─── TOP NAV ─── */}
      <nav className={`top-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <a href="/" className="nav-back">
            ← Back
          </a>
          <div className="nav-divider" />
          <div className="nav-brand">
            <div className="nav-logo">
              <img
                src="https://res.cloudinary.com/dk05wqwo1/image/upload/v1774611294/images_2_hcrzdd.png"
                alt="Nilkamal"
              />
            </div>
            <div className="nav-brand-text">
              <div className="nav-brand-name">Nilkamal</div>
              <div className="nav-brand-sub">Ready Furniture Catalogue</div>
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
              placeholder="Search all products…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                style={{ background: "none", border: "none", color: "rgba(255,255,255,0.3)", cursor: "pointer", fontSize: "16px", lineHeight: 1, padding: 0 }}
              >
                ×
              </button>
            )}
          </div>

          <div className="nav-stats">
            <div className="nav-stats-dot" />
            <span className="nav-stats-text">{totalProducts} Products</span>
          </div>

          <button className="mobile-menu-btn" onClick={() => setSidebarOpen(true)} aria-label="Open categories">
            ☰
          </button>
        </div>
      </nav>

      {/* ─── MOBILE SEARCH (below nav on mobile) ─── */}
      <div style={{ display: "none" }} className="mobile-search-bar">
        <div style={{ padding: "10px 16px", background: "rgba(10,10,14,0.9)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="nav-search-wrap" style={{ width: "100%", borderRadius: "10px" }}>
            <svg className="search-ico" width="14" height="14" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              className="nav-search"
              placeholder="Search products…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>

      {/* ─── MAIN BODY ─── */}
      <div className="page-body">
        {/* ─── DESKTOP SIDEBAR ─── */}
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
            <div className="brand-card-title">Nilkamal Limited</div>
            <p className="brand-card-text">40+ years of trusted Indian craftsmanship — delivering quality to every home.</p>
            <div className="brand-certs">
              <span className="cert-badge">TÜV</span>
              <span className="cert-badge">Power Brand</span>
              <span className="cert-badge">Greenguard</span>
            </div>
          </div>
        </aside>

        {/* ─── MAIN CONTENT ─── */}
        <main className="main-content" ref={mainRef}>
          {/* Category hero (only when not searching) */}
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
                  {CATALOGUE[activeCategory].icon} Nilkamal
                </div>
                <h1 className="cat-hero-title">{activeCategory}</h1>
                <p className="cat-hero-desc">{CATALOGUE[activeCategory].description}</p>
              </div>
              <div className="cat-hero-badge">{category.tagline}</div>
            </div>
          )}

          {/* Search results label */}
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
              >
                Clear ×
              </button>
            </div>
          )}

          {/* Product grid */}
          {filtered.length === 0 ? (
            <div className="empty-state">
              <span className="empty-icon">🔍</span>
              <p className="empty-title">No products found</p>
              <p className="empty-sub">Try a different keyword or browse by category</p>
            </div>
          ) : (
            <div className="product-grid">
              {filtered.map((product, i) => (
                <ProductCard key={`${product.name}-${i}`} product={product} index={i} />
              ))}
            </div>
          )}
        </main>
      </div>

      {/* ─── MOBILE DRAWER SIDEBAR ─── */}
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
              <div className="brand-card-title">Nilkamal Limited</div>
              <p className="brand-card-text">40+ years of trusted Indian craftsmanship.</p>
              <div className="brand-certs">
                <span className="cert-badge">TÜV</span>
                <span className="cert-badge">Power Brand</span>
                <span className="cert-badge">Greenguard</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─── MOBILE BOTTOM TABS ─── */}
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