// import { useState, useRef } from "react";
// import { Link } from "react-router-dom";

// const ALL_POSTS = [
//   {
//     id: 1,
//     category: "Agriculture",
//     title: "Top 5 Applications of PVC Pipes in Agriculture",
//     excerpt:
//       "India is primarily an agrarian economy and the second-largest worldwide producer of crops. Raksha PVC pipes — including uPVC pressure pipes and rain pipe systems — offer durable, food-grade solutions for drip irrigation, sprinkler lines, and water supply with a lifespan of up to 50 years.",
//     date: "20 Jun 2024",
//     image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
//     slug: "top5-applications-of-pvc-pipes-in-agriculture",
//   },
//   {
//     id: 2,
//     category: "Plumbing Tips",
//     title: "Benefits of CPVC & uPVC Pipes and Fittings",
//     excerpt:
//       "CPVC pipes can withstand flowing temperatures up to 93°C and resist salt water, low-pH water, and corrosive soil. Raksha uPVC pipes are long-lasting, affordable, lead-free, and have completely transformed the residential and commercial plumbing industry across India.",
//     date: "25 Jul 2024",
//     image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
//     slug: "benefits-of-cpvc",
//   },
//   {
//     id: 3,
//     category: "Construction",
//     title: "Six Important Causes of Underground Pipe Leakage",
//     excerpt:
//       "Underground piping systems are central to urban, agricultural, and industrial development. Common causes of leakage include pipe clogs, rodent damage, frost, and bad construction. Raksha pipes are designed with smooth inner bores to prevent clogs and are manufactured as leading cPVC pipe makers in Rajkot.",
//     date: "28 Aug 2024",
//     image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80",
//     slug: "SIX-IMPORTANT-CAUSES-OF-UNDERGROUND-PIPE-LEAKAGE",
//   },
//   {
//     id: 4,
//     category: "Industry News",
//     title: "6 Key Benefits of Braided Pipes in Industries",
//     excerpt:
//       "Braided pipes are among the most widely used pipe types in industrial markets. The yarn or cord woven into their layers reinforces strength, prevents particle collection, and enables high-pressure tensile capacity. Raksha's superior-grade PVC braided pipes meet international standards for flexibility and resilience.",
//     date: "15 Sep 2024",
//     image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
//     slug: "6-KEY-BENEFITS-OF-BRAIDED-PIPES-IN-INDUSTRIES",
//   },
//   {
//     id: 5,
//     category: "Agriculture",
//     title: "6 Tips to Choose the Right Quality of Agricultural Pipes & Fittings",
//     excerpt:
//       "Large and small farms need efficient water pipe fittings for consistent supply. Key factors include BIS certification, food-grade raw materials, and sourcing pipes and fittings from the same manufacturer for best compatibility. Raksha offers a complete range of BIS-certified agriculture pipes and fittings.",
//     date: "10 Oct 2024",
//     image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80",
//     slug: "6-Tips-to-choose-the-right-quality-of-agricultural-pipes&fittings",
//   },
//   {
//     id: 6,
//     category: "Plumbing Tips",
//     title: "Why Raksha CPVC Pipes Are Ideal for Hot & Cold Water Plumbing",
//     excerpt:
//       "Raksha CPVC pipes are manufactured using Copper Tube Sizes (CTS), making them easy replacements for copper and iron pipes. They are used for indoor and outdoor installations, water heaters, concealed pipelines, and residential and commercial buildings — all with potable water certification.",
//     date: "05 Nov 2024",
//     image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
//     slug: "raksha-cpvc-pipes-hot-cold-water",
//   },
//   {
//     id: 7,
//     category: "Construction",
//     title: "Raksha SWR Pipes & Fittings: Lightweight Drainage for Every Climate",
//     excerpt:
//       "Raksha SWR (Soil, Waste & Rainwater) pipes are light in weight, easy to install, and engineered to withstand drastic climate conditions. Made from high-quality uPVC, they are chemical and corrosion resistant, making them ideal for sewerage and drainage in residential and commercial buildings.",
//     date: "20 Nov 2024",
//     image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
//     slug: "raksha-swr-pipes-drainage",
//   },
//   {
//     id: 8,
//     category: "Industry News",
//     title: "Raksha Pipes: 44+ Years of Innovation in India's Piping Industry",
//     excerpt:
//       "Founded in 1977 by Mr. Shantilal Shand, Raksha Pipes revolutionised the plumbing industry by transitioning from rubber to plastic. Today, with 44+ years of experience, Raksha exports to Singapore, the Middle East, Europe, Russia, and Australia, upholding the promise of 'Raksha Jeevan Bhar Ki Suraksha'.",
//     date: "10 Dec 2024",
//     image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
//     slug: "raksha-pipes-44-years-innovation",
//   },
//   {
//     id: 9,
//     category: "Agriculture",
//     title: "uPVC Column Pipes for Submersible Pumps: What Farmers Must Know",
//     excerpt:
//       "Raksha uPVC Column Pipes are specifically designed for submersible pump installations in borewells and tube wells. They are manufactured for consistent water supply in agriculture, offering high tensile strength, corrosion resistance, and long service life even in deep borewell conditions.",
//     date: "28 Dec 2024",
//     image: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=600&q=80",
//     slug: "upvc-column-pipes-submersible-pumps",
//   },
// ];

// const CATEGORIES = ["All", "Plumbing Tips", "Industry News", "Agriculture", "Construction"];
// const POSTS_PER_PAGE = 6;

// const CSS = `
// @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Open+Sans:wght@400;500;600&display=swap');

// *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

// .rpb-page {
//   font-family: 'Open Sans', sans-serif;
//   color: #333333;
//   background: #f4f4f4;
//   min-height: 100vh;
// }

// /* HERO */
// .rpb-hero {
//   background: linear-gradient(120deg, #c0392b 0%, #96281b 55%, #7b1f15 100%);
//   padding: 150px 0 260px;
//   text-align: center;
//   position: relative;
//   overflow: hidden;
// }
// .rpb-hero::after {
//   content: '';
//   position: absolute;
//   inset: 0;
//   background-image: radial-gradient(circle at 20% 50%, rgba(255,255,255,0.07) 0%, transparent 60%),
//                     radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 40%);
//   pointer-events: none;
// }
// .rpb-breadcrumb {
//   font-size: 13px;
//   color: rgba(255,255,255,0.7);
//   margin-bottom: 16px;
//   position: relative;
//   z-index: 1;
// }
// .rpb-breadcrumb a {
//   color: rgba(255,255,255,0.7);
//   text-decoration: none;
// }
// .rpb-breadcrumb a:hover { color: #fff; }
// .rpb-breadcrumb span { margin: 0 8px; }
// .rpb-hero h1 {
//   font-family: 'Poppins', sans-serif;
//   font-size: clamp(28px, 4vw, 40px);
//   font-weight: 800;
//   color: #ffffff;
//   letter-spacing: -0.5px;
//   margin-bottom: 12px;
//   position: relative;
//   z-index: 1;
// }
// .rpb-hero p {
//   font-size: 15px;
//   color: rgba(255,255,255,0.8);
//   max-width: 500px;
//   margin: 0 auto;
//   line-height: 1.7;
//   position: relative;
//   z-index: 1;
// }

// /* CONTAINER */
// .rpb-container {
//   max-width: 1180px;
//   margin: 0 auto;
//   padding: 0 24px;
// }

// /* CATEGORY FILTER BAR */
// .rpb-filter-bar {
//   background: #ffffff;
//   border-bottom: 1px solid #e5e5e5;
//   box-shadow: 0 2px 10px rgba(0,0,0,0.07);
//   position: sticky;
//   top: 0;
//   z-index: 200;
// }
// .rpb-filter-scroll {
//   display: flex;
//   overflow-x: auto;
//   scrollbar-width: none;
//   -webkit-overflow-scrolling: touch;
// }
// .rpb-filter-scroll::-webkit-scrollbar { display: none; }
// .rpb-tab {
//   font-family: 'Poppins', sans-serif;
//   font-size: 13.5px;
//   font-weight: 600;
//   padding: 16px 26px;
//   border: none;
//   background: transparent;
//   color: #666;
//   cursor: pointer;
//   white-space: nowrap;
//   border-bottom: 3px solid transparent;
//   transition: color 0.22s, border-color 0.22s, background 0.22s;
//   letter-spacing: 0.2px;
// }
// .rpb-tab:hover { color: #c0392b; }
// .rpb-tab.rpb-tab--active {
//   color: #c0392b;
//   border-bottom-color: #c0392b;
//   background: rgba(192,57,43,0.04);
// }

// /* SEARCH BAR */
// .rpb-search-row {
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   gap: 12px;
//   padding: 28px 0 6px;
// }
// .rpb-search-box {
//   display: flex;
//   align-items: center;
//   background: #fff;
//   border: 1.5px solid #ddd;
//   border-radius: 6px;
//   overflow: hidden;
//   min-width: 280px;
//   max-width: 420px;
//   flex: 1;
//   box-shadow: 0 2px 8px rgba(0,0,0,0.055);
//   transition: border-color 0.2s;
// }
// .rpb-search-box:focus-within {
//   border-color: #c0392b;
// }
// .rpb-search-box input {
//   flex: 1;
//   border: none;
//   outline: none;
//   padding: 11px 16px;
//   font-size: 14px;
//   font-family: 'Open Sans', sans-serif;
//   color: #333;
//   background: transparent;
// }
// .rpb-search-box input::placeholder { color: #aaa; }
// .rpb-search-clear {
//   background: transparent;
//   border: none;
//   padding: 0 10px;
//   cursor: pointer;
//   color: #aaa;
//   font-size: 18px;
//   line-height: 1;
//   display: flex;
//   align-items: center;
//   transition: color 0.2s;
// }
// .rpb-search-clear:hover { color: #c0392b; }
// .rpb-search-btn {
//   background: #c0392b;
//   border: none;
//   padding: 11px 16px;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   transition: background 0.2s;
// }
// .rpb-search-btn:hover { background: #a93226; }
// .rpb-search-btn svg { width: 18px; height: 18px; fill: #fff; display: block; }

// /* ACTIVE SEARCH PILL */
// .rpb-active-filter {
//   display: inline-flex;
//   align-items: center;
//   gap: 6px;
//   background: rgba(192,57,43,0.1);
//   color: #c0392b;
//   font-family: 'Poppins', sans-serif;
//   font-size: 12.5px;
//   font-weight: 600;
//   padding: 5px 10px 5px 12px;
//   border-radius: 20px;
//   border: 1px solid rgba(192,57,43,0.25);
//   margin-bottom: 8px;
// }
// .rpb-active-filter button {
//   background: transparent;
//   border: none;
//   cursor: pointer;
//   color: #c0392b;
//   font-size: 16px;
//   line-height: 1;
//   padding: 0;
//   display: flex;
//   align-items: center;
// }
// .rpb-active-filter button:hover { color: #96281b; }

