import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/raksha-logo.png";

const NAV_LINKS = [
  {
    label: "Products",
    dropdown: [
      {
        category: "Agriculture",
        items: [
          { name: "Column/Riser Pipe", desc: "CPVC- Hot & Cold Water Plumbing System", href: "/catalog/agriculture/column-riser-pipe", },
          { name: "HDPE Pipes", desc: "Cross-linked PE - Hot & Cold Water Plumbing", href: "/catalog/agriculture/hdpe-pipe" },
          { name: "Casing Pipe", desc: "PEX-AL-PEX 3 Layer Composite Piping System", href: "/catalog/agriculture/casing-pipe" },
          { name: "Pressure Pipe", desc: "Lead-Free uPVC Piping for Potable water", href: "/catalog/agriculture/pressure-pipe" },
          { name: "Suction Pipe", desc: "Lead-Free uPVC Piping for Reclaimed water", href: "/catalog/agriculture/suction-pipe" },
        ],
      },
      {
        category: "Plumbing",
        items: [
          { name: "CPVC", desc: "High-Density Low Noise PP Drainage System", href: "/catalog/plumbing/cpvc" },
          { name: "UPVC", desc: "Advanced PP SWR System With 3 Layer Technology", href: "/catalog/plumbing/upvc" },
          { name: "SWR", desc: "Superior PVC SWR Drainage System", badge: "New update", href: "/catalog/plumbing/swr" },
          { name: "UnderGround", desc: "Polypropylene Surface Drainage Channels", href: "/catalog/plumbing/underground" },
          { name: "Ball Valves", desc: "PE/PP Manhole & Inspection Chamber", href: "/catalog/plumbing/ball-valves" },
        ],
      },
      {
        category: "Industrial",
        items: [
          { name: "Braided Pipes", desc: "Lead-Free uPVC Pressure Piping for Agriculture", href: "/catalog/industrial/braided-pipes" },
          { name: "Duct", desc: "Lead-Free Column Pipes For Submersible Pump", href: "/catalog/industrial/duct" },
          { name: "Steel Wire Reinforced", desc: "uPVC Casing Pipes For Borewells", href: "/catalog/industrial/steel-wire-reinforced" },
        ],
      },
      {
        category: "PTMT Bath Fittings and Accessories",
        items: [
          { name: "PTMT Taps and Fittings", desc: "4 Layer Water Tank with Anti-Viral Copper Shield", href: "/catalog/bath/ptmt-taps-and-fittings" },
          { name: "Flushing Cistern", desc: "3 Layer Water Tank with Anti-Viral Copper Shield", href: "/catalog/bath/flushing-cistern" },
          { name: "Shower", desc: "2 Layer Roto Moulded Water Tank", href: "/catalog/bath/shower" },
          { name: "Bathroom Accessories", desc: "Blow Moulded Water Tank", href: "/catalog/bath/bathroom-accessories" },
          { name: "Stainless Steel Sinks", desc: "Water Tank with Anti-Microbial", href: "/catalog/bath/stainless-steel-sinks" },
          
        ],
      },
      {
        category: "Water Tank",
        items: [
          { name: "Chem Pro", desc: "CPVC Industrial Piping System", href: "/catalog/watertank/chem-pro" },
        ],
      },
      {
        category: "Cleaning Solutions New",
        items: [],
      },
      
     
    ],
    megaMenu: true,
  },
 {
  label: "About Us",
  href: "/about",
},


  
{
  label: "Blog",
  href: "/blog",
},

  
  {
    label: "Become Partner",
    dropdown: [
      {
        items: [
          { name: "Become Dealer", href: "/become-dealer" },
          { name: "Become Distributor", href: "/become-distributor" },
      
        ],
      },
    ],
  },
  {
    label: "Careers",
    href: "#",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];


function RakshaLogo({ scrolled }) {
  return (
    <Link to="/"style={{ display: "flex", alignItems: "center" }}>
      
      <img
        src={logo}
        alt="Raksha Pipes Logo"
        style={{
          height: "45px",
          width: "auto",
          objectFit: "contain",
          transition: "0.3s ease",
        }}
      />

    </Link>
  );
}



function SearchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function ChevronDown({ size = 12 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function ChevronRight({ size = 12 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

// Simple dropdown (News & Media, Become Partner)
function SimpleDropdown({ groups }) {
  return (
    <div style={{
      position: "absolute",
      top: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      background: "#fff",
      minWidth: "220px",
      boxShadow: "0 8px 32px rgba(0,0,0,0.13)",
      borderTop: "3px solid #f5a623",
      zIndex: 1000,
      borderRadius: "0 0 4px 4px",
      padding: "8px 0",
    }}>
      {groups[0].items.map((item) => (
        <Link key={item.name} to={item.href} style={{
          display: "block",
          padding: "10px 22px",
          color: "#333",
          fontSize: "14px",
          textDecoration: "none",
          transition: "background 0.15s, color 0.15s",
          whiteSpace: "nowrap",
        }}
          onMouseEnter={e => { e.currentTarget.style.background = "#f5a62315"; e.currentTarget.style.color = "#0f6ea9"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#333"; }}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}

// Mega menu for Products
function MegaMenu({ groups }) {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div style={{
      position: "fixed",
      top: "64px",
      left: 0,
      width: "100vw",
      background: "#fff",
      boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
      borderTop: "3px solid #f5a623",
      zIndex: 1000,
      display: "flex",
      minHeight: "400px",
    }}>
      {/* Left: Category list */}
      <div style={{
        width: "260px",
        flexShrink: 0,
        background: "#fafaf7",
        borderRight: "1px solid #e8e8e8",
        padding: "8px 0",
        overflowY: "auto",
        maxHeight: "540px",
      }}>
        {groups.map((group, idx) => (
          <div
            key={group.category}
            onMouseEnter={() => setActiveCategory(idx)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 20px",
              cursor: "pointer",
              background: activeCategory === idx ? "#fff" : "transparent",
              borderLeft: activeCategory === idx ? "3px solid #f5a623" : "3px solid transparent",
              color: activeCategory === idx ? "#0f6ea9" : "#444",
              fontSize: "13px",
              fontWeight: activeCategory === idx ? 600 : 400,
              transition: "all 0.15s",
            }}
          >
            <span>{group.category}</span>
            <ChevronRight size={11} />
          </div>
        ))}
      </div>

      {/* Right: Items grid */}
      <div style={{
        flex: 1,
        padding: "24px 32px",
        overflowY: "auto",
        maxHeight: "540px",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
          gap: "4px 16px",
        }}>
          {groups[activeCategory]?.items.map((item) => (
           <Link key={item.name} to={item.href} style={{
              display: "block",
              padding: "10px 12px",
              borderRadius: "6px",
              textDecoration: "none",
              transition: "background 0.15s",
            }}
              onMouseEnter={e => e.currentTarget.style.background = "#f0f6fc"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "#1a1a1a", fontSize: "13.5px", fontWeight: 600 }}>{item.name}</span>
                {item.badge && (
                  <span style={{
                    background: "#e8f5e9",
                    color: "#388e3c",
                    fontSize: "9px",
                    padding: "2px 6px",
                    borderRadius: "20px",
                    fontWeight: 600,
                    letterSpacing: "0.3px",
                    whiteSpace: "nowrap",
                  }}>{item.badge}</span>
                )}
              </div>
              <p style={{ margin: "2px 0 0", color: "#777", fontSize: "11.5px", lineHeight: 1.4 }}>{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// Search overlay
function SearchOverlay({ onClose }) {
  const inputRef = useRef(null);
  useEffect(() => { inputRef.current?.focus(); }, []);
  return (
    <div style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.55)",
      zIndex: 2000,
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      paddingTop: "80px",
    }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "8px",
          padding: "24px 32px",
          width: "min(600px, 90vw)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
        }}
        onClick={e => e.stopPropagation()}
      >
        <p style={{ margin: "0 0 12px", color: "#888", fontSize: "13px", fontWeight: 500 }}>Search Products</p>
        <div style={{ display: "flex", gap: "10px", alignItems: "center", borderBottom: "2px solid #0f6ea9", paddingBottom: "8px" }}>
          <SearchIcon />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type to search..."
            style={{
              border: "none",
              outline: "none",
              fontSize: "18px",
              flex: 1,
              color: "#1a1a1a",
              background: "transparent",
            }}
          />
          <button onClick={onClose} style={{ border: "none", background: "none", cursor: "pointer", color: "#888", fontSize: "22px", lineHeight: 1 }}>×</button>
        </div>
        <p style={{ margin: "12px 0 0", color: "#aaa", fontSize: "12px" }}>Press Enter to search or Esc to close</p>
      </div>
    </div>
  );
}

// Mobile Hamburger menu
function HamburgerIcon({ open }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px", cursor: "pointer", width: "24px" }}>
      {[0, 1, 2].map(i => (
        <span key={i} style={{
          display: "block",
          height: "2px",
          background: "#fff",
          borderRadius: "2px",
          width: i === 1 && open ? "16px" : "24px",
          transition: "width 0.2s",
          transform: open && i === 0 ? "translateY(7px) rotate(45deg)" : open && i === 2 ? "translateY(-7px) rotate(-45deg)" : "none",
          opacity: open && i === 1 ? 0 : 1,
        }} />
      ))}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const navRef = useRef(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") { setSearchOpen(false); setActiveMenu(null); } };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleMouseEnter = (label) => {
    clearTimeout(closeTimer.current);
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
  };

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          background: scrolled ? "#f05c51" : "transparent",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.25)" : "none",
          transition: "background 0.35s ease, box-shadow 0.35s ease",
          fontFamily: "'Segoe UI', Arial, sans-serif",
        }}
      >
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          height: "64px",
        }}>
          {/* Logo */}
          <RakshaLogo />

          {/* Desktop Nav */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }} className="desktop-nav">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                style={{ position: "relative" }}
                onMouseEnter={() => link.dropdown && handleMouseEnter(link.label)}
                onMouseLeave={link.dropdown ? handleMouseLeave : undefined}
              >
               <Link
  to={link.href || "#"}
  style={{
    display: "flex",
    alignItems: "center",
    gap: "5px",
    color: scrolled ? "#000000" : "#ffffff",
    fontSize: "13.5px",
    fontWeight: 500,
    textDecoration: "none",
    padding: "8px 12px",
    borderRadius: "4px",
    transition: "background 0.15s",
    background: activeMenu === link.label ? "rgba(255,255,255,0.15)" : "transparent",
    letterSpacing: "0.2px",
    whiteSpace: "nowrap",
  }}
>
  {link.label}
  {link.dropdown && (
    <span style={{ opacity: 0.8, marginTop: "1px" }}>
      <ChevronDown />
    </span>
  )}
</Link>

                {/* Dropdown */}
                {link.dropdown && activeMenu === link.label && (
                  <div
                    onMouseEnter={() => clearTimeout(closeTimer.current)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {link.megaMenu
                      ? <MegaMenu groups={link.dropdown} />
                      : <SimpleDropdown groups={link.dropdown} />
                    }
                  </div>
                )}
              </div>
            ))}

            {/* Search */}
            <button
              onClick={() => setSearchOpen(true)}
              style={{
                background: "none",
                border: "none",
                color: scrolled ? "#0a0a0a" : "#ffffff",
                cursor: "pointer",
                padding: "8px 10px",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                transition: "background 0.15s",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              <SearchIcon />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(v => !v)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", display: "none" }}
            className="mobile-hamburger"
          >
            <HamburgerIcon open={mobileOpen} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div style={{
            background: "#0a5a8a",
            maxHeight: "80vh",
            overflowY: "auto",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}>
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 24px",
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: 500,
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                    cursor: "pointer",
                  }}
                  onClick={() => link.dropdown
                    ? setMobileExpanded(mobileExpanded === link.label ? null : link.label)
                    : setMobileOpen(false)
                  }
                >
                  <span>{link.label}</span>
                  {link.dropdown && <ChevronDown size={13} />}
                </div>
                {link.dropdown && mobileExpanded === link.label && (
                  <div style={{ background: "rgba(0,0,0,0.2)", padding: "8px 0" }}>
                    {link.dropdown.flatMap(g => g.items || []).map(item => (
                      <Link key={item.name} to={item.href} style={{
                        display: "block",
                        padding: "10px 36px",
                        color: "rgba(255,255,255,0.85)",
                        fontSize: "13px",
                        textDecoration: "none",
                        borderBottom: "1px solid rgba(255,255,255,0.04)",
                      }}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>

      {/* Search overlay */}
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}

      {/* Spacer */}
     

     
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
