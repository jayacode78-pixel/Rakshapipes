
import { useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

function BannerSection() {
  const images = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    "https://images.unsplash.com/photo-1497366412874-3415097a27e7",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="banner">
      {images.map((img, i) => (
        <div
          key={i}
          className={`slide ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      <div className="overlay" />

      <div className="banner-content">
        <h1>Contact Us</h1>
        <p>We’re here to help you with your piping solutions</p>
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
  );
}

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

 const branches = [
  {
    city: "Bengaluru",
    address: "#52, 7th Cross, Vinayaka Nagar, Wilson Garden, Bengaluru, Karnataka 560027",
    phone: "080–2223 5726",
    map: "https://www.google.com/maps?q=Shand+Group+Wilson+Garden+Bangalore"
  },
  {
   city: "Pune",
    address: "Sudarshannagar, Wadaki, Maharashtra 412308",
    phone: "020 2446 5032",
    branchManagerName: "Mr. Mukesh Sharma",
    branchEmailId: "pune@gamil.com",
    gstNumber: "8768",
    map: "https://www.google.com/maps?q=Raksha+Pipes+Pvt+Ltd+Wadaki+Pune"
  },
  {
    city: "Jaipur",
    address: "M-1, Rd Number 5, VKIA, Jaipur, Rajasthan 302013",
    phone: "095299 37091",
    map: "https://www.google.com/maps?q=Raksha+Pipe+Pvt+Ltd+Jaipur"
  },
  {
    city: "Patna",
    address: "Patna, Bihar",
    phone: "095299 37091",
    map: "https://www.google.com/maps?q=Raksha+Pipe+Pvt+Ltd+Patna"
  },
  {
    city: "Ludhiana",
    address: "Ludhiana, Punjab",
    phone: "095299 37091",
    map: "https://www.google.com/maps?q=Raksha+Pipe+Pvt+Ltd+Ludhiana"
  },
  {
    city: "Kolkata",
    address: "Fairley Place, B.B.D. Bagh, Kolkata, West Bengal 700001",
    phone: "095299 37091",
    map: "https://www.google.com/maps?q=Raksha+Pipe+Pvt+Ltd+Kolkata"
  },
  {
    city: "Vijayawada",
    address: "Vijayawada, Andhra Pradesh",
    phone: "095299 37091",
    map: "https://www.google.com/maps?q=Raksha+Pipe+Pvt+Ltd+Vijayawada"
  },
  {
    city: "Hyderabad",
    address: "Alwal, Secunderabad, Telangana 500015",
    phone: "095299 37091",
    map: "https://www.google.com/maps?q=Raksha+Pipe+Pvt+Ltd+Hyderabad"
  },
  {
    city: "Coimbatore",
    address: "Nallampalayam, Coimbatore, Tamil Nadu 641006",
    phone: "095299 37091",
    map: "https://www.google.com/maps?q=Raksha+Pipe+Pvt+Ltd+Coimbatore"
  },
  {
    city: "Indore",
    address: "Indore, Madhya Pradesh",
    phone: "095299 37091",
    map: "https://www.google.com/maps?q=Raksha+Pipe+Pvt+Ltd+Indore"
  },
  {
    city: "Ranchi",
    address: "Ranchi, Jharkhand",
    phone: "095299 37091",
    map: "https://www.google.com/maps?q=Raksha+Pipe+Pvt+Ltd+Ranchi"
  },
  {
    city: "Ernakulam",
    address: "Kochi, Kerala 682017",
    phone: "095299 37091",
    map: "https://www.google.com/maps?q=Raksha+Pipe+Pvt+Ltd+Ernakulam"
  },
  {
    city: "Belgaum",
    address: "Belagavi, Karnataka",
    phone: "095299 37091",
    map: "https://www.google.com/maps?q=Raksha+Pipe+Pvt+Ltd+Belgaum"
  }
];


  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);
  const [search, setSearch] = useState("");




  const filteredBranches = branches.filter((b) =>
  b.city.toLowerCase().includes(search.toLowerCase())
);



  // ✅ Real-time validation
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) return;
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setForm({ ...form, [name]: value });

    setErrors((prev) => {
      let newErrors = { ...prev };

      if (name === "name") {
        if (!value.trim()) newErrors.name = "Name is required";
        else if (value.length < 3) newErrors.name = "Min 3 characters";
        else delete newErrors.name;
      }

      if (name === "email") {
        const emailRegex =
          /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        if (!value) newErrors.email = "Email is required";
        else if (!emailRegex.test(value)) newErrors.email = "Invalid email";
        else delete newErrors.email;
      }

      if (name === "phone") {
        if (!value) newErrors.phone = "Phone required";
        else if (value.length !== 10)
          newErrors.phone = "Must be 10 digits";
        else delete newErrors.phone;
      }

      if (name === "message") {
        if (!value.trim()) newErrors.message = "Message required";
        else if (value.length < 10)
          newErrors.message = "Min 10 chars";
        else delete newErrors.message;
      }

      return newErrors;
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.phone || form.phone.length !== 10)
      newErrors.phone = "Phone must be 10 digits";
    if (!form.message || form.message.length < 10)
      newErrors.message = "Message must be 10 chars";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (submitted) return;

  //   const isValid = validate();
  //   const isValid = validate();
  // if (!isValid) return;

  //   if (!isValid) {
  //     const firstError = document.querySelector(".error");
  //     if (firstError) {
  //       firstError.scrollIntoView({
  //         behavior: "smooth",
  //         block: "center",
  //       });
  //     }
  //     return;
  //   }

  //   setSubmitted(true);
  //   setLoading(true);

  //   setTimeout(() => {
  //     setLoading(false);
  //     setShowPopup(true);

  //     setForm({
  //       name: "",
  //       email: "",
  //       phone: "",
  //       message: "",
  //     });

  //     setErrors({});
  //     setSubmitted(false);
  //   }, 1500);
  // };


const handleSubmit = async (e) => {
  e.preventDefault();

  if (loading) return;

  const isValid = validate();

  if (!isValid) {
    const firstError = document.querySelector(".error");
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

    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      setShowPopup(true);

      setForm({
        name: "",
        email: "",
        phone: "",
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






  // ✅ Auto close popup
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <div className="page">
      <BannerSection />

      {/* CARDS */}
      <div className="cards">
        {[
          {
            title: "Call Us",
            value: "080–2223 5726",
            icon: <MdOutlinePhone className="card-icon" />,
          },
          {
            title: "Email",
            value: "mkt@shandgroup.com",
            icon: <MdOutlineEmail className="card-icon" />,
          },
          {
            title: "Office",
            value: "Bengaluru",
            icon: <CiLocationOn className="card-icon" />,
          },
        ].map((item, i) => (
          <div key={i} className="card">
            <div className="icon-box">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.value}</p>
          </div>
        ))}
      </div>

      {/* FORM + INFO */}
      <div className="container">
        <form onSubmit={handleSubmit} className="form">
          <h2 className="form-title">Get in Touch with Raksha Pipes</h2>

          <label>Name <span className="required">*</span></label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <label>Email <span className="required">*</span></label>
          <div className="input-group">
           
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          {errors.email && <p className="error">{errors.email}</p>}

          <label>Phone <span className="required">*</span></label>
          <div className="input-group">
           
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
          {errors.phone && <p className="error">{errors.phone}</p>}

          <label>Message <span className="required">*</span></label>
          <textarea
            name="message"
            rows="5"
            placeholder="Tell us your requirement..."
            value={form.message}
            onChange={handleChange}
          />
          <small className="char-count">{form.message.length}/200</small>
          {errors.message && <p className="error">{errors.message}</p>}

          <button
            type="submit"
            disabled={
              loading ||
              submitted ||
              Object.keys(errors).length > 0
            }
          >
            {loading ? <span className="loader"></span> : "Submit"}
          </button>

          <p className="form-subtitle">
            Send your requirements — our team will contact you quickly.
          </p>
        </form>

        {/* INFO */}
        <div className="info">
          <h3>Corporate Office</h3>
          <p>
            Shand Group <br />
            Wilson Garden, Bengaluru <br />
            Karnataka, India
          </p>

          <p><strong>Phone:</strong> 080–2223 5726</p>
          <p><strong>Email:</strong> mkt@shandgroup.com</p>


          <h4>📍 Showing: {selectedBranch.city}</h4>

<div className="map-wrapper">
  <iframe
    title="Branch Location"
    src={`${selectedBranch.map}&output=embed`}
    loading="lazy"
  />

  {/* 👇 Ye overlay add karo */}
  <a
    href={selectedBranch.map}
    target="_blank"
    rel="noopener noreferrer"
    className="map-overlay"
  />
</div>







        </div>
       </div>




{/* ############################################################################## */}



<div className="branches-section">
  <h2 className="branch-title">📍 Our Branches Across India</h2>

    <input
    type="text"
    placeholder="Search city..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="search-input"
  />
    {filteredBranches.length === 0 && (
    <p className="no-branch">No branch found</p>
  )}

  <div className="branch-grid">
    {filteredBranches.map((b, i) => (






<div 
  key={i} 
  className={`branch-card ${selectedBranch.city === b.city ? "active" : ""}`}
  onClick={() => {
    setSelectedBranch(b);
    document.querySelector(".info").scrollIntoView({
      behavior: "smooth",
    });
  }}
>
  <h3>{b.city}</h3>

   <p><strong>📧 Address:</strong>{b.address}</p>

   <p><strong>📞 Phone:</strong> {b.phone}</p>

  {b.branchEmailId && (
    <p><strong>📧 Email:</strong> {b.branchEmailId || "Not Available"}</p>

  )}

  {b.branchManagerName && (
    <p><strong>👤 Manager:</strong> {b.branchManagerName || "Not Available"}</p>

  )}

  {b.gstNumber && (
    <p><strong>🧾 GST No:</strong> {b.gstNumber || "Not Available"}</p>
  )}

  <a 
    href={b.map} 
    target="_blank" 
    rel="noreferrer"
    onClick={(e) => e.stopPropagation()}
  >
    📍 View on Map →
  </a>
</div>
    ))}
  </div>
</div>







{/* ####################################################################################### */}





<div className="branches-section">
  <h2 className="branch-title">📍 Our Distribution Center Across India</h2>

    <input
    type="text"
    placeholder="Search city..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="search-input"
  />
    {filteredBranches.length === 0 && (
    <p className="no-branch">No branch found</p>
  )}

  <div className="branch-grid">
    {filteredBranches.map((b, i) => (
      <div 
  key={i} 
  className={`branch-card ${selectedBranch.city === b.city ? "active" : ""}`}
  onClick={() => {
  setSelectedBranch(b);
  document.querySelector(".info").scrollIntoView({
    behavior: "smooth",
  });
}}
>
        <h3>{b.city}</h3>
        <p>{b.address}</p>
        <p><strong>📞</strong> {b.phone}</p>

        <a 
  href={b.map} 
  target="_blank" 
  rel="noreferrer"
  onClick={(e) => e.stopPropagation()}
>
          View on Map →
        </a>
      </div>
    ))}
  </div>
</div>










<div className="branches-section">
  <h2 className="branch-title">📍 Our Factory Across India</h2>

    <input
    type="text"
    placeholder="Search city..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="search-input"
  />
    {filteredBranches.length === 0 && (
    <p className="no-branch">No branch found</p>
  )}

  <div className="branch-grid">
    {filteredBranches.map((b, i) => (
      <div 
  key={i} 
  className={`branch-card ${selectedBranch.city === b.city ? "active" : ""}`}
  onClick={() => {
  setSelectedBranch(b);
  document.querySelector(".info").scrollIntoView({
    behavior: "smooth",
  });
}}
>
        <h3>{b.city}</h3>
        <p>{b.address}</p>
        <p><strong>📞</strong> {b.phone}</p>

        <a 
  href={b.map} 
  target="_blank" 
  rel="noreferrer"
  onClick={(e) => e.stopPropagation()}
>
          View on Map →
        </a>
      </div>
    ))}
  </div>
</div>












<div className="branches-section">
  <h2 className="branch-title">📍 Our Marketing Office Across India</h2>

    <input
    type="text"
    placeholder="Search city..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="search-input"
  />
    {filteredBranches.length === 0 && (
    <p className="no-branch">No branch found</p>
  )}

  <div className="branch-grid">
    {filteredBranches.map((b, i) => (
      <div 
  key={i} 
  className={`branch-card ${selectedBranch.city === b.city ? "active" : ""}`}
  onClick={() => {
  setSelectedBranch(b);
  document.querySelector(".info").scrollIntoView({
    behavior: "smooth",
  });
}}
>
        <h3>{b.city}</h3>
        <p>{b.address}</p>
        <p><strong>📞</strong> {b.phone}</p>

        <a 
  href={b.map} 
  target="_blank" 
  rel="noreferrer"
  onClick={(e) => e.stopPropagation()}
>
          View on Map →
        </a>
      </div>
    ))}
  </div>
</div>







{/* ************************************************************************************************************ */}




      {/* POPUP */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            {/* <div className="popup-icon">✅</div> */}
           <div className="popup-icon">
  <FaCheckCircle className="success-icon" />
</div>
            <h2>Success!</h2>
            <p>Thanks! We've received your message.</p>
          </div>
        </div>
      )}

      {/* ADD THIS ONLY (don’t remove your CSS) */}

            <style>{`
        .page {
          font-family: 'Segoe UI', sans-serif;
          background: linear-gradient(to bottom, #f8fbff, #eef3f9);
        }

        .banner {
          height: 75vh;
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
          transition: opacity 1s;
        }

        .slide.active { opacity: 1; }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.3));
        }

        .banner-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          text-align: center;
        }

        .banner-content h1 {
          font-size: 64px;
          font-weight: 900;
        }

        .dots {
          position: absolute;
          bottom: 20px;
          width: 100%;
          display: flex;
          justify-content: center;
          gap: 10px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255,255,255,0.4);
          cursor: pointer;
        }

        .dot.active { background: white; }

        .cards {
          max-width: 1100px;
          margin: -60px auto 40px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          padding: 0 20px;
        }

       .cards {
  max-width: 1100px;
  margin: -70px auto 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 25px;
  padding: 0 20px;
}

.card {
  background: white;
  border-radius: 18px;
  padding: 35px 25px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #eee;
  position: relative;
  overflow: hidden;
}

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12);
        }



