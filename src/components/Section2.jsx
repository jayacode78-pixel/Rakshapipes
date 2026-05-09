import whyImage from "../assets/images/Pipes_and_Fittings.jpg";

import {
  FaCheckCircle,
  FaBoxOpen,
  FaRupeeSign,
  FaStar,
  FaTruck,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    title: "High Quality Products",
    desc: "Manufactured using premium raw materials ensuring durability, strength, and long-lasting performance in every environment.",
    icon: <FaCheckCircle />,
  },
  {
    title: "Wide Product Range",
    desc: "Complete plumbing solutions including PTMT fittings, pipes, tanks, and accessories – all under one trusted brand.",
    icon: <FaBoxOpen />,
  },
  {
    title: "Affordable Pricing",
    desc: "We balance quality and pricing to deliver the best value products that fit every budget.",
    icon: <FaRupeeSign />,
  },
  {
    title: "Trusted Brand",
    desc: "Raksha Pipes is trusted by thousands of customers for consistent quality and reliable performance.",
    icon: <FaStar />,
  },
  {
    title: "Fast Delivery",
    desc: "Efficient supply chain ensures quick and safe delivery across multiple regions.",
    icon: <FaTruck />,
  },
  {
    title: "Customer Support",
    desc: "Our dedicated support team is always ready to help you with product queries and assistance.",
    icon: <FaHeadset />,
  },
];

function FeatureItem({ title, desc, icon }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "14px",
        marginBottom: "16px",
        padding: "12px",
        borderRadius: "10px",
        transition: "0.3s",
      }}
    >
      {/* ICON */}
      <div
        style={{
          width: "42px",
          height: "42px",
          borderRadius: "50%",
          background: "#dc2626",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: "18px",
          flexShrink: 0,
        }}
      >
        {icon}
      </div>

      {/* TEXT */}
      <div>
        <h4
          style={{
            fontSize: "16px",
            marginBottom: "4px",
            fontWeight: "600",
          }}
        >
          {title}
        </h4>
        <p
          style={{
            fontSize: "13px",
            color: "#6b7280",
            lineHeight: "1.5",
          }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function Section2() {
  return (
    <section style={{ background: "#f9fafb", padding: "70px 0" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "50px",
          alignItems: "center",
        }}
      >
        {/* LEFT IMAGE */}
        <div
          style={{
            height: "100%",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          }}
        >
          <img
            src={whyImage}
            alt="Raksha Pipes"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "700",
              marginBottom: "16px",
              color: "#111827",
            }}
          >
            Why Choose Raksha Pipes
          </h2>

          <p
            style={{
              fontSize: "14px",
              color: "#6b7280",
              marginBottom: "24px",
              lineHeight: "1.6",
            }}
          >
            At Raksha Pipes, we focus on delivering reliable and high-performance
            plumbing solutions designed to meet modern needs. Our commitment to
            quality, affordability, and customer satisfaction makes us a trusted
            choice in the industry.
          </p>

          {features.map((item, i) => (
            <FeatureItem key={i} {...item} />
          ))}
        </div>
      </div>

      {/* RESPONSIVE */}
      <style>{`
        @media (max-width: 900px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}