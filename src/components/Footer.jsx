import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{
      background: "#0f172a",
      color: "#fff",
      padding: "50px 20px 20px"
    }}>

      <div style={{
        maxWidth: "1200px",
        margin: "auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "30px"
      }}>

        {/* BRAND */}
        <div>
          <h2 style={{ marginBottom: 10 }}>Raksha Pipes</h2>
          <p style={{ color: "#cbd5e1", fontSize: 14 }}>
            Premium quality piping solutions for modern infrastructure.
            Durable, reliable and trusted across India.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4>Quick Links</h4>
          <ul style={listStyle}>
            <li><Link to="/" style={linkStyle}>Home</Link></li>
            <li><Link to="/about" style={linkStyle}>About Us</Link></li>
            <li><Link to="/products" style={linkStyle}>Products</Link></li>
            <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
          </ul>
        </div>

        {/* PRODUCTS */}
        <div>
          <h4>Our Products</h4>
          <ul style={listStyle}>
            <li><Link to="#" style={linkStyle}>PTMT</Link></li>
            <li><Link to="#" style={linkStyle}>Pipes & Fittings</Link></li>
            <li><Link to="#" style={linkStyle}>Water Tanks</Link></li>
            <li><Link to="#" style={linkStyle}>Bathroom Accessories</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4>Contact</h4>
          <p style={textStyle}>📍 Bangalore, India</p>
          <p style={textStyle}>📞 +91 0000000000</p>
          <p style={textStyle}>✉ example.com</p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div style={{
        marginTop: 40,
        borderTop: "1px solid #334155",
        paddingTop: 15,
        textAlign: "center",
        fontSize: 13,
        color: "#94a3b8"
      }}>
        © 2026 Raksha Pipes. All Rights Reserved.
      </div>
    </footer>
  );
}

/* STYLES */
const listStyle = {
  listStyle: "none",
  padding: 0,
  marginTop: 10
};

const linkStyle = {
  textDecoration: "none",
  color: "#cbd5e1",
  fontSize: 14,
  display: "block",
  marginBottom: 8
};

const textStyle = {
  fontSize: 14,
  color: "#cbd5e1",
  margin: "6px 0"
};