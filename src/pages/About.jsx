
import { useState, useEffect, useRef } from "react";
import chairmanImg from "../assets/chairman.png";
import sanjayImg from "../assets/sanjay-shand.png";
import ajayImg from "../assets/ajay-shand.png";
import tusharImg from "../assets/tushar-shand.png";
import aboutImg from "../assets/AboutImage1.png";
import aboutImage2 from "../assets/AboutImage2.png"

// ─── DATA ────────────────────────────────────────────────────────────────────
const CHAIRMAN = {
  name: "Shri Shantilal Shand",
  role: "CHAIRMAN",
  img: chairmanImg,
  bio: `Shri Shantilal Shand is not only a mentor to the company's leadership team, but is also a philanthropist at heart. His passion for education led him to become a founding trustee for the Jain Group of Institutions and Jain Hospital. His helpful and social nature has earned him the endearing name of 'Papaji' in his close circle. An avid traveller, Shri Shantilal Shand is a firm believer in the Swachch Bharat movement and is invested in giving India a cleaner, greener tomorrow.`,
};

const leaders = [
  {
    name: "Sanjay Shand",
    role: "Managing Director",
    img: sanjayImg,
    bio: `Sanjay Shand has more than 22 years of HR leadership experience in Indian and multinational organizations including Navin Fluorine International Ltd, AstraZeneca, Citigroup and Siemens. Most recently, Jeyamalini headed HR and Occupational Health and Safety at Huhtamaki India. A certified coach, Jeyamalini has a PG Diploma in Business Administration from Loyola Institute of Business Administration, Chennai, and an Executive Certificate in HR Management from XLRI, Jamshedpur.`,
  },
  {
    name: "Ajay Shand",
    role: "Managing Director",
    img: ajayImg,
    bio: `With 25 years of experience in the Middle East and Africa, and in The Netherlands, Sudeep has held pivotal roles in financial strategy and operations, audit and compliance across various businesses at Philips. Most recently, he was CFO for Philips Healthcare India. He has an MBA from the University of Wollongong, UAE.`,
  },
  {
    name: "Tushar Shand",
    role: "Director",
    img: tusharImg,
    bio: `Tushar Shand has more than 24 years of experience in manufacturing, procurement, and supply chain. Anil has lead multiple business transformation, operational excellence and social projects at leading India and multinational organisations including Danone India, Kellogg, MARS, Pepsi and Honda. He holds a BTech in Mechanical Engineering from Delhi College of Engineering and has a Black Belt in Lean-Six Sigma.`,
  },
];

// ─── TIMELINE DATA ────────────────────────────────────────────────────────────
const timelineEvents = [
  {
    year: "1980",
    title: "Foundation",
    desc: "Raksha Pipes was established with a vision to deliver reliable piping solutions and build long-term trust in the market.",
    icon: "🏭",
  },
  {
    year: "1995",
    title: "Market Growth",
    desc: "Expanded distribution network across multiple states, strengthening presence in infrastructure and construction sectors.",
    icon: "📈",
  },
  {
    year: "2005",
    title: "Manufacturing Expansion",
    desc: "Set up advanced manufacturing units with improved production capacity and quality control systems.",
    icon: "🏗️",
  },
  {
    year: "2015",
    title: "Brand Recognition",
    desc: "Recognized as a trusted name in piping solutions with a strong dealer and distributor network.",
    icon: "🏆",
  },
  {
    year: "2020",
    title: "Modernization",
    desc: "Adopted modern technology, automation, and sustainable practices in manufacturing processes.",
    icon: "⚙️",
  },
  {
    year: "2026",
    title: "Future Vision",
    desc: "Continuing growth with innovation, expanding product range, and strengthening nationwide presence.",
    icon: "🚀",
  },
];

// ─── STAT COUNTER DATA ────────────────────────────────────────────────────────
const stats = [
  { end: 44, suffix: "+", label: "Years Experience", sub: "of trust & excellence" },
  { end: 6500, suffix: "+", label: "Distributor Network", sub: "partners pan India" },
  { end: 20, suffix: "+", label: "Export Countries", sub: "global footprint" },
  { end: 45, suffix: "+", label: "Product Range", sub: "across categories" },
];

