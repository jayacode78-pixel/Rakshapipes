// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";


// // ✅ Import banner images (from your PC)
// import ptmtBanner from "../assets/images/ptmt.jpg";
// import pipesBanner from "../assets/images/Pipes_and_Fittings.jpg";
// import sinkBanner from "../assets/images/SinksImage.jpg";
// import tankBanner from "../assets/images/water-tank.jpg";
// import bathroomBanner from "../assets/images/bathroomAccessories.jpg";
// import frpBanner from "../assets/images/frp_manhole_cover.jpg";

// export default function ProductList() {
//   const { category } = useParams();

//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // Filters
//   const [type, setType] = useState("");
//   const [series, setSeries] = useState("");
//   const [color, setColor] = useState("");

//   // ✅ Normalize category
//   const formattedCategory = category
//     ?.toLowerCase()
//     .replace(/_/g, "-")
//     .trim();

//   // ✅ Local banner mapping
//   const banners = {
//     ptmt: ptmtBanner,
//     "pipes-and-fittings": pipesBanner,
//     "kitchen-sinks": sinkBanner,
//     "water-tank": tankBanner,
//     "bathroom-accessories": bathroomBanner,
//     "frp-manhole-cover": frpBanner,
//   };

//   // ✅ Fallback banner
//   const bannerImage =
//     banners[formattedCategory] ||
//     "https://via.placeholder.com/1200x300?text=Category+Banner";

//   // 🔥 Fetch products
//   useEffect(() => {
//     setLoading(true);

//     axios
//       .get("http://localhost:5000/api/products", {
//         params: {
//           category: formattedCategory,
//           type,
//           series,
//           color,
//         },
//       })
//       .then((res) => setProducts(res.data))
//       .catch((err) => console.log(err))
//       .finally(() => setLoading(false));
//   }, [formattedCategory, type, series, color]);

//   return (
//     <div>
//       {/* 🔥 BANNER */}
//       <div
//         style={{
//           height: "80vh",
//           width: "100%",
//           backgroundImage: `url(${bannerImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           color: "#fff",
//           fontSize: "32px",
//           fontWeight: "bold",
//         }}
//       >
//         {formattedCategory?.replace(/-/g, " ").toUpperCase()}
//       </div>

//       {/* 🔥 MAIN LAYOUT */}
//       <div style={{ display: "flex" }}>
//         {/* 🔥 SIDEBAR */}
//         <div
//           style={{
//             width: "250px",
//             padding: "20px",
//             borderRight: "1px solid #ddd",
//           }}
//         >
//           <h3>Filters</h3>

//           <label>Type</label>
//           <select
//             style={{ width: "100%", marginBottom: "10px" }}
//             onChange={(e) => setType(e.target.value)}
//           >
//             <option value="">All</option>
//             <option value="angle cock">Angle Cock</option>
//             <option value="bib cock">Bib Cock</option>
//           </select>

//           <label>Series</label>
//           <select
//             style={{ width: "100%", marginBottom: "10px" }}
//             onChange={(e) => setSeries(e.target.value)}
//           >
//             <option value="">All</option>
//             <option value="royal">Royal</option>
//             <option value="emerald">Emerald</option>
//             <option value="jade">Jade</option>
//             <option value="galaxy">Galaxy</option>
//             <option value="ruby">Ruby</option>
//             <option value="woodlite">Woodlite</option>
//             <option value="aqua">Aqua</option>
//             <option value="silver">Silver</option>
//             <option value="diamon">Diamond</option>
//             <option value="standard">Standard</option>
//             <option value="gold">Gold</option>
//              <option value="superb">Superb</option>
//               <option value="sona">Sona</option>


            
            
//           </select>

//           <label>Color</label>
//           <select
//             style={{ width: "100%" }}
//             onChange={(e) => setColor(e.target.value)}
//           >
//             <option value="">All</option>
//             <option value="white">White</option>
//             <option value="black">Black</option>
//           </select>
//         </div>







//         {/* 🔥 PRODUCTS GRID */}
//         <div
//   style={{
//     flex: 1,
//     padding: "20px",
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
//     gap: "20px",
//   }}
// >
//           {loading && <p>Loading...</p>}

//           {!loading && products.length === 0 && (
//             <p>No products found</p>
//           )}






//     {products.map((item) => (
//   <div
//     key={item._id}
//     style={{
//       border: "1px solid #e5e5e5",
//       borderRadius: "12px",
//       overflow: "hidden",
//       background: "#fff",
//       height: "320px",
//       display: "flex",
//       flexDirection: "column",
//       transition: "0.2s",
//       cursor: "pointer",
//     }}
//     onMouseOver={(e) => {
//       e.currentTarget.style.transform = "scale(1.02)";
//       e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.1)";
//     }}
//     onMouseOut={(e) => {
//       e.currentTarget.style.transform = "scale(1)";
//       e.currentTarget.style.boxShadow = "none";
//     }}
//   >
//     {/* IMAGE BOX */}
//     <div
//       style={{
//         width: "100%",
//         height: "350px",
//         overflow: "hidden",
//         background: "#f5f5f5",
//       }}
//     >
//       <img
//         src={item.image}
//         alt={item.name}
//         style={{
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//         }}
//       />
//     </div>

//     {/* CONTENT */}
//  {/* CONTENT */}
// <div style={{ padding: "10px", flex: 1 }}>
//   {/* <h4 style={{ margin: "0", fontSize: "14px" }}>
//     {item.name}
//   </h4> */}

//   {/* model number */}
//   {/* <p style={{ fontSize: "12px", color: "#555", marginTop: "5px" }}>
//    {item.modelNumber}
//   </p> */}
//   <h4 style={{ margin: "0", fontSize: "14px" }}>
//    {item.modelNumber}
//   </h4>

//   {/* description */}
//   <p style={{ fontSize: "12px", color: "#777", marginTop: "5px" }}>
//     {item.description}
//   </p>

//   {/* <p style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>
//     {item.series} | {item.type}
//   </p> */}
// </div>
//   </div>
// ))}




//         </div>
//       </div>
//     </div>
//   );
// }











// ################################################################################################







// import { useParams } from "react-router-dom";
// import { useEffect, useState, useRef, useMemo } from "react";
// import axios from "axios";

// // Banners
// import ptmtBanner from "../assets/images/ptmt.jpg";
// import pipesBanner from "../assets/images/Pipes_and_Fittings.jpg";
// import sinkBanner from "../assets/images/SinksImage.jpg";
// import tankBanner from "../assets/images/water-tank.jpg";
// import bathroomBanner from "../assets/images/bathroomAccessories.jpg";
// import frpBanner from "../assets/images/frp_manhole_cover.jpg";

// export default function ProductList() {
//   const { category } = useParams();

//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const [filters, setFilters] = useState({
//     type: "",
//     series: "",
//     subSeries: "",
//     color: "",
//   });

//   const [open, setOpen] = useState(false);
//   const [hoverSeries, setHoverSeries] = useState("");

//   const dropdownRef = useRef(null);

//   // ✅ stable reference
//   const seriesData = useMemo(
//     () => ({
//       royal: ["Royal-1", "Royal-2", "Royal-3"],
//       emerald: ["Emerald-1", "Emerald-2", "Emerald-3", "Emerald-4"],
//       jade: ["Jade-1", "Jade-2"],
//       galaxy: ["Galaxy-1", "Galaxy-2"],
//       ruby: ["Ruby-1"],
//       woodlite: ["Woodlite-1"],
//       aqua: ["Aqua-1"],
//       silver: ["Silver-1"],
//       diamond: ["Diamond-1"],
//       standard: ["Standard-1"],
//       gold: ["Gold-1"],
//       superb: ["Superb-1"],
//       sona: ["Sona-1"],
//     }),
//     []
//   );

//   const formattedCategory = category?.toLowerCase().replace(/_/g, "-").trim();

//   const banners = {
//     ptmt: ptmtBanner,
//     "pipes-and-fittings": pipesBanner,
//     "kitchen-sinks": sinkBanner,
//     "water-tank": tankBanner,
//     "bathroom-accessories": bathroomBanner,
//     "frp-manhole-cover": frpBanner,
//   };

//   const bannerImage =
//     banners[formattedCategory] ||
//     "https://via.placeholder.com/1200x300?text=Category";

//   // close dropdown outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // fetch products
//   useEffect(() => {
//     setLoading(true);

//     axios
//       .get("http://localhost:5000/api/products", {
//         params: {
//           category: formattedCategory,
//           type: filters.type,
//           series: filters.series,
//           color: filters.color,
//         },
//       })
//       .then((res) => setProducts(res.data))
//       .catch(console.log)
//       .finally(() => setLoading(false));
//   }, [formattedCategory, filters]);

//   return (
//     <div>
//       {/* BANNER */}
//       <div
//         style={{
//           height: "70vh",
//           backgroundImage: `url(${bannerImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           color: "#fff",
//           fontSize: "30px",
//           fontWeight: "bold",
//           textShadow: "0 2px 10px rgba(0,0,0,0.5)",
//         }}
//       >
//         {formattedCategory?.replace(/-/g, " ").toUpperCase()}
//       </div>

//       <div style={{ display: "flex" }}>
//         {/* SIDEBAR */}
//         <div
//           style={{
//             width: "260px",
//             padding: "20px",
//             borderRight: "1px solid #eee",
//             background: "#fafafa",
//           }}
//         >
//           <h3>Filters</h3>

//           {/* TYPE */}
//           <label>Type</label>
//           <select
//             style={{ width: "100%", padding: "8px", marginBottom: "15px" }}
//             onChange={(e) =>
//               setFilters((p) => ({ ...p, type: e.target.value }))
//             }
//           >
//             <option value="">All</option>
//             <option value="angle cock">Angle Cock</option>
//             <option value="bib cock">Bib Cock</option>
//           </select>

//           {/* SERIES DROPDOWN */}
//          {/* SERIES DROPDOWN */}
// <div ref={dropdownRef} style={{ position: "relative" }}>
//   <label>Series</label>

//   <div
//     onClick={() => setOpen((p) => !p)}
//     style={{
//       padding: "10px",
//       border: "1px solid #ccc",
//       borderRadius: "6px",
//       cursor: "pointer",
//       background: "#fff",
//     }}
//   >
//     {filters.series ? filters.series.toUpperCase() : "Select Series"}
//   </div>

