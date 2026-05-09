
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import BecomeDealer from "./pages/BecomeDealer";
import BecomeDistributor from "./pages/BecomeDistributor";
import Blog from "./pages/Blog";
import { Routes, Route } from "react-router-dom";

import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";

import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail"; // OLD SYSTEM

// import ProductTemplate from "./templates/ProductTemplate"; // NEW SYSTEM
// import CategoryPage from "./pages/CategoryPage";

import ProductTemplate from "./templates/ProductTemplate"; // NEW SYSTEM



function App() {
  return (
    <div className="flex flex-col min-h-screen">

      <Navbar />

      <div className="flex-grow">
        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={
              <div className="w-full overflow-x-hidden">
                <Hero />
                <Section1 />
                <Section2 />
                <Section3 />
              </div>
            }
          />

          {/* ABOUT */}
          <Route path="/about" element={<About />} />
           {/* CONTACT */}
          <Route path="/contact" element={<ContactUs />} />

          <Route path="/become-dealer" element={<BecomeDealer />} />
          <Route path="/become-distributor" element={<BecomeDistributor />}/>
          <Route path="/blog" element={<Blog />} />


          {/* CATEGORY */}
          <Route path="/products/:category" element={<ProductList />} />

          {/* OLD DETAIL SYSTEM */}
          <Route path="/product/:id" element={<ProductDetail />} />

         

          <Route path="/catalog/:category/:slug" element={<ProductTemplate />} />
          

        </Routes>
      </div>

      <Footer />

    </div>
  );
}

export default App;
