import { useState, useEffect } from "react";
import {
  FaUserTie,
  FaStore,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaHandshake,
  FaTruck,
  FaUsers,
  FaAward,
} from "react-icons/fa";

export default function BecomeDealer() {
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

    // Full Name Only Letters
    if (name === "fullName" && !/^[a-zA-Z\s]*$/.test(value))
      return;

    // Phone Only Numbers
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

    if (
      !formData.phone ||
      formData.phone.length !== 10
    )
      newErrors.phone = "Phone must be 10 digits";

    if (!formData.city.trim())
      newErrors.city = "City required";

    if (!formData.state.trim())
      newErrors.state = "State required";

    if (
      !formData.message ||
      formData.message.length < 10
    )
      newErrors.message =
        "Message must be minimum 10 characters";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    const isValid = validateForm();

    if (!isValid) {
      const firstError =
        document.querySelector(".error");

      if (firstError) {
        firstError.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }

      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        "http://localhost:5000/api/dealer",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

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

        setErrors({});
      } else {
        alert("Email failed ❌");
      }
    } catch (err) {
      console.log(err);
      alert("Server error ❌");
    } finally {
      setLoading(false);
    }
  };

  const benefits = [
    {
      icon: <FaHandshake />,
      title: "Trusted Brand",
      desc:
        "Partner with one of India’s growing pipe & fitting brands.",
    },
    {
      icon: <FaTruck />,
      title: "Fast Supply",
      desc:
        "Strong distribution and fast delivery support.",
    },
    {
      icon: <FaUsers />,
      title: "Marketing Support",
      desc:
        "Dealer promotion support and branding assistance.",
    },
    {
      icon: <FaAward />,
      title: "High Quality Products",
      desc:
        "Premium quality plumbing, agriculture & industrial pipes.",
    },
  ];

  const scrollToForm = () => {
    const formSection =
      document.getElementById("dealer-form");

    formSection?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div
      id="dealer-form"
      style={{
        fontFamily: "Segoe UI, sans-serif",
        background: "#f7f7f7",
        color: "#222",
      }}
    >
      {/* HERO SECTION */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1974&auto=format&fit=crop') center/cover no-repeat",
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
                background:
                  "rgba(255,255,255,0.12)",
                padding: "8px 18px",
                borderRadius: "30px",
                color: "#fff",
                fontSize: "13px",
                letterSpacing: "1px",
                marginBottom: "18px",
              }}
            >
              RAKSHA PIPES DEALERSHIP PROGRAM
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
                Raksha Pipes{" "}
              </span>
              Dealer
            </h1>

            <p
              style={{
                color:
                  "rgba(255,255,255,0.9)",
                fontSize: "17px",
                lineHeight: 1.8,
                maxWidth: "620px",
                marginBottom: "30px",
              }}
            >
              Join our trusted dealer network
              and grow your business with
              high-quality plumbing,
              agriculture, industrial piping &
              bathroom solutions.
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
              background:
                "rgba(255,255,255,0.08)",
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
              Dealer Inquiry Form
            </h2>

            <p
              style={{
                color:
                  "rgba(255,255,255,0.8)",
                marginBottom: "28px",
              }}
            >
              Fill your details and our team
              will contact you shortly.
            </p>

            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "1fr 1fr",
                  gap: "16px",
                }}
              >
                {/* FULL NAME */}
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
                    <p
                      className="error"
                      style={errorStyle}
                    >
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* COMPANY */}
                <div>
                  <InputField
                    icon={<FaStore />}
                    placeholder="Company Name"
                    name="companyName"
                    value={
                      formData.companyName
                    }
                    onChange={handleChange}
                  />
                </div>

                {/* PHONE */}
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
                    <p
                      className="error"
                      style={errorStyle}
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* EMAIL */}
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
                    <p
                      className="error"
                      style={errorStyle}
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* CITY */}
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
                    <p
                      className="error"
                      style={errorStyle}
                    >
                      {errors.city}
                    </p>
                  )}
                </div>

                {/* STATE */}
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
                    <p
                      className="error"
                      style={errorStyle}
                    >
                      {errors.state}
                    </p>
                  )}
                </div>
              </div>

              {/* MESSAGE */}
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
                  <p
                    className="error"
                    style={errorStyle}
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              {/* BUTTON */}
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
                  transition: "0.3s ease",
                  boxShadow:
                    "0 10px 25px rgba(0,0,0,0.2)",
                }}
              >
                {loading
                  ? "Submitting..."
                  : "Submit Application"}
              </button>
            </form>
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
            Why Partner With Us?
          </h2>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              color: "#666",
              lineHeight: 1.8,
            }}
          >
            Raksha Pipes provides trusted
            piping solutions with strong
            business support, fast delivery
            and high-quality products.
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
              Dealer application submitted
              successfully.
            </p>
          </div>
        </div>
      )}

      {/* STYLE */}
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

        .popup-icon {
          margin-bottom: 15px;
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
          form > div {
            grid-template-columns: 1fr !important;
          }

          h1 {
            font-size: 34px !important;
          }

          h2 {
            font-size: 28px !important;
          }

          .popup-box {
            padding: 25px;
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
        transition: "0.3s ease",
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