// ─── DECORATIVE CIRCLES ───────────────────────────────────────────────────────
function DecorativeCircles() {
  return (
    <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none overflow-hidden" style={{ borderTopRightRadius: 16 }}>
      <div className="absolute" style={{ width: 220, height: 220, borderRadius: "50%", border: "42px solid #fee2e2", top: -75, right: -75 }} />
      <div className="absolute" style={{ width: 115, height: 115, borderRadius: "50%", background: "#fca5a5", top: -25, right: -25 }} />
    </div>
  );
}

// ─── HOOK: useInView ─────────────────────────────────────────────────────────
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.2, ...options });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
}

// ─── 1. BANNER SECTION ────────────────────────────────────────────────────────
function BannerSection() {
  const images = [
    aboutImg,
    aboutImage2,
  
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <style>{`
        .banner {
          width: 100%;
          height: 80vh;
          position: relative;
          overflow: hidden;
        }
        .slide {
          position: absolute;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }
        .slide.active {
          opacity: 1;
        }
        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.5);
        }
        .content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: white;
          z-index: 2;
        }
        .title {
          font-size: 50px;
          font-weight: 800;
        }
        .subtitle {
          margin-top: 10px;
          font-size: 18px;
          opacity: 0.8;
        }
        .dots {
          position: absolute;
          bottom: 20px;
          width: 100%;
          display: flex;
          justify-content: center;
          gap: 10px;
          z-index: 3;
        }
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255,255,255,0.4);
          cursor: pointer;
        }
        .dot.active {
          background: #fff;
        }
        @media(max-width:768px){
          .title { font-size: 28px; }
        }
      `}</style>

      <div className="banner">
        {images.map((img, i) => (
          <div
            key={i}
            className={`slide ${i === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="overlay" />
        <div className="content">
          <div className="title">Shand Group</div>
          <div className="subtitle">Building Tomorrow with Innovation & Trust</div>
        </div>
        <div className="dots">
          {images.map((_, i) => (
            <div
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </>
  );
}



// ─── ROAD TIMELINE ────────────────────────────────────────────────────────────
// Segment colors matching the reference image (teal → orange → yellow → red → dark-red → dark-brown)
const segmentColors = [

];


function RoadTimeline({ inView = true }){
  const width = 1300;
  const height = 320;

  const stops = [
    { x: 100, y: 220, top: false },
    { x: 300, y: 120, top: true },
    { x: 500, y: 220, top: false },
    { x: 700, y: 120, top: true },
    { x: 900, y: 220, top: false },
    { x: 1100, y: 120, top: true },
  ];

const path = `
  M 0,220
  C 50,220 70,120 100,120
  C 130,120 170,220 200,220
  C 250,220 270,120 300,120
  C 330,120 370,220 400,220
  C 450,220 470,120 500,120
  C 530,120 570,220 600,220
  C 650,220 670,120 700,120
  C 730,120 770,220 800,220
  C 850,220 870,120 900,120
  C 930,120 970,220 1000,220
  C 1050,220 1070,120 1100,120
  C 1150,120 1250,120 1300,120
`;

const segments = [
  `M 0,220 C 50,220 70,120 100,120 C 130,120 170,220 200,220`,
  `M 200,220 C 250,220 270,120 300,120 C 330,120 370,220 400,220`,
  `M 400,220 C 450,220 470,120 500,120 C 530,120 570,220 600,220`,
  `M 600,220 C 650,220 670,120 700,120 C 730,120 770,220 800,220`,
  `M 800,220 C 850,220 870,120 900,120 C 930,120 970,220 1000,220`,
  `M 1000,220 C 1050,220 1070,120 1100,120 C 1150,120 1250,120 1300,120`,
];
  const BOX_W = 180;
  const BOX_H = 120;
  const CONNECTOR = 50; // length of dashed connector line

  return (
    <div style={{ overflowX: "auto", padding: "30px 0" }}>
      {/* Increased viewBox height to 600 to give room for top + bottom labels */}
      <svg viewBox={`0 0 ${width} 600`} width="100%" style={{ minWidth: 1100 }}>

        {/* Shift the road + nodes down by 150 so top labels have room above */}
        <g transform="translate(0, 150)">

          {/* Base road */}
          <path d={path} stroke="#e5e7eb" strokeWidth={40} fill="none" strokeLinecap="round" />

          {/* Colored segments */}
          {segments.map((seg, i) => (
            <path
              key={i}
              d={seg}
              stroke="#e5e7eb"
              strokeWidth={40}
              fill="none"
              strokeLinecap="round"
              style={{
                strokeDasharray: 2000,
                strokeDashoffset: inView ? 0 : 2000,
                transition: `stroke-dashoffset 1s ease ${i * 0.2}s`,
              }}
            />
          ))}

          {/* Center dashed line */}
          <path d={path} stroke="white" strokeWidth={3} fill="none" strokeDasharray="12 14" opacity={0.6} />

          {/* Nodes */}
          {stops.map((stop, i) => {
            const event = timelineEvents[i];
            // top: label goes UP (negative Y), bottom: label goes DOWN (positive Y)
            const connectorEnd = stop.top
              ? stop.y - CONNECTOR
              : stop.y + CONNECTOR;
            const boxY = stop.top
              ? connectorEnd - BOX_H
              : connectorEnd;

            return (
              <g key={i}>
                {/* Dashed connector */}
                <line
                  x1={stop.x} y1={stop.y}
                  x2={stop.x} y2={connectorEnd}
                  stroke="#030303"
                  strokeDasharray="4 4"
                />

                {/* Dot at connector end */}
                <circle cx={stop.x} cy={connectorEnd} r={4} fill="#dc2626" />

                {/* Road node circle */}
                <circle
                  cx={stop.x} cy={stop.y} r={30}
                  fill="#fff"
                  stroke="#b91c1c"
                  strokeWidth={2}
                  style={{ filter: "drop-shadow(0px 6px 10px rgba(0,0,0,0.15))" }}
                />

                {/* Emoji icon */}
                <text x={stop.x} y={stop.y + 6} textAnchor="middle" fontSize={18}>
                  {event.icon}
                </text>

                {/* Label box */}
                <foreignObject
                  x={stop.x - BOX_W / 2}
                  y={boxY}
                  width={BOX_W}
                  height={BOX_H}
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      textAlign: "center",
                      fontFamily: "sans-serif",
                      background: "#ffffff",
                      borderRadius: "12px",
                      padding: "8px 10px",
                      boxShadow: "0 6px 14px rgba(0,0,0,0.1)",
                      border: "1px solid #e5e7eb",
                      height: "100%",
                      boxSizing: "border-box",
                    }}
                  >
                    <div style={{ fontSize: 12, color: "#dc2626", fontWeight: 700, marginBottom: 4 }}>
                      {event.year}
                    </div>
                    <div style={{ fontWeight: 700, fontSize: 13, color: "#111827", marginBottom: 4 }}>
                      {event.title}
                    </div>
                    <div style={{ fontSize: 11, color: "#4b5563", lineHeight: 1.4 }}>
                      {event.desc}
                    </div>
                  </div>
                </foreignObject>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}




// ─── 2. ABOUT — ROAD TIMELINE ─────────────────────────────────────────────────
function AboutSection1() {
  const [ref, inView] = useInView();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500&display=swap');

        .timeline-wrapper {
          position: relative;
          margin-bottom: 48px;
        }
        .timeline-header-card {
          background: #fff;
          border-radius: 20px;
          border: 1px solid #e5e7eb;
          box-shadow: 0 2px 12px rgba(0,0,0,0.07);
          padding: 56px 60px;
          margin-bottom: 48px;
          position: relative;
          overflow: hidden;
        }
        .road-timeline-card {
          background: #f9fafb;
          border-radius: 20px;
          border: 1px solid #e5e7eb;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          padding: 48px 32px 40px;
          position: relative;
          overflow: hidden;
        }
        @media (max-width: 700px) {
          .timeline-header-card { padding: 36px 24px; }
          .road-timeline-card { padding: 32px 12px 28px; }
        }
      `}</style>

      <div className="timeline-wrapper">
        {/* About Header */}
        <div className="timeline-header-card">
          <DecorativeCircles />
          <p style={{ fontSize: 12, color: "#dc2626", fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 12, fontFamily: "'DM Sans', sans-serif" }}>
            About Us
          </p>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: "#111827", marginBottom: 16, lineHeight: 1.3, fontFamily: "'Playfair Display', serif" }}>
            Our Journey Through Time
          </h2>
          <div style={{ width: 48, height: 4, background: "#dc2626", borderRadius: 2, marginBottom: 24 }} />
          <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.85, maxWidth: 760, fontFamily: "'DM Sans', sans-serif" }}>
            Shand Group is a diversified conglomerate with a legacy of trust, innovation, and excellence spanning decades. Rooted in strong values and a commitment to nation-building, the group operates across multiple verticals including education, healthcare, and infrastructure — touching millions of lives every year.
          </p>
          <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.85, maxWidth: 760, marginTop: 16, fontFamily: "'DM Sans', sans-serif" }}>
            Founded on the principles of integrity and service, Shand Group has grown from a regional enterprise into a nationally recognised name. Our journey is defined by a relentless pursuit of quality and a deep sense of responsibility towards society.
          </p>
        </div>

        {/* Road Timeline */}
        <div className="road-timeline-card" ref={ref}>
          <RoadTimeline inView={inView} />
        </div>
      </div>
    </>
  );
}