// /* RESULTS INFO */
// .rpb-info {
//   padding: 14px 0 24px;
//   font-size: 13.5px;
//   color: #888;
// }
// .rpb-info strong { color: #444; font-weight: 600; }

// /* BLOG GRID */
// .rpb-grid {
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 26px;
//   padding-bottom: 44px;
// }
// @media (max-width: 980px) { .rpb-grid { grid-template-columns: repeat(2, 1fr); } }
// @media (max-width: 580px) { .rpb-grid { grid-template-columns: 1fr; } }

// /* BLOG CARD */
// .rpb-card {
//   background: #ffffff;
//   border-radius: 8px;
//   overflow: hidden;
//   box-shadow: 0 2px 14px rgba(0,0,0,0.07);
//   display: flex;
//   flex-direction: column;
//   transition: transform 0.3s ease, box-shadow 0.3s ease;
//   animation: rpbFadeUp 0.4s ease both;
// }
// .rpb-card:hover {
//   transform: translateY(-7px);
//   box-shadow: 0 14px 36px rgba(0,0,0,0.13);
// }
// @keyframes rpbFadeUp {
//   from { opacity: 0; transform: translateY(20px); }
//   to   { opacity: 1; transform: translateY(0); }
// }

// .rpb-card-img {
//   position: relative;
//   height: 210px;
//   overflow: hidden;
//   background: #e8e8e8;
//   flex-shrink: 0;
// }
// .rpb-card-img img {
//   width: 100%; height: 100%;
//   object-fit: cover;
//   display: block;
//   transition: transform 0.4s ease;
// }
// .rpb-card:hover .rpb-card-img img { transform: scale(1.07); }

// .rpb-badge {
//   position: absolute;
//   top: 14px; left: 14px;
//   background: #c0392b;
//   color: #fff;
//   font-family: 'Poppins', sans-serif;
//   font-size: 10.5px;
//   font-weight: 700;
//   padding: 4px 10px;
//   border-radius: 3px;
//   letter-spacing: 0.6px;
//   text-transform: uppercase;
// }

// .rpb-card-body {
//   padding: 22px 22px 18px;
//   flex: 1;
//   display: flex;
//   flex-direction: column;
// }
// .rpb-card-meta {
//   display: flex;
//   align-items: center;
//   gap: 6px;
//   font-size: 12px;
//   color: #aaa;
//   margin-bottom: 11px;
// }
// .rpb-card-meta svg { width: 13px; height: 13px; fill: #aaa; flex-shrink: 0; }

// .rpb-card-title {
//   font-family: 'Poppins', sans-serif;
//   font-size: 15.5px;
//   font-weight: 700;
//   color: #1a1a1a;
//   line-height: 1.45;
//   margin-bottom: 12px;
//   display: -webkit-box;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
//   overflow: hidden;
//   transition: color 0.2s;
// }
// .rpb-card:hover .rpb-card-title { color: #c0392b; }

// .rpb-card-excerpt {
//   font-size: 13.5px;
//   color: #666;
//   line-height: 1.7;
//   flex: 1;
//   display: -webkit-box;
//   -webkit-line-clamp: 3;
//   -webkit-box-orient: vertical;
//   overflow: hidden;
//   margin-bottom: 20px;
// }

// .rpb-divider {
//   height: 1px;
//   background: #f0f0f0;
//   margin-bottom: 16px;
// }

// .rpb-read-more {
//   display: inline-flex;
//   align-items: center;
//   gap: 7px;
//   font-family: 'Poppins', sans-serif;
//   font-size: 13px;
//   font-weight: 600;
//   color: #c0392b;
//   text-decoration: none;
//   letter-spacing: 0.2px;
//   transition: gap 0.22s;
// }
// .rpb-read-more:hover { gap: 12px; }
// .rpb-read-more svg { width: 16px; height: 16px; fill: #c0392b; }

// /* EMPTY STATE */
// .rpb-empty {
//   grid-column: 1 / -1;
//   text-align: center;
//   padding: 72px 20px;
//   color: #aaa;
// }
// .rpb-empty svg { width: 52px; height: 52px; fill: #ddd; display: block; margin: 0 auto 16px; }
// .rpb-empty h3 {
//   font-family: 'Poppins', sans-serif;
//   font-size: 18px;
//   font-weight: 700;
//   color: #555;
//   margin-bottom: 8px;
// }
// .rpb-empty p { font-size: 14px; margin-bottom: 20px; }
// .rpb-empty-reset {
//   display: inline-flex;
//   align-items: center;
//   gap: 6px;
//   background: #c0392b;
//   color: #fff;
//   font-family: 'Poppins', sans-serif;
//   font-size: 13px;
//   font-weight: 600;
//   padding: 10px 22px;
//   border-radius: 5px;
//   border: none;
//   cursor: pointer;
//   transition: background 0.2s;
// }
// .rpb-empty-reset:hover { background: #a93226; }

// /* PAGINATION */
// .rpb-pagination {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 6px;
//   padding: 8px 0 56px;
// }
// .rpb-pg {
//   min-width: 40px; height: 40px;
//   padding: 0 10px;
//   border-radius: 4px;
//   border: 1.5px solid #ddd;
//   background: #fff;
//   font-family: 'Poppins', sans-serif;
//   font-size: 14px;
//   font-weight: 600;
//   color: #555;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: all 0.2s;
// }
// .rpb-pg:hover:not(:disabled) { border-color: #c0392b; color: #c0392b; background: rgba(192,57,43,0.05); }
// .rpb-pg.rpb-pg--active { background: #c0392b; border-color: #c0392b; color: #fff; }
// .rpb-pg:disabled { opacity: 0.3; cursor: not-allowed; }
// .rpb-pg svg { width: 16px; height: 16px; fill: currentColor; display: block; }

// /* NEWSLETTER */
// .rpb-newsletter {
//   background: linear-gradient(100deg, #fdfdfd 0%, #f7f7fa 100%);
//   padding: 56px 0;
//   text-align: center;
// }
// .rpb-newsletter h2 {
//   font-family: 'Poppins', sans-serif;
//   font-size: clamp(20px, 3vw, 26px);
//   font-weight: 700;
//   color: #f73535;
//   margin-bottom: 10px;
// }
// .rpb-newsletter p {
//   font-size: 14.5px;
//   color: rgb(5, 5, 5);
//   margin-bottom: 28px;
// }
// .rpb-nl-form {
//   display: flex;
//   justify-content: center;
//   max-width: 450px;
//   margin: 0 auto;
// }
// .rpb-nl-form input {
//   flex: 1;
//   border: 1px solid #000;
//   outline: none;
//   padding: 13px 18px;
//   font-size: 14px;
//   border-radius: 4px 0 0 4px;
//   font-family: 'Open Sans', sans-serif;
//   background-color: #f3f4f6;
//   color: #000;
// }
// .rpb-nl-form input::placeholder { color: #6b7280; }
// .rpb-nl-form input.rpb-nl-error { border-color: #c0392b; }
// .rpb-nl-form button {
//   background: #c0392b;
//   color: #ffffff;
//   border: none;
//   padding: 13px 26px;
//   font-family: 'Poppins', sans-serif;
//   font-size: 14px;
//   font-weight: 600;
//   cursor: pointer;
//   border-radius: 0 4px 4px 0;
//   transition: background 0.2s;
//   white-space: nowrap;
// }
// .rpb-nl-form button:hover { background: #a93226; }
// .rpb-nl-success {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 8px;
//   color: #1a7a3c;
//   background: #d4edda;
//   border: 1px solid #b8dac5;
//   border-radius: 6px;
//   padding: 13px 24px;
//   font-family: 'Poppins', sans-serif;
//   font-size: 14px;
//   font-weight: 600;
//   max-width: 450px;
//   margin: 0 auto;
// }
// .rpb-nl-success svg { width: 18px; height: 18px; fill: #1a7a3c; flex-shrink: 0; }
// .rpb-nl-error-msg {
//   font-size: 12.5px;
//   color: #c0392b;
//   margin-top: 7px;
//   font-family: 'Open Sans', sans-serif;
// }

// /* BACK TO TOP */
// .rpb-back-top {
//   position: fixed;
//   bottom: 32px;
//   right: 32px;
//   z-index: 999;
//   background: #c0392b;
//   color: #fff;
//   border: none;
//   width: 44px;
//   height: 44px;
//   border-radius: 50%;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   box-shadow: 0 4px 14px rgba(192,57,43,0.4);
//   transition: background 0.2s, opacity 0.3s, transform 0.3s;
//   opacity: 0;
//   pointer-events: none;
//   transform: translateY(12px);
// }
// .rpb-back-top.rpb-back-top--visible {
//   opacity: 1;
//   pointer-events: auto;
//   transform: translateY(0);
// }
// .rpb-back-top:hover { background: #a93226; }
// .rpb-back-top svg { width: 20px; height: 20px; fill: #fff; }
// `;

// /* ── Icons ── */
// const IconCalendar = () => (
//   <svg viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5C3.9 3 3 3.9 3 5v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H5V8h14v13z"/></svg>
// );
// const IconArrow = () => (
//   <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
// );
// const IconSearch = () => (
//   <svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
// );
// const IconChevLeft = () => (
//   <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
// );
// const IconChevRight = () => (
//   <svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
// );
// const IconEmpty = () => (
//   <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12zM7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/></svg>
// );
// const IconChevUp = () => (
//   <svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>
// );
// const IconCheck = () => (
//   <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
// );

// /* ── Blog Card ── */
// function BlogCard({ post, index }) {
//   return (
//     <article className="rpb-card" style={{ animationDelay: `${index * 0.07}s` }}>
//       <div className="rpb-card-img">
//         <img src={post.image} alt={post.title} loading="lazy" />
//         <span className="rpb-badge">{post.category}</span>
//       </div>
//       <div className="rpb-card-body">
//         <div className="rpb-card-meta">
//           <IconCalendar />
//           {post.date}
//         </div>
//         <h3 className="rpb-card-title">{post.title}</h3>
//         <p className="rpb-card-excerpt">{post.excerpt}</p>
//         <div className="rpb-divider" />
//         <Link to={`/blog/${post.slug}`} className="rpb-read-more">
//           Read More <IconArrow />
//         </Link>
//       </div>
//     </article>
//   );
// }

