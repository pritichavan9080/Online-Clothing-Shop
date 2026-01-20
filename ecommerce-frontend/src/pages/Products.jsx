
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../api/api";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // ✅ Fetch products added by CLIENT (admin)
    getProducts().then(res => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">New Arrivals</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map(prod => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
};

export default Products;
