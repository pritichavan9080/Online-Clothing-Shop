
import { useEffect, useState } from "react";
import axios from "axios";
import "./UserDashboard.css";

const UserDashboard = () => {
  const [products, setProducts] = useState([]);

  // 🔹 Fetch products for USER dashboard
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:9080/api/products/users"
      );

      // ✅ Map backend fields correctly
      const formattedProducts = res.data.map((p) => ({
        id: p.id,
        name: p.name,
        description: p.description,
        price: p.price,
        size: p.size,
        image: `http://localhost:9080/uploads/${p.imagePath}`, // ✅ FIXED
      }));

      setProducts(formattedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // 🔹 Add product to cart
  const handleAddToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingIndex !== -1) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({
        ...product,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart`);
  };

  return (
    <div className="user-dashboard">
      <h1>Welcome to our Store</h1>

      <div className="product-grid">
        {products.length === 0 ? (
          <p>No products available</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
                onError={(e) => {
                  e.target.src = "/images/no-image.png";
                }}
              />

              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p className="price">₹{product.price}</p>
               {/* Display size */}
  <p className="size">Size: {product.size}</p>

  


              <button
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
