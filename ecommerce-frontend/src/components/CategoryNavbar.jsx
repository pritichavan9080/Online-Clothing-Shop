
import React from "react";
import { useNavigate } from "react-router-dom";
import "./CategoryNavbar.css";

const CategoryNavbar = ({ productCount }) => {
  const navigate = useNavigate();

  return (
    <div className="category-navbar">
      {/* Left Icons */}
      <div className="navbar-left">
        {/* Home icon navigates to home page */}
        <button className="icon-btn" onClick={() => navigate("/")}>
          <img src="/icons/home.svg" alt="Home" />
        </button>

        {/* Other icons (wishlist, cart, etc.) */}
        <button className="icon-btn">
          <img src="/icons/categories.svg" alt="Categories" />
        </button>
        <button className="icon-btn">
          <img src="/icons/wishlist.svg" alt="Wishlist" />
        </button>
        <button className="icon-btn">
          <img src="/icons/cart.svg" alt="Cart" />
        </button>
      </div>

      {/* Center Product Count */}
      <div className="product-count">{productCount} PRODUCTS</div>

      {/* Right Sort & Filter */}
      <div className="category-actions">
        <select className="sort-select">
          <option>Sort By</option>
          <option>Price Low to High</option>
          <option>Price High to Low</option>
          <option>Newest</option>
        </select>
        <button className="filter-btn">Filter</button>
      </div>
    </div>
  );
};

export default CategoryNavbar;