// /* ── Main Page ── */
// export default function Blog() {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [searchInput, setSearchInput]       = useState("");
//   const [searchQuery, setSearchQuery]       = useState("");
//   const [currentPage, setCurrentPage]       = useState(1);
//   const [email, setEmail]                   = useState("");
//   const [emailError, setEmailError]         = useState("");
//   const [subscribed, setSubscribed]         = useState(false);
//   const [showBackTop, setShowBackTop]       = useState(false);

//   const gridRef = useRef(null);

//   /* Back-to-top visibility */
//   const handleScroll = () => setShowBackTop(window.scrollY > 400);
//   if (typeof window !== "undefined") {
//     window.onscroll = handleScroll;
//   }

//   /* ── Filter ── */
//   const filtered = ALL_POSTS.filter((p) => {
//     const catOk  = activeCategory === "All" || p.category === activeCategory;
//     const q      = searchQuery.toLowerCase().trim();
//     const srchOk =
//       !q ||
//       p.title.toLowerCase().includes(q) ||
//       p.excerpt.toLowerCase().includes(q) ||
//       p.category.toLowerCase().includes(q);
//     return catOk && srchOk;
//   });

//   /* ── Pagination ── */
//   const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
//   const paginated  = filtered.slice(
//     (currentPage - 1) * POSTS_PER_PAGE,
//     currentPage * POSTS_PER_PAGE
//   );

//   /* ── Handlers ── */
//   const changeCategory = (cat) => {
//     setActiveCategory(cat);
//     setCurrentPage(1);
//   };

//   const doSearch = () => {
//     setSearchQuery(searchInput.trim());
//     setCurrentPage(1);
//   };

//   const clearSearch = () => {
//     setSearchInput("");
//     setSearchQuery("");
//     setCurrentPage(1);
//   };

//   const resetAll = () => {
//     clearSearch();
//     setActiveCategory("All");
//   };

//   const changePage = (pg) => {
//     setCurrentPage(pg);
//     // Scroll smoothly to grid top
//     if (gridRef.current) {
//       gridRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   const handleSubscribe = () => {
//     const trimmed = email.trim();
//     const valid   = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
//     if (!trimmed) {
//       setEmailError("Please enter your email address.");
//       return;
//     }
//     if (!valid) {
//       setEmailError("Please enter a valid email address.");
//       return;
//     }
//     setEmailError("");
//     setSubscribed(true);
//   };

//   return (
//     <>
//       <style>{CSS}</style>
//       <div className="rpb-page">

//         {/* ── HERO ── */}
//         <section className="rpb-hero">
//           <div className="rpb-container">
//             <p className="rpb-breadcrumb">
//               <a href="/">Home</a><span>›</span><span>Blogs</span>
//             </p>
//             <h1>Blogs &amp; Articles</h1>
//             <p>
//               Expert tips on CPVC, uPVC, SWR, and HDPE pipes — installation guides,
//               agriculture solutions, and industry news from Raksha Pipes, India's
//               trusted pipe manufacturer since 1977.
//             </p>
//           </div>
//         </section>

//         {/* ── CATEGORY TABS ── */}
//         <div className="rpb-filter-bar" role="navigation" aria-label="Blog categories">
//           <div className="rpb-container">
//             <div className="rpb-filter-scroll">
//               {CATEGORIES.map((cat) => (
//                 <button
//                   key={cat}
//                   className={`rpb-tab${activeCategory === cat ? " rpb-tab--active" : ""}`}
//                   onClick={() => changeCategory(cat)}
//                   aria-pressed={activeCategory === cat}
//                 >
//                   {cat}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* ── SEARCH + INFO ── */}
//         <div className="rpb-container">
//           <div className="rpb-search-row">
//             <div className="rpb-search-box" role="search">
//               <input
//                 type="text"
//                 placeholder="Search articles…"
//                 value={searchInput}
//                 onChange={(e) => setSearchInput(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && doSearch()}
//                 aria-label="Search blog articles"
//               />
//               {searchInput && (
//                 <button
//                   className="rpb-search-clear"
//                   onClick={clearSearch}
//                   aria-label="Clear search"
//                   title="Clear search"
//                 >
//                   ×
//                 </button>
//               )}
//               <button
//                 className="rpb-search-btn"
//                 onClick={doSearch}
//                 aria-label="Search"
//               >
//                 <IconSearch />
//               </button>
//             </div>
//           </div>

//           {/* Active search pill */}
//           {searchQuery && (
//             <div>
//               <span className="rpb-active-filter">
//                 Searching: "{searchQuery}"
//                 <button onClick={clearSearch} aria-label="Remove search filter" title="Remove filter">×</button>
//               </span>
//             </div>
//           )}

//           <p className="rpb-info" aria-live="polite">
//             Showing <strong>{filtered.length}</strong>&nbsp;
//             {filtered.length === 1 ? "article" : "articles"}
//             {activeCategory !== "All" && <> in &ldquo;{activeCategory}&rdquo;</>}
//             {searchQuery && <> matching &ldquo;{searchQuery}&rdquo;</>}
//           </p>

//           {/* ── GRID ── */}
//           <div className="rpb-grid" ref={gridRef}>
//             {paginated.length > 0 ? (
//               paginated.map((post, i) => (
//                 <BlogCard key={post.id} post={post} index={i} />
//               ))
//             ) : (
//               <div className="rpb-empty" role="status">
//                 <IconEmpty />
//                 <h3>No articles found</h3>
//                 <p>Try a different keyword or browse all categories.</p>
//                 <button className="rpb-empty-reset" onClick={resetAll}>
//                   Clear all filters
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* ── PAGINATION ── */}
//           {totalPages > 1 && (
//             <nav className="rpb-pagination" aria-label="Blog pagination">
//               <button
//                 className="rpb-pg"
//                 onClick={() => changePage(currentPage - 1)}
//                 disabled={currentPage === 1}
//                 aria-label="Previous page"
//               >
//                 <IconChevLeft />
//               </button>

//               {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => (
//                 <button
//                   key={pg}
//                   className={`rpb-pg${currentPage === pg ? " rpb-pg--active" : ""}`}
//                   onClick={() => changePage(pg)}
//                   aria-label={`Page ${pg}`}
//                   aria-current={currentPage === pg ? "page" : undefined}
//                 >
//                   {pg}
//                 </button>
//               ))}

//               <button
//                 className="rpb-pg"
//                 onClick={() => changePage(currentPage + 1)}
//                 disabled={currentPage === totalPages}
//                 aria-label="Next page"
//               >
//                 <IconChevRight />
//               </button>
//             </nav>
//           )}
//         </div>

//         {/* ── NEWSLETTER ── */}
//         <section className="rpb-newsletter" aria-label="Newsletter signup">
//           <div className="rpb-container">
//             <h2>Stay Updated with Raksha Pipes</h2>
//             <p>
//               Subscribe for the latest pipe care tips, product launches, BIS updates,
//               and agriculture solutions — delivered straight to your inbox.
//             </p>

//             {subscribed ? (
//               <div className="rpb-nl-success" role="status">
//                 <IconCheck />
//                 Thank you! You're now subscribed.
//               </div>
//             ) : (
//               <>
//                 <div className="rpb-nl-form">
//                   <input
//                     type="email"
//                     placeholder="Enter your email address"
//                     value={email}
//                     onChange={(e) => { setEmail(e.target.value); setEmailError(""); }}
//                     onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
//                     className={emailError ? "rpb-nl-error" : ""}
//                     aria-label="Email address for newsletter"
//                     aria-describedby={emailError ? "nl-error" : undefined}
//                   />
//                   <button type="button" onClick={handleSubscribe}>Subscribe</button>
//                 </div>
//                 {emailError && (
//                   <p className="rpb-nl-error-msg" id="nl-error" role="alert">{emailError}</p>
//                 )}
//               </>
//             )}
//           </div>
//         </section>

//       </div>

//       {/* ── BACK TO TOP ── */}
//       <button
//         className={`rpb-back-top${showBackTop ? " rpb-back-top--visible" : ""}`}
//         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//         aria-label="Back to top"
//         title="Back to top"
//       >
//         <IconChevUp />
//       </button>
//     </>
//   );
// }







































import { useState, useRef, useEffect } from "react";

