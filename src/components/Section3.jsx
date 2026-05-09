const branches = [
  { name: "Brand 1", img: "https://via.placeholder.com/150x70?text=Raksha+1" },
  { name: "Brand 2", img: "https://via.placeholder.com/150x70?text=Raksha+2" },
  { name: "Brand 3", img: "https://via.placeholder.com/150x70?text=Raksha+3" },
  { name: "Brand 4", img: "https://via.placeholder.com/150x70?text=Raksha+4" },
  { name: "Brand 5", img: "https://via.placeholder.com/150x70?text=Diamond+1" },
  { name: "Brand 6", img: "https://via.placeholder.com/150x70?text=Raksha+5" },

  { name: "Brand 7", img: "https://via.placeholder.com/150x70?text=Diamond+2" },
  { name: "Brand 8", img: "https://via.placeholder.com/150x70?text=Diamond+3" },
  { name: "Brand 9", img: "https://via.placeholder.com/150x70?text=Diamond+4" },
  { name: "Brand 10", img: "https://via.placeholder.com/150x70?text=Diamond+5" },
  { name: "Brand 11", img: "https://via.placeholder.com/150x70?text=Raksha+6" },
  { name: "Brand 12", img: "https://via.placeholder.com/150x70?text=Raksha+7" },
];

export default function Section3() {
  return (
    <section style={{ background: "#ffffff", padding: "30px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "auto", padding: "0 24px" }}>
        
        {/* HEADING */}
        <h2
          style={{
            fontSize: "30px",
            fontWeight: "600",
            marginBottom: "30px",
            color: "#0c0c0c",
            textAlign: "center",
          }}
        >
          Our Brands
        </h2>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "16px",
          }}
        >
          {branches.map((b, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                border: "3px solid #0c0c0c", // red border like your design
                borderRadius: "6px",
                padding: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "80px",
                transition: "0.3s",
                cursor: "pointer",
              }}
            >
              <img
                src={b.img}
                alt={b.name}
                style={{
                  maxWidth: "100%",
                  maxHeight: "60px",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* RESPONSIVE */}
      <style>{`
        div[style*="cursor: pointer"]:hover {
          transform: scale(1.05);
        }

        @media (max-width: 900px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }

        @media (max-width: 560px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}