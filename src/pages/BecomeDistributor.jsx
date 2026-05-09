import { useState, useEffect } from "react";
import {
  FaUserTie,
  FaStore,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaBoxes,
  FaGlobeAsia,
  FaWarehouse,
  FaChartLine,
} from "react-icons/fa";

export default function BecomeDistributor() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const errorStyle = {
    color: "#ffb3b3",
    fontSize: "12px",
    marginTop: "6px",
    marginLeft: "5px",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "fullName" && !/^[a-zA-Z\s]*$/.test(value))
      return;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors((prev) => {
      let newErrors = { ...prev };

      if (name === "fullName") {
        if (!value.trim())
          newErrors.fullName = "Name is required";
        else if (value.length < 3)
          newErrors.fullName = "Minimum 3 characters";
        else delete newErrors.fullName;
      }

      if (name === "email") {
        const emailRegex =
          /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

        if (!value)
          newErrors.email = "Email is required";
        else if (!emailRegex.test(value))
          newErrors.email = "Invalid email";
        else delete newErrors.email;
      }

      if (name === "phone") {
        if (!value)
          newErrors.phone = "Phone required";
        else if (value.length !== 10)
          newErrors.phone = "Must be 10 digits";
        else delete newErrors.phone;
      }

      if (name === "city") {
        if (!value.trim())
          newErrors.city = "City required";
        else delete newErrors.city;
      }

      if (name === "state") {
        if (!value.trim())
          newErrors.state = "State required";
        else delete newErrors.state;
      }

      if (name === "message") {
        if (!value.trim())
          newErrors.message = "Message required";
        else if (value.length < 10)
          newErrors.message = "Minimum 10 characters";
        else delete newErrors.message;
      }

      return newErrors;
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.fullName.trim())
      newErrors.fullName = "Name is required";

    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    if (!formData.email)
      newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Invalid email";

    if (!formData.phone || formData.phone.length !== 10)
      newErrors.phone = "Phone must be 10 digits";

    if (!formData.city.trim())
      newErrors.city = "City required";

    if (!formData.state.trim())
      newErrors.state = "State required";

    if (!formData.message || formData.message.length < 10)
      newErrors.message =
        "Message must be minimum 10 characters";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ✅ CORRECT HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    const isValid = validateForm();

    if (!isValid) return;

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/distributor",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        setShowPopup(true);

        setFormData({
          fullName: "",
          companyName: "",
          phone: "",
          email: "",
          city: "",
          state: "",
          message: "",
        });
      } else {
        alert("Failed to send application");
      }

      setLoading(false);
    } catch (err) {
      console.log(err);

      alert("Server Error");

      setLoading(false);
    }
  };

  const benefits = [
    {
      icon: <FaWarehouse />,
      title: "Strong Supply Chain",
      desc:
        "Reliable nationwide product availability and fast dispatch support.",
    },
    {
      icon: <FaGlobeAsia />,
      title: "Pan India Network",
      desc:
        "Expand your market reach with Raksha Pipes distribution support.",
    },
    {
      icon: <FaChartLine />,
      title: "Business Growth",
      desc:
        "Increase revenue with high-demand plumbing and piping solutions.",
    },
    {
      icon: <FaBoxes />,
      title: "Premium Products",
      desc:
        "Wide range of trusted pipes and fittings for multiple industries.",
    },
  ];

  const scrollToForm = () => {
    const formSection =
      document.getElementById("distributor-form");

    formSection?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div
      id="distributor-form"
      style={{
        fontFamily: "Segoe UI, sans-serif",
        background: "#f7f7f7",
        color: "#222",
      }}
    >
      {/* HERO */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1974&auto=format&fit=crop') center/cover no-repeat",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            width: "100%",
            padding: "120px 24px 80px",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "50px",
            alignItems: "center",
          }}
        >
          {/* LEFT */}
          <div>
            <span
              style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.12)",
                padding: "8px 18px",
                borderRadius: "30px",
                color: "#fff",
                fontSize: "13px",
                letterSpacing: "1px",
                marginBottom: "18px",
              }}
            >
              RAKSHA PIPES DISTRIBUTOR PROGRAM
            </span>

            <h1
              style={{
                color: "#fff",
                fontSize: "58px",
                lineHeight: 1.1,
                marginBottom: "20px",
                fontWeight: 800,
              }}
            >
              Become a
              <span style={{ color: "#f1493a" }}>
                {" "}
                Raksha Pipes
              </span>
              <br />
              Distributor
            </h1>

            <p
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: "17px",
                lineHeight: 1.8,
                maxWidth: "620px",
                marginBottom: "30px",
              }}
            >
              Join Raksha Pipes distribution network and
              scale your business with premium quality
              pipes, fittings and trusted supply support.
            </p>

            <div
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={scrollToForm}
                style={{
                  background: "#fff",
                  color: "#b71c1c",
                  border: "none",
                  padding: "14px 28px",
                  borderRadius: "50px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Apply Now
              </button>

              <button
                onClick={scrollToForm}
                style={{
                  background: "transparent",
                  color: "#fff",
                  border:
                    "1px solid rgba(255,255,255,0.4)",
                  padding: "14px 28px",
                  borderRadius: "50px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* FORM */}
          <div
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              borderRadius: "24px",
              padding: "35px",
              border:
                "1px solid rgba(255,255,255,0.15)",
              boxShadow:
                "0 10px 30px rgba(0,0,0,0.18)",
            }}
          >
            <h2
              style={{
                color: "#fff",
                fontSize: "30px",
                marginBottom: "10px",
              }}
            >
              Distributor Inquiry Form
            </h2>

            <p
              style={{
                color: "rgba(255,255,255,0.8)",
                marginBottom: "28px",
              }}
            >
              Fill your details and our team will contact
              you shortly.
            </p>

            {/* ✅ FORM START */}
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                }}
              >
                <div>
                  <InputField
                    icon={<FaUserTie />}
                    placeholder="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    error={errors.fullName}
                  />

                  {errors.fullName && (
                    <p style={errorStyle}>
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <InputField
                    icon={<FaStore />}
                    placeholder="Company Name"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <InputField
                    icon={<FaPhoneAlt />}
                    placeholder="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    error={errors.phone}
                  />

                  {errors.phone && (
                    <p style={errorStyle}>
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <InputField
                    icon={<FaEnvelope />}
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                  />

                  {errors.email && (
                    <p style={errorStyle}>
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <InputField
                    icon={<FaMapMarkerAlt />}
                    placeholder="City"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    error={errors.city}
                  />

                  {errors.city && (
                    <p style={errorStyle}>
                      {errors.city}
                    </p>
                  )}
                </div>

                <div>
                  <InputField
                    icon={<FaMapMarkerAlt />}
                    placeholder="State"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    error={errors.state}
                  />

                  {errors.state && (
                    <p style={errorStyle}>
                      {errors.state}
                    </p>
                  )}
                </div>
              </div>

              <div style={{ marginTop: "16px" }}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your business"
                  rows="5"
                  style={{
                    width: "100%",
                    borderRadius: "14px",
                    border: errors.message
                      ? "1px solid #ff4d4f"
                      : "1px solid rgba(255,255,255,0.2)",
                    background:
                      "rgba(255,255,255,0.08)",
                    padding: "15px",
                    color: "#fff",
                    outline: "none",
                    resize: "none",
                    fontSize: "14px",
                  }}
                />

                {errors.message && (
                  <p style={errorStyle}>
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: "100%",
                  marginTop: "22px",
                  padding: "15px",
                  borderRadius: "14px",
                  border: "none",
                  background: loading
                    ? "#999"
                    : "linear-gradient(135deg,#8b0000,#d32f2f)",
                  color: "#fff",
                  fontSize: "15px",
                  fontWeight: 700,
                  cursor: loading
                    ? "not-allowed"
                    : "pointer",
                }}
              >
                {loading
                  ? "Submitting..."
                  : "Submit Application"}
              </button>
            </form>
            {/* ✅ FORM END */}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "90px 24px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "55px",
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              color: "#111",
              marginBottom: "16px",
              fontWeight: 800,
            }}
          >
            Why Become Distributor?
          </h2>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              color: "#666",
              lineHeight: 1.8,
            }}
          >
            Raksha Pipes helps distributors grow with
            strong product support, premium quality and
            fast logistics network.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(260px,1fr))",
            gap: "24px",
          }}
        >
          {benefits.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                borderRadius: "24px",
                padding: "35px 28px",
                boxShadow:
                  "0 15px 40px rgba(0,0,0,0.06)",
              }}
            >
              <div
                style={{
                  width: "68px",
                  height: "68px",
                  borderRadius: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#ececec",
                  color: "#b71c1c",
                  fontSize: "28px",
                  marginBottom: "22px",
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  fontSize: "22px",
                  marginBottom: "12px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#666",
                  lineHeight: 1.8,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* POPUP */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <div className="popup-icon">
              <FaCheckCircle className="success-icon" />
            </div>

            <h2>Success!</h2>

            <p>
              Distributor application submitted
              successfully.
            </p>
          </div>
        </div>
      )}

      <style>{`
        .popup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        .popup-box {
          background: white;
          padding: 35px;
          border-radius: 24px;
          text-align: center;
          width: 90%;
          max-width: 380px;
          animation: popup 0.3s ease;
        }

        .success-icon {
          font-size: 60px;
          color: #16a34a;
        }

        @keyframes popup {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 36px !important;
          }

          h2 {
            font-size: 30px !important;
          }

          form > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

function InputField({
  icon,
  error,
  ...props
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        background: "rgba(255,255,255,0.08)",
        border: error
          ? "1px solid #ff4d4f"
          : "1px solid rgba(255,255,255,0.15)",
        borderRadius: "14px",
        padding: "0 14px",
      }}
    >
      <span
        style={{
          color: error
            ? "#ff4d4f"
            : "rgba(255,255,255,0.8)",
          marginRight: "10px",
          fontSize: "14px",
        }}
      >
        {icon}
      </span>

      <input
        {...props}
        style={{
          width: "100%",
          border: "none",
          outline: "none",
          background: "transparent",
          color: "#fff",
          height: "52px",
          fontSize: "14px",
        }}
      />
    </div>
  );
}