/* ICON BOX */
.icon-box {
  width: 70px;
  height: 70px;
  margin: 0 auto 15px;
  background: linear-gradient(135deg, #ef4444, #b91c1c);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ICON STYLE */
.card-icon {
  font-size: 32px;
  color: white;
}

/* TEXT */
.card h3 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 6px;
  color: #111;
}

.card p {
  font-size: 14px;
  color: #666;
}

/* OPTIONAL HOVER GLOW */
.card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, transparent, rgba(239,68,68,0.15), transparent);
  opacity: 0;
  transition: 0.5s;
}



        .container {
          max-width: 1200px;
          margin: 60px auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          padding: 20px;
        }

        .form, .info {
          background: white;
          padding: 35px;
          border-radius: 16px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }

        .form input, .form textarea {
          width: 100%;
          padding: 14px;
          margin-bottom: 15px;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          background: #f9fafb;
        }

        .form input:focus, .form textarea:focus {
          border-color: #2563eb;
          background: white;
          box-shadow: 0 0 0 3px rgba(37,99,235,0.1);
        }

        .form button {
          width: 100%;
          padding: 14px;
          border-radius: 10px;
          background: linear-gradient(135deg, #2563eb, #0f6ea9);
          color: white;
          border: none;
          font-weight: 600;
        }

        .form button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(37,99,235,0.3);
        }

      .info iframe {
  width: 100%;
  height: 400px; /* increased height */
  border: none;
  margin-top: 15px;
  border-radius: 14px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15); /* adds depth */
}