//   {open && (
//     <div
//       style={{
//         position: "absolute",
//         bottom: "100%",   // ✅ OPEN UPWARD
//         left: 0,
//         width: "340px",
//         display: "flex",
//         background: "#fff",
//         border: "1px solid #ddd",
//         borderRadius: "10px",
//         boxShadow: "0 -10px 25px rgba(0,0,0,0.1)",
//         zIndex: 1000,
//         marginBottom: "8px", // spacing from input
//       }}
//     >
//       {/* LEFT */}
//       <div
//         style={{
//           width: "50%",
//           maxHeight: "250px",
//           overflowY: "auto",
//         }}
//       >
//         {Object.keys(seriesData).map((key) => (
//           <div
//             key={key}
//             onMouseEnter={() => setHoverSeries(key)}
//             onClick={() =>
//               setFilters((p) => ({
//                 ...p,
//                 series: key,
//                 subSeries: "",
//               }))
//             }
//             style={{
//               padding: "12px",
//               cursor: "pointer",
//               background: hoverSeries === key ? "#888" : "transparent",
//               fontWeight: 500,
//               fontSize: "13px",
//             }}
//           >
//             {key.toUpperCase()}
//           </div>
//         ))}
//       </div>

//       {/* RIGHT */}
//       <div
//         style={{
//           width: "50%",
//           padding: "10px",
//           maxHeight: "250px",
//           overflowY: "auto",
//         }}
//       >
//         {hoverSeries ? (
//           seriesData[hoverSeries].map((sub) => (
//             <div
//               key={sub}
//               onClick={() => {
//                 setFilters((p) => ({
//                   ...p,
//                   series: hoverSeries,
//                   subSeries: sub,
//                 }));
//                 setOpen(false);
//               }}
//               style={{
//                 padding: "8px",
//                 cursor: "pointer",
//                 borderBottom: "1px solid #f0f0f0",
//                 fontSize: "13px",
//               }}
//             >
//               {sub}
//             </div>
//           ))
//         ) : (
//           <p style={{ fontSize: "12px", color: "#888" }}>
//             Hover a series
//           </p>
//         )}
//       </div>
//     </div>
//   )}
// </div>

//           {/* COLOR */}
//           <label style={{ marginTop: "15px", display: "block" }}>
//             Color
//           </label>
//           <select
//             style={{ width: "100%", padding: "8px" }}
//             onChange={(e) =>
//               setFilters((p) => ({ ...p, color: e.target.value }))
//             }
//           >
//             <option value="">All</option>
//             <option value="white">White</option>
//             <option value="black">Black</option>
//           </select>
//         </div>

//         {/* PRODUCTS */}
//         <div
//           style={{
//             flex: 1,
//             padding: "20px",
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
//             gap: "20px",
//           }}
//         >
//           {loading && <p>Loading products...</p>}

//           {!loading && products.length === 0 && (
//             <p style={{ color: "#888" }}>No products found</p>
//           )}

//           {products.map((item) => (
//             <div
//               key={item._id}
//               style={{
//                 border: "1px solid #eee",
//                 borderRadius: "12px",
//                 overflow: "hidden",
//                 background: "#fff",
//                 cursor: "pointer",
//               }}
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 style={{ width: "100%", height: "200px", objectFit: "cover" }}
//               />
//               <div style={{ padding: "10px" }}>
//                 <h4 style={{ fontSize: "14px" }}>{item.modelNumber}</h4>
//                 <p style={{ fontSize: "12px", color: "#777" }}>
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }













// ####################################################################################################







// *************************  code kam kr rha hai ******************************************






// import { useParams } from "react-router-dom";
// import { useEffect, useState, useMemo, useRef } from "react";
// import axios from "axios";

// // Banners
// import ptmtBanner from "../assets/images/ptmt.jpg";
// import pipesBanner from "../assets/images/Pipes_and_Fittings.jpg";
// import sinkBanner from "../assets/images/SinksImage.jpg";
// import tankBanner from "../assets/images/water-tank.jpg";
// import bathroomBanner from "../assets/images/bathroomAccessories.jpg";
// import frpBanner from "../assets/images/frp_manhole_cover.jpg";