const ALL_POSTS = [
  {
    id: 1,
    category: "Agriculture",
    title: "Top 5 Applications of PVC Pipes in Agriculture",
    excerpt:
      "India is primarily an agrarian economy and the second-largest worldwide producer of crops. Raksha PVC pipes — including uPVC pressure pipes and rain pipe systems — offer durable, food-grade solutions for drip irrigation, sprinkler lines, and water supply with a lifespan of up to 50 years.",
    date: "20 Jun 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80",
    slug: "top5-applications-of-pvc-pipes-in-agriculture",
    author: "Raksha Editorial Team",
    content: [
      {
        type: "intro",
        text: "India is primarily an agrarian economy, contributing significantly to the national GDP and employing nearly 58% of the population. With water scarcity becoming a growing challenge, efficient irrigation systems are more critical than ever. Raksha PVC pipes have emerged as a trusted solution — from small family farms to large agricultural enterprises.",
      },
      {
        type: "heading",
        text: "1. Drip Irrigation Systems",
      },
      {
        type: "paragraph",
        text: "Drip irrigation delivers water directly to the root zone of plants, dramatically reducing water waste. Raksha uPVC pressure pipes are ideal for drip irrigation networks due to their smooth inner bore, which prevents clogging and ensures consistent flow rates. With a pressure rating of up to 6 kg/cm², they handle varied terrain with ease.",
      },
      {
        type: "heading",
        text: "2. Sprinkler Irrigation Lines",
      },
      {
        type: "paragraph",
        text: "Sprinkler systems require pipes that can withstand high pressure uniformly across long distances. Raksha's uPVC pipes, being lightweight yet strong, make installation and maintenance easier. They resist UV degradation and harsh fertilizers, making them suitable for year-round use across different crops.",
      },
      {
        type: "heading",
        text: "3. Main Water Supply Networks",
      },
      {
        type: "paragraph",
        text: "From canals to storage tanks to field distribution, Raksha PVC pipes form the backbone of agricultural water supply networks. Their corrosion resistance ensures zero contamination of water, making them food-grade compliant. The pipes maintain their structural integrity even in chemically-active soils.",
      },
      {
        type: "heading",
        text: "4. Rain Pipe Systems for Row Crops",
      },
      {
        type: "paragraph",
        text: "Raksha Rain Pipe systems are specially engineered for row crops like vegetables, sugarcane, and groundnuts. The perforated design allows gentle, uniform water distribution along the crop row, reducing soil erosion and ensuring even moisture penetration. Farmers report up to 40% water savings compared to flood irrigation.",
      },
      {
        type: "heading",
        text: "5. Borewell and Tube Well Connections",
      },
      {
        type: "paragraph",
        text: "Connecting submersible pumps to distribution networks requires high-tensile, corrosion-resistant pipes. Raksha uPVC column pipes for borewell applications can withstand high axial loads and are safe for potable water use. Their lightweight nature reduces installation costs and allows a single person to manage assembly.",
      },
      {
        type: "highlight",
        text: "Raksha PVC agricultural pipes come with BIS certification and a service life of up to 50 years — making them a one-time investment that protects your farm's productivity for generations.",
      },
      {
        type: "paragraph",
        text: "Choosing Raksha means choosing pipes manufactured with food-grade raw materials, tested to IS standards, and backed by 44+ years of industry expertise. From small farms in Rajasthan to large plantations in Maharashtra, Raksha pipes are trusted across India's agricultural heartland.",
      },
    ],
  },
  {
    id: 2,
    category: "Plumbing Tips",
    title: "Benefits of CPVC & uPVC Pipes and Fittings",
    excerpt:
      "CPVC pipes can withstand flowing temperatures up to 93°C and resist salt water, low-pH water, and corrosive soil. Raksha uPVC pipes are long-lasting, affordable, lead-free, and have completely transformed the residential and commercial plumbing industry across India.",
    date: "25 Jul 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    slug: "benefits-of-cpvc",
    author: "Raksha Technical Team",
    content: [
      {
        type: "intro",
        text: "Modern plumbing demands materials that are reliable, hygienic, and cost-effective. CPVC (Chlorinated Polyvinyl Chloride) and uPVC (Unplasticized Polyvinyl Chloride) have revolutionized building plumbing in India. Raksha's range covers both materials comprehensively, offering solutions for every application.",
      },
      {
        type: "heading",
        text: "Understanding CPVC Pipes",
      },
      {
        type: "paragraph",
        text: "CPVC pipes are manufactured by chlorinating PVC resin, which raises the chlorine content from 56% to 67%. This additional chlorination allows CPVC to handle hot water up to 93°C — making it the go-to material for hot water distribution systems in homes, hotels, and hospitals.",
      },
      {
        type: "heading",
        text: "Key Benefits of CPVC",
      },
      {
        type: "paragraph",
        text: "CPVC is highly resistant to salt water, acidic water (low pH), and corrosive soils — conditions that rapidly destroy metal pipes. It is also inherently fire-resistant (Self-Extinguishing Index), making it safer in concealed plumbing applications. The thermal conductivity of CPVC is 1,000 times lower than copper, reducing heat loss and condensation.",
      },
      {
        type: "heading",
        text: "Understanding uPVC Pipes",
      },
      {
        type: "paragraph",
        text: "uPVC pipes contain no plasticizers, making them rigid, strong, and dimensionally stable. They are completely lead-free and certified safe for potable water — a critical factor in residential plumbing. Their smooth inner surface prevents biofilm formation and maintains water purity over decades of use.",
      },
      {
        type: "heading",
        text: "Cost Advantages",
      },
      {
        type: "paragraph",
        text: "Compared to copper, GI (Galvanized Iron), or stainless steel pipes, both CPVC and uPVC are significantly more affordable — not just in material cost but also in installation. They are lightweight, cut easily, and join with solvent cement without specialized tools or skilled labor, reducing project timelines and costs.",
      },
      {
        type: "highlight",
        text: "Raksha CPVC pipes conform to ASTM F441/F442 and IS 15778 standards. All Raksha uPVC pipes carry BIS certification and are manufactured with food-grade virgin PVC resin — no recycled material, ever.",
      },
      {
        type: "heading",
        text: "Which Pipe Should You Choose?",
      },
      {
        type: "paragraph",
        text: "Use CPVC for hot and cold water supply lines, water heaters, and concealed plumbing in bathrooms and kitchens. Use uPVC for cold water supply, underground water mains, and agricultural irrigation. For complete compatibility and best performance, always use pipes and fittings from the same manufacturer — Raksha offers both, ensuring perfect system integration.",
      },
    ],
  },
  {
    id: 3,
    category: "Construction",
    title: "Six Important Causes of Underground Pipe Leakage",
    excerpt:
      "Underground piping systems are central to urban, agricultural, and industrial development. Common causes of leakage include pipe clogs, rodent damage, frost, and bad construction. Raksha pipes are designed with smooth inner bores to prevent clogs and are manufactured as leading cPVC pipe makers in Rajkot.",
    date: "28 Aug 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200&q=80",
    slug: "SIX-IMPORTANT-CAUSES-OF-UNDERGROUND-PIPE-LEAKAGE",
    author: "Raksha Engineering Team",
    content: [
      {
        type: "intro",
        text: "Underground pipe leakage is one of the most costly and disruptive plumbing problems in residential, commercial, and industrial settings. Detecting a leak underground often requires extensive excavation, and the resulting water loss can cause structural damage, soil erosion, and health hazards. Understanding the root causes helps property owners and engineers make better pipe selection decisions.",
      },
      {
        type: "heading",
        text: "1. Pipe Clogs and Blockages",
      },
      {
        type: "paragraph",
        text: "When pipes become clogged, pressure builds up at the blockage point. Over time, this internal pressure stress causes joints to loosen or pipe walls to crack, resulting in leakage. Raksha pipes feature a smooth inner bore that minimizes friction and prevents debris accumulation, significantly reducing clog risk.",
      },
      {
        type: "heading",
        text: "2. Rodent and Pest Damage",
      },
      {
        type: "paragraph",
        text: "Rodents — especially rats — can chew through certain pipe materials, creating entry points that lead to leakage. Raksha uPVC pipes, with their hard rigid composition, are highly resistant to rodent damage. Unlike softer PE (polyethylene) pipes, uPVC does not present an easy target for gnawing.",
      },
      {
        type: "heading",
        text: "3. Frost and Temperature Fluctuations",
      },
      {
        type: "paragraph",
        text: "In regions with cold winters, water inside pipes can freeze and expand, creating extreme internal pressure. This phenomenon — 'frost heave' — can crack or burst pipes. While less common in India's tropical climate, high-altitude and northern regions still face this risk. Properly insulated and buried pipes are the solution.",
      },
      {
        type: "heading",
        text: "4. Poor Installation Practices",
      },
      {
        type: "paragraph",
        text: "Improper jointing, insufficient bedding material, incorrect burial depth, and inadequate compaction around pipes are among the most common human-error causes of underground leakage. Always follow manufacturer guidelines for trench dimensions, pipe bedding, and joint curing times.",
      },
      {
        type: "heading",
        text: "5. Soil Movement and Ground Settlement",
      },
      {
        type: "paragraph",
        text: "Soil is never completely static. Seasonal moisture changes, heavy traffic loads above pipes, and natural geological movement all cause the ground to shift. Pipes with poor flexibility or weak joints cannot accommodate this movement and eventually crack or separate. This is why Raksha's pipe systems include flexible rubber ring joints for underground water mains.",
      },
      {
        type: "heading",
        text: "6. Corrosion and Chemical Attack",
      },
      {
        type: "paragraph",
        text: "Metal pipes are extremely vulnerable to corrosion in acidic or saline soils. Even concrete pipes degrade in chemically active environments. PVC and uPVC pipes from Raksha are immune to soil corrosion, making them the preferred choice for underground water distribution networks across India.",
      },
      {
        type: "highlight",
        text: "Prevention is always cheaper than repair. Choosing quality pipes, ensuring proper installation, and conducting periodic pressure testing can save lakhs in excavation and damage repair costs.",
      },
    ],
  },
  {
    id: 4,
    category: "Industry News",
    title: "6 Key Benefits of Braided Pipes in Industries",
    excerpt:
      "Braided pipes are among the most widely used pipe types in industrial markets. The yarn or cord woven into their layers reinforces strength, prevents particle collection, and enables high-pressure tensile capacity. Raksha's superior-grade PVC braided pipes meet international standards for flexibility and resilience.",
    date: "15 Sep 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    slug: "6-KEY-BENEFITS-OF-BRAIDED-PIPES-IN-INDUSTRIES",
    author: "Raksha Editorial Team",
    content: [
      {
        type: "intro",
        text: "Braided pipes — also known as reinforced flexible hoses — are critical components in industrial fluid handling, chemical processing, food production, and HVAC systems. Their unique construction, featuring interwoven layers of high-tensile yarn or wire cord, gives them properties that standard flexible pipes simply cannot match.",
      },
      {
        type: "heading",
        text: "1. Superior Pressure Handling",
      },
      {
        type: "paragraph",
        text: "The braided reinforcement layer dramatically increases the pipe's ability to withstand internal pressure. Raksha PVC braided pipes can handle working pressures significantly higher than unreinforced hoses of the same diameter — making them suitable for hydraulic lines, air compressors, and high-pressure water systems.",
      },
      {
        type: "heading",
        text: "2. Exceptional Flexibility",
      },
      {
        type: "paragraph",
        text: "Despite their reinforced construction, braided pipes remain highly flexible. This is crucial in industrial applications where pipes must navigate around machinery, through tight spaces, or connect moving components. Raksha braided hoses maintain flexibility without kinking — even at small bend radii.",
      },
      {
        type: "heading",
        text: "3. Anti-Particle Collection Inner Surface",
      },
      {
        type: "paragraph",
        text: "The smooth PVC inner core prevents particle accumulation that could contaminate fluids or restrict flow. This is especially important in food-grade applications, pharmaceutical processing, and potable water systems where hygiene is paramount.",
      },
      {
        type: "heading",
        text: "4. Chemical Resistance",
      },
      {
        type: "paragraph",
        text: "PVC braided pipes resist a wide range of chemicals, oils, and solvents. Unlike rubber hoses that can swell or degrade on contact with hydrocarbons, Raksha braided pipes maintain their integrity across diverse industrial fluid environments.",
      },
      {
        type: "heading",
        text: "5. Long Service Life",
      },
      {
        type: "paragraph",
        text: "The combination of PVC's inherent chemical resistance and the physical protection of the braid layer dramatically extends service life. Raksha's manufacturing process uses high-quality PVC compound with UV stabilizers, ensuring the pipes perform reliably even in demanding outdoor industrial environments.",
      },
      {
        type: "heading",
        text: "6. Easy Installation and Replacement",
      },
      {
        type: "paragraph",
        text: "Braided pipes connect using standard barbed fittings or compression clamps, requiring no specialized tools. Their lightweight nature makes them easy to handle and install, and replacement in case of damage is straightforward — minimizing downtime in industrial settings.",
      },
      {
        type: "highlight",
        text: "Raksha PVC braided pipes are manufactured to IS 12968 standards and are available in sizes from ½ inch to 4 inches. Food-grade certified variants are available for the dairy, beverage, and pharmaceutical industries.",
      },
    ],
  },
  {
    id: 5,
    category: "Agriculture",
    title: "6 Tips to Choose the Right Quality of Agricultural Pipes & Fittings",
    excerpt:
      "Large and small farms need efficient water pipe fittings for consistent supply. Key factors include BIS certification, food-grade raw materials, and sourcing pipes and fittings from the same manufacturer for best compatibility. Raksha offers a complete range of BIS-certified agriculture pipes and fittings.",
    date: "10 Oct 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80",
    slug: "6-Tips-to-choose-the-right-quality-of-agricultural-pipes&fittings",
    author: "Raksha Agricultural Division",
    content: [
      {
        type: "intro",
        text: "Selecting the wrong agricultural pipes can lead to water loss, crop failure, and costly replacements. With dozens of pipe manufacturers in India's market, the choices can be overwhelming. Here are six essential tips to ensure you invest in pipes and fittings that will serve your farm reliably for decades.",
      },
      {
        type: "heading",
        text: "Tip 1: Always Verify BIS Certification",
      },
      {
        type: "paragraph",
        text: "The Bureau of Indian Standards (BIS) certification is your first assurance of quality. BIS-certified agricultural pipes conform to IS 4985 for uPVC pressure pipes and IS 12235 for uPVC fittings. These standards govern dimensions, pressure ratings, material composition, and testing requirements. Never compromise on this fundamental quality indicator.",
      },
      {
        type: "heading",
        text: "Tip 2: Insist on Food-Grade Raw Materials",
      },
      {
        type: "paragraph",
        text: "Since agricultural pipes carry water that eventually reaches your crops and enters the food chain, the materials must be safe. Ensure the manufacturer uses virgin, food-grade PVC resin with no lead stabilizers or recycled content. Raksha guarantees food-grade raw material in all its agricultural pipe products.",
      },
      {
        type: "heading",
        text: "Tip 3: Source Pipes and Fittings from the Same Manufacturer",
      },
      {
        type: "paragraph",
        text: "Mixing pipes and fittings from different manufacturers is one of the most common causes of agricultural system failures. Dimensional tolerances, material properties, and solvent cement compatibility vary between brands. Using a complete system from one trusted manufacturer ensures perfect fit, uniform performance, and a single point of warranty.",
      },
      {
        type: "heading",
        text: "Tip 4: Check Pressure Rating for Your Application",
      },
      {
        type: "paragraph",
        text: "Agricultural applications vary widely in pressure requirements. Gravity-fed systems need lower pressure ratings, while pump-fed systems may require Class 4, 6, or even Class 10 pipes. Always calculate your system's maximum operating pressure — including water hammer effects — and choose pipes rated comfortably above that value.",
      },
      {
        type: "heading",
        text: "Tip 5: Evaluate Pipe Wall Thickness",
      },
      {
        type: "paragraph",
        text: "Thicker walls mean better pressure capacity and longer life, especially in rocky or challenging soil conditions. Measure the wall thickness of sample pipes and compare with the manufacturer's specification sheet. Beware of undersized or lightweight pipes sold at attractive prices — they rarely last more than one or two seasons.",
      },
      {
        type: "heading",
        text: "Tip 6: Consider After-Sales Support and Availability",
      },
      {
        type: "paragraph",
        text: "The best pipe system is only as good as the support behind it. Choose a manufacturer with a strong distribution network in your region, readily available spare fittings, and responsive technical support. Raksha's dealer network covers all major agricultural districts across India, ensuring help is always close at hand.",
      },
      {
        type: "highlight",
        text: "Raksha offers a complete agricultural piping system — from uPVC pressure pipes to column pipes, drip fittings, and irrigation accessories — all BIS-certified and backed by 44 years of manufacturing expertise.",
      },
    ],
  },
  {
    id: 6,
    category: "Plumbing Tips",
    title: "Why Raksha CPVC Pipes Are Ideal for Hot & Cold Water Plumbing",
    excerpt:
      "Raksha CPVC pipes are manufactured using Copper Tube Sizes (CTS), making them easy replacements for copper and iron pipes. They are used for indoor and outdoor installations, water heaters, concealed pipelines, and residential and commercial buildings — all with potable water certification.",
    date: "05 Nov 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200&q=80",
    slug: "raksha-cpvc-pipes-hot-cold-water",
    author: "Raksha Technical Team",
    content: [
      {
        type: "intro",
        text: "When it comes to hot and cold water plumbing in modern buildings, CPVC (Chlorinated Polyvinyl Chloride) pipes have become the industry standard — replacing traditional copper and GI (Galvanized Iron) pipes. Raksha CPVC pipes, manufactured to Copper Tube Sizes (CTS), offer a seamless transition from metal to polymer plumbing.",
      },
      {
        type: "heading",
        text: "Copper Tube Size (CTS) Compatibility",
      },
      {
        type: "paragraph",
        text: "Raksha CPVC pipes are dimensioned to match standard copper tube outer diameters. This means they can be directly connected to existing copper systems without adapters in most cases, making upgrades or partial replacements straightforward and cost-effective for plumbers and contractors.",
      },
      {
        type: "heading",
        text: "Temperature Performance",
      },
      {
        type: "paragraph",
        text: "The single most important advantage of CPVC over standard uPVC is its heat resistance. Raksha CPVC pipes continuously handle water at temperatures up to 93°C — covering everything from domestic hot water taps (60°C) to solar water heater outlet lines (80°C). They will not soften, warp, or deform under normal hot water service conditions.",
      },
      {
        type: "heading",
        text: "Applications in Residential Buildings",
      },
      {
        type: "paragraph",
        text: "Within a typical home, Raksha CPVC pipes are used for bathroom and kitchen hot water supply lines, water heater connections, concealed plumbing within walls and slabs, overhead tank distribution networks, and boiler connections. Their smooth surface prevents scale buildup — a common problem with GI pipes that restricts flow over time.",
      },
      {
        type: "heading",
        text: "Commercial and Institutional Applications",
      },
      {
        type: "paragraph",
        text: "Hotels, hospitals, and commercial kitchens benefit enormously from CPVC's combination of heat resistance and hygiene. The pipes are NSF 61 certified for potable water contact — ensuring that water quality is not compromised even after decades of service. They are also used in fire sprinkler systems in lightweight construction.",
      },
      {
        type: "heading",
        text: "Installation Advantages",
      },
      {
        type: "paragraph",
        text: "CPVC solvent cement joining is faster and requires less skill than copper brazing. A standard 15mm joint can be made in under 60 seconds. Pipes can be cut with any standard saw and require no expensive tools. The lighter weight compared to copper dramatically reduces transportation and handling costs on large projects.",
      },
      {
        type: "highlight",
        text: "Raksha CPVC pipes conform to ASTM F441 and IS 15778:2007 standards. They carry NSF International certification for potable water safety — the same certification used by leading global brands.",
      },
    ],
  },
  {
    id: 7,
    category: "Construction",
    title: "Raksha SWR Pipes & Fittings: Lightweight Drainage for Every Climate",
    excerpt:
      "Raksha SWR (Soil, Waste & Rainwater) pipes are light in weight, easy to install, and engineered to withstand drastic climate conditions. Made from high-quality uPVC, they are chemical and corrosion resistant, making them ideal for sewerage and drainage in residential and commercial buildings.",
    date: "20 Nov 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
    slug: "raksha-swr-pipes-drainage",
    author: "Raksha Engineering Team",
    content: [
      {
        type: "intro",
        text: "Effective drainage is as important as water supply in any building. SWR (Soil, Waste & Rainwater) pipes handle everything from toilet waste to kitchen drainage to monsoon rainwater. Raksha's uPVC SWR pipe system is engineered to manage all three, offering a complete drainage solution for residential, commercial, and industrial buildings.",
      },
      {
        type: "heading",
        text: "What Makes SWR Pipes Different",
      },
      {
        type: "paragraph",
        text: "Unlike pressure pipes, SWR pipes are gravity-drain systems. They must maintain precise slopes, provide watertight joints to prevent gas leakage, and resist the aggressive chemical environment of sewage. Raksha SWR pipes use rubber ring push-fit joints that accommodate thermal expansion and minor misalignment — critical in tall buildings where thermal movement can be significant.",
      },
      {
        type: "heading",
        text: "Climate Resistance",
      },
      {
        type: "paragraph",
        text: "India's climate ranges from sub-zero temperatures in the Himalayas to extreme heat in Rajasthan and heavy monsoon rainfall along the coasts. Raksha SWR pipes are UV stabilized for outdoor installations, temperature-rated from -10°C to +60°C, and impact-modified to resist physical damage during installation and service.",
      },
      {
        type: "heading",
        text: "Weight Advantage in Multi-Storey Construction",
      },
      {
        type: "paragraph",
        text: "Traditional CI (Cast Iron) SWR pipes are heavy, difficult to handle, and prone to corrosion. Raksha uPVC SWR pipes weigh approximately one-fifth of equivalent CI pipes. This weight saving reduces structural loads, simplifies logistics on construction sites, and allows a two-person team to install what previously required cranes or heavy lifting equipment.",
      },
      {
        type: "heading",
        text: "Chemical and Corrosion Resistance",
      },
      {
        type: "paragraph",
        text: "Sewage is highly corrosive, containing acids, alkalis, hydrogen sulfide gas, and biological waste. Raksha uPVC SWR pipes are completely immune to this environment. Unlike CI pipes that rust and corrode from the inside, uPVC maintains its full flow capacity indefinitely — eliminating the costly pipe relining or replacement projects that plague older CI drainage systems.",
      },
      {
        type: "heading",
        text: "Complete Fitting Range",
      },
      {
        type: "paragraph",
        text: "A drainage system is only as good as its fittings. Raksha offers a comprehensive SWR fitting range including bends, tees, elbows, reducers, traps, inspection chambers, and rain water pipes — all in matching uPVC with rubber ring jointing. This ensures hydraulic compatibility and a truly complete system from a single source.",
      },
      {
        type: "highlight",
        text: "Raksha SWR pipes conform to IS 13592 specifications. The rubber ring joint system meets IS 5382 requirements for joint sealing performance — ensuring watertight drainage for the life of the building.",
      },
    ],
  },
  {
    id: 8,
    category: "Industry News",
    title: "Raksha Pipes: 44+ Years of Innovation in India's Piping Industry",
    excerpt:
      "Founded in 1977 by Mr. Shantilal Shand, Raksha Pipes revolutionised the plumbing industry by transitioning from rubber to plastic. Today, with 44+ years of experience, Raksha exports to Singapore, the Middle East, Europe, Russia, and Australia, upholding the promise of 'Raksha Jeevan Bhar Ki Suraksha'.",
    date: "10 Dec 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80",
    slug: "raksha-pipes-44-years-innovation",
    author: "Raksha Corporate Communications",
    content: [
      {
        type: "intro",
        text: "In 1977, when plastic pipes were still a novelty in India's construction industry, one visionary entrepreneur in Rajkot saw the future clearly. Mr. Shantilal Shand founded Raksha Pipes with a simple but powerful conviction: that plastic pipes would transform Indian plumbing, offering durability, hygiene, and affordability that traditional materials could never match.",
      },
      {
        type: "heading",
        text: "The Founding Vision",
      },
      {
        type: "paragraph",
        text: "India in 1977 was still heavily dependent on rubber, GI, and asbestos cement pipes. These materials were expensive, heavy, prone to corrosion, and often unsafe for potable water. Mr. Shand's decision to invest in PVC pipe manufacturing was considered bold — even risky — by industry peers. History has since proven him right.",
      },
      {
        type: "heading",
        text: "From Local to National",
      },
      {
        type: "paragraph",
        text: "The early years focused on serving Gujarat's construction and agriculture sectors. As quality became Raksha's hallmark, distributors from across India began seeking partnerships. Through the 1980s and 1990s, Raksha expanded its product range from basic PVC pipes to include uPVC, CPVC, SWR, HDPE, and specialized agricultural pipe systems.",
      },
      {
        type: "heading",
        text: "Technological Milestones",
      },
      {
        type: "paragraph",
        text: "Raksha was among the first Indian manufacturers to adopt CPVC technology, introducing hot water-capable pipes to a market that had long relied on costly copper. The company established its own R&D laboratory, allowing continuous product refinement based on real-world field data collected from thousands of installations nationwide.",
      },
      {
        type: "heading",
        text: "Going Global",
      },
      {
        type: "paragraph",
        text: "Today, Raksha pipes are exported to Singapore, the Middle East, Europe, Russia, and Australia. International markets demand compliance with global standards — and Raksha delivers, with pipes certified to ASTM, ISO, and BS standards in addition to Indian IS specifications. This global footprint reflects the world-class quality produced in Raksha's Rajkot facilities.",
      },
      {
        type: "heading",
        text: "The Promise That Endures",
      },
      {
        type: "paragraph",
        text: "'Raksha Jeevan Bhar Ki Suraksha' — Raksha's protection for life — is not just a tagline. It is a commitment embedded in every pipe that leaves the factory. With a design service life of 50 years, Raksha pipes are built to outlast the buildings they serve, providing safe water supply and drainage to generations of Indian families.",
      },
      {
        type: "highlight",
        text: "44+ years. Millions of installations. Five continents. One unwavering commitment: the highest quality pipes that protect India's water, homes, and farms — for life.",
      },
    ],
  },
  {
    id: 9,
    category: "Agriculture",
    title: "uPVC Column Pipes for Submersible Pumps: What Farmers Must Know",
    excerpt:
      "Raksha uPVC Column Pipes are specifically designed for submersible pump installations in borewells and tube wells. They are manufactured for consistent water supply in agriculture, offering high tensile strength, corrosion resistance, and long service life even in deep borewell conditions.",
    date: "28 Dec 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=1200&q=80",
    slug: "upvc-column-pipes-submersible-pumps",
    author: "Raksha Agricultural Division",
    content: [
      {
        type: "intro",
        text: "Across India's agricultural belts, millions of farmers rely on borewells and tube wells to supply water to their fields. The column pipe — the pipe that rises from the submersible pump at the bottom of the borewell to the surface — is one of the most critical and often overlooked components of the entire irrigation system.",
      },
      {
        type: "heading",
        text: "Why Column Pipes Are Critical",
      },
      {
        type: "paragraph",
        text: "Column pipes must support their own weight plus the weight of water they contain across depths ranging from 50 to 500+ feet. They must also withstand the vibration from submersible pump motors, the corrosive chemistry of deep groundwater, and the physical stresses of installation and retrieval using pipe clamps. Failure of a column pipe deep in a borewell can mean losing the pump entirely — an expensive disaster.",
      },
      {
        type: "heading",
        text: "The Tensile Strength Advantage of uPVC",
      },
      {
        type: "paragraph",
        text: "Raksha uPVC column pipes are manufactured with high tensile strength — capable of supporting their own weight even in deep borewell applications. The threaded joints are precision-machined to engage fully without stress concentration, preventing the joint failures that plague cheaper column pipe products. Each pipe undergoes hydrostatic pressure testing before dispatch.",
      },
      {
        type: "heading",
        text: "Corrosion Resistance in Deep Groundwater",
      },
      {
        type: "paragraph",
        text: "Groundwater in many agricultural regions contains dissolved iron, manganese, chlorides, and sulfates that are highly corrosive to metal pipes. MS (Mild Steel) column pipes commonly used in India corrode rapidly, reducing flow and contaminating water within a few seasons. Raksha uPVC column pipes are completely immune to groundwater chemistry — they will not rust, corrode, or impart taste or odor to water.",
      },
      {
        type: "heading",
        text: "Weight Benefits During Installation",
      },
      {
        type: "paragraph",
        text: "Installing column pipes in a 200-foot borewell with metal pipes requires heavy lifting equipment. Raksha uPVC column pipes weigh approximately one-fifth of equivalent MS pipes, allowing manual installation and retrieval with simple pipe clamp tools. This reduces installation costs significantly and makes maintenance and pump retrieval practical for farmers without access to heavy machinery.",
      },
      {
        type: "heading",
        text: "Food-Grade Water Safety",
      },
      {
        type: "paragraph",
        text: "Crops irrigated with contaminated water absorb those contaminants, which then enter the food supply. Raksha uPVC column pipes are manufactured using food-grade raw materials with no lead stabilizers or toxic additives. Water flowing through Raksha column pipes remains pure and safe — protecting both crop quality and human health.",
      },
      {
        type: "heading",
        text: "Choosing the Right Size",
      },
      {
        type: "paragraph",
        text: "Column pipe diameter must match the pump's discharge port and the required flow rate. Common sizes range from 1.5 inch to 4 inch for agricultural applications. The pipe pressure class must be selected based on borewell depth — deeper installations require higher class pipes to handle the weight of the water column. Raksha's technical team can help farmers choose the right specification for their borewell conditions.",
      },
      {
        type: "highlight",
        text: "Raksha uPVC Column Pipes are manufactured to IS 12818 specifications and are available in Class 2, Class 4, and Class 6 pressure ratings — covering borewells from 50 to 600 feet in depth.",
      },
    ],
  },
];