.icon {
  font-size: 32px;
  color: #ef4444; /* red */
  margin-bottom: 10px;
}


.form label {
  display: block;
  font-weight: 600;
  margin-bottom: 6px;
  color: #111;
}

.form input,
.form textarea {
  width: 100%;
  padding: 14px;
  margin-bottom: 18px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: #f9fafb;
  font-size: 14px;
}

.form input:focus,
.form textarea:focus {
  border-color: #ef4444;
  background: white;
  box-shadow: 0 0 0 3px rgba(239,68,68,0.15);
}

.form button {
  width: 100%;
  padding: 14px;
  border-radius: 10px;
  background: linear-gradient(135deg, #ef4444, #b91c1c);
  color: white;
  border: none;
  font-weight: 600;
  cursor: pointer;
}

.form button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(239,68,68,0.3);
}

.note {
  margin-top: 10px;
  font-size: 13px;
  color: #666;
  text-align: center;
}

.success {
  margin-top: 10px;
  color: green;
  text-align: center;
}


.required {
  color: #ef4444; /* red */
  margin-left: 2px;
  font-weight: bold;
}


.form-title {
  text-align: center;
  font-size: 28px;
  font-weight: 800;
  color: #111;
  margin-bottom: 8px;
}

.form-subtitle {
  text-align: center;
  font-size: 14px;
  color: #666;
  margin-bottom: 25px;
}