// // =========================
// // PRODUCT CARD
// // =========================
// function ProductCard({ item, selectedSubType }) {
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   useEffect(() => {
//     if (selectedSubType) {
//       const index = item.variants?.findIndex(
//         (v) => v.subType === selectedSubType
//       );
//       setSelectedIndex(index !== -1 ? index : 0);
//     } else {
//       setSelectedIndex(0);
//     }
//   }, [selectedSubType, item]);

//   const selectedVariant = item.variants?.[selectedIndex];

//   return (
//     <div style={{
//       border: "1px solid #eee",
//       borderRadius: "12px",
//       background: "#fff",
//       overflow: "hidden"
//     }}>
//       <img
//         src={selectedVariant?.image || "https://via.placeholder.com/200"}
//         style={{ width: "100%", height: "200px", objectFit: "contain" }}
//         alt=""
//       />

//       <div style={{ padding: "10px" }}>
//         <h4>{item.modelNumber}</h4>

//         <p style={{ fontSize: "12px", color: "#777", marginTop: "5px" }}>
//           {item.description}
//         </p>
//       </div>
//     </div>
//   );
// }


// // =========================
// // MAIN COMPONENT
// // =========================
// export default function ProductList() {
//   const { category } = useParams();

//   const [products, setProducts] = useState([]);

//   const [filters, setFilters] = useState({
//     type: "",
//     parentSeries: "",
//     subSeries: "",
//   });

//   const [hoverSeries, setHoverSeries] = useState("");
//   const [openSeries, setOpenSeries] = useState(false);

//   const dropdownRef = useRef();

//   // =========================
//   // SERIES DATA (UNCHANGED)
//   // =========================
//   const seriesData = useMemo(() => ({
//     royal: ["royal","royal elite", "royal green"],
//     emerald: ["emerald","emerald plus", "emerald elite"],
//     jade: ["jade","jade plus","jade elite"],
//     galaxy: ["galaxy", "galaxy elite"],
//     ruby: ["ruby"],
//     woodlite: ["woodlite-1"],
//     aqua: ["aqua-1"],
//     silver: ["silver-1"],
//     diamon: ["diamond-1"],
//     standard: ["standard-1"],
//     gold: ["gold-1"],
//     superb: ["superb-1"],
//     sona: ["sona-1"]
//   }), []);

//   const formattedCategory = category?.toLowerCase().replace(/_/g, "-");

//   const banners = {
//     ptmt: ptmtBanner,
//     "pipes-and-fittings": pipesBanner,
//     "kitchen-sinks": sinkBanner,
//     "water-tank": tankBanner,
//     "bathroom-accessories": bathroomBanner,
//     "frp-manhole-cover": frpBanner,
//   };

//   const bannerImage = banners[formattedCategory];

//   // CLOSE OUTSIDE CLICK
//   useEffect(() => {
//     const handleClick = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setOpenSeries(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClick);
//     return () => document.removeEventListener("mousedown", handleClick);
//   }, []);

//   // FETCH
//   useEffect(() => {
//     axios.get("http://localhost:5000/api/products", {
//       params: {
//         category: formattedCategory,
//         type: filters.type || undefined,
//         parentSeries: filters.parentSeries || undefined,
//         subType: filters.subSeries || undefined,
//       },
//     })
//       .then(res => setProducts(res.data))
//       .catch(console.log);
//   }, [formattedCategory, filters]);

//   return (
//     <div>

//       {/* BANNER */}
//       <div
//         style={{
//           height: "80vh",
//           width: "100%",
//           backgroundImage: `url(${bannerImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           color: "#fff",
//           fontSize: "32px",
//           fontWeight: "bold",
//         }}
//       >
//         {formattedCategory?.replace(/-/g, " ").toUpperCase()}
//       </div>

//       <div style={{ display: "flex" }}>

//         {/* SIDEBAR */}
//         <div style={{
//           width: "260px",
//           padding: "20px",
//           borderRight: "1px solid #eee",
//           background: "#fafafa",
//         }}>

//           <h3>Filters</h3>

//           {/* TYPE */}
//           <div style={{ marginBottom: "20px" }}>
//             <strong>Type</strong>

//             {["angle cock", "bib cock"].map((t) => (
//               <div key={t}>
//                 <input
//                   type="radio"
//                   checked={filters.type === t}
//                   onChange={() =>
//                     setFilters(p => ({ ...p, type: t }))
//                   }
//                 />
//                 <label style={{ marginLeft: "5px" }}>{t}</label>
//               </div>
//             ))}
//           </div>

//           {/* =========================
//               SERIES DROPDOWN (FIXED UX)
//           ========================= */}
//           <div ref={dropdownRef}>
//             <strong>Series</strong>

//             <div
//               onClick={() => setOpenSeries(p => !p)}
//               style={{
//                 marginTop: "8px",
//                 padding: "10px",
//                 border: "1px solid #ccc",
//                 background: "#fff",
//                 cursor: "pointer",
//                 borderRadius: "6px"
//               }}
//             >
//               {filters.subSeries || filters.parentSeries || "Select Series"}
//             </div>

//             {openSeries && (
//               <div style={{
//                 display: "flex",
//                 marginTop: "8px",
//                 background: "#fff",
//                 border: "1px solid #ddd",
//                 borderRadius: "10px",
//                 boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//                 overflow: "hidden",
//                 height: "320px" // 🔥 fixed height
//               }}>

//                 {/* LEFT */}
//                 <div style={{
//                   width: "50%",
//                   overflowY: "auto",
//                   borderRight: "1px solid #eee"
//                 }}>
//                   {Object.keys(seriesData).map(series => (
//                     <div
//                       key={series}
//                       onMouseEnter={() => setHoverSeries(series)}
//                       onClick={() =>
//                         setFilters(p => ({
//                           ...p,
//                           parentSeries: series,
//                           subSeries: ""
//                         }))
//                       }
//                       style={{
//                         padding: "10px",
//                         cursor: "pointer",
//                         background:
//                           filters.parentSeries === series ? "#f2f2f2" : "#fff"
//                       }}
//                     >
//                       {series.toUpperCase()}
//                     </div>
//                   ))}
//                 </div>

//                 {/* RIGHT */}
//                 <div style={{
//                   width: "50%",
//                   overflowY: "auto",
//                   background: "#fafafa"
//                 }}>
//                   {hoverSeries ? (
//                     seriesData[hoverSeries].map(sub => (
//                       <div
//                         key={sub}
//                         onClick={() => {
//                           setFilters(p => ({
//                             ...p,
//                             subSeries: sub
//                           }));
//                           setOpenSeries(false);
//                         }}
//                         style={{
//                           padding: "10px",
//                           cursor: "pointer",
//                           background:
//                             filters.subSeries === sub ? "#ddd" : "transparent"
//                         }}
//                       >
//                         {sub}
//                       </div>
//                     ))
//                   ) : (
//                     <div style={{ padding: "10px", color: "#888" }}>
//                       Hover a series
//                     </div>
//                   )}
//                 </div>

//               </div>
//             )}
//           </div>

//           {/* RESET */}
//           <button
//             style={{ marginTop: "20px" }}
//             onClick={() =>
//               setFilters({
//                 type: "",
//                 parentSeries: "",
//                 subSeries: "",
//               })
//             }
//           >
//             Reset Filters
//           </button>

//         </div>

//         {/* PRODUCTS */}
//         <div style={{
//           flex: 1,
//           padding: "20px",
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
//           gap: "20px",
//         }}>
//           {products.map(item => (
//             <ProductCard
//               key={item._id}
//               item={item}
//               selectedSubType={filters.subSeries}
//             />
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }



// *************************  code kam kr rha hai ******************************************






// import { useParams } from "react-router-dom";
// import { useEffect, useState, useMemo } from "react";
// import axios from "axios";


// // Banners
// import ptmtBanner from "../assets/images/ptmt.jpg";
// import pipesBanner from "../assets/images/Pipes_and_Fittings.jpg";
// import sinkBanner from "../assets/images/SinksImage.jpg";
// import tankBanner from "../assets/images/water-tank.jpg";
// import bathroomBanner from "../assets/images/bathroomAccessories.jpg";
// import frpBanner from "../assets/images/frp_manhole_cover.jpg";


// // =========================
// // COLLAGE
// // =========================
// function Collage({ products, loading, selectedSubType }) {
//   const [columns, setColumns] = useState(4);

//   useEffect(() => {
//     const updateColumns = () => {
//       if (window.innerWidth < 480) setColumns(2);
//       else if (window.innerWidth < 768) setColumns(3);
//       else if (window.innerWidth < 1200) setColumns(4);
//       else setColumns(5);
//     };
//     updateColumns();
//     window.addEventListener("resize", updateColumns);
//     return () => window.removeEventListener("resize", updateColumns);
//   }, []);

//   if (loading) return (
//     <div style={{
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       height: "300px",
//       fontSize: "14px",
//       color: "#adadad",
//       letterSpacing: "0.08em",
//       fontFamily: "sans-serif"
//     }}>
//       Loading products...
//     </div>
//   );

//   if (!products.length) return (
//     <div style={{
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       height: "200px",
//       fontSize: "14px",
//       color: "#ff0000",
//       fontFamily: "sans-serif"
//     }}>
//       No products found 😕
//     </div>
//   );

//   const heightMap = [160, 200, 180, 220, 170, 210, 190, 175, 205, 185];

//   const accentColors = [
//     "#c9b99a", "#a8b5a2", "#b5a8a8", "#9fafa8",
//     "#bfb09a", "#a9a0b5", "#b0bab5", "#c4b0a0"
//   ];

//   return (
//     <>
//       <style>{`
//         .collage-card .collage-overlay {
//           opacity: 0;
//           transition: opacity 0.35s ease;
//         }
//         .collage-card:hover .collage-overlay {
//           opacity: 1;
//         }
//         .collage-card img {
//           transition: transform 0.5s ease, filter 0.5s ease;
//           filter: brightness(0.96) saturate(1.05);
//         }
//         .collage-card:hover img {
//           transform: scale(1.06);
//           filter: brightness(1.08) saturate(1.1);
//         }
//       `}</style>

//       <div
//         style={{
//           columnCount: columns,
//           columnGap: "4px",
//           padding: "4px",
//           lineHeight: 0,
//           background: "#c5c2c2"
//         }}
//       >
//         {products.map((item, index) => {
//           let selectedVariant = item.variants?.[0];

//           if (selectedSubType) {
//             const found = item.variants?.find(
//               v =>
//                 v.subType?.toLowerCase().trim() ===
//                 selectedSubType.toLowerCase().trim()
//             );
//             if (found) selectedVariant = found;
//           }

//           const h = heightMap[index % heightMap.length];
//           const accent = accentColors[index % accentColors.length];
//           const hasImage = !!selectedVariant?.image;

//           return (
//             <div
//               key={item._id}
//               className="collage-card"
//               style={{
//                 breakInside: "avoid",
//                 marginBottom: "4px",
//                 borderRadius: "6px",
//                 overflow: "hidden",
//                 cursor: "pointer",
//                 position: "relative",
//                 background: "#fff",        // ← white bg taaki contain image ke sides blank na dikhe
//                 lineHeight: 0,
//                 height: `${h}px`,
//                 boxShadow: "0 2px 8px rgba(0,0,0,0.35)"
//               }}
//             >
//               {hasImage ? (
//                 <img
//                   src={selectedVariant.image}
//                   alt={item.modelNumber || ""}
//                   loading="lazy"
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "contain",      // ← SIRF YEH BADLA: cover → contain
//                     objectPosition: "center",
//                     display: "block",
//                     padding: "6px",            // ← thoda breathing room
//                     boxSizing: "border-box"
//                   }}
//                 />
//               ) : (
//                 <div style={{
//                   width: "100%",
//                   height: "100%",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   background: accent,
//                   fontSize: "9px",
//                   color: "rgba(255,255,255,0.75)",
//                   letterSpacing: "0.08em",
//                   fontFamily: "sans-serif",
//                   textTransform: "uppercase",
//                   padding: "6px",
//                   textAlign: "center"
//                 }}>
//                   {item.modelNumber}
//                 </div>
//               )}

//               {/* Hover overlay — model number + subtle gradient */}
//               <div
//                 className="collage-overlay"
//                 style={{
//                   position: "absolute",
//                   inset: 0,
//                   background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "flex-end",
//                   padding: "10px 8px 8px"
//                 }}
//               >
//                 <span style={{
//                   color: "#020202",
//                   fontSize: "10px",
//                   fontWeight: "600",
//                   letterSpacing: "0.06em",
//                   fontFamily: "sans-serif",
//                   textTransform: "uppercase",
//                   lineHeight: 1.3,
//                   textShadow: "0 1px 3px rgba(0,0,0,0.5)"
//                 }}>
//                   {item.modelNumber}
//                 </span>
//                 {selectedVariant?.subType && (
//                   <span style={{
//                     color: "rgb(117, 109, 109)",
//                     fontSize: "8px",
//                     letterSpacing: "0.05em",
//                     fontFamily: "sans-serif",
//                     marginTop: "2px",
//                     textTransform: "capitalize"
//                   }}>
//                     {selectedVariant.subType}
//                   </span>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }


// // =========================
// // SERIES CARD
// // =========================
// function SeriesCard({
//   series,
//   subTypes,
//   selectedSeries,
//   selectedSubType,
//   onSeriesClick,
//   onSubClick
// }) {
//   return (
//     <div style={{
//       minWidth: "260px",
//       border: selectedSeries === series ? "2px solid black" : "1px solid #eee",
//       borderRadius: "12px",
//       padding: "15px",
//       background: "#fff",
//       flexShrink: 0
//     }}>
//       <h3 style={{ cursor: "pointer" }} onClick={() => onSeriesClick(series)}>
//         {series.toUpperCase()}
//       </h3>

//       <div style={{
//         display: "flex",
//         flexWrap: "wrap",
//         gap: "8px",
//         marginTop: "10px"
//       }}>
//         {subTypes.map(sub => (
//           <button
//             key={sub}
//             onClick={() => onSubClick(series, sub)}
//             style={{
//               padding: "6px 12px",
//               borderRadius: "20px",
//               cursor: "pointer",
//               fontSize: "12px",
//               border: selectedSubType === sub ? "none" : "1px solid #ccc",
//               background: selectedSubType === sub ? "black" : "#f5f5f5",
//               color: selectedSubType === sub ? "#fff" : "#000000"
//             }}
//           >
//             {sub}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }


// // =========================
// // MAIN COMPONENT
// // =========================
// export default function ProductList() {
//   const { category } = useParams();

//   const [products, setProducts] = useState([]);
//   const [selectedSeries, setSelectedSeries] = useState("");
//   const [selectedSubType, setSelectedSubType] = useState("");
//   const [loading, setLoading] = useState(false);

//   const seriesData = useMemo(() => ({
//     royal: ["royal", "royal elite", "royal green"],
//     emerald: ["emerald", "emerald plus", "emerald elite"],
//     jade: ["jade", "jade plus", "jade elite"],
//     galaxy: ["galaxy", "galaxy elite"],
//     ruby: ["ruby"],
//     woodlite: ["woodlite-1"],
//     aqua: ["aqua-1"],
//     silver: ["silver-1"],
//     diamond: ["diamond-1"],
//     standard: ["standard-1"],
//     gold: ["gold-1"],
//     superb: ["superb-1"],
//     sona: ["sona-1"]
//   }), []);

//   const formattedCategory = category?.toLowerCase().replace(/_/g, "-");

//   const banners = {
//     ptmt: ptmtBanner,
//     "pipes-and-fittings": pipesBanner,
//     "kitchen-sinks": sinkBanner,
//     "water-tank": tankBanner,
//     "bathroom-accessories": bathroomBanner,
//     "frp-manhole-cover": frpBanner,
//   };

//   const bannerImage = banners[formattedCategory];

//   useEffect(() => {
//     setLoading(true);

//     axios.get("http://localhost:5000/api/products", {
//       params: {
//         category: formattedCategory,
//         parentSeries: selectedSeries || undefined,
//         subType: selectedSubType || undefined,
//       },
//     })
//       .then(res => setProducts(res.data))
//       .catch(console.log)
//       .finally(() => setLoading(false));

//   }, [formattedCategory, selectedSeries, selectedSubType]);

//   return (
//     <div>

//       {/* BANNER */}
//       <div style={{
//         height: "70vh",
//         backgroundImage: `url(${bannerImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         color: "#fff",
//         fontSize: "32px",
//         fontWeight: "bold",
//       }}>
//         {formattedCategory?.replace(/-/g, " ").toUpperCase()}
//       </div>

//       {/* FILTER */}
//       {(selectedSeries || selectedSubType) && (
//         <div style={{ padding: "10px 20px" }}>
//           <strong>Selected:</strong> {selectedSeries} {selectedSubType && `> ${selectedSubType}`}
//           <button
//             onClick={() => {
//               setSelectedSeries("");
//               setSelectedSubType("");
//             }}
//             style={{ marginLeft: "10px" }}
//           >
//             Clear
//           </button>
//         </div>
//       )}

//       {/* COLLAGE */}
//       <Collage
//         products={products}
//         loading={loading}
//         selectedSubType={selectedSubType}
//       />

//       {/* SERIES */}
//       <div style={{ marginTop: "20px" }}>
//         <h2 style={{ paddingLeft: "20px" }}>Browse Series</h2>

//         <div style={{
//           display: "flex",
//           overflowX: "auto",
//           gap: "15px",
//           padding: "20px"
//         }}>
//           {Object.keys(seriesData).map(series => (
//             <SeriesCard
//               key={series}
//               series={series}
//               subTypes={seriesData[series]}
//               selectedSeries={selectedSeries}
//               selectedSubType={selectedSubType}
//               onSeriesClick={(s) => {
//                 setSelectedSeries(s);
//                 setSelectedSubType(seriesData[s]?.[0] || "");
//               }}
//               onSubClick={(s, sub) => {
//                 setSelectedSeries(s);
//                 setSelectedSubType(sub);
//               }}
//             />
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// }





// *************************  code kam kr rha hai ******************************************
// *************************  code kam kr rha hai ******************************************




// #########   CODE KAM KR RHA HAI ABHI BAS HAR ME MODULE NUBER ADD KRNA HAI ISLYE CHAGE CHAHIYE THORA SA #######################





// import { useParams } from "react-router-dom";
// import { useEffect, useState, useMemo, useRef } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// // Banners
// import ptmtBanner from "../assets/images/ptmt.jpg";
// import pipesBanner from "../assets/images/Pipes_and_Fittings.jpg";
// import sinkBanner from "../assets/images/SinksImage.jpg";
// import tankBanner from "../assets/images/water-tank.jpg";
// import bathroomBanner from "../assets/images/bathroomAccessories.jpg";
// import frpBanner from "../assets/images/frp_manhole_cover.jpg";


// // =========================
// // COLLAGE
// // =========================
// function Collage({ products, loading, selectedSubType }) {
//   const [columns, setColumns] = useState(4);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const updateColumns = () => {
//       if (window.innerWidth < 480) setColumns(2);
//       else if (window.innerWidth < 768) setColumns(3);
//       else if (window.innerWidth < 1200) setColumns(4);
//       else setColumns(5);
//     };
//     updateColumns();
//     window.addEventListener("resize", updateColumns);
//     return () => window.removeEventListener("resize", updateColumns);
//   }, []);

//   if (loading) return (
//     <div style={{
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       height: "300px",
//       fontSize: "14px",
//       color: "#adadad",
//       letterSpacing: "0.08em",
//       fontFamily: "sans-serif"
//     }}>
//       Loading products...
//     </div>
//   );

//   if (!products.length) return (
//     <div style={{
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       height: "200px",
//       fontSize: "14px",
//       color: "#ff0000",
//       fontFamily: "sans-serif"
//     }}>
//       No products found 😕
//     </div>
//   );

//   const heightMap = [160, 200, 180, 220, 170, 210, 190, 175, 205, 185];

//   const accentColors = [
//     "#c9b99a", "#a8b5a2", "#b5a8a8", "#9fafa8",
//     "#bfb09a", "#a9a0b5", "#b0bab5", "#c4b0a0"
//   ];

//   return (
//     <>
//       <style>{`
//         .collage-card .collage-overlay {
//           opacity: 0;
//           transition: opacity 0.35s ease;
//         }
//         .collage-card:hover .collage-overlay {
//           opacity: 1;
//         }
//         .collage-card img {
//           transition: transform 0.5s ease, filter 0.5s ease;
//           filter: brightness(0.96) saturate(1.05);
//         }
//         .collage-card:hover img {
//           transform: scale(1.06);
//           filter: brightness(1.08) saturate(1.1);
//         }
//       `}</style>

//       <div
//         style={{
//           columnCount: columns,
//           columnGap: "4px",
//           padding: "4px",
//           lineHeight: 0,
//           background: "#c5c2c2"
//         }}
//       >
//         {products.map((item, index) => {
//           let selectedVariant = item.variants?.[0];

//           if (selectedSubType) {
//             const found = item.variants?.find(
//               v =>
//                 v.subType?.toLowerCase().trim() ===
//                 selectedSubType.toLowerCase().trim()
//             );
//             if (found) selectedVariant = found;
//           }

//           const h = heightMap[index % heightMap.length];
//           const accent = accentColors[index % accentColors.length];
//           const hasImage = !!selectedVariant?.image;

//           return (
//             <div
//               key={item._id}
//               className="collage-card"
//                onClick={() => navigate(`/product/${item._id}`)} //  navigation
//               style={{
//                 breakInside: "avoid",
//                 marginBottom: "4px",
//                 borderRadius: "6px",
//                 overflow: "hidden",
//                 cursor: "pointer",
//                 position: "relative",
//                 background: "#fff",
//                 lineHeight: 0,
//                 height: `${h}px`,
//                 boxShadow: "0 2px 8px rgba(0,0,0,0.35)"
//               }}
//             >
//               {hasImage ? (
//                 <img
//                   src={selectedVariant.image}
//                   alt={item.modelNumber || ""}
//                   loading="lazy"
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "contain",
//                     objectPosition: "center",
//                     display: "block",
//                     padding: "6px",
//                     boxSizing: "border-box"
//                   }}
//                 />
//               ) : (
//                 <div style={{
//                   width: "100%",
//                   height: "100%",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   background: accent,
//                   fontSize: "9px",
//                   color: "rgba(255,255,255,0.75)",
//                   letterSpacing: "0.08em",
//                   fontFamily: "sans-serif",
//                   textTransform: "uppercase",
//                   padding: "6px",
//                   textAlign: "center"
//                 }}>
//                   {item.modelNumber}
//                 </div>
//               )}

//               <div
//                 className="collage-overlay"
//                 style={{
//                   position: "absolute",
//                   inset: 0,
//                   background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "flex-end",
//                   padding: "10px 8px 8px"
//                 }}
//               >
//                 <span style={{
//                   color: "#020202",
//                   fontSize: "10px",
//                   fontWeight: "600",
//                   letterSpacing: "0.06em",
//                   fontFamily: "sans-serif",
//                   textTransform: "uppercase",
//                   lineHeight: 1.3,
//                   textShadow: "0 1px 3px rgba(0,0,0,0.5)"
//                 }}>
//                   {item.modelNumber}
//                 </span>
//                 {selectedVariant?.subType && (
//                   <span style={{
//                     color: "rgb(117, 109, 109)",
//                     fontSize: "8px",
//                     letterSpacing: "0.05em",
//                     fontFamily: "sans-serif",
//                     marginTop: "2px",
//                     textTransform: "capitalize"
//                   }}>
//                     {selectedVariant.subType}
//                   </span>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }


// // =========================
// // SERIES CARD
// // =========================
// function SeriesCard({
//   series,
//   subTypes,
//   selectedSeries,
//   selectedSubType,
//   onSeriesClick,
//   onSubClick
// }) {
//   return (
//     <div style={{
//       minWidth: "260px",
//       border: selectedSeries === series ? "2px solid black" : "1px solid #eee",
//       borderRadius: "12px",
//       padding: "15px",
//       background: "#fff",
//       flexShrink: 0
//     }}>
//       <h3 style={{ cursor: "pointer" }} onClick={() => onSeriesClick(series)}>
//         {series.toUpperCase()}
//       </h3>

//       <div style={{
//         display: "flex",
//         flexWrap: "wrap",
//         gap: "8px",
//         marginTop: "10px"
//       }}>
//         {subTypes.map(sub => (
//           <button
//             key={sub}
//             onClick={() => onSubClick(series, sub)}
//             style={{
//               padding: "6px 12px",
//               borderRadius: "20px",
//               cursor: "pointer",
//               fontSize: "12px",
//               border: selectedSubType === sub ? "none" : "1px solid #ccc",
//               background: selectedSubType === sub ? "black" : "#f5f5f5",
//               color: selectedSubType === sub ? "#fff" : "#000000"
//             }}
//           >
//             {sub}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }


// // =========================
// // MAIN COMPONENT
// // =========================
// export default function ProductList() {
//   const { category } = useParams();

//   const [products, setProducts] = useState([]);
//   const [selectedSeries, setSelectedSeries] = useState("");
//   const [selectedSubType, setSelectedSubType] = useState("");
//   const [loading, setLoading] = useState(false);

//   // ── AUTO SLIDE refs ──────────────────────────────
//   const sliderRef = useRef(null);
//   const autoSlideRef = useRef(null);

//   const startAutoSlide = () => {
//     autoSlideRef.current = setInterval(() => {
//       const el = sliderRef.current;
//       if (!el) return;
//       // Agar end tak pahunch gaye toh wapas start pe
//       if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
//         el.scrollTo({ left: 0, behavior: "smooth" });
//       } else {
//         el.scrollBy({ left: 280, behavior: "smooth" });
//       }
//     }, 2500);
//   };

//   const stopAutoSlide = () => clearInterval(autoSlideRef.current);

//   useEffect(() => {
//     startAutoSlide();
//     return () => stopAutoSlide();
//   }, []);

//   const slideLeft = () => {
//     stopAutoSlide();
//     sliderRef.current?.scrollBy({ left: -280, behavior: "smooth" });
//     startAutoSlide();
//   };

//   const slideRight = () => {
//     stopAutoSlide();
//     sliderRef.current?.scrollBy({ left: 280, behavior: "smooth" });
//     startAutoSlide();
//   };
//   // ────────────────────────────────────────────────

//   const seriesData = useMemo(() => ({
//     royal: ["royal", "royal elite", "royal green"],
//     emerald: ["emerald", "emerald plus", "emerald elite"],
//     jade: ["jade", "jade plus", "jade elite"],
//     galaxy: ["galaxy", "galaxy elite"],
//     ruby: ["ruby"],
//     woodlite: ["woodlite-1"],
//     aqua: ["aqua-1"],
//     silver: ["silver-1"],
//     diamond: ["diamond-1"],
//     standard: ["standard-1"],
//     gold: ["gold-1"],
//     superb: ["superb-1"],
//     sona: ["sona-1"]
//   }), []);

//   const formattedCategory = category?.toLowerCase().replace(/_/g, "-");

//   const banners = {
//     ptmt: ptmtBanner,
//     "pipes-and-fittings": pipesBanner,
//     "kitchen-sinks": sinkBanner,
//     "water-tank": tankBanner,
//     "bathroom-accessories": bathroomBanner,
//     "frp-manhole-cover": frpBanner,
//   };

//   const bannerImage = banners[formattedCategory];

//   useEffect(() => {
//     setLoading(true);

//     axios.get("http://localhost:5000/api/products", {
//       params: {
//         category: formattedCategory,
//         parentSeries: selectedSeries || undefined,
//         subType: selectedSubType || undefined,
//       },
//     })
//       .then(res => setProducts(res.data))
//       .catch(console.log)
//       .finally(() => setLoading(false));

//   }, [formattedCategory, selectedSeries, selectedSubType]);

//   // Arrow button style
//   const arrowStyle = {
//     position: "absolute",
//     top: "50%",
//     transform: "translateY(-50%)",
//     zIndex: 10,
//     background: "#fff",
//     border: "1px solid #ddd",
//     borderRadius: "50%",
//     width: "36px",
//     height: "36px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     cursor: "pointer",
//     boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
//     fontSize: "16px",
//     userSelect: "none"
//   };

//   return (
//     <div>

//       {/* BANNER */}
//       <div style={{
//         height: "70vh",
//         backgroundImage: `url(${bannerImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         color: "#fff",
//         fontSize: "32px",
//         fontWeight: "bold",
//       }}>
//         {formattedCategory?.replace(/-/g, " ").toUpperCase()}
//       </div>

//       {/* FILTER */}
//       {(selectedSeries || selectedSubType) && (
//         <div style={{ padding: "10px 20px" }}>
//           <strong>Selected:</strong> {selectedSeries} {selectedSubType && `> ${selectedSubType}`}
//           <button
//             onClick={() => {
//               setSelectedSeries("");
//               setSelectedSubType("");
//             }}
//             style={{ marginLeft: "10px" }}
//           >
//             Clear
//           </button>
//         </div>
//       )}

//       {/* COLLAGE */}
//       <Collage
//         products={products}
//         loading={loading}
//         selectedSubType={selectedSubType}
//       />

//       {/* SERIES */}
//       <div style={{ marginTop: "20px" }}>
//         <h2 style={{ paddingLeft: "20px" }}>Browse Series</h2>

//         {/* Wrapper with arrows */}
//         <div style={{ position: "relative", padding: "0 48px" }}>

//           {/* LEFT ARROW */}
//           <div style={{ ...arrowStyle, left: "8px" }} onClick={slideLeft}>
//             ‹
//           </div>

//           {/* SLIDER */}
//           <div
//             ref={sliderRef}
//             onMouseEnter={stopAutoSlide}
//             onMouseLeave={startAutoSlide}
//             style={{
//               display: "flex",
//               overflowX: "auto",
//               gap: "15px",
//               padding: "20px 4px",
//               scrollbarWidth: "none",        // Firefox — scrollbar hide
//               msOverflowStyle: "none"        // IE — scrollbar hide
//             }}
//           >
//             {/* Chrome scrollbar hide */}
//             <style>{`.series-slider::-webkit-scrollbar { display: none; }`}</style>

//             {Object.keys(seriesData).map(series => (
//               <SeriesCard
//                 key={series}
//                 series={series}
//                 subTypes={seriesData[series]}
//                 selectedSeries={selectedSeries}
//                 selectedSubType={selectedSubType}
//                 onSeriesClick={(s) => {
//                   setSelectedSeries(s);
//                   setSelectedSubType(seriesData[s]?.[0] || "");
//                 }}
//                 onSubClick={(s, sub) => {
//                   setSelectedSeries(s);
//                   setSelectedSubType(sub);
//                 }}
//               />
//             ))}
//           </div>

//           {/* RIGHT ARROW */}
//           <div style={{ ...arrowStyle, right: "8px" }} onClick={slideRight}>
//             ›
//           </div>

//         </div>
//       </div>

//     </div>
//   );
// }














// import { useParams } from "react-router-dom";
// import { useEffect, useState, useMemo, useRef } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// // Banners
// import ptmtBanner from "../assets/images/ptmt.jpg";
// import pipesBanner from "../assets/images/Pipes_and_Fittings.jpg";
// import sinkBanner from "../assets/images/SinksImage.jpg";
// import tankBanner from "../assets/images/water-tank.jpg";
// import bathroomBanner from "../assets/images/bathroomAccessories.jpg";
// import frpBanner from "../assets/images/frp_manhole_cover.jpg";


// // =========================
// // COLLAGE
// // =========================
// function Collage({ products, loading, selectedSubType }) {
//   const [columns, setColumns] = useState(4);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const updateColumns = () => {
//       if (window.innerWidth < 480) setColumns(2);
//       else if (window.innerWidth < 768) setColumns(3);
//       else if (window.innerWidth < 1200) setColumns(4);
//       else setColumns(5);
//     };
//     updateColumns();
//     window.addEventListener("resize", updateColumns);
//     return () => window.removeEventListener("resize", updateColumns);
//   }, []);

//   if (loading) return (
//     <div style={{
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       height: "300px",
//       fontSize: "14px",
//       color: "#adadad",
//       letterSpacing: "0.08em",
//       fontFamily: "sans-serif"
//     }}>
//       Loading products...
//     </div>
//   );

//   if (!products.length) return (
//     <div style={{
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       height: "200px",
//       fontSize: "14px",
//       color: "#ff0000",
//       fontFamily: "sans-serif"
//     }}>
//       No products found 😕
//     </div>
//   );

//   const heightMap = [160, 200, 180, 220, 170, 210, 190, 175, 205, 185];

//   const accentColors = [
//     "#a5c99a", "#a8b5a2", "#b5a8a8", "#9fafa8",
//     "#bfb09a", "#a9a0b5", "#b0bab5", "#c4b0a0"
//   ];

//   return (
//     <>
//       <style>{`
//         .collage-card .collage-overlay {
//           opacity: 0;
//           transition: opacity 0.35s ease;
//         }
//         .collage-card:hover .collage-overlay {
//           opacity: 1;
//         }
//         .collage-card img {
//           transition: transform 0.5s ease, filter 0.5s ease;
//           filter: brightness(0.96) saturate(1.05);
//         }
//         .collage-card:hover img {
//           transform: scale(1.06);
//           filter: brightness(1.08) saturate(1.1);
//         }
//       `}</style>

//       <div
//         style={{
//           columnCount: columns,
//           columnGap: "4px",
//           padding: "4px",
//           lineHeight: 0,
//           background: "#c5c2c2"
//         }}
//       >
//         {products.map((item, index) => {
//           let selectedVariant = item.variants?.[0];

//           if (selectedSubType) {
//             const found = item.variants?.find(
//               v =>
//                 v.subType?.toLowerCase().trim() ===
//                 selectedSubType.toLowerCase().trim()
//             );
//             if (found) selectedVariant = found;
//           }

//           const h = heightMap[index % heightMap.length];
//           const accent = accentColors[index % accentColors.length];
//           const hasImage = !!selectedVariant?.image;

//           return (
//             <div
//               key={item._id}
//               className="collage-card"
//               onClick={() => navigate(`/product/${selectedVariant?.modelNumber || item.modelNumber}`)}
//               style={{
//                 breakInside: "avoid",
//                 marginBottom: "4px",
//                 borderRadius: "6px",
//                 overflow: "hidden",
//                 cursor: "pointer",
//                 position: "relative",
//                 background: "#837e7e",
//                 lineHeight: 0,
//                 height: `${h}px`,
//                 boxShadow: "0 2px 8px rgba(0,0,0,0.35)"
//               }}
//             >
//               {hasImage ? (
//                 <img
//                   src={selectedVariant.image}
//                   alt={item.modelNumber || ""}
//                   loading="lazy"
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "contain",
//                     objectPosition: "center",
//                     display: "block",
//                     padding: "6px",
//                     boxSizing: "border-box"
//                   }}
//                 />
//               ) : (
//                 <div style={{
//                   width: "100%",
//                   height: "100%",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   background: accent,
//                   fontSize: "9px",
//                   color: "rgba(255,255,255,0.75)",
//                   letterSpacing: "0.08em",
//                   fontFamily: "sans-serif",
//                   textTransform: "uppercase",
//                   padding: "6px",
//                   textAlign: "center"
//                 }}>
//                   {item.modelNumber}
//                 </div>
//               )}

//               <div
//                 className="collage-overlay"
//                 style={{
//                   position: "absolute",
//                   inset: 0,
//                   background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "flex-end",
//                   padding: "10px 8px 8px"
//                 }}
//               >
//                 <span style={{
//                   color: "#020202",
//                   fontSize: "10px",
//                   fontWeight: "600",
//                   letterSpacing: "0.06em",
//                   fontFamily: "sans-serif",
//                   textTransform: "uppercase",
//                   lineHeight: 1.3,
//                   textShadow: "0 1px 3px rgba(0,0,0,0.5)"
//                 }}>
//                   {selectedVariant?.modelNumber || item.modelNumber}
//                 </span>
//                 {selectedVariant?.subType && (
//                   <span style={{
//                     color: "rgb(117, 109, 109)",
//                     fontSize: "8px",
//                     letterSpacing: "0.05em",
//                     fontFamily: "sans-serif",
//                     marginTop: "2px",
//                     textTransform: "capitalize"
//                   }}>
//                     {selectedVariant.subType}
//                   </span>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }


// // =========================
// // SERIES CARD
// // =========================
// function SeriesCard({
//   series,
//   subTypes,
//   selectedSeries,
//   selectedSubType,
//   onSeriesClick,
//   onSubClick
// }) {
//   return (
//     <div style={{
//       minWidth: "260px",
//       border: selectedSeries === series ? "2px solid black" : "1px solid #eee",
//       borderRadius: "12px",
//       padding: "15px",
//       background: "#fff",
//       flexShrink: 0
//     }}>
//       <h3 style={{ cursor: "pointer" }} onClick={() => onSeriesClick(series)}>
//         {series.toUpperCase()}
//       </h3>

//       <div style={{
//         display: "flex",
//         flexWrap: "wrap",
//         gap: "8px",
//         marginTop: "10px"
//       }}>
//         {subTypes.map(sub => (
//           <button
//             key={sub}
//             onClick={() => onSubClick(series, sub)}
//             style={{
//               padding: "6px 12px",
//               borderRadius: "20px",
//               cursor: "pointer",
//               fontSize: "12px",
//               border: selectedSubType === sub ? "none" : "1px solid #ccc",
//               background: selectedSubType === sub ? "black" : "#f5f5f5",
//               color: selectedSubType === sub ? "#fff" : "#000000"
//             }}
//           >
//             {sub}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }


// // =========================
// // MAIN COMPONENT
// // =========================
// export default function ProductList() {
//   const { category } = useParams();

//   const [products, setProducts] = useState([]);
//   const [selectedSeries, setSelectedSeries] = useState("");
//   const [selectedSubType, setSelectedSubType] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [selectedColor, setSelectedColor] = useState("");

//   // ── AUTO SLIDE refs ──────────────────────────────
//   const sliderRef = useRef(null);
//   const autoSlideRef = useRef(null);

//   const startAutoSlide = () => {
//     autoSlideRef.current = setInterval(() => {
//       const el = sliderRef.current;
//       if (!el) return;
//       // Agar end tak pahunch gaye toh wapas start pe
//       if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
//         el.scrollTo({ left: 0, behavior: "smooth" });
//       } else {
//         el.scrollBy({ left: 280, behavior: "smooth" });
//       }
//     }, 2500);
//   };

//   const stopAutoSlide = () => clearInterval(autoSlideRef.current);

//   useEffect(() => {
//     startAutoSlide();
//     return () => stopAutoSlide();
//   }, []);

//   const slideLeft = () => {
//     stopAutoSlide();
//     sliderRef.current?.scrollBy({ left: -280, behavior: "smooth" });
//     startAutoSlide();
//   };

//   const slideRight = () => {
//     stopAutoSlide();
//     sliderRef.current?.scrollBy({ left: 280, behavior: "smooth" });
//     startAutoSlide();
//   };
//   // ────────────────────────────────────────────────

//   const seriesData = useMemo(() => ({
//     royal: ["royal", "royal elite", "royal green"],
//     emerald: ["emerald", "emerald plus", "emerald elite"],
//     jade: ["jade", "jade plus", "jade elite"],
//     galaxy: ["galaxy", "galaxy elite"],
//     ruby: ["ruby"],
//     woodlite: ["woodlite-1"],
//     aqua: ["aqua","elite","plus"],
//     coral: ["coral","elite","plus"],
//     silver: ["silver-1"],
//     diamond: ["diamond-1"],
//     standard: ["standard-1"],
//     gold: ["gold-1"],
//     superb: ["superb-1"],
//     sona: ["sona-1"]
//   }), []);

//   const formattedCategory = category?.toLowerCase().replace(/_/g, "-");

//   const banners = {
//     ptmt: ptmtBanner,
//     "pipes-and-fittings": pipesBanner,
//     "kitchen-sinks": sinkBanner,
//     "water-tank": tankBanner,
//     "bathroom-accessories": bathroomBanner,
//     "frp-manhole-cover": frpBanner,
//   };

//   const bannerImage = banners[formattedCategory];

//   useEffect(() => {
//     setLoading(true);

//     axios.get("http://localhost:5000/api/products", {
//       params: {
//         category: formattedCategory,
//         series: selectedSeries || undefined,
//         subType: selectedSubType || undefined,
//         color: selectedColor || undefined,
//       },
//     })
//       .then(res => setProducts(res.data))
//       .catch(console.log)
//       .finally(() => setLoading(false));

//   }, [formattedCategory, selectedSeries, selectedSubType, selectedColor]);

//   // Arrow button style
//   const arrowStyle = {
//     position: "absolute",
//     top: "50%",
//     transform: "translateY(-50%)",
//     zIndex: 10,
//     background: "#fff",
//     border: "1px solid #ddd",
//     borderRadius: "50%",
//     width: "36px",
//     height: "36px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     cursor: "pointer",
//     boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
//     fontSize: "16px",
//     userSelect: "none"
//   };

//   return (
//     <div>

//       {/* BANNER */}
//       <div style={{
//         height: "70vh",
//         backgroundImage: `url(${bannerImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         color: "#fff",
//         fontSize: "32px",
//         fontWeight: "bold",
//       }}>
//         {formattedCategory?.replace(/-/g, " ").toUpperCase()}
//       </div>

//       {/* FILTER */}
//       {(selectedSeries || selectedSubType) && (
//         <div style={{ padding: "10px 20px" }}>
//           <strong>Selected:</strong> {selectedSeries} {selectedSubType && `> ${selectedSubType}`}
//           <button
//             onClick={() => {
//               setSelectedSeries("");
//               setSelectedSubType("");
//             }}
//             style={{ marginLeft: "10px" }}
//           >
//             Clear
//           </button>
//         </div>
//       )}

//       {/* COLLAGE */}
//       <Collage
//         products={products}
//         loading={loading}
//         selectedSubType={selectedSubType}
//       />

//       {/* SERIES */}
//       <div style={{ marginTop: "20px" }}>
//         <h2 style={{ paddingLeft: "20px" }}>Browse Series</h2>

//         {/* Wrapper with arrows */}
//         <div style={{ position: "relative", padding: "0 48px" }}>

//           {/* LEFT ARROW */}
//           <div style={{ ...arrowStyle, left: "8px" }} onClick={slideLeft}>
//             ‹
//           </div>

//           {/* SLIDER */}
//           <div
//             ref={sliderRef}
//             onMouseEnter={stopAutoSlide}
//             onMouseLeave={startAutoSlide}
//             style={{
//               display: "flex",
//               overflowX: "auto",
//               gap: "15px",
//               padding: "20px 4px",
//               scrollbarWidth: "none",        // Firefox — scrollbar hide
//               msOverflowStyle: "none"        // IE — scrollbar hide
//             }}
//           >
//             {/* Chrome scrollbar hide */}
//             <style>{`.series-slider::-webkit-scrollbar { display: none; }`}</style>

//             {Object.keys(seriesData).map(series => (
//               <SeriesCard
//                 key={series}
//                 series={series}
//                 subTypes={seriesData[series]}
//                 selectedSeries={selectedSeries}
//                 selectedSubType={selectedSubType}
//                 onSeriesClick={(s) => {
//                   setSelectedSeries(s);
//                   setSelectedSubType(seriesData[s]?.[0] || "");
//                 }}
//                 onSubClick={(s, sub) => {
//                   setSelectedSeries(s);
//                   setSelectedSubType(sub);
//                 }}
//               />
//             ))}
//           </div>

//           {/* RIGHT ARROW */}
//           <div style={{ ...arrowStyle, right: "8px" }} onClick={slideRight}>
//             ›
//           </div>

//         </div>
//       </div>

//     </div>
//   );
// }






// ################### code 27_04_2026 #########################################################




// import { useParams } from "react-router-dom";
// import { useEffect, useState, useMemo, useRef } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// // Banners
// import ptmtBanner from "../assets/images/ptmt.jpg";
// import pipesBanner from "../assets/images/Pipes_and_Fittings.jpg";
// import sinkBanner from "../assets/images/SinksImage.jpg";
// import tankBanner from "../assets/images/water-tank.jpg";
// import bathroomBanner from "../assets/images/bathroomAccessories.jpg";
// import frpBanner from "../assets/images/frp_manhole_cover.jpg";


// // =========================
// // COLLAGE
// // =========================
// function Collage({ products, loading, selectedSubType }) {
//   const navigate = useNavigate();

//   if (loading) return (
//     <div style={{
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       height: "300px",
//       fontSize: "14px",
//       color: "#adadad",
//       letterSpacing: "0.08em",
//       fontFamily: "sans-serif"
//     }}>
//       Loading products...
//     </div>
//   );

//   if (!products.length) return (
//     <div style={{
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       height: "200px",
//       fontSize: "14px",
//       color: "#ff0000",
//       fontFamily: "sans-serif"
//     }}>
//       No products found 😕
//     </div>
//   );

//   const accentColors = [
//     "#a5c99a", "#a8b5a2", "#b5a8a8", "#9fafa8",
//     "#bfb09a", "#a9a0b5", "#b0bab5", "#c4b0a0"
//   ];

//   // Show all products (up to 20 max)
//   const displayProducts = products.slice(0, 20);
//   const n = displayProducts.length;

//   // Square-ish grid: cols = ceil(sqrt(n)), rows = ceil(n / cols)
//   const cols = Math.ceil(Math.sqrt(n));
//   const rows = Math.ceil(n / cols);

//   // Empty placeholder cells to fill the last row
//   const totalCells = cols * rows;
//   const emptyCells = totalCells - n;

//   return (
//     <>
//       <style>{`
//         .collage-card .collage-overlay {
//           opacity: 0;
//           transition: opacity 0.35s ease;
//         }
//         .collage-card:hover .collage-overlay {
//           opacity: 1;
//         }
//         .collage-card img {
//           transition: transform 0.5s ease, filter 0.5s ease;
//           filter: brightness(0.96) saturate(1.05);
//         }
//         .collage-card:hover img {
//           transform: scale(1.06);
//           filter: brightness(1.08) saturate(1.1);
//         }
//       `}</style>

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: `repeat(${cols}, 1fr)`,
//           gridTemplateRows: `repeat(${rows}, 1fr)`,
//           gap: "1px",
//           padding: "1px",
//           background: "transparent",
//           // Fixed height — fits in viewport without scrolling
//           height: "55vh",
//           width: "100%",
//         }}
//       >
//         {displayProducts.map((item, index) => {
//           let selectedVariant = item.variants?.[0];

//           if (selectedSubType) {
//             const found = item.variants?.find(
//               v =>
//                 v.subType?.toLowerCase().trim() ===
//                 selectedSubType.toLowerCase().trim()
//             );
//             if (found) selectedVariant = found;
//           }

//           const accent = accentColors[index % accentColors.length];
//           const hasImage = !!selectedVariant?.image;

//           return (
//             <div
//               key={item._id}
//               className="collage-card"
//               onClick={() =>
//                 navigate(`/product/${selectedVariant?.modelNumber || item.modelNumber}`)
//               }
//               style={{
//                 borderRadius: "6px",
//                 overflow: "hidden",
//                 cursor: "pointer",
//                 position: "relative",
//                 background: "#4e4c4cda",
//                 boxShadow: "0 1px 5px rgba(0,0,0,0.2)",
//               }}
//             >
//               {hasImage ? (
//                 <img
//                   src={selectedVariant.image}
//                   alt={item.modelNumber || ""}
//                   loading="lazy"
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "contain",
//                     objectPosition: "center",
//                     display: "block",
//                     padding: "0px",
//                     boxSizing: "border-box",
//                   }}
//                 />
//               ) : (
//                 <div
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     background: accent,
//                     fontSize: "10px",
//                     color: "rgba(255,255,255,0.85)",
//                     letterSpacing: "0.08em",
//                     fontFamily: "sans-serif",
//                     textTransform: "uppercase",
//                     padding: "4px",
//                     textAlign: "center",
//                     boxSizing: "border-box",
//                   }}
//                 >
//                   {item.modelNumber}
//                 </div>
//               )}

//               <div
//                 className="collage-overlay"
//                 style={{
//                   position: "absolute",
//                   inset: 0,
//                   background:
//                     "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "flex-end",
//                   padding: "5px 4px 4px",
//                 }}
//               >
//                 <span
//                   style={{
//                     color: "#ffffff",
//                     fontSize: "8px",
//                     fontWeight: "600",
//                     letterSpacing: "0.06em",
//                     fontFamily: "sans-serif",
//                     textTransform: "uppercase",
//                     lineHeight: 1.3,
//                     textShadow: "0 1px 3px rgba(0,0,0,0.7)",
//                   }}
//                 >
//                   {selectedVariant?.modelNumber || item.modelNumber}
//                 </span>
//                 {selectedVariant?.subType && (
//                   <span
//                     style={{
//                       color: "rgba(220,220,220,0.85)",
//                       fontSize: "6px",
//                       letterSpacing: "0.05em",
//                       fontFamily: "sans-serif",
//                       marginTop: "1px",
//                       textTransform: "capitalize",
//                     }}
//                   >
//                     {selectedVariant.subType}
//                   </span>
//                 )}
//               </div>
//             </div>
//           );
//         })}

//         {/* Empty placeholder cells to fill last row — keeps grid tight */}
//         {Array(emptyCells).fill(null).map((_, i) => (
//           <div
//             key={`empty-${i}`}
//             style={{
//               borderRadius: "6px",
//               background: "transparent",
//               visibility: "hidden",
//             }}
//           />
//         ))}
//       </div>
//     </>
//   );
// }


// // =========================
// // SERIES CARD
// // =========================
// function SeriesCard({
//   series,
//   subTypes,
//   selectedSeries,
//   selectedSubType,
//   onSeriesClick,
//   onSubClick
// }) {
//   return (
//     <div style={{
//       minWidth: "260px",
//       border: selectedSeries === series ? "2px solid black" : "1px solid #eee",
//       borderRadius: "12px",
//       padding: "15px",
//       background: "#fff",
//       flexShrink: 0
//     }}>
//       <h3 style={{ cursor: "pointer" }} onClick={() => onSeriesClick(series)}>
//         {series.toUpperCase()}
//       </h3>

//       <div style={{
//         display: "flex",
//         flexWrap: "wrap",
//         gap: "8px",
//         marginTop: "10px"
//       }}>
//         {subTypes.map(sub => (
//           <button
//             key={sub}
//             onClick={() => onSubClick(series, sub)}
//             style={{
//               padding: "6px 12px",
//               borderRadius: "20px",
//               cursor: "pointer",
//               fontSize: "12px",
//               border: selectedSubType === sub ? "none" : "1px solid #ccc",
//               background: selectedSubType === sub ? "black" : "#f5f5f5",
//               color: selectedSubType === sub ? "#fff" : "#000000"
//             }}
//           >
//             {sub}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }


// // =========================
// // MAIN COMPONENT
// // =========================
// export default function ProductList() {
//   const { category } = useParams();

//   const [products, setProducts] = useState([]);
//   const [selectedSeries, setSelectedSeries] = useState("");
//   const [selectedSubType, setSelectedSubType] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [selectedColor, setSelectedColor] = useState("");

//   const sliderRef = useRef(null);
//   const autoSlideRef = useRef(null);

//   const startAutoSlide = () => {
//     autoSlideRef.current = setInterval(() => {
//       const el = sliderRef.current;
//       if (!el) return;
//       if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
//         el.scrollTo({ left: 0, behavior: "smooth" });
//       } else {
//         el.scrollBy({ left: 280, behavior: "smooth" });
//       }
//     }, 2500);
//   };

//   const stopAutoSlide = () => clearInterval(autoSlideRef.current);

//   useEffect(() => {
//     startAutoSlide();
//     return () => stopAutoSlide();
//   }, []);

//   const slideLeft = () => {
//     stopAutoSlide();
//     sliderRef.current?.scrollBy({ left: -280, behavior: "smooth" });
//     startAutoSlide();
//   };

//   const slideRight = () => {
//     stopAutoSlide();
//     sliderRef.current?.scrollBy({ left: 280, behavior: "smooth" });
//     startAutoSlide();
//   };

//   const seriesData = useMemo(() => ({
//     royal: ["royal", "royal elite", "royal green"],
//     emerald: ["emerald", "emerald plus", "emerald elite"],
//     jade: ["jade", "jade plus", "jade elite"],
//     galaxy: ["galaxy", "galaxy elite"],
//     ruby: ["ruby"],
//     woodlite: ["woodlite-1"],
//     aqua: ["aqua", "elite", "plus"],
//     coral: ["coral", "elite", "plus"],
//     silver: ["silver-1"],
//     diamond: ["diamond-1"],
//     standard: ["standard-1"],
//     gold: ["gold-1"],
//     superb: ["superb-1"],
//     sona: ["sona-1"]
//   }), []);

//   const formattedCategory = category?.toLowerCase().replace(/_/g, "-");

//   const banners = {
//     ptmt: ptmtBanner,
//     "pipes-and-fittings": pipesBanner,
//     "kitchen-sinks": sinkBanner,
//     "water-tank": tankBanner,
//     "bathroom-accessories": bathroomBanner,
//     "frp-manhole-cover": frpBanner,
//   };

//   const bannerImage = banners[formattedCategory];

//   useEffect(() => {
//     setLoading(true);

//     axios.get("http://localhost:5000/api/products", {
//       params: {
//         category: formattedCategory,
//         series: selectedSeries || undefined,
//         subType: selectedSubType || undefined,
//         color: selectedColor || undefined,
//       },
//     })
//       .then(res => setProducts(res.data))
//       .catch(console.log)
//       .finally(() => setLoading(false));

//   }, [formattedCategory, selectedSeries, selectedSubType, selectedColor]);

//   const arrowStyle = {
//     position: "absolute",
//     top: "50%",
//     transform: "translateY(-50%)",
//     zIndex: 10,
//     background: "#fff",
//     border: "1px solid #ddd",
//     borderRadius: "50%",
//     width: "36px",
//     height: "36px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     cursor: "pointer",
//     boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
//     fontSize: "16px",
//     userSelect: "none"
//   };

//   return (
//     <div>

//       {/* BANNER */}
//       <div style={{
//         height: "70vh",
//         backgroundImage: `url(${bannerImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         color: "#fff",
//         fontSize: "32px",
//         fontWeight: "bold",
//       }}>
//         {formattedCategory?.replace(/-/g, " ").toUpperCase()}
//       </div>

//       {/* FILTER */}
//       {(selectedSeries || selectedSubType) && (
//         <div style={{ padding: "10px 20px" }}>
//           <strong>Selected:</strong> {selectedSeries} {selectedSubType && `> ${selectedSubType}`}
//           <button
//             onClick={() => {
//               setSelectedSeries("");
//               setSelectedSubType("");
//             }}
//             style={{ marginLeft: "10px" }}
//           >
//             Clear
//           </button>
//         </div>
//       )}

//       {/* COLLAGE */}
//       <Collage
//         products={products}
//         loading={loading}
//         selectedSubType={selectedSubType}
//       />

//       {/* SERIES */}
//       <div style={{ marginTop: "20px" }}>
//         <h2 style={{ paddingLeft: "20px" }}>Browse Series</h2>

//         <div style={{ position: "relative", padding: "0 48px" }}>

//           <div style={{ ...arrowStyle, left: "8px" }} onClick={slideLeft}>‹</div>

//           <div
//             ref={sliderRef}
//             onMouseEnter={stopAutoSlide}
//             onMouseLeave={startAutoSlide}
//             style={{
//               display: "flex",
//               overflowX: "auto",
//               gap: "15px",
//               padding: "20px 4px",
//               scrollbarWidth: "none",
//               msOverflowStyle: "none"
//             }}
//           >
//             <style>{`.series-slider::-webkit-scrollbar { display: none; }`}</style>

//             {Object.keys(seriesData).map(series => (
//               <SeriesCard
//                 key={series}
//                 series={series}
//                 subTypes={seriesData[series]}
//                 selectedSeries={selectedSeries}
//                 selectedSubType={selectedSubType}
//                 onSeriesClick={(s) => {
//                   setSelectedSeries(s);
//                   setSelectedSubType(seriesData[s]?.[0] || "");
//                 }}
//                 onSubClick={(s, sub) => {
//                   setSelectedSeries(s);
//                   setSelectedSubType(sub);
//                 }}
//               />
//             ))}
//           </div>

//           <div style={{ ...arrowStyle, right: "8px" }} onClick={slideRight}>›</div>

//         </div>
//       </div>

//     </div>
//   );
// }










// ################### code 28_04_2026 #########################################################



import { useParams } from "react-router-dom";
import { useEffect, useState, useMemo, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Banners
import ptmtBanner from "../assets/images/ptmt.jpg";
import pipesBanner from "../assets/images/Pipes_and_Fittings.jpg";
import sinkBanner from "../assets/images/SinksImage.jpg";
import tankBanner from "../assets/images/water-tank.jpg";
import bathroomBanner from "../assets/images/bathroomAccessories.jpg";
import frpBanner from "../assets/images/frp_manhole_cover.jpg";


// =========================
// COLLAGE
// =========================
function Collage({ products, loading, selectedSubType }) {
  const navigate = useNavigate();

  if (loading) return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "300px",
      fontSize: "14px",
      color: "#adadad",
      letterSpacing: "0.08em",
      fontFamily: "sans-serif"
    }}>
      Loading products...
    </div>
  );

  if (!products.length) return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "200px",
      fontSize: "14px",
      color: "#ff0000",
      fontFamily: "sans-serif"
    }}>
      No products found 😕
    </div>
  );

  const accentColors = [
    "#a5c99a", "#a8b5a2", "#b5a8a8", "#9fafa8",
    "#bfb09a", "#a9a0b5", "#b0bab5", "#c4b0a0"
  ];

  // Show all products (up to 20 max)
  const displayProducts = products.slice(0, 20);
  const n = displayProducts.length;

  // Square-ish grid: cols = ceil(sqrt(n)), rows = ceil(n / cols)
  const cols = Math.ceil(Math.sqrt(n));
  const rows = Math.ceil(n / cols);

  // Empty placeholder cells to fill the last row
  const totalCells = cols * rows;
  const emptyCells = totalCells - n;

  return (
    <>
      <style>{`
        .collage-card .collage-overlay {
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .collage-card:hover .collage-overlay {
          opacity: 1;
        }
        .collage-card img {
          transition: transform 0.5s ease, filter 0.5s ease;
          filter: brightness(0.96) saturate(1.05);
        }
        .collage-card:hover img {
          transform: scale(1.06);
          filter: brightness(1.08) saturate(1.1);
        }
      `}</style>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gap: "1px",
          padding: "1px",
          background: "transparent",
          // Fixed height — fits in viewport without scrolling
          height: "55vh",
          width: "100%",
        }}
      >
        {displayProducts.map((item, index) => {
          let selectedVariant = item.variants?.[0];

          if (selectedSubType) {
            const found = item.variants?.find(
              v =>
                v.subType?.toLowerCase().trim() ===
                selectedSubType.toLowerCase().trim()
            );
            if (found) selectedVariant = found;
          }

          const accent = accentColors[index % accentColors.length];
          const hasImage = !!selectedVariant?.image;

          return (
            <div
              key={item._id}
              className="collage-card"
              onClick={() =>
                navigate(`/product/${selectedVariant?.modelNumber || item.modelNumber}`)
              }
              style={{
                borderRadius: "6px",
                overflow: "hidden",
                cursor: "pointer",
                position: "relative",
                background: "#4e4c4cda",
                boxShadow: "0 1px 5px rgba(0,0,0,0.2)",
              }}
            >
              {hasImage ? (
                <img
                  src={selectedVariant.image}
                  alt={item.modelNumber || ""}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                    display: "block",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: accent,
                    fontSize: "10px",
                    color: "rgba(255,255,255,0.85)",
                    letterSpacing: "0.08em",
                    fontFamily: "sans-serif",
                    textTransform: "uppercase",
                    padding: "4px",
                    textAlign: "center",
                    boxSizing: "border-box",
                  }}
                >
                  {item.modelNumber}
                </div>
              )}

              <div
                className="collage-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "5px 4px 4px",
                }}
              >
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: "8px",
                    fontWeight: "600",
                    letterSpacing: "0.06em",
                    fontFamily: "sans-serif",
                    textTransform: "uppercase",
                    lineHeight: 1.3,
                    textShadow: "0 1px 3px rgba(0,0,0,0.7)",
                  }}
                >
                  {selectedVariant?.modelNumber || item.modelNumber}
                </span>
                {selectedVariant?.subType && (
                  <span
                    style={{
                      color: "rgba(220,220,220,0.85)",
                      fontSize: "6px",
                      letterSpacing: "0.05em",
                      fontFamily: "sans-serif",
                      marginTop: "1px",
                      textTransform: "capitalize",
                    }}
                  >
                    {selectedVariant.subType}
                  </span>
                )}
              </div>
            </div>
          );
        })}

        {/* Empty placeholder cells to fill last row — keeps grid tight */}
        {Array(emptyCells).fill(null).map((_, i) => (
          <div
            key={`empty-${i}`}
            style={{
              borderRadius: "6px",
              background: "transparent",
              visibility: "hidden",
            }}
          />
        ))}
      </div>
    </>
  );
}


