
import React from "react";

const ProductCard = ({ product }) => {
  const backendImageUrl = "http://localhost:9080/images/";

  // Only set src if product.image exists
  const imageUrl = product.image ? `${backendImageUrl}${product.image}` : "";

  return (
    <div className="border p-3 rounded shadow-sm">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={product.name}
          className="w-full h-40 object-cover rounded"
        />
      ) : (
        <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded text-gray-500">
          No Image
        </div>
      )}

      <h3 className="mt-2 font-semibold text-lg">{product.name}</h3>
      <p className="text-sm text-gray-600 mt-1">{product.description}</p>
      <p className="mt-2 font-bold text-gray-800">${product.price}</p>
      <p className="mt-1 text-sm text-gray-500">Size: {product.size}</p>
    </div>
  );
};

export default ProductCard;