const CATEGORIES = ["All", "Plumbing Tips", "Industry News", "Agriculture", "Construction"];
const POSTS_PER_PAGE = 6;

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Open+Sans:wght@400;500;600&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

.rpb-page {
  font-family: 'Open Sans', sans-serif;
  color: #333333;
  background: #f4f4f4;
  min-height: 100vh;
}

/* HERO */
.rpb-hero {
  background: linear-gradient(120deg, #c0392b 0%, #96281b 55%, #7b1f15 100%);
  padding: 60px 0 80px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.rpb-hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 20% 50%, rgba(255,255,255,0.07) 0%, transparent 60%),
                    radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 40%);
  pointer-events: none;
}
.rpb-breadcrumb {
  font-size: 13px;
  color: rgba(255,255,255,0.7);
  margin-bottom: 16px;
  position: relative;
  z-index: 1;
}
.rpb-breadcrumb a {
  color: rgba(255,255,255,0.7);
  text-decoration: none;
  cursor: pointer;
}
.rpb-breadcrumb a:hover { color: #fff; }
.rpb-breadcrumb span { margin: 0 8px; }
.rpb-hero h1 {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.5px;
  margin-bottom: 12px;
  position: relative;
  z-index: 1;
}
.rpb-hero p {
  font-size: 15px;
  color: rgba(255,255,255,0.8);
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.7;
  position: relative;
  z-index: 1;
}

/* CONTAINER */
.rpb-container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px;
}