// =========================
// SERIES CARD
// =========================
function SeriesCard({
  series,
  subTypes,
  selectedSeries,
  selectedSubType,
  onSeriesClick,
  onSubClick
}) {
  return (
    <div style={{
      minWidth: "260px",
      border: selectedSeries === series ? "2px solid black" : "1px solid #eee",
      borderRadius: "12px",
      padding: "15px",
      background: "#fff",
      flexShrink: 0
    }}>
      <h3 style={{ cursor: "pointer" }} onClick={() => onSeriesClick(series)}>
        {series.toUpperCase()}
      </h3>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        marginTop: "10px"
      }}>
        {subTypes.map(sub => (
          <button
            key={sub}
            onClick={() => onSubClick(series, sub)}
            style={{
              padding: "6px 12px",
              borderRadius: "20px",
              cursor: "pointer",
              fontSize: "12px",
              border: selectedSubType === sub ? "none" : "1px solid #ccc",
              background: selectedSubType === sub ? "black" : "#f5f5f5",
              color: selectedSubType === sub ? "#fff" : "#000000"
            }}
          >
            {sub}
          </button>
        ))}
      </div>
    </div>
  );
}


// =========================
// MAIN COMPONENT
// =========================
export default function ProductList() {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [selectedSeries, setSelectedSeries] = useState("");
  const [selectedSubType, setSelectedSubType] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");

  const sliderRef = useRef(null);
  const autoSlideRef = useRef(null);

  const startAutoSlide = () => {
    autoSlideRef.current = setInterval(() => {
      const el = sliderRef.current;
      if (!el) return;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 280, behavior: "smooth" });
      }
    }, 2500);
  };

  const stopAutoSlide = () => clearInterval(autoSlideRef.current);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const slideLeft = () => {
    stopAutoSlide();
    sliderRef.current?.scrollBy({ left: -280, behavior: "smooth" });
    startAutoSlide();
  };

  const slideRight = () => {
    stopAutoSlide();
    sliderRef.current?.scrollBy({ left: 280, behavior: "smooth" });
    startAutoSlide();
  };

  const seriesData = useMemo(() => ({
    royal: ["royal", "royal elite", "royal green"],
    emerald: ["emerald", "emerald plus", "emerald elite"],
    jade: ["jade", "jade plus", "jade elite"],
    galaxy: ["galaxy", "galaxy elite"],
    ruby: ["RUB"],
    woodlite: ["Woodlite Series"],
    aqua: ["aqua", "elite", "plus"], 
    coral: ["coral", "coral elite"],
    silver: ["silver-1"],
    diamond: ["diamond-1"],
    standard: ["standard-1"],
    gold: ["gold-1"],
    superb: ["superb-1"],
    sona: ["sona-1"]
  }), []);

  const formattedCategory = category?.toLowerCase().replace(/_/g, "-");

  const banners = {
    ptmt: ptmtBanner,
    "pipes-and-fittings": pipesBanner,
    "kitchen-sinks": sinkBanner,
    "water-tank": tankBanner,
    "bathroom-accessories": bathroomBanner,
    "frp-manhole-cover": frpBanner,
  };

  const bannerImage = banners[formattedCategory];

  useEffect(() => {
    setLoading(true);

    axios.get("http://localhost:5000/api/products", {
      params: {
        category: formattedCategory,
        series: selectedSeries || undefined,
        subType: selectedSubType || undefined,
        color: selectedColor || undefined,
      },
    })
      .then(res => setProducts(res.data))
      .catch(console.log)
      .finally(() => setLoading(false));

  }, [formattedCategory, selectedSeries, selectedSubType, selectedColor]);

  const arrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
    background: "#fff",
    border: "1px solid #ddd",
    borderRadius: "50%",
    width: "36px",
    height: "36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    fontSize: "16px",
    userSelect: "none"
  };

  return (
    <div>

      {/* BANNER */}
      <div style={{
        height: "70vh",
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: "32px",
        fontWeight: "bold",
      }}>
        {formattedCategory?.replace(/-/g, " ").toUpperCase()}
      </div>

      {/* FILTER */}
      {(selectedSeries || selectedSubType) && (
        <div style={{ padding: "10px 20px" }}>
          <strong>Selected:</strong> {selectedSeries} {selectedSubType && `> ${selectedSubType}`}
          <button
            onClick={() => {
              setSelectedSeries("");
              setSelectedSubType("");
            }}
            style={{ marginLeft: "10px" }}
          >
            Clear
          </button>
        </div>
      )}

      {/* COLLAGE */}
      <Collage
        products={products}
        loading={loading}
        selectedSubType={selectedSubType}
      />

      {/* SERIES */}
      <div style={{ marginTop: "20px" }}>
        <h2 style={{ paddingLeft: "20px" }}>Browse Series</h2>

        <div style={{ position: "relative", padding: "0 48px" }}>

          <div style={{ ...arrowStyle, left: "8px" }} onClick={slideLeft}>‹</div>

          <div
            ref={sliderRef}
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
            style={{
              display: "flex",
              overflowX: "auto",
              gap: "15px",
              padding: "20px 4px",
              scrollbarWidth: "none",
              msOverflowStyle: "none"
            }}
          >
            <style>{`.series-slider::-webkit-scrollbar { display: none; }`}</style>

            {Object.keys(seriesData).map(series => (
              <SeriesCard
                key={series}
                series={series}
                subTypes={seriesData[series]}
                selectedSeries={selectedSeries}
                selectedSubType={selectedSubType}
                onSeriesClick={(s) => {
                  setSelectedSeries(s);
                  setSelectedSubType(seriesData[s]?.[0] || "");
                }}
                onSubClick={(s, sub) => {
                  setSelectedSeries(s);
                  setSelectedSubType(sub);
                }}
              />
            ))}
          </div>

          <div style={{ ...arrowStyle, right: "8px" }} onClick={slideRight}>›</div>

        </div>
      </div>

    </div>
  );
}




