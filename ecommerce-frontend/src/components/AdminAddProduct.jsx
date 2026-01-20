
import { useEffect, useState } from "react";
import axios from "axios";
import "./AdminAddProduct.css";

const AdminAddProduct = () => {
  const [categories, setCategories] = useState([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [size, setSize] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [image, setImage] = useState(null);

  const sizes = ["S", "M", "L", "XL", "XXL"];

  // ================= FETCH CATEGORIES =================
  useEffect(() => {
    axios
      .get("http://localhost:9080/api/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err));
  }, []);

  // ================= SUBMIT PRODUCT =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!size) return alert("Please select size");
    if (!image) return alert("Please select image");
    if (!categoryId) return alert("Please select category");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("size", size);
    formData.append("categoryId", categoryId);
    formData.append("image", image);

    try {
      const res = await axios.post(
        "http://localhost:9080/api/products",
        formData
      );

      // ✅ BACKEND RETURNS STRING
      alert(res.data);

      // RESET FORM
      setName("");
      setDescription("");
      setPrice("");
      setStock("");
      setSize("");
      setCategoryId("");
      setImage(null);

    } catch (err) {
      console.error(err);
      alert("Server Error");
    }
  };

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <select
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
        required
      >
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>

      {/* SIZE SELECTION */}
      <div className="size-wrapper">
        <label>Size</label>
        <div className="size-container">
          {sizes.map((s) => (
            <button
              key={s}
              type="button"
              className={size === s ? "size-btn active" : "size-btn"}
              onClick={() => setSize(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <input
        type="number"
        placeholder="Price"
        value={price}
        step="100"
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Stock Quantity"
        value={stock}
        step="1"
        onChange={(e) => setStock(e.target.value)}
        required
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        required
      />

      <button type="submit">Add Product</button>
    </form>
  );
};

export default AdminAddProduct;