/* CATEGORY FILTER BAR */
.rpb-filter-bar {
  background: #ffffff;
  border-bottom: 1px solid #e5e5e5;
  box-shadow: 0 2px 10px rgba(0,0,0,0.07);
  position: sticky;
  top: 0;
  z-index: 200;
}
.rpb-filter-scroll {
  display: flex;
  overflow-x: auto;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
}
.rpb-filter-scroll::-webkit-scrollbar { display: none; }
.rpb-tab {
  font-family: 'Poppins', sans-serif;
  font-size: 13.5px;
  font-weight: 600;
  padding: 16px 26px;
  border: none;
  background: transparent;
  color: #666;
  cursor: pointer;
  white-space: nowrap;
  border-bottom: 3px solid transparent;
  transition: color 0.22s, border-color 0.22s, background 0.22s;
  letter-spacing: 0.2px;
}
.rpb-tab:hover { color: #c0392b; }
.rpb-tab.rpb-tab--active {
  color: #c0392b;
  border-bottom-color: #c0392b;
  background: rgba(192,57,43,0.04);
}

/* SEARCH BAR */
.rpb-search-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  padding: 28px 0 6px;
}
.rpb-search-box {
  display: flex;
  align-items: center;
  background: #fff;
  border: 1.5px solid #ddd;
  border-radius: 6px;
  overflow: hidden;
  min-width: 280px;
  max-width: 420px;
  flex: 1;
  box-shadow: 0 2px 8px rgba(0,0,0,0.055);
  transition: border-color 0.2s;
}
.rpb-search-box:focus-within { border-color: #c0392b; }
.rpb-search-box input {
  flex: 1;
  border: none;
  outline: none;
  padding: 11px 16px;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  color: #333;
  background: transparent;
}
.rpb-search-box input::placeholder { color: #aaa; }
.rpb-search-clear {
  background: transparent;
  border: none;
  padding: 0 10px;
  cursor: pointer;
  color: #aaa;
  font-size: 18px;
  line-height: 1;
  display: flex;
  align-items: center;
  transition: color 0.2s;
}
.rpb-search-clear:hover { color: #c0392b; }
.rpb-search-btn {
  background: #c0392b;
  border: none;
  padding: 11px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background 0.2s;
}
.rpb-search-btn:hover { background: #a93226; }
.rpb-search-btn svg { width: 18px; height: 18px; fill: #fff; display: block; }

/* ACTIVE SEARCH PILL */
.rpb-active-filter {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(192,57,43,0.1);
  color: #c0392b;
  font-family: 'Poppins', sans-serif;
  font-size: 12.5px;
  font-weight: 600;
  padding: 5px 10px 5px 12px;
  border-radius: 20px;
  border: 1px solid rgba(192,57,43,0.25);
  margin-bottom: 8px;
}
.rpb-active-filter button {
  background: transparent;
  border: none;
  cursor: pointer;
  color: #c0392b;
  font-size: 16px;
  line-height: 1;
  padding: 0;
  display: flex;
  align-items: center;
}
.rpb-active-filter button:hover { color: #96281b; }

/* RESULTS INFO */
.rpb-info {
  padding: 14px 0 24px;
  font-size: 13.5px;
  color: #888;
}
.rpb-info strong { color: #444; font-weight: 600; }

/* BLOG GRID */
.rpb-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px;
  padding-bottom: 44px;
}
@media (max-width: 980px) { .rpb-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 580px) { .rpb-grid { grid-template-columns: 1fr; } }

/* BLOG CARD */
.rpb-card {
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 14px rgba(0,0,0,0.07);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: rpbFadeUp 0.4s ease both;
}
.rpb-card:hover {
  transform: translateY(-7px);
  box-shadow: 0 14px 36px rgba(0,0,0,0.13);
}
@keyframes rpbFadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

.rpb-card-img {
  position: relative;
  height: 210px;
  overflow: hidden;
  background: #e8e8e8;
  flex-shrink: 0;
}
.rpb-card-img img {
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}
.rpb-card:hover .rpb-card-img img { transform: scale(1.07); }

.rpb-badge {
  position: absolute;
  top: 14px; left: 14px;
  background: #c0392b;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 10.5px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 3px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
}

.rpb-card-body {
  padding: 22px 22px 18px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.rpb-card-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #aaa;
  margin-bottom: 11px;
}
.rpb-card-meta svg { width: 13px; height: 13px; fill: #aaa; flex-shrink: 0; }

.rpb-card-title {
  font-family: 'Poppins', sans-serif;
  font-size: 15.5px;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.45;
  margin-bottom: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: color 0.2s;
}
.rpb-card:hover .rpb-card-title { color: #c0392b; }

.rpb-card-excerpt {
  font-size: 13.5px;
  color: #666;
  line-height: 1.7;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 20px;
}

.rpb-divider {
  height: 1px;
  background: #f0f0f0;
  margin-bottom: 16px;
}

.rpb-read-more {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #c0392b;
  text-decoration: none;
  letter-spacing: 0.2px;
  transition: gap 0.22s;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
}
.rpb-read-more:hover { gap: 12px; }
.rpb-read-more svg { width: 16px; height: 16px; fill: #c0392b; }

/* EMPTY STATE */
.rpb-empty {
  grid-column: 1 / -1;
  text-align: center;
  padding: 72px 20px;
  color: #aaa;
}
.rpb-empty svg { width: 52px; height: 52px; fill: #ddd; display: block; margin: 0 auto 16px; }
.rpb-empty h3 {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #555;
  margin-bottom: 8px;
}
.rpb-empty p { font-size: 14px; margin-bottom: 20px; }
.rpb-empty-reset {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #c0392b;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 600;
  padding: 10px 22px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
}
.rpb-empty-reset:hover { background: #a93226; }

/* PAGINATION */
.rpb-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 8px 0 56px;
}
.rpb-pg {
  min-width: 40px; height: 40px;
  padding: 0 10px;
  border-radius: 4px;
  border: 1.5px solid #ddd;
  background: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #555;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}
.rpb-pg:hover:not(:disabled) { border-color: #c0392b; color: #c0392b; background: rgba(192,57,43,0.05); }
.rpb-pg.rpb-pg--active { background: #c0392b; border-color: #c0392b; color: #fff; }
.rpb-pg:disabled { opacity: 0.3; cursor: not-allowed; }
.rpb-pg svg { width: 16px; height: 16px; fill: currentColor; display: block; }

/* NEWSLETTER */
.rpb-newsletter {
  background: linear-gradient(100deg, #fdfdfd 0%, #f7f7fa 100%);
  padding: 56px 0;
  text-align: center;
}
.rpb-newsletter h2 {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(20px, 3vw, 26px);
  font-weight: 700;
  color: #f73535;
  margin-bottom: 10px;
}
.rpb-newsletter p {
  font-size: 14.5px;
  color: rgb(5, 5, 5);
  margin-bottom: 28px;
}
.rpb-nl-form {
  display: flex;
  justify-content: center;
  max-width: 450px;
  margin: 0 auto;
}
.rpb-nl-form input {
  flex: 1;
  border: 1px solid #000;
  outline: none;
  padding: 13px 18px;
  font-size: 14px;
  border-radius: 4px 0 0 4px;
  font-family: 'Open Sans', sans-serif;
  background-color: #f3f4f6;
  color: #000;
}
.rpb-nl-form input::placeholder { color: #6b7280; }
.rpb-nl-form input.rpb-nl-error { border-color: #c0392b; }
.rpb-nl-form button {
  background: #c0392b;
  color: #ffffff;
  border: none;
  padding: 13px 26px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 0 4px 4px 0;
  transition: background 0.2s;
  white-space: nowrap;
}
.rpb-nl-form button:hover { background: #a93226; }
.rpb-nl-success {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #1a7a3c;
  background: #d4edda;
  border: 1px solid #b8dac5;
  border-radius: 6px;
  padding: 13px 24px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 600;
  max-width: 450px;
  margin: 0 auto;
}
.rpb-nl-success svg { width: 18px; height: 18px; fill: #1a7a3c; flex-shrink: 0; }
.rpb-nl-error-msg {
  font-size: 12.5px;
  color: #c0392b;
  margin-top: 7px;
  font-family: 'Open Sans', sans-serif;
}

/* BACK TO TOP */
.rpb-back-top {
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 999;
  background: #c0392b;
  color: #fff;
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 14px rgba(192,57,43,0.4);
  transition: background 0.2s, opacity 0.3s, transform 0.3s;
  opacity: 0;
  pointer-events: none;
  transform: translateY(12px);
}
.rpb-back-top.rpb-back-top--visible {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}
.rpb-back-top:hover { background: #a93226; }
.rpb-back-top svg { width: 20px; height: 20px; fill: #fff; }

/* ═══════════════════════════════════════════
   BLOG DETAIL PAGE
═══════════════════════════════════════════ */
.rbd-page {
  font-family: 'Open Sans', sans-serif;
  color: #333;
  background: #f4f4f4;
  min-height: 100vh;
  animation: rpbFadeUp 0.35s ease both;
}

/* Detail Hero */
.rbd-hero {
  position: relative;
  height: 460px;
  overflow: hidden;
  background: #1a1a1a;
}
.rbd-hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  opacity: 0.55;
}
.rbd-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.65) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 0 44px;
}
.rbd-hero-inner {
  max-width: 860px;
  margin: 0 auto;
  padding: 0 28px;
  width: 100%;
}
.rbd-hero-badge {
  display: inline-block;
  background: #c0392b;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 11px;
  font-weight: 700;
  padding: 5px 13px;
  border-radius: 3px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  margin-bottom: 16px;
}
.rbd-hero-title {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(22px, 3.5vw, 36px);
  font-weight: 800;
  color: #fff;
  line-height: 1.3;
  margin-bottom: 20px;
  letter-spacing: -0.3px;
}
.rbd-hero-meta {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}
.rbd-meta-item {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 13px;
  color: rgba(255,255,255,0.8);
}
.rbd-meta-item svg { width: 15px; height: 15px; fill: rgba(255,255,255,0.7); flex-shrink: 0; }

/* Back button */
.rbd-back-bar {
  background: #fff;
  border-bottom: 1px solid #eee;
  padding: 0;
}
.rbd-back-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #c0392b;
  background: none;
  border: none;
  cursor: pointer;
  padding: 14px 0;
  transition: gap 0.2s;
}
.rbd-back-btn:hover { gap: 12px; }
.rbd-back-btn svg { width: 18px; height: 18px; fill: #c0392b; }

/* Detail Layout */
.rbd-layout {
  max-width: 860px;
  margin: 0 auto;
  padding: 44px 28px 80px;
}

/* Content Blocks */
.rbd-intro {
  font-size: 17px;
  color: #444;
  line-height: 1.85;
  margin-bottom: 36px;
  font-style: italic;
  border-left: 4px solid #c0392b;
  padding-left: 20px;
}
.rbd-heading {
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 36px 0 14px;
  position: relative;
  padding-bottom: 10px;
}
.rbd-heading::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0;
  width: 40px; height: 3px;
  background: #c0392b;
  border-radius: 2px;
}
.rbd-paragraph {
  font-size: 15.5px;
  color: #555;
  line-height: 1.85;
  margin-bottom: 18px;
}
.rbd-highlight {
  background: linear-gradient(135deg, rgba(192,57,43,0.08) 0%, rgba(192,57,43,0.04) 100%);
  border: 1px solid rgba(192,57,43,0.2);
  border-left: 4px solid #c0392b;
  border-radius: 0 8px 8px 0;
  padding: 20px 24px;
  margin: 32px 0;
  font-size: 15px;
  color: #444;
  line-height: 1.75;
  font-weight: 500;
}

/* Related Posts */
.rbd-related {
  background: #fff;
  padding: 56px 0;
  border-top: 1px solid #eee;
}
.rbd-related-inner {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px;
}
.rbd-related h2 {
  font-family: 'Poppins', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 28px;
}
.rbd-related-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}
@media (max-width: 900px) { .rbd-related-grid { grid-template-columns: repeat(2,1fr); } }
@media (max-width: 560px) { .rbd-related-grid { grid-template-columns: 1fr; } }

.rbd-rel-card {
  background: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.25s, box-shadow 0.25s;
  border: 1px solid #eee;
}
.rbd-rel-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 28px rgba(0,0,0,0.1);
}
.rbd-rel-img {
  height: 150px;
  overflow: hidden;
}
.rbd-rel-img img {
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.35s;
}
.rbd-rel-card:hover .rbd-rel-img img { transform: scale(1.06); }
.rbd-rel-body {
  padding: 16px;
}
.rbd-rel-cat {
  font-family: 'Poppins', sans-serif;
  font-size: 10px;
  font-weight: 700;
  color: #c0392b;
  text-transform: uppercase;
  letter-spacing: 0.7px;
  margin-bottom: 7px;
}
.rbd-rel-title {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
  line-height: 1.45;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
`;

/* ── Icons ── */
const IconCalendar = () => (
  <svg viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5C3.9 3 3 3.9 3 5v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H5V8h14v13z"/></svg>
);
const IconClock = () => (
  <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm.01 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>
);
const IconUser = () => (
  <svg viewBox="0 0 24 24"><path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z"/></svg>
);
const IconArrow = () => (
  <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
);
const IconArrowLeft = () => (
  <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
);
const IconSearch = () => (
  <svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
);
const IconChevLeft = () => (
  <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
);
const IconChevRight = () => (
  <svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
);
const IconEmpty = () => (
  <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12zM7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/></svg>
);
const IconChevUp = () => (
  <svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>
);
const IconCheck = () => (
  <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
);

/* ── Blog Card ── */
function BlogCard({ post, index, onReadMore }) {
  return (
    <article className="rpb-card" style={{ animationDelay: `${index * 0.07}s` }}>
      <div className="rpb-card-img">
        <img src={post.image} alt={post.title} loading="lazy" />
        <span className="rpb-badge">{post.category}</span>
      </div>
      <div className="rpb-card-body">
        <div className="rpb-card-meta">
          <IconCalendar />
          {post.date}
        </div>
        <h3 className="rpb-card-title">{post.title}</h3>
        <p className="rpb-card-excerpt">{post.excerpt}</p>
        <div className="rpb-divider" />
        <button className="rpb-read-more" onClick={() => onReadMore(post)}>
          Read More <IconArrow />
        </button>
      </div>
    </article>
  );
}

/* ── Blog Detail Page ── */
function BlogDetail({ post, onBack }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [post]);

  const related = ALL_POSTS.filter(
    (p) => p.id !== post.id && p.category === post.category
  ).slice(0, 3);

  // Fill with other posts if not enough in same category
  const otherPosts = ALL_POSTS.filter(
    (p) => p.id !== post.id && p.category !== post.category
  );
  while (related.length < 3 && otherPosts.length > 0) {
    related.push(otherPosts.shift());
  }

  return (
    <div className="rbd-page">
      {/* Hero */}
      <div className="rbd-hero">
        <img src={post.image} alt={post.title} className="rbd-hero-img" />
        <div className="rbd-hero-overlay">
          <div className="rbd-hero-inner">
            <span className="rbd-hero-badge">{post.category}</span>
            <h1 className="rbd-hero-title">{post.title}</h1>
            <div className="rbd-hero-meta">
              <span className="rbd-meta-item"><IconCalendar />{post.date}</span>
              <span className="rbd-meta-item"><IconClock />{post.readTime}</span>
              <span className="rbd-meta-item"><IconUser />{post.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back button */}
      <div className="rbd-back-bar">
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 28px" }}>
          <button className="rbd-back-btn" onClick={onBack}>
            <IconArrowLeft /> Back to Blogs
          </button>
        </div>
      </div>

      {/* Article Content */}
      <div className="rbd-layout">
        {post.content.map((block, i) => {
          if (block.type === "intro") return <p key={i} className="rbd-intro">{block.text}</p>;
          if (block.type === "heading") return <h2 key={i} className="rbd-heading">{block.text}</h2>;
          if (block.type === "paragraph") return <p key={i} className="rbd-paragraph">{block.text}</p>;
          if (block.type === "highlight") return (
            <div key={i} className="rbd-highlight">{block.text}</div>
          );
          return null;
        })}
      </div>

      {/* Related Posts */}
      {related.length > 0 && (
        <div className="rbd-related">
          <div className="rbd-related-inner">
            <h2>Related Articles</h2>
            <div className="rbd-related-grid">
              {related.map((rp) => (
                <div key={rp.id} className="rbd-rel-card" onClick={() => onBack(rp)}>
                  <div className="rbd-rel-img">
                    <img src={rp.image} alt={rp.title} loading="lazy" />
                  </div>
                  <div className="rbd-rel-body">
                    <div className="rbd-rel-cat">{rp.category}</div>
                    <div className="rbd-rel-title">{rp.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Main Blog List Page ── */
function BlogList({ onReadMore }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchInput, setSearchInput]       = useState("");
  const [searchQuery, setSearchQuery]       = useState("");
  const [currentPage, setCurrentPage]       = useState(1);
  const [email, setEmail]                   = useState("");
  const [emailError, setEmailError]         = useState("");
  const [subscribed, setSubscribed]         = useState(false);
  const [showBackTop, setShowBackTop]       = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setShowBackTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filtered = ALL_POSTS.filter((p) => {
    const catOk  = activeCategory === "All" || p.category === activeCategory;
    const q      = searchQuery.toLowerCase().trim();
    const srchOk = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
    return catOk && srchOk;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
  const paginated  = filtered.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  const changeCategory = (cat) => { setActiveCategory(cat); setCurrentPage(1); };
  const doSearch = () => { setSearchQuery(searchInput.trim()); setCurrentPage(1); };
  const clearSearch = () => { setSearchInput(""); setSearchQuery(""); setCurrentPage(1); };
  const resetAll = () => { clearSearch(); setActiveCategory("All"); };
  const changePage = (pg) => {
    setCurrentPage(pg);
    if (gridRef.current) gridRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleSubscribe = () => {
    const trimmed = email.trim();
    if (!trimmed) { setEmailError("Please enter your email address."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) { setEmailError("Please enter a valid email address."); return; }
    setEmailError(""); setSubscribed(true);
  };

  return (
    <>
      <div className="rpb-page">
        {/* HERO */}
        <section className="rpb-hero">
          <div className="rpb-container">
            <p className="rpb-breadcrumb">
              <a href="/">Home</a><span>›</span><span>Blogs</span>
            </p>
            <h1>Blogs &amp; Articles</h1>
            <p>Expert tips on CPVC, uPVC, SWR, and HDPE pipes — installation guides, agriculture solutions, and industry news from Raksha Pipes, India's trusted pipe manufacturer since 1977.</p>
          </div>
        </section>

        {/* CATEGORY TABS */}
        <div className="rpb-filter-bar" role="navigation" aria-label="Blog categories">
          <div className="rpb-container">
            <div className="rpb-filter-scroll">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`rpb-tab${activeCategory === cat ? " rpb-tab--active" : ""}`}
                  onClick={() => changeCategory(cat)}
                  aria-pressed={activeCategory === cat}
                >{cat}</button>
              ))}
            </div>
          </div>
        </div>

        {/* SEARCH + INFO */}
        <div className="rpb-container">
          <div className="rpb-search-row">
            <div className="rpb-search-box" role="search">
              <input
                type="text"
                placeholder="Search articles…"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && doSearch()}
                aria-label="Search blog articles"
              />
              {searchInput && (
                <button className="rpb-search-clear" onClick={clearSearch} aria-label="Clear search">×</button>
              )}
              <button className="rpb-search-btn" onClick={doSearch} aria-label="Search"><IconSearch /></button>
            </div>
          </div>

          {searchQuery && (
            <div>
              <span className="rpb-active-filter">
                Searching: "{searchQuery}"
                <button onClick={clearSearch}>×</button>
              </span>
            </div>
          )}

          <p className="rpb-info" aria-live="polite">
            Showing <strong>{filtered.length}</strong> {filtered.length === 1 ? "article" : "articles"}
            {activeCategory !== "All" && <> in &ldquo;{activeCategory}&rdquo;</>}
            {searchQuery && <> matching &ldquo;{searchQuery}&rdquo;</>}
          </p>

          {/* GRID */}
          <div className="rpb-grid" ref={gridRef}>
            {paginated.length > 0 ? (
              paginated.map((post, i) => (
                <BlogCard key={post.id} post={post} index={i} onReadMore={onReadMore} />
              ))
            ) : (
              <div className="rpb-empty" role="status">
                <IconEmpty />
                <h3>No articles found</h3>
                <p>Try a different keyword or browse all categories.</p>
                <button className="rpb-empty-reset" onClick={resetAll}>Clear all filters</button>
              </div>
            )}
          </div>

          {/* PAGINATION */}
          {totalPages > 1 && (
            <nav className="rpb-pagination" aria-label="Blog pagination">
              <button className="rpb-pg" onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1} aria-label="Previous page"><IconChevLeft /></button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => (
                <button
                  key={pg}
                  className={`rpb-pg${currentPage === pg ? " rpb-pg--active" : ""}`}
                  onClick={() => changePage(pg)}
                  aria-current={currentPage === pg ? "page" : undefined}
                >{pg}</button>
              ))}
              <button className="rpb-pg" onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages} aria-label="Next page"><IconChevRight /></button>
            </nav>
          )}
        </div>

        {/* NEWSLETTER */}
        <section className="rpb-newsletter" aria-label="Newsletter signup">
          <div className="rpb-container">
            <h2>Stay Updated with Raksha Pipes</h2>
            <p>Subscribe for the latest pipe care tips, product launches, BIS updates, and agriculture solutions — delivered straight to your inbox.</p>
            {subscribed ? (
              <div className="rpb-nl-success" role="status"><IconCheck />Thank you! You're now subscribed.</div>
            ) : (
              <>
                <div className="rpb-nl-form">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setEmailError(""); }}
                    onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                    className={emailError ? "rpb-nl-error" : ""}
                    aria-label="Email address for newsletter"
                  />
                  <button type="button" onClick={handleSubscribe}>Subscribe</button>
                </div>
                {emailError && <p className="rpb-nl-error-msg" role="alert">{emailError}</p>}
              </>
            )}
          </div>
        </section>
      </div>

      {/* BACK TO TOP */}
      <button
        className={`rpb-back-top${showBackTop ? " rpb-back-top--visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <IconChevUp />
      </button>
    </>
  );
}

/* ── Root Component with Router Logic ── */
export default function Blog() {
  const [activePage, setActivePage] = useState("list"); // "list" | "detail"
  const [selectedPost, setSelectedPost] = useState(null);

  const handleReadMore = (post) => {
    setSelectedPost(post);
    setActivePage("detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = (post) => {
    if (post && post.id) {
      // Clicked a related post
      setSelectedPost(post);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setActivePage("list");
      setSelectedPost(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <style>{CSS}</style>
      {activePage === "list" ? (
        <BlogList onReadMore={handleReadMore} />
      ) : (
        <BlogDetail post={selectedPost} onBack={handleBack} />
      )}
    </>
  );
}