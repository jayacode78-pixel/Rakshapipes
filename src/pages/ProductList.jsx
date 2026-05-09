
import { useParams } from "react-router-dom";
import { useEffect, useState, useMemo, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Banners
import ptmtBanner from "../assets/images/ptmt.jpg";
import pipesBanner from "../assets/images/Pipes_and_Fittings.jpg";
import sinkBanner from "../assets/images/SinksImage.jpg";
import tankBanner from "../assets/images/water-tank.jpg";
import bathroomBanner from "../assets/images/bathroomAccessories.jpg";
import frpBanner from "../assets/images/frp_manhole_cover.jpg";


// =========================
// COLLAGE
// =========================
function Collage({ products, loading, selectedSubType }) {
  const navigate = useNavigate();

  if (loading) return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "300px",
      fontSize: "14px",
      color: "#adadad",
      letterSpacing: "0.08em",
      fontFamily: "sans-serif"
    }}>
      Loading products...
    </div>
  );

  if (!products.length) return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "200px",
      fontSize: "14px",
      color: "#ff0000",
      fontFamily: "sans-serif"
    }}>
      No products found 😕
    </div>
  );

  const accentColors = [
    "#a5c99a", "#a8b5a2", "#b5a8a8", "#9fafa8",
    "#bfb09a", "#a9a0b5", "#b0bab5", "#c4b0a0"
  ];

  // Show all products (up to 20 max)
  const displayProducts = products.slice(0, 20);
  const n = displayProducts.length;

  // Square-ish grid: cols = ceil(sqrt(n)), rows = ceil(n / cols)
  const cols = Math.ceil(Math.sqrt(n));
  const rows = Math.ceil(n / cols);

  // Empty placeholder cells to fill the last row
  const totalCells = cols * rows;
  const emptyCells = totalCells - n;

  return (
    <>
      <style>{`
        .collage-card .collage-overlay {
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .collage-card:hover .collage-overlay {
          opacity: 1;
        }
        .collage-card img {
          transition: transform 0.5s ease, filter 0.5s ease;
          filter: brightness(0.96) saturate(1.05);
        }
        .collage-card:hover img {
          transform: scale(1.06);
          filter: brightness(1.08) saturate(1.1);
        }
      `}</style>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gap: "1px",
          padding: "1px",
          background: "transparent",
          // Fixed height — fits in viewport without scrolling
          height: "55vh",
          width: "100%",
        }}
      >
        {displayProducts.map((item, index) => {
          let selectedVariant = item.variants?.[0];

          if (selectedSubType) {
            const found = item.variants?.find(
              v =>
                v.subType?.toLowerCase().trim() ===
                selectedSubType.toLowerCase().trim()
            );
            if (found) selectedVariant = found;
          }

          const accent = accentColors[index % accentColors.length];
          const hasImage = !!selectedVariant?.image;

          return (
            <div
              key={item._id}
              className="collage-card"
              onClick={() =>
                navigate(`/product/${selectedVariant?.modelNumber || item.modelNumber}`)
              }
              style={{
                borderRadius: "6px",
                overflow: "hidden",
                cursor: "pointer",
                position: "relative",
                background: "#4e4c4cda",
                boxShadow: "0 1px 5px rgba(0,0,0,0.2)",
              }}
            >
              {hasImage ? (
                <img
                  src={selectedVariant.image}
                  alt={item.modelNumber || ""}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                    display: "block",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: accent,
                    fontSize: "10px",
                    color: "rgba(255,255,255,0.85)",
                    letterSpacing: "0.08em",
                    fontFamily: "sans-serif",
                    textTransform: "uppercase",
                    padding: "4px",
                    textAlign: "center",
                    boxSizing: "border-box",
                  }}
                >
                  {item.modelNumber}
                </div>
              )}

              <div
                className="collage-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "5px 4px 4px",
                }}
              >
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: "8px",
                    fontWeight: "600",
                    letterSpacing: "0.06em",
                    fontFamily: "sans-serif",
                    textTransform: "uppercase",
                    lineHeight: 1.3,
                    textShadow: "0 1px 3px rgba(0,0,0,0.7)",
                  }}
                >
                  {selectedVariant?.modelNumber || item.modelNumber}
                </span>
                {selectedVariant?.subType && (
                  <span
                    style={{
                      color: "rgba(220,220,220,0.85)",
                      fontSize: "6px",
                      letterSpacing: "0.05em",
                      fontFamily: "sans-serif",
                      marginTop: "1px",
                      textTransform: "capitalize",
                    }}
                  >
                    {selectedVariant.subType}
                  </span>
                )}
              </div>
            </div>
          );
        })}

        {/* Empty placeholder cells to fill last row — keeps grid tight */}
        {Array(emptyCells).fill(null).map((_, i) => (
          <div
            key={`empty-${i}`}
            style={{
              borderRadius: "6px",
              background: "transparent",
              visibility: "hidden",
            }}
          />
        ))}
      </div>
    </>
  );
}