.error {
  color: red;
  font-size: 12px;
  margin-top: -12px;
  margin-bottom: 10px;
}

/* loader spinner */
.loader {
  width: 18px;
  height: 18px;
  border: 3px solid white;
  border-top: 3px solid transparent;
  border-radius: 50%;
  display: inline-block;
  animation: spin 0.7s linear infinite;
}


/* Pop up css */

/* OVERLAY */
.popup-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  animation: fadeIn 0.3s ease;
}

/* POPUP BOX */
.popup-box {
  background: white;
  padding: 30px 25px;
  border-radius: 16px;
  text-align: center;
  width: 320px;
  animation: scaleIn 0.3s ease;
  box-shadow: 0 20px 50px rgba(0,0,0,0.2);
}

/* ICON */
.popup-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
}

/* TITLE */
.popup-box h2 {
  font-size: 22px;
  margin-bottom: 5px;
}

/* SUBTEXT */
.popup-sub {
  font-size: 13px;
  color: #666;
  margin-top: 5px;
}

/* BUTTON */
.popup-box button {
  margin-top: 15px;
  padding: 10px 20px;
  border: none;
  background: #ef4444;
  color: white;
  border-radius: 8px;
  cursor: pointer;
}

.popup-box button:hover {
  background: #b91c1c;
}

