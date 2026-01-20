
import { useState } from "react";
import "./UpdateStock.css";

const UpdateStock = ({ product, onClose, onSave }) => {
  const [changeQty, setChangeQty] = useState(0);
  const [type, setType] = useState("add");

  const handleSave = () => {
    let newQty =
      type === "add"
        ? product.quantity + Number(changeQty)
        : product.quantity - Number(changeQty);

    if (newQty < 0) newQty = 0;

    onSave(newQty);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h3>Update Stock</h3>

        <p><b>Product:</b> {product.product}</p>
        <p><b>SKU:</b> {product.sku}</p>
        <p><b>Current Stock:</b> {product.quantity}</p>

        <label>Update Type</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="add">Add Stock</option>
          <option value="reduce">Reduce Stock</option>
        </select>

        <label>Quantity</label>
        <input
          type="number"
          value={changeQty}
          onChange={(e) => setChangeQty(e.target.value)}
        />

        <div className="modal-actions">
          <button className="btn cancel" onClick={onClose}>Cancel</button>
          <button className="btn save" onClick={handleSave}>Update</button>
        </div>
      </div>
    </div>
  );
};

export default UpdateStock;
