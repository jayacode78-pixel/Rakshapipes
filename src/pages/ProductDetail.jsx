
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedVariant, setSelectedVariant] = useState(null);

  const capitalizeFirst = (text) =>
    text ? text.charAt(0).toUpperCase() + text.slice(1) : "";

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `http://localhost:5000/api/products/${id}`
        );

        setProduct(res.data);
        setSelectedVariant(res.data?.variants?.[0] || null);
      } catch (err) {
        setError("⚠️ Failed to load product. Please refresh.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div style={{ padding: 30 }}>
        <div className="skeleton image" />
        <div className="skeleton text" />
        <div className="skeleton text small" />
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: 40, textAlign: "center", color: "red" }}>
        {error}
      </div>
    );
  }

  if (!product) return null;

  const variant = selectedVariant;

  const highlights = [
    { icon: "💧", title: "Ideal For Hard Water" },
    { icon: "🚿", title: "Drip Free Design" },
    { icon: "♻️", title: "Eco Friendly" },
    { icon: "✨", title: "Gloss Finish" },
  ];

  return (
    <div style={{ fontFamily: "Arial", background: "#f5f6f8" }}>

      {/* HERO */}
      <div
        style={{
          height: "40vh",
          backgroundImage: `url(${variant?.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
          padding: "20px",
          color: "#fff",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
          }}
        />
        <h2 style={{ position: "relative", zIndex: 2 }}>
          {product.modelNumber}
        </h2>
      </div>

      {/* MAIN GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          padding: "20px",
          alignItems: "stretch",
        }}
      >

        {/* LEFT IMAGE */}
        <div className="card image-card">
          <div className="image-wrapper">
            <img
              src={variant?.image}
              alt={product.modelNumber}
            />
          </div>
        </div>

        {/* RIGHT DETAILS */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            height: "100%",
          }}
        >

          <div className="card">
            <h2>{variant?.modelNumber || product.modelNumber}</h2>

            <p><strong>Series:</strong> {capitalizeFirst(product.parentSeries)}</p>
            <p><strong>Type:</strong> {capitalizeFirst(variant?.subType)}</p>

            <p>
              <strong>Color:</strong>{" "}
              {variant?.color?.map(c => capitalizeFirst(c)).join(", ") || "N/A"}
            </p>

            <p style={{ marginTop: "10px", color: "#555" }}>
              {product.description || "No description available"}
            </p>
          </div>

          {/* HIGHLIGHTS */}
          <div className="card">
            <h3>Product Highlights</h3>

            <div className="highlight-grid">
              {highlights.map((item, i) => (
                <div key={i} className="highlight-box">
                  <div className="icon">{item.icon}</div>
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FEATURES */}
          <div>
            <h3>Why choose this product?</h3>

            <div className="feature-grid">
              {[
                "High quality material",
                "Durable and long lasting",
                "Trusted brand",
                "Modern design",
              ].map((item, i) => (
                <div key={i} className="card feature">
                  ✔ {item}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* VARIANTS */}
      <div style={{ padding: "0 20px 20px" }}>
        <h3>Select Variant</h3>

        <div className="variant-grid">
          {product.variants?.map((v, i) => {
            const active = selectedVariant?.subType === v.subType;

            return (
              <div
                key={i}
                onClick={() => setSelectedVariant(v)}
                className={`variant-card ${active ? "active" : ""}`}
              >
                <img src={v.image} alt={v.subType} />

                <p>{capitalizeFirst(v.subType)}</p>

                <small>
                  {Array.isArray(v.color)
                    ? v.color.map(c => capitalizeFirst(c)).join(", ")
                    : capitalizeFirst(v.color)}
                </small>
              </div>
            );
          })}
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        .card {
          background: #fff;
          padding: 15px;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }

        .image-card {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-wrapper {
          width: 100%;
          height: 250px; /* 🔥 control height */
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-wrapper img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .highlight-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin-top: 10px;
        }

        .highlight-box {
          background: #f9fafb;
          padding: 12px;
          border-radius: 10px;
          text-align: center;
          font-size: 13px;
        }

        .highlight-box .icon {
          font-size: 22px;
        }

        .variant-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
          gap: 12px;
          margin-top: 10px;
        }

        .variant-card {
          border: 1px solid #ddd;
          border-radius: 10px;
          padding: 10px;
          cursor: pointer;
          text-align: center;
          background: #fff;
          transition: 0.2s;
        }

        .variant-card img {
          width: 100%;
          height: 80px;
          object-fit: contain;
        }

        .variant-card.active {
          border: 2px solid #007bff;
          background: #eaf3ff;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 10px;
          margin-top: 10px;
        }

        .feature {
          font-size: 14px;
        }

        .skeleton {
          background: #eee;
          border-radius: 8px;
          margin-bottom: 10px;
        }

        .skeleton.image {
          height: 250px;
        }

        .skeleton.text {
          height: 20px;
          width: 60%;
        }

        .skeleton.small {
          width: 40%;
        }

        @media(max-width: 768px){
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}



