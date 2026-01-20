
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

import BannerSlider from "../components/BannerSlider";
import ProductCard from "../components/ProductCard";
import FreshDrop from "../components/FreshDrop";
import Features from "../components/Features";
import CelebrationSection from "../components/CelebrationSection";

import { getProducts } from "../api/api";

// Banner images
import img2 from "../assets/img2.jpg";
import img1 from "../assets/img1.jpg";
import img8 from "../assets/img8.jpg";

const banners = [
  { imageUrl: img2, title: "Banner 1" },
  { imageUrl: img1, title: "Banner 2" },
  { imageUrl: img8, title: "Banner 3" },
];

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products", err));
  }, []);

  return (
    <div>
      {/* 🔹 HERO / BANNER */}
      <BannerSlider banners={banners} />

      {/* ⭐ FRESH DROP SECTION */}
      <FreshDrop />

      {/* 🔹 PRODUCTS GRID */}
      <section className="p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.slice(0, 8).map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
        {/* VIEW ALL BUTTON (CENTERED) */}
<div className="view-all-container">
  <button
    onClick={() => navigate("/products")}
    className="view-all-btn"
  >
    VIEW ALL
  </button>
</div>


        {/* 🔘 VIEW ALL BUTTON (CENTERED – SHREE.COM STYLE)
        <div className="flex justify-center my-14">
          <button
            onClick={() => navigate("/products")}
            className="bg-black text-white px-12 py-3 text-sm tracking-widest uppercase hover:bg-gray-900 transition"
          >
            VIEW ALL
          </button>
        </div> */}
      </section>

      {/* 🎉 CELEBRATION SECTION */}
      <CelebrationSection />

      {/* ✅ FEATURES */}
      <Features />
    </div>
  );
};

export default Home;
