import { useState } from "react";

import bathroomAccessories from "../assets/images/bathroomAccessories.jpg";
import ptmt from "../assets/images/ptmt.jpg";
import sink from "../assets/images/SinksImage.jpg";
import tank from "../assets/images/water-tank.jpg";
import Pipes_and_Fittings from "../assets/images/Pipes_and_Fittings.jpg";
import frpManholeCover from "../assets/images/frp_manhole_cover.jpg";
import bress_ball_value from "../assets/images/brass_ball_valve.jpg";
import health_faucets from "../assets/images/health_faucets.jpg";



const products = [
  { name: "PTMT", image: ptmt, href: "/products/ptmt" },
  { name: "Pipes & Fittings", image: Pipes_and_Fittings, href: "/products/pipes-and-fittings" },
  { name: "Kitchen Sinks", image: sink, href: "/products/kitchen-sinks" },
  { name: "Water Tank", image: tank, href: "/products/water-tank" },
  { name: "Bathroom Accessories", image: bathroomAccessories, href: "/products/bathroom-accessories" },
  { name: "FRP Manhole Cover", image: frpManholeCover, href: "/products/frp-manhole-cover" },
  { name: "Health Faucets", image: health_faucets, href: "/products/health-faucets" },
  { name: "Brass Ball Valve", image: bress_ball_value, href: "/products/brass-ball-valve" },
];

// ──────────────────────────────────────────────
// Single product card
// ──────────────────────────────────────────────
function ProductCard({ name, image, href }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      className="product-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        display: "block",
        overflow: "hidden",
        borderRadius: "6px",
        cursor: "pointer",
        textDecoration: "none",
        aspectRatio: "4 / 3",
      }}
    >
      {/* Product image */}
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transition: "transform 0.5s ease",
          transform: hovered ? "scale(1.08)" : "scale(1)",
        }}
      />

      {/* Dark gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)",
          display: "flex",
          alignItems: "flex-end",
          padding: "14px 16px",
        }}
      >
        <span
          style={{
            color: "#ffffff",
            fontSize: "13px",
            fontWeight: 500,
            letterSpacing: "0.2px",
          }}
        >
          {name}
        </span>
      </div>
    </a>
  );
}

// ──────────────────────────────────────────────
// Main Section
// ──────────────────────────────────────────────
export default function Section1() {
  return (
    <section
      style={{
        background: "#f3f3f3",
        padding: "60px 0",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        
        {/* Heading */}
        <h2
          style={{
            fontSize: "28px",
            fontWeight: 600,
            color: "#111111",
            marginBottom: "28px",
            letterSpacing: "-0.3px",
          }}
        >
          Explore Our Products
        </h2>

        {/* 3-column responsive grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
          }}
        >
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              image={product.image}
              href={product.href}
            />
          ))}
        </div>
      </div>

      {/* Responsive styles injected once */}
      <style>{`
        @media (max-width: 900px) {
          /* 2 columns on tablets */
          .product-card {
            /* grid handles this via parent — see below */
          }
        }
        @media (max-width: 900px) {
          section > div > div[style*="grid-template-columns"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          section > div > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>

    
  );
}