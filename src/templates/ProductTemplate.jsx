import { useState } from "react";
import { useParams } from "react-router-dom";
import productData from "../data/productData";

export default function ProductTemplate() {
  // const { slug } = useParams();
  // const product = productData[slug];

  const { category, slug } = useParams();
const product = productData?.[category]?.[slug];
  const [expanded, setExpanded] = useState(false);

  if (!product) {
    return (
      <div style={{ padding: "100px 20px", textAlign: "center" }}>
        <h2>Product Not Found</h2>
      </div>
    );
  }
  
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* ===== RESPONSIVE STYLES ===== */}
      <style>{`
        .hero-section {
          height: 85vh;
          position: relative;
          background-size: cover;
          background-position: center;
        }
        .hero-content {
          position: absolute;
          top: 50%;
          left: 10%;
          transform: translateY(-50%);
          color: #fff;
          max-width: 600px;
          width: 80%;
        }
        .hero-title {
          font-size: 52px;
          font-weight: 800;
          margin: 0;
        }
        .hero-desc {
          margin-top: 15px;
          color: #dbeafe;
        }
        .hero-buttons {
          margin-top: 25px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          padding: 80px 20px;
          max-width: 1200px;
          margin: auto;
          align-items: center;
        }
        .product-image {
          width: 100%;
          height: 420px;
          object-fit: cover;
          border-radius: 18px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.25);
          transition: 0.4s;
          display: block;
        }

        @media (max-width: 900px) {
          .hero-title {
            font-size: 36px;
          }
          .info-grid {
            grid-template-columns: 1fr;
            gap: 36px;
            padding: 48px 20px;
          }
          .product-image {
            height: 300px;
          }
        }

        @media (max-width: 600px) {
          .hero-section {
            height: 70vh;
            min-height: 340px;
          }
          .hero-content {
            left: 5%;
            width: 90%;
          }
          .hero-title {
            font-size: 26px;
          }
          .hero-desc {
            font-size: 14px;
          }
          .hero-buttons {
            flex-direction: column;
            gap: 10px;
          }
          .hero-buttons button {
            width: 100%;
          }
          .info-grid {
            padding: 32px 16px;
            gap: 24px;
          }
          .product-image {
            height: 220px;
            border-radius: 12px;
          }
        }
      `}</style>

      {/* ================= HERO ================= */}
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${product.heroImage || "https://images.unsplash.com/photo-1503387762-592deb58ef4e"})`,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.75), rgba(0,0,50,0.55))",
          }}
        />
        <div className="hero-content">
          <h1 className="hero-title">{product.title}</h1>
          <p className="hero-desc">{product.description}</p>
          <div className="hero-buttons">
            {/* BUTTON 1 */}
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/catalogue.pdf";
                link.download = "RAKSHA-Catalogue.pdf";
                link.click();
              }}
              style={{
                padding: "12px 22px",
                background: "#e11d48",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-3px)";
                e.target.style.boxShadow = "0 10px 20px rgba(225,29,72,0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              {product.button1}
            </button>
            {/* BUTTON 2 */}
            <button
              style={{
                padding: "12px 22px",
                background: "transparent",
                color: "#fff",
                border: "2px solid #3b82f6",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#3b82f6";
                e.target.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.transform = "translateY(0)";
              }}
            >
              {product.button2}
            </button>
          </div>
        </div>
      </div>

      {/* ================= INFO ================= */}
      <div className="info-grid">
        {/* IMAGE */}
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
          onError={(e) =>
            (e.target.src =
              "https://images.unsplash.com/photo-1503387762-592deb58ef4e")
          }
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        />

        {/* TEXT */}
        <div>
          <h2 style={{ fontSize: "32px", margin: 0 }}>{product.heading}</h2>
          <div
            style={{
              width: "70px",
              height: "4px",
              background: "#e11d48",
              margin: "10px 0 20px",
            }}
          />

          {/* SHORT BULLETS */}
          {product.content.map((para, i) => (
            <div
              key={i}
              style={{
                marginBottom: "15px",
                padding: "14px",
                background: "#f8fafc",
                borderLeft: "4px solid #e11d48",
                borderRadius: "8px",
                transition: "0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateX(5px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateX(0)")
              }
            >
              {para}
            </div>
          ))}

          {/* READ MORE / READ LESS */}
          {product.longContent && (
            <div style={{ marginTop: "5px" }}>
              {expanded && (
                <div
                  style={{
                    marginBottom: "12px",
                    padding: "14px",
                    background: "#f0f9ff",
                    borderLeft: "4px solid #3b82f6",
                    borderRadius: "8px",
                    lineHeight: "1.7",
                    color: "#334155",
                    fontSize: "14px",
                  }}
                >
                  {product.longContent}
                </div>
              )}
              <button
                onClick={() => setExpanded((prev) => !prev)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#e11d48",
                  fontWeight: "600",
                  cursor: "pointer",
                  padding: "0",
                  fontSize: "14px",
                  textDecoration: "underline",
                }}
              >
                {expanded ? "Read Less ▲" : "Read More ▼"}
              </button>
            </div>
          )}

          {/* FEATURES */}
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {product.features.map((item, i) => (
              <span
                key={i}
                style={{
                  padding: "10px 14px",
                  background: "#eff6ff",
                  borderRadius: "20px",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#3b82f6";
                  e.target.style.color = "#fff";
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "#eff6ff";
                  e.target.style.color = "#000";
                  e.target.style.transform = "scale(1)";
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}



