// ─── 3. VISION & MISSION ─────────────────────────────────────────────────────
function AboutSection2() {
  return (
    <>
      <style>{`
        .vision-mission-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 32px;
        }
        @media (max-width: 768px) {
          .vision-mission-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <div className="vision-mission-grid">
        {/* Vision */}
        <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e5e7eb", boxShadow: "0 2px 12px rgba(0,0,0,0.07)", padding: "40px 40px 44px", position: "relative", overflow: "hidden" }}>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: "#fee2e2", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="4" fill="#dc2626" />
              <circle cx="12" cy="12" r="9" stroke="#dc2626" strokeWidth="2" fill="none" />
              <line x1="12" y1="2" x2="12" y2="5" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
              <line x1="12" y1="19" x2="12" y2="22" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
              <line x1="2" y1="12" x2="5" y2="12" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
              <line x1="19" y1="12" x2="22" y2="12" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <p style={{ fontSize: 12, color: "#dc2626", fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 10 }}>Our Vision</p>
          <h3 style={{ fontSize: 22, fontWeight: 700, color: "#111827", marginBottom: 16 }}>Building a Better Tomorrow</h3>
          <p style={{ fontSize: 14.5, color: "#4b5563", lineHeight: 1.8 }}>
            To be a globally respected organisation that creates lasting value for communities, partners, and stakeholders — driven by innovation, sustainability, and a commitment to the greater good.
          </p>
        </div>

        {/* Mission */}
        <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e5e7eb", boxShadow: "0 2px 12px rgba(0,0,0,0.07)", padding: "40px 40px 44px", position: "relative", overflow: "hidden" }}>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: "#fee2e2", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#dc2626" />
            </svg>
          </div>
          <p style={{ fontSize: 12, color: "#dc2626", fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 10 }}>Our Mission</p>
          <h3 style={{ fontSize: 22, fontWeight: 700, color: "#111827", marginBottom: 16 }}>Empowering Every Stakeholder</h3>
          <p style={{ fontSize: 14.5, color: "#4b5563", lineHeight: 1.8 }}>
            To deliver excellence across every business vertical by nurturing talent, embracing technology, and fostering a culture of transparency, integrity, and continuous improvement.
          </p>
        </div>
      </div>
    </>
  );
}




// ─── 5. SCROLL COUNTING SECTION ───────────────────────────────────────────────


function useCounter(target, inView, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const step = target / (duration / 16);

    const timer = setInterval(() => {
      start += step;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return count;
}

// ─── STAT CARD ───────────────────────────────────────────────────────────────

function StatCard({ stat, inView, index }) {
  const count = useCounter(stat.end, inView, 1800 + index * 200);

  return (
    <div
      style={{
        textAlign: "center",
        opacity: inView ? 1 : 0,
        transition: `opacity 0.6s ease ${index * 0.1}s`,
      }}
    >
      <h3 style={{ fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 700 }}>
        {count.toLocaleString()}
        <span style={{ fontSize: "0.6em" }}>{stat.suffix}</span>
      </h3>

      <p style={{ fontSize: 14, marginTop: 6 }}>{stat.label}</p>
    </div>
  );
}

// ─── MAIN SECTION ─────────────────────────────────────────────────────────────

function ScrollCountingSection() {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <>
      <style>{`
        .stats-section {
          padding: 72px 48px;
          margin-bottom: 48px;
        }

        .stats-title {
          text-align: center;
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 800;
          margin-bottom: 40px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        @media (max-width: 900px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 520px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="stats-section" ref={ref}>
        
        {/* ✅ Simple Clean Heading */}
        <h2 className="stats-title">
          Our Achievements in Numbers
        </h2>

        <div className="stats-grid">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} inView={inView} index={i} />
          ))}
        </div>

      </section>
    </>
  );
}