// =========================
// SERIES CARD
// =========================
function SeriesCard({
  series,
  subTypes,
  selectedSeries,
  selectedSubType,
  onSeriesClick,
  onSubClick
}) {
  return (
    <div style={{
      minWidth: "260px",
      border: selectedSeries === series ? "2px solid black" : "1px solid #eee",
      borderRadius: "12px",
      padding: "15px",
      background: "#fff",
      flexShrink: 0
    }}>
      <h3 style={{ cursor: "pointer" }} onClick={() => onSeriesClick(series)}>
        {series.toUpperCase()}
      </h3>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        marginTop: "10px"
      }}>
        {subTypes.map(sub => (
          <button
            key={sub}
            onClick={() => onSubClick(series, sub)}
            style={{
              padding: "6px 12px",
              borderRadius: "20px",
              cursor: "pointer",
              fontSize: "12px",
              border: selectedSubType === sub ? "none" : "1px solid #ccc",
              background: selectedSubType === sub ? "black" : "#f5f5f5",
              color: selectedSubType === sub ? "#fff" : "#000000"
            }}
          >
            {sub}
          </button>
        ))}
      </div>
    </div>
  );
}


// =========================
// MAIN COMPONENT
// =========================
export default function ProductList() {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [selectedSeries, setSelectedSeries] = useState("");
  const [selectedSubType, setSelectedSubType] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");

  const sliderRef = useRef(null);
  const autoSlideRef = useRef(null);

  const startAutoSlide = () => {
    autoSlideRef.current = setInterval(() => {
      const el = sliderRef.current;
      if (!el) return;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 280, behavior: "smooth" });
      }
    }, 2500);
  };

  const stopAutoSlide = () => clearInterval(autoSlideRef.current);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const slideLeft = () => {
    stopAutoSlide();
    sliderRef.current?.scrollBy({ left: -280, behavior: "smooth" });
    startAutoSlide();
  };

  const slideRight = () => {
    stopAutoSlide();
    sliderRef.current?.scrollBy({ left: 280, behavior: "smooth" });
    startAutoSlide();
  };

  const seriesData = useMemo(() => ({
    royal: ["royal", "royal elite", "royal green"],
    emerald: ["emerald", "emerald plus", "emerald elite"],
    jade: ["jade", "jade plus", "jade elite"],
    galaxy: ["galaxy", "galaxy elite"],
    ruby: ["RUB"],
    woodlite: ["Woodlite Series"],
    aqua: ["aqua", "elite", "plus"], 
    coral: ["coral", "coral elite"],
    silver: ["silver-1"],
    diamond: ["diamond-1"],
    standard: ["standard-1"],
    gold: ["gold-1"],
    superb: ["superb-1"],
    sona: ["sona-1"]
  }), []);

  const formattedCategory = category?.toLowerCase().replace(/_/g, "-");

  const banners = {
    ptmt: ptmtBanner,
    "pipes-and-fittings": pipesBanner,
    "kitchen-sinks": sinkBanner,
    "water-tank": tankBanner,
    "bathroom-accessories": bathroomBanner,
    "frp-manhole-cover": frpBanner,
  };

  const bannerImage = banners[formattedCategory];

  useEffect(() => {
    setLoading(true);

    axios.get("http://localhost:5000/api/products", {
      params: {
        category: formattedCategory,
        series: selectedSeries || undefined,
        subType: selectedSubType || undefined,
        color: selectedColor || undefined,
      },
    })
      .then(res => setProducts(res.data))
      .catch(console.log)
      .finally(() => setLoading(false));

  }, [formattedCategory, selectedSeries, selectedSubType, selectedColor]);

  const arrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
    background: "#fff",
    border: "1px solid #ddd",
    borderRadius: "50%",
    width: "36px",
    height: "36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    fontSize: "16px",
    userSelect: "none"
  };

  return (
    <div>

      {/* BANNER */}
      <div style={{
        height: "70vh",
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: "32px",
        fontWeight: "bold",
      }}>
        {formattedCategory?.replace(/-/g, " ").toUpperCase()}
      </div>

      {/* FILTER */}
      {(selectedSeries || selectedSubType) && (
        <div style={{ padding: "10px 20px" }}>
          <strong>Selected:</strong> {selectedSeries} {selectedSubType && `> ${selectedSubType}`}
          <button
            onClick={() => {
              setSelectedSeries("");
              setSelectedSubType("");
            }}
            style={{ marginLeft: "10px" }}
          >
            Clear
          </button>
        </div>
      )}

      {/* COLLAGE */}
      <Collage
        products={products}
        loading={loading}
        selectedSubType={selectedSubType}
      />

      {/* SERIES */}
      <div style={{ marginTop: "20px" }}>
        <h2 style={{ paddingLeft: "20px" }}>Browse Series</h2>

        <div style={{ position: "relative", padding: "0 48px" }}>

          <div style={{ ...arrowStyle, left: "8px" }} onClick={slideLeft}>‹</div>

          <div
            ref={sliderRef}
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
            style={{
              display: "flex",
              overflowX: "auto",
              gap: "15px",
              padding: "20px 4px",
              scrollbarWidth: "none",
              msOverflowStyle: "none"
            }}
          >
            <style>{`.series-slider::-webkit-scrollbar { display: none; }`}</style>

            {Object.keys(seriesData).map(series => (
              <SeriesCard
                key={series}
                series={series}
                subTypes={seriesData[series]}
                selectedSeries={selectedSeries}
                selectedSubType={selectedSubType}
                onSeriesClick={(s) => {
                  setSelectedSeries(s);
                  setSelectedSubType(seriesData[s]?.[0] || "");
                }}
                onSubClick={(s, sub) => {
                  setSelectedSeries(s);
                  setSelectedSubType(sub);
                }}
              />
            ))}
          </div>

          <div style={{ ...arrowStyle, right: "8px" }} onClick={slideRight}>›</div>

        </div>
      </div>

    </div>
  );
}




