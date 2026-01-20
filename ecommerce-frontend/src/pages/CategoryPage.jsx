
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./CategoryPage.css";

// Example product data
const productData = {
  "kurtas-kurtis": [
    { id: 1, img: "/images/kurta1.jpg", name: "Navy Blue Solid Straight Kurta", discount: "50%", price: 999 },
    { id: 2, img: "/images/kurta2.jpg", name: "Stylish Red Kurti", discount: "40%", price: 899 },
    { id: 3, img: "/images/kurta3.jpg", name: "Green Kurta", discount: "30%", price: 799 },
    { id: 4, img: "/images/kurta4.jpg", name: "Yellow Kurta", discount: "20%", price: 699 },
    { id: 5, img: "/images/kurta5.jpg", name: "Pink Kurta", discount: "25%", price: 749 },
    { id: 6, img: "/images/kurta6.jpg", name: "Purple Kurta", discount: "15%", price: 849 },
    { id: 7, img: "/images/kurta7.jpg", name: "Orange Kurta", discount: "25%", price: 949 },
    { id: 8, img: "/images/kurta8.jpg", name: "White Kurta", discount: "10%", price: 999 },
  ],
  dresses: [
    { id: 1, img: "/images/dress1.jpg", name: "Dress 1", discount: "20%", price: 1299 },
    { id: 2, img: "/images/dress2.jpg", name: "Dress 2", discount: "30%", price: 1499 },
    { id: 3, img: "/images/dress3.jpg", name: "Dress 3", discount: "25%", price: 1299 },
    { id: 4, img: "/images/dress4.jpg", name: "Dress 4", discount: "15%", price: 1399 },
    { id: 5, img: "/images/dress5.jpg", name: "Dress 5", discount: "10%", price: 1199 },
    { id: 6, img: "/images/dress6.jpg", name: "Dress 6", discount: "35%", price: 1599 },
    { id: 7, img: "/images/dress7.jpg", name: "Dress 7", discount: "40%", price: 1699 },
    { id: 8, img: "/images/dress8.jpg", name: "Dress 8", discount: "20%", price: 1399 },
  ],
  ethnic_sets_with_dupatta: [
    { id: 1, img: "/images/pic1.jpg", name: "ethnic set 1", discount: "5%", price: 1999 },
    { id: 2, img: "/images/pic2.jpg", name: "ethnic set 2", discount: "15%", price: 1499 },
    
  ],
};

const CategoryPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const products = name && productData[name] ? productData[name] : [];

  // 
  
const handleAddToCart = (product) => {
  const user = localStorage.getItem("user");

  if (!user || user === "null" || user === "undefined") {
    alert("Please login to add products to cart"); // popup
    navigate("/login"); // redirect
    return; // stop here, prevents "added to cart"
  }
alert("Please login to add products to cart");
  // Only logged-in users reach here
  //
};




  return (
    <div className="category-page">
      {/* Navbar */}
      <div className="category-navbar">
        <div className="left-space breadcrumb">
          <Link to="/" className="home-link">Home</Link>
        </div>

        <div className="product-count">{products.length} PRODUCTS</div>

        
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <span className="discount-badge">{product.discount} OFF</span>

            <div className="product-image">
              <img src={product.img} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
            </div>

           {/* ADD TO CART BUTTON*/}
            <button
              className="add-to-cart-btn"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>

            
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