// ─── LEADER MODAL POPUP ───────────────────────────────────────────────────────
function LeaderModal({ leader, leaderIndex, onClose, onPrev, onNext, total }) {
  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }
        @keyframes popIn {
          from { opacity: 0; transform: translate(-50%, -48%) scale(0.96); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        .leader-modal-content {
          display: flex;
          flex-direction: row;
          align-items: stretch;
        }
        .leader-modal-photo {
          flex-shrink: 0;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          background: #f9fafb;
          padding: 40px 24px 0 32px;
          width: 200px;
          min-height: 260px;
        }
        .leader-modal-text {
          padding: 40px 40px 32px 24px;
          flex: 1;
          min-height: 260px;
          overflow-y: auto;
        }
        @media (max-width: 600px) {
          .leader-modal-content { flex-direction: column; }
          .leader-modal-photo { width: 100%; min-height: unset; padding: 32px 24px 0; justify-content: center; align-items: flex-end; }
          .leader-modal-text { padding: 24px 24px 16px; min-height: unset; }
        }
      `}</style>
      <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 1000, animation: "fadeIn 0.2s ease" }} />
      <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 1001, background: "#fff", borderRadius: 16, boxShadow: "0 20px 60px rgba(0,0,0,0.22)", width: "90%", maxWidth: 720, height: 380, display: "flex", flexDirection: "column", overflow: "hidden", animation: "popIn 0.25s cubic-bezier(.4,0,.2,1)" }}>
        <DecorativeCircles />
        <button onClick={onClose} style={{ position: "absolute", top: 16, right: 20, background: "none", border: "none", fontSize: 22, color: "#9ca3af", cursor: "pointer", zIndex: 10, lineHeight: 1, padding: "4px 8px" }}>✕</button>
        <div className="leader-modal-content" style={{ flex: 1, overflow: "hidden" }}>
          <div className="leader-modal-photo">
            <img src={leader.img} alt={leader.name} style={{ width: 148, height: 176, objectFit: "cover", objectPosition: "center top", display: "block" }} />
          </div>
          <div className="leader-modal-text">
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111827", marginBottom: 4 }}>{leader.name}</h2>
            <p style={{ fontSize: 13, color: "#dc2626", fontWeight: 600, marginBottom: 16 }}>{leader.role}</p>
            <p style={{ fontSize: 13.5, color: "#4b5563", lineHeight: 1.75, marginBottom: 0 }}>{leader.bio}</p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", padding: "14px 32px 20px", borderTop: "1px solid #f3f4f6", gap: 12, flexShrink: 0 }}>
          <button onClick={onPrev} style={{ width: 40, height: 40, borderRadius: "50%", border: "1.5px solid #e5e7eb", background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, color: "#6b7280", transition: "all 0.18s" }} onMouseEnter={e => { e.currentTarget.style.borderColor = "#dc2626"; e.currentTarget.style.color = "#dc2626"; }} onMouseLeave={e => { e.currentTarget.style.borderColor = "#e5e7eb"; e.currentTarget.style.color = "#6b7280"; }}>‹</button>
          <button onClick={onNext} style={{ width: 40, height: 40, borderRadius: "50%", border: "1.5px solid #e5e7eb", background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, color: "#6b7280", transition: "all 0.18s" }} onMouseEnter={e => { e.currentTarget.style.borderColor = "#dc2626"; e.currentTarget.style.color = "#dc2626"; }} onMouseLeave={e => { e.currentTarget.style.borderColor = "#e5e7eb"; e.currentTarget.style.color = "#6b7280"; }}>›</button>
          <span style={{ fontSize: 12, color: "#9ca3af", marginLeft: 4 }}>{leaderIndex + 1} / {total}</span>
        </div>
      </div>
    </>
  );
}

// ─── LEADER CARD ──────────────────────────────────────────────────────────────
function LeaderCard({ leader, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={onClick} style={{ background: "#fff", borderRadius: 16, overflow: "hidden", border: "1px solid #e5e7eb", boxShadow: hovered ? "0 8px 32px rgba(0,0,0,0.13)" : "0 1px 4px rgba(0,0,0,0.06)", cursor: "pointer", transform: hovered ? "translateY(-4px)" : "translateY(0)", transition: "all 0.28s cubic-bezier(.4,0,.2,1)" }}>
      <div style={{ overflow: "hidden", background: "#f3f4f6" }}>
        <img src={leader.img} alt={leader.name} style={{ width: "100%", height: 220, objectFit: "cover", objectPosition: "center top", display: "block", filter: hovered ? "grayscale(0%)" : "grayscale(100%)", transition: "filter 0.45s ease" }} />
      </div>
      <div style={{ padding: "18px 20px 20px" }}>
        <h4 style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 4 }}>{leader.name}</h4>
        <p style={{ fontSize: 12, color: "#6b7280", marginBottom: 18, lineHeight: 1.4 }}>{leader.role}</p>
        <button onClick={(e) => { e.stopPropagation(); onClick(); }} style={{ background: "#dc2626", color: "#fff", fontSize: 12, fontWeight: 600, padding: "8px 18px", borderRadius: 8, border: "none", cursor: "pointer", transition: "background 0.18s", letterSpacing: 0.2 }} onMouseEnter={e => e.target.style.background = "#b91c1c"} onMouseLeave={e => e.target.style.background = "#dc2626"}>Know More</button>
      </div>
    </div>
  );
}

// ─── CHAIRMAN CARD ────────────────────────────────────────────────────────────
function ChairmanCard() {
  const [chairmanHovered, setChairmanHovered] = useState(false);
  return (
    <>
      <style>{`
        .chairman-card {
          position: relative;
          background: #fff;
          border-radius: 16px;
          border: 1px solid #e5e7eb;
          overflow: hidden;
          display: flex;
          flex-direction: row;
          margin-bottom: 48px;
          transition: all 0.28s cubic-bezier(.4,0,.2,1);
        }
        .chairman-card-photo {
          flex-shrink: 0;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          background: #f9fafb;
          padding: 40px 32px 0 48px;
          min-width: 280px;
        }
        .chairman-card-text {
          padding: 52px 56px 52px 40px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        @media (max-width: 768px) {
          .chairman-card { flex-direction: column; }
          .chairman-card-photo { min-width: unset; width: 100%; padding: 32px 24px 0; justify-content: center; }
          .chairman-card-text { padding: 28px 24px 32px; }
        }
      `}</style>
      <div className="chairman-card" onMouseEnter={() => setChairmanHovered(true)} onMouseLeave={() => setChairmanHovered(false)} style={{ boxShadow: chairmanHovered ? "0 12px 40px rgba(0,0,0,0.13)" : "0 2px 12px rgba(0,0,0,0.07)", transform: chairmanHovered ? "translateY(-3px)" : "translateY(0)" }}>
        <DecorativeCircles />
        <div className="chairman-card-photo">
          <img src={CHAIRMAN.img} alt={CHAIRMAN.name} style={{ width: 220, height: 280, objectFit: "cover", objectPosition: "center top", display: "block", filter: chairmanHovered ? "grayscale(0%)" : "grayscale(100%)", transition: "filter 0.45s ease" }} />
        </div>
        <div className="chairman-card-text">
          <h2 style={{ fontSize: 30, fontWeight: 800, color: "#111827", marginBottom: 8 }}>{CHAIRMAN.name}</h2>
          <p style={{ fontSize: 14, color: "#dc2626", fontWeight: 600, marginBottom: 24 }}>{CHAIRMAN.role}</p>
          <p style={{ fontSize: 14.5, color: "#4b5563", lineHeight: 1.85, maxWidth: 680 }}>{CHAIRMAN.bio}</p>
        </div>
      </div>
    </>
  );
}

// ─── SECTION 5 — CORE VALUES ──────────────────────────────────────────────────
function AboutSection5() {
  const values = [
    { icon: "🤝", title: "Integrity", desc: "We uphold the highest standards of honesty and ethical conduct in every decision we make." },
    { icon: "💡", title: "Innovation", desc: "We constantly seek new and better ways to serve our customers, communities, and partners." },
    { icon: "🌱", title: "Sustainability", desc: "We are committed to responsible growth that preserves resources and respects the environment." },
    { icon: "❤️", title: "Compassion", desc: "We believe in giving back — to our people, communities, and the nation we proudly serve." },
  ];
  return (
    <>
      <style>{`
        .values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 32px;
        }
        @media (max-width: 900px) {
          .values-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .values-grid { grid-template-columns: 1fr; }
        }
      `}</style>
      <div style={{ marginBottom: 32 }}>
        <p style={{ fontSize: 12, color: "#dc2626", fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 12 }}>What We Stand For</p>
        <h2 style={{ fontSize: 32, fontWeight: 800, color: "#111827", marginBottom: 8, lineHeight: 1.3 }}>Our Core Values</h2>
        <div style={{ width: 48, height: 4, background: "#dc2626", borderRadius: 2 }} />
        <div className="values-grid">
          {values.map((v) => (
            <div key={v.title} style={{ background: "#fff", borderRadius: 16, border: "1px solid #e5e7eb", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", padding: "32px 28px 36px" }}>
              <div style={{ fontSize: 32, marginBottom: 16 }}>{v.icon}</div>
              <h4 style={{ fontSize: 16, fontWeight: 700, color: "#111827", marginBottom: 10 }}>{v.title}</h4>
              <p style={{ fontSize: 13.5, color: "#6b7280", lineHeight: 1.75 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// ─── MAIN EXPORT ──────────────────────────────────────────────────────────────
export default function LeadershipSection() {
  const [modalIndex, setModalIndex] = useState(null);
  const COLS = 3;

  const handlePrev = () => setModalIndex((prev) => (prev - 1 + leaders.length) % leaders.length);
  const handleNext = () => setModalIndex((prev) => (prev + 1) % leaders.length);

  const rows = [];
  for (let i = 0; i < leaders.length; i += COLS) {
    rows.push(leaders.slice(i, i + COLS));
  }

  return (
    <>
      <style>{`
        .leaders-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 20px;
        }
        @media (max-width: 900px) {
          .leaders-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .leaders-grid { grid-template-columns: 1fr; }
        }
      `}</style>
      <div style={{ background: "#ffffff", minHeight: "100vh", fontFamily: "'Segoe UI', sans-serif" }}>

        {/* HERO / BANNER */}
        <BannerSection />

        {/* PAGE CONTENT */}
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px 80px" }}>

          {/* 2. ABOUT — ROAD TIMELINE */}
          <AboutSection1 />

          {/* 3. VISION & MISSION */}
          <AboutSection2 />

          {/* 4. LEADERSHIP */}
          <div style={{ marginBottom: 32 }}>
            <p style={{ fontSize: 12, color: "#dc2626", fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 12 }}>Our Leadership</p>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: "#111827", marginBottom: 8, lineHeight: 1.3 }}>Meet the Team</h2>
            <div style={{ width: 48, height: 4, background: "#dc2626", borderRadius: 2, marginBottom: 40 }} />
            <ChairmanCard />
            {rows.map((row, rowIdx) => (
              <div key={rowIdx}>
                <div className="leaders-grid">
                  {row.map((leader, colIdx) => {
                    const globalIdx = rowIdx * COLS + colIdx;
                    return <LeaderCard key={leader.name} leader={leader} onClick={() => setModalIndex(globalIdx)} />;
                  })}
                  {row.length < COLS && Array.from({ length: COLS - row.length }).map((_, i) => <div key={`empty-${i}`} />)}
                </div>
              </div>
            ))}
          </div>

          {/* 5. SCROLL COUNTING */}
          <ScrollCountingSection />

          {/* CORE VALUES */}
          <AboutSection5 />

        </div>

        {modalIndex !== null && (
          <LeaderModal
            leader={leaders[modalIndex]}
            leaderIndex={modalIndex}
            total={leaders.length}
            onClose={() => setModalIndex(null)}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}
      </div>
    </>
  );
}