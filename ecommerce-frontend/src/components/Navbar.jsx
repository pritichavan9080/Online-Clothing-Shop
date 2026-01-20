
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { name: "KURTAS & KURTIS", path: "/category/kurtas-kurtis" },
    { name: "DRESSES", path: "/category/dresses" },
    { name: "ETHNIC SETS WITH DUPATTA", path: "/category/ethnic-sets" },
    { name: "ETHNIC SETS", path: "/category/ethnic-sets-only" },
    { name: "CO-ORDS", path: "/category/co-ords" },
    { name: "STOLES", path: "/category/stoles" },
    { name: "FLAT 999", path: "/category/flat-999" },
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setShowSearch(false);
    }
  };

  return (
    <header className="navbar">
      {/* Left Logo */}
      <div className="navbar-logo" onClick={() => navigate("/")}>
        <span className="logo-icon">श्री</span>
        <span className="logo-text">RAM</span>
      </div>

      {/* Center Menu */}
      <nav className="navbar-menu">
        {/* Home Icon */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-item home-icon active" : "nav-item home-icon"
          }
          title="Home"
        >
          🏠
        </NavLink>

        {categories.map((cat) => (
          <NavLink
            key={cat.name}
            to={cat.path}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            {cat.name}
          </NavLink>
        ))}
      </nav>

      {/* Right Icons */}
      <div className="navbar-icons">
        <span className="icon" onClick={() => navigate("/login")} title="Login">
          Login
        </span>

        {/* Search Icon */}
        {/* <span
          className="icon"
          title="Search"
          onClick={() => setShowSearch(!showSearch)}
        >
          🔍
        </span>

        {showSearch && (
          <form className="search-form" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
          </form>
        )} */}

        <span className="icon" onClick={() => navigate("/cart")} title="Cart">

          🛒
        </span>

        <select className="currency">
          <option>INR</option>
          {/* <option>USD</option> */}
        </select>
        <span className="icon" onClick={() => navigate("/MyOrdersPage")} title="MYOrder">🛍️</span>
        
      </div>
    </header>
  );
}