/* ANIMATIONS */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleIn {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}





        .char-count {
          font-size: 12px;
          color: #666;
          margin-top: -10px;
          margin-bottom: 10px;
        }



@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}



.success-icon {
  font-size: 55px;
  color: #22c55e;
  display: block;
  margin: 0 auto;
}

@keyframes popIn {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}





/* BRANCH SECTION */
.branches-section {
  max-width: 1200px;
  margin: 60px auto;
  padding: 20px;
}

.branch-title {
  text-align: center;
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 30px;
}

/* GRID */
.branch-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

/* CARD */
.branch-card {
  background: white;
  padding: 25px;
  border-radius: 14px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
  transition: 0.3s;
  cursor: pointer;
}

.branch-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.12);
}

.branch-card h3 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #111;
}

.branch-card p {
  font-size: 14px;
  color: #555;
  margin-bottom: 6px;
}

/* BUTTON */
.branch-card a {
  display: inline-block;
  margin-top: 10px;
  color: white;
  background: #2563eb;
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 13px;
  text-decoration: none;
}

.branch-card a:hover {
  background: #1e40af;
}




.branch-card.active {
  border: 2px solid #2563eb;
  box-shadow: 0 15px 35px rgba(37,99,235,0.2);
}

.branch-card.active h3 {
  color: #2563eb;
}






.search-input {
  width: 100%;
  max-width: 300px;
  margin: 0 auto 20px;
  display: block;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ddd;
}





.map-wrapper {
  position: relative;
}

.map-overlay {
  position: absolute;
  inset: 0;
  z-index: 2;
  cursor: pointer;
}






        @media (max-width: 900px) {
          .container {
            grid-template-columns: 1fr;
          }

          .banner-content h1 {
            font-size: 36px;
          }
        }
      `}</style>
      
    </div>
  );
}








