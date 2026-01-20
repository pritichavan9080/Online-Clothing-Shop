import { useState } from "react";
import "./ViewStock.css";

const AddProductModal = ({ onClose, onSave, sizeOptions, colorOptions }) => {
  const [newProduct, setNewProduct] = useState({
    product: "",
    category: "",
    size: "",
    color: "",
    quantity: 0,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: name === "quantity" ? parseInt(value) || 0 : value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!newProduct.product.trim()) {
      alert("Product name is required!");
      return;
    }
    if (!newProduct.size || !newProduct.color) {
      alert("Size and Color are required!");
      return;
    }
    if (newProduct.quantity < 0) {
      alert("Quantity cannot be negative!");
      return;
    }

    // Call parent save function
    onSave(newProduct);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h3>Add New Product</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Product Name *</label>
            <input
              type="text"
              name="product"
              value={newProduct.product}
              onChange={handleChange}
              placeholder="Enter product name"
              required
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <select
              name="category"
              value={newProduct.category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option value="Ethnic Wear">Ethnic Wear</option>
              <option value="Women">Women</option>
              <option value="Men">Men</option>
              <option value="Kids">Kids</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Size *</label>
              <select
                name="size"
                value={newProduct.size}
                onChange={handleChange}
                required
              >
                <option value="">Select Size</option>
                {sizeOptions.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Color *</label>
              <select
                name="color"
                value={newProduct.color}
                onChange={handleChange}
                required
              >
                <option value="">Select Color</option>
                {colorOptions.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Quantity *</label>
            <input
              type="number"
              name="quantity"
              value={newProduct.quantity}
              onChange={handleChange}
              min="0"
              required
            />
          </div>

          <div className="modal-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="save-btn">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
