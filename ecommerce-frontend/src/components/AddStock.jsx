import { useState } from "react";
import axios from "axios";

const AddStock = () => {
  const [form, setForm] = useState({
    productId: "",
    size: "",
    color: "",
    quantity: "",
    minStock: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addStock = async () => {
    await axios.post("http://localhost:9080/api/admin/stock/add", form);
    alert("Stock Added");
  };

  return (
    <div>
      <h3>Add Stock</h3>

      <input name="productId" placeholder="Product ID" onChange={handleChange} />
      <input name="size" placeholder="Size" onChange={handleChange} />
      <input name="color" placeholder="Color" onChange={handleChange} />
      <input name="quantity" placeholder="Quantity" onChange={handleChange} />
      <input name="minStock" placeholder="Min Stock" onChange={handleChange} />

      <button onClick={addStock}>Add Stock</button>
    </div>
  );
};

export default AddStock;
